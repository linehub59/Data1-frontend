import {
  useState,
  useEffect
} from "react";
import BundleCardSkeleton from "../../../components/web/BundleCardSkeleton";
import AdminLayout from "../../../layouts/mobile/Admin";

import {
  FaWifi,
  FaTimes,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

import {
  getBundles
} from "../../../api/BundleApi";

function User() {

  const [bundles,
    setBundles] =
  useState([]);

  const [loading,
    setLoading] =
  useState(true);

  const [selectedBundle,
    setSelectedBundle] =
  useState(null);

  const [buyModal,
    setBuyModal] =
  useState(false);
  const [typeFilter,
    setTypeFilter] =
  useState("All");

  const [durationFilter,
    setDurationFilter] =
  useState("All");
  const [pinModal,
    setPinModal] =
  useState(false);

  const [successModal,
    setSuccessModal] =
  useState(false);

  const [failedModal,
    setFailedModal] =
  useState(false);

  const [buyType,
    setBuyType] =
  useState("self");

  const [formData,
    setFormData] =
  useState( {
    receiverNumber: "",
    payerNumber: ""
  });

  useEffect(() => {

    const fetchBundles =
    async() => {

      try {

        const res =
        await getBundles();

        setBundles(res.data);

      } catch(error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchBundles();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });

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
  const handleBuy = () => {

    setBuyModal(false);

    setPinModal(true);

    setTimeout(() => {

      setPinModal(false);

      const success =
      Math.random() > 0.3;

      if (success) {

        setSuccessModal(true);

      } else {

        setFailedModal(true);

      }

    },
      3000);

  };

  return(

    <AdminLayout>

      <div style={styles.page}>
        {/* TOP HEADER */}

        <div style={styles.topHeader}>

          <div style={styles.brandSection}>

            <div style={styles.logo}>

              u

            </div>

            <div>

              <h1 style={styles.brandName}>
                upenflow
              </h1>

              <p style={styles.brandSubtext}>
                Fast & Secure Bundles
              </p>

            </div>

          </div>

        </div>

        {/* WELCOME CARD */}

        <div style={styles.welcomeCard}>

          <div>

            <h1 style={styles.welcomeTitle}>
              Welcome 👋
            </h1>

            <p style={styles.welcomeText}>
              Buy bundles, minutes and
              SMS instantly.
            </p>

          </div>

          <div style={styles.welcomeIcon}>
            <FaWifi />
          </div>

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

                  <div
                    style={styles.networkIcon}
                    >
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

                <button
                  style={styles.buyButton}

                  onClick={() => {
                    setSelectedBundle(bundle);
                    setBuyModal(true);
                  }}
                  >

                  Buy Bundle

                </button>

              </div>

            ))

          )
          }

        </div>

        {/* VIEW / BUY MODAL */}

        {
        buyModal && (

          <div
            style={styles.overlay}
            onClick={() => {
              setBuyModal(false);
              setPinModal(false);
              setSuccessModal(false);
              setFailedModal(false);
            }}
            >

            <div
              style={styles.modal}
              onClick={(e) => e.stopPropagation()}
              >

              <button
                style={styles.closeBtn}

                onClick={()=>
                setBuyModal(false)
                }
                >
                x
              </button>

              <h2 style={styles.modalTitle}>
                {selectedBundle?.name}
              </h2>

              <p style={styles.modalPrice}>
                Ksh {selectedBundle?.price}
              </p>

              <div style={styles.buyOptions}>

                <button
                  style={ {
                    ...styles.optionBtn,

                    background:
                    buyType === "self"
                    ? "#5B3DF5": "#f1f5f9",

                    color:
                    buyType === "self"
                    ? "white": "#0f172a"
                  }}

                  onClick={()=>
                  setBuyType("self")
                  }
                  >
                  For Myself
                </button>

                <button
                  style={ {
                    ...styles.optionBtn,

                    background:
                    buyType === "other"
                    ? "#5B3DF5": "#f1f5f9",

                    color:
                    buyType === "other"
                    ? "white": "#0f172a"
                  }}

                  onClick={()=>
                  setBuyType("other")
                  }
                  >
                  For Another Number
                </button>

              </div>

              <div style={styles.group}>

                <label>
                  Receiving Number
                </label>

                <input
                type="text"
                name="receiverNumber"
                placeholder="07XXXXXXXX"

                value={
                formData.receiverNumber
                }

                onChange={handleChange}

                style={styles.input}
                />

            </div>

            <div style={styles.group}>

              <label>
                Paying Number
              </label>

              <input
              type="text"
              name="payerNumber"
              placeholder="07XXXXXXXX"

              value={
              formData.payerNumber
              }

              onChange={handleChange}

              style={styles.input}
              />

          </div>

          <button
            style={styles.buyNowBtn}

            onClick={handleBuy}
            >

            Buy Now

          </button>

        </div>

      </div>

    )
    }

    {/* MPESA PIN MODAL */}

    {
    pinModal && (

      <div
        style={styles.overlay}
        onClick={() => {
          setBuyModal(false);
          setPinModal(false);
          setSuccessModal(false);
          setFailedModal(false);
        }}
        >

        <div style={styles.smallModal}
          onClick={(e) => e.stopPropagation()}
          >

          <div style={styles.loader}></div>

          <h2 style={styles.modalTitle}>
            Check Your Phone
          </h2>

          <p style={styles.modalText}>
            Enter your M-PESA PIN
            on the prompt to
            complete payment.
          </p>

        </div>

      </div>

    )
    }

    {/* SUCCESS MODAL */}

    {
    successModal && (

      <div
        style={styles.overlay}
        onClick={() => {
          setBuyModal(false);
          setPinModal(false);
          setSuccessModal(false);
          setFailedModal(false);
        }}
        >

        <div style={styles.smallModal}
          onClick={(e) => e.stopPropagation()}
          >

          <div style={styles.successIcon}>
            <FaCheckCircle />
          </div>

          <h2 style={styles.modalTitle}>
            Transaction Successful
          </h2>

          <p style={styles.modalText}>
            Bundle purchased
            successfully.
          </p>

          <button
            style={styles.doneBtn}

            onClick={()=>
            setSuccessModal(false)
            }
            >
            Done
          </button>

        </div>

      </div>

    )
    }

    {/* FAILED MODAL */}

    {
    failedModal && (

      <div
        style={styles.overlay}
        onClick={() => {
          setBuyModal(false);
          setPinModal(false);
          setSuccessModal(false);
          setFailedModal(false);
        }}
        >

        <div style={styles.smallModal}
          onClick={(e) => e.stopPropagation()}
          >

          <div style={styles.failedIcon}>
            <FaExclamationCircle />
          </div>

          <h2 style={styles.modalTitle}>
            Transaction Failed
          </h2>

          <p style={styles.modalText}>
            Payment was not
            completed. Try again.
          </p>

          <button
            style={styles.doneBtn}

            onClick={()=>
            setFailedModal(false)
            }
            >
            Retry
          </button>

        </div>

      </div>

    )
    }

  </div>

</AdminLayout>

);

}

const styles = {
topHeader: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "20px"
},

brandSection: {
display: "flex",
alignItems: "center",
gap: "14px"
},

logo: {
width: "60px",
height: "60px",
borderRadius: "20px",
background:
"linear-gradient(135deg,#5B3DF5,#7C4DFF)",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "28px",
fontWeight: "700",
boxShadow:
"0 10px 25px rgba(91,61,245,.25)"
},

brandName: {
fontSize: "24px",
color: "#0f172a",
fontWeight: "700",
marginBottom: "4px"
},

brandSubtext: {
color: "#64748b",
fontSize: "13px"
},

exploreBtn: {
marginTop: "20px",
border: "none",
background: "white",
color: "#5B3DF5",
padding: "12px 18px",
borderRadius: "14px",
fontWeight: "600",
cursor: "pointer",
boxShadow:
"0 4px 12px rgba(0,0,0,.08)"
},
page: {
padding: "10px",
background: "#f8fafc",
minHeight: "100vh"
},

welcomeCard: {
background:
"linear-gradient(135deg,#5B3DF5,#7C4DFF)",
borderRadius: "24px",
padding: "25px",
color: "white",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "25px"
},

welcomeTitle: {
fontSize: "28px",
marginBottom: "8px"
},

welcomeText: {
color: "#ede9fe"
},

welcomeIcon: {
width: "70px",
height: "70px",
borderRadius: "20px",
background: "rgba(255,255,255,.15)",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "30px"
},

grid: {
display: "grid",
gridTemplateColumns:
"repeat(2,1fr)",
gap: "18px"
},

card: {
background: "white",
padding: "20px",
borderRadius: "22px",
boxShadow:
"0 2px 12px rgba(0,0,0,.05)"
},

cardTop: {
display: "flex",
justifyContent: "space-between",
marginBottom: "18px"
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
padding: "8px 9px",
borderRadius: "30px",
fontSize: "13px",
fontWeight: "600",
color: "#475569"
},

bundleName: {
fontSize: "20px",
marginBottom: "10px"
},

price: {
fontSize: "28px",
fontWeight: "700",
color: "#5B3DF5"
},

validity: {
color: "#64748b",
margin: "12px 0 20px"
},

buyButton: {
width: "100%",
border: "none",
padding: "14px",
borderRadius: "14px",
background: "#5B3DF5",
color: "white",
fontWeight: "600",
cursor: "pointer"
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
width: "100%",
maxWidth: "420px",
background: "white",
borderRadius: "24px",
padding: "25px",
position: "relative"
},

closeBtn: {
position: "absolute",
right: "20px",
top: "20px",
border: "none",
background: "#f1f5f9",
width: "40px",
height: "40px",
borderRadius: "12px",
cursor: "pointer"
},

modalTitle: {
fontSize: "24px",
marginBottom: "10px",
color: "#0f172a",
textAlign: "center"
},

modalPrice: {
textAlign: "center",
fontSize: "34px",
fontWeight: "700",
color: "#5B3DF5",
marginBottom: "25px"
},

buyOptions: {
display: "flex",
gap: "10px",
marginBottom: "20px"
},

optionBtn: {
flex: 1,
border: "none",
padding: "14px",
borderRadius: "14px",
fontWeight: "600",
cursor: "pointer"
},

group: {
marginBottom: "18px",
display: "flex",
flexDirection: "column",
gap: "10px"
},

input: {
padding: "14px",
borderRadius: "14px",
border: "1px solid #e2e8f0",
outline: "none",
background: "#fafafa"
},

buyNowBtn: {
width: "100%",
border: "none",
padding: "15px",
borderRadius: "14px",
background: "#5B3DF5",
color: "white",
fontWeight: "600",
cursor: "pointer",
marginTop: "10px"
},

smallModal: {
width: "100%",
maxWidth: "340px",
background: "white",
borderRadius: "22px",
padding: "30px",
textAlign: "center"
},

modalText: {
color: "#64748b",
lineHeight: "1.7"
},

loader: {
width: "60px",
height: "60px",
border:
"5px solid #e2e8f0",
borderTop:
"5px solid #5B3DF5",
borderRadius: "50%",
margin: "0 auto 20px",
animation:
"spin 1s linear infinite"
},

successIcon: {
width: "90px",
height: "90px",
borderRadius: "50%",
background: "#dcfce7",
color: "#22c55e",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "42px",
margin: "0 auto 20px"
},

failedIcon: {
width: "90px",
height: "90px",
borderRadius: "50%",
background: "#fee2e2",
color: "#ef4444",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "42px",
margin: "0 auto 20px"
},

doneBtn: {
width: "100%",
border: "none",
padding: "14px",
borderRadius: "14px",
background: "#5B3DF5",
color: "white",
fontWeight: "600",
cursor: "pointer",
marginTop: "20px"
},

skeleton: {
height: "230px",
borderRadius: "22px",
background: "#e2e8f0"
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

};

export default User;