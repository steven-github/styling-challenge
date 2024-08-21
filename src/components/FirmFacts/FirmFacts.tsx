import FirmFactCard from "../FirmFactCard/FirmFactCard";
import styles from "./FirmFacts.module.scss";

const FirmFacts = () => {
  return (
    <>
      <h1>Firm Facts</h1>
      <div className={styles.firmFacts}>
        <FirmFactCard
          variant="default"
          icon={true}
          description="This is a two line button that terminates with an icon"
        />
        <FirmFactCard
          variant="border"
          icon={true}
          description="This is a two line button that terminates with an icon"
        />
        <FirmFactCard
          variant="border"
          icon={false}
          description="This is a one line button"
        />
        <FirmFactCard
          variant="border"
          icon={true}
          description="This is a two line button that terminates with an icon"
        />
        <FirmFactCard
          variant="border"
          icon={true}
          description="This is a two line button that terminates with an icon"
        />
        <FirmFactCard
          variant="border"
          disabled={true}
          icon={true}
          description="This is a two line button that terminates with an icon"
        />
        <FirmFactCard
          variant="border"
          icon={true}
          description="This is a two line button that terminates with an icon"
        />
      </div>
    </>
  );
};

export default FirmFacts;
