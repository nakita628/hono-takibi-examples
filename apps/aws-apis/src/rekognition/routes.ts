import { createRoute, z } from '@hono/zod-openapi'

const FaceIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('FaceId')

const AssociatedFaceSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: 'Unique identifier assigned to the face.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides face metadata for the faces that are associated to a specific UserID.',
    required: [],
  })
  .openapi('AssociatedFace')

const AssociatedFacesListSchema = z
  .array(AssociatedFaceSchema)
  .min(0)
  .max(100)
  .openapi('AssociatedFacesList')

const UserIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-:]+/)
  .min(1)
  .max(128)
  .openapi('UserId')

const PercentSchema = z.float32().min(0).max(100).openapi('Percent')

const UnsuccessfulFaceAssociationReasonSchema = z
  .enum(['FACE_NOT_FOUND', 'ASSOCIATED_TO_A_DIFFERENT_USER', 'LOW_MATCH_CONFIDENCE'])
  .openapi('UnsuccessfulFaceAssociationReason')

const UnsuccessfulFaceAssociationReasonsSchema = z
  .array(UnsuccessfulFaceAssociationReasonSchema)
  .openapi('UnsuccessfulFaceAssociationReasons')

const UnsuccessfulFaceAssociationSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: 'A unique identifier assigned to the face. ' }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: 'A provided ID for the UserID. Unique within the collection. ' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "Match confidence with the UserID, provides information regarding if a face association was unsuccessful because it didn't meet UserMatchThreshold.",
        }),
    ).exactOptional(),
    Reasons: UnsuccessfulFaceAssociationReasonsSchema.and(
      z.any().openapi({ description: ' The reason why the association was unsuccessful. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully associated.',
    required: [],
  })
  .openapi('UnsuccessfulFaceAssociation')

const UnsuccessfulFaceAssociationListSchema = z
  .array(UnsuccessfulFaceAssociationSchema)
  .min(0)
  .max(500)
  .openapi('UnsuccessfulFaceAssociationList')

const UserStatusSchema = z.enum(['ACTIVE', 'UPDATING', 'CREATING', 'CREATED']).openapi('UserStatus')

const AssociateFacesResponseSchema = z
  .object({
    AssociatedFaces: AssociatedFacesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of AssociatedFace objects containing FaceIDs that are successfully associated with the UserID is returned. Returned if the AssociateFaces action is successful.',
        }),
    ).exactOptional(),
    UnsuccessfulFaceAssociations: UnsuccessfulFaceAssociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully associated along with the reasons. Returned if the AssociateFaces action is successful.',
        }),
    ).exactOptional(),
    UserStatus: UserStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of an update made to a UserID. Reflects if the UserID has been updated for every requested change.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AssociatedFaces: [{ FaceId: '35ebbb41-7f67-4263-908d-dd0ecba05ab9' }],
      UnsuccessfulFaceAssociations: [
        {
          Confidence: 0.9375374913215637,
          FaceId: 'f5817d37-94f6-4335-bfee-6cf79a3d806e',
          Reasons: ['LOW_MATCH_CONFIDENCE'],
        },
        {
          FaceId: '851cb847-dccc-4fea-9309-9f4805967855',
          Reasons: ['ASSOCIATED_TO_A_DIFFERENT_USER'],
          UserId: 'demoUser2',
        },
      ],
      UserStatus: 'UPDATING',
    },
    required: [],
  })
  .openapi('AssociateFacesResponse')

const CollectionIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]+/)
  .min(1)
  .max(255)
  .openapi('CollectionId')

const UserFaceIdListSchema = z.array(FaceIdSchema).min(1).max(100).openapi('UserFaceIdList')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestToken')

const AssociateFacesRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'The ID of an existing collection containing the UserID.' }),
    ),
    UserId: UserIdSchema.and(z.any().openapi({ description: 'The ID for the existing UserID.' })),
    FaceIds: UserFaceIdListSchema.and(
      z.any().openapi({ description: 'An array of FaceIDs to associate with the UserID.' }),
    ),
    UserMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional value specifying the minimum confidence in the UserID match to return. The default value is 75.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the request to <code>AssociateFaces</code>. If you use the same token with multiple <code>AssociateFaces</code> requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'UserId', 'FaceIds'], title: 'AssociateFacesRequest' })
  .openapi('AssociateFacesRequest')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ProvisionedThroughputExceededExceptionSchema = z
  .any()
  .openapi('ProvisionedThroughputExceededException')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const FloatSchema = z.float32().openapi('Float')

const BoundingBoxSchema = z
  .object({
    Width: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'Width of the bounding box as a ratio of the overall image width.',
        }),
    ).exactOptional(),
    Height: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'Height of the bounding box as a ratio of the overall image height.',
        }),
    ).exactOptional(),
    Left: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'Left coordinate of the bounding box as a ratio of overall image width.',
        }),
    ).exactOptional(),
    Top: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'Top coordinate of the bounding box as a ratio of overall image height.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note>',
    required: [],
  })
  .openapi('BoundingBox')

const ComparedSourceImageFaceSchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'Bounding box of the face.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description: 'Confidence level that the selected bounding box contains a face.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. ',
    required: [],
  })
  .openapi('ComparedSourceImageFace')

const LandmarkTypeSchema = z
  .enum([
    'eyeLeft',
    'eyeRight',
    'nose',
    'mouthLeft',
    'mouthRight',
    'leftEyeBrowLeft',
    'leftEyeBrowRight',
    'leftEyeBrowUp',
    'rightEyeBrowLeft',
    'rightEyeBrowRight',
    'rightEyeBrowUp',
    'leftEyeLeft',
    'leftEyeRight',
    'leftEyeUp',
    'leftEyeDown',
    'rightEyeLeft',
    'rightEyeRight',
    'rightEyeUp',
    'rightEyeDown',
    'noseLeft',
    'noseRight',
    'mouthUp',
    'mouthDown',
    'leftPupil',
    'rightPupil',
    'upperJawlineLeft',
    'midJawlineLeft',
    'chinBottom',
    'midJawlineRight',
    'upperJawlineRight',
  ])
  .openapi('LandmarkType')

const LandmarkSchema = z
  .object({
    Type: LandmarkTypeSchema.and(
      z.any().openapi({ description: 'Type of landmark.' }),
    ).exactOptional(),
    X: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The x-coordinate of the landmark expressed as a ratio of the width of the image. The x-coordinate is measured from the left-side of the image. For example, if the image is 700 pixels wide and the x-coordinate of the landmark is at 350 pixels, this value is 0.5. ',
        }),
    ).exactOptional(),
    Y: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The y-coordinate of the landmark expressed as a ratio of the height of the image. The y-coordinate is measured from the top of the image. For example, if the image height is 200 pixels and the y-coordinate of the landmark is at 50 pixels, this value is 0.25.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Indicates the location of the landmark on the face.', required: [] })
  .openapi('Landmark')

const LandmarksSchema = z.array(LandmarkSchema).openapi('Landmarks')

const DegreeSchema = z.float32().min(-180).max(180).openapi('Degree')

const PoseSchema = z
  .object({
    Roll: DegreeSchema.and(
      z.any().openapi({ description: 'Value representing the face rotation on the roll axis.' }),
    ).exactOptional(),
    Yaw: DegreeSchema.and(
      z.any().openapi({ description: 'Value representing the face rotation on the yaw axis.' }),
    ).exactOptional(),
    Pitch: DegreeSchema.and(
      z.any().openapi({ description: 'Value representing the face rotation on the pitch axis.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Indicates the pose of the face as determined by its pitch, roll, and yaw.',
    required: [],
  })
  .openapi('Pose')

const ImageQualitySchema = z
  .object({
    Brightness: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value representing brightness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a brighter face image.',
        }),
    ).exactOptional(),
    Sharpness: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value representing sharpness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a sharper face image.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Identifies face image brightness and sharpness. ', required: [] })
  .openapi('ImageQuality')

const EmotionNameSchema = z
  .enum(['HAPPY', 'SAD', 'ANGRY', 'CONFUSED', 'DISGUSTED', 'SURPRISED', 'CALM', 'UNKNOWN', 'FEAR'])
  .openapi('EmotionName')

const EmotionSchema = z
  .object({
    Type: EmotionNameSchema.and(
      z.any().openapi({ description: 'Type of emotion detected.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.",
    required: [],
  })
  .openapi('Emotion')

const EmotionsSchema = z.array(EmotionSchema).openapi('Emotions')

const BooleanSchema = z.boolean().openapi('Boolean')

const SmileSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value that indicates whether the face is smiling or not.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the face is smiling, and the confidence level in the determination.',
    required: [],
  })
  .openapi('Smile')

const ComparedFaceSchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'Bounding box of the face.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description: 'Level of confidence that what the bounding box contains is a face.',
        }),
    ).exactOptional(),
    Landmarks: LandmarksSchema.and(
      z.any().openapi({ description: 'An array of facial landmarks.' }),
    ).exactOptional(),
    Pose: PoseSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the pose of the face as determined by its pitch, roll, and yaw.',
        }),
    ).exactOptional(),
    Quality: ImageQualitySchema.and(
      z.any().openapi({ description: 'Identifies face image brightness and sharpness. ' }),
    ).exactOptional(),
    Emotions: EmotionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The emotions that appear to be expressed on the face, and the confidence level in the determination. Valid values include "Happy", "Sad", "Angry", "Confused", "Disgusted", "Surprised", "Calm", "Unknown", and "Fear". ',
        }),
    ).exactOptional(),
    Smile: SmileSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether or not the face is smiling, and the confidence level in the determination. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.',
    required: [],
  })
  .openapi('ComparedFace')

const CompareFacesMatchSchema = z
  .object({
    Similarity: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence that the faces match.' }),
    ).exactOptional(),
    Face: ComparedFaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides face metadata (bounding box and confidence that the bounding box actually contains a face).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.',
    required: [],
  })
  .openapi('CompareFacesMatch')

const CompareFacesMatchListSchema = z
  .array(CompareFacesMatchSchema)
  .openapi('CompareFacesMatchList')

const CompareFacesUnmatchListSchema = z.array(ComparedFaceSchema).openapi('CompareFacesUnmatchList')

const OrientationCorrectionSchema = z
  .enum(['ROTATE_0', 'ROTATE_90', 'ROTATE_180', 'ROTATE_270'])
  .openapi('OrientationCorrection')

const CompareFacesResponseSchema = z
  .object({
    SourceImageFace: ComparedSourceImageFaceSchema.and(
      z
        .any()
        .openapi({ description: 'The face in the source image that was used for comparison.' }),
    ).exactOptional(),
    FaceMatches: CompareFacesMatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of faces in the target image that match the source image face. Each <code>CompareFacesMatch</code> object provides the bounding box, the confidence level that the bounding box contains a face, and the similarity score for the face in the bounding box and the face in the source image.',
        }),
    ).exactOptional(),
    UnmatchedFaces: CompareFacesUnmatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of faces in the target image that did not match the source image face.',
        }),
    ).exactOptional(),
    SourceImageOrientationCorrection: OrientationCorrectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of <code>SourceImageOrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>",
        }),
    ).exactOptional(),
    TargetImageOrientationCorrection: OrientationCorrectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of <code>TargetImageOrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceMatches: [
        {
          Face: {
            BoundingBox: {
              Height: 0.33481481671333313,
              Left: 0.31888890266418457,
              Top: 0.4933333396911621,
              Width: 0.25,
            },
            Confidence: 99.9991226196289,
          },
          Similarity: 100,
        },
      ],
      SourceImageFace: {
        BoundingBox: {
          Height: 0.33481481671333313,
          Left: 0.31888890266418457,
          Top: 0.4933333396911621,
          Width: 0.25,
        },
        Confidence: 99.9991226196289,
      },
    },
    required: [],
  })
  .openapi('CompareFacesResponse')

const ImageBlobSchema = z.string().min(1).max(5242880).openapi('ImageBlob')

const S3BucketSchema = z
  .string()
  .regex(/[0-9A-Za-z\.\-_]*/)
  .min(3)
  .max(255)
  .openapi('S3Bucket')

const S3ObjectNameSchema = z.string().min(1).max(1024).openapi('S3ObjectName')

const S3ObjectVersionSchema = z.string().min(1).max(1024).openapi('S3ObjectVersion')

const S3ObjectSchema = z
  .object({
    Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'Name of the S3 bucket.' }),
    ).exactOptional(),
    Name: S3ObjectNameSchema.and(
      z.any().openapi({ description: 'S3 object key name.' }),
    ).exactOptional(),
    Version: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'If the bucket is versioning enabled, you can specify the object version. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p>',
    required: [],
  })
  .openapi('S3Object')

const ImageSchema = z
  .object({
    Bytes: ImageBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'Blob of image bytes up to 5 MBs. Note that the maximum image size you can pass to <code>DetectCustomLabels</code> is 4MB. ',
        }),
    ).exactOptional(),
    S3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'Identifies an S3 object as the image source.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p>',
    required: [],
  })
  .openapi('Image')

const QualityFilterSchema = z
  .enum(['NONE', 'AUTO', 'LOW', 'MEDIUM', 'HIGH'])
  .openapi('QualityFilter')

const CompareFacesRequestSchema = z
  .object({
    SourceImage: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
    TargetImage: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
    SimilarityThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum level of confidence in the face matches that a match must meet to be included in the <code>FaceMatches</code> array.',
        }),
    ).exactOptional(),
    QualityFilter: QualityFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't compared. If you specify <code>AUTO</code>, Amazon Rekognition chooses the quality bar. If you specify <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify <code>NONE</code>, no filtering is performed. The default value is <code>NONE</code>. </p> <p>To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SourceImage', 'TargetImage'], title: 'CompareFacesRequest' })
  .openapi('CompareFacesRequest')

const InvalidS3ObjectExceptionSchema = z.any().openapi('InvalidS3ObjectException')

const ImageTooLargeExceptionSchema = z.any().openapi('ImageTooLargeException')

const InvalidImageFormatExceptionSchema = z.any().openapi('InvalidImageFormatException')

const ProjectVersionArnSchema = z
  .string()
  .regex(
    /(^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)/,
  )
  .min(20)
  .max(2048)
  .openapi('ProjectVersionArn')

const CopyProjectVersionResponseSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the copied model version in the destination project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ProjectVersionArn:
        'arn:aws:rekognition:us-east-1:555555555555:project/DestinationProject/version/DestinationVersionName_cross_account/16567050987651',
    },
    required: [],
  })
  .openapi('CopyProjectVersionResponse')

const ProjectArnSchema = z
  .string()
  .regex(/(^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)/)
  .min(20)
  .max(2048)
  .openapi('ProjectArn')

const VersionNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]+/)
  .min(1)
  .max(255)
  .openapi('VersionName')

const S3KeyPrefixSchema = z.string().max(1024).openapi('S3KeyPrefix')

const OutputConfigSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The S3 bucket where training output is placed.' }),
    ).exactOptional(),
    S3KeyPrefix: S3KeyPrefixSchema.and(
      z.any().openapi({ description: 'The prefix applied to the training output files. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The S3 bucket and folder location where training output is placed.',
    required: [],
  })
  .openapi('OutputConfig')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const KmsKeyIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,2048}$/)
  .min(1)
  .max(2048)
  .openapi('KmsKeyId')

const CopyProjectVersionRequestSchema = z
  .object({
    SourceProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the source project in the trusting AWS account.' }),
    ),
    SourceProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the model version in the source project that you want to copy to a destination project.',
        }),
    ),
    DestinationProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the project in the trusted AWS account that you want to copy the model version to. ',
        }),
    ),
    VersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A name for the version of the model that's copied to the destination project.",
        }),
    ),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket and folder location where the training output for the source model version is placed.',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The key-value tags to assign to the model version. ' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training results and manifest files written to the output Amazon S3 bucket (<code>OutputConfig</code>).</p> <p>If you choose to use your own KMS key, you need the following permissions on the KMS key.</p> <ul> <li> <p>kms:CreateGrant</p> </li> <li> <p>kms:DescribeKey</p> </li> <li> <p>kms:GenerateDataKey</p> </li> <li> <p>kms:Decrypt</p> </li> </ul> <p>If you don't specify a value for <code>KmsKeyId</code>, images copied into the service are encrypted using a key that AWS owns and manages.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'SourceProjectArn',
      'SourceProjectVersionArn',
      'DestinationProjectArn',
      'VersionName',
      'OutputConfig',
    ],
    title: 'CopyProjectVersionRequest',
  })
  .openapi('CopyProjectVersionRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const UIntegerSchema = z.int().min(0).openapi('UInteger')

const StringSchema = z.string().openapi('String')

const CreateCollectionResponseSchema = z
  .object({
    StatusCode: UIntegerSchema.and(
      z.any().openapi({ description: 'HTTP status code indicating the result of the operation.' }),
    ).exactOptional(),
    CollectionArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your resources. ',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the face detection model associated with the collection you are creating.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CollectionArn: 'aws:rekognition:us-west-2:123456789012:collection/myphotos',
      StatusCode: 200,
    },
    required: [],
  })
  .openapi('CreateCollectionResponse')

const CreateCollectionRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'ID for the collection that you are creating.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A set of tags (key-value pairs) that you want to attach to the collection. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId'], title: 'CreateCollectionRequest' })
  .openapi('CreateCollectionRequest')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const DatasetArnSchema = z
  .string()
  .regex(
    /(^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/dataset\/(train|test)\/[0-9]+$)/,
  )
  .min(20)
  .max(2048)
  .openapi('DatasetArn')

const CreateDatasetResponseSchema = z
  .object({
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The ARN of the created Amazon Rekognition Custom Labels dataset. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DatasetArn:
        'arn:aws:rekognition:us-east-1:111122223333:project/my-project/dataset/train/1690476084535',
    },
    required: [],
  })
  .openapi('CreateDatasetResponse')

const GroundTruthManifestSchema = z
  .object({ S3Object: S3ObjectSchema.exactOptional() })
  .openapi({
    description:
      'The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. ',
    required: [],
  })
  .openapi('GroundTruthManifest')

const DatasetSourceSchema = z
  .object({
    GroundTruthManifest: GroundTruthManifestSchema.exactOptional(),
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of an Amazon Rekognition Custom Labels dataset that you want to copy. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p> The source that Amazon Rekognition Custom Labels uses to create a dataset. To use an Amazon Sagemaker format manifest file, specify the S3 bucket location in the <code>GroundTruthManifest</code> field. The S3 bucket must be in your AWS account. To create a copy of an existing dataset, specify the Amazon Resource Name (ARN) of an existing dataset in <code>DatasetArn</code>.</p> <p>You need to specify a value for <code>DatasetArn</code> or <code>GroundTruthManifest</code>, but not both. if you supply both values, or if you don't specify any values, an InvalidParameterException exception occurs. </p> <p>For more information, see <a>CreateDataset</a>.</p>",
    required: [],
  })
  .openapi('DatasetSource')

const DatasetTypeSchema = z.enum(['TRAIN', 'TEST']).openapi('DatasetType')

const CreateDatasetRequestSchema = z
  .object({
    DatasetSource: DatasetSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            " The source files for the dataset. You can specify the ARN of an existing dataset or specify the Amazon S3 bucket location of an Amazon Sagemaker format manifest file. If you don't specify <code>datasetSource</code>, an empty dataset is created. To add labeled images to the dataset, You can use the console or call <a>UpdateDatasetEntries</a>. ",
        }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of the dataset. Specify <code>TRAIN</code> to create a training dataset. Specify <code>TEST</code> to create a test dataset. ',
        }),
    ),
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset. ',
        }),
    ),
  })
  .openapi({ required: ['DatasetType', 'ProjectArn'], title: 'CreateDatasetRequest' })
  .openapi('CreateDatasetRequest')

const LivenessSessionIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .length(36)
  .openapi('LivenessSessionId')

const CreateFaceLivenessSessionResponseSchema = z
  .object({
    SessionId: LivenessSessionIdSchema.and(
      z
        .any()
        .openapi({ description: 'A unique 128-bit UUID identifying a Face Liveness session.' }),
    ),
  })
  .openapi({ required: ['SessionId'] })
  .openapi('CreateFaceLivenessSessionResponse')

const LivenessS3KeyPrefixSchema = z.string().regex(/\S*/).max(950).openapi('LivenessS3KeyPrefix')

const LivenessOutputConfigSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to an AWS Amazon S3 bucket used to store Face Liveness session results.',
        }),
    ),
    S3KeyPrefix: LivenessS3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix prepended to the output files for the Face Liveness session results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Bucket'],
    description:
      "Contains settings that specify the location of an Amazon S3 bucket used to store the output of a Face Liveness session. Note that the S3 bucket must be located in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are auto-generated by the Face Liveness system. ",
  })
  .openapi('LivenessOutputConfig')

const AuditImagesLimitSchema = z.int().min(0).max(4).openapi('AuditImagesLimit')

const CreateFaceLivenessSessionRequestSettingsSchema = z
  .object({
    OutputConfig: LivenessOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Can specify the location of an Amazon S3 bucket, where reference and audit images will be stored. Note that the Amazon S3 bucket must be located in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are auto-generated by the Face Liveness system. Requires that the caller has the <code>s3:PutObject</code> permission on the Amazon S3 bucket.",
        }),
    ).exactOptional(),
    AuditImagesLimit: AuditImagesLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of audit images to be returned back. Takes an integer between 0-4. Any integer less than 0 will return 0, any integer above 4 will return 4 images in the response. By default, it is set to 0. The limit is best effort and is based on the actual duration of the selfie-video.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A session settings object. It contains settings for the operation to be performed. It accepts arguments for OutputConfig and AuditImagesLimit.',
    required: [],
  })
  .openapi('CreateFaceLivenessSessionRequestSettings')

const CreateFaceLivenessSessionRequestSchema = z
  .object({
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt audit images and reference images.',
        }),
    ).exactOptional(),
    Settings: CreateFaceLivenessSessionRequestSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A session settings object. It contains settings for the operation to be performed. For Face Liveness, it accepts <code>OutputConfig</code> and <code>AuditImagesLimit</code>.',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token is used to recognize the Face Liveness request. If the same token is used with multiple <code>CreateFaceLivenessSession</code> requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateFaceLivenessSessionRequest', required: [] })
  .openapi('CreateFaceLivenessSessionRequest')

const CreateProjectResponseSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the new project. You can use the ARN to configure IAM access to the project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ProjectArn: 'arn:aws:rekognition:us-east-1:111122223333:project/my-project/1690405809285',
    },
    required: [],
  })
  .openapi('CreateProjectResponse')

const ProjectNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]+/)
  .min(1)
  .max(255)
  .openapi('ProjectName')

const CreateProjectRequestSchema = z
  .object({
    ProjectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project to create.' }),
    ),
  })
  .openapi({ required: ['ProjectName'], title: 'CreateProjectRequest' })
  .openapi('CreateProjectRequest')

const CreateProjectVersionResponseSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the model version that was created. Use <code>DescribeProjectVersion</code> to get the current status of the training operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ProjectVersionArn:
        'arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958',
    },
    required: [],
  })
  .openapi('CreateProjectVersionResponse')

const AssetSchema = z
  .object({ GroundTruthManifest: GroundTruthManifestSchema.exactOptional() })
  .openapi({
    description:
      'Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training. ',
    required: [],
  })
  .openapi('Asset')

const AssetsSchema = z.array(AssetSchema).openapi('Assets')

const TrainingDataSchema = z
  .object({
    Assets: AssetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Sagemaker GroundTruth manifest file that contains the training images (assets).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The dataset used for training.', required: [] })
  .openapi('TrainingData')

const TestingDataSchema = z
  .object({
    Assets: AssetsSchema.and(
      z.any().openapi({ description: 'The assets used for testing.' }),
    ).exactOptional(),
    AutoCreate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, Amazon Rekognition Custom Labels temporarily splits the training dataset (80%) to create a test dataset (20%) for the training job. After training completes, the test dataset is not stored and the training dataset reverts to its previous size.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels uses the training dataset to create a test dataset with a temporary split of the training dataset. ',
    required: [],
  })
  .openapi('TestingData')

const CreateProjectVersionRequestSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon Rekognition Custom Labels project that manages the model that you want to train.',
        }),
    ),
    VersionName: VersionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name for the version of the model. This value must be unique.',
        }),
    ),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket location to store the results of training. The S3 bucket can be in any AWS account as long as the caller has <code>s3:PutObject</code> permissions on the S3 bucket.',
        }),
    ),
    TrainingData: TrainingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an external manifest that the services uses to train the model. If you specify <code>TrainingData</code> you must also specify <code>TestingData</code>. The project must not have any associated datasets. ',
        }),
    ).exactOptional(),
    TestingData: TestingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an external manifest that the service uses to test the model. If you specify <code>TestingData</code> you must also specify <code>TrainingData</code>. The project must not have any associated datasets.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' A set of tags (key-value pairs) that you want to attach to the model. ',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. The key is also used to encrypt training results and manifest files written to the output Amazon S3 bucket (<code>OutputConfig</code>).</p> <p>If you choose to use your own KMS key, you need the following permissions on the KMS key.</p> <ul> <li> <p>kms:CreateGrant</p> </li> <li> <p>kms:DescribeKey</p> </li> <li> <p>kms:GenerateDataKey</p> </li> <li> <p>kms:Decrypt</p> </li> </ul> <p>If you don't specify a value for <code>KmsKeyId</code>, images copied into the service are encrypted using a key that AWS owns and manages.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProjectArn', 'VersionName', 'OutputConfig'],
    title: 'CreateProjectVersionRequest',
  })
  .openapi('CreateProjectVersionRequest')

const StreamProcessorArnSchema = z
  .string()
  .regex(/(^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:streamprocessor\/.+$)/)
  .openapi('StreamProcessorArn')

const CreateStreamProcessorResponseSchema = z
  .object({
    StreamProcessorArn: StreamProcessorArnSchema.and(
      z
        .any()
        .openapi({ description: 'Amazon Resource Number for the newly created stream processor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStreamProcessorResponse')

const KinesisVideoArnSchema = z
  .string()
  .regex(/(^arn:([a-z\d-]+):kinesisvideo:([a-z\d-]+):\d{12}:.+$)/)
  .openapi('KinesisVideoArn')

const KinesisVideoStreamSchema = z
  .object({
    Arn: KinesisVideoArnSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN of the Kinesis video stream stream that streams the source video.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.',
    required: [],
  })
  .openapi('KinesisVideoStream')

const StreamProcessorInputSchema = z
  .object({
    KinesisVideoStream: KinesisVideoStreamSchema.and(
      z
        .any()
        .openapi({
          description: 'The Kinesis video stream input stream for the source streaming video.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the source streaming video. ', required: [] })
  .openapi('StreamProcessorInput')

const KinesisDataArnSchema = z
  .string()
  .regex(/(^arn:([a-z\d-]+):kinesis:([a-z\d-]+):\d{12}:.+$)/)
  .openapi('KinesisDataArn')

const KinesisDataStreamSchema = z
  .object({
    Arn: KinesisDataArnSchema.and(
      z.any().openapi({ description: 'ARN of the output Amazon Kinesis Data Streams stream.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.',
    required: [],
  })
  .openapi('KinesisDataStream')

const S3DestinationSchema = z
  .object({
    Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the Amazon S3 bucket you want to associate with the streaming video project. You must be the owner of the Amazon S3 bucket. ',
        }),
    ).exactOptional(),
    KeyPrefix: S3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The prefix value of the location within the bucket that you want the information to be published to. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Using prefixes</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. These results include the name of the stream processor resource, the session ID of the stream processing session, and labeled timestamps and bounding boxes for detected labels. ',
    required: [],
  })
  .openapi('S3Destination')

const StreamProcessorOutputSchema = z
  .object({
    KinesisDataStream: KinesisDataStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results.',
        }),
    ).exactOptional(),
    S3Destination: S3DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.',
    required: [],
  })
  .openapi('StreamProcessorOutput')

const StreamProcessorNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]+/)
  .min(1)
  .max(128)
  .openapi('StreamProcessorName')

const FaceSearchSettingsSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of a collection that contains faces that you want to search for.',
        }),
    ).exactOptional(),
    FaceMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Minimum face match confidence score that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted, and values lower than 80 are set to 80.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Input face recognition parameters for an Amazon Rekognition stream processor. Includes the collection to use for face recognition and the face attributes to detect. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.',
    required: [],
  })
  .openapi('FaceSearchSettings')

const ConnectedHomeLabelSchema = z.string().openapi('ConnectedHomeLabel')

const ConnectedHomeLabelsSchema = z
  .array(ConnectedHomeLabelSchema)
  .min(1)
  .max(128)
  .openapi('ConnectedHomeLabels')

const ConnectedHomeSettingsSchema = z
  .object({
    Labels: ConnectedHomeLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL". ',
        }),
    ),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description: ' The minimum confidence required to label an object in the video. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Labels'],
    description:
      ' Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>. Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection. You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary. ',
  })
  .openapi('ConnectedHomeSettings')

const StreamProcessorSettingsSchema = z
  .object({
    FaceSearch: FaceSearchSettingsSchema.and(
      z.any().openapi({ description: 'Face search settings to use on a streaming video. ' }),
    ).exactOptional(),
    ConnectedHome: ConnectedHomeSettingsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Input parameters used in a streaming video analyzed by a Amazon Rekognition stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels. ',
    required: [],
  })
  .openapi('StreamProcessorSettings')

const RoleArnSchema = z
  .string()
  .regex(/arn:aws:iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .openapi('RoleArn')

const SNSTopicArnSchema = z
  .string()
  .regex(/(^arn:aws:sns:.*:\w{12}:.+$)/)
  .openapi('SNSTopicArn')

const StreamProcessorNotificationChannelSchema = z
  .object({
    SNSTopicArn: SNSTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status. ',
        }),
    ),
  })
  .openapi({
    required: ['SNSTopicArn'],
    description:
      '<p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p> <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.</p> <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>',
  })
  .openapi('StreamProcessorNotificationChannel')

const PointSchema = z
  .object({
    X: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the X coordinate for a point on a <code>Polygon</code>.',
        }),
    ).exactOptional(),
    Y: FloatSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the Y coordinate for a point on a <code>Polygon</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The X and Y coordinates of a point on an image or video frame. The X and Y values are ratios of the overall image size or video resolution. For example, if an input image is 700x200 and the values are X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects makes up a <code>Polygon</code>. A <code>Polygon</code> is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a> <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p>',
    required: [],
  })
  .openapi('Point')

const PolygonSchema = z.array(PointSchema).openapi('Polygon')

const RegionOfInterestSchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'The box representing a region of interest on screen.' }),
    ).exactOptional(),
    Polygon: PolygonSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies a shape made up of up to 10 <code>Point</code> objects to define a region of interest. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies a location within the frame that Rekognition checks for objects of interest such as text, labels, or faces. It uses a <code>BoundingBox</code> or <code>Polygon</code> to set a region of the screen.</p> <p>A word, face, or label is included in the region if it is more than half in that region. If there is more than one region, the word, face, or label is compared with all regions of the screen. Any object of interest that is more than half in a region is kept in the results.</p>',
    required: [],
  })
  .openapi('RegionOfInterest')

const RegionsOfInterestSchema = z
  .array(RegionOfInterestSchema)
  .min(0)
  .max(10)
  .openapi('RegionsOfInterest')

const StreamProcessorDataSharingPreferenceSchema = z
  .object({
    OptIn: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If this option is set to true, you choose to share data with Rekognition to improve model performance. ',
        }),
    ),
  })
  .openapi({
    required: ['OptIn'],
    description:
      ' Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams. ',
  })
  .openapi('StreamProcessorDataSharingPreference')

const CreateStreamProcessorRequestSchema = z
  .object({
    Input: StreamProcessorInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is <code>StreamProcessorInput</code>. This is required for both face search and label detection stream processors.',
        }),
    ),
    Output: StreamProcessorOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is <code>StreamProcessorOutput</code>. This must be a <a>S3Destination</a> of an Amazon S3 bucket that you own for a label detection stream processor or a Kinesis data stream ARN for a face search stream processor.',
        }),
    ),
    Name: StreamProcessorNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier you assign to the stream processor. You can use <code>Name</code> to manage the stream processor. For example, you can get the current status of the stream processor by calling <a>DescribeStreamProcessor</a>. <code>Name</code> is idempotent. This is required for both face search and label detection stream processors. ',
        }),
    ),
    Settings: StreamProcessorSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input parameters used in a streaming video analyzed by a stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.',
        }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.',
        }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A set of tags (key-value pairs) that you want to attach to the stream processor. ',
        }),
    ).exactOptional(),
    NotificationChannel: StreamProcessorNotificationChannelSchema.exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor. You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt results and data published to your Amazon S3 bucket, which includes image frames and hero images. Your source images are unaffected. </p> <p> </p>',
        }),
    ).exactOptional(),
    RegionsOfInterest: RegionsOfInterestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10 regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor. ',
        }),
    ).exactOptional(),
    DataSharingPreference: StreamProcessorDataSharingPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Input', 'Output', 'Name', 'Settings', 'RoleArn'],
    title: 'CreateStreamProcessorRequest',
  })
  .openapi('CreateStreamProcessorRequest')

const CreateUserResponseSchema = z.object({}).openapi('CreateUserResponse')

const CreateUserRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an existing collection to which the new UserID needs to be created.',
        }),
    ),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'ID for the UserID to be created. This ID needs to be unique within the collection.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the request to <code>CreateUser</code>. If you use the same token with multiple <code>CreateUser</code> requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'UserId'], title: 'CreateUserRequest' })
  .openapi('CreateUserRequest')

const DeleteCollectionResponseSchema = z
  .object({
    StatusCode: UIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'HTTP status code that indicates the result of the operation.' }),
    ).exactOptional(),
  })
  .openapi({ example: { StatusCode: 200 }, required: [] })
  .openapi('DeleteCollectionResponse')

const DeleteCollectionRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'ID of the collection to delete.' }),
    ),
  })
  .openapi({ required: ['CollectionId'], title: 'DeleteCollectionRequest' })
  .openapi('DeleteCollectionRequest')

const DeleteDatasetResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteDatasetResponse')

const DeleteDatasetRequestSchema = z
  .object({
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete. ',
        }),
    ),
  })
  .openapi({ required: ['DatasetArn'], title: 'DeleteDatasetRequest' })
  .openapi('DeleteDatasetRequest')

const FaceIdListSchema = z.array(FaceIdSchema).min(1).max(4096).openapi('FaceIdList')

const UnsuccessfulFaceDeletionReasonSchema = z
  .enum(['ASSOCIATED_TO_AN_EXISTING_USER', 'FACE_NOT_FOUND'])
  .openapi('UnsuccessfulFaceDeletionReason')

const UnsuccessfulFaceDeletionReasonsSchema = z
  .array(UnsuccessfulFaceDeletionReasonSchema)
  .openapi('UnsuccessfulFaceDeletionReasons')

const UnsuccessfulFaceDeletionSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: ' A unique identifier assigned to the face.' }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: ' A provided ID for the UserID. Unique within the collection. ' }),
    ).exactOptional(),
    Reasons: UnsuccessfulFaceDeletionReasonsSchema.and(
      z.any().openapi({ description: 'The reason why the deletion was unsuccessful. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully deleted.',
    required: [],
  })
  .openapi('UnsuccessfulFaceDeletion')

const UnsuccessfulFaceDeletionsListSchema = z
  .array(UnsuccessfulFaceDeletionSchema)
  .min(0)
  .max(4096)
  .openapi('UnsuccessfulFaceDeletionsList')

const DeleteFacesResponseSchema = z
  .object({
    DeletedFaces: FaceIdListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of strings (face IDs) of the faces that were deleted.' }),
    ).exactOptional(),
    UnsuccessfulFaceDeletions: UnsuccessfulFaceDeletionsListSchema.and(
      z.any().openapi({ description: "An array of any faces that weren't deleted." }),
    ).exactOptional(),
  })
  .openapi({ example: { DeletedFaces: ['ff43d742-0c13-5d16-a3e8-03d3f58e980b'] }, required: [] })
  .openapi('DeleteFacesResponse')

const DeleteFacesRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'Collection from which to remove the specific faces.' }),
    ),
    FaceIds: FaceIdListSchema.and(
      z.any().openapi({ description: 'An array of face IDs to delete.' }),
    ),
  })
  .openapi({ required: ['CollectionId', 'FaceIds'], title: 'DeleteFacesRequest' })
  .openapi('DeleteFacesRequest')

const ProjectStatusSchema = z.enum(['CREATING', 'CREATED', 'DELETING']).openapi('ProjectStatus')

const DeleteProjectResponseSchema = z
  .object({
    Status: ProjectStatusSchema.and(
      z.any().openapi({ description: 'The current status of the delete project operation.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Status: 'DELETING' }, required: [] })
  .openapi('DeleteProjectResponse')

const DeleteProjectRequestSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the project that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['ProjectArn'], title: 'DeleteProjectRequest' })
  .openapi('DeleteProjectRequest')

const DeleteProjectPolicyResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteProjectPolicyResponse')

const ProjectPolicyNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-]+/)
  .min(1)
  .max(128)
  .openapi('ProjectPolicyName')

const ProjectPolicyRevisionIdSchema = z
  .string()
  .regex(/[0-9A-Fa-f]+/)
  .max(64)
  .openapi('ProjectPolicyRevisionId')

const DeleteProjectPolicyRequestSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project that the project policy you want to delete is attached to.',
        }),
    ),
    PolicyName: ProjectPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the policy that you want to delete.' }),
    ),
    PolicyRevisionId: ProjectPolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the project policy revision that you want to delete.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProjectArn', 'PolicyName'], title: 'DeleteProjectPolicyRequest' })
  .openapi('DeleteProjectPolicyRequest')

const InvalidPolicyRevisionIdExceptionSchema = z.any().openapi('InvalidPolicyRevisionIdException')

const ProjectVersionStatusSchema = z
  .enum([
    'TRAINING_IN_PROGRESS',
    'TRAINING_COMPLETED',
    'TRAINING_FAILED',
    'STARTING',
    'RUNNING',
    'FAILED',
    'STOPPING',
    'STOPPED',
    'DELETING',
    'COPYING_IN_PROGRESS',
    'COPYING_COMPLETED',
    'COPYING_FAILED',
  ])
  .openapi('ProjectVersionStatus')

const DeleteProjectVersionResponseSchema = z
  .object({
    Status: ProjectVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the deletion operation.' }),
    ).exactOptional(),
  })
  .openapi({ example: { Status: 'DELETING' }, required: [] })
  .openapi('DeleteProjectVersionResponse')

const DeleteProjectVersionRequestSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the model version that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['ProjectVersionArn'], title: 'DeleteProjectVersionRequest' })
  .openapi('DeleteProjectVersionRequest')

const DeleteStreamProcessorResponseSchema = z.object({}).openapi('DeleteStreamProcessorResponse')

const DeleteStreamProcessorRequestSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z.any().openapi({ description: 'The name of the stream processor you want to delete.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteStreamProcessorRequest' })
  .openapi('DeleteStreamProcessorRequest')

const DeleteUserResponseSchema = z.object({}).openapi('DeleteUserResponse')

const DeleteUserRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an existing collection from which the UserID needs to be deleted. ',
        }),
    ),
    UserId: UserIdSchema.and(z.any().openapi({ description: 'ID for the UserID to be deleted. ' })),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the request to <code>DeleteUser</code>. If you use the same token with multiple <code>DeleteUser </code>requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'UserId'], title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const ULongSchema = z.int().min(0).openapi('ULong')

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

const DescribeCollectionResponseSchema = z
  .object({
    FaceCount: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of faces that are indexed into the collection. To index faces into a collection, use <a>IndexFaces</a>.',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The version of the face model that's used by the collection for face detection.</p> <p>For more information, see Model versioning in the Amazon Rekognition Developer Guide.</p>",
        }),
    ).exactOptional(),
    CollectionARN: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the collection.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of milliseconds since the Unix epoch time until the creation of the collection. The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.',
        }),
    ).exactOptional(),
    UserCount: ULongSchema.and(
      z
        .any()
        .openapi({ description: 'The number of UserIDs assigned to the specified colleciton.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCollectionResponse')

const DescribeCollectionRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'The ID of the collection to describe.' }),
    ),
  })
  .openapi({ required: ['CollectionId'], title: 'DescribeCollectionRequest' })
  .openapi('DescribeCollectionRequest')

const DatasetStatusSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'CREATE_COMPLETE',
    'CREATE_FAILED',
    'UPDATE_IN_PROGRESS',
    'UPDATE_COMPLETE',
    'UPDATE_FAILED',
    'DELETE_IN_PROGRESS',
  ])
  .openapi('DatasetStatus')

const StatusMessageSchema = z.string().openapi('StatusMessage')

const DatasetStatusMessageCodeSchema = z
  .enum(['SUCCESS', 'SERVICE_ERROR', 'CLIENT_ERROR'])
  .openapi('DatasetStatusMessageCode')

const DatasetStatsSchema = z
  .object({
    LabeledEntries: UIntegerSchema.and(
      z
        .any()
        .openapi({ description: ' The total number of images in the dataset that have labels. ' }),
    ).exactOptional(),
    TotalEntries: UIntegerSchema.and(
      z.any().openapi({ description: ' The total number of images in the dataset. ' }),
    ).exactOptional(),
    TotalLabels: UIntegerSchema.and(
      z.any().openapi({ description: ' The total number of labels declared in the dataset. ' }),
    ).exactOptional(),
    ErrorEntries: UIntegerSchema.and(
      z
        .any()
        .openapi({ description: ' The total number of entries that contain at least one error. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Provides statistics about a dataset. For more information, see <a>DescribeDataset</a>. ',
    required: [],
  })
  .openapi('DatasetStats')

const DatasetDescriptionSchema = z
  .object({
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The Unix timestamp for the time and date that the dataset was created. ',
        }),
    ).exactOptional(),
    LastUpdatedTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Unix timestamp for the date and time that the dataset was last updated. ',
        }),
    ).exactOptional(),
    Status: DatasetStatusSchema.and(
      z.any().openapi({ description: ' The status of the dataset. ' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: ' The status message for the dataset. ' }),
    ).exactOptional(),
    StatusMessageCode: DatasetStatusMessageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed. ',
        }),
    ).exactOptional(),
    DatasetStats: DatasetStatsSchema.and(
      z.any().openapi({ description: ' The status message code for the dataset. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> A description for a dataset. For more information, see <a>DescribeDataset</a>.</p> <p>The status fields <code>Status</code>, <code>StatusMessage</code>, and <code>StatusMessageCode</code> reflect the last operation on the dataset. </p>',
    required: [],
  })
  .openapi('DatasetDescription')

const DescribeDatasetResponseSchema = z
  .object({
    DatasetDescription: DatasetDescriptionSchema.and(
      z.any().openapi({ description: ' The description for the dataset. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DatasetDescription: {
        CreationTimestamp: '2023-07-27T09:41:24.738000-07:00',
        DatasetStats: { ErrorEntries: 0, LabeledEntries: 15, TotalEntries: 15, TotalLabels: 9 },
        LastUpdatedTimestamp: '2023-07-28T09:46:45.406000-07:00',
        Status: 'UPDATE_FAILED',
        StatusMessage: 'The manifest file contains images from multiple S3 buckets.',
        StatusMessageCode: 'CLIENT_ERROR',
      },
    },
    required: [],
  })
  .openapi('DescribeDatasetResponse')

const DescribeDatasetRequestSchema = z
  .object({
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the dataset that you want to describe. ',
        }),
    ),
  })
  .openapi({ required: ['DatasetArn'], title: 'DescribeDatasetRequest' })
  .openapi('DescribeDatasetRequest')

const InferenceUnitsSchema = z.int().min(1).openapi('InferenceUnits')

const ValidationDataSchema = z
  .object({
    Assets: AssetsSchema.and(
      z.any().openapi({ description: 'The assets that comprise the validation data. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains the Amazon S3 bucket location of the validation data for a model training job. </p> <p>The validation data includes error information for individual JSON Lines in the dataset. For more information, see <i>Debugging a Failed Model Training</i> in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>You get the <code>ValidationData</code> object for the training dataset (<a>TrainingDataResult</a>) and the test dataset (<a>TestingDataResult</a>) by calling <a>DescribeProjectVersions</a>. </p> <p>The assets array contains a single <a>Asset</a> object. The <a>GroundTruthManifest</a> field of the Asset object contains the S3 bucket location of the validation data. </p>',
    required: [],
  })
  .openapi('ValidationData')

const TrainingDataResultSchema = z
  .object({
    Input: TrainingDataSchema.and(
      z.any().openapi({ description: 'The training assets that you supplied for training.' }),
    ).exactOptional(),
    Output: TrainingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The images (assets) that were actually trained by Amazon Rekognition Custom Labels. ',
        }),
    ).exactOptional(),
    Validation: ValidationDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data validation manifest. The data validation manifest is created for the training dataset during model training.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.',
    required: [],
  })
  .openapi('TrainingDataResult')

const TestingDataResultSchema = z
  .object({
    Input: TestingDataSchema.and(
      z.any().openapi({ description: 'The testing dataset that was supplied for training.' }),
    ).exactOptional(),
    Output: TestingDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subset of the dataset that was actually tested. Some images (assets) might not be tested due to file formatting and other issues. ',
        }),
    ).exactOptional(),
    Validation: ValidationDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the data validation manifest. The data validation manifest is created for the test dataset during model training.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.',
    required: [],
  })
  .openapi('TestingDataResult')

const SummarySchema = z
  .object({ S3Object: S3ObjectSchema.exactOptional() })
  .openapi({
    description:
      '<p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p>',
    required: [],
  })
  .openapi('Summary')

const EvaluationResultSchema = z
  .object({
    F1Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision and recall performance of the model as a single value. A higher value indicates better precision and recall performance. A lower score indicates that precision, recall, or both are performing poorly. ',
        }),
    ).exactOptional(),
    Summary: SummarySchema.and(
      z.any().openapi({ description: 'The S3 bucket that contains the training summary.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The evaluation results for the training of a model.', required: [] })
  .openapi('EvaluationResult')

const ProjectVersionDescriptionSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the model version. ' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix datetime for the date and time that training started.' }),
    ).exactOptional(),
    MinInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum number of inference units used by the model. For more information, see <a>StartProjectVersion</a>.',
        }),
    ).exactOptional(),
    Status: ProjectVersionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the model version.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({ description: 'A descriptive message for an error or warning that occurred.' }),
    ).exactOptional(),
    BillableTrainingTimeInSeconds: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The duration, in seconds, that you were billed for a successful training of the model version. This value is only returned if the model version has been successfully trained.',
        }),
    ).exactOptional(),
    TrainingEndTimestamp: DateTimeSchema.and(
      z.any().openapi({ description: 'The Unix date and time that training of the model ended.' }),
    ).exactOptional(),
    OutputConfig: OutputConfigSchema.and(
      z.any().openapi({ description: 'The location where training results are saved.' }),
    ).exactOptional(),
    TrainingDataResult: TrainingDataResultSchema.and(
      z.any().openapi({ description: 'Contains information about the training results.' }),
    ).exactOptional(),
    TestingDataResult: TestingDataResultSchema.and(
      z.any().openapi({ description: 'Contains information about the testing results.' }),
    ).exactOptional(),
    EvaluationResult: EvaluationResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'The training results. <code>EvaluationResult</code> is only returned if training is successful.',
        }),
    ).exactOptional(),
    ManifestSummary: GroundTruthManifestSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the summary manifest. The summary manifest provides aggregate data validation results for the training and test datasets.',
        }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during training. ',
        }),
    ).exactOptional(),
    MaxInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of inference units Amazon Rekognition Custom Labels uses to auto-scale the model. For more information, see <a>StartProjectVersion</a>.',
        }),
    ).exactOptional(),
    SourceProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the model version was copied from a different project, <code>SourceProjectVersionArn</code> contains the ARN of the source model version. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A description of a version of an Amazon Rekognition Custom Labels model.',
    required: [],
  })
  .openapi('ProjectVersionDescription')

const ProjectVersionDescriptionsSchema = z
  .array(ProjectVersionDescriptionSchema)
  .openapi('ProjectVersionDescriptions')

const ExtendedPaginationTokenSchema = z.string().max(1024).openapi('ExtendedPaginationToken')

const DescribeProjectVersionsResponseSchema = z
  .object({
    ProjectVersionDescriptions: ProjectVersionDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of model descriptions. The list is sorted by the creation date and time of the model versions, latest to earliest.',
        }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      NextToken: '',
      ProjectVersionDescriptions: [
        {
          BillableTrainingTimeInSeconds: 1899,
          CreationTimestamp: '2023-07-28T08:05:51.958000-07:00',
          EvaluationResult: {
            F1Score: 1,
            Summary: {
              S3Object: {
                Bucket: 'custom-labels-console-us-east-1-111111111',
                Name: 'my-model-output/EvaluationResultSummary-my-project-1.json',
              },
            },
          },
          ManifestSummary: {
            S3Object: {
              Bucket: 'custom-labels-console-us-east-1-111111111',
              Name: 'my-model-output/ManifestSummary-my-project-1.json',
            },
          },
          OutputConfig: {
            S3Bucket: 'custom-labels-console-us-east-1-111111111',
            S3KeyPrefix: 'my-model-output',
          },
          ProjectVersionArn:
            'arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958',
          Status: 'TRAINING_COMPLETED',
          StatusMessage: 'The model is ready to run.',
          TestingDataResult: {
            Input: { AutoCreate: false },
            Output: {
              Assets: [
                {
                  GroundTruthManifest: {
                    S3Object: {
                      Bucket: 'custom-labels-console-us-east-1-111111111',
                      Name: 'my-model-output/TestingGroundTruth-my-project-1.json',
                    },
                  },
                },
              ],
              AutoCreate: false,
            },
            Validation: {
              Assets: [
                {
                  GroundTruthManifest: {
                    S3Object: {
                      Bucket: 'custom-labels-console-us-east-1-111111111',
                      Name: 'my-model-output/TestingManifestWithValidation-my-project-1.json',
                    },
                  },
                },
              ],
            },
          },
          TrainingDataResult: {
            Input: {},
            Output: {
              Assets: [
                {
                  GroundTruthManifest: {
                    S3Object: {
                      Bucket: 'custom-labels-console-us-east-1-111111111',
                      Name: 'my-model-output/TrainingGroundTruth-my-project-1.json',
                    },
                  },
                },
              ],
            },
            Validation: {
              Assets: [
                {
                  GroundTruthManifest: {
                    S3Object: {
                      Bucket: 'custom-labels-console-us-east-1-111111111',
                      Name: 'my-model-output/TrainingManifestWithValidation-my-project-1.json',
                    },
                  },
                },
              ],
            },
          },
          TrainingEndTimestamp: '2023-07-28T08:33:10.827000-07:00',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeProjectVersionsResponse')

const VersionNamesSchema = z.array(VersionNameSchema).min(1).max(10).openapi('VersionNames')

const ProjectVersionsPageSizeSchema = z.int().min(1).max(100).openapi('ProjectVersionsPageSize')

const DescribeProjectVersionsRequestSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project that contains the models you want to describe.',
        }),
    ),
    VersionNames: VersionNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of model version names that you want to describe. You can add up to 10 model version names to the list. If you don't specify a value, all model descriptions are returned. A version name is part of a model (ProjectVersion) ARN. For example, <code>my-model.2020-01-21T09.10.15</code> is the version name in the following ARN. <code>arn:aws:rekognition:us-east-1:123456789012:project/getting-started/version/<i>my-model.2020-01-21T09.10.15</i>/1234567890123</code>.",
        }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
    MaxResults: ProjectVersionsPageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProjectArn'], title: 'DescribeProjectVersionsRequest' })
  .openapi('DescribeProjectVersionsRequest')

const InvalidPaginationTokenExceptionSchema = z.any().openapi('InvalidPaginationTokenException')

const DatasetMetadataSchema = z
  .object({
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The Unix timestamp for the date and time that the dataset was created. ',
        }),
    ).exactOptional(),
    DatasetType: DatasetTypeSchema.and(
      z.any().openapi({ description: ' The type of the dataset. ' }),
    ).exactOptional(),
    DatasetArn: DatasetArnSchema.and(
      z.any().openapi({ description: ' The Amazon Resource Name (ARN) for the dataset. ' }),
    ).exactOptional(),
    Status: DatasetStatusSchema.and(
      z.any().openapi({ description: ' The status for the dataset. ' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: ' The status message for the dataset. ' }),
    ).exactOptional(),
    StatusMessageCode: DatasetStatusMessageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see <a>ProjectDescription</a>. ',
    required: [],
  })
  .openapi('DatasetMetadata')

const DatasetMetadataListSchema = z.array(DatasetMetadataSchema).openapi('DatasetMetadataList')

const ProjectDescriptionSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the project.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix timestamp for the date and time that the project was created.',
        }),
    ).exactOptional(),
    Status: ProjectStatusSchema.and(
      z.any().openapi({ description: 'The current status of the project.' }),
    ).exactOptional(),
    Datasets: DatasetMetadataListSchema.and(
      z
        .any()
        .openapi({
          description: ' Information about the training and test datasets in the project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A description of an Amazon Rekognition Custom Labels project. For more information, see <a>DescribeProjects</a>.',
    required: [],
  })
  .openapi('ProjectDescription')

const ProjectDescriptionsSchema = z.array(ProjectDescriptionSchema).openapi('ProjectDescriptions')

const DescribeProjectsResponseSchema = z
  .object({
    ProjectDescriptions: ProjectDescriptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of project descriptions. The list is sorted by the date and time the projects are created.',
        }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ProjectDescriptions: [
        {
          CreationTimestamp: '2022-06-13T15:16:00.634000-07:00',
          Datasets: [
            {
              CreationTimestamp: '2022-06-13T15:17:34.620000-07:00',
              DatasetArn:
                'arn:aws:rekognition:us-east-1:111122223333:project/my-project/dataset/test/1655158654491',
              DatasetType: 'TEST',
              Status: 'CREATE_COMPLETE',
              StatusMessage: 'The dataset was successfully created from the manifest file.',
              StatusMessageCode: 'SUCCESS',
            },
            {
              CreationTimestamp: '2022-06-13T15:17:50.118000-07:00',
              DatasetArn:
                'arn:aws:rekognition:us-east-1:111122223333:project/my-project/dataset/train/1655158669954',
              DatasetType: 'TRAIN',
              Status: 'CREATE_COMPLETE',
              StatusMessage: 'The dataset was successfully created from the manifest file.',
              StatusMessageCode: 'SUCCESS',
            },
          ],
          ProjectArn: 'arn:aws:rekognition:us-east-1:111122223333:project/my-project/1655158560634',
          Status: 'CREATED',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeProjectsResponse')

const ProjectsPageSizeSchema = z.int().min(1).max(100).openapi('ProjectsPageSize')

const ProjectNamesSchema = z.array(ProjectNameSchema).min(1).max(10).openapi('ProjectNames')

const DescribeProjectsRequestSchema = z
  .object({
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
    MaxResults: ProjectsPageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. ',
        }),
    ).exactOptional(),
    ProjectNames: ProjectNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of the projects that you want Amazon Rekognition Custom Labels to describe. If you don't specify a value, the response includes descriptions for all the projects in your AWS account.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeProjectsRequest', required: [] })
  .openapi('DescribeProjectsRequest')

const StreamProcessorStatusSchema = z
  .enum(['STOPPED', 'STARTING', 'RUNNING', 'FAILED', 'STOPPING', 'UPDATING'])
  .openapi('StreamProcessorStatus')

const DescribeStreamProcessorResponseSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z.any().openapi({ description: 'Name of the stream processor. ' }),
    ).exactOptional(),
    StreamProcessorArn: StreamProcessorArnSchema.and(
      z.any().openapi({ description: 'ARN of the stream processor.' }),
    ).exactOptional(),
    Status: StreamProcessorStatusSchema.and(
      z.any().openapi({ description: 'Current status of the stream processor.' }),
    ).exactOptional(),
    StatusMessage: StringSchema.and(
      z.any().openapi({ description: 'Detailed status message about the stream processor.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z.any().openapi({ description: 'Date and time the stream processor was created' }),
    ).exactOptional(),
    LastUpdateTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in Unix format, the stream processor was last updated. For example, when the stream processor moves from a running state to a failed state, or when the user starts or stops the stream processor.',
        }),
    ).exactOptional(),
    Input: StreamProcessorInputSchema.and(
      z
        .any()
        .openapi({ description: 'Kinesis video stream that provides the source streaming video.' }),
    ).exactOptional(),
    Output: StreamProcessorOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Kinesis data stream to which Amazon Rekognition Video puts the analysis results.',
        }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN of the IAM role that allows access to the stream processor.',
        }),
    ).exactOptional(),
    Settings: StreamProcessorSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Input parameters used in a streaming video analyzed by a stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.',
        }),
    ).exactOptional(),
    NotificationChannel: StreamProcessorNotificationChannelSchema.exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors. ',
        }),
    ).exactOptional(),
    RegionsOfInterest: RegionsOfInterestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors. ',
        }),
    ).exactOptional(),
    DataSharingPreference: StreamProcessorDataSharingPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeStreamProcessorResponse')

const DescribeStreamProcessorRequestSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the stream processor for which you want information.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DescribeStreamProcessorRequest' })
  .openapi('DescribeStreamProcessorRequest')

const GeometrySchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            "An axis-aligned coarse representation of the detected item's location on the image.",
        }),
    ).exactOptional(),
    Polygon: PolygonSchema.and(
      z
        .any()
        .openapi({
          description: 'Within the bounding box, a fine-grained polygon around the detected item.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.',
    required: [],
  })
  .openapi('Geometry')

const CustomLabelSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the custom label.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that the model has in the detection of the custom label. The range is 0-100. A higher value indicates a higher confidence.',
        }),
    ).exactOptional(),
    Geometry: GeometrySchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the detected object on the image that corresponds to the custom label. Includes an axis aligned coarse bounding box surrounding the object and a finer grain polygon for more accurate spatial information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A custom label detected in an image by a call to <a>DetectCustomLabels</a>.',
    required: [],
  })
  .openapi('CustomLabel')

const CustomLabelsSchema = z.array(CustomLabelSchema).openapi('CustomLabels')

const DetectCustomLabelsResponseSchema = z
  .object({
    CustomLabels: CustomLabelsSchema.and(
      z.any().openapi({ description: 'An array of custom labels detected in the input image.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      CustomLabels: [
        { Confidence: 67.56399536132812, Name: 'with_leaves' },
        { Confidence: 50.65699768066406, Name: 'without_leaves' },
      ],
    },
    required: [],
  })
  .openapi('DetectCustomLabelsResponse')

const DetectCustomLabelsRequestSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z.any().openapi({ description: 'The ARN of the model version that you want to use.' }),
    ),
    Image: ImageSchema,
    MaxResults: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results you want the service to return in the response. The service returns the specified number of highest confidence labels ranked from highest confidence to lowest.',
        }),
    ).exactOptional(),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the minimum confidence level for the labels to return. <code>DetectCustomLabels</code> doesn't return any labels with a confidence value that's lower than this specified value. If you specify a value of 0, <code>DetectCustomLabels</code> returns all labels, regardless of the assumed threshold applied to each label. If you don't specify a value for <code>MinConfidence</code>, <code>DetectCustomLabels</code> returns labels based on the assumed threshold of each label.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProjectVersionArn', 'Image'], title: 'DetectCustomLabelsRequest' })
  .openapi('DetectCustomLabelsRequest')

const ResourceNotReadyExceptionSchema = z.any().openapi('ResourceNotReadyException')

const AgeRangeSchema = z
  .object({
    Low: UIntegerSchema.and(
      z.any().openapi({ description: 'The lowest estimated age.' }),
    ).exactOptional(),
    High: UIntegerSchema.and(
      z.any().openapi({ description: 'The highest estimated age.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p>',
    required: [],
  })
  .openapi('AgeRange')

const EyeglassesSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value that indicates whether the face is wearing eye glasses or not.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.',
    required: [],
  })
  .openapi('Eyeglasses')

const SunglassesSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value that indicates whether the face is wearing sunglasses or not.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.',
    required: [],
  })
  .openapi('Sunglasses')

const GenderTypeSchema = z.enum(['Male', 'Female']).openapi('GenderType')

const GenderSchema = z
  .object({
    Value: GenderTypeSchema.and(
      z.any().openapi({ description: 'The predicted gender of the face.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the prediction.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact an individual's rights, privacy, or access to services.</p>",
    required: [],
  })
  .openapi('Gender')

const BeardSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value that indicates whether the face has beard or not.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the face has a beard, and the confidence level in the determination.',
    required: [],
  })
  .openapi('Beard')

const MustacheSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value that indicates whether the face has mustache or not.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the face has a mustache, and the confidence level in the determination.',
    required: [],
  })
  .openapi('Mustache')

const EyeOpenSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value that indicates whether the eyes on the face are open.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the eyes on the face are open, and the confidence level in the determination.',
    required: [],
  })
  .openapi('EyeOpen')

const MouthOpenSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value that indicates whether the mouth on the face is open or not.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence in the determination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether or not the mouth on the face is open, and the confidence level in the determination.',
    required: [],
  })
  .openapi('MouthOpen')

const FaceOccludedSchema = z
  .object({
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. False if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that the service has detected the presence of a face occlusion.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p> <code>FaceOccluded</code> should return "true" with a high confidence score if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return "false" with a high confidence score if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others. </p> <p>You can use <code>FaceOccluded</code> to determine if an obstruction on a face negatively impacts using the image for face matching.</p>',
    required: [],
  })
  .openapi('FaceOccluded')

const EyeDirectionSchema = z
  .object({
    Yaw: DegreeSchema.and(
      z.any().openapi({ description: 'Value representing eye direction on the yaw axis.' }),
    ).exactOptional(),
    Pitch: DegreeSchema.and(
      z.any().openapi({ description: 'Value representing eye direction on the pitch axis.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description: 'The confidence that the service has in its predicted eye direction.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates the direction the eyes are gazing in (independent of the head pose) as determined by its pitch and yaw. ',
    required: [],
  })
  .openapi('EyeDirection')

const FaceDetailSchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'Bounding box of the face. Default attribute.' }),
    ).exactOptional(),
    AgeRange: AgeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated age range, in years, for the face. Low represents the lowest estimated age and High represents the highest estimated age.',
        }),
    ).exactOptional(),
    Smile: SmileSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the face is smiling, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    Eyeglasses: EyeglassesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    Sunglasses: SunglassesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    Gender: GenderSchema.and(
      z.any().openapi({ description: 'The predicted gender of a detected face. ' }),
    ).exactOptional(),
    Beard: BeardSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the face has a beard, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    Mustache: MustacheSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the face has a mustache, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    EyesOpen: EyeOpenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the eyes on the face are open, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    MouthOpen: MouthOpenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the mouth on the face is open, and the confidence level in the determination.',
        }),
    ).exactOptional(),
    Emotions: EmotionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.",
        }),
    ).exactOptional(),
    Landmarks: LandmarksSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the location of landmarks on the face. Default attribute.',
        }),
    ).exactOptional(),
    Pose: PoseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the pose of the face as determined by its pitch, roll, and yaw. Default attribute.',
        }),
    ).exactOptional(),
    Quality: ImageQualitySchema.and(
      z
        .any()
        .openapi({ description: 'Identifies image brightness and sharpness. Default attribute.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Confidence level that the bounding box contains a face (and not a different object such as a tree). Default attribute.',
        }),
    ).exactOptional(),
    FaceOccluded: FaceOccludedSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>FaceOccluded</code> should return "true" with a high confidence score if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return "false" with a high confidence score if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others. ',
        }),
    ).exactOptional(),
    EyeDirection: EyeDirectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the direction the eyes are gazing in, as defined by pitch and yaw.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter:</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>",
    required: [],
  })
  .openapi('FaceDetail')

const FaceDetailListSchema = z.array(FaceDetailSchema).openapi('FaceDetailList')

const DetectFacesResponseSchema = z
  .object({
    FaceDetails: FaceDetailListSchema.and(
      z.any().openapi({ description: 'Details of each face found in the image. ' }),
    ).exactOptional(),
    OrientationCorrection: OrientationCorrectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of <code>OrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceDetails: [
        {
          BoundingBox: {
            Height: 0.18000000715255737,
            Left: 0.5555555820465088,
            Top: 0.33666667342185974,
            Width: 0.23999999463558197,
          },
          Confidence: 100,
          Landmarks: [
            { Type: 'eyeLeft', X: 0.6394737362861633, Y: 0.40819624066352844 },
            { Type: 'eyeRight', X: 0.7266660928726196, Y: 0.41039225459098816 },
            { Type: 'eyeRight', X: 0.6912462115287781, Y: 0.44240960478782654 },
            { Type: 'mouthDown', X: 0.6306198239326477, Y: 0.46700039505958557 },
            { Type: 'mouthUp', X: 0.7215608954429626, Y: 0.47114261984825134 },
          ],
          Pose: { Pitch: 4.050806522369385, Roll: 0.9950747489929199, Yaw: 13.693790435791016 },
          Quality: { Brightness: 37.60169982910156, Sharpness: 80 },
        },
      ],
      OrientationCorrection: 'ROTATE_0',
    },
    required: [],
  })
  .openapi('DetectFacesResponse')

const AttributeSchema = z
  .enum([
    'DEFAULT',
    'ALL',
    'AGE_RANGE',
    'BEARD',
    'EMOTIONS',
    'EYE_DIRECTION',
    'EYEGLASSES',
    'EYES_OPEN',
    'GENDER',
    'MOUTH_OPEN',
    'MUSTACHE',
    'FACE_OCCLUDED',
    'SMILE',
    'SUNGLASSES',
  ])
  .openapi('Attribute')

const AttributesSchema = z.array(AttributeSchema).openapi('Attributes')

const DetectFacesRequestSchema = z
  .object({
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of facial attributes you want to be returned. A <code>DEFAULT</code> subset of facial attributes - <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>, <code>Quality</code>, and <code>Landmarks</code> - will always be returned. You can request for specific facial attributes (in addition to the default list) - by using [<code>"DEFAULT", "FACE_OCCLUDED"</code>] or just [<code>"FACE_OCCLUDED"</code>]. You can request for all facial attributes by using [<code>"ALL"]</code>. Requesting more attributes may increase response time.</p> <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical "AND" operator to determine which attributes to return (in this case, all attributes). </p> <p>Note that while the FaceOccluded and EyeDirection attributes are supported when using <code>DetectFaces</code>, they aren\'t supported when analyzing videos with <code>StartFaceDetection</code> and <code>GetFaceDetection</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Image'], title: 'DetectFacesRequest' })
  .openapi('DetectFacesRequest')

const DominantColorSchema = z
  .object({
    Red: UIntegerSchema.and(
      z.any().openapi({ description: 'The Red RGB value for a dominant color.' }),
    ).exactOptional(),
    Blue: UIntegerSchema.and(
      z.any().openapi({ description: 'The Blue RGB value for a dominant color.' }),
    ).exactOptional(),
    Green: UIntegerSchema.and(
      z.any().openapi({ description: 'The Green RGB value for a dominant color.' }),
    ).exactOptional(),
    HexCode: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Hex code equivalent of the RGB values for a dominant color.',
        }),
    ).exactOptional(),
    CSSColor: StringSchema.and(
      z.any().openapi({ description: 'The CSS color name of a dominant color.' }),
    ).exactOptional(),
    SimplifiedColor: StringSchema.and(
      z
        .any()
        .openapi({ description: 'One of 12 simplified color names applied to a dominant color.' }),
    ).exactOptional(),
    PixelPercent: PercentSchema.and(
      z
        .any()
        .openapi({
          description: 'The percentage of image pixels that have a given dominant color.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A description of the dominant colors in an image.', required: [] })
  .openapi('DominantColor')

const DominantColorsSchema = z.array(DominantColorSchema).openapi('DominantColors')

const InstanceSchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'The position of the label instance on the image.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition has in the accuracy of the bounding box.',
        }),
    ).exactOptional(),
    DominantColors: DominantColorsSchema.and(
      z
        .any()
        .openapi({
          description: 'The dominant colors found in an individual instance of a label.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).',
    required: [],
  })
  .openapi('Instance')

const InstancesSchema = z.array(InstanceSchema).openapi('Instances')

const ParentSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the parent label.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A parent label for a label. A label can have 0, 1, or more parents. ',
    required: [],
  })
  .openapi('Parent')

const ParentsSchema = z.array(ParentSchema).openapi('Parents')

const LabelAliasSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of an alias for a given label.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A potential alias of for a given label.', required: [] })
  .openapi('LabelAlias')

const LabelAliasesSchema = z.array(LabelAliasSchema).openapi('LabelAliases')

const LabelCategorySchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of a category that applies to a given label.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The category that applies to a given label.', required: [] })
  .openapi('LabelCategory')

const LabelCategoriesSchema = z.array(LabelCategorySchema).openapi('LabelCategories')

const LabelSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name (label) of the object or scene.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Level of confidence.' }),
    ).exactOptional(),
    Instances: InstancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>Label</code> represents an object, <code>Instances</code> contains the bounding boxes for each instance of the detected object. Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets.',
        }),
    ).exactOptional(),
    Parents: ParentsSchema.and(
      z
        .any()
        .openapi({
          description: 'The parent labels for a label. The response includes all ancestor labels.',
        }),
    ).exactOptional(),
    Aliases: LabelAliasesSchema.and(
      z.any().openapi({ description: 'A list of potential aliases for a given label.' }),
    ).exactOptional(),
    Categories: LabelCategoriesSchema.and(
      z.any().openapi({ description: 'A list of the categories associated with a given label.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>',
    required: [],
  })
  .openapi('Label')

const LabelsSchema = z.array(LabelSchema).openapi('Labels')

const DetectLabelsImageQualitySchema = z
  .object({
    Brightness: FloatSchema.and(
      z.any().openapi({ description: 'The brightness of an image provided for label detection.' }),
    ).exactOptional(),
    Sharpness: FloatSchema.and(
      z.any().openapi({ description: 'The sharpness of an image provided for label detection.' }),
    ).exactOptional(),
    Contrast: FloatSchema.and(
      z.any().openapi({ description: 'The contrast of an image provided for label detection.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The quality of an image provided for label detection, with regard to brightness, sharpness, and contrast.',
    required: [],
  })
  .openapi('DetectLabelsImageQuality')

const DetectLabelsImageForegroundSchema = z
  .object({
    Quality: DetectLabelsImageQualitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The quality of the image foreground as defined by brightness and sharpness.',
        }),
    ).exactOptional(),
    DominantColors: DominantColorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dominant colors found in the foreground of an image, defined with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The foreground of the image with regard to image quality and dominant colors.',
    required: [],
  })
  .openapi('DetectLabelsImageForeground')

const DetectLabelsImageBackgroundSchema = z
  .object({
    Quality: DetectLabelsImageQualitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The quality of the image background as defined by brightness and sharpness.',
        }),
    ).exactOptional(),
    DominantColors: DominantColorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dominant colors found in the background of an image, defined with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The background of the image with regard to image quality and dominant colors.',
    required: [],
  })
  .openapi('DetectLabelsImageBackground')

const DetectLabelsImagePropertiesSchema = z
  .object({
    Quality: DetectLabelsImageQualitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the quality of the image foreground as defined by brightness, sharpness, and contrast. The higher the value the greater the brightness, sharpness, and contrast respectively.',
        }),
    ).exactOptional(),
    DominantColors: DominantColorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the dominant colors found in an image, described with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).',
        }),
    ).exactOptional(),
    Foreground: DetectLabelsImageForegroundSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the properties of an image’s foreground, including the foreground’s quality and dominant colors, including the quality and dominant colors of the image.',
        }),
    ).exactOptional(),
    Background: DetectLabelsImageBackgroundSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the properties of an image’s background, including the background’s quality and dominant colors, including the quality and dominant colors of the image.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the quality and dominant colors of an input image. Quality and color information is returned for the entire image, foreground, and background.',
    required: [],
  })
  .openapi('DetectLabelsImageProperties')

const DetectLabelsResponseSchema = z
  .object({
    Labels: LabelsSchema.and(
      z.any().openapi({ description: 'An array of labels for the real-world objects detected. ' }),
    ).exactOptional(),
    OrientationCorrection: OrientationCorrectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The value of <code>OrientationCorrection</code> is always null.</p> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata.</p> <p>Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without orientation information in the image Exif metadata. The bounding box coordinates aren't translated and represent the object locations before the image is rotated. </p>",
        }),
    ).exactOptional(),
    LabelModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the label detection model that was used to detect labels.',
        }),
    ).exactOptional(),
    ImageProperties: DetectLabelsImagePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the properties of the input image, such as brightness, sharpness, contrast, and dominant colors.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Labels: [
        { Confidence: 99.25072479248047, Name: 'People' },
        { Confidence: 99.25074005126953, Name: 'Person' },
      ],
    },
    required: [],
  })
  .openapi('DetectLabelsResponse')

const DetectLabelsFeatureNameSchema = z
  .enum(['GENERAL_LABELS', 'IMAGE_PROPERTIES'])
  .openapi('DetectLabelsFeatureName')

const DetectLabelsFeatureListSchema = z
  .array(DetectLabelsFeatureNameSchema)
  .min(0)
  .max(2)
  .openapi('DetectLabelsFeatureList')

const GeneralLabelsFilterValueSchema = z
  .string()
  .regex(/[A-Za-z0-9àâèçñó'-_(). ]*/)
  .min(0)
  .max(50)
  .openapi('GeneralLabelsFilterValue')

const GeneralLabelsFilterListSchema = z
  .array(GeneralLabelsFilterValueSchema)
  .min(0)
  .max(100)
  .openapi('GeneralLabelsFilterList')

const GeneralLabelsSettingsSchema = z
  .object({
    LabelInclusionFilters: GeneralLabelsFilterListSchema.and(
      z
        .any()
        .openapi({
          description: 'The labels that should be included in the return from DetectLabels.',
        }),
    ).exactOptional(),
    LabelExclusionFilters: GeneralLabelsFilterListSchema.and(
      z
        .any()
        .openapi({
          description: 'The labels that should be excluded from the return from DetectLabels.',
        }),
    ).exactOptional(),
    LabelCategoryInclusionFilters: GeneralLabelsFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label categories that should be included in the return from DetectLabels.',
        }),
    ).exactOptional(),
    LabelCategoryExclusionFilters: GeneralLabelsFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label categories that should be excluded from the return from DetectLabels.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual labels or entire label categories. To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>.',
    required: [],
  })
  .openapi('GeneralLabelsSettings')

const DetectLabelsMaxDominantColorsSchema = z
  .int()
  .min(0)
  .max(20)
  .openapi('DetectLabelsMaxDominantColors')

const DetectLabelsImagePropertiesSettingsSchema = z
  .object({
    MaxDominantColors: DetectLabelsMaxDominantColorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of dominant colors to return when detecting labels in an image. The default value is 10.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Settings for the IMAGE_PROPERTIES feature type.', required: [] })
  .openapi('DetectLabelsImagePropertiesSettings')

const DetectLabelsSettingsSchema = z
  .object({
    GeneralLabels: GeneralLabelsSettingsSchema.and(
      z.any().openapi({ description: 'Contains the specified filters for GENERAL_LABELS.' }),
    ).exactOptional(),
    ImageProperties: DetectLabelsImagePropertiesSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the chosen number of maximum dominant colors in an image.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Settings for the DetectLabels request. Settings can include filters for both GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive or exclusive and applied to individual labels or label categories. IMAGE_PROPERTIES filters allow specification of a maximum number of dominant colors.',
    required: [],
  })
  .openapi('DetectLabelsSettings')

const DetectLabelsRequestSchema = z
  .object({
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. Images stored in an S3 Bucket do not need to be base64-encoded.</p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
    MaxLabels: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input parameter.',
        }),
    ).exactOptional(),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value.</p> <p>If <code>MinConfidence</code> is not specified, the operation returns labels with a confidence values greater than or equal to 55 percent. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input parameter.</p>",
        }),
    ).exactOptional(),
    Features: DetectLabelsFeatureListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label detection feature, while specifying IMAGE_PROPERTIES returns information regarding image color and quality. If no option is specified GENERAL_LABELS is used by default.',
        }),
    ).exactOptional(),
    Settings: DetectLabelsSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the filters to be applied to returned detected labels and image properties. Specified filters can be inclusive, exclusive, or a combination of both. Filters can be used for individual labels or label categories. The exact label names or label categories must be supplied. For a full list of labels and label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting labels</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Image'], title: 'DetectLabelsRequest' })
  .openapi('DetectLabelsRequest')

const ModerationLabelSchema = z
  .object({
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the confidence that Amazon Rekognition has that the label has been correctly identified.</p> <p>If you don't specify the <code>MinConfidence</code> parameter in the call to <code>DetectModerationLabels</code>, the operation returns labels with a confidence value greater than or equal to 50 percent.</p>",
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The label name for the type of unsafe content detected in the image.',
        }),
    ).exactOptional(),
    ParentName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the parent label. Labels at the top level of the hierarchy have the parent label <code>""</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide.',
    required: [],
  })
  .openapi('ModerationLabel')

const ModerationLabelsSchema = z.array(ModerationLabelSchema).openapi('ModerationLabels')

const HumanLoopArnSchema = z.string().max(256).openapi('HumanLoopArn')

const HumanLoopActivationReasonSchema = z.string().openapi('HumanLoopActivationReason')

const HumanLoopActivationReasonsSchema = z
  .array(HumanLoopActivationReasonSchema)
  .min(1)
  .openapi('HumanLoopActivationReasons')

const HumanLoopActivationConditionsEvaluationResultsSchema = z
  .string()
  .max(10240)
  .openapi('HumanLoopActivationConditionsEvaluationResults')

const HumanLoopActivationOutputSchema = z
  .object({
    HumanLoopArn: HumanLoopArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the HumanLoop created.' }),
    ).exactOptional(),
    HumanLoopActivationReasons: HumanLoopActivationReasonsSchema.and(
      z.any().openapi({ description: 'Shows if and why human review was needed.' }),
    ).exactOptional(),
    HumanLoopActivationConditionsEvaluationResults:
      HumanLoopActivationConditionsEvaluationResultsSchema.and(
        z
          .any()
          .openapi({
            description:
              'Shows the result of condition evaluations, including those conditions which activated a human review.',
          }),
      ).exactOptional(),
  })
  .openapi({
    description:
      'Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review.',
    required: [],
  })
  .openapi('HumanLoopActivationOutput')

const DetectModerationLabelsResponseSchema = z
  .object({
    ModerationLabels: ModerationLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Array of detected Moderation labels and the time, in milliseconds from the start of the video, they were detected.',
        }),
    ).exactOptional(),
    ModerationModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the moderation detection model that was used to detect unsafe content.',
        }),
    ).exactOptional(),
    HumanLoopActivationOutput: HumanLoopActivationOutputSchema.and(
      z.any().openapi({ description: 'Shows the results of the human in the loop evaluation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectModerationLabelsResponse')

const HumanLoopNameSchema = z
  .string()
  .regex(/^[a-z0-9](-*[a-z0-9])*/)
  .min(1)
  .max(63)
  .openapi('HumanLoopName')

const FlowDefinitionArnSchema = z.string().max(256).openapi('FlowDefinitionArn')

const ContentClassifierSchema = z
  .enum(['FreeOfPersonallyIdentifiableInformation', 'FreeOfAdultContent'])
  .openapi('ContentClassifier')

const ContentClassifiersSchema = z
  .array(ContentClassifierSchema)
  .max(256)
  .openapi('ContentClassifiers')

const HumanLoopDataAttributesSchema = z
  .object({
    ContentClassifiers: ContentClassifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets whether the input image is free of personally identifiable information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.',
    required: [],
  })
  .openapi('HumanLoopDataAttributes')

const HumanLoopConfigSchema = z
  .object({
    HumanLoopName: HumanLoopNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the human review used for this image. This should be kept unique within a region.',
        }),
    ),
    FlowDefinitionArn: FlowDefinitionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by using the Amazon Sagemaker <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html">CreateFlowDefinition</a> Operation. ',
        }),
    ),
    DataAttributes: HumanLoopDataAttributesSchema.and(
      z.any().openapi({ description: 'Sets attributes of the input data.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HumanLoopName', 'FlowDefinitionArn'],
    description:
      'Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.',
  })
  .openapi('HumanLoopConfig')

const DetectModerationLabelsRequestSchema = z
  .object({
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value.</p> <p>If you don't specify <code>MinConfidence</code>, the operation returns labels with confidence values greater than or equal to 50 percent.</p>",
        }),
    ).exactOptional(),
    HumanLoopConfig: HumanLoopConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets up the configuration for human evaluation, including the FlowDefinition the image will be sent to.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Image'], title: 'DetectModerationLabelsRequest' })
  .openapi('DetectModerationLabelsRequest')

const HumanLoopQuotaExceededExceptionSchema = z.any().openapi('HumanLoopQuotaExceededException')

const BodyPartSchema = z.enum(['FACE', 'HEAD', 'LEFT_HAND', 'RIGHT_HAND']).openapi('BodyPart')

const ProtectiveEquipmentTypeSchema = z
  .enum(['FACE_COVER', 'HAND_COVER', 'HEAD_COVER'])
  .openapi('ProtectiveEquipmentType')

const CoversBodyPartSchema = z
  .object({
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition has in the value of <code>Value</code>.',
        }),
    ).exactOptional(),
    Value: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'True if the PPE covers the corresponding body part, otherwise false.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>.',
    required: [],
  })
  .openapi('CoversBodyPart')

const EquipmentDetectionSchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'A bounding box surrounding the item of detected PPE.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition has that the bounding box (<code>BoundingBox</code>) contains an item of PPE.',
        }),
    ).exactOptional(),
    Type: ProtectiveEquipmentTypeSchema.and(
      z.any().openapi({ description: 'The type of detected PPE.' }),
    ).exactOptional(),
    CoversBodyPart: CoversBodyPartSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the body part covered by the detected PPE.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.',
    required: [],
  })
  .openapi('EquipmentDetection')

const EquipmentDetectionsSchema = z.array(EquipmentDetectionSchema).openapi('EquipmentDetections')

const ProtectiveEquipmentBodyPartSchema = z
  .object({
    Name: BodyPartSchema.and(
      z.any().openapi({ description: 'The detected body part.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition has in the detection accuracy of the detected body part. ',
        }),
    ).exactOptional(),
    EquipmentDetections: EquipmentDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Personal Protective Equipment items detected around a body part.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. ',
    required: [],
  })
  .openapi('ProtectiveEquipmentBodyPart')

const BodyPartsSchema = z.array(ProtectiveEquipmentBodyPartSchema).openapi('BodyParts')

const ProtectiveEquipmentPersonSchema = z
  .object({
    BodyParts: BodyPartsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of body parts detected on a person's body (including body parts without PPE). ",
        }),
    ).exactOptional(),
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'A bounding box around the detected person.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition has that the bounding box contains a person.',
        }),
    ).exactOptional(),
    Id: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the detected person. The identifier is only unique for a single call to <code>DetectProtectiveEquipment</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.',
    required: [],
  })
  .openapi('ProtectiveEquipmentPerson')

const ProtectiveEquipmentPersonsSchema = z
  .array(ProtectiveEquipmentPersonSchema)
  .openapi('ProtectiveEquipmentPersons')

const ProtectiveEquipmentPersonIdsSchema = z
  .array(UIntegerSchema)
  .openapi('ProtectiveEquipmentPersonIds')

const ProtectiveEquipmentSummarySchema = z
  .object({
    PersonsWithRequiredEquipment: ProtectiveEquipmentPersonIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of IDs for persons who are wearing detected personal protective equipment. ',
        }),
    ).exactOptional(),
    PersonsWithoutRequiredEquipment: ProtectiveEquipmentPersonIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of IDs for persons who are not wearing all of the types of PPE specified in the <code>RequiredEquipmentTypes</code> field of the detected personal protective equipment. ',
        }),
    ).exactOptional(),
    PersonsIndeterminate: ProtectiveEquipmentPersonIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of IDs for persons where it was not possible to determine if they are wearing personal protective equipment. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p>',
    required: [],
  })
  .openapi('ProtectiveEquipmentSummary')

const DetectProtectiveEquipmentResponseSchema = z
  .object({
    ProtectiveEquipmentModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the PPE detection model used to detect PPE in the image.',
        }),
    ).exactOptional(),
    Persons: ProtectiveEquipmentPersonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of persons detected in the image (including persons not wearing PPE).',
        }),
    ).exactOptional(),
    Summary: ProtectiveEquipmentSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the types of PPE specified in the <code>SummarizationAttributes</code> input parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectProtectiveEquipmentResponse')

const ProtectiveEquipmentTypesSchema = z
  .array(ProtectiveEquipmentTypeSchema)
  .openapi('ProtectiveEquipmentTypes')

const ProtectiveEquipmentSummarizationAttributesSchema = z
  .object({
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The minimum confidence level for which you want summary information. The confidence level applies to person detection, body part detection, equipment detection, and body part coverage. Amazon Rekognition doesn't return summary information with a confidence than this specified value. There isn't a default value.</p> <p>Specify a <code>MinConfidence</code> value that is between 50-100% as <code>DetectProtectiveEquipment</code> returns predictions only where the detection confidence is between 50% - 100%. If you specify a value that is less than 50%, the results are the same specifying a value of 50%.</p> <p> </p>",
        }),
    ),
    RequiredEquipmentTypes: ProtectiveEquipmentTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of personal protective equipment types for which you want summary information. If a person is detected wearing a required requipment type, the person's ID is added to the <code>PersonsWithRequiredEquipment</code> array field returned in <a>ProtectiveEquipmentSummary</a> by <code>DetectProtectiveEquipment</code>. ",
        }),
    ),
  })
  .openapi({
    required: ['MinConfidence', 'RequiredEquipmentTypes'],
    description:
      'Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from <code>DetectProtectiveEquipment</code>. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see <a>ProtectiveEquipmentSummary</a>.',
  })
  .openapi('ProtectiveEquipmentSummarizationAttributes')

const DetectProtectiveEquipmentRequestSchema = z
  .object({
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image in which you want to detect PPE on detected persons. The image can be passed as image bytes or you can reference an image stored in an Amazon S3 bucket. ',
        }),
    ),
    SummarizationAttributes: ProtectiveEquipmentSummarizationAttributesSchema.and(
      z.any().openapi({ description: 'An array of PPE types that you want to summarize.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Image'], title: 'DetectProtectiveEquipmentRequest' })
  .openapi('DetectProtectiveEquipmentRequest')

const TextTypesSchema = z.enum(['LINE', 'WORD']).openapi('TextTypes')

const TextDetectionSchema = z
  .object({
    DetectedText: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The word or line of text recognized by Amazon Rekognition. ' }),
    ).exactOptional(),
    Type: TextTypesSchema.and(
      z.any().openapi({ description: 'The type of text that was detected.' }),
    ).exactOptional(),
    Id: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the detected text. The identifier is only unique for a single call to <code>DetectText</code>. ',
        }),
    ).exactOptional(),
    ParentId: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Parent identifier for the detected text identified by the value of <code>ID</code>. If the type of detected text is <code>LINE</code>, the value of <code>ParentId</code> is <code>Null</code>. ',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy of the geometry points around the detected text.',
        }),
    ).exactOptional(),
    Geometry: GeometrySchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the detected text on the image. Includes an axis aligned coarse bounding box surrounding the text and a finer grain polygon for more accurate spatial information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting text in the Amazon Rekognition Developer Guide.</p>',
    required: [],
  })
  .openapi('TextDetection')

const TextDetectionListSchema = z.array(TextDetectionSchema).openapi('TextDetectionList')

const DetectTextResponseSchema = z
  .object({
    TextDetections: TextDetectionListSchema.and(
      z.any().openapi({ description: 'An array of text that was detected in the input image.' }),
    ).exactOptional(),
    TextModelVersion: StringSchema.and(
      z.any().openapi({ description: 'The model version used to detect text.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectTextResponse')

const BoundingBoxHeightSchema = z.float32().min(0).max(1).openapi('BoundingBoxHeight')

const BoundingBoxWidthSchema = z.float32().min(0).max(1).openapi('BoundingBoxWidth')

const DetectionFilterSchema = z
  .object({
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the confidence of word detection. Words with detection confidence below this will be excluded from the result. Values should be between 0 and 100. The default MinConfidence is 80.',
        }),
    ).exactOptional(),
    MinBoundingBoxHeight: BoundingBoxHeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the minimum height of the word bounding box. Words with bounding box heights lesser than this value will be excluded from the result. Value is relative to the video frame height.',
        }),
    ).exactOptional(),
    MinBoundingBoxWidth: BoundingBoxWidthSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the minimum width of the word bounding box. Words with bounding boxes widths lesser than this value will be excluded from the result. Value is relative to the video frame width.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A set of parameters that allow you to filter out certain results from your returned results.',
    required: [],
  })
  .openapi('DetectionFilter')

const DetectTextFiltersSchema = z
  .object({
    WordFilter: DetectionFilterSchema.exactOptional(),
    RegionsOfInterest: RegionsOfInterestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A Filter focusing on a certain area of the image. Uses a <code>BoundingBox</code> object to set the region of the image.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in. ',
    required: [],
  })
  .openapi('DetectTextFilters')

const DetectTextRequestSchema = z
  .object({
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The input image as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Rekognition operations, you can't pass image bytes. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>",
        }),
    ),
    Filters: DetectTextFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional parameters that let you set the criteria that the text must meet to be included in your response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Image'], title: 'DetectTextRequest' })
  .openapi('DetectTextRequest')

const DisassociatedFaceSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: 'Unique identifier assigned to the face.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides face metadata for the faces that are disassociated from a specific UserID.',
    required: [],
  })
  .openapi('DisassociatedFace')

const DisassociatedFacesListSchema = z
  .array(DisassociatedFaceSchema)
  .min(0)
  .max(100)
  .openapi('DisassociatedFacesList')

const UnsuccessfulFaceDisassociationReasonSchema = z
  .enum(['FACE_NOT_FOUND', 'ASSOCIATED_TO_A_DIFFERENT_USER'])
  .openapi('UnsuccessfulFaceDisassociationReason')

const UnsuccessfulFaceDisassociationReasonsSchema = z
  .array(UnsuccessfulFaceDisassociationReasonSchema)
  .openapi('UnsuccessfulFaceDisassociationReasons')

const UnsuccessfulFaceDisassociationSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: 'A unique identifier assigned to the face. ' }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: 'A provided ID for the UserID. Unique within the collection. ' }),
    ).exactOptional(),
    Reasons: UnsuccessfulFaceDisassociationReasonsSchema.and(
      z.any().openapi({ description: 'The reason why the deletion was unsuccessful. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully disassociated.',
    required: [],
  })
  .openapi('UnsuccessfulFaceDisassociation')

const UnsuccessfulFaceDisassociationListSchema = z
  .array(UnsuccessfulFaceDisassociationSchema)
  .min(0)
  .max(500)
  .openapi('UnsuccessfulFaceDisassociationList')

const DisassociateFacesResponseSchema = z
  .object({
    DisassociatedFaces: DisassociatedFacesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of DissociatedFace objects containing FaceIds that are successfully disassociated with the UserID is returned. Returned if the DisassociatedFaces action is successful.',
        }),
    ).exactOptional(),
    UnsuccessfulFaceDisassociations: UnsuccessfulFaceDisassociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of UnsuccessfulDisassociation objects containing FaceIds that are not successfully associated, along with the reasons for the failure to associate. Returned if the DisassociateFaces action is successful.',
        }),
    ).exactOptional(),
    UserStatus: UserStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of an update made to a User. Reflects if the User has been updated for every requested change.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DisassociatedFaces: [{ FaceId: 'c92265d4-5f9c-43af-a58e-12be0ce02bc3' }],
      UnsuccessfulFaceDisassociations: [
        {
          FaceId: 'f5817d37-94f6-4335-bfee-6cf79a3d806e',
          Reasons: ['ASSOCIATED_TO_A_DIFFERENT_USER'],
          UserId: 'demoUser1',
        },
      ],
      UserStatus: 'UPDATING',
    },
    required: [],
  })
  .openapi('DisassociateFacesResponse')

const DisassociateFacesRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'The ID of an existing collection containing the UserID.' }),
    ),
    UserId: UserIdSchema.and(z.any().openapi({ description: 'ID for the existing UserID.' })),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the request to <code>DisassociateFaces</code>. If you use the same token with multiple <code>DisassociateFaces</code> requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.',
        }),
    ).exactOptional(),
    FaceIds: UserFaceIdListSchema.and(
      z.any().openapi({ description: 'An array of face IDs to disassociate from the UserID. ' }),
    ),
  })
  .openapi({ required: ['CollectionId', 'UserId', 'FaceIds'], title: 'DisassociateFacesRequest' })
  .openapi('DisassociateFacesRequest')

const DistributeDatasetEntriesResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DistributeDatasetEntriesResponse')

const DistributeDatasetSchema = z
  .object({
    Arn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the dataset that you want to use. ',
        }),
    ),
  })
  .openapi({
    required: ['Arn'],
    description:
      ' A training dataset or a test dataset used in a dataset distribution operation. For more information, see <a>DistributeDatasetEntries</a>. ',
  })
  .openapi('DistributeDataset')

const DistributeDatasetMetadataListSchema = z
  .array(DistributeDatasetSchema)
  .length(2)
  .openapi('DistributeDatasetMetadataList')

const DistributeDatasetEntriesRequestSchema = z
  .object({
    Datasets: DistributeDatasetMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNS for the training dataset and test dataset that you want to use. The datasets must belong to the same project. The test dataset must be empty. ',
        }),
    ),
  })
  .openapi({ required: ['Datasets'], title: 'DistributeDatasetEntriesRequest' })
  .openapi('DistributeDatasetEntriesRequest')

const UrlSchema = z.string().openapi('Url')

const UrlsSchema = z.array(UrlSchema).min(0).max(255).openapi('Urls')

const KnownGenderTypeSchema = z
  .enum(['Male', 'Female', 'Nonbinary', 'Unlisted'])
  .openapi({
    description: 'A list of enum string of possible gender values that Celebrity returns.',
  })
  .openapi('KnownGenderType')

const KnownGenderSchema = z
  .object({
    Type: KnownGenderTypeSchema.and(
      z
        .any()
        .openapi({ description: 'A string value of the KnownGender info about the Celebrity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted.',
    required: [],
  })
  .openapi('KnownGender')

const GetCelebrityInfoResponseSchema = z
  .object({
    Urls: UrlsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of URLs pointing to additional celebrity information. ',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the celebrity.' }),
    ).exactOptional(),
    KnownGender: KnownGenderSchema.and(
      z.any().openapi({ description: 'Retrieves the known gender for the celebrity.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCelebrityInfoResponse')

const RekognitionUniqueIdSchema = z
  .string()
  .regex(/[0-9A-Za-z]*/)
  .openapi('RekognitionUniqueId')

const GetCelebrityInfoRequestSchema = z
  .object({
    Id: RekognitionUniqueIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID for the celebrity. You get the celebrity ID from a call to the <a>RecognizeCelebrities</a> operation, which recognizes celebrities in an image. ',
        }),
    ),
  })
  .openapi({ required: ['Id'], title: 'GetCelebrityInfoRequest' })
  .openapi('GetCelebrityInfoRequest')

const VideoJobStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('VideoJobStatus')

const VideoColorRangeSchema = z.enum(['FULL', 'LIMITED']).openapi('VideoColorRange')

const VideoMetadataSchema = z
  .object({
    Codec: StringSchema.and(
      z.any().openapi({ description: 'Type of compression used in the analyzed video. ' }),
    ).exactOptional(),
    DurationMillis: ULongSchema.and(
      z.any().openapi({ description: 'Length of the video in milliseconds.' }),
    ).exactOptional(),
    Format: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Format of the analyzed video. Possible values are MP4, MOV and AVI. ',
        }),
    ).exactOptional(),
    FrameRate: FloatSchema.and(
      z.any().openapi({ description: 'Number of frames per second in the video.' }),
    ).exactOptional(),
    FrameHeight: ULongSchema.and(
      z.any().openapi({ description: 'Vertical pixel dimension of the video.' }),
    ).exactOptional(),
    FrameWidth: ULongSchema.and(
      z.any().openapi({ description: 'Horizontal pixel dimension of the video.' }),
    ).exactOptional(),
    ColorRange: VideoColorRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.',
    required: [],
  })
  .openapi('VideoMetadata')

const PaginationTokenSchema = z.string().max(255).openapi('PaginationToken')

const TimestampSchema = z.int().openapi('Timestamp')

const CelebrityDetailSchema = z
  .object({
    Urls: UrlsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of URLs pointing to additional celebrity information. ',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the celebrity.' }),
    ).exactOptional(),
    Id: RekognitionUniqueIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the celebrity. ' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity. ',
        }),
    ).exactOptional(),
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'Bounding box around the body of a celebrity.' }),
    ).exactOptional(),
    Face: FaceDetailSchema.and(
      z.any().openapi({ description: 'Face details for the recognized celebrity.' }),
    ).exactOptional(),
    KnownGender: KnownGenderSchema.and(
      z.any().openapi({ description: 'Retrieves the known gender for the celebrity.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a recognized celebrity.', required: [] })
  .openapi('CelebrityDetail')

const CelebrityRecognitionSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds from the start of the video, that the celebrity was recognized. Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the celebrity first appears.',
        }),
    ).exactOptional(),
    Celebrity: CelebrityDetailSchema.and(
      z.any().openapi({ description: 'Information about a recognized celebrity.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.',
    required: [],
  })
  .openapi('CelebrityRecognition')

const CelebrityRecognitionsSchema = z
  .array(CelebrityRecognitionSchema)
  .openapi('CelebrityRecognitions')

const JobIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi('JobId')

const VideoSchema = z
  .object({
    S3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket name and file name for the video.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.',
    required: [],
  })
  .openapi('Video')

const JobTagSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-:+=\/]+/)
  .min(1)
  .max(1024)
  .openapi('JobTag')

const GetCelebrityRecognitionResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the celebrity recognition job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition Video operation.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of celebrities.',
        }),
    ).exactOptional(),
    Celebrities: CelebrityRecognitionsSchema.and(
      z.any().openapi({ description: 'Array of celebrities recognized in the video.' }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the celebrity recognition operation for which you want to obtain results. The job identifer is returned by an initial call to StartCelebrityRecognition.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCelebrityRecognitionResponse')

const MaxResultsSchema = z.int().min(1).openapi('MaxResults')

const CelebrityRecognitionSortBySchema = z
  .enum(['ID', 'TIMESTAMP'])
  .openapi('CelebrityRecognitionSortBy')

const GetCelebrityRecognitionRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the required celebrity recognition analysis. You can get the job identifer from a call to <code>StartCelebrityRecognition</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more recognized celebrities to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of celebrities. ',
        }),
    ).exactOptional(),
    SortBy: CelebrityRecognitionSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Sort to use for celebrities returned in <code>Celebrities</code> field. Specify <code>ID</code> to sort by the celebrity identifier, specify <code>TIMESTAMP</code> to sort by the time the celebrity was recognized.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetCelebrityRecognitionRequest' })
  .openapi('GetCelebrityRecognitionRequest')

const ContentModerationDetectionSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time, in milliseconds from the beginning of the video, that the content moderation label was detected. Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the moderated content first appears.',
        }),
    ).exactOptional(),
    ModerationLabel: ModerationLabelSchema.and(
      z
        .any()
        .openapi({ description: 'The content moderation label detected by in the stored video.' }),
    ).exactOptional(),
    StartTimestampMillis: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time in milliseconds defining the start of the timeline segment containing a continuously detected moderation label.',
        }),
    ).exactOptional(),
    EndTimestampMillis: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time in milliseconds defining the end of the timeline segment containing a continuously detected moderation label. ',
        }),
    ).exactOptional(),
    DurationMillis: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an inappropriate, unwanted, or offensive content label detection in a stored video.',
    required: [],
  })
  .openapi('ContentModerationDetection')

const ContentModerationDetectionsSchema = z
  .array(ContentModerationDetectionSchema)
  .openapi('ContentModerationDetections')

const ContentModerationSortBySchema = z
  .enum(['NAME', 'TIMESTAMP'])
  .openapi('ContentModerationSortBy')

const ContentModerationAggregateBySchema = z
  .enum(['TIMESTAMPS', 'SEGMENTS'])
  .openapi('ContentModerationAggregateBy')

const GetContentModerationRequestMetadataSchema = z
  .object({
    SortBy: ContentModerationSortBySchema.and(
      z
        .any()
        .openapi({ description: 'The sorting method chosen for a GetContentModeration request.' }),
    ).exactOptional(),
    AggregateBy: ContentModerationAggregateBySchema.and(
      z
        .any()
        .openapi({
          description: 'The aggregation method chosen for a GetContentModeration request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata about a content moderation request, including the SortBy and AggregateBy options.',
    required: [],
  })
  .openapi('GetContentModerationRequestMetadata')

const GetContentModerationResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The current status of the content moderation analysis job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from <code>GetContentModeration</code>. ',
        }),
    ).exactOptional(),
    ModerationLabels: ContentModerationDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detected inappropriate, unwanted, or offensive content moderation labels and the time(s) they were detected.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of content moderation labels. ',
        }),
    ).exactOptional(),
    ModerationModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the moderation detection model that was used to detect inappropriate, unwanted, or offensive content.',
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the content moderation operation for which you want to obtain results. The job identifer is returned by an initial call to StartContentModeration.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartContentModeration and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
    GetRequestMetadata: GetContentModerationRequestMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the paramters used when getting a response. Includes information on aggregation and sorting methods.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContentModerationResponse')

const GetContentModerationRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the inappropriate, unwanted, or offensive content moderation job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetContentModeration</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of content moderation labels.',
        }),
    ).exactOptional(),
    SortBy: ContentModerationSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Sort to use for elements in the <code>ModerationLabelDetections</code> array. Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected. Use <code>NAME</code> to alphabetically group elements for a label together. Within each label group, the array element are sorted by detection confidence. The default sort is by <code>TIMESTAMP</code>.',
        }),
    ).exactOptional(),
    AggregateBy: ContentModerationAggregateBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines how to aggregate results of the StartContentModeration request. Default aggregation option is TIMESTAMPS. SEGMENTS mode aggregates moderation labels over time.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetContentModerationRequest' })
  .openapi('GetContentModerationRequest')

const FaceDetectionSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time, in milliseconds from the start of the video, that the face was detected. Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the face first appears.',
        }),
    ).exactOptional(),
    Face: FaceDetailSchema.and(
      z.any().openapi({ description: 'The face properties for the detected face.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a face detected in a video analysis request and the time the face was detected in the video. ',
    required: [],
  })
  .openapi('FaceDetection')

const FaceDetectionsSchema = z.array(FaceDetectionSchema).openapi('FaceDetections')

const GetFaceDetectionResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the face detection job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces. ',
        }),
    ).exactOptional(),
    Faces: FaceDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of faces detected in the video. Each element contains a detected face's details and the time, in milliseconds from the start of the video, the face was detected. ",
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the face detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartFaceDetection.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartFaceDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFaceDetectionResponse')

const GetFaceDetectionRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for the face detection job. The <code>JobId</code> is returned from <code>StartFaceDetection</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more faces to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetFaceDetectionRequest' })
  .openapi('GetFaceDetectionRequest')

const LivenessSessionStatusSchema = z
  .enum(['CREATED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'EXPIRED'])
  .openapi('LivenessSessionStatus')

const LivenessImageBlobSchema = z.string().min(1).max(204800).openapi('LivenessImageBlob')

const AuditImageSchema = z
  .object({
    Bytes: LivenessImageBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Base64-encoded bytes representing an image selected from the Face Liveness video and returned for audit purposes.',
        }),
    ).exactOptional(),
    S3Object: S3ObjectSchema.exactOptional(),
    BoundingBox: BoundingBoxSchema.exactOptional(),
  })
  .openapi({
    description:
      'An image that is picked from the Face Liveness video and returned for audit trail purposes, returned as Base64-encoded bytes.',
    required: [],
  })
  .openapi('AuditImage')

const AuditImagesSchema = z.array(AuditImageSchema).openapi('AuditImages')

const GetFaceLivenessSessionResultsResponseSchema = z
  .object({
    SessionId: LivenessSessionIdSchema.and(
      z.any().openapi({ description: 'The sessionId for which this request was called.' }),
    ),
    Status: LivenessSessionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.',
        }),
    ),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Probabalistic confidence score for if the person in the given video was live, represented as a float value between 0 to 100.',
        }),
    ).exactOptional(),
    ReferenceImage: AuditImageSchema.and(
      z
        .any()
        .openapi({
          description:
            "A high-quality image from the Face Liveness video that can be used for face comparison or search. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. In case the reference image is not returned, it's recommended to retry the Liveness check.",
        }),
    ).exactOptional(),
    AuditImages: AuditImagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of images from the Face Liveness video that can be used for audit purposes. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. If no Amazon S3 bucket is defined, raw bytes are sent instead.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SessionId', 'Status'] })
  .openapi('GetFaceLivenessSessionResultsResponse')

const GetFaceLivenessSessionResultsRequestSchema = z
  .object({
    SessionId: LivenessSessionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an idempotency token for all operations associated with the session.',
        }),
    ),
  })
  .openapi({ required: ['SessionId'], title: 'GetFaceLivenessSessionResultsRequest' })
  .openapi('GetFaceLivenessSessionResultsRequest')

const SessionNotFoundExceptionSchema = z.any().openapi('SessionNotFoundException')

const PersonIndexSchema = z.int().openapi('PersonIndex')

const PersonDetailSchema = z
  .object({
    Index: PersonIndexSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the person detected person within a video. Use to keep track of the person throughout the video. The identifier is not stored by Amazon Rekognition.',
        }),
    ).exactOptional(),
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'Bounding box around the detected person.' }),
    ).exactOptional(),
    Face: FaceDetailSchema.and(
      z.any().openapi({ description: 'Face details for the detected person.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about a person detected in a video analysis request.',
    required: [],
  })
  .openapi('PersonDetail')

const ImageIdSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('ImageId')

const ExternalImageIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-:]+/)
  .min(1)
  .max(255)
  .openapi('ExternalImageId')

const IndexFacesModelVersionSchema = z
  .string()
  .regex(/[0-9\.]+/)
  .openapi('IndexFacesModelVersion')

const FaceSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z
        .any()
        .openapi({ description: 'Unique identifier that Amazon Rekognition assigns to the face.' }),
    ).exactOptional(),
    BoundingBox: BoundingBoxSchema.and(
      z.any().openapi({ description: 'Bounding box of the face.' }),
    ).exactOptional(),
    ImageId: ImageIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Unique identifier that Amazon Rekognition assigns to the input image.',
        }),
    ).exactOptional(),
    ExternalImageId: ExternalImageIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifier that you assign to all the faces in the input image.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Confidence level that the bounding box contains a face (and not a different object such as a tree).',
        }),
    ).exactOptional(),
    IndexFacesModelVersion: IndexFacesModelVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The version of the face detect and storage model that was used when indexing the face vector. ',
        }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z.any().openapi({ description: 'Unique identifier assigned to the user.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. ',
    required: [],
  })
  .openapi('Face')

const FaceMatchSchema = z
  .object({
    Similarity: PercentSchema.and(
      z.any().openapi({ description: 'Confidence in the match of this face with the input face.' }),
    ).exactOptional(),
    Face: FaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the face properties such as the bounding box, face ID, image ID of the source image, and external image ID that you assigned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.',
    required: [],
  })
  .openapi('FaceMatch')

const FaceMatchListSchema = z.array(FaceMatchSchema).openapi('FaceMatchList')

const PersonMatchSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds from the beginning of the video, that the person was matched in the video.',
        }),
    ).exactOptional(),
    Person: PersonDetailSchema.and(
      z.any().openapi({ description: 'Information about the matched person.' }),
    ).exactOptional(),
    FaceMatches: FaceMatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the faces in the input collection that match the face of a person in the video.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. ',
    required: [],
  })
  .openapi('PersonMatch')

const PersonMatchesSchema = z.array(PersonMatchSchema).openapi('PersonMatches')

const GetFaceSearchResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the face search job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of search results. ',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition Video operation. ',
        }),
    ).exactOptional(),
    Persons: PersonMatchesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of persons, <a>PersonMatch</a>, in the video whose face(s) match the face(s) in an Amazon Rekognition collection. It also includes time information for when persons are matched in the video. You specify the input collection in an initial call to <code>StartFaceSearch</code>. Each <code>Persons</code> element includes a time the person was matched, face match details (<code>FaceMatches</code>) for matching faces in the collection, and person information (<code>Person</code>) for the matched person. ',
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the face search operation for which you want to obtain results. The job identifer is returned by an initial call to StartFaceSearch.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartFaceSearch and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFaceSearchResponse')

const FaceSearchSortBySchema = z.enum(['INDEX', 'TIMESTAMP']).openapi('FaceSearchSortBy')

const GetFaceSearchRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The job identifer for the search request. You get the job identifier from an initial call to <code>StartFaceSearch</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of search results. ',
        }),
    ).exactOptional(),
    SortBy: FaceSearchSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Sort to use for grouping faces in the response. Use <code>TIMESTAMP</code> to group faces by the time that they are recognized. Use <code>INDEX</code> to sort by recognized faces. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetFaceSearchRequest' })
  .openapi('GetFaceSearchRequest')

const LabelDetectionSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time, in milliseconds from the start of the video, that the label was detected. Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the label first appears.',
        }),
    ).exactOptional(),
    Label: LabelSchema.and(
      z.any().openapi({ description: 'Details about the detected label.' }),
    ).exactOptional(),
    StartTimestampMillis: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time in milliseconds defining the start of the timeline segment containing a continuously detected label.',
        }),
    ).exactOptional(),
    EndTimestampMillis: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time in milliseconds defining the end of the timeline segment containing a continuously detected label.',
        }),
    ).exactOptional(),
    DurationMillis: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to EndTimestampMillis.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a label detected in a video analysis request and the time the label was detected in the video. ',
    required: [],
  })
  .openapi('LabelDetection')

const LabelDetectionsSchema = z.array(LabelDetectionSchema).openapi('LabelDetections')

const LabelDetectionSortBySchema = z.enum(['NAME', 'TIMESTAMP']).openapi('LabelDetectionSortBy')

const LabelDetectionAggregateBySchema = z
  .enum(['TIMESTAMPS', 'SEGMENTS'])
  .openapi('LabelDetectionAggregateBy')

const GetLabelDetectionRequestMetadataSchema = z
  .object({
    SortBy: LabelDetectionSortBySchema.and(
      z
        .any()
        .openapi({ description: 'The sorting method chosen for a GetLabelDetection request.' }),
    ).exactOptional(),
    AggregateBy: LabelDetectionAggregateBySchema.and(
      z
        .any()
        .openapi({ description: 'The aggregation method chosen for a GetLabelDetection request.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains metadata about a label detection request, including the SortBy and AggregateBy options.',
    required: [],
  })
  .openapi('GetLabelDetectionRequestMetadata')

const GetLabelDetectionResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the label detection job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of labels.',
        }),
    ).exactOptional(),
    Labels: LabelDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of labels detected in the video. Each element contains the detected label and the time, in milliseconds from the start of the video, that the label was detected. ',
        }),
    ).exactOptional(),
    LabelModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the label detection model that was used to detect labels.',
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the label detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartLabelDetection.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartLabelDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
    GetRequestMetadata: GetLabelDetectionRequestMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the paramters used when getting a response. Includes information on aggregation and sorting methods.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLabelDetectionResponse')

const GetLabelDetectionRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the label detection operation for which you want results returned. You get the job identifer from an initial call to <code>StartlabelDetection</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of labels. ',
        }),
    ).exactOptional(),
    SortBy: LabelDetectionSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Sort to use for elements in the <code>Labels</code> array. Use <code>TIMESTAMP</code> to sort array elements by the time labels are detected. Use <code>NAME</code> to alphabetically group elements for a label together. Within each label group, the array element are sorted by detection confidence. The default sort is by <code>TIMESTAMP</code>.',
        }),
    ).exactOptional(),
    AggregateBy: LabelDetectionAggregateBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetLabelDetectionRequest' })
  .openapi('GetLabelDetectionRequest')

const PersonDetectionSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time, in milliseconds from the start of the video, that the person's path was tracked. Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the person's path first appears.",
        }),
    ).exactOptional(),
    Person: PersonDetailSchema.and(
      z.any().openapi({ description: 'Details about a person whose path was tracked in a video.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>",
    required: [],
  })
  .openapi('PersonDetection')

const PersonDetectionsSchema = z.array(PersonDetectionSchema).openapi('PersonDetections')

const GetPersonTrackingResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the person tracking job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition Video operation.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons. ',
        }),
    ).exactOptional(),
    Persons: PersonDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of the persons detected in the video and the time(s) their path was tracked throughout the video. An array element will exist for each time a person's path is tracked. ",
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the person tracking operation for which you want to obtain results. The job identifer is returned by an initial call to StartPersonTracking.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartCelebrityRecognition and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPersonTrackingResponse')

const PersonTrackingSortBySchema = z.enum(['INDEX', 'TIMESTAMP']).openapi('PersonTrackingSortBy')

const GetPersonTrackingRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for a job that tracks persons in a video. You get the <code>JobId</code> from a call to <code>StartPersonTracking</code>. ',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more persons to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of persons. ',
        }),
    ).exactOptional(),
    SortBy: PersonTrackingSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Sort to use for elements in the <code>Persons</code> array. Use <code>TIMESTAMP</code> to sort array elements by the time persons are detected. Use <code>INDEX</code> to sort by the tracked persons. If you sort by <code>INDEX</code>, the array elements for each person are sorted by detection confidence. The default sort is by <code>TIMESTAMP</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetPersonTrackingRequest' })
  .openapi('GetPersonTrackingRequest')

const VideoMetadataListSchema = z.array(VideoMetadataSchema).openapi('VideoMetadataList')

const AudioMetadataSchema = z
  .object({
    Codec: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The audio codec used to encode or decode the audio stream. ' }),
    ).exactOptional(),
    DurationMillis: ULongSchema.and(
      z.any().openapi({ description: 'The duration of the audio stream in milliseconds.' }),
    ).exactOptional(),
    SampleRate: ULongSchema.and(
      z.any().openapi({ description: 'The sample rate for the audio stream.' }),
    ).exactOptional(),
    NumberOfChannels: ULongSchema.and(
      z.any().openapi({ description: 'The number of audio channels in the segment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. ',
    required: [],
  })
  .openapi('AudioMetadata')

const AudioMetadataListSchema = z.array(AudioMetadataSchema).openapi('AudioMetadataList')

const SegmentTypeSchema = z.enum(['TECHNICAL_CUE', 'SHOT']).openapi('SegmentType')

const TimecodeSchema = z.string().openapi('Timecode')

const TechnicalCueTypeSchema = z
  .enum([
    'ColorBars',
    'EndCredits',
    'BlackFrames',
    'OpeningCredits',
    'StudioLogo',
    'Slate',
    'Content',
  ])
  .openapi('TechnicalCueType')

const SegmentConfidenceSchema = z.float32().min(50).max(100).openapi('SegmentConfidence')

const TechnicalCueSegmentSchema = z
  .object({
    Type: TechnicalCueTypeSchema.and(
      z.any().openapi({ description: 'The type of the technical cue.' }),
    ).exactOptional(),
    Confidence: SegmentConfidenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.',
    required: [],
  })
  .openapi('TechnicalCueSegment')

const ShotSegmentSchema = z
  .object({
    Index: ULongSchema.and(
      z
        .any()
        .openapi({
          description: 'An Identifier for a shot detection segment detected in a video. ',
        }),
    ).exactOptional(),
    Confidence: SegmentConfidenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence that Amazon Rekognition Video has in the accuracy of the detected segment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>.',
    required: [],
  })
  .openapi('ShotSegment')

const SegmentDetectionSchema = z
  .object({
    Type: SegmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the segment. Valid values are <code>TECHNICAL_CUE</code> and <code>SHOT</code>.',
        }),
    ).exactOptional(),
    StartTimestampMillis: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time of the detected segment in milliseconds from the start of the video. This value is rounded down. For example, if the actual timestamp is 100.6667 milliseconds, Amazon Rekognition Video returns a value of 100 millis.',
        }),
    ).exactOptional(),
    EndTimestampMillis: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end time of the detected segment, in milliseconds, from the start of the video. This value is rounded down.',
        }),
    ).exactOptional(),
    DurationMillis: ULongSchema.and(
      z.any().openapi({ description: 'The duration of the detected segment in milliseconds. ' }),
    ).exactOptional(),
    StartTimecodeSMPTE: TimecodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected segment. <code>StartTimecode</code> is in <i>HH:MM:SS:fr</i> format (and <i>;fr</i> for drop frame-rates). ',
        }),
    ).exactOptional(),
    EndTimecodeSMPTE: TimecodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected segment. <code>EndTimecode</code> is in <i>HH:MM:SS:fr</i> format (and <i>;fr</i> for drop frame-rates).',
        }),
    ).exactOptional(),
    DurationSMPTE: TimecodeSchema.and(
      z
        .any()
        .openapi({
          description: 'The duration of the timecode for the detected segment in SMPTE format.',
        }),
    ).exactOptional(),
    TechnicalCueSegment: TechnicalCueSegmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the segment is a technical cue, contains information about the technical cue.',
        }),
    ).exactOptional(),
    ShotSegment: ShotSegmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the segment is a shot detection, contains information about the shot detection.',
        }),
    ).exactOptional(),
    StartFrameNumber: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The frame number of the start of a video segment, using a frame index that starts with 0. ',
        }),
    ).exactOptional(),
    EndFrameNumber: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The frame number at the end of a video segment, using a frame index that starts with 0. ',
        }),
    ).exactOptional(),
    DurationFrames: ULongSchema.and(
      z.any().openapi({ description: ' The duration of a video segment, expressed in frames. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. ',
    required: [],
  })
  .openapi('SegmentDetection')

const SegmentDetectionsSchema = z.array(SegmentDetectionSchema).openapi('SegmentDetections')

const SegmentTypeInfoSchema = z
  .object({
    Type: SegmentTypeSchema.and(
      z.any().openapi({ description: 'The type of a segment (technical cue or shot detection).' }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the model used to detect segments.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.',
    required: [],
  })
  .openapi('SegmentTypeInfo')

const SegmentTypesInfoSchema = z.array(SegmentTypeInfoSchema).openapi('SegmentTypesInfo')

const GetSegmentDetectionResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'Current status of the segment detection job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Currently, Amazon Rekognition Video returns a single object in the <code>VideoMetadata</code> array. The object contains information about the video stream in the input file that Amazon Rekognition Video chose to analyze. The <code>VideoMetadata</code> object includes the video codec, video format and other information. Video metadata is returned in each page of information returned by <code>GetSegmentDetection</code>.',
        }),
    ).exactOptional(),
    AudioMetadata: AudioMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects. There can be multiple audio streams. Each <code>AudioMetadata</code> object contains metadata for a single audio stream. Audio information in an <code>AudioMetadata</code> objects includes the audio codec, the number of audio channels, the duration of the audio stream, and the sample rate. Audio metadata is returned in each page of information returned by <code>GetSegmentDetection</code>.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of text.',
        }),
    ).exactOptional(),
    Segments: SegmentDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of segments detected in a video. The array is sorted by the segment types (TECHNICAL_CUE or SHOT) specified in the <code>SegmentTypes</code> input parameter of <code>StartSegmentDetection</code>. Within each segment type the array is sorted by timestamp values.',
        }),
    ).exactOptional(),
    SelectedSegmentTypes: SegmentTypesInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array containing the segment types requested in the call to <code>StartSegmentDetection</code>. ',
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the segment detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartSegmentDetection.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartSegmentDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSegmentDetectionResponse')

const GetSegmentDetectionRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the text detection operation for which you want results returned. You get the job identifer from an initial call to <code>StartSegmentDetection</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of text.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetSegmentDetectionRequest' })
  .openapi('GetSegmentDetectionRequest')

const TextDetectionResultSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds from the start of the video, that the text was detected. Note that <code>Timestamp</code> is not guaranteed to be accurate to the individual frame where the text first appears.',
        }),
    ).exactOptional(),
    TextDetection: TextDetectionSchema.and(
      z.any().openapi({ description: 'Details about text detected in a video.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.',
    required: [],
  })
  .openapi('TextDetectionResult')

const TextDetectionResultsSchema = z
  .array(TextDetectionResultSchema)
  .openapi('TextDetectionResults')

const GetTextDetectionResponseSchema = z
  .object({
    JobStatus: VideoJobStatusSchema.and(
      z.any().openapi({ description: 'Current status of the text detection job.' }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the job fails, <code>StatusMessage</code> provides a descriptive error message.',
        }),
    ).exactOptional(),
    VideoMetadata: VideoMetadataSchema.exactOptional(),
    TextDetections: TextDetectionResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of text detected in the video. Each element contains the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of text.',
        }),
    ).exactOptional(),
    TextModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Version number of the text detection model that was used to detect text.',
        }),
    ).exactOptional(),
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the text detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartTextDetection.',
        }),
    ).exactOptional(),
    Video: VideoSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'A job identifier specified in the call to StartTextDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTextDetectionResponse')

const GetTextDetectionRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Job identifier for the text detection operation for which you want results returned. You get the job identifer from an initial call to <code>StartTextDetection</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of results to return per paginated call. The largest value you can specify is 1000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of text.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetTextDetectionRequest' })
  .openapi('GetTextDetectionRequest')

const FaceRecordSchema = z
  .object({
    Face: FaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. ',
        }),
    ).exactOptional(),
    FaceDetail: FaceDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'Structure containing attributes of the face that the algorithm detected.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.",
    required: [],
  })
  .openapi('FaceRecord')

const FaceRecordListSchema = z.array(FaceRecordSchema).openapi('FaceRecordList')

const ReasonSchema = z
  .enum([
    'EXCEEDS_MAX_FACES',
    'EXTREME_POSE',
    'LOW_BRIGHTNESS',
    'LOW_SHARPNESS',
    'LOW_CONFIDENCE',
    'SMALL_BOUNDING_BOX',
    'LOW_FACE_QUALITY',
  ])
  .openapi('Reason')

const ReasonsSchema = z.array(ReasonSchema).openapi('Reasons')

const UnindexedFaceSchema = z
  .object({
    Reasons: ReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of reasons that specify why a face wasn't indexed. </p> <ul> <li> <p>EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is turned too far away from the camera.</p> </li> <li> <p>EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the <code>MaxFaces</code> input parameter for <code>IndexFaces</code>.</p> </li> <li> <p>LOW_BRIGHTNESS - The image is too dark.</p> </li> <li> <p>LOW_SHARPNESS - The image is too blurry.</p> </li> <li> <p>LOW_CONFIDENCE - The face was detected with a low confidence.</p> </li> <li> <p>SMALL_BOUNDING_BOX - The bounding box around the face is too small.</p> </li> </ul>",
        }),
    ).exactOptional(),
    FaceDetail: FaceDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            "The structure that contains attributes of a face that <code>IndexFaces</code>detected, but didn't index. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.",
    required: [],
  })
  .openapi('UnindexedFace')

const UnindexedFacesSchema = z.array(UnindexedFaceSchema).openapi('UnindexedFaces')

const IndexFacesResponseSchema = z
  .object({
    FaceRecords: FaceRecordListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of faces detected and added to the collection. For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide. ',
        }),
    ).exactOptional(),
    OrientationCorrection: OrientationCorrectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If your collection is associated with a face detection model that's later than version 3.0, the value of <code>OrientationCorrection</code> is always null and no orientation information is returned.</p> <p>If your collection is associated with a face detection model that's version 3.0 or earlier, the following applies:</p> <ul> <li> <p>If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. The value of <code>OrientationCorrection</code> is null.</p> </li> <li> <p>If the image doesn't contain orientation information in its Exif metadata, Amazon Rekognition returns an estimated orientation (ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270). Amazon Rekognition doesn’t perform image correction for images. The bounding box coordinates aren't translated and represent the object locations before the image is rotated.</p> </li> </ul> <p>Bounding box information is returned in the <code>FaceRecords</code> array. You can get the version of the face detection model by calling <a>DescribeCollection</a>. </p>",
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version number of the face detection model that's associated with the input collection (<code>CollectionId</code>).",
        }),
    ).exactOptional(),
    UnindexedFaces: UnindexedFacesSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of faces that were detected in the image but weren't indexed. They weren't indexed because the quality filter identified them as low quality, or the <code>MaxFaces</code> request parameter filtered them out. To use the quality filter, you specify the <code>QualityFilter</code> request parameter.",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceRecords: [
        {
          Face: {
            BoundingBox: {
              Height: 0.33481481671333313,
              Left: 0.31888890266418457,
              Top: 0.4933333396911621,
              Width: 0.25,
            },
            Confidence: 99.9991226196289,
            FaceId: 'ff43d742-0c13-5d16-a3e8-03d3f58e980b',
            ImageId: '465f4e93-763e-51d0-b030-b9667a2d94b1',
          },
          FaceDetail: {
            BoundingBox: {
              Height: 0.33481481671333313,
              Left: 0.31888890266418457,
              Top: 0.4933333396911621,
              Width: 0.25,
            },
            Confidence: 99.9991226196289,
            Landmarks: [
              { Type: 'eyeLeft', X: 0.3976764678955078, Y: 0.6248345971107483 },
              { Type: 'eyeRight', X: 0.4810936450958252, Y: 0.6317117214202881 },
              { Type: 'noseLeft', X: 0.41986238956451416, Y: 0.7111940383911133 },
              { Type: 'mouthDown', X: 0.40525302290916443, Y: 0.7497701048851013 },
              { Type: 'mouthUp', X: 0.4753248989582062, Y: 0.7558549642562866 },
            ],
            Pose: { Pitch: -9.713645935058594, Roll: 4.707281112670898, Yaw: -24.438663482666016 },
            Quality: { Brightness: 29.23358917236328, Sharpness: 80 },
          },
        },
        {
          Face: {
            BoundingBox: {
              Height: 0.32592591643333435,
              Left: 0.5144444704055786,
              Top: 0.15111111104488373,
              Width: 0.24444444477558136,
            },
            Confidence: 99.99950408935547,
            FaceId: '8be04dba-4e58-520d-850e-9eae4af70eb2',
            ImageId: '465f4e93-763e-51d0-b030-b9667a2d94b1',
          },
          FaceDetail: {
            BoundingBox: {
              Height: 0.32592591643333435,
              Left: 0.5144444704055786,
              Top: 0.15111111104488373,
              Width: 0.24444444477558136,
            },
            Confidence: 99.99950408935547,
            Landmarks: [
              { Type: 'eyeLeft', X: 0.6006892323493958, Y: 0.290842205286026 },
              { Type: 'eyeRight', X: 0.6808141469955444, Y: 0.29609042406082153 },
              { Type: 'noseLeft', X: 0.6395332217216492, Y: 0.3522595763206482 },
              { Type: 'mouthDown', X: 0.5892083048820496, Y: 0.38689887523651123 },
              { Type: 'mouthUp', X: 0.674560010433197, Y: 0.394125759601593 },
            ],
            Pose: { Pitch: -4.683138370513916, Roll: 2.1029529571533203, Yaw: 6.716655254364014 },
            Quality: { Brightness: 34.951698303222656, Sharpness: 160 },
          },
        },
      ],
      OrientationCorrection: 'ROTATE_0',
    },
    required: [],
  })
  .openapi('IndexFacesResponse')

const MaxFacesToIndexSchema = z.int().min(1).openapi('MaxFacesToIndex')

const IndexFacesRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an existing collection to which you want to add the faces that are detected in the input images.',
        }),
    ),
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes isn't supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>",
        }),
    ),
    ExternalImageId: ExternalImageIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID you want to assign to all the faces detected in the image.',
        }),
    ).exactOptional(),
    DetectionAttributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of facial attributes you want to be returned. A <code>DEFAULT</code> subset of facial attributes - <code>BoundingBox</code>, <code>Confidence</code>, <code>Pose</code>, <code>Quality</code>, and <code>Landmarks</code> - will always be returned. You can request for specific facial attributes (in addition to the default list) - by using <code>["DEFAULT", "FACE_OCCLUDED"]</code> or just <code>["FACE_OCCLUDED"]</code>. You can request for all facial attributes by using <code>["ALL"]</code>. Requesting more attributes may increase response time.</p> <p>If you provide both, <code>["ALL", "DEFAULT"]</code>, the service uses a logical AND operator to determine which attributes to return (in this case, all attributes). </p>',
        }),
    ).exactOptional(),
    MaxFaces: MaxFacesToIndexSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of faces to index. The value of <code>MaxFaces</code> must be greater than or equal to 1. <code>IndexFaces</code> returns no more than 100 detected faces in an image, even if you specify a larger value for <code>MaxFaces</code>.</p> <p>If <code>IndexFaces</code> detects more faces than the value of <code>MaxFaces</code>, the faces with the lowest quality are filtered out first. If there are still more faces than the value of <code>MaxFaces</code>, the faces with the smallest bounding boxes are filtered out (up to the number that's needed to satisfy the value of <code>MaxFaces</code>). Information about the unindexed faces is available in the <code>UnindexedFaces</code> array. </p> <p>The faces that are returned by <code>IndexFaces</code> are sorted by the largest face bounding box size to the smallest size, in descending order.</p> <p> <code>MaxFaces</code> can be used with a collection associated with any version of the face model.</p>",
        }),
    ).exactOptional(),
    QualityFilter: QualityFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't indexed. If you specify <code>AUTO</code>, Amazon Rekognition chooses the quality bar. If you specify <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>, filtering removes all faces that don’t meet the chosen quality bar. The default value is <code>AUTO</code>. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify <code>NONE</code>, no filtering is performed. </p> <p>To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'Image'], title: 'IndexFacesRequest' })
  .openapi('IndexFacesRequest')

const CollectionIdListSchema = z.array(CollectionIdSchema).openapi('CollectionIdList')

const FaceModelVersionListSchema = z.array(StringSchema).openapi('FaceModelVersionList')

const ListCollectionsResponseSchema = z
  .object({
    CollectionIds: CollectionIdListSchema.and(
      z.any().openapi({ description: 'An array of collection IDs.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result is truncated, the response provides a <code>NextToken</code> that you can use in the subsequent request to fetch the next set of collection IDs.',
        }),
    ).exactOptional(),
    FaceModelVersions: FaceModelVersionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version numbers of the face detection models associated with the collections in the array <code>CollectionIds</code>. For example, the value of <code>FaceModelVersions[2]</code> is the version number for the face detection model used by the collection in <code>CollectionId[2]</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { CollectionIds: ['myphotos'] }, required: [] })
  .openapi('ListCollectionsResponse')

const PageSizeSchema = z.int().min(0).max(4096).openapi('PageSize')

const ListCollectionsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token from the previous response.' }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'Maximum number of collection IDs to return. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCollectionsRequest', required: [] })
  .openapi('ListCollectionsRequest')

const DatasetEntrySchema = z
  .string()
  .regex(/^\{.*\}$/)
  .min(1)
  .max(100000)
  .openapi('DatasetEntry')

const DatasetEntriesSchema = z.array(DatasetEntrySchema).openapi('DatasetEntries')

const ListDatasetEntriesResponseSchema = z
  .object({
    DatasetEntries: DatasetEntriesSchema.and(
      z.any().openapi({ description: ' A list of entries (images) in the dataset. ' }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DatasetEntries: [
        '{"source-ref":"s3://custom-labels-console-us-east-1-1111111111/assets/flowers_1_train_dataset/camellia4.jpg","camellia":1,"camellia-metadata":{"confidence":1,"job-name":"labeling-job/camellia","class-name":"camellia","human-annotated":"yes","creation-date":"2021-07-11T03:32:13.456Z","type":"groundtruth/image-classification"},"with_leaves":1,"with_leaves-metadata":{"confidence":1,"job-name":"labeling-job/with_leaves","class-name":"with_leaves","human-annotated":"yes","creation-date":"2021-07-11T03:32:13.456Z","type":"groundtruth/image-classification"},"cl-metadata":{"is_labeled":true}}',
      ],
      NextToken: '',
    },
    required: [],
  })
  .openapi('ListDatasetEntriesResponse')

const DatasetLabelSchema = z.string().regex(/.{1,}/).min(1).max(255).openapi('DatasetLabel')

const DatasetLabelsSchema = z.array(DatasetLabelSchema).min(1).max(10).openapi('DatasetLabels')

const IsLabeledSchema = z.boolean().openapi('IsLabeled')

const QueryStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('QueryString')

const HasErrorsSchema = z.boolean().openapi('HasErrors')

const ListDatasetEntriesPageSizeSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListDatasetEntriesPageSize')

const ListDatasetEntriesRequestSchema = z
  .object({
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) for the dataset that you want to use. ',
        }),
    ),
    ContainsLabels: DatasetLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a label filter for the response. The response includes an entry only if one or more of the labels in <code>ContainsLabels</code> exist in the entry. ',
        }),
    ).exactOptional(),
    Labeled: IsLabeledSchema.and(
      z
        .any()
        .openapi({
          description:
            " Specify <code>true</code> to get only the JSON Lines where the image is labeled. Specify <code>false</code> to get only the JSON Lines where the image isn't labeled. If you don't specify <code>Labeled</code>, <code>ListDatasetEntries</code> returns JSON Lines for labeled and unlabeled images. ",
        }),
    ).exactOptional(),
    SourceRefContains: QueryStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, <code>ListDatasetEntries</code> only returns JSON Lines where the value of <code>SourceRefContains</code> is part of the <code>source-ref</code> field. The <code>source-ref</code> field contains the Amazon S3 location of the image. You can use <code>SouceRefContains</code> for tasks such as getting the JSON Line for a single image, or gettting JSON Lines for all images within a specific folder.',
        }),
    ).exactOptional(),
    HasErrors: HasErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an error filter for the response. Specify <code>True</code> to only include entries that have errors. ',
        }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
    MaxResults: ListDatasetEntriesPageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatasetArn'], title: 'ListDatasetEntriesRequest' })
  .openapi('ListDatasetEntriesRequest')

const DatasetLabelStatsSchema = z
  .object({
    EntryCount: UIntegerSchema.and(
      z.any().openapi({ description: ' The total number of images that use the label. ' }),
    ).exactOptional(),
    BoundingBoxCount: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The total number of images that have the label assigned to a bounding box. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Statistics about a label used in a dataset. For more information, see <a>DatasetLabelDescription</a>. ',
    required: [],
  })
  .openapi('DatasetLabelStats')

const DatasetLabelDescriptionSchema = z
  .object({
    LabelName: DatasetLabelSchema.and(
      z.any().openapi({ description: ' The name of the label. ' }),
    ).exactOptional(),
    LabelStats: DatasetLabelStatsSchema.and(
      z.any().openapi({ description: ' Statistics about the label. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Describes a dataset label. For more information, see <a>ListDatasetLabels</a>. ',
    required: [],
  })
  .openapi('DatasetLabelDescription')

const DatasetLabelDescriptionsSchema = z
  .array(DatasetLabelDescriptionSchema)
  .openapi('DatasetLabelDescriptions')

const ListDatasetLabelsResponseSchema = z
  .object({
    DatasetLabelDescriptions: DatasetLabelDescriptionsSchema.and(
      z.any().openapi({ description: ' A list of the labels in the dataset. ' }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      DatasetLabelDescriptions: [
        { LabelName: 'camellia', LabelStats: { EntryCount: 1 } },
        { LabelName: 'with_leaves', LabelStats: { EntryCount: 2 } },
        { LabelName: 'mediterranean_spurge', LabelStats: { EntryCount: 1 } },
      ],
    },
    required: [],
  })
  .openapi('ListDatasetLabelsResponse')

const ListDatasetLabelsPageSizeSchema = z.int().min(1).max(100).openapi('ListDatasetLabelsPageSize')

const ListDatasetLabelsRequestSchema = z
  .object({
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the dataset that you want to use. ',
        }),
    ),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
    MaxResults: ListDatasetLabelsPageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DatasetArn'], title: 'ListDatasetLabelsRequest' })
  .openapi('ListDatasetLabelsRequest')

const FaceListSchema = z.array(FaceSchema).openapi('FaceList')

const ListFacesResponseSchema = z
  .object({
    Faces: FaceListSchema.and(
      z.any().openapi({ description: 'An array of <code>Face</code> objects. ' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces.',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the face detection model associated with the input collection (<code>CollectionId</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceModelVersion: '6.0',
      Faces: [
        {
          BoundingBox: {
            Height: 0.056759100407361984,
            Left: 0.3453829884529114,
            Top: 0.36568498611450195,
            Width: 0.03177810087800026,
          },
          Confidence: 99.76940155029297,
          FaceId: 'c92265d4-5f9c-43af-a58e-12be0ce02bc3',
          ImageId: '56a0ca74-1c83-39dd-b363-051a64168a65',
          IndexFacesModelVersion: '6.0',
          UserId: 'demoUser2',
        },
        {
          BoundingBox: {
            Height: 0.06347999721765518,
            Left: 0.5160620212554932,
            Top: 0.6080359816551208,
            Width: 0.03254450112581253,
          },
          Confidence: 99.94369506835938,
          FaceId: '851cb847-dccc-4fea-9309-9f4805967855',
          ImageId: 'a8aed589-ceec-35f7-9c04-82e0b546b024',
          IndexFacesModelVersion: '6.0',
        },
        {
          BoundingBox: {
            Height: 0.05266290158033371,
            Left: 0.6513839960098267,
            Top: 0.4218429923057556,
            Width: 0.03094629943370819,
          },
          Confidence: 99.82969665527344,
          FaceId: 'c0eb3b65-24a0-41e1-b23a-1908b1aaeac1',
          ImageId: '56a0ca74-1c83-39dd-b363-051a64168a65',
          IndexFacesModelVersion: '6.0',
        },
      ],
    },
    required: [],
  })
  .openapi('ListFacesResponse')

const ListFacesRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'ID of the collection from which to list the faces.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more data to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of faces.',
        }),
    ).exactOptional(),
    MaxResults: PageSizeSchema.and(
      z.any().openapi({ description: 'Maximum number of faces to return.' }),
    ).exactOptional(),
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of user IDs to filter results with when listing faces in a collection.',
        }),
    ).exactOptional(),
    FaceIds: FaceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of face IDs to filter results with when listing faces in a collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId'], title: 'ListFacesRequest' })
  .openapi('ListFacesRequest')

const ProjectPolicyDocumentSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(2000)
  .openapi('ProjectPolicyDocument')

const ProjectPolicySchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project to which the project policy is attached.',
        }),
    ).exactOptional(),
    PolicyName: ProjectPolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the project policy.' }),
    ).exactOptional(),
    PolicyRevisionId: ProjectPolicyRevisionIdSchema.and(
      z.any().openapi({ description: 'The revision ID of the project policy.' }),
    ).exactOptional(),
    PolicyDocument: ProjectPolicyDocumentSchema.and(
      z.any().openapi({ description: 'The JSON document for the project policy.' }),
    ).exactOptional(),
    CreationTimestamp: DateTimeSchema.and(
      z.any().openapi({ description: 'The Unix datetime for the creation of the project policy.' }),
    ).exactOptional(),
    LastUpdatedTimestamp: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix datetime for when the project policy was last updated. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes a project policy in the response from <a>ListProjectPolicies</a>. </p> <p> </p>',
    required: [],
  })
  .openapi('ProjectPolicy')

const ProjectPoliciesSchema = z.array(ProjectPolicySchema).openapi('ProjectPolicies')

const ListProjectPoliciesResponseSchema = z
  .object({
    ProjectPolicies: ProjectPoliciesSchema.and(
      z.any().openapi({ description: 'A list of project policies attached to the project.' }),
    ).exactOptional(),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of project policies.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      NextToken: '',
      ProjectPolicies: [
        {
          CreationTimestamp: '2022-07-01T11:51:27.086000-07:00',
          LastUpdatedTimestamp: '2022-07-01T11:51:27.086000-07:00',
          PolicyDocument:
            '{"Version":"2012-10-17","Statement":[{"Sid":"Statemented1","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::111122223333:root"},"Action":"rekognition:CopyProjectVersion","Resource":"*"}]}',
          PolicyName: 'testPolicy',
          PolicyRevisionId: '3b274c25e9203a56a99e00e3ff205fbc',
          ProjectArn:
            'arn:aws:rekognition:us-east-1:111122223333:project/my-sdk-project/1656557051929',
        },
      ],
    },
    required: [],
  })
  .openapi('ListProjectPoliciesResponse')

const ListProjectPoliciesPageSizeSchema = z
  .int()
  .min(1)
  .max(5)
  .openapi('ListProjectPoliciesPageSize')

const ListProjectPoliciesRequestSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the project for which you want to list the project policies.',
        }),
    ),
    NextToken: ExtendedPaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
        }),
    ).exactOptional(),
    MaxResults: ListProjectPoliciesPageSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 5. If you specify a value greater than 5, a ValidationException error occurs. The default value is 5. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProjectArn'], title: 'ListProjectPoliciesRequest' })
  .openapi('ListProjectPoliciesRequest')

const StreamProcessorSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z.any().openapi({ description: 'Name of the Amazon Rekognition stream processor. ' }),
    ).exactOptional(),
    Status: StreamProcessorStatusSchema.and(
      z
        .any()
        .openapi({ description: 'Current status of the Amazon Rekognition stream processor.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that recognizes faces or labels in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts. ',
    required: [],
  })
  .openapi('StreamProcessor')

const StreamProcessorListSchema = z.array(StreamProcessorSchema).openapi('StreamProcessorList')

const ListStreamProcessorsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of stream processors. ',
        }),
    ).exactOptional(),
    StreamProcessors: StreamProcessorListSchema.and(
      z.any().openapi({ description: 'List of stream processors that you have created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStreamProcessorsResponse')

const ListStreamProcessorsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more stream processors to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of stream processors. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of stream processors you want Amazon Rekognition Video to return in the response. The default is 1000. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStreamProcessorsRequest', required: [] })
  .openapi('ListStreamProcessorsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z.any().openapi({ description: ' A list of key-value tags assigned to the resource. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResourceArnSchema = z.string().min(20).max(2048).openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Amazon Resource Name (ARN) of the model, collection, or stream processor that contains the tags that you want a list of. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const UserSchema = z
  .object({
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: ' A provided ID for the User. Unique within the collection.' }),
    ).exactOptional(),
    UserStatus: UserStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Communicates if the UserID has been updated with latest set of faces to be associated with the UserID. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Metadata of the user stored in a collection.', required: [] })
  .openapi('User')

const UserListSchema = z.array(UserSchema).max(500).openapi('UserList')

const ListUsersResponseSchema = z
  .object({
    Users: UserListSchema.and(
      z.any().openapi({ description: 'List of UsersID associated with the specified collection.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token to be used with the subsequent request if the response is truncated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      NextToken: 'MGYZLAHX1T5a....',
      Users: [
        { UserId: 'demoUser4', UserStatus: 'CREATED' },
        { UserId: 'demoUser2', UserStatus: 'CREATED' },
      ],
    },
    required: [],
  })
  .openapi('ListUsersResponse')

const MaxUserResultsSchema = z.int().min(1).max(500).openapi('MaxUserResults')

const ListUsersRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'The ID of an existing collection.' }),
    ),
    MaxResults: MaxUserResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of UsersID to return. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagingation token to receive the next set of UsersID.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId'], title: 'ListUsersRequest' })
  .openapi('ListUsersRequest')

const PutProjectPolicyResponseSchema = z
  .object({
    PolicyRevisionId: ProjectPolicyRevisionIdSchema.and(
      z.any().openapi({ description: 'The ID of the project policy.' }),
    ).exactOptional(),
  })
  .openapi({ example: { PolicyRevisionId: '0123456789abcdef' }, required: [] })
  .openapi('PutProjectPolicyResponse')

const PutProjectPolicyRequestSchema = z
  .object({
    ProjectArn: ProjectArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the project that the project policy is attached to.',
        }),
    ),
    PolicyName: ProjectPolicyNameSchema.and(
      z.any().openapi({ description: 'A name for the policy.' }),
    ),
    PolicyRevisionId: ProjectPolicyRevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition Custom Labels generates and assigns a new <code>PolicyRevisionId</code> and then deletes the previous version of the policy.',
        }),
    ).exactOptional(),
    PolicyDocument: ProjectPolicyDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'A resource policy to add to the model. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON policy reference</a>. ',
        }),
    ),
  })
  .openapi({
    required: ['ProjectArn', 'PolicyName', 'PolicyDocument'],
    title: 'PutProjectPolicyRequest',
  })
  .openapi('PutProjectPolicyRequest')

const MalformedPolicyDocumentExceptionSchema = z.any().openapi('MalformedPolicyDocumentException')

const CelebritySchema = z
  .object({
    Urls: UrlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty.',
        }),
    ).exactOptional(),
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the celebrity.' }),
    ).exactOptional(),
    Id: RekognitionUniqueIdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the celebrity. ' }),
    ).exactOptional(),
    Face: ComparedFaceSchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides information about the celebrity's face, such as its location on the image.",
        }),
    ).exactOptional(),
    MatchConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity.',
        }),
    ).exactOptional(),
    KnownGender: KnownGenderSchema.exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.',
    required: [],
  })
  .openapi('Celebrity')

const CelebrityListSchema = z.array(CelebritySchema).openapi('CelebrityList')

const ComparedFaceListSchema = z.array(ComparedFaceSchema).openapi('ComparedFaceList')

const RecognizeCelebritiesResponseSchema = z
  .object({
    CelebrityFaces: CelebrityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64 celebrities in an image. Each celebrity object includes the following attributes: <code>Face</code>, <code>Confidence</code>, <code>Emotions</code>, <code>Landmarks</code>, <code>Pose</code>, <code>Quality</code>, <code>Smile</code>, <code>Id</code>, <code>KnownGender</code>, <code>MatchConfidence</code>, <code>Name</code>, <code>Urls</code>.',
        }),
    ).exactOptional(),
    UnrecognizedFaces: ComparedFaceListSchema.and(
      z.any().openapi({ description: 'Details about each unrecognized face in the image.' }),
    ).exactOptional(),
    OrientationCorrection: OrientationCorrectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "<note> <p>Support for estimating image orientation using the the OrientationCorrection field has ceased as of August 2021. Any returned values for this field included in an API response will always be NULL.</p> </note> <p>The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct the orientation. The bounding box coordinates returned in <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code> represent face locations before the image orientation is corrected. </p> <note> <p>If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that includes the image's orientation. If so, and the Exif metadata for the input image populates the orientation field, the value of <code>OrientationCorrection</code> is null. The <code>CelebrityFaces</code> and <code>UnrecognizedFaces</code> bounding box coordinates represent face locations after Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. </p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecognizeCelebritiesResponse')

const RecognizeCelebritiesRequestSchema = z
  .object({
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
  })
  .openapi({ required: ['Image'], title: 'RecognizeCelebritiesRequest' })
  .openapi('RecognizeCelebritiesRequest')

const SearchFacesResponseSchema = z
  .object({
    SearchedFaceId: FaceIdSchema.and(
      z
        .any()
        .openapi({ description: 'ID of the face that was searched for matches in a collection.' }),
    ).exactOptional(),
    FaceMatches: FaceMatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of faces that matched the input face, along with the confidence in the match.',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the face detection model associated with the input collection (<code>CollectionId</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceMatches: [
        {
          Face: {
            BoundingBox: {
              Height: 0.3259260058403015,
              Left: 0.5144439935684204,
              Top: 0.15111100673675537,
              Width: 0.24444399774074554,
            },
            Confidence: 99.99949645996094,
            FaceId: '8be04dba-4e58-520d-850e-9eae4af70eb2',
            ImageId: '465f4e93-763e-51d0-b030-b9667a2d94b1',
          },
          Similarity: 99.97222137451172,
        },
        {
          Face: {
            BoundingBox: {
              Height: 0.16555599868297577,
              Left: 0.30963000655174255,
              Top: 0.7066670060157776,
              Width: 0.22074100375175476,
            },
            Confidence: 100,
            FaceId: '29a75abe-397b-5101-ba4f-706783b2246c',
            ImageId: '147fdf82-7a71-52cf-819b-e786c7b9746e',
          },
          Similarity: 97.04154968261719,
        },
        {
          Face: {
            BoundingBox: {
              Height: 0.18888899683952332,
              Left: 0.3783380091190338,
              Top: 0.2355560064315796,
              Width: 0.25222599506378174,
            },
            Confidence: 99.9999008178711,
            FaceId: '908544ad-edc3-59df-8faf-6a87cc256cf5',
            ImageId: '3c731605-d772-541a-a5e7-0375dbc68a07',
          },
          Similarity: 95.94520568847656,
        },
      ],
      SearchedFaceId: '70008e50-75e4-55d0-8e80-363fb73b3a14',
    },
    required: [],
  })
  .openapi('SearchFacesResponse')

const MaxFacesSchema = z.int().min(1).max(4096).openapi('MaxFaces')

const SearchFacesRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'ID of the collection the face belongs to.' }),
    ),
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: 'ID of a face to find matches for in the collection.' }),
    ),
    MaxFaces: MaxFacesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.',
        }),
    ).exactOptional(),
    FaceMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'FaceId'], title: 'SearchFacesRequest' })
  .openapi('SearchFacesRequest')

const SearchFacesByImageResponseSchema = z
  .object({
    SearchedFaceBoundingBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bounding box around the face in the input image that Amazon Rekognition used for the search.',
        }),
    ).exactOptional(),
    SearchedFaceConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that the <code>searchedFaceBoundingBox</code>, contains a face.',
        }),
    ).exactOptional(),
    FaceMatches: FaceMatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of faces that match the input face, along with the confidence in the match.',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the face detection model associated with the input collection (<code>CollectionId</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceMatches: [
        {
          Face: {
            BoundingBox: {
              Height: 0.3234420120716095,
              Left: 0.3233329951763153,
              Top: 0.5,
              Width: 0.24222199618816376,
            },
            Confidence: 99.99829864501953,
            FaceId: '38271d79-7bc2-5efb-b752-398a8d575b85',
            ImageId: 'd5631190-d039-54e4-b267-abd22c8647c5',
          },
          Similarity: 99.97036743164062,
        },
      ],
      SearchedFaceBoundingBox: {
        Height: 0.33481481671333313,
        Left: 0.31888890266418457,
        Top: 0.4933333396911621,
        Width: 0.25,
      },
      SearchedFaceConfidence: 99.9991226196289,
    },
    required: [],
  })
  .openapi('SearchFacesByImageResponse')

const SearchFacesByImageRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'ID of the collection to search.' }),
    ),
    Image: ImageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>',
        }),
    ),
    MaxFaces: MaxFacesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.',
        }),
    ).exactOptional(),
    FaceMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "(Optional) Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%.",
        }),
    ).exactOptional(),
    QualityFilter: QualityFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't searched for in the collection. If you specify <code>AUTO</code>, Amazon Rekognition chooses the quality bar. If you specify <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify <code>NONE</code>, no filtering is performed. The default value is <code>NONE</code>. </p> <p>To use quality filtering, the collection you are using must be associated with version 3 of the face model or higher.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'Image'], title: 'SearchFacesByImageRequest' })
  .openapi('SearchFacesByImageRequest')

const MatchedUserSchema = z
  .object({
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: 'A provided ID for the UserID. Unique within the collection.' }),
    ).exactOptional(),
    UserStatus: UserStatusSchema.and(
      z.any().openapi({ description: 'The status of the user matched to a provided FaceID.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains metadata for a UserID matched with a given face.',
    required: [],
  })
  .openapi('MatchedUser')

const UserMatchSchema = z
  .object({
    Similarity: PercentSchema.and(
      z.any().openapi({ description: ' Describes the UserID metadata.' }),
    ).exactOptional(),
    User: MatchedUserSchema.and(
      z
        .any()
        .openapi({ description: ' Confidence in the match of this UserID with the input face. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides UserID metadata along with the confidence in the match of this UserID with the input face.',
    required: [],
  })
  .openapi('UserMatch')

const UserMatchListSchema = z.array(UserMatchSchema).max(500).openapi('UserMatchList')

const SearchedFaceSchema = z
  .object({
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: ' Unique identifier assigned to the face.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides face metadata such as FaceId, BoundingBox, Confidence of the input face used for search.',
    required: [],
  })
  .openapi('SearchedFace')

const SearchedUserSchema = z
  .object({
    UserId: UserIdSchema.and(
      z
        .any()
        .openapi({ description: ' A provided ID for the UserID. Unique within the collection. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains metadata about a User searched for within a collection.',
    required: [],
  })
  .openapi('SearchedUser')

const SearchUsersResponseSchema = z
  .object({
    UserMatches: UserMatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of UserMatch objects that matched the input face along with the confidence in the match. Array will be empty if there are no matches.',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the face detection model associated with the input CollectionId.',
        }),
    ).exactOptional(),
    SearchedFace: SearchedFaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the ID of a face that was used to search for matches in a collection.',
        }),
    ).exactOptional(),
    SearchedUser: SearchedUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the ID of the UserID that was used to search for matches in a collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceModelVersion: '6',
      SearchedUser: { UserId: 'DemoUser' },
      UserMatches: [
        { Similarity: 99.88186645507812, User: { UserId: 'demoUser1', UserStatus: 'ACTIVE' } },
      ],
    },
    required: [],
  })
  .openapi('SearchUsersResponse')

const SearchUsersRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a FaceId is provided, UserId isn’t required to be present in the Collection.',
        }),
    ),
    UserId: UserIdSchema.and(
      z.any().openapi({ description: 'ID for the existing User.' }),
    ).exactOptional(),
    FaceId: FaceIdSchema.and(
      z.any().openapi({ description: 'ID for the existing face.' }),
    ).exactOptional(),
    UserMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional value that specifies the minimum confidence in the matched UserID to return. Default value of 80.',
        }),
    ).exactOptional(),
    MaxUsers: MaxUserResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of identities to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId'], title: 'SearchUsersRequest' })
  .openapi('SearchUsersRequest')

const SearchedFaceDetailsSchema = z
  .object({ FaceDetail: FaceDetailSchema.exactOptional() })
  .openapi({
    description: 'Contains data regarding the input face used for a search.',
    required: [],
  })
  .openapi('SearchedFaceDetails')

const UnsearchedFaceReasonSchema = z
  .enum([
    'FACE_NOT_LARGEST',
    'EXCEEDS_MAX_FACES',
    'EXTREME_POSE',
    'LOW_BRIGHTNESS',
    'LOW_SHARPNESS',
    'LOW_CONFIDENCE',
    'SMALL_BOUNDING_BOX',
    'LOW_FACE_QUALITY',
  ])
  .openapi('UnsearchedFaceReason')

const UnsearchedFaceReasonsSchema = z
  .array(UnsearchedFaceReasonSchema)
  .openapi('UnsearchedFaceReasons')

const UnsearchedFaceSchema = z
  .object({
    FaceDetails: FaceDetailSchema.exactOptional(),
    Reasons: UnsearchedFaceReasonsSchema.and(
      z.any().openapi({ description: " Reasons why a face wasn't used for Search. " }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Face details inferred from the image but not used for search. The response attribute contains reasons for why a face wasn't used for Search. ",
    required: [],
  })
  .openapi('UnsearchedFace')

const UnsearchedFacesListSchema = z.array(UnsearchedFaceSchema).openapi('UnsearchedFacesList')

const SearchUsersByImageResponseSchema = z
  .object({
    UserMatches: UserMatchListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of UserID objects that matched the input face, along with the confidence in the match. The returned structure will be empty if there are no matches. Returned if the SearchUsersByImageResponse action is successful.',
        }),
    ).exactOptional(),
    FaceModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Version number of the face detection model associated with the input collection CollectionId.',
        }),
    ).exactOptional(),
    SearchedFace: SearchedFaceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of FaceDetail objects containing the BoundingBox for the largest face in image, as well as the confidence in the bounding box, that was searched for matches. If no valid face is detected in the image the response will contain no SearchedFace object.',
        }),
    ).exactOptional(),
    UnsearchedFaces: UnsearchedFacesListSchema.and(
      z
        .any()
        .openapi({
          description:
            "List of UnsearchedFace objects. Contains the face details infered from the specified image but not used for search. Contains reasons that describe why a face wasn't used for Search. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      FaceModelVersion: '6',
      SearchedFace: {
        FaceDetail: {
          BoundingBox: {
            Height: 0.07510016113519669,
            Left: 0.3598678708076477,
            Top: 0.5391526818275452,
            Width: 0.03692837432026863,
          },
        },
      },
      UnsearchedFaces: [
        {
          FaceDetails: {
            BoundingBox: {
              Height: 0.0682177022099495,
              Left: 0.6102562546730042,
              Top: 0.5593535900115967,
              Width: 0.031677018851041794,
            },
          },
          Reasons: ['FACE_NOT_LARGEST'],
        },
        {
          FaceDetails: {
            BoundingBox: {
              Height: 0.06347997486591339,
              Left: 0.516062319278717,
              Top: 0.6080358028411865,
              Width: 0.03254449740052223,
            },
          },
          Reasons: ['FACE_NOT_LARGEST'],
        },
      ],
      UserMatches: [
        { Similarity: 99.88186645507812, User: { UserId: 'demoUser1', UserStatus: 'ACTIVE' } },
      ],
    },
    required: [],
  })
  .openapi('SearchUsersByImageResponse')

const SearchUsersByImageRequestSchema = z
  .object({
    CollectionId: CollectionIdSchema.and(
      z.any().openapi({ description: 'The ID of an existing collection containing the UserID.' }),
    ),
    Image: ImageSchema,
    UserMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the minimum confidence in the UserID match to return. Default value is 80.',
        }),
    ).exactOptional(),
    MaxUsers: MaxUserResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of UserIDs to return.' }),
    ).exactOptional(),
    QualityFilter: QualityFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            "A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't searched for in the collection. The default value is NONE.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionId', 'Image'], title: 'SearchUsersByImageRequest' })
  .openapi('SearchUsersByImageRequest')

const StartCelebrityRecognitionResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the celebrity recognition analysis job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetCelebrityRecognition</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartCelebrityRecognitionResponse')

const NotificationChannelSchema = z
  .object({
    SNSTopicArn: SNSTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic to which Amazon Rekognition posts the completion status.',
        }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic. ',
        }),
    ),
  })
  .openapi({
    required: ['SNSTopicArn', 'RoleArn'],
    description:
      'The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>.',
  })
  .openapi('NotificationChannel')

const StartCelebrityRecognitionRequestSchema = z
  .object({
    Video: VideoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video in which you want to recognize celebrities. The video must be stored in an Amazon S3 bucket.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartCelebrityRecognition</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the celebrity recognition analysis to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video'], title: 'StartCelebrityRecognitionRequest' })
  .openapi('StartCelebrityRecognitionRequest')

const VideoTooLargeExceptionSchema = z.any().openapi('VideoTooLargeException')

const StartContentModerationResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the content analysis job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetContentModeration</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartContentModerationResponse')

const StartContentModerationRequestSchema = z
  .object({
    Video: VideoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video in which you want to detect inappropriate, unwanted, or offensive content. The video must be stored in an Amazon S3 bucket.',
        }),
    ),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the minimum confidence that Amazon Rekognition must have in order to return a moderated content label. Confidence represents how certain Amazon Rekognition is that the moderated content is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition doesn't return any moderated content labels with a confidence level lower than this specified value. If you don't specify <code>MinConfidence</code>, <code>GetContentModeration</code> returns labels with confidence values greater than or equal to 50 percent.",
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartContentModeration</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN that you want Amazon Rekognition Video to publish the completion status of the content analysis to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video'], title: 'StartContentModerationRequest' })
  .openapi('StartContentModerationRequest')

const StartFaceDetectionResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the face detection job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetFaceDetection</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartFaceDetectionResponse')

const FaceAttributesSchema = z.enum(['DEFAULT', 'ALL']).openapi('FaceAttributes')

const StartFaceDetectionRequestSchema = z
  .object({
    Video: VideoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video in which you want to detect faces. The video must be stored in an Amazon S3 bucket.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartFaceDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the face detection operation. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.',
        }),
    ).exactOptional(),
    FaceAttributes: FaceAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The face attributes you want returned.</p> <p> <code>DEFAULT</code> - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks. </p> <p> <code>ALL</code> - All facial attributes are returned.</p>',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video'], title: 'StartFaceDetectionRequest' })
  .openapi('StartFaceDetectionRequest')

const StartFaceSearchResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the search job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetFaceSearch</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartFaceSearchResponse')

const StartFaceSearchRequestSchema = z
  .object({
    Video: VideoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video you want to search. The video must be stored in an Amazon S3 bucket. ',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartFaceSearch</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    FaceMatchThreshold: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "The minimum confidence in the person match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%.",
        }),
    ).exactOptional(),
    CollectionId: CollectionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'ID of the collection that contains the faces you want to search for.',
        }),
    ),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the search. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video', 'CollectionId'], title: 'StartFaceSearchRequest' })
  .openapi('StartFaceSearchRequest')

const StartLabelDetectionResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the label detection job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetLabelDetection</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartLabelDetectionResponse')

const LabelDetectionFeatureNameSchema = z
  .literal('GENERAL_LABELS')
  .openapi('LabelDetectionFeatureName')

const LabelDetectionFeatureListSchema = z
  .array(LabelDetectionFeatureNameSchema)
  .min(0)
  .max(1)
  .openapi('LabelDetectionFeatureList')

const LabelDetectionSettingsSchema = z
  .object({ GeneralLabels: GeneralLabelsSettingsSchema.exactOptional() })
  .openapi({
    description:
      'Contains the specified filters that should be applied to a list of returned GENERAL_LABELS.',
    required: [],
  })
  .openapi('LabelDetectionSettings')

const StartLabelDetectionRequestSchema = z
  .object({
    Video: VideoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video in which you want to detect labels. The video must be stored in an Amazon S3 bucket.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartLabelDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label. Confidence represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any labels with a confidence level lower than this specified value.</p> <p>If you don't specify <code>MinConfidence</code>, the operation returns labels and bounding boxes (if detected) with confidence values greater than or equal to 50 percent.</p>",
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the label detection operation to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
    Features: LabelDetectionFeatureListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The features to return after video analysis. You can specify that GENERAL_LABELS are returned.',
        }),
    ).exactOptional(),
    Settings: LabelDetectionSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for a StartLabelDetection request.Contains the specified parameters for the label detection request of an asynchronous label analysis operation. Settings can include filters for GENERAL_LABELS.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video'], title: 'StartLabelDetectionRequest' })
  .openapi('StartLabelDetectionRequest')

const StartPersonTrackingResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the person detection job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetPersonTracking</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartPersonTrackingResponse')

const StartPersonTrackingRequestSchema = z
  .object({
    Video: VideoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video in which you want to detect people. The video must be stored in an Amazon S3 bucket.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartPersonTracking</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN you want Amazon Rekognition Video to publish the completion status of the people detection operation to. The Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video'], title: 'StartPersonTrackingRequest' })
  .openapi('StartPersonTrackingRequest')

const StartProjectVersionResponseSchema = z
  .object({
    Status: ProjectVersionStatusSchema.and(
      z.any().openapi({ description: 'The current running status of the model. ' }),
    ).exactOptional(),
  })
  .openapi({ example: { Status: 'STARTING' }, required: [] })
  .openapi('StartProjectVersionResponse')

const StartProjectVersionRequestSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name(ARN) of the model version that you want to start.',
        }),
    ),
    MinInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum number of inference units to use. A single inference unit represents 1 hour of processing. </p> <p>For information about the number of transactions per second (TPS) that an inference unit can support, see <i>Running a trained Amazon Rekognition Custom Labels model</i> in the Amazon Rekognition Custom Labels Guide. </p> <p>Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use. </p>',
        }),
    ),
    MaxInferenceUnits: InferenceUnitsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Rekognition Custom Labels doesn't auto-scale the model.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProjectVersionArn', 'MinInferenceUnits'],
    title: 'StartProjectVersionRequest',
  })
  .openapi('StartProjectVersionRequest')

const StartSegmentDetectionResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier for the segment detection job. The <code>JobId</code> is returned from <code>StartSegmentDetection</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSegmentDetectionResponse')

const MaxPixelThresholdSchema = z.float32().min(0).max(1).openapi('MaxPixelThreshold')

const MinCoveragePercentageSchema = z.float32().min(0).max(100).openapi('MinCoveragePercentage')

const BlackFrameSchema = z
  .object({
    MaxPixelThreshold: MaxPixelThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A threshold used to determine the maximum luminance value for a pixel to be considered black. In a full color range video, luminance values range from 0-255. A pixel value of 0 is pure black, and the most strict filter. The maximum black pixel value is computed as follows: max_black_pixel_value = minimum_luminance + MaxPixelThreshold *luminance_range. </p> <p>For example, for a full range video with BlackPixelThreshold = 0.1, max_black_pixel_value is 0 + 0.1 * (255-0) = 25.5.</p> <p>The default value of MaxPixelThreshold is 0.2, which maps to a max_black_pixel_value of 51 for a full range video. You can lower this threshold to be more strict on black levels.</p>',
        }),
    ).exactOptional(),
    MinCoveragePercentage: MinCoveragePercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The minimum percentage of pixels in a frame that need to have a luminance below the max_black_pixel_value for a frame to be considered a black frame. Luminance is calculated using the BT.709 matrix. </p> <p>The default value is 99, which means at least 99% of all pixels in the frame are black pixels as per the <code>MaxPixelThreshold</code> set. You can reduce this value to allow more noise on the black frame.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see <a>StartSegmentDetection</a>. ',
    required: [],
  })
  .openapi('BlackFrame')

const StartTechnicalCueDetectionFilterSchema = z
  .object({
    MinSegmentConfidence: SegmentConfidenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any segments with a confidence level lower than this specified value.</p> <p>If you don't specify <code>MinSegmentConfidence</code>, <code>GetSegmentDetection</code> returns segments with confidence values greater than or equal to 50 percent.</p>",
        }),
    ).exactOptional(),
    BlackFrame: BlackFrameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. Videos can come from multiple sources, formats, and time periods, with different standards and varying noise levels for black frames that need to be accounted for. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.',
    required: [],
  })
  .openapi('StartTechnicalCueDetectionFilter')

const StartShotDetectionFilterSchema = z
  .object({
    MinSegmentConfidence: SegmentConfidenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any segments with a confidence level lower than this specified value.</p> <p>If you don't specify <code>MinSegmentConfidence</code>, the <code>GetSegmentDetection</code> returns segments with confidence values greater than or equal to 50 percent.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.',
    required: [],
  })
  .openapi('StartShotDetectionFilter')

const StartSegmentDetectionFiltersSchema = z
  .object({
    TechnicalCueFilter: StartTechnicalCueDetectionFilterSchema.and(
      z.any().openapi({ description: 'Filters that are specific to technical cues.' }),
    ).exactOptional(),
    ShotFilter: StartShotDetectionFilterSchema.and(
      z.any().openapi({ description: 'Filters that are specific to shot detections.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. ',
    required: [],
  })
  .openapi('StartSegmentDetectionFilters')

const SegmentTypesSchema = z.array(SegmentTypeSchema).min(1).openapi('SegmentTypes')

const StartSegmentDetectionRequestSchema = z
  .object({
    Video: VideoSchema,
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartSegmentDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. ',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the segment detection operation. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.",
        }),
    ).exactOptional(),
    Filters: StartSegmentDetectionFiltersSchema.and(
      z.any().openapi({ description: 'Filters for technical cue or shot detection.' }),
    ).exactOptional(),
    SegmentTypes: SegmentTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT.',
        }),
    ),
  })
  .openapi({ required: ['Video', 'SegmentTypes'], title: 'StartSegmentDetectionRequest' })
  .openapi('StartSegmentDetectionRequest')

const StartStreamProcessorSessionIdSchema = z.string().openapi('StartStreamProcessorSessionId')

const StartStreamProcessorResponseSchema = z
  .object({
    SessionId: StartStreamProcessorSessionIdSchema.and(
      z.any().openapi({ description: ' A unique identifier for the stream processing session. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartStreamProcessorResponse')

const KinesisVideoStreamFragmentNumberSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(128)
  .openapi('KinesisVideoStreamFragmentNumber')

const KinesisVideoStreamStartSelectorSchema = z
  .object({
    ProducerTimestamp: ULongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The timestamp from the producer corresponding to the fragment, in milliseconds, expressed in unix time format. ',
        }),
    ).exactOptional(),
    FragmentNumber: KinesisVideoStreamFragmentNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique identifier of the fragment. This value monotonically increases based on the ingestion order. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the starting point in a Kinesis stream to start processing. You can use the producer timestamp or the fragment number. One of either producer timestamp or fragment number is required. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>. ',
    required: [],
  })
  .openapi('KinesisVideoStreamStartSelector')

const StreamProcessingStartSelectorSchema = z
  .object({
    KVSStreamStartSelector: KinesisVideoStreamStartSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the starting point in the stream to start processing. This can be done with a producer timestamp or a fragment number in a Kinesis stream. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.',
    required: [],
  })
  .openapi('StreamProcessingStartSelector')

const MaxDurationInSecondsULongSchema = z.int().min(1).max(120).openapi('MaxDurationInSecondsULong')

const StreamProcessingStopSelectorSchema = z
  .object({
    MaxDurationInSeconds: MaxDurationInSecondsULongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the maximum amount of time in seconds that you want the stream to be processed. The largest amount of time is 2 minutes. The default is 10 seconds. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Specifies when to stop processing the stream. You can specify a maximum amount of time to process the video. ',
    required: [],
  })
  .openapi('StreamProcessingStopSelector')

const StartStreamProcessorRequestSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z.any().openapi({ description: 'The name of the stream processor to start processing.' }),
    ),
    StartSelector: StreamProcessingStartSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the starting point in the Kinesis stream to start processing. You can use the producer timestamp or the fragment number. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>. </p> <p>This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.</p>',
        }),
    ).exactOptional(),
    StopSelector: StreamProcessingStopSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies when to stop processing the stream. You can specify a maximum amount of time to process the video. </p> <p>This is a required parameter for label detection stream processors and should not be used to start a face search stream processor.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'StartStreamProcessorRequest' })
  .openapi('StartStreamProcessorRequest')

const StartTextDetectionResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the text detection job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetTextDetection</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTextDetectionResponse')

const StartTextDetectionFiltersSchema = z
  .object({
    WordFilter: DetectionFilterSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters focusing on qualities of the text, such as confidence or size.',
        }),
    ).exactOptional(),
    RegionsOfInterest: RegionsOfInterestSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter focusing on a certain area of the frame. Uses a <code>BoundingBox</code> object to set the region of the screen.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.",
    required: [],
  })
  .openapi('StartTextDetectionFilters')

const StartTextDetectionRequestSchema = z
  .object({
    Video: VideoSchema,
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Idempotent token used to identify the start request. If you use the same token with multiple <code>StartTextDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentaly started more than once.',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier returned in the completion status published by your Amazon Simple Notification Service topic. For example, you can use <code>JobTag</code> to group related jobs and identify them in the completion notification.',
        }),
    ).exactOptional(),
    Filters: StartTextDetectionFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional parameters that let you set criteria the text must meet to be included in your response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Video'], title: 'StartTextDetectionRequest' })
  .openapi('StartTextDetectionRequest')

const StopProjectVersionResponseSchema = z
  .object({
    Status: ProjectVersionStatusSchema.and(
      z.any().openapi({ description: 'The current status of the stop operation. ' }),
    ).exactOptional(),
  })
  .openapi({ example: { Status: 'STOPPING' }, required: [] })
  .openapi('StopProjectVersionResponse')

const StopProjectVersionRequestSchema = z
  .object({
    ProjectVersionArn: ProjectVersionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the model version that you want to delete.</p> <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>',
        }),
    ),
  })
  .openapi({ required: ['ProjectVersionArn'], title: 'StopProjectVersionRequest' })
  .openapi('StopProjectVersionRequest')

const StopStreamProcessorResponseSchema = z.object({}).openapi('StopStreamProcessorResponse')

const StopStreamProcessorRequestSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a stream processor created by <a>CreateStreamProcessor</a>.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'StopStreamProcessorRequest' })
  .openapi('StopStreamProcessorRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to assign the tags to. ',
        }),
    ),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: ' The key-value tags to assign to the resource. ' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[\p{L}\p{Z}\p{N}_.:\/=+\-@]*$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Amazon Resource Name (ARN) of the model, collection, or stream processor that you want to remove the tags from. ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: ' A list of the tags that you want to remove. ' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDatasetEntriesResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('UpdateDatasetEntriesResponse')

const GroundTruthBlobSchema = z.string().min(1).max(5242880).openapi('GroundTruthBlob')

const DatasetChangesSchema = z
  .object({
    GroundTruth: GroundTruthBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A Base64-encoded binary data object containing one or JSON lines that either update the dataset or are additions to the dataset. You change a dataset by calling <a>UpdateDatasetEntries</a>. If you are using an AWS SDK to call <code>UpdateDatasetEntries</code>, you don't need to encode <code>Changes</code> as the SDK encodes the data for you. </p> <p>For example JSON lines, see Image-Level labels in manifest files and and Object localization in manifest files in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p>",
        }),
    ),
  })
  .openapi({
    required: ['GroundTruth'],
    description:
      " Describes updates or additions to a dataset. A Single update or addition is an entry (JSON Line) that provides information about a single image. To update an existing entry, you match the <code>source-ref</code> field of the update entry with the <code>source-ref</code> filed of the entry that you want to update. If the <code>source-ref</code> field doesn't match an existing entry, the entry is added to dataset as a new entry. ",
  })
  .openapi('DatasetChanges')

const UpdateDatasetEntriesRequestSchema = z
  .object({
    DatasetArn: DatasetArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the dataset that you want to update. ',
        }),
    ),
    Changes: DatasetChangesSchema.and(
      z.any().openapi({ description: ' The changes that you want to make to the dataset. ' }),
    ),
  })
  .openapi({ required: ['DatasetArn', 'Changes'], title: 'UpdateDatasetEntriesRequest' })
  .openapi('UpdateDatasetEntriesRequest')

const UpdateStreamProcessorResponseSchema = z.object({}).openapi('UpdateStreamProcessorResponse')

const ConnectedHomeSettingsForUpdateSchema = z
  .object({
    Labels: ConnectedHomeLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL". ',
        }),
    ).exactOptional(),
    MinConfidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description: ' The minimum confidence required to label an object in the video. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects. ',
    required: [],
  })
  .openapi('ConnectedHomeSettingsForUpdate')

const StreamProcessorSettingsForUpdateSchema = z
  .object({
    ConnectedHomeForUpdate: ConnectedHomeSettingsForUpdateSchema.and(
      z
        .any()
        .openapi({
          description: ' The label detection settings you want to use for your stream processor. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The stream processor settings that you want to update. <code>ConnectedHome</code> settings can be updated to detect different labels with a different minimum confidence. ',
    required: [],
  })
  .openapi('StreamProcessorSettingsForUpdate')

const StreamProcessorParameterToDeleteSchema = z
  .enum(['ConnectedHomeMinConfidence', 'RegionsOfInterest'])
  .openapi('StreamProcessorParameterToDelete')

const StreamProcessorParametersToDeleteSchema = z
  .array(StreamProcessorParameterToDeleteSchema)
  .openapi('StreamProcessorParametersToDelete')

const UpdateStreamProcessorRequestSchema = z
  .object({
    Name: StreamProcessorNameSchema.and(
      z.any().openapi({ description: ' Name of the stream processor that you want to update. ' }),
    ),
    SettingsForUpdate: StreamProcessorSettingsForUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The stream processor settings that you want to update. Label detection settings can be updated to detect different labels with a different minimum confidence. ',
        }),
    ).exactOptional(),
    RegionsOfInterestForUpdate: RegionsOfInterestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors. ',
        }),
    ).exactOptional(),
    DataSharingPreferenceForUpdate: StreamProcessorDataSharingPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams. ',
        }),
    ).exactOptional(),
    ParametersToDelete: StreamProcessorParametersToDeleteSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of parameters you want to delete from the stream processor. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateStreamProcessorRequest' })
  .openapi('UpdateStreamProcessorRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetRekognitionServiceAssociateFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.AssociateFaces',
  description:
    "<p>Associates one or more faces with an existing UserID. Takes an array of <code>FaceIds</code>. Each <code>FaceId</code> that are present in the <code>FaceIds</code> list is associated with the provided UserID. The maximum number of total <code>FaceIds</code> per UserID is 100. </p> <p>The <code>UserMatchThreshold</code> parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one <code>FaceID</code> already associated. This ensures that the <code>FaceIds</code> are associated with the right UserID. The value ranges from 0-100 and default value is 75. </p> <p>If successful, an array of <code>AssociatedFace</code> objects containing the associated <code>FaceIds</code> is returned. If a given face is already associated with the given <code>UserID</code>, it will be ignored and will not be returned in the response. If a given face is already associated to a different <code>UserID</code>, isn't found in the collection, doesn’t meet the <code>UserMatchThreshold</code>, or there are already 100 faces associated with the <code>UserID</code>, it will be returned as part of an array of <code>UnsuccessfulFaceAssociations.</code> </p> <p>The <code>UserStatus</code> reflects the status of an operation which updates a UserID representation with a list of given faces. The <code>UserStatus</code> can be: </p> <ul> <li> <p>ACTIVE - All associations or disassociations of FaceID(s) for a UserID are complete.</p> </li> <li> <p>CREATED - A UserID has been created, but has no FaceID(s) associated with it.</p> </li> <li> <p>UPDATING - A UserID is being updated and there are current associations or disassociations of FaceID(s) taking place.</p> </li> </ul>",
  operationId: 'AssociateFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.AssociateFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.AssociateFaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateFacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateFacesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    488: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCompareFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CompareFaces',
  description:
    "<p>Compares a face in the <i>source</i> input image with each of the 100 largest faces detected in the <i>target</i> input image. </p> <p> If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. </p> <note> <p>CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use <code>CompareFaces</code> to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action.</p> </note> <p>You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, roll, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match. </p> <note> <p>By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the <code>SimilarityThreshold</code> parameter.</p> </note> <p> <code>CompareFaces</code> also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>. </p> <p>If the image doesn't contain Exif metadata, <code>CompareFaces</code> returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.</p> <p>If no faces are detected in the source or target images, <code>CompareFaces</code> returns an <code>InvalidParameterException</code> error. </p> <note> <p> This is a stateless API operation. That is, data returned by this operation doesn't persist.</p> </note> <p>For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:CompareFaces</code> action.</p>",
  operationId: 'CompareFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CompareFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CompareFaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CompareFacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompareFacesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCopyProjectVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CopyProjectVersion',
  description:
    "<p>Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. </p> <p>To copy a model version to a different AWS account, you need to create a resource-based policy known as a <i>project policy</i>. You attach the project policy to the source project by calling <a>PutProjectPolicy</a>. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account.</p> <p>For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <p>If you are copying a model version to a project in the same AWS account, you don't need to create a project policy.</p> <note> <p>To copy a model, the destination project, source project, and source model version must already exist.</p> </note> <p>Copying a model version takes a while to complete. To get the current status, call <a>DescribeProjectVersions</a> and check the value of <code>Status</code> in the <a>ProjectVersionDescription</a> object. The copy operation has finished when the value of <code>Status</code> is <code>COPYING_COMPLETED</code>.</p> <p>This operation requires permissions to perform the <code>rekognition:CopyProjectVersion</code> action.</p>",
  operationId: 'CopyProjectVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CopyProjectVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CopyProjectVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CopyProjectVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CopyProjectVersionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateCollectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateCollection',
  description:
    '<p>Creates a collection in an AWS Region. You can add faces to the collection using the <a>IndexFaces</a> operation. </p> <p>For example, you might create collections, one for each of your application users. A user can then index faces using the <code>IndexFaces</code> operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. </p> <p>When you create a collection, it is associated with the latest version of the face model version.</p> <note> <p>Collection names are case-sensitive.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:CreateCollection</code> action. If you want to tag your collection, you also require permission to perform the <code>rekognition:TagResource</code> operation.</p>',
  operationId: 'CreateCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateCollection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateCollection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateCollectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCollectionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateDataset',
  description:
    "<p>Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset.</p> <p>To create a training dataset for a project, specify <code>TRAIN</code> for the value of <code>DatasetType</code>. To create the test dataset for a project, specify <code>TEST</code> for the value of <code>DatasetType</code>. </p> <p>The response from <code>CreateDataset</code> is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a while to complete. Use <a>DescribeDataset</a> to check the current status. The dataset created successfully if the value of <code>Status</code> is <code>CREATE_COMPLETE</code>. </p> <p>To check if any non-terminal errors occurred, call <a>ListDatasetEntries</a> and check for the presence of <code>errors</code> lists in the JSON Lines.</p> <p>Dataset creation fails if a terminal error occurs (<code>Status</code> = <code>CREATE_FAILED</code>). Currently, you can't access the terminal error information. </p> <p>For more information, see Creating dataset in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.</p> <p>This operation requires permissions to perform the <code>rekognition:CreateDataset</code> action. If you want to copy an existing dataset, you also require permission to perform the <code>rekognition:ListDatasetEntries</code> action.</p>",
  operationId: 'CreateDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    487: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateFaceLivenessSessionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateFaceLivenessSession',
  description:
    '<p>This API operation initiates a Face Liveness session. It returns a <code>SessionId</code>, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. </p> <p>You can use the <code>OutputConfig</code> option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. </p> <p>You can use <code>AuditImagesLimit</code> to limit the number of audit images returned when <code>GetFaceLivenessSessionResults</code> is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video. </p>',
  operationId: 'CreateFaceLivenessSession',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateFaceLivenessSession')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateFaceLivenessSession'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFaceLivenessSessionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFaceLivenessSessionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateProject',
  description:
    '<p>Creates a new Amazon Rekognition Custom Labels project. A project is a group of resources (datasets, model versions) that you use to create and manage Amazon Rekognition Custom Labels models. </p> <p>This operation requires permissions to perform the <code>rekognition:CreateProject</code> action.</p>',
  operationId: 'CreateProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateProjectVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateProjectVersion',
  description:
    "<p>Creates a new version of a model and begins training. Models are managed as part of an Amazon Rekognition Custom Labels project. The response from <code>CreateProjectVersion</code> is an Amazon Resource Name (ARN) for the version of the model. </p> <p>Training uses the training and test datasets associated with the project. For more information, see Creating training and test dataset in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <note> <p>You can train a model in a project that doesn't have associated datasets by specifying manifest files in the <code>TrainingData</code> and <code>TestingData</code> fields. </p> <p>If you open the console after training a model with manifest files, Amazon Rekognition Custom Labels creates the datasets for you using the most recent manifest files. You can no longer train a model version for the project by specifying manifest files. </p> <p>Instead of training with a project without associated datasets, we recommend that you use the manifest files to create training and test datasets for the project.</p> </note> <p>Training takes a while to complete. You can get the current status by calling <a>DescribeProjectVersions</a>. Training completed successfully if the value of the <code>Status</code> field is <code>TRAINING_COMPLETED</code>.</p> <p>If training fails, see Debugging a failed model training in the <i>Amazon Rekognition Custom Labels</i> developer guide. </p> <p>Once training has successfully completed, call <a>DescribeProjectVersions</a> to get the training results and evaluate the model. For more information, see Improving a trained Amazon Rekognition Custom Labels model in the <i>Amazon Rekognition Custom Labels</i> developers guide. </p> <p>After evaluating the model, you start the model by calling <a>StartProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:CreateProjectVersion</code> action.</p>",
  operationId: 'CreateProjectVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateProjectVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateProjectVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProjectVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectVersionResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateStreamProcessorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateStreamProcessor',
  description:
    '<p>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video.</p> <p>Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels.</p> <ul> <li> <p>If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (<code>Input</code>) and a Kinesis data stream (<code>Output</code>) stream for receiving the output. You must use the <code>FaceSearch</code> option in <code>Settings</code>, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use <a>StopStreamProcessor</a> to stop processing.</p> </li> <li> <p>If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (<code>Input</code>), Amazon S3 bucket information (<code>Output</code>), and an Amazon SNS topic ARN (<code>NotificationChannel</code>). You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want to detect by using the <code>ConnectedHome</code> option in settings, and selecting one of the following: <code>PERSON</code>, <code>PET</code>, <code>PACKAGE</code>, <code>ALL</code> You can also specify where in the frame you want Amazon Rekognition to monitor with <code>RegionsOfInterest</code>. When you run the <a>StartStreamProcessor</a> operation on a label detection stream processor, you input start and stop information to determine the length of the processing time.</p> </li> </ul> <p> Use <code>Name</code> to assign an identifier for the stream processor. You use <code>Name</code> to manage the stream processor. For example, you can start processing the source video by calling <a>StartStreamProcessor</a> with the <code>Name</code> field. </p> <p>This operation requires permissions to perform the <code>rekognition:CreateStreamProcessor</code> action. If you want to tag your stream processor, you also require permission to perform the <code>rekognition:TagResource</code> operation.</p>',
  operationId: 'CreateStreamProcessor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateStreamProcessor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateStreamProcessor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateStreamProcessorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStreamProcessorResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.CreateUser',
  description:
    '<p>Creates a new User within a collection specified by <code>CollectionId</code>. Takes <code>UserId</code> as a parameter, which is a user provided ID which should be unique within the collection. The provided <code>UserId</code> will alias the system generated UUID to make the <code>UserId</code> more user friendly. </p> <p>Uses a <code>ClientToken</code>, an idempotency token that ensures a call to <code>CreateUser</code> completes only once. If the value is not supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries after a network error results from making multiple <code>CreateUser</code> calls. </p>',
  operationId: 'CreateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.CreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.CreateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteCollectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteCollection',
  description:
    '<p>Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/delete-collection-procedure.html">Deleting a collection</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteCollection</code> action.</p>',
  operationId: 'DeleteCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteCollection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteCollection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCollectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCollectionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteDataset',
  description:
    "<p>Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use <a>DescribeDataset</a> to check the current status. The dataset is still deleting if the value of <code>Status</code> is <code>DELETE_IN_PROGRESS</code>. If you try to access the dataset after it is deleted, you get a <code>ResourceNotFoundException</code> exception. </p> <p>You can't delete a dataset while it is creating (<code>Status</code> = <code>CREATE_IN_PROGRESS</code>) or if the dataset is updating (<code>Status</code> = <code>UPDATE_IN_PROGRESS</code>).</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteDataset</code> action.</p>",
  operationId: 'DeleteDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteFaces',
  description:
    '<p>Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteFaces</code> action.</p>',
  operationId: 'DeleteFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteFaces'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFacesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFacesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteProjectRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteProject',
  description:
    '<p>Deletes an Amazon Rekognition Custom Labels project. To delete a project you must first delete all models associated with the project. To delete a model, see <a>DeleteProjectVersion</a>.</p> <p> <code>DeleteProject</code> is an asynchronous operation. To check if the project is deleted, call <a>DescribeProjects</a>. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any <code>ProjectPolicies</code> associated with that project.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProject</code> action. </p>',
  operationId: 'DeleteProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteProject')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteProject'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteProjectPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteProjectPolicy',
  description:
    '<p>Deletes an existing project policy.</p> <p>To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. To attach a project policy to a project, call <a>PutProjectPolicy</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectPolicy</code> action.</p>',
  operationId: 'DeleteProjectPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteProjectPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteProjectPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProjectPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectPolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    486: {
      description: 'InvalidPolicyRevisionIdException',
      content: { 'application/json': { schema: InvalidPolicyRevisionIdExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteProjectVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteProjectVersion',
  description:
    "<p>Deletes an Amazon Rekognition Custom Labels model. </p> <p>You can't delete a model if it is running or if it is training. To check the status of a model, use the <code>Status</code> field returned from <a>DescribeProjectVersions</a>. To stop a running model call <a>StopProjectVersion</a>. If the model is training, wait until it finishes.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectVersion</code> action. </p>",
  operationId: 'DeleteProjectVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteProjectVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteProjectVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProjectVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectVersionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteStreamProcessorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteStreamProcessor',
  description:
    'Deletes the stream processor identified by <code>Name</code>. You assign the value for <code>Name</code> when you create the stream processor with <a>CreateStreamProcessor</a>. You might not be able to use the same name for a stream processor for a few seconds after calling <code>DeleteStreamProcessor</code>.',
  operationId: 'DeleteStreamProcessor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteStreamProcessor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteStreamProcessor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteStreamProcessorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStreamProcessorResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DeleteUser',
  description:
    'Deletes the specified UserID within the collection. Faces that are associated with the UserID are disassociated from the UserID before deleting the specified UserID. If the specified <code>Collection</code> or <code>UserID</code> is already deleted or not found, a <code>ResourceNotFoundException</code> will be thrown. If the action is successful with a 200 response, an empty HTTP body is returned. ',
  operationId: 'DeleteUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    484: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDescribeCollectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DescribeCollection',
  description:
    '<p>Describes the specified collection. You can use <code>DescribeCollection</code> to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection.</p> <p>For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'DescribeCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DescribeCollection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DescribeCollection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCollectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCollectionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDescribeDatasetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DescribeDataset',
  description:
    '<p> Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. </p> <p>This operation requires permissions to perform the <code>rekognition:DescribeDataset</code> action.</p>',
  operationId: 'DescribeDataset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DescribeDataset')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DescribeDataset'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDatasetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDatasetResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDescribeProjectVersionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DescribeProjectVersions',
  description:
    "<p>Lists and describes the versions of a model in an Amazon Rekognition Custom Labels project. You can specify up to 10 model versions in <code>ProjectVersionArns</code>. If you don't specify a value, descriptions for all model versions in the project are returned.</p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjectVersions</code> action.</p>",
  operationId: 'DescribeProjectVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DescribeProjectVersions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DescribeProjectVersions'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProjectVersionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectVersionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDescribeProjectsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DescribeProjects',
  description:
    '<p>Gets information about your Amazon Rekognition Custom Labels projects. </p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjects</code> action.</p>',
  operationId: 'DescribeProjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DescribeProjects')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DescribeProjects'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProjectsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectsResponseSchema } },
    },
    480: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDescribeStreamProcessorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DescribeStreamProcessor',
  description:
    'Provides information about a stream processor created by <a>CreateStreamProcessor</a>. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.',
  operationId: 'DescribeStreamProcessor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DescribeStreamProcessor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DescribeStreamProcessor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeStreamProcessorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStreamProcessorResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDetectCustomLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DetectCustomLabels',
  description:
    "<p>Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. </p> <p>You specify which version of a model version to use by using the <code>ProjectVersionArn</code> input parameter. </p> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> For each object that the model version detects on an image, the API returns a (<code>CustomLabel</code>) object in an array (<code>CustomLabels</code>). Each <code>CustomLabel</code> object provides the label name (<code>Name</code>), the level of confidence that the image contains the object (<code>Confidence</code>), and object location information, if it exists, for the label on the image (<code>Geometry</code>). </p> <p>To filter labels that are returned, specify a value for <code>MinConfidence</code>. <code>DetectCustomLabelsLabels</code> only returns labels with a confidence that's higher than the specified value. The value of <code>MinConfidence</code> maps to the assumed threshold values created during training. For more information, see <i>Assumed threshold</i> in the Amazon Rekognition Custom Labels Developer Guide. Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of <code>MinConfidence</code> normalizes the threshold value to a percentage value (0-100). Confidence responses from <code>DetectCustomLabels</code> are also returned as a percentage. You can use <code>MinConfidence</code> to change the precision and recall or your model. For more information, see <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>If you don't specify a value for <code>MinConfidence</code>, <code>DetectCustomLabels</code> returns labels based on the assumed threshold of each label.</p> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectCustomLabels</code> action. </p> <p>For more information, see <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p>",
  operationId: 'DetectCustomLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DetectCustomLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DetectCustomLabels'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectCustomLabelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectCustomLabelsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
    482: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    489: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    490: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDetectFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DetectFaces',
  description:
    '<p>Detects faces within an image that is provided as input.</p> <p> <code>DetectFaces</code> detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on.</p> <p>The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. </p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <note> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:DetectFaces</code> action. </p>',
  operationId: 'DetectFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DetectFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DetectFaces'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetectFacesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectFacesResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDetectLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DetectLabels',
  description:
    '<p>Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. </p> <p>For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide.</p> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> <b>Optional Parameters</b> </p> <p>You can specify one or both of the <code>GENERAL_LABELS</code> and <code>IMAGE_PROPERTIES</code> feature types when calling the DetectLabels API. Including <code>GENERAL_LABELS</code> will ensure the response includes the labels detected in the input image, while including <code>IMAGE_PROPERTIES </code>will ensure the response includes information about the image quality and color.</p> <p>When using <code>GENERAL_LABELS</code> and/or <code>IMAGE_PROPERTIES</code> you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive filters. For more information on filtering see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels-detect-labels-image.html">Detecting Labels in an Image</a>.</p> <p>When getting labels, you can specify <code>MinConfidence</code> to control the confidence threshold for the labels returned. The default is 55%. You can also add the <code>MaxLabels</code> parameter to limit the number of labels returned. The default and upper limit is 1000 labels. These arguments are only valid when supplying GENERAL_LABELS as a feature type.</p> <p> <b>Response Elements</b> </p> <p> For each object, scene, and concept the API returns one or more labels. The API returns the following types of information about labels:</p> <ul> <li> <p> Name - The name of the detected label. </p> </li> <li> <p> Confidence - The level of confidence in the label assigned to a detected object. </p> </li> <li> <p> Parents - The ancestor labels for a detected label. DetectLabels returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. </p> </li> <li> <p> Aliases - Possible Aliases for the label. </p> </li> <li> <p> Categories - The label categories that the detected label belongs to. </p> </li> <li> <p> BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box. </p> </li> </ul> <p> The API returns the following information regarding the image, as part of the ImageProperties structure:</p> <ul> <li> <p>Quality - Information about the Sharpness, Brightness, and Contrast of the input image, scored between 0 to 100. Image quality is returned for the entire image, as well as the background and the foreground. </p> </li> <li> <p>Dominant Color - An array of the dominant colors in the image. </p> </li> <li> <p>Foreground - Information about the sharpness, brightness, and dominant colors of the input image’s foreground. </p> </li> <li> <p>Background - Information about the sharpness, brightness, and dominant colors of the input image’s background.</p> </li> </ul> <p>The list of returned labels will include at least one label for every detected object, along with information about that label. In the following example, suppose the input image has a lighthouse, the sea, and a rock. The response includes all three labels, one for each object, as well as the confidence in the label:</p> <p> <code>{Name: lighthouse, Confidence: 98.4629}</code> </p> <p> <code>{Name: rock,Confidence: 79.2097}</code> </p> <p> <code> {Name: sea,Confidence: 75.061}</code> </p> <p>The list of labels can include multiple labels for the same object. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels. </p> <p> <code>{Name: flower,Confidence: 99.0562}</code> </p> <p> <code>{Name: plant,Confidence: 99.0562}</code> </p> <p> <code>{Name: tulip,Confidence: 99.0562}</code> </p> <p>In this example, the detection algorithm more precisely identifies the flower as a tulip.</p> <note> <p>If the object detected is a person, the operation doesn\'t provide the same facial details that the <a>DetectFaces</a> operation provides.</p> </note> <p>This is a stateless API operation that doesn\'t return any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectLabels</code> action. </p>',
  operationId: 'DetectLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DetectLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DetectLabels'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectLabelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectLabelsResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDetectModerationLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DetectModerationLabels',
  description:
    '<p>Detects unsafe content in a specified JPEG or PNG format image. Use <code>DetectModerationLabels</code> to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content.</p> <p>To filter images, use the labels returned by <code>DetectModerationLabels</code> to determine which types of content are appropriate.</p> <p>For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p>',
  operationId: 'DetectModerationLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DetectModerationLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DetectModerationLabels'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectModerationLabelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectModerationLabelsResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
    488: {
      description: 'HumanLoopQuotaExceededException',
      content: { 'application/json': { schema: HumanLoopQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDetectProtectiveEquipmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DetectProtectiveEquipment',
  description:
    '<p>Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE.</p> <ul> <li> <p>Face cover</p> </li> <li> <p>Hand cover</p> </li> <li> <p>Head cover</p> </li> </ul> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG formatted file. </p> <p> <code>DetectProtectiveEquipment</code> detects PPE worn by up to 15 persons detected in an image.</p> <p>For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body part coverage). It also returns a bounding box (<a>BoundingBox</a>) for each detected person and each detected item of PPE. </p> <p>You can optionally request a summary of detected PPE items with the <code>SummarizationAttributes</code> input parameter. The summary provides the following information. </p> <ul> <li> <p>The persons detected as wearing all of the types of PPE that you specify.</p> </li> <li> <p>The persons detected as not wearing all of the types PPE that you specify.</p> </li> <li> <p>The persons detected where PPE adornment could not be determined. </p> </li> </ul> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectProtectiveEquipment</code> action. </p>',
  operationId: 'DetectProtectiveEquipment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DetectProtectiveEquipment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DetectProtectiveEquipment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectProtectiveEquipmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectProtectiveEquipmentResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDetectTextRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DetectText',
  description:
    "<p>Detects text in the input image and converts it into machine-readable text.</p> <p>Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. </p> <p>The <code>DetectText</code> operation returns text in an array of <a>TextDetection</a> elements, <code>TextDetections</code>. Each <code>TextDetection</code> element provides information about a single word or line of text that was detected in the image. </p> <p>A word is one or more script characters that are not separated by spaces. <code>DetectText</code> can detect up to 100 words in an image.</p> <p>A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don't represent the end of a line. If a sentence spans multiple lines, the <code>DetectText</code> operation returns multiple lines.</p> <p>To determine whether a <code>TextDetection</code> element is a line of text or a word, use the <code>TextDetection</code> object <code>Type</code> field. </p> <p>To be detected, text must be within +/- 90 degrees orientation of the horizontal axis.</p> <p>For more information, see Detecting text in the Amazon Rekognition Developer Guide.</p>",
  operationId: 'DetectText',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DetectText')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DetectText'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetectTextRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectTextResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDisassociateFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DisassociateFaces',
  description:
    'Removes the association between a <code>Face</code> supplied in an array of <code>FaceIds</code> and the User. If the User is not present already, then a <code>ResourceNotFound</code> exception is thrown. If successful, an array of faces that are disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will be ignored and not be returned in the response. If a given face is already associated with a different User or not found in the collection it will be returned as part of <code>UnsuccessfulDisassociations</code>. You can remove 1 - 100 face IDs from a user at one time.',
  operationId: 'DisassociateFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DisassociateFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DisassociateFaces'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateFacesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateFacesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceDistributeDatasetEntriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.DistributeDatasetEntries',
  description:
    "<p>Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. <code>DistributeDatasetEntries</code> moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. </p> <p>You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call <a>CreateDataset</a>.</p> <p>Distributing a dataset takes a while to complete. To check the status call <code>DescribeDataset</code>. The operation is complete when the <code>Status</code> field for the training dataset and the test dataset is <code>UPDATE_COMPLETE</code>. If the dataset split fails, the value of <code>Status</code> is <code>UPDATE_FAILED</code>.</p> <p>This operation requires permissions to perform the <code>rekognition:DistributeDatasetEntries</code> action.</p>",
  operationId: 'DistributeDatasetEntries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.DistributeDatasetEntries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.DistributeDatasetEntries'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DistributeDatasetEntriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DistributeDatasetEntriesResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetCelebrityInfoRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetCelebrityInfo',
  description:
    '<p>Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty.</p> <p>For more information, see Getting information about a celebrity in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:GetCelebrityInfo</code> action. </p>',
  operationId: 'GetCelebrityInfo',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetCelebrityInfo')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetCelebrityInfo'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCelebrityInfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCelebrityInfoResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetCelebrityRecognitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetCelebrityRecognition',
  description:
    "<p>Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by <a>StartCelebrityRecognition</a>.</p> <p>Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to <a>StartCelebrityRecognition</a> which returns a job identifier (<code>JobId</code>). </p> <p>When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartCelebrityRecognition</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetCelebrityDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityDetection</code>. </p> <p>For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.</p> <p> <code>GetCelebrityRecognition</code> returns detected celebrities and the time(s) they are detected in an array (<code>Celebrities</code>) of <a>CelebrityRecognition</a> objects. Each <code>CelebrityRecognition</code> contains information about the celebrity in a <a>CelebrityDetail</a> object and the time, <code>Timestamp</code>, the celebrity was detected. This <a>CelebrityDetail</a> object stores information about the detected celebrity's face attributes, a face bounding box, known gender, the celebrity's name, and a confidence estimate.</p> <note> <p> <code>GetCelebrityRecognition</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The <code>BoundingBox</code> field only applies to the detected face instance. The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Celebrities</code> array is sorted by time (milliseconds from the start of the video). You can also sort the array by celebrity by specifying the value <code>ID</code> in the <code>SortBy</code> input parameter.</p> <p>The <code>CelebrityDetail</code> object includes the celebrity identifer and additional information urls. If you don't store the additional information urls, you can get them later by calling <a>GetCelebrityInfo</a> with the celebrity identifer.</p> <p>No information is returned for faces not recognized as celebrities.</p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetCelebrityDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetCelebrityRecognition</code>.</p>",
  operationId: 'GetCelebrityRecognition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetCelebrityRecognition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetCelebrityRecognition'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCelebrityRecognitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCelebrityRecognitionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetContentModerationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetContentModeration',
  description:
    '<p>Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video analysis started by <a>StartContentModeration</a>. For a list of moderation labels in Amazon Rekognition, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html#moderation-api">Using the image and video moderation APIs</a>.</p> <p>Amazon Rekognition Video inappropriate or offensive content detection in a stored video is an asynchronous operation. You start analysis by calling <a>StartContentModeration</a> which returns a job identifier (<code>JobId</code>). When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartContentModeration</code>. To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetContentModeration</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers Guide.</p> <p> <code>GetContentModeration</code> returns detected inappropriate, unwanted, or offensive content moderation labels, and the time they are detected, in an array, <code>ModerationLabels</code>, of <a>ContentModerationDetection</a> objects. </p> <p>By default, the moderated labels are returned sorted by time, in milliseconds from the start of the video. You can also sort them by moderated label by specifying <code>NAME</code> for the <code>SortBy</code> input parameter. </p> <p>Since video analysis can return a large number of results, use the <code>MaxResults</code> parameter to limit the number of labels returned in a single call to <code>GetContentModeration</code>. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetContentModeration</code> and populate the <code>NextToken</code> request parameter with the value of <code>NextToken</code> returned from the previous call to <code>GetContentModeration</code>.</p> <p>For more information, see moderating content in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'GetContentModeration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetContentModeration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetContentModeration'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContentModerationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContentModerationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetFaceDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetFaceDetection',
  description:
    '<p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p> <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a> which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p> <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetFaceDetection</code>.</p> <p>Note that for the <code>GetFaceDetection</code> operation, the returned values for <code>FaceOccluded</code> and <code>EyeDirection</code> will always be "null".</p>',
  operationId: 'GetFaceDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetFaceDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetFaceDetection'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFaceDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFaceDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults',
  description:
    '<p>Retrieves the results of a specific Face Liveness session. It requires the <code>sessionId</code> as input, which was created using <code>CreateFaceLivenessSession</code>. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. </p> <p>The number of audit images returned by <code>GetFaceLivenessSessionResults</code> is defined by the <code>AuditImagesLimit</code> paramater when calling <code>CreateFaceLivenessSession</code>. Reference images are always returned when possible.</p>',
  operationId: 'GetFaceLivenessSessionResults',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetFaceLivenessSessionResults')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetFaceLivenessSessionResults'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFaceLivenessSessionResultsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFaceLivenessSessionResultsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'SessionNotFoundException',
      content: { 'application/json': { schema: SessionNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetFaceSearchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetFaceSearch',
  description:
    '<p>Gets the face search results for Amazon Rekognition Video face search started by <a>StartFaceSearch</a>. The search returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s) that faces are matched in the video.</p> <p>Face search in a video is an asynchronous operation. You start face search by calling to <a>StartFaceSearch</a> which returns a job identifier (<code>JobId</code>). When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceSearch</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetFaceSearch</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>.</p> <p>For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide.</p> <p>The search results are retured in an array, <code>Persons</code>, of <a>PersonMatch</a> objects. Each<code>PersonMatch</code> element contains details about the matching faces in the input collection, person information (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person was matched in the video.</p> <note> <p> <code>GetFaceSearch</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Persons</code> array is sorted by the time, in milliseconds from the start of the video, persons are matched. You can also sort by persons by specifying <code>INDEX</code> for the <code>SORTBY</code> input parameter.</p>',
  operationId: 'GetFaceSearch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetFaceSearch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetFaceSearch'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFaceSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFaceSearchResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetLabelDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetLabelDetection',
  description:
    "<p>Gets the label detection results of a Amazon Rekognition Video analysis started by <a>StartLabelDetection</a>. </p> <p>The label detection operation is started by a call to <a>StartLabelDetection</a> which returns a job identifier (<code>JobId</code>). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartlabelDetection</code>. </p> <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p> <code>GetLabelDetection</code> returns an array of detected labels (<code>Labels</code>) sorted by the time the labels were detected. You can also sort by the label name by specifying <code>NAME</code> for the <code>SortBy</code> input parameter. If there is no <code>NAME</code> specified, the default sort is by timestamp.</p> <p>You can select how results are aggregated by using the <code>AggregateBy</code> input parameter. The default aggregation method is <code>TIMESTAMPS</code>. You can also aggregate by <code>SEGMENTS</code>, which aggregates all instances of labels detected in a given segment. </p> <p>The returned Labels array may include the following attributes:</p> <ul> <li> <p>Name - The name of the detected label.</p> </li> <li> <p>Confidence - The level of confidence in the label assigned to a detected object. </p> </li> <li> <p>Parents - The ancestor labels for a detected label. GetLabelDetection returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. </p> </li> <li> <p> Aliases - Possible Aliases for the label. </p> </li> <li> <p>Categories - The label categories that the detected label belongs to.</p> </li> <li> <p>BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box.</p> </li> <li> <p>Timestamp - Time, in milliseconds from the start of the video, that the label was detected. For aggregation by <code>SEGMENTS</code>, the <code>StartTimestampMillis</code>, <code>EndTimestampMillis</code>, and <code>DurationMillis</code> structures are what define a segment. Although the “Timestamp” structure is still returned with each label, its value is set to be the same as <code>StartTimestampMillis</code>.</p> </li> </ul> <p>Timestamp and Bounding box information are returned for detected Instances, only if aggregation is done by <code>TIMESTAMPS</code>. If aggregating by <code>SEGMENTS</code>, information about detected instances isn’t returned. </p> <p>The version of the label model used for the detection is also returned.</p> <p> <b>Note <code>DominantColors</code> isn't returned for <code>Instances</code>, although it is shown as part of the response in the sample seen below.</b> </p> <p>Use <code>MaxResults</code> parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetlabelDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetLabelDetection</code>.</p>",
  operationId: 'GetLabelDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetLabelDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetLabelDetection'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLabelDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLabelDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetPersonTrackingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetPersonTracking',
  description:
    "<p>Gets the path tracking results of a Amazon Rekognition Video analysis started by <a>StartPersonTracking</a>.</p> <p>The person path tracking operation is started by a call to <code>StartPersonTracking</code> which returns a job identifier (<code>JobId</code>). When the operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartPersonTracking</code>.</p> <p>To get the results of the person path tracking operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetPersonTracking</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p> <p> <code>GetPersonTracking</code> returns an array, <code>Persons</code>, of tracked persons and the time(s) their paths were tracked in the video. </p> <note> <p> <code>GetPersonTracking</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. </p> <p>For more information, see FaceDetail in the Amazon Rekognition Developer Guide.</p> </note> <p>By default, the array is sorted by the time(s) a person's path is tracked in the video. You can sort by tracked persons by specifying <code>INDEX</code> for the <code>SortBy</code> input parameter.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of items returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetPersonTracking</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetPersonTracking</code>.</p>",
  operationId: 'GetPersonTracking',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetPersonTracking')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetPersonTracking'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPersonTrackingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPersonTrackingResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetSegmentDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetSegmentDetection',
  description:
    '<p>Gets the segment detection results of a Amazon Rekognition Video analysis started by <a>StartSegmentDetection</a>.</p> <p>Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by calling <a>StartSegmentDetection</a> which returns a job identifier (<code>JobId</code>). When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartSegmentDetection</code>. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <code>GetSegmentDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call of <code>StartSegmentDetection</code>.</p> <p> <code>GetSegmentDetection</code> returns detected segments in an array (<code>Segments</code>) of <a>SegmentDetection</a> objects. <code>Segments</code> is sorted by the segment types specified in the <code>SegmentTypes</code> input parameter of <code>StartSegmentDetection</code>. Each element of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment, the type of the segment, and the frame in which the segment was detected.</p> <p>Use <code>SelectedSegmentTypes</code> to find out the type of segment detection requested in the call to <code>StartSegmentDetection</code>.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of segment detections returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetSegmentDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetSegmentDetection</code>.</p> <p>For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'GetSegmentDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetSegmentDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetSegmentDetection'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSegmentDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSegmentDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceGetTextDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.GetTextDetection',
  description:
    '<p>Gets the text detection results of a Amazon Rekognition Video analysis started by <a>StartTextDetection</a>.</p> <p>Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling <a>StartTextDetection</a> which returns a job identifier (<code>JobId</code>) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartTextDetection</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <code>GetTextDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call of <code>StartLabelDetection</code>.</p> <p> <code>GetTextDetection</code> returns an array of detected text (<code>TextDetections</code>) sorted by the time the text was detected, up to 100 words per frame of video.</p> <p>Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines.</p> <p>Use MaxResults parameter to limit the number of text detections returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetTextDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetTextDetection</code>.</p>',
  operationId: 'GetTextDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.GetTextDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.GetTextDetection'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTextDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTextDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceIndexFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.IndexFaces',
  description:
    "<p>Detects faces in the input image and adds them to the specified collection. </p> <p>Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the <a>SearchFaces</a> and <a>SearchFacesByImage</a> operations.</p> <p>For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide.</p> <p>To get the number of faces in a collection, call <a>DescribeCollection</a>. </p> <p>If you're using version 1.0 of the face detection model, <code>IndexFaces</code> indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. </p> <p>If you're using version 4 or later of the face model, image orientation information is not returned in the <code>OrientationCorrection</code> field. </p> <p>To determine which version of the model you're using, call <a>DescribeCollection</a> and supply the collection ID. You can also get the model version from the value of <code>FaceModelVersion</code> in the response from <code>IndexFaces</code> </p> <p>For more information, see Model Versioning in the Amazon Rekognition Developer Guide.</p> <p>If you provide the optional <code>ExternalImageId</code> for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the <a>ListFaces</a> operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.</p> <p>You can specify the maximum number of faces to index with the <code>MaxFaces</code> input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, <code>IndexFaces</code> chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use <code>QualityFilter</code>, to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. </p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>Information about faces detected in an image, but not indexed, is returned in an array of <a>UnindexedFace</a> objects, <code>UnindexedFaces</code>. Faces aren't indexed for reasons such as:</p> <ul> <li> <p>The number of faces detected exceeds the value of the <code>MaxFaces</code> request parameter.</p> </li> <li> <p>The face is too small compared to the image dimensions.</p> </li> <li> <p>The face is too blurry.</p> </li> <li> <p>The image is too dark.</p> </li> <li> <p>The face has an extreme pose.</p> </li> <li> <p>The face doesn’t have enough detail to be suitable for face search.</p> </li> </ul> <p>In response, the <code>IndexFaces</code> operation returns an array of metadata for all detected faces, <code>FaceRecords</code>. This includes: </p> <ul> <li> <p>The bounding box, <code>BoundingBox</code>, of the detected face. </p> </li> <li> <p>A confidence value, <code>Confidence</code>, which indicates the confidence that the bounding box contains a face.</p> </li> <li> <p>A face ID, <code>FaceId</code>, assigned by the service for each face that's detected and stored.</p> </li> <li> <p>An image ID, <code>ImageId</code>, assigned by the service for the input image.</p> </li> </ul> <p>If you request <code>ALL</code> or specific facial attributes (e.g., <code>FACE_OCCLUDED</code>) by using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth), facial occlusion, and other facial attributes.</p> <p>If you provide the same image, specify the same collection, and use the same external ID in the <code>IndexFaces</code> operation, Amazon Rekognition doesn't save duplicate face metadata.</p> <p/> <p>The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>This operation requires permissions to perform the <code>rekognition:IndexFaces</code> action.</p>",
  operationId: 'IndexFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.IndexFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.IndexFaces'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexFacesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IndexFacesResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
    489: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListCollectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListCollections',
  description:
    '<p>Returns list of collection IDs in your account. If the result is truncated, the response also provides a <code>NextToken</code> that you can use in the subsequent request to fetch the next set of collection IDs.</p> <p>For an example, see Listing collections in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListCollections</code> action.</p>',
  operationId: 'ListCollections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListCollections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListCollections'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListCollectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCollectionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListDatasetEntriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListDatasetEntries',
  description:
    '<p> Lists the entries (images) within a dataset. An entry is a JSON Line that contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-manifest-files.html">Creating a manifest file</a>.</p> <p>JSON Lines in the response include information about non-terminal errors found in the dataset. Non terminal errors are reported in <code>errors</code> lists within each JSON Line. The same information is reported in the training and testing validation result manifests that Amazon Rekognition Custom Labels creates during model training. </p> <p>You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date. </p> <p>This operation requires permissions to perform the <code>rekognition:ListDatasetEntries</code> action.</p>',
  operationId: 'ListDatasetEntries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListDatasetEntries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListDatasetEntries'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDatasetEntriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetEntriesResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    488: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListDatasetLabelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListDatasetLabels',
  description:
    '<p>Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-labeling-images.html">Labeling images</a>. </p> <p> Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p>',
  operationId: 'ListDatasetLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListDatasetLabels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListDatasetLabels'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDatasetLabelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDatasetLabelsResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    486: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'ResourceNotReadyException',
      content: { 'application/json': { schema: ResourceNotReadyExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListFaces',
  description:
    '<p>Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListFaces</code> action.</p>',
  operationId: 'ListFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListFaces'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListFacesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFacesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListProjectPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListProjectPolicies',
  description:
    '<p>Gets a list of the project policies attached to a project.</p> <p>To attach a project policy to a project, call <a>PutProjectPolicy</a>. To remove a project policy from a project, call <a>DeleteProjectPolicy</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:ListProjectPolicies</code> action.</p>',
  operationId: 'ListProjectPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListProjectPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListProjectPolicies'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListProjectPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectPoliciesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    486: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListStreamProcessorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListStreamProcessors',
  description:
    'Gets a list of stream processors that you have created with <a>CreateStreamProcessor</a>. ',
  operationId: 'ListStreamProcessors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListStreamProcessors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListStreamProcessors'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListStreamProcessorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStreamProcessorsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListTagsForResource',
  description:
    '<p> Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. </p> <p>This operation requires permissions to perform the <code>rekognition:ListTagsForResource</code> action. </p>',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceListUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.ListUsers',
  description:
    'Returns metadata of the User such as <code>UserID</code> in the specified collection. Anonymous User (to reserve faces without any identity) is not returned as part of this request. The results are sorted by system generated primary key ID. If the response is truncated, <code>NextToken</code> is returned in the response that can be used in the subsequent request to retrieve the next set of identities.',
  operationId: 'ListUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.ListUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.ListUsers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidPaginationTokenException',
      content: { 'application/json': { schema: InvalidPaginationTokenExceptionSchema } },
    },
    483: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServicePutProjectPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.PutProjectPolicy',
  description:
    '<p>Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the <a>CopyProjectVersion</a> operation.</p> <p>For more information about the format of a project policy document, see Attaching a project policy (SDK) in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <p>The response from <code>PutProjectPolicy</code> is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy.</p> <p>To remove a project policy from a project, call <a>DeleteProjectPolicy</a>. To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. </p> <p>You copy a model version by calling <a>CopyProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:PutProjectPolicy</code> action.</p>',
  operationId: 'PutProjectPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.PutProjectPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.PutProjectPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutProjectPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutProjectPolicyResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidPolicyRevisionIdException',
      content: { 'application/json': { schema: InvalidPolicyRevisionIdExceptionSchema } },
    },
    484: {
      description: 'MalformedPolicyDocumentException',
      content: { 'application/json': { schema: MalformedPolicyDocumentExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    487: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    488: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    489: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    490: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceRecognizeCelebritiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.RecognizeCelebrities',
  description:
    "<p>Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. </p> <p> <code>RecognizeCelebrities</code> returns the 64 largest faces in the image. It lists the recognized celebrities in the <code>CelebrityFaces</code> array and any unrecognized faces in the <code>UnrecognizedFaces</code> array. <code>RecognizeCelebrities</code> doesn't return celebrities whose faces aren't among the largest 64 faces in the image.</p> <p>For each celebrity recognized, <code>RecognizeCelebrities</code> returns a <code>Celebrity</code> object. The <code>Celebrity</code> object contains the celebrity name, ID, URL links to additional information, match confidence, and a <code>ComparedFace</code> object that you can use to locate the celebrity's face on the image.</p> <p>Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the <code>Celebrity</code> ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by <code>RecognizeCelebrities</code>, you will need the ID to identify the celebrity in a call to the <a>GetCelebrityInfo</a> operation.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p>For an example, see Recognizing celebrities in an image in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:RecognizeCelebrities</code> operation.</p>",
  operationId: 'RecognizeCelebrities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.RecognizeCelebrities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.RecognizeCelebrities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecognizeCelebritiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RecognizeCelebritiesResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
    483: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceSearchFacesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.SearchFaces',
  description:
    '<p>For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>You can also search faces without indexing faces by using the <code>SearchFacesByImage</code> operation.</p> </note> <p> The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a <code>confidence</code> value for each face match, indicating the confidence that the specific face matches the input face. </p> <p>For an example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code> action.</p>',
  operationId: 'SearchFaces',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.SearchFaces')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.SearchFaces'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchFacesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchFacesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceSearchFacesByImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.SearchFacesByImage',
  description:
    '<p>For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>To search for all faces in an input image, you might first call the <a>IndexFaces</a> operation, and then use the face IDs returned in subsequent calls to the <a>SearchFaces</a> operation. </p> <p> You can also call the <code>DetectFaces</code> operation and use the bounding boxes in the response to make face crops, which then you can pass in to the <code>SearchFacesByImage</code> operation. </p> </note> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a <code>similarity</code> indicating how similar the face is to the input face. In the response, the operation also returns the bounding box (and a confidence level that the bounding box contains a face) of the face that Amazon Rekognition used for the input image. </p> <p>If no faces are detected in the input image, <code>SearchFacesByImage</code> returns an <code>InvalidParameterException</code> error. </p> <p>For an example, Searching for a Face Using an Image in the Amazon Rekognition Developer Guide.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar for filtering by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>.</p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>This operation requires permissions to perform the <code>rekognition:SearchFacesByImage</code> action.</p>',
  operationId: 'SearchFacesByImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.SearchFacesByImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.SearchFacesByImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchFacesByImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchFacesByImageResponseSchema } },
    },
    480: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceSearchUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.SearchUsers',
  description:
    'Searches for UserIDs within a collection based on a <code>FaceId</code> or <code>UserId</code>. This API can be used to find the closest UserID (with a highest similarity) to associate a face. The request must be provided with either <code>FaceId</code> or <code>UserId</code>. The operation returns an array of UserID that match the <code>FaceId</code> or <code>UserId</code>, ordered by similarity score with the highest similarity first. ',
  operationId: 'SearchUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.SearchUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.SearchUsers'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchUsersResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceSearchUsersByImageRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.SearchUsersByImage',
  description:
    '<p>Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then searches a specified collection for matching UserIDs. </p> <p>The operation returns an array of UserIDs that match the face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a bounding box for the face found in the input image. </p> <p>Information about faces detected in the supplied image, but not used for the search, is returned in an array of <code>UnsearchedFace</code> objects. If no valid face is detected in the image, the response will contain an empty <code>UserMatches</code> list and no <code>SearchedFace</code> object. </p>',
  operationId: 'SearchUsersByImage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.SearchUsersByImage')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.SearchUsersByImage'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchUsersByImageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchUsersByImageResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidImageFormatException',
      content: { 'application/json': { schema: InvalidImageFormatExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'ImageTooLargeException',
      content: { 'application/json': { schema: ImageTooLargeExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartCelebrityRecognitionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartCelebrityRecognition',
  description:
    '<p>Starts asynchronous recognition of celebrities in a stored video.</p> <p>Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartCelebrityRecognition</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetCelebrityRecognition</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityRecognition</code>. </p> <p>For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'StartCelebrityRecognition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartCelebrityRecognition')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartCelebrityRecognition'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartCelebrityRecognitionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartCelebrityRecognitionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartContentModerationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartContentModeration',
  description:
    '<p> Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list of moderation labels in Amazon Rekognition, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html#moderation-api">Using the image and video moderation APIs</a>.</p> <p>Amazon Rekognition Video can moderate content in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartContentModeration</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetContentModeration</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Moderating content in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'StartContentModeration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartContentModeration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartContentModeration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartContentModerationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartContentModerationResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartFaceDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartFaceDetection',
  description:
    '<p>Starts asynchronous detection of faces in a stored video.</p> <p>Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p>For more information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'StartFaceDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartFaceDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartFaceDetection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFaceDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFaceDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartFaceSearchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartFaceSearch',
  description:
    '<p>Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceSearch</code> returns a job identifier (<code>JobId</code>) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceSearch</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/procedure-person-search-videos.html">Searching stored videos for faces</a>. </p>',
  operationId: 'StartFaceSearch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartFaceSearch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartFaceSearch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartFaceSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFaceSearchResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartLabelDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartLabelDetection',
  description:
    '<p>Starts asynchronous detection of labels in a stored video.</p> <p>Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like a person getting out of a car or a person skiing.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartLabelDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p> <i>Optional Parameters</i> </p> <p> <code>StartLabelDetection</code> has the <code>GENERAL_LABELS</code> Feature applied by default. This feature allows you to provide filtering criteria to the <code>Settings</code> parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive filters. For more information on filtering, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels-detecting-labels-video.html">Detecting labels in a video</a>.</p> <p>You can specify <code>MinConfidence</code> to control the confidence threshold for the labels returned. The default is 50.</p>',
  operationId: 'StartLabelDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartLabelDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartLabelDetection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartLabelDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartLabelDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartPersonTrackingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartPersonTracking',
  description:
    "<p>Starts the asynchronous tracking of a person's path in a stored video.</p> <p>Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartPersonTracking</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. </p> <p>To get the results of the person detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetPersonTracking</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>",
  operationId: 'StartPersonTracking',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartPersonTracking')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartPersonTracking'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartPersonTrackingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartPersonTrackingResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartProjectVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartProjectVersion',
  description:
    '<p>Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectCustomLabels</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopProjectVersion</a>.</p> </note> <p>For more information, see <i>Running a trained Amazon Rekognition Custom Labels model</i> in the Amazon Rekognition Custom Labels Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:StartProjectVersion</code> action.</p>',
  operationId: 'StartProjectVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartProjectVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartProjectVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartProjectVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartProjectVersionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartSegmentDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartSegmentDetection',
  description:
    '<p>Starts asynchronous detection of segment detection in a stored video.</p> <p>Amazon Rekognition Video can detect segments in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartSegmentDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>You can use the <code>Filters</code> (<a>StartSegmentDetectionFilters</a>) input parameter to specify the minimum detection confidence returned in the response. Within <code>Filters</code>, use <code>ShotFilter</code> (<a>StartShotDetectionFilter</a>) to filter detected shots. Use <code>TechnicalCueFilter</code> (<a>StartTechnicalCueDetectionFilter</a>) to filter technical cues. </p> <p>To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <a>GetSegmentDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartSegmentDetection</code>. </p> <p>For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</p>',
  operationId: 'StartSegmentDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartSegmentDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartSegmentDetection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSegmentDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSegmentDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartStreamProcessorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartStreamProcessor',
  description:
    '<p>Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>. To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to <code>CreateStreamProcessor</code>.</p> <p>If you are using a label detection stream processor to detect labels, you need to provide a <code>Start selector</code> and a <code>Stop selector</code> to determine the length of the stream processing time.</p>',
  operationId: 'StartStreamProcessor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartStreamProcessor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartStreamProcessor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartStreamProcessorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartStreamProcessorResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStartTextDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StartTextDetection',
  description:
    '<p>Starts asynchronous detection of text in a stored video.</p> <p>Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <a>GetTextDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartTextDetection</code>. </p>',
  operationId: 'StartTextDetection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StartTextDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StartTextDetection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartTextDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartTextDetectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'VideoTooLargeException',
      content: { 'application/json': { schema: VideoTooLargeExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    488: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStopProjectVersionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StopProjectVersion',
  description:
    '<p>Stops a running model. The operation might take a while to complete. To check the current status, call <a>DescribeProjectVersions</a>. </p> <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>',
  operationId: 'StopProjectVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StopProjectVersion')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StopProjectVersion'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopProjectVersionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopProjectVersionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceStopStreamProcessorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.StopStreamProcessor',
  description: 'Stops a running stream processor that was created by <a>CreateStreamProcessor</a>.',
  operationId: 'StopStreamProcessor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.StopStreamProcessor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.StopStreamProcessor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopStreamProcessorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopStreamProcessorResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.TagResource',
  description:
    '<p> Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a>. </p> <p>This operation requires permissions to perform the <code>rekognition:TagResource</code> action. </p>',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.UntagResource',
  description:
    '<p> Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model. </p> <p>This operation requires permissions to perform the <code>rekognition:UntagResource</code> action. </p>',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceUpdateDatasetEntriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.UpdateDatasetEntries',
  description:
    "<p>Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <p>If the <code>source-ref</code> field in the JSON line references an existing image, the existing image in the dataset is updated. If <code>source-ref</code> field doesn't reference an existing image, the image is added as a new image to the dataset. </p> <p>You specify the changes that you want to make in the <code>Changes</code> input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of <code>Changes</code> must be less than 5MB.</p> <p> <code>UpdateDatasetEntries</code> returns immediatly, but the dataset update might take a while to complete. Use <a>DescribeDataset</a> to check the current status. The dataset updated successfully if the value of <code>Status</code> is <code>UPDATE_COMPLETE</code>. </p> <p>To check if any non-terminal errors occured, call <a>ListDatasetEntries</a> and check for the presence of <code>errors</code> lists in the JSON Lines.</p> <p>Dataset update fails if a terminal error occurs (<code>Status</code> = <code>UPDATE_FAILED</code>). Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK. </p> <p>This operation requires permissions to perform the <code>rekognition:UpdateDatasetEntries</code> action.</p>",
  operationId: 'UpdateDatasetEntries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.UpdateDatasetEntries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.UpdateDatasetEntries'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDatasetEntriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDatasetEntriesResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetRekognitionServiceUpdateStreamProcessorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=RekognitionService.UpdateStreamProcessor',
  description:
    ' Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters. ',
  operationId: 'UpdateStreamProcessor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('RekognitionService.UpdateStreamProcessor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['RekognitionService.UpdateStreamProcessor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateStreamProcessorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateStreamProcessorResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    486: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})
