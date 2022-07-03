const createJob = async (req, res) => {
  res.send("create Job");
};
const getAllJob = async (req, res) => {
  res.send("get All Job");
};
const updateJob = async (req, res) => {
  res.send("update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};
const showStats = async (req, res) => {
  res.send("show Stats");
};
export { createJob, getAllJob, updateJob, deleteJob, showStats };
