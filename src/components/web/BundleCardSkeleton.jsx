import Skeleton from "./Skeleton";

function BundleCardSkeleton() {

  return (
    <div style={styles.card}>

      <div style={styles.top}>
        <Skeleton width="55px" height="55px" borderRadius="18px" />

        <Skeleton width="90px" height="30px" borderRadius="20px" />
      </div>

      <Skeleton
        width="70%"
        height="2px"
        style={{ marginBottom: "16px" }}
      />

      <Skeleton
        width="40%"
        height="30px"
        style={{ marginBottom: "14px" }}
      />

      <Skeleton
        width="50%"
        height="18px"
        style={{ marginBottom: "24px" }}
      />

      <div style={styles.actions}>
        <Skeleton height="45px" borderRadius="12px" />

        <Skeleton height="45px" borderRadius="12px" />
      </div>

    </div>
  );
}

const styles = {

  card: {
    background: "white",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 2px 12px rgba(0,0,0,.05)"
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  actions: {
    display: "flex",
    gap: "12px"
  }

};

export default BundleCardSkeleton;