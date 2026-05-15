import {
  useState,
  useEffect
} from "react";
import AdminLayout from "../../../layouts/mobile/Admin";
import BundleCardSkeleton from "../../../components/web/BundleCardSkeleton";
import {
  getBundles,
  createBundle,
  updateBundle,
  deleteBundle
} from "../../../api/BundleApi";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaWifi,
  FaSearch
} from "react-icons/fa";

function Bundles() {
  // ADD THESEES



  const [loading,
    setLoading] = useState(false);
  const [bundles,
    setBundles] = useState([]);
  useEffect(() => {
    const fetchBundles = async () => {

      try {
        setLoading(true);

        const res =
        await getBundles();

        setBundles(
          res.data
        );

      } catch (error) {
        alert(error)
        showToast(
          "error",
          "Failed to load bundles"
        );

      } finally {

        setLoading(false);

      }

    };
    fetchBundles();
  }, []);



  const [toast,
    setToast] = useState(null);
  const [confirmDelete,
    setConfirmDelete] = useState(null);
  const [typeFilter,
    setTypeFilter] =
  useState("All");
  const [saving,
    setSaving] = useState(false);
  const [deleting,
    setDeleting] = useState(false);
  const [durationFilter,
    setDurationFilter] =
  useState("All");
  const [open,
    setOpen] = useState(false);



  const [formData,
    setFormData] = useState( {
      type: "",
      name: "",
      network: "",
      price: "",
      validity: "",
      duration: ""
    });

  const [editingId,
    setEditingId] = useState(null);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    try {
      setSaving(true);


      if (editingId) {

        const res =
        await updateBundle(
          editingId,
          formData
        );
        alert(JSON.stringify(res.data))
        setBundles(
          bundles.map((bundle) =>

            bundle.id === editingId
            ? res.data: bundle
          )
        );
        showToast("success", "Bundle updated successfully");
      } else {

        const newBundle = {
          id: Date.now(),
          ...formData
        };

        const res =
        await createBundle(formData);


        setBundles([
          ...bundles,
          res.data
        ]);
        showToast("success", "Bundle added successfully");
      }

      setFormData({
        type: "",
        name: "",
        network: "",
        price: "",
        validity: "",
        duration: ""
      });

      setEditingId(null);

      setOpen(false);

    } catch (error) {

      showToast("error", "Something went wrong");

    } finally {

      setSaving(false);

    }

  };
  const showToast = (type, message) => {
    setToast({
      type, message
    });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };
  const confirmDeleteAction = async() => {
    try {
      setDeleting(true);

      await deleteBundle(confirmDelete);

      setBundles(
        bundles.filter(
          (b) => b.id !== confirmDelete
        )
      );
      setConfirmDelete(null);

      showToast("success", "Bundle deleted successfully");
    } catch (error) {
      showToast("error", "Failed to delete bundle");
    }finally {

      setDeleting(false);

    }
  };
  const handleDeleteClick = (id) => {
    setConfirmDelete(id);
  };
  const handleEdit = (bundle) => {

    setEditingId(bundle.id);
    alert(bundle.id)

    setFormData(bundle);

    setOpen(true);

  };
  const filteredBundles = bundles.filter(
    (bundle)=> {

      const typeMatch =

      typeFilter === "All" || bundle.type === typeFilter;

      const durationMatch =

      durationFilter === "All" || bundle.duration === durationFilter;

      return typeMatch && durationMatch;

    }
  );
  const spinnerAnimation = `
  @keyframes spin {
  0% {
  transform: rotate(0deg);
  }

  100% {
  transform: rotate(360deg);
  }
  }
  `;



  return (
    <>
      <style>
        {spinnerAnimation}
      </style>
      <AdminLayout>
        <div style={styles.page}>

          {/* HEADER */}

          <div style={styles.header}>

            <div>

              <h1 style={styles.title}>
                Bundles
              </h1>

              <p style={styles.subtitle}>
                Manage all network bundles
              </p>

            </div>

            <button
              style={styles.addButton}
              onClick={()=>setOpen(true)}
              >

              <FaPlus />

              Add Bundle

            </button>

          </div>

          {/* FILTER SECTION */}

          <div style={styles.filterContainer}>

            {/* TYPE FILTER */}

            <div style={styles.filterGroup}>

              {
              [
                "All",
                "Bundles",
                "Minutes",
                "SMS"
              ].map((item)=>(

                  <button
                    key={item}

                    onClick={()=>
                    setTypeFilter(item)
                    }

                    style={ {
                      ...styles.filterButton,

                      background:
                      typeFilter === item
                      ? "#5B3DF5": "white",

                      color:
                      typeFilter === item
                      ? "white": "#0f172a"
                    }}
                    >

                    {item}

                  </button>

                ))
              }

            </div>

            {/* DURATION FILTER */}

            <div style={styles.filterGroup}>

              {
              [
                "All",
                "Hourly",
                "Daily",
                "Weekly",
                "Monthly"
              ].map((item)=>(

                  <button
                    key={item}

                    onClick={()=>
                    setDurationFilter(item)
                    }

                    style={ {
                      ...styles.filterButton,

                      background:
                      durationFilter === item
                      ? "#5B3DF5": "white",

                      color:
                      durationFilter === item
                      ? "white": "#0f172a"
                    }}
                    >

                    {item}

                  </button>

                ))
              }

            </div>

          </div>
          {/* GRID */}

          <div style={styles.grid}>
            {
            loading ? (

              [...Array(6)].map((_, index) => (
                <BundleCardSkeleton key={index} />
              ))

            ): (

              filteredBundles.map((bundle)=>(

                <div
                  key={bundle.id}
                  style={styles.card}
                  >

                  <div style={styles.cardTop}>

                    <div style={styles.networkIcon}>

                      <FaWifi />

                    </div>

                    <div style={styles.badge}>

                      {bundle.network}

                    </div>

                  </div>

                  <h2 style={styles.bundleName}>
                    {bundle.name}
                  </h2>

                  <p style={styles.price}>
                    Ksh {bundle.price}
                  </p>

                  <p style={styles.validity}>
                    {bundle.validity}
                  </p>

                  <div style={styles.actions}>

                    <button
                      style={styles.editButton}
                      onClick={()=>
                      handleEdit(bundle)
                      }
                      >

                      <FaEdit />

                      Edit

                    </button>

                    <button
                      style={styles.deleteButton}
                      onClick={() => handleDeleteClick(bundle.id)}
                      >

                      <FaTrash />

                      Delete

                    </button>

                  </div>

                </div>

              ))
            )}
          </div>
          {
          /* MODAL */
          }

          {
          open && (

            <div style={styles.overlay}
              >

              <div style={styles.modal}>

                {/* MODAL HEADER */}

                <div style={styles.modalHeader}>

                  <div>

                    <h2>

                      {
                      editingId
                      ? "Edit Bundle": "Add Bundle"
                      }

                    </h2>

                    <p style={styles.modalText}>
                      Fill bundle details below
                    </p>

                  </div>

                  <button
                    style={styles.closeButton}
                    onClick={()=> {
                      setOpen(false);
                      setEditingId(null);
                    }}
                    >
                    ✕
                  </button>

                </div>

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  >

                  <div style={styles.formGrid}>

                    {/* NETWORK */}

                    <div style={styles.group}>

                      <label>
                        Type
                      </label>

                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        style={styles.input}
                        >

                        <option value="">
                          Select Type
                        </option>

                        <option>
                          Bundles
                        </option>

                        <option>
                          Minutes
                        </option>

                        <option>
                          Sms
                        </option>

                      </select>

                    </div>


                    {/* NETWORK */}

                    <div style={styles.group}>

                      <label>
                        Duration
                      </label>

                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        style={styles.input}
                        >

                        <option value="">
                          Select Duration
                        </option>

                        <option>
                          Hourly
                        </option>
                        <option>
                          Daily
                        </option>
                        <option>
                          Weekly
                        </option>

                        <option>
                          Monthly
                        </option>

                      </select>

                    </div>

                    {/* NAME */}

                    <div style={styles.group}>

                      <label>
                        Bundle Name
                      </label>

                      <input
                      type="text"
                      name="name"
                      placeholder="1GB Daily"
                      value={formData.name}
                      onChange={handleChange}
                      style={styles.input}
                      />

                  </div>

                  {/* NETWORK */}

                  <div style={styles.group}>

                    <label>
                      Network
                    </label>

                    <select
                      name="network"
                      value={formData.network}
                      onChange={handleChange}
                      style={styles.input}
                      >

                      <option value="">
                        Select Network
                      </option>

                      <option>
                        Safaricom
                      </option>

                      <option>
                        Airtel
                      </option>

                      <option>
                        Telkom
                      </option>

                    </select>

                  </div>

                  {/* PRICE */}

                  <div style={styles.group}>

                    <label>
                      Price
                    </label>

                    <input
                    type="number"
                    name="price"
                    placeholder="50"
                    value={formData.price}
                    onChange={handleChange}
                    style={styles.input}
                    />

                </div>

                {/* VALIDITY */}

                <div style={styles.group}>

                  <label>
                    Validity
                  </label>

                  <input
                  type="text"
                  name="validity"
                  placeholder="24 Hours"
                  value={formData.validity}
                  onChange={handleChange}
                  style={styles.input}
                  />

              </div>

            </div>

            {/* ACTIONS */}

            <div style={styles.modalActions}>

              <button
                type="button"
                style={styles.cancelButton}
                onClick={()=> {
                  setOpen(false);
                  setEditingId(null);
                }}
                >

                Cancel

              </button>
              <button
                type="submit"
                style={ {
                  ...styles.saveButton,
                  opacity: saving ? 0.7: 1
                }}
                disabled={saving}
                >
                {saving ? (
                  <div style={styles.spinner}></div>
                ): (
                  editingId
                  ? "Update Bundle": "Save Bundle"
                )}
              </button>

            </div>

          </form>

        </div>

      </div>

    )
    }
    {
    confirmDelete && (
      <div style={styles.overlay} onClick={() => setConfirmDelete(null)}>
        <div style={styles.confirmModal} onClick={(e) => e.stopPropagation()}>

          <h2 style={ { marginBottom: "10px" }}>
            Confirm Delete
          </h2>

          <p style={ { color: "#64748b", marginBottom: "20px" }}>
            Are you sure you want to delete this bundle? This action cannot be undone.
          </p>

          <div style={ { display: "flex", gap: "10px", justifyContent: "flex-end" }}>

            <button
              style={styles.cancelButton}
              onClick={() => setConfirmDelete(null)}
              >
              Cancel
            </button>
            <button
              style={ {
                ...styles.deleteConfirmButton,
                opacity: deleting ? 0.7: 1
              }}
              onClick={confirmDeleteAction}
              disabled={deleting}
              >
              {deleting ? (
                <div style={styles.spinner}></div>
              ): (
                "Delete"
              )}
            </button>

          </div>

        </div>
      </div>
    )} < /div>
    {
    toast && (
      <div style={ {
        ...styles.toast,
        background: toast.type === "success" ? "#16a34a": "#ef4444"
      }}>
        {toast.message}
      </div>
    )} < /AdminLayout> < / >
    );
    }

    const styles = {
    spinner: {
      width: "18px",
      height: "18px",
      border: "2px solid rgba(255,255,255,0.4)",
      borderTop: "2px solid white",
      borderRadius: "50%",
      animation: "spin 0.7s linear infinite"
    },
    page: {
      minHeight: "100vh",
      background: "#f8fafc",
      padding: "30px"
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      flexWrap: "wrap",
      gap: "20px"
    },

    title: {
      fontSize: "32px",
      color: "#0f172a"
    },

    subtitle: {
      color: "#64748b",
      marginTop: "5px"
    },

    addButton: {
      background: "#5B3DF5",
      color: "white",
      border: "none",
      padding: "14px 20px",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px"
    },

    searchBox: {
      background: "white",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "14px 18px",
      borderRadius: "16px",
      marginBottom: "30px",
      boxShadow: "0 2px 10px rgba(0,0,0,.04)"
    },

    searchInput: {
      border: "none",
      outline: "none",
      width: "100%",
      fontSize: "15px"
    },

    grid: {
      display: "grid",
      gridTemplateColumns:
      "repeat(2, 1fr)",
      gap: "25px"
    },

    card: {
      background: "white",
      padding: "24px",
      borderRadius: "24px",
      boxShadow: "0 2px 12px rgba(0,0,0,.05)"
    },

    cardTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px"
    },

    networkIcon: {
      width: "55px",
      height: "55px",
      borderRadius: "18px",
      background: "#ede9fe",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#5B3DF5",
      fontSize: "22px"
    },

    badge: {
      background: "#f1f5f9",
      padding: "8px 14px",
      borderRadius: "30px",
      fontSize: "13px",
      fontWeight: "600",
      color: "#475569"
    },

    bundleName: {
      fontSize: "22px",
      marginBottom: "12px",
      color: "#0f172a"
    },

    price: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#5B3DF5",
      marginBottom: "10px"
    },

    validity: {
      color: "#64748b",
      marginBottom: "25px"
    },

    actions: {
      display: "flex",
      gap: "12px"
    },

    editButton: {
      flex: 1,
      background: "#ede9fe",
      color: "#5B3DF5",
      border: "none",
      padding: "12px",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontWeight: "600"
    },

    deleteButton: {
      flex: 1,
      background: "#fee2e2",
      color: "#ef4444",
      border: "none",
      padding: "12px",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontWeight: "600"
    },

    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.45)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      zIndex: 1000
    },

    modal: {
      width: "620px",
      background: "white",
      borderRadius: "28px",
      padding: "30px"
    },

    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px"
    },

    modalText: {
      color: "#64748b",
      marginTop: "5px"
    },

    closeButton: {
      width: "40px",
      height: "40px",
      borderRadius: "12px",
      border: "none",
      background: "#f1f5f9",
      cursor: "pointer",
      fontSize: "18px"
    },

    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px"
    },

    group: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    },

    input: {
      padding: "14px",
      border: "1px solid #e2e8f0",
      borderRadius: "14px",
      fontSize: "15px",
      outline: "none",
      background: "#fafafa"
    },

    modalActions: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "15px",
      marginTop: "30px"
    },

    cancelButton: {
      background: "#f1f5f9",
      border: "none",
      padding: "14px 20px",
      borderRadius: "14px",
      cursor: "pointer",
      fontWeight: "600"
    },

    saveButton: {
      background: "#5B3DF5",
      color: "white",
      border: "none",
      padding: "14px 22px",
      borderRadius: "14px",
      cursor: "pointer",
      fontWeight: "600"
    },
filterContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      marginBottom: "25px"
    },

    filterGroup: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    },

    filterButton: {
      border: "none",
      padding: "12px 18px",
      borderRadius: "14px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow:
      "0 2px 8px rgba(0,0,0,.04)"
    },
    toast: {
      position: "fixed",
      bottom: "90px",
      right: "20px",
      color: "white",
      padding: "14px 18px",
      borderRadius: "12px",
      fontWeight: "600",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      zIndex: 2000,
      animation: "fadeIn 0.3s ease"
    },

    confirmModal: {
      width: "380px",
      background: "white",
      borderRadius: "18px",
      padding: "25px"
    },

    deleteConfirmButton: {
      background: "#ef4444",
      color: "white",
      border: "none",
      padding: "12px 18px",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600"
    }
    };

    export default Bundles;