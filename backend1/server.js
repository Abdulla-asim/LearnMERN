import express from "express"
import cors from "cors";

const app = express();

// MIddleware for parsing json
app.use(express.json());
app.use(express.urlencoded());
// middleware: enable cors
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
    // Log the method and the path of request.
    console.log(`[${req.method}] ${req.path}`);
    // if there is body with the request, log it as well
    console.log('Body', req.body);
    next();
})

// Custom middleware: for fake authentication
const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === "SooperSecret") {
        // Allow access
        next();
    }
    else {
        const err = new Error("Not Authorized");
        err.status = 401;
        next(err);
    }
}

// Routes
app.get("/", (req, res) => {
    res.send("Api Running!");
});

app.post("/test", (req, res) => {
    res.json(req.body);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});