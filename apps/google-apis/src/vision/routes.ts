import { createRoute, z } from '@hono/zod-openapi'

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the input will be read from.',
    required: [],
  })
  .openapi('GcsSource')

const InputConfigSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.',
      }),
    gcsSource: GcsSourceSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to read the input from.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('InputConfig')

const ImageAnnotationContextSchema = z
  .object({
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the file used to produce the image.' }),
  })
  .openapi({
    description:
      'If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.',
    required: [],
  })
  .openapi('ImageAnnotationContext')

const NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('NormalizedVertex')

const VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('Vertex')

const BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('BoundingPoly')

const CropHintSchema = z
  .object({
    boundingPoly: BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of this being a salient region. Range [0, 1].' }),
    importanceFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Fraction of importance of this salient region with respect to the original image.',
      }),
  })
  .openapi({
    description: 'Single crop hint that is used to generate a new crop when serving an image.',
    required: [],
  })
  .openapi('CropHint')

const CropHintsAnnotationSchema = z
  .object({
    cropHints: z
      .array(CropHintSchema)
      .exactOptional()
      .openapi({ description: 'Crop hint results.' }),
  })
  .openapi({
    description: 'Set of crop hints that are used to generate new crops when serving images.',
    required: [],
  })
  .openapi('CropHintsAnnotation')

const PositionSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
    z: z.float32().exactOptional().openapi({ description: 'Z coordinate (or depth).' }),
  })
  .openapi({
    description:
      'A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('Position')

const LandmarkSchema = z
  .object({
    position: PositionSchema.exactOptional().openapi({ description: 'Face landmark position.' }),
    type: z
      .enum([
        'UNKNOWN_LANDMARK',
        'LEFT_EYE',
        'RIGHT_EYE',
        'LEFT_OF_LEFT_EYEBROW',
        'RIGHT_OF_LEFT_EYEBROW',
        'LEFT_OF_RIGHT_EYEBROW',
        'RIGHT_OF_RIGHT_EYEBROW',
        'MIDPOINT_BETWEEN_EYES',
        'NOSE_TIP',
        'UPPER_LIP',
        'LOWER_LIP',
        'MOUTH_LEFT',
        'MOUTH_RIGHT',
        'MOUTH_CENTER',
        'NOSE_BOTTOM_RIGHT',
        'NOSE_BOTTOM_LEFT',
        'NOSE_BOTTOM_CENTER',
        'LEFT_EYE_TOP_BOUNDARY',
        'LEFT_EYE_RIGHT_CORNER',
        'LEFT_EYE_BOTTOM_BOUNDARY',
        'LEFT_EYE_LEFT_CORNER',
        'RIGHT_EYE_TOP_BOUNDARY',
        'RIGHT_EYE_RIGHT_CORNER',
        'RIGHT_EYE_BOTTOM_BOUNDARY',
        'RIGHT_EYE_LEFT_CORNER',
        'LEFT_EYEBROW_UPPER_MIDPOINT',
        'RIGHT_EYEBROW_UPPER_MIDPOINT',
        'LEFT_EAR_TRAGION',
        'RIGHT_EAR_TRAGION',
        'LEFT_EYE_PUPIL',
        'RIGHT_EYE_PUPIL',
        'FOREHEAD_GLABELLA',
        'CHIN_GNATHION',
        'CHIN_LEFT_GONION',
        'CHIN_RIGHT_GONION',
        'LEFT_CHEEK_CENTER',
        'RIGHT_CHEEK_CENTER',
      ])
      .exactOptional()
      .openapi({ description: 'Face landmark type.' }),
  })
  .openapi({ description: 'A face-specific landmark (for example, a face feature).', required: [] })
  .openapi('Landmark')

const FaceAnnotationSchema = z
  .object({
    angerLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Anger likelihood.' }),
    blurredLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Blurred likelihood.' }),
    boundingPoly: BoundingPolySchema.exactOptional().openapi({
      description:
        'The bounding polygon around the face. The coordinates of the bounding box are in the original image\'s scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.',
    }),
    detectionConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detection confidence. Range [0, 1].' }),
    fdBoundingPoly: BoundingPolySchema.exactOptional().openapi({
      description:
        'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.',
    }),
    headwearLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Headwear likelihood.' }),
    joyLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Joy likelihood.' }),
    landmarkingConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Face landmarking confidence. Range [0, 1].' }),
    landmarks: z
      .array(LandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Detected face landmarks.' }),
    panAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].',
      }),
    rollAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].',
      }),
    sorrowLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Sorrow likelihood.' }),
    surpriseLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Surprise likelihood.' }),
    tiltAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].",
      }),
    underExposedLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Under-exposed likelihood.' }),
  })
  .openapi({
    description: 'A face annotation object contains the results of face detection.',
    required: [],
  })
  .openapi('FaceAnnotation')

const DetectedBreakSchema = z
  .object({
    isPrefix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if break prepends the element.' }),
    type: z
      .enum(['UNKNOWN', 'SPACE', 'SURE_SPACE', 'EOL_SURE_SPACE', 'HYPHEN', 'LINE_BREAK'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected start or end of a structural component.', required: [] })
  .openapi('DetectedBreak')

const DetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range [0, 1].' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('DetectedLanguage')

const TextPropertySchema = z
  .object({
    detectedBreak: DetectedBreakSchema.exactOptional().openapi({
      description: 'Detected start or end of a text segment.',
    }),
    detectedLanguages: z
      .array(DetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
  })
  .openapi({
    description: 'Additional information detected on the structural component.',
    required: [],
  })
  .openapi('TextProperty')

const SymbolSchema = z
  .object({
    boundingBox: BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the symbol. Range [0, 1].' }),
    property: TextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the symbol.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual UTF-8 representation of the symbol.' }),
  })
  .openapi({ description: 'A single symbol representation.', required: [] })
  .openapi('Symbol')

const WordSchema = z
  .object({
    boundingBox: BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the word. Range [0, 1].' }),
    property: TextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the word.',
    }),
    symbols: z
      .array(SymbolSchema)
      .exactOptional()
      .openapi({
        description:
          'List of symbols in the word. The order of the symbols follows the natural reading order.',
      }),
  })
  .openapi({ description: 'A word representation.', required: [] })
  .openapi('Word')

const ParagraphSchema = z
  .object({
    boundingBox: BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the paragraph. Range [0, 1].' }),
    property: TextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the paragraph.',
    }),
    words: z
      .array(WordSchema)
      .exactOptional()
      .openapi({ description: 'List of all words in this paragraph.' }),
  })
  .openapi({
    description: 'Structural unit of text representing a number of words in certain order.',
    required: [],
  })
  .openapi('Paragraph')

const BlockSchema = z
  .object({
    blockType: z
      .enum(['UNKNOWN', 'TEXT', 'TABLE', 'PICTURE', 'RULER', 'BARCODE'])
      .exactOptional()
      .openapi({ description: 'Detected block type (text, image etc) for this block.' }),
    boundingBox: BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the block. Range [0, 1].' }),
    paragraphs: z
      .array(ParagraphSchema)
      .exactOptional()
      .openapi({
        description: 'List of paragraphs in this block (if this blocks is of type text).',
      }),
    property: TextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the block.',
    }),
  })
  .openapi({ description: 'Logical element on the page.', required: [] })
  .openapi('Block')

const PageSchema = z
  .object({
    blocks: z
      .array(BlockSchema)
      .exactOptional()
      .openapi({ description: 'List of blocks of text, images etc on this page.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the page. Range [0, 1].' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
    property: TextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected on the page.',
    }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
  })
  .openapi({ description: 'Detected page from OCR.', required: [] })
  .openapi('Page')

const TextAnnotationSchema = z
  .object({
    pages: z
      .array(PageSchema)
      .exactOptional()
      .openapi({ description: 'List of pages detected by OCR.' }),
    text: z.string().exactOptional().openapi({ description: 'UTF-8 text detected on the pages.' }),
  })
  .openapi({
    description:
      'TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.',
    required: [],
  })
  .openapi('TextAnnotation')

const ColorSchema = z
  .object({
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).',
      }),
    blue: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of blue in the color as a value in the interval [0, 1].',
      }),
    green: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of green in the color as a value in the interval [0, 1].',
      }),
    red: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of red in the color as a value in the interval [0, 1].',
      }),
  })
  .openapi({
    description:
      "Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...",
    required: [],
  })
  .openapi('Color')

const ColorInfoSchema = z
  .object({
    color: ColorSchema.exactOptional().openapi({ description: 'RGB components of the color.' }),
    pixelFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of pixels the color occupies in the image. Value in range [0, 1].',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Image-specific score for this color. Value in range [0, 1].' }),
  })
  .openapi({
    description:
      'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
    required: [],
  })
  .openapi('ColorInfo')

const DominantColorsAnnotationSchema = z
  .object({
    colors: z
      .array(ColorInfoSchema)
      .exactOptional()
      .openapi({ description: 'RGB color values with their score and pixel fraction.' }),
  })
  .openapi({ description: 'Set of dominant colors and their corresponding scores.', required: [] })
  .openapi('DominantColorsAnnotation')

const ImagePropertiesSchema = z
  .object({
    dominantColors: DominantColorsAnnotationSchema.exactOptional().openapi({
      description: 'If present, dominant colors completed successfully.',
    }),
  })
  .openapi({ description: 'Stores image properties, such as dominant colors.', required: [] })
  .openapi('ImageProperties')

const LatLngSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
      }),
  })
  .openapi({
    description:
      'An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.',
    required: [],
  })
  .openapi('LatLng')

const LocationInfoSchema = z
  .object({
    latLng: LatLngSchema.exactOptional().openapi({ description: 'lat/long location coordinates.' }),
  })
  .openapi({ description: 'Detected entity location information.', required: [] })
  .openapi('LocationInfo')

const PropertySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the property.' }),
    uint64Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of numeric properties.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the property.' }),
  })
  .openapi({
    description: 'A `Property` consists of a user-supplied name/value pair.',
    required: [],
  })
  .openapi('Property')

const EntityAnnotationSchema = z
  .object({
    boundingPoly: BoundingPolySchema.exactOptional().openapi({
      description:
        'Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity textual description, expressed in its `locale` language.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code for the locale in which the entity textual `description` is expressed.',
      }),
    locations: z
      .array(LocationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    properties: z
      .array(PropertySchema)
      .exactOptional()
      .openapi({
        description:
          'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Overall score of the result. Range [0, 1].' }),
    topicality: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].',
      }),
  })
  .openapi({ description: 'Set of detected entity features.', required: [] })
  .openapi('EntityAnnotation')

const LocalizedObjectAnnotationSchema = z
  .object({
    boundingPoly: BoundingPolySchema.exactOptional().openapi({
      description: 'Image region to which this object belongs. This must be populated.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Set of detected objects with bounding boxes.', required: [] })
  .openapi('LocalizedObjectAnnotation')

const ObjectAnnotationSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Prediction for what the object in the bounding box is.', required: [] })
  .openapi('ObjectAnnotation')

const KeyValueSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
  })
  .openapi({ description: 'A product label represented as a key-value pair.', required: [] })
  .openapi('KeyValue')

const ProductSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided metadata to be stored with this product. Must be at most 4096 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.',
      }),
    productCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.',
      }),
    productLabels: z
      .array(KeyValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.',
      }),
  })
  .openapi({ description: 'A Product contains ReferenceImages.', required: [] })
  .openapi('Product')

const ResultSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the image from the product that is the closest match to the query.',
      }),
    product: ProductSchema.exactOptional().openapi({ description: 'The Product.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
      }),
  })
  .openapi({ description: 'Information about a product.', required: [] })
  .openapi('Result')

const GroupedResultSchema = z
  .object({
    boundingPoly: BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon around the product detected in the query image.',
    }),
    objectAnnotations: z
      .array(ObjectAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'List of generic predictions for the object in the bounding box.' }),
    results: z
      .array(ResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({
    description: 'Information about the products similar to a single product in a query image.',
    required: [],
  })
  .openapi('GroupedResult')

const ProductSearchResultsSchema = z
  .object({
    indexTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.',
      }),
    productGroupedResults: z
      .array(GroupedResultSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.',
      }),
    results: z
      .array(ResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({ description: 'Results for a product search request.', required: [] })
  .openapi('ProductSearchResults')

const SafeSearchAnnotationSchema = z
  .object({
    adult: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.',
      }),
    medical: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Likelihood that this is a medical image.' }),
    racy: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.',
      }),
    spoof: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          "Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
      }),
    violence: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.',
      }),
  })
  .openapi({
    description:
      'Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).',
    required: [],
  })
  .openapi('SafeSearchAnnotation')

const WebLabelSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'Label for extra metadata.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Label to provide extra metadata for the web detection.', required: [] })
  .openapi('WebLabel')

const WebImageSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the image.' }),
    url: z.string().exactOptional().openapi({ description: 'The result image URL.' }),
  })
  .openapi({ description: 'Metadata for online images.', required: [] })
  .openapi('WebImage')

const WebPageSchema = z
  .object({
    fullMatchingImages: z
      .array(WebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images on the page. Can include resized copies of the query image.',
      }),
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the web page, may contain HTML markups.' }),
    partialMatchingImages: z
      .array(WebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the web page.' }),
    url: z.string().exactOptional().openapi({ description: 'The result web page URL.' }),
  })
  .openapi({ description: 'Metadata for web pages.', required: [] })
  .openapi('WebPage')

const WebEntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Canonical description of the entity, in English.' }),
    entityId: z.string().exactOptional().openapi({ description: 'Opaque entity ID.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Overall relevancy score for the entity. Not normalized and not comparable across different image queries.',
      }),
  })
  .openapi({ description: 'Entity deduced from similar images on the Internet.', required: [] })
  .openapi('WebEntity')

const WebDetectionSchema = z
  .object({
    bestGuessLabels: z
      .array(WebLabelSchema)
      .exactOptional()
      .openapi({
        description:
          "The service's best guess as to the topic of the request image. Inferred from similar images on the open web.",
      }),
    fullMatchingImages: z
      .array(WebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images from the Internet. Can include resized copies of the query image.',
      }),
    pagesWithMatchingImages: z
      .array(WebPageSchema)
      .exactOptional()
      .openapi({ description: 'Web pages containing the matching images from the Internet.' }),
    partialMatchingImages: z
      .array(WebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    visuallySimilarImages: z
      .array(WebImageSchema)
      .exactOptional()
      .openapi({ description: 'The visually similar image results.' }),
    webEntities: z
      .array(WebEntitySchema)
      .exactOptional()
      .openapi({ description: 'Deduced entities from similar images on the Internet.' }),
  })
  .openapi({ description: 'Relevant information for the image from the Internet.', required: [] })
  .openapi('WebDetection')

const AnnotateImageResponseSchema = z
  .object({
    context: ImageAnnotationContextSchema.exactOptional().openapi({
      description:
        'If present, contextual information is needed to understand where this image comes from.',
    }),
    cropHintsAnnotation: CropHintsAnnotationSchema.exactOptional().openapi({
      description: 'If present, crop hints have completed successfully.',
    }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.',
    }),
    faceAnnotations: z
      .array(FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, face detection has completed successfully.' }),
    fullTextAnnotation: TextAnnotationSchema.exactOptional().openapi({
      description:
        'If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.',
    }),
    imagePropertiesAnnotation: ImagePropertiesSchema.exactOptional().openapi({
      description: 'If present, image properties were extracted successfully.',
    }),
    labelAnnotations: z
      .array(EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, label detection has completed successfully.' }),
    landmarkAnnotations: z
      .array(EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, landmark detection has completed successfully.' }),
    localizedObjectAnnotations: z
      .array(LocalizedObjectAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'If present, localized object detection has completed successfully. This will be sorted descending by confidence score.',
      }),
    logoAnnotations: z
      .array(EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, logo detection has completed successfully.' }),
    productSearchResults: ProductSearchResultsSchema.exactOptional().openapi({
      description: 'If present, product search has completed successfully.',
    }),
    safeSearchAnnotation: SafeSearchAnnotationSchema.exactOptional().openapi({
      description: 'If present, safe-search annotation has completed successfully.',
    }),
    textAnnotations: z
      .array(EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, text (OCR) detection has completed successfully.' }),
    webDetection: WebDetectionSchema.exactOptional().openapi({
      description: 'If present, web detection has completed successfully.',
    }),
  })
  .openapi({ description: 'Response to an image annotation request.', required: [] })
  .openapi('AnnotateImageResponse')

const AnnotateFileResponseSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the failed request. The `responses` field will not be set in this case.',
    }),
    inputConfig: InputConfigSchema.exactOptional().openapi({
      description: 'Information about the file for which this response is generated.',
    }),
    responses: z
      .array(AnnotateImageResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual responses to images found within the file. This field will be empty if the `error` field is set.',
      }),
    totalPages: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This field gives the total number of pages in the file.' }),
  })
  .openapi({
    description:
      'Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.',
    required: [],
  })
  .openapi('AnnotateFileResponse')

const GcsDestinationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the output will be written to.',
    required: [],
  })
  .openapi('GcsDestination')

const OutputConfigSchema = z
  .object({
    batchSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.',
      }),
    gcsDestination: GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output(s) to.',
    }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('OutputConfig')

const AsyncAnnotateFileResponseSchema = z
  .object({
    outputConfig: OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncAnnotateFileRequest.',
    }),
  })
  .openapi({
    description: 'The response for a single offline file annotation request.',
    required: [],
  })
  .openapi('AsyncAnnotateFileResponse')

const AsyncBatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(AsyncAnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'Response to an async batch file annotation request.', required: [] })
  .openapi('AsyncBatchAnnotateFilesResponse')

const AsyncBatchAnnotateImagesResponseSchema = z
  .object({
    outputConfig: OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncBatchAnnotateImagesRequest.',
    }),
  })
  .openapi({ description: 'Response to an async batch image annotation request.', required: [] })
  .openapi('AsyncBatchAnnotateImagesResponse')

const BatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(AnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'A list of file annotation responses.', required: [] })
  .openapi('BatchAnnotateFilesResponse')

const BatchOperationMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the batch request is finished and google.longrunning.Operation.done is set to true.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROCESSING', 'SUCCESSFUL', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The current state of the batch operation.' }),
    submitTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was submitted to the server.' }),
  })
  .openapi({
    description:
      'Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('BatchOperationMetadata')

const GoogleCloudVisionV1p1beta1FeatureSchema = z
  .object({
    maxResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/weekly" for the bleeding edge release updated weekly.',
      }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'FACE_DETECTION',
        'LANDMARK_DETECTION',
        'LOGO_DETECTION',
        'LABEL_DETECTION',
        'TEXT_DETECTION',
        'DOCUMENT_TEXT_DETECTION',
        'SAFE_SEARCH_DETECTION',
        'IMAGE_PROPERTIES',
        'CROP_HINTS',
        'WEB_DETECTION',
        'PRODUCT_SEARCH',
        'OBJECT_LOCALIZATION',
      ])
      .exactOptional()
      .openapi({ description: 'The feature type.' }),
  })
  .openapi({
    description:
      'The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1Feature')

const GoogleCloudVisionV1p1beta1CropHintsParamsSchema = z
  .object({
    aspectRatios: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description:
          'Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.',
      }),
  })
  .openapi({ description: 'Parameters for crop hints annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1CropHintsParams')

const GoogleCloudVisionV1p1beta1LatLongRectSchema = z
  .object({
    maxLatLng: LatLngSchema.exactOptional().openapi({ description: 'Max lat/long pair.' }),
    minLatLng: LatLngSchema.exactOptional().openapi({ description: 'Min lat/long pair.' }),
  })
  .openapi({ description: 'Rectangle determined by min and max `LatLng` pairs.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1LatLongRect')

const GoogleCloudVisionV1p1beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1NormalizedVertex')

const GoogleCloudVisionV1p1beta1VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1Vertex')

const GoogleCloudVisionV1p1beta1BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudVisionV1p1beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudVisionV1p1beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1BoundingPoly')

const GoogleCloudVisionV1p1beta1ProductSearchParamsSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied.',
    }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An \'=\' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a \':\' instead of an \'=\'.',
      }),
    productCategories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well.',
      }),
    productSet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.',
      }),
  })
  .openapi({ description: 'Parameters for a product search request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ProductSearchParams')

const GoogleCloudVisionV1p1beta1TextDetectionParamsSchema = z
  .object({
    advancedOcrOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.',
      }),
    enableTextDetectionConfidenceScore: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well.',
      }),
  })
  .openapi({
    description:
      'Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1TextDetectionParams')

const GoogleCloudVisionV1p1beta1WebDetectionParamsSchema = z
  .object({
    includeGeoResults: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'This field has no effect on results.' }),
  })
  .openapi({ description: 'Parameters for web detection request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1WebDetectionParams')

const GoogleCloudVisionV1p1beta1ImageContextSchema = z
  .object({
    cropHintsParams: GoogleCloudVisionV1p1beta1CropHintsParamsSchema.exactOptional().openapi({
      description: 'Parameters for crop hints annotation request.',
    }),
    languageHints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).',
      }),
    latLongRect: GoogleCloudVisionV1p1beta1LatLongRectSchema.exactOptional().openapi({
      description: 'Not used.',
    }),
    productSearchParams:
      GoogleCloudVisionV1p1beta1ProductSearchParamsSchema.exactOptional().openapi({
        description: 'Parameters for product search.',
      }),
    textDetectionParams:
      GoogleCloudVisionV1p1beta1TextDetectionParamsSchema.exactOptional().openapi({
        description: 'Parameters for text detection and document text detection.',
      }),
    webDetectionParams: GoogleCloudVisionV1p1beta1WebDetectionParamsSchema.exactOptional().openapi({
      description: 'Parameters for web detection.',
    }),
  })
  .openapi({ description: 'Image context and/or feature-specific parameters.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ImageContext')

const GoogleCloudVisionV1p1beta1GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the input will be read from.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1GcsSource')

const GoogleCloudVisionV1p1beta1InputConfigSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.',
      }),
    gcsSource: GoogleCloudVisionV1p1beta1GcsSourceSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to read the input from.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1InputConfig')

const GoogleCloudVisionV1p1beta1AnnotateFileRequestSchema = z
  .object({
    features: z
      .array(GoogleCloudVisionV1p1beta1FeatureSchema)
      .exactOptional()
      .openapi({ description: 'Required. Requested features.' }),
    imageContext: GoogleCloudVisionV1p1beta1ImageContextSchema.exactOptional().openapi({
      description: 'Additional context that may accompany the image(s) in the file.',
    }),
    inputConfig: GoogleCloudVisionV1p1beta1InputConfigSchema.exactOptional().openapi({
      description: 'Required. Information about the input file.',
    }),
    pages: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file.',
      }),
  })
  .openapi({
    description: 'A request to annotate one single file, e.g. a PDF, TIFF or GIF file.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1AnnotateFileRequest')

const GoogleCloudVisionV1p1beta1ImageAnnotationContextSchema = z
  .object({
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the file used to produce the image.' }),
  })
  .openapi({
    description:
      'If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1ImageAnnotationContext')

const GoogleCloudVisionV1p1beta1CropHintSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of this being a salient region. Range [0, 1].' }),
    importanceFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Fraction of importance of this salient region with respect to the original image.',
      }),
  })
  .openapi({
    description: 'Single crop hint that is used to generate a new crop when serving an image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1CropHint')

const GoogleCloudVisionV1p1beta1CropHintsAnnotationSchema = z
  .object({
    cropHints: z
      .array(GoogleCloudVisionV1p1beta1CropHintSchema)
      .exactOptional()
      .openapi({ description: 'Crop hint results.' }),
  })
  .openapi({
    description: 'Set of crop hints that are used to generate new crops when serving images.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1CropHintsAnnotation')

const GoogleCloudVisionV1p1beta1PositionSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
    z: z.float32().exactOptional().openapi({ description: 'Z coordinate (or depth).' }),
  })
  .openapi({
    description:
      'A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1Position')

const GoogleCloudVisionV1p1beta1FaceAnnotationLandmarkSchema = z
  .object({
    position: GoogleCloudVisionV1p1beta1PositionSchema.exactOptional().openapi({
      description: 'Face landmark position.',
    }),
    type: z
      .enum([
        'UNKNOWN_LANDMARK',
        'LEFT_EYE',
        'RIGHT_EYE',
        'LEFT_OF_LEFT_EYEBROW',
        'RIGHT_OF_LEFT_EYEBROW',
        'LEFT_OF_RIGHT_EYEBROW',
        'RIGHT_OF_RIGHT_EYEBROW',
        'MIDPOINT_BETWEEN_EYES',
        'NOSE_TIP',
        'UPPER_LIP',
        'LOWER_LIP',
        'MOUTH_LEFT',
        'MOUTH_RIGHT',
        'MOUTH_CENTER',
        'NOSE_BOTTOM_RIGHT',
        'NOSE_BOTTOM_LEFT',
        'NOSE_BOTTOM_CENTER',
        'LEFT_EYE_TOP_BOUNDARY',
        'LEFT_EYE_RIGHT_CORNER',
        'LEFT_EYE_BOTTOM_BOUNDARY',
        'LEFT_EYE_LEFT_CORNER',
        'RIGHT_EYE_TOP_BOUNDARY',
        'RIGHT_EYE_RIGHT_CORNER',
        'RIGHT_EYE_BOTTOM_BOUNDARY',
        'RIGHT_EYE_LEFT_CORNER',
        'LEFT_EYEBROW_UPPER_MIDPOINT',
        'RIGHT_EYEBROW_UPPER_MIDPOINT',
        'LEFT_EAR_TRAGION',
        'RIGHT_EAR_TRAGION',
        'LEFT_EYE_PUPIL',
        'RIGHT_EYE_PUPIL',
        'FOREHEAD_GLABELLA',
        'CHIN_GNATHION',
        'CHIN_LEFT_GONION',
        'CHIN_RIGHT_GONION',
        'LEFT_CHEEK_CENTER',
        'RIGHT_CHEEK_CENTER',
      ])
      .exactOptional()
      .openapi({ description: 'Face landmark type.' }),
  })
  .openapi({ description: 'A face-specific landmark (for example, a face feature).', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1FaceAnnotationLandmark')

const GoogleCloudVisionV1p1beta1FaceAnnotationSchema = z
  .object({
    angerLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Anger likelihood.' }),
    blurredLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Blurred likelihood.' }),
    boundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The bounding polygon around the face. The coordinates of the bounding box are in the original image\'s scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.',
    }),
    detectionConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detection confidence. Range [0, 1].' }),
    fdBoundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.',
    }),
    headwearLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Headwear likelihood.' }),
    joyLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Joy likelihood.' }),
    landmarkingConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Face landmarking confidence. Range [0, 1].' }),
    landmarks: z
      .array(GoogleCloudVisionV1p1beta1FaceAnnotationLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Detected face landmarks.' }),
    panAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].',
      }),
    rollAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].',
      }),
    sorrowLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Sorrow likelihood.' }),
    surpriseLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Surprise likelihood.' }),
    tiltAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].",
      }),
    underExposedLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Under-exposed likelihood.' }),
  })
  .openapi({
    description: 'A face annotation object contains the results of face detection.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1FaceAnnotation')

const GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakSchema = z
  .object({
    isPrefix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if break prepends the element.' }),
    type: z
      .enum(['UNKNOWN', 'SPACE', 'SURE_SPACE', 'EOL_SURE_SPACE', 'HYPHEN', 'LINE_BREAK'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected start or end of a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak')

const GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range [0, 1].' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage')

const GoogleCloudVisionV1p1beta1TextAnnotationTextPropertySchema = z
  .object({
    detectedBreak:
      GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected start or end of a text segment.',
      }),
    detectedLanguages: z
      .array(GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
  })
  .openapi({
    description: 'Additional information detected on the structural component.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1TextAnnotationTextProperty')

const GoogleCloudVisionV1p1beta1SymbolSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the symbol. Range [0, 1].' }),
    property: GoogleCloudVisionV1p1beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the symbol.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual UTF-8 representation of the symbol.' }),
  })
  .openapi({ description: 'A single symbol representation.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1Symbol')

const GoogleCloudVisionV1p1beta1WordSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the word. Range [0, 1].' }),
    property: GoogleCloudVisionV1p1beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the word.',
    }),
    symbols: z
      .array(GoogleCloudVisionV1p1beta1SymbolSchema)
      .exactOptional()
      .openapi({
        description:
          'List of symbols in the word. The order of the symbols follows the natural reading order.',
      }),
  })
  .openapi({ description: 'A word representation.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1Word')

const GoogleCloudVisionV1p1beta1ParagraphSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the paragraph. Range [0, 1].' }),
    property: GoogleCloudVisionV1p1beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the paragraph.',
    }),
    words: z
      .array(GoogleCloudVisionV1p1beta1WordSchema)
      .exactOptional()
      .openapi({ description: 'List of all words in this paragraph.' }),
  })
  .openapi({
    description: 'Structural unit of text representing a number of words in certain order.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1Paragraph')

const GoogleCloudVisionV1p1beta1BlockSchema = z
  .object({
    blockType: z
      .enum(['UNKNOWN', 'TEXT', 'TABLE', 'PICTURE', 'RULER', 'BARCODE'])
      .exactOptional()
      .openapi({ description: 'Detected block type (text, image etc) for this block.' }),
    boundingBox: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the block. Range [0, 1].' }),
    paragraphs: z
      .array(GoogleCloudVisionV1p1beta1ParagraphSchema)
      .exactOptional()
      .openapi({
        description: 'List of paragraphs in this block (if this blocks is of type text).',
      }),
    property: GoogleCloudVisionV1p1beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the block.',
    }),
  })
  .openapi({ description: 'Logical element on the page.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1Block')

const GoogleCloudVisionV1p1beta1PageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudVisionV1p1beta1BlockSchema)
      .exactOptional()
      .openapi({ description: 'List of blocks of text, images etc on this page.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the page. Range [0, 1].' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
    property: GoogleCloudVisionV1p1beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected on the page.',
    }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
  })
  .openapi({ description: 'Detected page from OCR.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1Page')

const GoogleCloudVisionV1p1beta1TextAnnotationSchema = z
  .object({
    pages: z
      .array(GoogleCloudVisionV1p1beta1PageSchema)
      .exactOptional()
      .openapi({ description: 'List of pages detected by OCR.' }),
    text: z.string().exactOptional().openapi({ description: 'UTF-8 text detected on the pages.' }),
  })
  .openapi({
    description:
      'TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1TextAnnotation')

const GoogleCloudVisionV1p1beta1ColorInfoSchema = z
  .object({
    color: ColorSchema.exactOptional().openapi({ description: 'RGB components of the color.' }),
    pixelFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of pixels the color occupies in the image. Value in range [0, 1].',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Image-specific score for this color. Value in range [0, 1].' }),
  })
  .openapi({
    description:
      'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1ColorInfo')

const GoogleCloudVisionV1p1beta1DominantColorsAnnotationSchema = z
  .object({
    colors: z
      .array(GoogleCloudVisionV1p1beta1ColorInfoSchema)
      .exactOptional()
      .openapi({ description: 'RGB color values with their score and pixel fraction.' }),
  })
  .openapi({ description: 'Set of dominant colors and their corresponding scores.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1DominantColorsAnnotation')

const GoogleCloudVisionV1p1beta1ImagePropertiesSchema = z
  .object({
    dominantColors:
      GoogleCloudVisionV1p1beta1DominantColorsAnnotationSchema.exactOptional().openapi({
        description: 'If present, dominant colors completed successfully.',
      }),
  })
  .openapi({ description: 'Stores image properties, such as dominant colors.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ImageProperties')

const GoogleCloudVisionV1p1beta1LocationInfoSchema = z
  .object({
    latLng: LatLngSchema.exactOptional().openapi({ description: 'lat/long location coordinates.' }),
  })
  .openapi({ description: 'Detected entity location information.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1LocationInfo')

const GoogleCloudVisionV1p1beta1PropertySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the property.' }),
    uint64Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of numeric properties.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the property.' }),
  })
  .openapi({
    description: 'A `Property` consists of a user-supplied name/value pair.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1Property')

const GoogleCloudVisionV1p1beta1EntityAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity textual description, expressed in its `locale` language.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code for the locale in which the entity textual `description` is expressed.',
      }),
    locations: z
      .array(GoogleCloudVisionV1p1beta1LocationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    properties: z
      .array(GoogleCloudVisionV1p1beta1PropertySchema)
      .exactOptional()
      .openapi({
        description:
          'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Overall score of the result. Range [0, 1].' }),
    topicality: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].',
      }),
  })
  .openapi({ description: 'Set of detected entity features.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1EntityAnnotation')

const GoogleCloudVisionV1p1beta1LocalizedObjectAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description: 'Image region to which this object belongs. This must be populated.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Set of detected objects with bounding boxes.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation')

const GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotationSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Prediction for what the object in the bounding box is.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation')

const GoogleCloudVisionV1p1beta1ProductKeyValueSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
  })
  .openapi({ description: 'A product label represented as a key-value pair.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ProductKeyValue')

const GoogleCloudVisionV1p1beta1ProductSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided metadata to be stored with this product. Must be at most 4096 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.',
      }),
    productCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.',
      }),
    productLabels: z
      .array(GoogleCloudVisionV1p1beta1ProductKeyValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.',
      }),
  })
  .openapi({ description: 'A Product contains ReferenceImages.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1Product')

const GoogleCloudVisionV1p1beta1ProductSearchResultsResultSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the image from the product that is the closest match to the query.',
      }),
    product: GoogleCloudVisionV1p1beta1ProductSchema.exactOptional().openapi({
      description: 'The Product.',
    }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
      }),
  })
  .openapi({ description: 'Information about a product.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ProductSearchResultsResult')

const GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResultSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p1beta1BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon around the product detected in the query image.',
    }),
    objectAnnotations: z
      .array(GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'List of generic predictions for the object in the bounding box.' }),
    results: z
      .array(GoogleCloudVisionV1p1beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({
    description: 'Information about the products similar to a single product in a query image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult')

const GoogleCloudVisionV1p1beta1ProductSearchResultsSchema = z
  .object({
    indexTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.',
      }),
    productGroupedResults: z
      .array(GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResultSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.',
      }),
    results: z
      .array(GoogleCloudVisionV1p1beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({ description: 'Results for a product search request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1ProductSearchResults')

const GoogleCloudVisionV1p1beta1SafeSearchAnnotationSchema = z
  .object({
    adult: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.',
      }),
    medical: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Likelihood that this is a medical image.' }),
    racy: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.',
      }),
    spoof: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          "Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
      }),
    violence: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.',
      }),
  })
  .openapi({
    description:
      'Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1SafeSearchAnnotation')

const GoogleCloudVisionV1p1beta1WebDetectionWebLabelSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'Label for extra metadata.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Label to provide extra metadata for the web detection.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1WebDetectionWebLabel')

const GoogleCloudVisionV1p1beta1WebDetectionWebImageSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the image.' }),
    url: z.string().exactOptional().openapi({ description: 'The result image URL.' }),
  })
  .openapi({ description: 'Metadata for online images.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1WebDetectionWebImage')

const GoogleCloudVisionV1p1beta1WebDetectionWebPageSchema = z
  .object({
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images on the page. Can include resized copies of the query image.',
      }),
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the web page, may contain HTML markups.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the web page.' }),
    url: z.string().exactOptional().openapi({ description: 'The result web page URL.' }),
  })
  .openapi({ description: 'Metadata for web pages.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1WebDetectionWebPage')

const GoogleCloudVisionV1p1beta1WebDetectionWebEntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Canonical description of the entity, in English.' }),
    entityId: z.string().exactOptional().openapi({ description: 'Opaque entity ID.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Overall relevancy score for the entity. Not normalized and not comparable across different image queries.',
      }),
  })
  .openapi({ description: 'Entity deduced from similar images on the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1WebDetectionWebEntity')

const GoogleCloudVisionV1p1beta1WebDetectionSchema = z
  .object({
    bestGuessLabels: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebLabelSchema)
      .exactOptional()
      .openapi({
        description:
          "The service's best guess as to the topic of the request image. Inferred from similar images on the open web.",
      }),
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images from the Internet. Can include resized copies of the query image.',
      }),
    pagesWithMatchingImages: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebPageSchema)
      .exactOptional()
      .openapi({ description: 'Web pages containing the matching images from the Internet.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    visuallySimilarImages: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({ description: 'The visually similar image results.' }),
    webEntities: z
      .array(GoogleCloudVisionV1p1beta1WebDetectionWebEntitySchema)
      .exactOptional()
      .openapi({ description: 'Deduced entities from similar images on the Internet.' }),
  })
  .openapi({ description: 'Relevant information for the image from the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1WebDetection')

const GoogleCloudVisionV1p1beta1AnnotateImageResponseSchema = z
  .object({
    context: GoogleCloudVisionV1p1beta1ImageAnnotationContextSchema.exactOptional().openapi({
      description:
        'If present, contextual information is needed to understand where this image comes from.',
    }),
    cropHintsAnnotation:
      GoogleCloudVisionV1p1beta1CropHintsAnnotationSchema.exactOptional().openapi({
        description: 'If present, crop hints have completed successfully.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.',
    }),
    faceAnnotations: z
      .array(GoogleCloudVisionV1p1beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, face detection has completed successfully.' }),
    fullTextAnnotation: GoogleCloudVisionV1p1beta1TextAnnotationSchema.exactOptional().openapi({
      description:
        'If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.',
    }),
    imagePropertiesAnnotation:
      GoogleCloudVisionV1p1beta1ImagePropertiesSchema.exactOptional().openapi({
        description: 'If present, image properties were extracted successfully.',
      }),
    labelAnnotations: z
      .array(GoogleCloudVisionV1p1beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, label detection has completed successfully.' }),
    landmarkAnnotations: z
      .array(GoogleCloudVisionV1p1beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, landmark detection has completed successfully.' }),
    localizedObjectAnnotations: z
      .array(GoogleCloudVisionV1p1beta1LocalizedObjectAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'If present, localized object detection has completed successfully. This will be sorted descending by confidence score.',
      }),
    logoAnnotations: z
      .array(GoogleCloudVisionV1p1beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, logo detection has completed successfully.' }),
    productSearchResults:
      GoogleCloudVisionV1p1beta1ProductSearchResultsSchema.exactOptional().openapi({
        description: 'If present, product search has completed successfully.',
      }),
    safeSearchAnnotation:
      GoogleCloudVisionV1p1beta1SafeSearchAnnotationSchema.exactOptional().openapi({
        description: 'If present, safe-search annotation has completed successfully.',
      }),
    textAnnotations: z
      .array(GoogleCloudVisionV1p1beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, text (OCR) detection has completed successfully.' }),
    webDetection: GoogleCloudVisionV1p1beta1WebDetectionSchema.exactOptional().openapi({
      description: 'If present, web detection has completed successfully.',
    }),
  })
  .openapi({ description: 'Response to an image annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1AnnotateImageResponse')

const GoogleCloudVisionV1p1beta1AnnotateFileResponseSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the failed request. The `responses` field will not be set in this case.',
    }),
    inputConfig: GoogleCloudVisionV1p1beta1InputConfigSchema.exactOptional().openapi({
      description: 'Information about the file for which this response is generated.',
    }),
    responses: z
      .array(GoogleCloudVisionV1p1beta1AnnotateImageResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual responses to images found within the file. This field will be empty if the `error` field is set.',
      }),
    totalPages: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This field gives the total number of pages in the file.' }),
  })
  .openapi({
    description:
      'Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1AnnotateFileResponse')

const GoogleCloudVisionV1p1beta1ImageSourceSchema = z
  .object({
    gcsImageUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.',
      }),
    imageUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence.',
      }),
  })
  .openapi({
    description: 'External image source (Google Cloud Storage or web URL image location).',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1ImageSource')

const GoogleCloudVisionV1p1beta1ImageSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests.',
      }),
    source: GoogleCloudVisionV1p1beta1ImageSourceSchema.exactOptional().openapi({
      description:
        'Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request.',
    }),
  })
  .openapi({
    description: 'Client image to perform Google Cloud Vision API tasks over.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1Image')

const GoogleCloudVisionV1p1beta1AnnotateImageRequestSchema = z
  .object({
    features: z
      .array(GoogleCloudVisionV1p1beta1FeatureSchema)
      .exactOptional()
      .openapi({ description: 'Requested features.' }),
    image: GoogleCloudVisionV1p1beta1ImageSchema.exactOptional().openapi({
      description: 'The image to be processed.',
    }),
    imageContext: GoogleCloudVisionV1p1beta1ImageContextSchema.exactOptional().openapi({
      description: 'Additional context that may accompany the image.',
    }),
  })
  .openapi({
    description:
      'Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1AnnotateImageRequest')

const GoogleCloudVisionV1p1beta1GcsDestinationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the output will be written to.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1GcsDestination')

const GoogleCloudVisionV1p1beta1OutputConfigSchema = z
  .object({
    batchSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.',
      }),
    gcsDestination: GoogleCloudVisionV1p1beta1GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output(s) to.',
    }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1OutputConfig')

const GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequestSchema = z
  .object({
    features: z
      .array(GoogleCloudVisionV1p1beta1FeatureSchema)
      .exactOptional()
      .openapi({ description: 'Required. Requested features.' }),
    imageContext: GoogleCloudVisionV1p1beta1ImageContextSchema.exactOptional().openapi({
      description: 'Additional context that may accompany the image(s) in the file.',
    }),
    inputConfig: GoogleCloudVisionV1p1beta1InputConfigSchema.exactOptional().openapi({
      description: 'Required. Information about the input file.',
    }),
    outputConfig: GoogleCloudVisionV1p1beta1OutputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired output location and metadata (e.g. format).',
    }),
  })
  .openapi({ description: 'An offline file annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest')

const GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponseSchema = z
  .object({
    outputConfig: GoogleCloudVisionV1p1beta1OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncAnnotateFileRequest.',
    }),
  })
  .openapi({
    description: 'The response for a single offline file annotation request.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse')

const GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequestSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
      }),
    requests: z
      .array(GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequestSchema)
      .exactOptional()
      .openapi({
        description: 'Required. Individual async file annotation requests for this batch.',
      }),
  })
  .openapi({
    description: 'Multiple async file annotation requests are batched into a single service call.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest')

const GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'Response to an async batch file annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse')

const GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequestSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.',
      }),
    outputConfig: GoogleCloudVisionV1p1beta1OutputConfigSchema.exactOptional().openapi({
      description: 'Required. The desired output location and metadata (e.g. format).',
    }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
      }),
    requests: z
      .array(GoogleCloudVisionV1p1beta1AnnotateImageRequestSchema)
      .exactOptional()
      .openapi({ description: 'Required. Individual image annotation requests for this batch.' }),
  })
  .openapi({
    description: 'Request for async image annotation for a list of images.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest')

const GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequestSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
      }),
    requests: z
      .array(GoogleCloudVisionV1p1beta1AnnotateFileRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.',
      }),
  })
  .openapi({
    description: 'A list of requests to annotate files using the BatchAnnotateFiles API.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest')

const GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p1beta1AnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'A list of file annotation responses.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse')

const GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequestSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
      }),
    requests: z
      .array(GoogleCloudVisionV1p1beta1AnnotateImageRequestSchema)
      .exactOptional()
      .openapi({ description: 'Required. Individual image annotation requests for this batch.' }),
  })
  .openapi({
    description: 'Multiple image annotation requests are batched into a single service call.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest')

const GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p1beta1AnnotateImageResponseSchema)
      .exactOptional()
      .openapi({
        description: 'Individual responses to image annotation requests within the batch.',
      }),
  })
  .openapi({ description: 'Response to a batch image annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse')

const GoogleCloudVisionV1p1beta1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was received.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATED', 'RUNNING', 'DONE', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Current state of the batch operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation result was last updated.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchAnnotateImages operation.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p1beta1OperationMetadata')

const GoogleCloudVisionV1p2beta1GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the input will be read from.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1GcsSource')

const GoogleCloudVisionV1p2beta1InputConfigSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.',
      }),
    gcsSource: GoogleCloudVisionV1p2beta1GcsSourceSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to read the input from.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1InputConfig')

const GoogleCloudVisionV1p2beta1ImageAnnotationContextSchema = z
  .object({
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the file used to produce the image.' }),
  })
  .openapi({
    description:
      'If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1ImageAnnotationContext')

const GoogleCloudVisionV1p2beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1NormalizedVertex')

const GoogleCloudVisionV1p2beta1VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1Vertex')

const GoogleCloudVisionV1p2beta1BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudVisionV1p2beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudVisionV1p2beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1BoundingPoly')

const GoogleCloudVisionV1p2beta1CropHintSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of this being a salient region. Range [0, 1].' }),
    importanceFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Fraction of importance of this salient region with respect to the original image.',
      }),
  })
  .openapi({
    description: 'Single crop hint that is used to generate a new crop when serving an image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1CropHint')

const GoogleCloudVisionV1p2beta1CropHintsAnnotationSchema = z
  .object({
    cropHints: z
      .array(GoogleCloudVisionV1p2beta1CropHintSchema)
      .exactOptional()
      .openapi({ description: 'Crop hint results.' }),
  })
  .openapi({
    description: 'Set of crop hints that are used to generate new crops when serving images.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1CropHintsAnnotation')

const GoogleCloudVisionV1p2beta1PositionSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
    z: z.float32().exactOptional().openapi({ description: 'Z coordinate (or depth).' }),
  })
  .openapi({
    description:
      'A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1Position')

const GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkSchema = z
  .object({
    position: GoogleCloudVisionV1p2beta1PositionSchema.exactOptional().openapi({
      description: 'Face landmark position.',
    }),
    type: z
      .enum([
        'UNKNOWN_LANDMARK',
        'LEFT_EYE',
        'RIGHT_EYE',
        'LEFT_OF_LEFT_EYEBROW',
        'RIGHT_OF_LEFT_EYEBROW',
        'LEFT_OF_RIGHT_EYEBROW',
        'RIGHT_OF_RIGHT_EYEBROW',
        'MIDPOINT_BETWEEN_EYES',
        'NOSE_TIP',
        'UPPER_LIP',
        'LOWER_LIP',
        'MOUTH_LEFT',
        'MOUTH_RIGHT',
        'MOUTH_CENTER',
        'NOSE_BOTTOM_RIGHT',
        'NOSE_BOTTOM_LEFT',
        'NOSE_BOTTOM_CENTER',
        'LEFT_EYE_TOP_BOUNDARY',
        'LEFT_EYE_RIGHT_CORNER',
        'LEFT_EYE_BOTTOM_BOUNDARY',
        'LEFT_EYE_LEFT_CORNER',
        'RIGHT_EYE_TOP_BOUNDARY',
        'RIGHT_EYE_RIGHT_CORNER',
        'RIGHT_EYE_BOTTOM_BOUNDARY',
        'RIGHT_EYE_LEFT_CORNER',
        'LEFT_EYEBROW_UPPER_MIDPOINT',
        'RIGHT_EYEBROW_UPPER_MIDPOINT',
        'LEFT_EAR_TRAGION',
        'RIGHT_EAR_TRAGION',
        'LEFT_EYE_PUPIL',
        'RIGHT_EYE_PUPIL',
        'FOREHEAD_GLABELLA',
        'CHIN_GNATHION',
        'CHIN_LEFT_GONION',
        'CHIN_RIGHT_GONION',
        'LEFT_CHEEK_CENTER',
        'RIGHT_CHEEK_CENTER',
      ])
      .exactOptional()
      .openapi({ description: 'Face landmark type.' }),
  })
  .openapi({ description: 'A face-specific landmark (for example, a face feature).', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1FaceAnnotationLandmark')

const GoogleCloudVisionV1p2beta1FaceAnnotationSchema = z
  .object({
    angerLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Anger likelihood.' }),
    blurredLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Blurred likelihood.' }),
    boundingPoly: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The bounding polygon around the face. The coordinates of the bounding box are in the original image\'s scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.',
    }),
    detectionConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detection confidence. Range [0, 1].' }),
    fdBoundingPoly: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.',
    }),
    headwearLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Headwear likelihood.' }),
    joyLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Joy likelihood.' }),
    landmarkingConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Face landmarking confidence. Range [0, 1].' }),
    landmarks: z
      .array(GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Detected face landmarks.' }),
    panAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].',
      }),
    rollAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].',
      }),
    sorrowLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Sorrow likelihood.' }),
    surpriseLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Surprise likelihood.' }),
    tiltAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].",
      }),
    underExposedLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Under-exposed likelihood.' }),
  })
  .openapi({
    description: 'A face annotation object contains the results of face detection.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1FaceAnnotation')

const GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakSchema = z
  .object({
    isPrefix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if break prepends the element.' }),
    type: z
      .enum(['UNKNOWN', 'SPACE', 'SURE_SPACE', 'EOL_SURE_SPACE', 'HYPHEN', 'LINE_BREAK'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected start or end of a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak')

const GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range [0, 1].' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage')

const GoogleCloudVisionV1p2beta1TextAnnotationTextPropertySchema = z
  .object({
    detectedBreak:
      GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected start or end of a text segment.',
      }),
    detectedLanguages: z
      .array(GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
  })
  .openapi({
    description: 'Additional information detected on the structural component.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1TextAnnotationTextProperty')

const GoogleCloudVisionV1p2beta1SymbolSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the symbol. Range [0, 1].' }),
    property: GoogleCloudVisionV1p2beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the symbol.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual UTF-8 representation of the symbol.' }),
  })
  .openapi({ description: 'A single symbol representation.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1Symbol')

const GoogleCloudVisionV1p2beta1WordSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the word. Range [0, 1].' }),
    property: GoogleCloudVisionV1p2beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the word.',
    }),
    symbols: z
      .array(GoogleCloudVisionV1p2beta1SymbolSchema)
      .exactOptional()
      .openapi({
        description:
          'List of symbols in the word. The order of the symbols follows the natural reading order.',
      }),
  })
  .openapi({ description: 'A word representation.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1Word')

const GoogleCloudVisionV1p2beta1ParagraphSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the paragraph. Range [0, 1].' }),
    property: GoogleCloudVisionV1p2beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the paragraph.',
    }),
    words: z
      .array(GoogleCloudVisionV1p2beta1WordSchema)
      .exactOptional()
      .openapi({ description: 'List of all words in this paragraph.' }),
  })
  .openapi({
    description: 'Structural unit of text representing a number of words in certain order.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1Paragraph')

const GoogleCloudVisionV1p2beta1BlockSchema = z
  .object({
    blockType: z
      .enum(['UNKNOWN', 'TEXT', 'TABLE', 'PICTURE', 'RULER', 'BARCODE'])
      .exactOptional()
      .openapi({ description: 'Detected block type (text, image etc) for this block.' }),
    boundingBox: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the block. Range [0, 1].' }),
    paragraphs: z
      .array(GoogleCloudVisionV1p2beta1ParagraphSchema)
      .exactOptional()
      .openapi({
        description: 'List of paragraphs in this block (if this blocks is of type text).',
      }),
    property: GoogleCloudVisionV1p2beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the block.',
    }),
  })
  .openapi({ description: 'Logical element on the page.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1Block')

const GoogleCloudVisionV1p2beta1PageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudVisionV1p2beta1BlockSchema)
      .exactOptional()
      .openapi({ description: 'List of blocks of text, images etc on this page.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the page. Range [0, 1].' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
    property: GoogleCloudVisionV1p2beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected on the page.',
    }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
  })
  .openapi({ description: 'Detected page from OCR.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1Page')

const GoogleCloudVisionV1p2beta1TextAnnotationSchema = z
  .object({
    pages: z
      .array(GoogleCloudVisionV1p2beta1PageSchema)
      .exactOptional()
      .openapi({ description: 'List of pages detected by OCR.' }),
    text: z.string().exactOptional().openapi({ description: 'UTF-8 text detected on the pages.' }),
  })
  .openapi({
    description:
      'TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1TextAnnotation')

const GoogleCloudVisionV1p2beta1ColorInfoSchema = z
  .object({
    color: ColorSchema.exactOptional().openapi({ description: 'RGB components of the color.' }),
    pixelFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of pixels the color occupies in the image. Value in range [0, 1].',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Image-specific score for this color. Value in range [0, 1].' }),
  })
  .openapi({
    description:
      'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1ColorInfo')

const GoogleCloudVisionV1p2beta1DominantColorsAnnotationSchema = z
  .object({
    colors: z
      .array(GoogleCloudVisionV1p2beta1ColorInfoSchema)
      .exactOptional()
      .openapi({ description: 'RGB color values with their score and pixel fraction.' }),
  })
  .openapi({ description: 'Set of dominant colors and their corresponding scores.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1DominantColorsAnnotation')

const GoogleCloudVisionV1p2beta1ImagePropertiesSchema = z
  .object({
    dominantColors:
      GoogleCloudVisionV1p2beta1DominantColorsAnnotationSchema.exactOptional().openapi({
        description: 'If present, dominant colors completed successfully.',
      }),
  })
  .openapi({ description: 'Stores image properties, such as dominant colors.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1ImageProperties')

const GoogleCloudVisionV1p2beta1LocationInfoSchema = z
  .object({
    latLng: LatLngSchema.exactOptional().openapi({ description: 'lat/long location coordinates.' }),
  })
  .openapi({ description: 'Detected entity location information.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1LocationInfo')

const GoogleCloudVisionV1p2beta1PropertySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the property.' }),
    uint64Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of numeric properties.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the property.' }),
  })
  .openapi({
    description: 'A `Property` consists of a user-supplied name/value pair.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1Property')

const GoogleCloudVisionV1p2beta1EntityAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity textual description, expressed in its `locale` language.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code for the locale in which the entity textual `description` is expressed.',
      }),
    locations: z
      .array(GoogleCloudVisionV1p2beta1LocationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    properties: z
      .array(GoogleCloudVisionV1p2beta1PropertySchema)
      .exactOptional()
      .openapi({
        description:
          'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Overall score of the result. Range [0, 1].' }),
    topicality: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].',
      }),
  })
  .openapi({ description: 'Set of detected entity features.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1EntityAnnotation')

const GoogleCloudVisionV1p2beta1LocalizedObjectAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description: 'Image region to which this object belongs. This must be populated.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Set of detected objects with bounding boxes.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation')

const GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotationSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Prediction for what the object in the bounding box is.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation')

const GoogleCloudVisionV1p2beta1ProductKeyValueSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
  })
  .openapi({ description: 'A product label represented as a key-value pair.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1ProductKeyValue')

const GoogleCloudVisionV1p2beta1ProductSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided metadata to be stored with this product. Must be at most 4096 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.',
      }),
    productCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.',
      }),
    productLabels: z
      .array(GoogleCloudVisionV1p2beta1ProductKeyValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.',
      }),
  })
  .openapi({ description: 'A Product contains ReferenceImages.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1Product')

const GoogleCloudVisionV1p2beta1ProductSearchResultsResultSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the image from the product that is the closest match to the query.',
      }),
    product: GoogleCloudVisionV1p2beta1ProductSchema.exactOptional().openapi({
      description: 'The Product.',
    }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
      }),
  })
  .openapi({ description: 'Information about a product.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1ProductSearchResultsResult')

const GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResultSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p2beta1BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon around the product detected in the query image.',
    }),
    objectAnnotations: z
      .array(GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'List of generic predictions for the object in the bounding box.' }),
    results: z
      .array(GoogleCloudVisionV1p2beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({
    description: 'Information about the products similar to a single product in a query image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult')

const GoogleCloudVisionV1p2beta1ProductSearchResultsSchema = z
  .object({
    indexTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.',
      }),
    productGroupedResults: z
      .array(GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResultSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.',
      }),
    results: z
      .array(GoogleCloudVisionV1p2beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({ description: 'Results for a product search request.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1ProductSearchResults')

const GoogleCloudVisionV1p2beta1SafeSearchAnnotationSchema = z
  .object({
    adult: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.',
      }),
    medical: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Likelihood that this is a medical image.' }),
    racy: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.',
      }),
    spoof: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          "Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
      }),
    violence: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.',
      }),
  })
  .openapi({
    description:
      'Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1SafeSearchAnnotation')

const GoogleCloudVisionV1p2beta1WebDetectionWebLabelSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'Label for extra metadata.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Label to provide extra metadata for the web detection.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1WebDetectionWebLabel')

const GoogleCloudVisionV1p2beta1WebDetectionWebImageSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the image.' }),
    url: z.string().exactOptional().openapi({ description: 'The result image URL.' }),
  })
  .openapi({ description: 'Metadata for online images.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1WebDetectionWebImage')

const GoogleCloudVisionV1p2beta1WebDetectionWebPageSchema = z
  .object({
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images on the page. Can include resized copies of the query image.',
      }),
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the web page, may contain HTML markups.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the web page.' }),
    url: z.string().exactOptional().openapi({ description: 'The result web page URL.' }),
  })
  .openapi({ description: 'Metadata for web pages.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1WebDetectionWebPage')

const GoogleCloudVisionV1p2beta1WebDetectionWebEntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Canonical description of the entity, in English.' }),
    entityId: z.string().exactOptional().openapi({ description: 'Opaque entity ID.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Overall relevancy score for the entity. Not normalized and not comparable across different image queries.',
      }),
  })
  .openapi({ description: 'Entity deduced from similar images on the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1WebDetectionWebEntity')

const GoogleCloudVisionV1p2beta1WebDetectionSchema = z
  .object({
    bestGuessLabels: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebLabelSchema)
      .exactOptional()
      .openapi({
        description:
          "The service's best guess as to the topic of the request image. Inferred from similar images on the open web.",
      }),
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images from the Internet. Can include resized copies of the query image.',
      }),
    pagesWithMatchingImages: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebPageSchema)
      .exactOptional()
      .openapi({ description: 'Web pages containing the matching images from the Internet.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    visuallySimilarImages: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({ description: 'The visually similar image results.' }),
    webEntities: z
      .array(GoogleCloudVisionV1p2beta1WebDetectionWebEntitySchema)
      .exactOptional()
      .openapi({ description: 'Deduced entities from similar images on the Internet.' }),
  })
  .openapi({ description: 'Relevant information for the image from the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1WebDetection')

const GoogleCloudVisionV1p2beta1AnnotateImageResponseSchema = z
  .object({
    context: GoogleCloudVisionV1p2beta1ImageAnnotationContextSchema.exactOptional().openapi({
      description:
        'If present, contextual information is needed to understand where this image comes from.',
    }),
    cropHintsAnnotation:
      GoogleCloudVisionV1p2beta1CropHintsAnnotationSchema.exactOptional().openapi({
        description: 'If present, crop hints have completed successfully.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.',
    }),
    faceAnnotations: z
      .array(GoogleCloudVisionV1p2beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, face detection has completed successfully.' }),
    fullTextAnnotation: GoogleCloudVisionV1p2beta1TextAnnotationSchema.exactOptional().openapi({
      description:
        'If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.',
    }),
    imagePropertiesAnnotation:
      GoogleCloudVisionV1p2beta1ImagePropertiesSchema.exactOptional().openapi({
        description: 'If present, image properties were extracted successfully.',
      }),
    labelAnnotations: z
      .array(GoogleCloudVisionV1p2beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, label detection has completed successfully.' }),
    landmarkAnnotations: z
      .array(GoogleCloudVisionV1p2beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, landmark detection has completed successfully.' }),
    localizedObjectAnnotations: z
      .array(GoogleCloudVisionV1p2beta1LocalizedObjectAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'If present, localized object detection has completed successfully. This will be sorted descending by confidence score.',
      }),
    logoAnnotations: z
      .array(GoogleCloudVisionV1p2beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, logo detection has completed successfully.' }),
    productSearchResults:
      GoogleCloudVisionV1p2beta1ProductSearchResultsSchema.exactOptional().openapi({
        description: 'If present, product search has completed successfully.',
      }),
    safeSearchAnnotation:
      GoogleCloudVisionV1p2beta1SafeSearchAnnotationSchema.exactOptional().openapi({
        description: 'If present, safe-search annotation has completed successfully.',
      }),
    textAnnotations: z
      .array(GoogleCloudVisionV1p2beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, text (OCR) detection has completed successfully.' }),
    webDetection: GoogleCloudVisionV1p2beta1WebDetectionSchema.exactOptional().openapi({
      description: 'If present, web detection has completed successfully.',
    }),
  })
  .openapi({ description: 'Response to an image annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1AnnotateImageResponse')

const GoogleCloudVisionV1p2beta1AnnotateFileResponseSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the failed request. The `responses` field will not be set in this case.',
    }),
    inputConfig: GoogleCloudVisionV1p2beta1InputConfigSchema.exactOptional().openapi({
      description: 'Information about the file for which this response is generated.',
    }),
    responses: z
      .array(GoogleCloudVisionV1p2beta1AnnotateImageResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual responses to images found within the file. This field will be empty if the `error` field is set.',
      }),
    totalPages: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This field gives the total number of pages in the file.' }),
  })
  .openapi({
    description:
      'Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1AnnotateFileResponse')

const GoogleCloudVisionV1p2beta1GcsDestinationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the output will be written to.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1GcsDestination')

const GoogleCloudVisionV1p2beta1OutputConfigSchema = z
  .object({
    batchSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.',
      }),
    gcsDestination: GoogleCloudVisionV1p2beta1GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output(s) to.',
    }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1OutputConfig')

const GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponseSchema = z
  .object({
    outputConfig: GoogleCloudVisionV1p2beta1OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncAnnotateFileRequest.',
    }),
  })
  .openapi({
    description: 'The response for a single offline file annotation request.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse')

const GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'Response to an async batch file annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse')

const GoogleCloudVisionV1p2beta1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was received.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATED', 'RUNNING', 'DONE', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Current state of the batch operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation result was last updated.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchAnnotateImages operation.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p2beta1OperationMetadata')

const GoogleCloudVisionV1p3beta1GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the input will be read from.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1GcsSource')

const GoogleCloudVisionV1p3beta1InputConfigSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.',
      }),
    gcsSource: GoogleCloudVisionV1p3beta1GcsSourceSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to read the input from.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1InputConfig')

const GoogleCloudVisionV1p3beta1ImageAnnotationContextSchema = z
  .object({
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the file used to produce the image.' }),
  })
  .openapi({
    description:
      'If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1ImageAnnotationContext')

const GoogleCloudVisionV1p3beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1NormalizedVertex')

const GoogleCloudVisionV1p3beta1VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1Vertex')

const GoogleCloudVisionV1p3beta1BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudVisionV1p3beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudVisionV1p3beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1BoundingPoly')

const GoogleCloudVisionV1p3beta1CropHintSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of this being a salient region. Range [0, 1].' }),
    importanceFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Fraction of importance of this salient region with respect to the original image.',
      }),
  })
  .openapi({
    description: 'Single crop hint that is used to generate a new crop when serving an image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1CropHint')

const GoogleCloudVisionV1p3beta1CropHintsAnnotationSchema = z
  .object({
    cropHints: z
      .array(GoogleCloudVisionV1p3beta1CropHintSchema)
      .exactOptional()
      .openapi({ description: 'Crop hint results.' }),
  })
  .openapi({
    description: 'Set of crop hints that are used to generate new crops when serving images.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1CropHintsAnnotation')

const GoogleCloudVisionV1p3beta1PositionSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
    z: z.float32().exactOptional().openapi({ description: 'Z coordinate (or depth).' }),
  })
  .openapi({
    description:
      'A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1Position')

const GoogleCloudVisionV1p3beta1FaceAnnotationLandmarkSchema = z
  .object({
    position: GoogleCloudVisionV1p3beta1PositionSchema.exactOptional().openapi({
      description: 'Face landmark position.',
    }),
    type: z
      .enum([
        'UNKNOWN_LANDMARK',
        'LEFT_EYE',
        'RIGHT_EYE',
        'LEFT_OF_LEFT_EYEBROW',
        'RIGHT_OF_LEFT_EYEBROW',
        'LEFT_OF_RIGHT_EYEBROW',
        'RIGHT_OF_RIGHT_EYEBROW',
        'MIDPOINT_BETWEEN_EYES',
        'NOSE_TIP',
        'UPPER_LIP',
        'LOWER_LIP',
        'MOUTH_LEFT',
        'MOUTH_RIGHT',
        'MOUTH_CENTER',
        'NOSE_BOTTOM_RIGHT',
        'NOSE_BOTTOM_LEFT',
        'NOSE_BOTTOM_CENTER',
        'LEFT_EYE_TOP_BOUNDARY',
        'LEFT_EYE_RIGHT_CORNER',
        'LEFT_EYE_BOTTOM_BOUNDARY',
        'LEFT_EYE_LEFT_CORNER',
        'RIGHT_EYE_TOP_BOUNDARY',
        'RIGHT_EYE_RIGHT_CORNER',
        'RIGHT_EYE_BOTTOM_BOUNDARY',
        'RIGHT_EYE_LEFT_CORNER',
        'LEFT_EYEBROW_UPPER_MIDPOINT',
        'RIGHT_EYEBROW_UPPER_MIDPOINT',
        'LEFT_EAR_TRAGION',
        'RIGHT_EAR_TRAGION',
        'LEFT_EYE_PUPIL',
        'RIGHT_EYE_PUPIL',
        'FOREHEAD_GLABELLA',
        'CHIN_GNATHION',
        'CHIN_LEFT_GONION',
        'CHIN_RIGHT_GONION',
        'LEFT_CHEEK_CENTER',
        'RIGHT_CHEEK_CENTER',
      ])
      .exactOptional()
      .openapi({ description: 'Face landmark type.' }),
  })
  .openapi({ description: 'A face-specific landmark (for example, a face feature).', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1FaceAnnotationLandmark')

const GoogleCloudVisionV1p3beta1FaceAnnotationSchema = z
  .object({
    angerLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Anger likelihood.' }),
    blurredLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Blurred likelihood.' }),
    boundingPoly: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The bounding polygon around the face. The coordinates of the bounding box are in the original image\'s scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.',
    }),
    detectionConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detection confidence. Range [0, 1].' }),
    fdBoundingPoly: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.',
    }),
    headwearLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Headwear likelihood.' }),
    joyLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Joy likelihood.' }),
    landmarkingConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Face landmarking confidence. Range [0, 1].' }),
    landmarks: z
      .array(GoogleCloudVisionV1p3beta1FaceAnnotationLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Detected face landmarks.' }),
    panAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].',
      }),
    rollAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].',
      }),
    sorrowLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Sorrow likelihood.' }),
    surpriseLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Surprise likelihood.' }),
    tiltAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].",
      }),
    underExposedLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Under-exposed likelihood.' }),
  })
  .openapi({
    description: 'A face annotation object contains the results of face detection.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1FaceAnnotation')

const GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreakSchema = z
  .object({
    isPrefix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if break prepends the element.' }),
    type: z
      .enum(['UNKNOWN', 'SPACE', 'SURE_SPACE', 'EOL_SURE_SPACE', 'HYPHEN', 'LINE_BREAK'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected start or end of a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak')

const GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range [0, 1].' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage')

const GoogleCloudVisionV1p3beta1TextAnnotationTextPropertySchema = z
  .object({
    detectedBreak:
      GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected start or end of a text segment.',
      }),
    detectedLanguages: z
      .array(GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
  })
  .openapi({
    description: 'Additional information detected on the structural component.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1TextAnnotationTextProperty')

const GoogleCloudVisionV1p3beta1SymbolSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the symbol. Range [0, 1].' }),
    property: GoogleCloudVisionV1p3beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the symbol.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual UTF-8 representation of the symbol.' }),
  })
  .openapi({ description: 'A single symbol representation.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1Symbol')

const GoogleCloudVisionV1p3beta1WordSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the word. Range [0, 1].' }),
    property: GoogleCloudVisionV1p3beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the word.',
    }),
    symbols: z
      .array(GoogleCloudVisionV1p3beta1SymbolSchema)
      .exactOptional()
      .openapi({
        description:
          'List of symbols in the word. The order of the symbols follows the natural reading order.',
      }),
  })
  .openapi({ description: 'A word representation.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1Word')

const GoogleCloudVisionV1p3beta1ParagraphSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the paragraph. Range [0, 1].' }),
    property: GoogleCloudVisionV1p3beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the paragraph.',
    }),
    words: z
      .array(GoogleCloudVisionV1p3beta1WordSchema)
      .exactOptional()
      .openapi({ description: 'List of all words in this paragraph.' }),
  })
  .openapi({
    description: 'Structural unit of text representing a number of words in certain order.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1Paragraph')

const GoogleCloudVisionV1p3beta1BlockSchema = z
  .object({
    blockType: z
      .enum(['UNKNOWN', 'TEXT', 'TABLE', 'PICTURE', 'RULER', 'BARCODE'])
      .exactOptional()
      .openapi({ description: 'Detected block type (text, image etc) for this block.' }),
    boundingBox: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the block. Range [0, 1].' }),
    paragraphs: z
      .array(GoogleCloudVisionV1p3beta1ParagraphSchema)
      .exactOptional()
      .openapi({
        description: 'List of paragraphs in this block (if this blocks is of type text).',
      }),
    property: GoogleCloudVisionV1p3beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the block.',
    }),
  })
  .openapi({ description: 'Logical element on the page.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1Block')

const GoogleCloudVisionV1p3beta1PageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudVisionV1p3beta1BlockSchema)
      .exactOptional()
      .openapi({ description: 'List of blocks of text, images etc on this page.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the page. Range [0, 1].' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
    property: GoogleCloudVisionV1p3beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected on the page.',
    }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
  })
  .openapi({ description: 'Detected page from OCR.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1Page')

const GoogleCloudVisionV1p3beta1TextAnnotationSchema = z
  .object({
    pages: z
      .array(GoogleCloudVisionV1p3beta1PageSchema)
      .exactOptional()
      .openapi({ description: 'List of pages detected by OCR.' }),
    text: z.string().exactOptional().openapi({ description: 'UTF-8 text detected on the pages.' }),
  })
  .openapi({
    description:
      'TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1TextAnnotation')

const GoogleCloudVisionV1p3beta1ColorInfoSchema = z
  .object({
    color: ColorSchema.exactOptional().openapi({ description: 'RGB components of the color.' }),
    pixelFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of pixels the color occupies in the image. Value in range [0, 1].',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Image-specific score for this color. Value in range [0, 1].' }),
  })
  .openapi({
    description:
      'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1ColorInfo')

const GoogleCloudVisionV1p3beta1DominantColorsAnnotationSchema = z
  .object({
    colors: z
      .array(GoogleCloudVisionV1p3beta1ColorInfoSchema)
      .exactOptional()
      .openapi({ description: 'RGB color values with their score and pixel fraction.' }),
  })
  .openapi({ description: 'Set of dominant colors and their corresponding scores.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1DominantColorsAnnotation')

const GoogleCloudVisionV1p3beta1ImagePropertiesSchema = z
  .object({
    dominantColors:
      GoogleCloudVisionV1p3beta1DominantColorsAnnotationSchema.exactOptional().openapi({
        description: 'If present, dominant colors completed successfully.',
      }),
  })
  .openapi({ description: 'Stores image properties, such as dominant colors.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1ImageProperties')

const GoogleCloudVisionV1p3beta1LocationInfoSchema = z
  .object({
    latLng: LatLngSchema.exactOptional().openapi({ description: 'lat/long location coordinates.' }),
  })
  .openapi({ description: 'Detected entity location information.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1LocationInfo')

const GoogleCloudVisionV1p3beta1PropertySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the property.' }),
    uint64Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of numeric properties.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the property.' }),
  })
  .openapi({
    description: 'A `Property` consists of a user-supplied name/value pair.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1Property')

const GoogleCloudVisionV1p3beta1EntityAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity textual description, expressed in its `locale` language.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code for the locale in which the entity textual `description` is expressed.',
      }),
    locations: z
      .array(GoogleCloudVisionV1p3beta1LocationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    properties: z
      .array(GoogleCloudVisionV1p3beta1PropertySchema)
      .exactOptional()
      .openapi({
        description:
          'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Overall score of the result. Range [0, 1].' }),
    topicality: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].',
      }),
  })
  .openapi({ description: 'Set of detected entity features.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1EntityAnnotation')

const GoogleCloudVisionV1p3beta1LocalizedObjectAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description: 'Image region to which this object belongs. This must be populated.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Set of detected objects with bounding boxes.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation')

const GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotationSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Prediction for what the object in the bounding box is.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation')

const GoogleCloudVisionV1p3beta1ProductKeyValueSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
  })
  .openapi({ description: 'A product label represented as a key-value pair.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1ProductKeyValue')

const GoogleCloudVisionV1p3beta1ProductSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided metadata to be stored with this product. Must be at most 4096 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.',
      }),
    productCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.',
      }),
    productLabels: z
      .array(GoogleCloudVisionV1p3beta1ProductKeyValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.',
      }),
  })
  .openapi({ description: 'A Product contains ReferenceImages.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1Product')

const GoogleCloudVisionV1p3beta1ProductSearchResultsResultSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the image from the product that is the closest match to the query.',
      }),
    product: GoogleCloudVisionV1p3beta1ProductSchema.exactOptional().openapi({
      description: 'The Product.',
    }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
      }),
  })
  .openapi({ description: 'Information about a product.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1ProductSearchResultsResult')

const GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResultSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p3beta1BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon around the product detected in the query image.',
    }),
    objectAnnotations: z
      .array(GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'List of generic predictions for the object in the bounding box.' }),
    results: z
      .array(GoogleCloudVisionV1p3beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({
    description: 'Information about the products similar to a single product in a query image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult')

const GoogleCloudVisionV1p3beta1ProductSearchResultsSchema = z
  .object({
    indexTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.',
      }),
    productGroupedResults: z
      .array(GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResultSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.',
      }),
    results: z
      .array(GoogleCloudVisionV1p3beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({ description: 'Results for a product search request.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1ProductSearchResults')

const GoogleCloudVisionV1p3beta1SafeSearchAnnotationSchema = z
  .object({
    adult: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.',
      }),
    medical: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Likelihood that this is a medical image.' }),
    racy: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.',
      }),
    spoof: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          "Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
      }),
    violence: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.',
      }),
  })
  .openapi({
    description:
      'Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1SafeSearchAnnotation')

const GoogleCloudVisionV1p3beta1WebDetectionWebLabelSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'Label for extra metadata.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Label to provide extra metadata for the web detection.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1WebDetectionWebLabel')

const GoogleCloudVisionV1p3beta1WebDetectionWebImageSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the image.' }),
    url: z.string().exactOptional().openapi({ description: 'The result image URL.' }),
  })
  .openapi({ description: 'Metadata for online images.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1WebDetectionWebImage')

const GoogleCloudVisionV1p3beta1WebDetectionWebPageSchema = z
  .object({
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images on the page. Can include resized copies of the query image.',
      }),
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the web page, may contain HTML markups.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the web page.' }),
    url: z.string().exactOptional().openapi({ description: 'The result web page URL.' }),
  })
  .openapi({ description: 'Metadata for web pages.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1WebDetectionWebPage')

const GoogleCloudVisionV1p3beta1WebDetectionWebEntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Canonical description of the entity, in English.' }),
    entityId: z.string().exactOptional().openapi({ description: 'Opaque entity ID.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Overall relevancy score for the entity. Not normalized and not comparable across different image queries.',
      }),
  })
  .openapi({ description: 'Entity deduced from similar images on the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1WebDetectionWebEntity')

const GoogleCloudVisionV1p3beta1WebDetectionSchema = z
  .object({
    bestGuessLabels: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebLabelSchema)
      .exactOptional()
      .openapi({
        description:
          "The service's best guess as to the topic of the request image. Inferred from similar images on the open web.",
      }),
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images from the Internet. Can include resized copies of the query image.',
      }),
    pagesWithMatchingImages: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebPageSchema)
      .exactOptional()
      .openapi({ description: 'Web pages containing the matching images from the Internet.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    visuallySimilarImages: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({ description: 'The visually similar image results.' }),
    webEntities: z
      .array(GoogleCloudVisionV1p3beta1WebDetectionWebEntitySchema)
      .exactOptional()
      .openapi({ description: 'Deduced entities from similar images on the Internet.' }),
  })
  .openapi({ description: 'Relevant information for the image from the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1WebDetection')

const GoogleCloudVisionV1p3beta1AnnotateImageResponseSchema = z
  .object({
    context: GoogleCloudVisionV1p3beta1ImageAnnotationContextSchema.exactOptional().openapi({
      description:
        'If present, contextual information is needed to understand where this image comes from.',
    }),
    cropHintsAnnotation:
      GoogleCloudVisionV1p3beta1CropHintsAnnotationSchema.exactOptional().openapi({
        description: 'If present, crop hints have completed successfully.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.',
    }),
    faceAnnotations: z
      .array(GoogleCloudVisionV1p3beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, face detection has completed successfully.' }),
    fullTextAnnotation: GoogleCloudVisionV1p3beta1TextAnnotationSchema.exactOptional().openapi({
      description:
        'If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.',
    }),
    imagePropertiesAnnotation:
      GoogleCloudVisionV1p3beta1ImagePropertiesSchema.exactOptional().openapi({
        description: 'If present, image properties were extracted successfully.',
      }),
    labelAnnotations: z
      .array(GoogleCloudVisionV1p3beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, label detection has completed successfully.' }),
    landmarkAnnotations: z
      .array(GoogleCloudVisionV1p3beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, landmark detection has completed successfully.' }),
    localizedObjectAnnotations: z
      .array(GoogleCloudVisionV1p3beta1LocalizedObjectAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'If present, localized object detection has completed successfully. This will be sorted descending by confidence score.',
      }),
    logoAnnotations: z
      .array(GoogleCloudVisionV1p3beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, logo detection has completed successfully.' }),
    productSearchResults:
      GoogleCloudVisionV1p3beta1ProductSearchResultsSchema.exactOptional().openapi({
        description: 'If present, product search has completed successfully.',
      }),
    safeSearchAnnotation:
      GoogleCloudVisionV1p3beta1SafeSearchAnnotationSchema.exactOptional().openapi({
        description: 'If present, safe-search annotation has completed successfully.',
      }),
    textAnnotations: z
      .array(GoogleCloudVisionV1p3beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, text (OCR) detection has completed successfully.' }),
    webDetection: GoogleCloudVisionV1p3beta1WebDetectionSchema.exactOptional().openapi({
      description: 'If present, web detection has completed successfully.',
    }),
  })
  .openapi({ description: 'Response to an image annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1AnnotateImageResponse')

const GoogleCloudVisionV1p3beta1AnnotateFileResponseSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the failed request. The `responses` field will not be set in this case.',
    }),
    inputConfig: GoogleCloudVisionV1p3beta1InputConfigSchema.exactOptional().openapi({
      description: 'Information about the file for which this response is generated.',
    }),
    responses: z
      .array(GoogleCloudVisionV1p3beta1AnnotateImageResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual responses to images found within the file. This field will be empty if the `error` field is set.',
      }),
    totalPages: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This field gives the total number of pages in the file.' }),
  })
  .openapi({
    description:
      'Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1AnnotateFileResponse')

const GoogleCloudVisionV1p3beta1GcsDestinationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the output will be written to.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1GcsDestination')

const GoogleCloudVisionV1p3beta1OutputConfigSchema = z
  .object({
    batchSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.',
      }),
    gcsDestination: GoogleCloudVisionV1p3beta1GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output(s) to.',
    }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1OutputConfig')

const GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponseSchema = z
  .object({
    outputConfig: GoogleCloudVisionV1p3beta1OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncAnnotateFileRequest.',
    }),
  })
  .openapi({
    description: 'The response for a single offline file annotation request.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse')

const GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'Response to an async batch file annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse')

const GoogleCloudVisionV1p3beta1BatchOperationMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the batch request is finished and google.longrunning.Operation.done is set to true.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROCESSING', 'SUCCESSFUL', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The current state of the batch operation.' }),
    submitTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was submitted to the server.' }),
  })
  .openapi({
    description:
      'Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1BatchOperationMetadata')

const GoogleCloudVisionV1p3beta1ReferenceImageSchema = z
  .object({
    boundingPolys: z
      .array(GoogleCloudVisionV1p3beta1BoundingPolySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.',
      }),
  })
  .openapi({
    description:
      'A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1ReferenceImage')

const GoogleCloudVisionV1p3beta1ImportProductSetsResponseSchema = z
  .object({
    referenceImages: z
      .array(GoogleCloudVisionV1p3beta1ReferenceImageSchema)
      .exactOptional()
      .openapi({ description: 'The list of reference_images that are imported successfully.' }),
    statuses: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.',
      }),
  })
  .openapi({
    description:
      'Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1ImportProductSetsResponse')

const GoogleCloudVisionV1p3beta1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was received.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATED', 'RUNNING', 'DONE', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Current state of the batch operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation result was last updated.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchAnnotateImages operation.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p3beta1OperationMetadata')

const GoogleCloudVisionV1p4beta1GcsSourceSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the input will be read from.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1GcsSource')

const GoogleCloudVisionV1p4beta1InputConfigSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.',
      }),
    gcsSource: GoogleCloudVisionV1p4beta1GcsSourceSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to read the input from.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.',
      }),
  })
  .openapi({ description: 'The desired input location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1InputConfig')

const GoogleCloudVisionV1p4beta1ImageAnnotationContextSchema = z
  .object({
    pageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the file used to produce the image.' }),
  })
  .openapi({
    description:
      'If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1ImageAnnotationContext')

const GoogleCloudVisionV1p4beta1NormalizedVertexSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1NormalizedVertex')

const GoogleCloudVisionV1p4beta1VertexSchema = z
  .object({
    x: z.int32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.int32().exactOptional().openapi({ description: 'Y coordinate.' }),
  })
  .openapi({
    description:
      'A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1Vertex')

const GoogleCloudVisionV1p4beta1BoundingPolySchema = z
  .object({
    normalizedVertices: z
      .array(GoogleCloudVisionV1p4beta1NormalizedVertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon normalized vertices.' }),
    vertices: z
      .array(GoogleCloudVisionV1p4beta1VertexSchema)
      .exactOptional()
      .openapi({ description: 'The bounding polygon vertices.' }),
  })
  .openapi({ description: 'A bounding polygon for the detected image annotation.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1BoundingPoly')

const GoogleCloudVisionV1p4beta1CropHintSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of this being a salient region. Range [0, 1].' }),
    importanceFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Fraction of importance of this salient region with respect to the original image.',
      }),
  })
  .openapi({
    description: 'Single crop hint that is used to generate a new crop when serving an image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1CropHint')

const GoogleCloudVisionV1p4beta1CropHintsAnnotationSchema = z
  .object({
    cropHints: z
      .array(GoogleCloudVisionV1p4beta1CropHintSchema)
      .exactOptional()
      .openapi({ description: 'Crop hint results.' }),
  })
  .openapi({
    description: 'Set of crop hints that are used to generate new crops when serving images.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1CropHintsAnnotation')

const GoogleCloudVisionV1p4beta1PositionSchema = z
  .object({
    x: z.float32().exactOptional().openapi({ description: 'X coordinate.' }),
    y: z.float32().exactOptional().openapi({ description: 'Y coordinate.' }),
    z: z.float32().exactOptional().openapi({ description: 'Z coordinate (or depth).' }),
  })
  .openapi({
    description:
      'A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1Position')

const GoogleCloudVisionV1p4beta1FaceAnnotationLandmarkSchema = z
  .object({
    position: GoogleCloudVisionV1p4beta1PositionSchema.exactOptional().openapi({
      description: 'Face landmark position.',
    }),
    type: z
      .enum([
        'UNKNOWN_LANDMARK',
        'LEFT_EYE',
        'RIGHT_EYE',
        'LEFT_OF_LEFT_EYEBROW',
        'RIGHT_OF_LEFT_EYEBROW',
        'LEFT_OF_RIGHT_EYEBROW',
        'RIGHT_OF_RIGHT_EYEBROW',
        'MIDPOINT_BETWEEN_EYES',
        'NOSE_TIP',
        'UPPER_LIP',
        'LOWER_LIP',
        'MOUTH_LEFT',
        'MOUTH_RIGHT',
        'MOUTH_CENTER',
        'NOSE_BOTTOM_RIGHT',
        'NOSE_BOTTOM_LEFT',
        'NOSE_BOTTOM_CENTER',
        'LEFT_EYE_TOP_BOUNDARY',
        'LEFT_EYE_RIGHT_CORNER',
        'LEFT_EYE_BOTTOM_BOUNDARY',
        'LEFT_EYE_LEFT_CORNER',
        'RIGHT_EYE_TOP_BOUNDARY',
        'RIGHT_EYE_RIGHT_CORNER',
        'RIGHT_EYE_BOTTOM_BOUNDARY',
        'RIGHT_EYE_LEFT_CORNER',
        'LEFT_EYEBROW_UPPER_MIDPOINT',
        'RIGHT_EYEBROW_UPPER_MIDPOINT',
        'LEFT_EAR_TRAGION',
        'RIGHT_EAR_TRAGION',
        'LEFT_EYE_PUPIL',
        'RIGHT_EYE_PUPIL',
        'FOREHEAD_GLABELLA',
        'CHIN_GNATHION',
        'CHIN_LEFT_GONION',
        'CHIN_RIGHT_GONION',
        'LEFT_CHEEK_CENTER',
        'RIGHT_CHEEK_CENTER',
      ])
      .exactOptional()
      .openapi({ description: 'Face landmark type.' }),
  })
  .openapi({ description: 'A face-specific landmark (for example, a face feature).', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1FaceAnnotationLandmark')

const GoogleCloudVisionV1p4beta1CelebritySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "The Celebrity's description." }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The Celebrity's display name." }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`.',
      }),
  })
  .openapi({ description: 'A Celebrity is a group of Faces with an identity.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1Celebrity')

const GoogleCloudVisionV1p4beta1FaceRecognitionResultSchema = z
  .object({
    celebrity: GoogleCloudVisionV1p4beta1CelebritySchema.exactOptional().openapi({
      description: 'The Celebrity that this face was matched to.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Recognition confidence. Range [0, 1].' }),
  })
  .openapi({ description: "Information about a face's identity.", required: [] })
  .openapi('GoogleCloudVisionV1p4beta1FaceRecognitionResult')

const GoogleCloudVisionV1p4beta1FaceAnnotationSchema = z
  .object({
    angerLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Anger likelihood.' }),
    blurredLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Blurred likelihood.' }),
    boundingPoly: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The bounding polygon around the face. The coordinates of the bounding box are in the original image\'s scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.',
    }),
    detectionConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Detection confidence. Range [0, 1].' }),
    fdBoundingPoly: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.',
    }),
    headwearLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Headwear likelihood.' }),
    joyLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Joy likelihood.' }),
    landmarkingConfidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Face landmarking confidence. Range [0, 1].' }),
    landmarks: z
      .array(GoogleCloudVisionV1p4beta1FaceAnnotationLandmarkSchema)
      .exactOptional()
      .openapi({ description: 'Detected face landmarks.' }),
    panAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].',
      }),
    recognitionResult: z
      .array(GoogleCloudVisionV1p4beta1FaceRecognitionResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional recognition information. Only computed if image_context.face_recognition_params is provided, **and** a match is found to a Celebrity in the input CelebritySet. This field is sorted in order of decreasing confidence values.',
      }),
    rollAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].',
      }),
    sorrowLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Sorrow likelihood.' }),
    surpriseLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Surprise likelihood.' }),
    tiltAngle: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].",
      }),
    underExposedLikelihood: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Under-exposed likelihood.' }),
  })
  .openapi({
    description: 'A face annotation object contains the results of face detection.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1FaceAnnotation')

const GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreakSchema = z
  .object({
    isPrefix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if break prepends the element.' }),
    type: z
      .enum(['UNKNOWN', 'SPACE', 'SURE_SPACE', 'EOL_SURE_SPACE', 'HYPHEN', 'LINE_BREAK'])
      .exactOptional()
      .openapi({ description: 'Detected break type.' }),
  })
  .openapi({ description: 'Detected start or end of a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak')

const GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguageSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of detected language. Range [0, 1].' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Detected language for a structural component.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage')

const GoogleCloudVisionV1p4beta1TextAnnotationTextPropertySchema = z
  .object({
    detectedBreak:
      GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreakSchema.exactOptional().openapi({
        description: 'Detected start or end of a text segment.',
      }),
    detectedLanguages: z
      .array(GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguageSchema)
      .exactOptional()
      .openapi({ description: 'A list of detected languages together with confidence.' }),
  })
  .openapi({
    description: 'Additional information detected on the structural component.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1TextAnnotationTextProperty')

const GoogleCloudVisionV1p4beta1SymbolSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the symbol. Range [0, 1].' }),
    property: GoogleCloudVisionV1p4beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the symbol.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual UTF-8 representation of the symbol.' }),
  })
  .openapi({ description: 'A single symbol representation.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1Symbol')

const GoogleCloudVisionV1p4beta1WordSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the word. Range [0, 1].' }),
    property: GoogleCloudVisionV1p4beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the word.',
    }),
    symbols: z
      .array(GoogleCloudVisionV1p4beta1SymbolSchema)
      .exactOptional()
      .openapi({
        description:
          'List of symbols in the word. The order of the symbols follows the natural reading order.',
      }),
  })
  .openapi({ description: 'A word representation.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1Word')

const GoogleCloudVisionV1p4beta1ParagraphSchema = z
  .object({
    boundingBox: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results for the paragraph. Range [0, 1].' }),
    property: GoogleCloudVisionV1p4beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the paragraph.',
    }),
    words: z
      .array(GoogleCloudVisionV1p4beta1WordSchema)
      .exactOptional()
      .openapi({ description: 'List of all words in this paragraph.' }),
  })
  .openapi({
    description: 'Structural unit of text representing a number of words in certain order.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1Paragraph')

const GoogleCloudVisionV1p4beta1BlockSchema = z
  .object({
    blockType: z
      .enum(['UNKNOWN', 'TEXT', 'TABLE', 'PICTURE', 'RULER', 'BARCODE'])
      .exactOptional()
      .openapi({ description: 'Detected block type (text, image etc) for this block.' }),
    boundingBox: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        "The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).",
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the block. Range [0, 1].' }),
    paragraphs: z
      .array(GoogleCloudVisionV1p4beta1ParagraphSchema)
      .exactOptional()
      .openapi({
        description: 'List of paragraphs in this block (if this blocks is of type text).',
      }),
    property: GoogleCloudVisionV1p4beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected for the block.',
    }),
  })
  .openapi({ description: 'Logical element on the page.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1Block')

const GoogleCloudVisionV1p4beta1PageSchema = z
  .object({
    blocks: z
      .array(GoogleCloudVisionV1p4beta1BlockSchema)
      .exactOptional()
      .openapi({ description: 'List of blocks of text, images etc on this page.' }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Confidence of the OCR results on the page. Range [0, 1].' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
    property: GoogleCloudVisionV1p4beta1TextAnnotationTextPropertySchema.exactOptional().openapi({
      description: 'Additional information detected on the page.',
    }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.',
      }),
  })
  .openapi({ description: 'Detected page from OCR.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1Page')

const GoogleCloudVisionV1p4beta1TextAnnotationSchema = z
  .object({
    pages: z
      .array(GoogleCloudVisionV1p4beta1PageSchema)
      .exactOptional()
      .openapi({ description: 'List of pages detected by OCR.' }),
    text: z.string().exactOptional().openapi({ description: 'UTF-8 text detected on the pages.' }),
  })
  .openapi({
    description:
      'TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1TextAnnotation')

const GoogleCloudVisionV1p4beta1ColorInfoSchema = z
  .object({
    color: ColorSchema.exactOptional().openapi({ description: 'RGB components of the color.' }),
    pixelFraction: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of pixels the color occupies in the image. Value in range [0, 1].',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Image-specific score for this color. Value in range [0, 1].' }),
  })
  .openapi({
    description:
      'Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1ColorInfo')

const GoogleCloudVisionV1p4beta1DominantColorsAnnotationSchema = z
  .object({
    colors: z
      .array(GoogleCloudVisionV1p4beta1ColorInfoSchema)
      .exactOptional()
      .openapi({ description: 'RGB color values with their score and pixel fraction.' }),
  })
  .openapi({ description: 'Set of dominant colors and their corresponding scores.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1DominantColorsAnnotation')

const GoogleCloudVisionV1p4beta1ImagePropertiesSchema = z
  .object({
    dominantColors:
      GoogleCloudVisionV1p4beta1DominantColorsAnnotationSchema.exactOptional().openapi({
        description: 'If present, dominant colors completed successfully.',
      }),
  })
  .openapi({ description: 'Stores image properties, such as dominant colors.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1ImageProperties')

const GoogleCloudVisionV1p4beta1LocationInfoSchema = z
  .object({
    latLng: LatLngSchema.exactOptional().openapi({ description: 'lat/long location coordinates.' }),
  })
  .openapi({ description: 'Detected entity location information.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1LocationInfo')

const GoogleCloudVisionV1p4beta1PropertySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the property.' }),
    uint64Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of numeric properties.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the property.' }),
  })
  .openapi({
    description: 'A `Property` consists of a user-supplied name/value pair.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1Property')

const GoogleCloudVisionV1p4beta1EntityAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description:
        'Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.',
    }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Entity textual description, expressed in its `locale` language.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code for the locale in which the entity textual `description` is expressed.',
      }),
    locations: z
      .array(GoogleCloudVisionV1p4beta1LocationInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).',
      }),
    properties: z
      .array(GoogleCloudVisionV1p4beta1PropertySchema)
      .exactOptional()
      .openapi({
        description:
          'Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Overall score of the result. Range [0, 1].' }),
    topicality: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].',
      }),
  })
  .openapi({ description: 'Set of detected entity features.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1EntityAnnotation')

const GoogleCloudVisionV1p4beta1LocalizedObjectAnnotationSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description: 'Image region to which this object belongs. This must be populated.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Set of detected objects with bounding boxes.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation')

const GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotationSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    mid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object ID that should align with EntityAnnotation mid.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object name, expressed in its `language_code` language.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Score of the result. Range [0, 1].' }),
  })
  .openapi({ description: 'Prediction for what the object in the bounding box is.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation')

const GoogleCloudVisionV1p4beta1ProductKeyValueSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.',
      }),
  })
  .openapi({ description: 'A product label represented as a key-value pair.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1ProductKeyValue')

const GoogleCloudVisionV1p4beta1ProductSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided metadata to be stored with this product. Must be at most 4096 characters long.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.',
      }),
    productCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.',
      }),
    productLabels: z
      .array(GoogleCloudVisionV1p4beta1ProductKeyValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.',
      }),
  })
  .openapi({ description: 'A Product contains ReferenceImages.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1Product')

const GoogleCloudVisionV1p4beta1ProductSearchResultsResultSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the image from the product that is the closest match to the query.',
      }),
    product: GoogleCloudVisionV1p4beta1ProductSchema.exactOptional().openapi({
      description: 'The Product.',
    }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).',
      }),
  })
  .openapi({ description: 'Information about a product.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1ProductSearchResultsResult')

const GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResultSchema = z
  .object({
    boundingPoly: GoogleCloudVisionV1p4beta1BoundingPolySchema.exactOptional().openapi({
      description: 'The bounding polygon around the product detected in the query image.',
    }),
    objectAnnotations: z
      .array(GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'List of generic predictions for the object in the bounding box.' }),
    results: z
      .array(GoogleCloudVisionV1p4beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({
    description: 'Information about the products similar to a single product in a query image.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult')

const GoogleCloudVisionV1p4beta1ProductSearchResultsSchema = z
  .object({
    indexTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.',
      }),
    productGroupedResults: z
      .array(GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResultSchema)
      .exactOptional()
      .openapi({
        description:
          'List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.',
      }),
    results: z
      .array(GoogleCloudVisionV1p4beta1ProductSearchResultsResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results, one for each product match.' }),
  })
  .openapi({ description: 'Results for a product search request.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1ProductSearchResults')

const GoogleCloudVisionV1p4beta1SafeSearchAnnotationSchema = z
  .object({
    adult: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.',
      }),
    medical: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({ description: 'Likelihood that this is a medical image.' }),
    racy: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.',
      }),
    spoof: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          "Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.",
      }),
    violence: z
      .enum(['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'])
      .exactOptional()
      .openapi({
        description:
          'Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.',
      }),
  })
  .openapi({
    description:
      'Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1SafeSearchAnnotation')

const GoogleCloudVisionV1p4beta1WebDetectionWebLabelSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'Label for extra metadata.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
  })
  .openapi({ description: 'Label to provide extra metadata for the web detection.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1WebDetectionWebLabel')

const GoogleCloudVisionV1p4beta1WebDetectionWebImageSchema = z
  .object({
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the image.' }),
    url: z.string().exactOptional().openapi({ description: 'The result image URL.' }),
  })
  .openapi({ description: 'Metadata for online images.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1WebDetectionWebImage')

const GoogleCloudVisionV1p4beta1WebDetectionWebPageSchema = z
  .object({
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images on the page. Can include resized copies of the query image.',
      }),
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title for the web page, may contain HTML markups.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: '(Deprecated) Overall relevancy score for the web page.' }),
    url: z.string().exactOptional().openapi({ description: 'The result web page URL.' }),
  })
  .openapi({ description: 'Metadata for web pages.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1WebDetectionWebPage')

const GoogleCloudVisionV1p4beta1WebDetectionWebEntitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Canonical description of the entity, in English.' }),
    entityId: z.string().exactOptional().openapi({ description: 'Opaque entity ID.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Overall relevancy score for the entity. Not normalized and not comparable across different image queries.',
      }),
  })
  .openapi({ description: 'Entity deduced from similar images on the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1WebDetectionWebEntity')

const GoogleCloudVisionV1p4beta1WebDetectionSchema = z
  .object({
    bestGuessLabels: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebLabelSchema)
      .exactOptional()
      .openapi({
        description:
          "The service's best guess as to the topic of the request image. Inferred from similar images on the open web.",
      }),
    fullMatchingImages: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Fully matching images from the Internet. Can include resized copies of the query image.',
      }),
    pagesWithMatchingImages: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebPageSchema)
      .exactOptional()
      .openapi({ description: 'Web pages containing the matching images from the Internet.' }),
    partialMatchingImages: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.',
      }),
    visuallySimilarImages: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebImageSchema)
      .exactOptional()
      .openapi({ description: 'The visually similar image results.' }),
    webEntities: z
      .array(GoogleCloudVisionV1p4beta1WebDetectionWebEntitySchema)
      .exactOptional()
      .openapi({ description: 'Deduced entities from similar images on the Internet.' }),
  })
  .openapi({ description: 'Relevant information for the image from the Internet.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1WebDetection')

const GoogleCloudVisionV1p4beta1AnnotateImageResponseSchema = z
  .object({
    context: GoogleCloudVisionV1p4beta1ImageAnnotationContextSchema.exactOptional().openapi({
      description:
        'If present, contextual information is needed to understand where this image comes from.',
    }),
    cropHintsAnnotation:
      GoogleCloudVisionV1p4beta1CropHintsAnnotationSchema.exactOptional().openapi({
        description: 'If present, crop hints have completed successfully.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.',
    }),
    faceAnnotations: z
      .array(GoogleCloudVisionV1p4beta1FaceAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, face detection has completed successfully.' }),
    fullTextAnnotation: GoogleCloudVisionV1p4beta1TextAnnotationSchema.exactOptional().openapi({
      description:
        'If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.',
    }),
    imagePropertiesAnnotation:
      GoogleCloudVisionV1p4beta1ImagePropertiesSchema.exactOptional().openapi({
        description: 'If present, image properties were extracted successfully.',
      }),
    labelAnnotations: z
      .array(GoogleCloudVisionV1p4beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, label detection has completed successfully.' }),
    landmarkAnnotations: z
      .array(GoogleCloudVisionV1p4beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, landmark detection has completed successfully.' }),
    localizedObjectAnnotations: z
      .array(GoogleCloudVisionV1p4beta1LocalizedObjectAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'If present, localized object detection has completed successfully. This will be sorted descending by confidence score.',
      }),
    logoAnnotations: z
      .array(GoogleCloudVisionV1p4beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, logo detection has completed successfully.' }),
    productSearchResults:
      GoogleCloudVisionV1p4beta1ProductSearchResultsSchema.exactOptional().openapi({
        description: 'If present, product search has completed successfully.',
      }),
    safeSearchAnnotation:
      GoogleCloudVisionV1p4beta1SafeSearchAnnotationSchema.exactOptional().openapi({
        description: 'If present, safe-search annotation has completed successfully.',
      }),
    textAnnotations: z
      .array(GoogleCloudVisionV1p4beta1EntityAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'If present, text (OCR) detection has completed successfully.' }),
    webDetection: GoogleCloudVisionV1p4beta1WebDetectionSchema.exactOptional().openapi({
      description: 'If present, web detection has completed successfully.',
    }),
  })
  .openapi({ description: 'Response to an image annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1AnnotateImageResponse')

const GoogleCloudVisionV1p4beta1AnnotateFileResponseSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description:
        'If set, represents the error message for the failed request. The `responses` field will not be set in this case.',
    }),
    inputConfig: GoogleCloudVisionV1p4beta1InputConfigSchema.exactOptional().openapi({
      description: 'Information about the file for which this response is generated.',
    }),
    responses: z
      .array(GoogleCloudVisionV1p4beta1AnnotateImageResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual responses to images found within the file. This field will be empty if the `error` field is set.',
      }),
    totalPages: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This field gives the total number of pages in the file.' }),
  })
  .openapi({
    description:
      'Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1AnnotateFileResponse')

const GoogleCloudVisionV1p4beta1GcsDestinationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.',
      }),
  })
  .openapi({
    description: 'The Google Cloud Storage location where the output will be written to.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1GcsDestination')

const GoogleCloudVisionV1p4beta1OutputConfigSchema = z
  .object({
    batchSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.',
      }),
    gcsDestination: GoogleCloudVisionV1p4beta1GcsDestinationSchema.exactOptional().openapi({
      description: 'The Google Cloud Storage location to write the output(s) to.',
    }),
  })
  .openapi({ description: 'The desired output location and metadata.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1OutputConfig')

const GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponseSchema = z
  .object({
    outputConfig: GoogleCloudVisionV1p4beta1OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncAnnotateFileRequest.',
    }),
  })
  .openapi({
    description: 'The response for a single offline file annotation request.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse')

const GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'Response to an async batch file annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse')

const GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponseSchema = z
  .object({
    outputConfig: GoogleCloudVisionV1p4beta1OutputConfigSchema.exactOptional().openapi({
      description: 'The output location and metadata from AsyncBatchAnnotateImagesRequest.',
    }),
  })
  .openapi({ description: 'Response to an async batch image annotation request.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse')

const GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponseSchema = z
  .object({
    responses: z
      .array(GoogleCloudVisionV1p4beta1AnnotateFileResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.',
      }),
  })
  .openapi({ description: 'A list of file annotation responses.', required: [] })
  .openapi('GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse')

const GoogleCloudVisionV1p4beta1BatchOperationMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the batch request is finished and google.longrunning.Operation.done is set to true.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROCESSING', 'SUCCESSFUL', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The current state of the batch operation.' }),
    submitTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was submitted to the server.' }),
  })
  .openapi({
    description:
      'Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1BatchOperationMetadata')

const GoogleCloudVisionV1p4beta1ReferenceImageSchema = z
  .object({
    boundingPolys: z
      .array(GoogleCloudVisionV1p4beta1BoundingPolySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.',
      }),
  })
  .openapi({
    description:
      'A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1ReferenceImage')

const GoogleCloudVisionV1p4beta1ImportProductSetsResponseSchema = z
  .object({
    referenceImages: z
      .array(GoogleCloudVisionV1p4beta1ReferenceImageSchema)
      .exactOptional()
      .openapi({ description: 'The list of reference_images that are imported successfully.' }),
    statuses: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.',
      }),
  })
  .openapi({
    description:
      'Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1ImportProductSetsResponse')

const GoogleCloudVisionV1p4beta1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was received.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATED', 'RUNNING', 'DONE', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Current state of the batch operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation result was last updated.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchAnnotateImages operation.',
    required: [],
  })
  .openapi('GoogleCloudVisionV1p4beta1OperationMetadata')

const ReferenceImageSchema = z
  .object({
    boundingPolys: z
      .array(BoundingPolySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.',
      }),
  })
  .openapi({
    description:
      'A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.',
    required: [],
  })
  .openapi('ReferenceImage')

const ImportProductSetsResponseSchema = z
  .object({
    referenceImages: z
      .array(ReferenceImageSchema)
      .exactOptional()
      .openapi({ description: 'The list of reference_images that are imported successfully.' }),
    statuses: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.',
      }),
  })
  .openapi({
    description:
      'Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.',
    required: [],
  })
  .openapi('ImportProductSetsResponse')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was received.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATED', 'RUNNING', 'DONE', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Current state of the batch operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation result was last updated.' }),
  })
  .openapi({
    description: 'Contains metadata for the BatchAnnotateImages operation.',
    required: [],
  })
  .openapi('OperationMetadata')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-vision':
          'Apply machine learning models to understand and label images',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-vision':
          'Apply machine learning models to understand and label images',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1p1beta1FilesAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/files:annotate',
  tags: ['files'],
  description:
    'Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.',
  operationId: 'vision.files.annotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1FilesAsyncBatchAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/files:asyncBatchAnnotate',
  tags: ['files'],
  description:
    'Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).',
  operationId: 'vision.files.asyncBatchAnnotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1ImagesAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/images:annotate',
  tags: ['images'],
  description: 'Run image detection and annotation for a batch of images.',
  operationId: 'vision.images.annotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1ImagesAsyncBatchAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/images:asyncBatchAnnotate',
  tags: ['images'],
  description:
    'Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.',
  operationId: 'vision.images.asyncBatchAnnotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1ParentFilesAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/{parent}/files:annotate',
  tags: ['projects'],
  description:
    'Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.',
  operationId: 'vision.projects.locations.files.annotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1ParentFilesAsyncBatchAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/{parent}/files:asyncBatchAnnotate',
  tags: ['projects'],
  description:
    'Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).',
  operationId: 'vision.projects.locations.files.asyncBatchAnnotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1ParentImagesAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/{parent}/images:annotate',
  tags: ['projects'],
  description: 'Run image detection and annotation for a batch of images.',
  operationId: 'vision.projects.locations.images.annotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})

export const postV1p1beta1ParentImagesAsyncBatchAnnotateRoute = createRoute({
  method: 'post',
  path: '/v1p1beta1/{parent}/images:asyncBatchAnnotate',
  tags: ['projects'],
  description:
    'Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.',
  operationId: 'vision.projects.locations.images.asyncBatchAnnotate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-vision'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-vision'],
    },
  ],
})
