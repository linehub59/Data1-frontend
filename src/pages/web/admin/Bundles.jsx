import {
  useState
} from "react";
import AdminLayout from "../../../layouts/web/Admin";

import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaWifi,
  FaSearch
} from "react-icons/fa";

function Bundles() {
  // ADD THESEES

  const [typeFilter,
    setTypeFilter] =
  useState("Bundles");

  const [durationFilter,
    setDurationFilter] =
  useState("All");
  const [open,
    setOpen] = useState(false);

  const [bundles,
    setBundles] = useState([{
      id: 1,
      type: "Bundles",
      name: "1GB Hourly",
      network: "Safaricom",
      price: "20",
      validity: "1 Hour",
      duration: "Hourly"
    },

      {
        id: 2,
        type: "Bundles",
        name: "1GB Daily",
        network: "Safaricom",
        price: "50",
        validity: "24 Hours",
        duration: "Daily"
      },

      {
        id: 3,
        type: "Minutes",
        name: "100 Minutes",
        network: "Airtel",
        price: "100",
        validity: "7 Days",
        duration: "Weekly"
      },

      {
        id: 4,
        type: "SMS",
        name: "500 SMS",
        network: "Safaricom",
        price: "50",
        validity: "30 Days",
        duration: "Monthly"
      }]);

  const [formData,
    setFormData] = useState( {
      name: "",
      network: "",
      price: "",
      validity: ""
    });

  const [editingId,
    setEditingId] = useState(null);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editingId) {

      setBundles(
        bundles.map((bundle)=>

          bundle.id === editingId
          ? {
            ...bundle,
            ...formData
          }: bundle
        )
      );

    } else {

      const newBundle = {
        id: Date.now(),
        ...formData
      };

      setBundles([
        ...bundles,
        newBundle
      ]);

    }

    setFormData({
      name: "",
      network: "",
      price: "",
      validity: ""
    });

    setEditingId(null);

    setOpen(false);

  };

  const handleDelete = (id) => {

    setBundles(
      bundles.filter(
        (bundle)=>bundle.id !== id
      )
    );

  };

  const handleEdit = (bundle) => {

    setEditingId(bundle.id);

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
  return (
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
                onClick={()=>
                handleDelete(bundle.id)
                }
                >

                <FaTrash />

                Delete

              </button>

            </div>

          </div>

        ))
        }

      </div>

      {/* MODAL */}

      {
      open && (

        <div style={styles.overlay}>

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
            style={styles.saveButton}
            >

            {
            editingId
            ? "Update Bundle": "Save Bundle"
            }

          </button>

        </div>

      </form>

    </div>

  </div>

)
}

</div>
</AdminLayout>
);
}

const styles = {

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
"repeat(auto-fit,minmax(280px,1fr))",
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
width: "500px",
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
}
};

export default Bundles;