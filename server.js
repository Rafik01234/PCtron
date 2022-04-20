const express = require("express");
const app = express();
const port = 3000;
app.use("/", require("./routes/root"))
app.use("/Home", require("./routes/Home"));
app.use("/Profile", require("./routes/Profile"));
app.use("/SignIn", require("./routes/SignIn_SignUp"));
app.use("/About", require("./routes/About"));
app.use("/Basket", require("./routes/Basket"))
app.use("/map", require("./routes/map"))
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);