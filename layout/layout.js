import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400 ">
      <div className="container mx-[20px] md:mx-[10%] lg:mx-[20%] bg-slate-50 rounded-md  grid lg:grid-cols-2 my-[10px]">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="text-center py-[10px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
