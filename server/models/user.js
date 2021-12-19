import monggose from "mongoose";

const userSchema = monggose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default monggose.model("User", userSchema);
