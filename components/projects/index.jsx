import Image from "next/future/image";
import { motion } from "framer-motion";
import styles from "../../styles/Work.module.scss";

const cardVariants = {
  offscreen: {
    y: 50,
    rotate: -5
  },
  onscreen: {
    y: 5,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Menu = ({ sideBar = false, menuItems, setSideBar = () => {}, setProject, bodyOverflow = () => {} }) => {
  const items = menuItems;
  return (
    <motion.div
      key={items}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.projects_content_center}
    >
      {items.map((menuItem) => {
        const { id, title, img, price, desc, height, tech } = menuItem;
        return (
          <motion.article
            key={id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            className={styles.projects_content_item}
            style={{ height: height ? height : "310px" }}
            onClick={() => {
              setProject(menuItem);
              setSideBar((sideBar) => !sideBar);
              bodyOverflow();
            }}
          >
            <Image
              src={img}
              alt={title}
              className={styles.projects_content_photo}
              width="448"
              height="310"
            />
            <div className={styles.projects_content_item_info}>
              <h4>{title}</h4>
              <p className={styles.projects_content_item_desc}>{desc}</p>
              <p className={styles.projects_content_item_technologies}>
                {tech?.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className={
                        styles.projects_content_item_technologies_techItem
                      }
                    >
                      {item}
                    </span>
                  );
                })}
              </p>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
};
export default Menu;
