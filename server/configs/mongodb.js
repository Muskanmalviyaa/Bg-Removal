// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => {
//         console.log("Database Connected")
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}`)
// }

// export default connectDB;
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MongoDB URI is missing!");
}

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // ⏳ Timeout if MongoDB is slow
      socketTimeoutMS: 45000,         // 🚀 Prevents premature timeout
    }).then((mongoose) => mongoose).catch((err) => {
      console.error("❌ MongoDB Connection Error:", err);
      process.exit(1);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
