import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videofile:{
            type:String, //cloudinary url
            required: true
        },
        thumbnail:{
            type:String, //cloudinary url
            required: true
        },
        description:{
            type:String, 
            required: true
        },
        title:{
            type:String, 
            required: true
        },
        views:{
            type:Number, 
            required: true
        },
        duration:{
            type:Number,
            required:true
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },{timestamps:true}
)

videoSchema.plugin(mongooseAggregatePaginateV2)

export const Video = mongoose.model("Video",videoSchema)