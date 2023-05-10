import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

//  styles
import styles from "./Home.module.css";

//components
import TransationForm from "./TransationForm";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <small>{error}</small>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransationForm uid={user.uid} />
      </div>
    </div>
  );
}
