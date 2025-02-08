import { motion } from "motion/react";
import PointContainer from "./PointContainer";
import SizeContainer from "./SizeContainer";

const Sidebar = () => {

  return (
    <motion.aside
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}

      className="w-64 space-y-4"
    >
      <SizeContainer />


      <PointContainer />
    </motion.aside>
  )
};

export default Sidebar;