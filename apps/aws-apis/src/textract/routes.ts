import { createRoute, z } from '@hono/zod-openapi'

const UIntegerSchema = z.int().min(0).openapi('UInteger')

const DocumentMetadataSchema = z
  .object({
    Pages: UIntegerSchema.and(
      z.any().openapi({ description: 'The number of pages that are detected in the document.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the input document.', required: [] })
  .openapi('DocumentMetadata')

const BlockTypeSchema = z
  .enum([
    'KEY_VALUE_SET',
    'PAGE',
    'LINE',
    'WORD',
    'TABLE',
    'CELL',
    'SELECTION_ELEMENT',
    'MERGED_CELL',
    'TITLE',
    'QUERY',
    'QUERY_RESULT',
    'SIGNATURE',
    'TABLE_TITLE',
    'TABLE_FOOTER',
  ])
  .openapi('BlockType')

const PercentSchema = z.float32().min(0).max(100).openapi('Percent')

const StringSchema = z.string().openapi('String')

const TextTypeSchema = z.enum(['HANDWRITING', 'PRINTED']).openapi('TextType')

const FloatSchema = z.float32().openapi('Float')

const BoundingBoxSchema = z
  .object({
    Width: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The width of the bounding box as a ratio of the overall document page width.',
        }),
    ).exactOptional(),
    Height: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The height of the bounding box as a ratio of the overall document page height.',
        }),
    ).exactOptional(),
    Left: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The left coordinate of the bounding box as a ratio of overall document page width.',
        }),
    ).exactOptional(),
    Top: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The top coordinate of the bounding box as a ratio of overall document page height.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall document page size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall document page dimension. For example, if the document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>',
    required: [],
  })
  .openapi('BoundingBox')

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
      '<p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p>',
    required: [],
  })
  .openapi('Point')

const PolygonSchema = z.array(PointSchema).openapi('Polygon')

const GeometrySchema = z
  .object({
    BoundingBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            'An axis-aligned coarse representation of the location of the recognized item on the document page.',
        }),
    ).exactOptional(),
    Polygon: PolygonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Within the bounding box, a fine-grained polygon around the recognized item.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.',
    required: [],
  })
  .openapi('Geometry')

const NonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('NonEmptyString')

const RelationshipTypeSchema = z
  .enum([
    'VALUE',
    'CHILD',
    'COMPLEX_FEATURES',
    'MERGED_CELL',
    'TITLE',
    'ANSWER',
    'TABLE',
    'TABLE_TITLE',
    'TABLE_FOOTER',
  ])
  .openapi('RelationshipType')

const IdListSchema = z.array(NonEmptyStringSchema).openapi('IdList')

const RelationshipSchema = z
  .object({
    Type: RelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of relationship between the blocks in the IDs array and the current block. The following list describes the relationship types that can be returned. </p> <ul> <li> <p> <i>VALUE</i> - A list that contains the ID of the VALUE block that's associated with the KEY of a key-value pair.</p> </li> <li> <p> <i>CHILD</i> - A list of IDs that identify blocks found within the current block object. For example, WORD blocks have a CHILD relationship to the LINE block type.</p> </li> <li> <p> <i>MERGED_CELL</i> - A list of IDs that identify each of the MERGED_CELL block types in a table.</p> </li> <li> <p> <i>ANSWER</i> - A list that contains the ID of the QUERY_RESULT block that’s associated with the corresponding QUERY block. </p> </li> <li> <p> <i>TABLE</i> - A list of IDs that identify associated TABLE block types. </p> </li> <li> <p> <i>TABLE_TITLE</i> - A list that contains the ID for the TABLE_TITLE block type in a table. </p> </li> <li> <p> <i>TABLE_FOOTER</i> - A list of IDs that identify the TABLE_FOOTER block types in a table. </p> </li> </ul>",
        }),
    ).exactOptional(),
    Ids: IdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of IDs for related blocks. You can get the type of the relationship from the <code>Type</code> element.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>',
    required: [],
  })
  .openapi('Relationship')

const RelationshipListSchema = z.array(RelationshipSchema).openapi('RelationshipList')

const EntityTypeSchema = z
  .enum([
    'KEY',
    'VALUE',
    'COLUMN_HEADER',
    'TABLE_TITLE',
    'TABLE_FOOTER',
    'TABLE_SECTION_TITLE',
    'TABLE_SUMMARY',
    'STRUCTURED_TABLE',
    'SEMI_STRUCTURED_TABLE',
  ])
  .openapi('EntityType')

const EntityTypesSchema = z.array(EntityTypeSchema).openapi('EntityTypes')

const SelectionStatusSchema = z.enum(['SELECTED', 'NOT_SELECTED']).openapi('SelectionStatus')

const QueryInputSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\s!"\#\$%'&\(\)\*\+\,\-\.\/:;=\?@\[\\\]\^_`\{\|\}~><]+$/)
  .min(1)
  .max(200)
  .openapi('QueryInput')

const QueryPageSchema = z
  .string()
  .regex(/^[0-9\*\-]+$/)
  .min(1)
  .max(9)
  .openapi('QueryPage')

const QueryPagesSchema = z.array(QueryPageSchema).min(1).openapi('QueryPages')

const QuerySchema = z
  .object({
    Text: QueryInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Question that Amazon Textract will apply to the document. An example would be "What is the customer\'s SSN?"',
        }),
    ),
    Alias: QueryInputSchema.and(
      z.any().openapi({ description: 'Alias attached to the query, for ease of location.' }),
    ).exactOptional(),
    Pages: QueryPagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Pages is a parameter that the user inputs to specify which pages to apply a query to. The following is a list of rules for using this parameter.</p> <ul> <li> <p>If a page is not specified, it is set to <code>["1"]</code> by default.</p> </li> <li> <p>The following characters are allowed in the parameter\'s string: <code>0 1 2 3 4 5 6 7 8 9 - *</code>. No whitespace is allowed.</p> </li> <li> <p>When using * to indicate all pages, it must be the only element in the list.</p> </li> <li> <p>You can use page intervals, such as <code>[“1-3”, “1-1”, “4-*”]</code>. Where <code>*</code> indicates last page of document.</p> </li> <li> <p>Specified pages must be greater than 0 and less than or equal to the number of pages in the document.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Text'],
    description:
      'Each query contains the question you want to ask in the Text and the alias you want to associate.',
  })
  .openapi('Query')

const BlockSchema = z
  .object({
    BlockType: BlockTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of text item that's recognized. In operations for text detection, the following types are returned:</p> <ul> <li> <p> <i>PAGE</i> - Contains a list of the LINE <code>Block</code> objects that are detected on a document page.</p> </li> <li> <p> <i>WORD</i> - A word detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.</p> </li> <li> <p> <i>LINE</i> - A string of tab-delimited, contiguous words that are detected on a document page.</p> </li> </ul> <p>In text analysis operations, the following types are returned:</p> <ul> <li> <p> <i>PAGE</i> - Contains a list of child <code>Block</code> objects that are detected on a document page.</p> </li> <li> <p> <i>KEY_VALUE_SET</i> - Stores the KEY and VALUE <code>Block</code> objects for linked text that's detected on a document page. Use the <code>EntityType</code> field to determine if a KEY_VALUE_SET object is a KEY <code>Block</code> object or a VALUE <code>Block</code> object. </p> </li> <li> <p> <i>WORD</i> - A word that's detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces.</p> </li> <li> <p> <i>LINE</i> - A string of tab-delimited, contiguous words that are detected on a document page.</p> </li> <li> <p> <i>TABLE</i> - A table that's detected on a document page. A table is grid-based information with two or more rows or columns, with a cell span of one row and one column each. </p> </li> <li> <p> <i>TABLE_TITLE</i> - The title of a table. A title is typically a line of text above or below a table, or embedded as the first row of a table. </p> </li> <li> <p> <i>TABLE_FOOTER</i> - The footer associated with a table. A footer is typically a line or lines of text below a table or embedded as the last row of a table. </p> </li> <li> <p> <i>CELL</i> - A cell within a detected table. The cell is the parent of the block that contains the text in the cell.</p> </li> <li> <p> <i>MERGED_CELL</i> - A cell in a table whose content spans more than one row or column. The <code>Relationships</code> array for this cell contain data from individual cells.</p> </li> <li> <p> <i>SELECTION_ELEMENT</i> - A selection element such as an option button (radio button) or a check box that's detected on a document page. Use the value of <code>SelectionStatus</code> to determine the status of the selection element.</p> </li> <li> <p> <i>SIGNATURE</i> - The location and confidene score of a signature detected on a document page. Can be returned as part of a Key-Value pair or a detected cell.</p> </li> <li> <p> <i>QUERY</i> - A question asked during the call of AnalyzeDocument. Contains an alias and an ID that attaches it to its answer.</p> </li> <li> <p> <i>QUERY_RESULT</i> - A response to a question asked during the call of analyze document. Comes with an alias and ID for ease of locating in a response. Also contains location and confidence score.</p> </li> </ul>",
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence score that Amazon Textract has in the accuracy of the recognized text and the accuracy of the geometry points around the recognized text.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z
        .any()
        .openapi({
          description: "The word or line of text that's recognized by Amazon Textract. ",
        }),
    ).exactOptional(),
    TextType: TextTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The kind of text that Amazon Textract has detected. Can check for handwritten text and printed text.',
        }),
    ).exactOptional(),
    RowIndex: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The row in which a table cell is located. The first row position is 1. <code>RowIndex</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.",
        }),
    ).exactOptional(),
    ColumnIndex: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The column in which a table cell appears. The first column position is 1. <code>ColumnIndex</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.",
        }),
    ).exactOptional(),
    RowSpan: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of rows that a table cell spans. <code>RowSpan</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.",
        }),
    ).exactOptional(),
    ColumnSpan: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of columns that a table cell spans. <code>ColumnSpan</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>. ",
        }),
    ).exactOptional(),
    Geometry: GeometrySchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the recognized text on the image. It includes an axis-aligned, coarse bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial information. ',
        }),
    ).exactOptional(),
    Id: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the recognized text. The identifier is only unique for a single operation. ',
        }),
    ).exactOptional(),
    Relationships: RelationshipListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of relationship objects that describe how blocks are related to each other. For example, a LINE block object contains a CHILD relationship type with the WORD blocks that make up the line of text. There aren't Relationship objects in the list for relationships that don't exist, such as when the current block has no child blocks.",
        }),
    ).exactOptional(),
    EntityTypes: EntityTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of entity. </p> <p>The following entity types can be returned by FORMS analysis:</p> <ul> <li> <p> <i>KEY</i> - An identifier for a field on the document.</p> </li> <li> <p> <i>VALUE</i> - The field text.</p> </li> </ul> <p>The following entity types can be returned by TABLES analysis:</p> <ul> <li> <p> <i>COLUMN_HEADER</i> - Identifies a cell that is a header of a column. </p> </li> <li> <p> <i>TABLE_TITLE</i> - Identifies a cell that is a title within the table. </p> </li> <li> <p> <i>TABLE_SECTION_TITLE</i> - Identifies a cell that is a title of a section within a table. A section title is a cell that typically spans an entire row above a section. </p> </li> <li> <p> <i>TABLE_FOOTER</i> - Identifies a cell that is a footer of a table. </p> </li> <li> <p> <i>TABLE_SUMMARY</i> - Identifies a summary cell of a table. A summary cell can be a row of a table or an additional, smaller table that contains summary information for another table. </p> </li> <li> <p> <i>STRUCTURED_TABLE </i> - Identifies a table with column headers where the content of each row corresponds to the headers. </p> </li> <li> <p> <i>SEMI_STRUCTURED_TABLE</i> - Identifies a non-structured table. </p> </li> </ul> <p> <code>EntityTypes</code> isn't returned by <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>",
        }),
    ).exactOptional(),
    SelectionStatus: SelectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The selection status of a selection element, such as an option button or check box. ',
        }),
    ).exactOptional(),
    Page: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The page on which a block was detected. <code>Page</code> is returned by synchronous and asynchronous operations. Page values greater than 1 are only returned for multipage documents that are in PDF or TIFF format. A scanned image (JPEG/PNG) provided to an asynchronous operation, even if it contains multiple document pages, is considered a single-page document. This means that for scanned images the value of <code>Page</code> is always 1. Synchronous operations will also return a <code>Page</code> value of 1 because every input document is considered to be a single-page document.',
        }),
    ).exactOptional(),
    Query: QuerySchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({
    description:
      '<p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>',
    required: [],
  })
  .openapi('Block')

const BlockListSchema = z.array(BlockSchema).openapi('BlockList')

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

const AnalyzeDocumentResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'Metadata about the analyzed document. An example is the number of pages.',
        }),
    ).exactOptional(),
    Blocks: BlockListSchema.and(
      z
        .any()
        .openapi({
          description: 'The items that are detected and analyzed by <code>AnalyzeDocument</code>.',
        }),
    ).exactOptional(),
    HumanLoopActivationOutput: HumanLoopActivationOutputSchema.and(
      z.any().openapi({ description: 'Shows the results of the human in the loop evaluation.' }),
    ).exactOptional(),
    AnalyzeDocumentModelVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the model used to analyze the document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyzeDocumentResponse')

const ImageBlobSchema = z.string().min(1).max(10485760).openapi('ImageBlob')

const S3BucketSchema = z
  .string()
  .regex(/[0-9A-Za-z\.\-_]*/)
  .min(3)
  .max(255)
  .openapi('S3Bucket')

const S3ObjectNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectName')

const S3ObjectVersionSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectVersion')

const S3ObjectSchema = z
  .object({
    Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the S3 bucket. Note that the # character is not valid in the file name.',
        }),
    ).exactOptional(),
    Name: S3ObjectNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file name of the input document. Synchronous operations can use image files that are in JPEG or PNG format. Asynchronous operations also support PDF and TIFF format files.',
        }),
    ).exactOptional(),
    Version: S3ObjectVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'If the bucket has versioning enabled, you can specify the object version. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p>',
    required: [],
  })
  .openapi('S3Object')

const DocumentSchema = z
  .object({
    Bytes: ImageBlobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A blob of base64-encoded document bytes. The maximum size of a document that's provided in a blob of bytes is 5 MB. The document bytes must be in PNG or JPEG format.</p> <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. </p>",
        }),
    ).exactOptional(),
    S3Object: S3ObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "Identifies an S3 object as the document source. The maximum size of a document that's stored in an S3 bucket is 5 MB.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The input document, either as bytes or as an S3 object.</p> <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass a document loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64 encoded. Your code might not need to encode document file bytes if you're using an AWS SDK to call Amazon Textract API operations. </p> <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64 encoded.</p> <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS Region that you use for Amazon Textract operations.</p> <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using the Bytes property isn't supported. You must first upload the document to an Amazon S3 bucket, and then call the operation using the S3Object property.</p> <p>For Amazon Textract to process an S3 object, the user must have permission to access the S3 object. </p>",
    required: [],
  })
  .openapi('Document')

const FeatureTypeSchema = z
  .enum(['TABLES', 'FORMS', 'QUERIES', 'SIGNATURES'])
  .openapi('FeatureType')

const FeatureTypesSchema = z.array(FeatureTypeSchema).openapi('FeatureTypes')

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
            'Sets whether the input image is free of personally identifiable information or adult content.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information and adult content. ',
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
            'The name of the human workflow used for this image. This should be kept unique within a region.',
        }),
    ),
    FlowDefinitionArn: FlowDefinitionArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the flow definition.' }),
    ),
    DataAttributes: HumanLoopDataAttributesSchema.and(
      z.any().openapi({ description: 'Sets attributes of the input data.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HumanLoopName', 'FlowDefinitionArn'],
    description:
      'Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. ',
  })
  .openapi('HumanLoopConfig')

const QueriesSchema = z.array(QuerySchema).min(1).openapi('Queries')

const QueriesConfigSchema = z
  .object({ Queries: QueriesSchema.and(z.any().openapi({ description: '<p/>' })) })
  .openapi({ required: ['Queries'], description: '<p/>' })
  .openapi('QueriesConfig')

const AnalyzeDocumentRequestSchema = z
  .object({
    Document: DocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPEG, PNG, PDF, or TIFF format.</p> <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes that are passed using the <code>Bytes</code> field. </p>",
        }),
    ),
    FeatureTypes: FeatureTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of the types of analysis to perform. Add TABLES to the list to return information about the tables that are detected in the input document. Add FORMS to return detected form data. Add SIGNATURES to return the locations of detected signatures. To perform both forms and table analysis, add TABLES and FORMS to <code>FeatureTypes</code>. To detect signatures within form data and table data, add SIGNATURES to either TABLES or FORMS. All lines and words detected in the document are included in the response (including text that isn't related to the value of <code>FeatureTypes</code>). ",
        }),
    ),
    HumanLoopConfig: HumanLoopConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the configuration for the human in the loop workflow for analyzing documents.',
        }),
    ).exactOptional(),
    QueriesConfig: QueriesConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains Queries and the alias for those Queries, as determined by the input. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Document', 'FeatureTypes'], title: 'AnalyzeDocumentRequest' })
  .openapi('AnalyzeDocumentRequest')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const InvalidS3ObjectExceptionSchema = z.any().openapi('InvalidS3ObjectException')

const UnsupportedDocumentExceptionSchema = z.any().openapi('UnsupportedDocumentException')

const DocumentTooLargeExceptionSchema = z.any().openapi('DocumentTooLargeException')

const BadDocumentExceptionSchema = z.any().openapi('BadDocumentException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ProvisionedThroughputExceededExceptionSchema = z
  .any()
  .openapi('ProvisionedThroughputExceededException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const HumanLoopQuotaExceededExceptionSchema = z.any().openapi('HumanLoopQuotaExceededException')

const ExpenseTypeSchema = z
  .object({
    Text: StringSchema.and(
      z.any().openapi({ description: 'The word or line of text detected by Amazon Textract.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'The confidence of accuracy, as a percentage.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object used to store information about the Type detected by Amazon Textract.',
    required: [],
  })
  .openapi('ExpenseType')

const ExpenseDetectionSchema = z
  .object({
    Text: StringSchema.and(
      z.any().openapi({ description: 'The word or line of text recognized by Amazon Textract' }),
    ).exactOptional(),
    Geometry: GeometrySchema.exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'The confidence in detection, as a percentage' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object used to store information about the Value or Label detected by Amazon Textract.',
    required: [],
  })
  .openapi('ExpenseDetection')

const ExpenseCurrencySchema = z
  .object({
    Code: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Currency code for detected currency. the current supported codes are:</p> <ul> <li> <p>USD</p> </li> <li> <p>EUR</p> </li> <li> <p>GBP</p> </li> <li> <p>CAD</p> </li> <li> <p>INR</p> </li> <li> <p>JPY</p> </li> <li> <p>CHF</p> </li> <li> <p>AUD</p> </li> <li> <p>CNY</p> </li> <li> <p>BZR</p> </li> <li> <p>SEK</p> </li> <li> <p>HKD</p> </li> </ul>',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'Percentage confideence in the detected currency.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns the kind of currency detected.', required: [] })
  .openapi('ExpenseCurrency')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ExpenseGroupPropertySchema = z
  .object({
    Types: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'Informs you on whether the expense group is a name or an address.',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides a group Id number, which will be the same for each in the group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Shows the group that a certain key belongs to. This helps differentiate between names and addresses for different organizations, that can be hard to determine via JSON response.',
    required: [],
  })
  .openapi('ExpenseGroupProperty')

const ExpenseGroupPropertyListSchema = z
  .array(ExpenseGroupPropertySchema)
  .openapi('ExpenseGroupPropertyList')

const ExpenseFieldSchema = z
  .object({
    Type: ExpenseTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The implied label of a detected element. Present alongside LabelDetection for explicit elements.',
        }),
    ).exactOptional(),
    LabelDetection: ExpenseDetectionSchema.and(
      z.any().openapi({ description: 'The explicitly stated label of a detected element.' }),
    ).exactOptional(),
    ValueDetection: ExpenseDetectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of a detected element. Present in explicit and implicit elements.',
        }),
    ).exactOptional(),
    PageNumber: UIntegerSchema.and(
      z.any().openapi({ description: 'The page number the value was detected on.' }),
    ).exactOptional(),
    Currency: ExpenseCurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the kind of currency, both the code and confidence associated with any monatary value detected.',
        }),
    ).exactOptional(),
    GroupProperties: ExpenseGroupPropertyListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Shows which group a response object belongs to, such as whether an address line belongs to the vendor's address or the recipent's address.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Breakdown of detected information, seperated into the catagories Type, LabelDetection, and ValueDetection',
    required: [],
  })
  .openapi('ExpenseField')

const ExpenseFieldListSchema = z.array(ExpenseFieldSchema).openapi('ExpenseFieldList')

const LineItemFieldsSchema = z
  .object({
    LineItemExpenseFields: ExpenseFieldListSchema.and(
      z
        .any()
        .openapi({
          description: 'ExpenseFields used to show information from detected lines on a table.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A structure that holds information about the different lines found in a document's tables.",
    required: [],
  })
  .openapi('LineItemFields')

const LineItemListSchema = z.array(LineItemFieldsSchema).openapi('LineItemList')

const LineItemGroupSchema = z
  .object({
    LineItemGroupIndex: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number used to identify a specific table in a document. The first table encountered will have a LineItemGroupIndex of 1, the second 2, etc.',
        }),
    ).exactOptional(),
    LineItems: LineItemListSchema.and(
      z
        .any()
        .openapi({ description: 'The breakdown of information on a particular line of a table. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.",
    required: [],
  })
  .openapi('LineItemGroup')

const LineItemGroupListSchema = z.array(LineItemGroupSchema).openapi('LineItemGroupList')

const ExpenseDocumentSchema = z
  .object({
    ExpenseIndex: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes which invoice or receipt in the document the information is coming from. First document will be 1, the second 2, and so on.',
        }),
    ).exactOptional(),
    SummaryFields: ExpenseFieldListSchema.and(
      z
        .any()
        .openapi({ description: 'Any information found outside of a table by Amazon Textract.' }),
    ).exactOptional(),
    LineItemGroups: LineItemGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information detected on each table of a document, seperated into <code>LineItems</code>.',
        }),
    ).exactOptional(),
    Blocks: BlockListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is a block object, the same as reported when DetectDocumentText is run on a document. It provides word level recognition of text.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure holding all the information returned by AnalyzeExpense',
    required: [],
  })
  .openapi('ExpenseDocument')

const ExpenseDocumentListSchema = z.array(ExpenseDocumentSchema).openapi('ExpenseDocumentList')

const AnalyzeExpenseResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.exactOptional(),
    ExpenseDocuments: ExpenseDocumentListSchema.and(
      z.any().openapi({ description: 'The expenses detected by Amazon Textract.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyzeExpenseResponse')

const AnalyzeExpenseRequestSchema = z
  .object({ Document: DocumentSchema })
  .openapi({ required: ['Document'], title: 'AnalyzeExpenseRequest' })
  .openapi('AnalyzeExpenseRequest')

const ValueTypeSchema = z.literal('DATE').openapi('ValueType')

const NormalizedValueSchema = z
  .object({
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the date, written as Year-Month-DayTHour:Minute:Second.',
        }),
    ).exactOptional(),
    ValueType: ValueTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The normalized type of the value detected. In this case, DATE.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information relating to dates in a document, including the type of value, and the value.',
    required: [],
  })
  .openapi('NormalizedValue')

const AnalyzeIDDetectionsSchema = z
  .object({
    Text: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Text of either the normalized field or value associated with it.',
        }),
    ),
    NormalizedValue: NormalizedValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Only returned for dates, returns the type of value detected and the date written in a more machine readable way.',
        }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: 'The confidence score of the detected text.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Text'],
    description: 'Used to contain the information detected by an AnalyzeID operation.',
  })
  .openapi('AnalyzeIDDetections')

const IdentityDocumentFieldSchema = z
  .object({
    Type: AnalyzeIDDetectionsSchema.exactOptional(),
    ValueDetection: AnalyzeIDDetectionsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Structure containing both the normalized type of the extracted information and the text associated with it. These are extracted as Type and Value respectively.',
    required: [],
  })
  .openapi('IdentityDocumentField')

const IdentityDocumentFieldListSchema = z
  .array(IdentityDocumentFieldSchema)
  .openapi('IdentityDocumentFieldList')

const IdentityDocumentSchema = z
  .object({
    DocumentIndex: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Denotes the placement of a document in the IdentityDocument list. The first document is marked 1, the second 2 and so on.',
        }),
    ).exactOptional(),
    IdentityDocumentFields: IdentityDocumentFieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The structure used to record information extracted from identity documents. Contains both normalized field and value of the extracted text.',
        }),
    ).exactOptional(),
    Blocks: BlockListSchema.and(
      z
        .any()
        .openapi({
          description: 'Individual word recognition, as returned by document detection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The structure that lists each document processed in an AnalyzeID operation.',
    required: [],
  })
  .openapi('IdentityDocument')

const IdentityDocumentListSchema = z.array(IdentityDocumentSchema).openapi('IdentityDocumentList')

const AnalyzeIDResponseSchema = z
  .object({
    IdentityDocuments: IdentityDocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of documents processed by AnalyzeID. Includes a number denoting their place in the list and the response structure for the document.',
        }),
    ).exactOptional(),
    DocumentMetadata: DocumentMetadataSchema.exactOptional(),
    AnalyzeIDModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the AnalyzeIdentity API being used to process documents.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyzeIDResponse')

const DocumentPagesSchema = z.array(DocumentSchema).min(1).max(2).openapi('DocumentPages')

const AnalyzeIDRequestSchema = z
  .object({
    DocumentPages: DocumentPagesSchema.and(
      z.any().openapi({ description: 'The document being passed to AnalyzeID.' }),
    ),
  })
  .openapi({ required: ['DocumentPages'], title: 'AnalyzeIDRequest' })
  .openapi('AnalyzeIDRequest')

const DetectDocumentTextResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata about the document. It contains the number of pages that are detected in the document.',
        }),
    ).exactOptional(),
    Blocks: BlockListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of <code>Block</code> objects that contain the text that's detected in the document.",
        }),
    ).exactOptional(),
    DetectDocumentTextModelVersion: StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetectDocumentTextResponse')

const DetectDocumentTextRequestSchema = z
  .object({
    Document: DocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPEG or PNG format.</p> <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes that are passed using the <code>Bytes</code> field. </p>",
        }),
    ),
  })
  .openapi({ required: ['Document'], title: 'DetectDocumentTextRequest' })
  .openapi('DetectDocumentTextRequest')

const JobStatusSchema = z
  .enum(['IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'PARTIAL_SUCCESS'])
  .openapi('JobStatus')

const PaginationTokenSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(255)
  .openapi('PaginationToken')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const PagesSchema = z.array(UIntegerSchema).openapi('Pages')

const WarningSchema = z
  .object({
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code for the warning.' }),
    ).exactOptional(),
    Pages: PagesSchema.and(
      z.any().openapi({ description: 'A list of the pages that the warning applies to.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). ',
    required: [],
  })
  .openapi('Warning')

const WarningsSchema = z.array(WarningSchema).openapi('Warnings')

const StatusMessageSchema = z.string().openapi('StatusMessage')

const GetDocumentAnalysisResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is returned in every page of paginated responses from an Amazon Textract video operation.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the text detection job.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text detection results.',
        }),
    ).exactOptional(),
    Blocks: BlockListSchema.and(
      z.any().openapi({ description: 'The results of the text-analysis operation.' }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of warnings that occurred during the document-analysis operation.',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns if the detection job could not be completed. Contains explanation for what error occured.',
        }),
    ).exactOptional(),
    AnalyzeDocumentModelVersion: StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDocumentAnalysisResponse')

const JobIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi('JobId')

const MaxResultsSchema = z.int().min(1).openapi('MaxResults')

const GetDocumentAnalysisRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the text-detection job. The <code>JobId</code> is returned from <code>StartDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value that you can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is returned. The default value is 1,000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetDocumentAnalysisRequest' })
  .openapi('GetDocumentAnalysisRequest')

const InvalidJobIdExceptionSchema = z.any().openapi('InvalidJobIdException')

const InvalidKMSKeyExceptionSchema = z.any().openapi('InvalidKMSKeyException')

const GetDocumentTextDetectionResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is returned in every page of paginated responses from an Amazon Textract video operation.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the text detection job.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text-detection results.',
        }),
    ).exactOptional(),
    Blocks: BlockListSchema.and(
      z.any().openapi({ description: 'The results of the text-detection operation.' }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of warnings that occurred during the text-detection operation for the document.',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns if the detection job could not be completed. Contains explanation for what error occured. ',
        }),
    ).exactOptional(),
    DetectDocumentTextModelVersion: StringSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDocumentTextDetectionResponse')

const GetDocumentTextDetectionRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the text detection job. The <code>JobId</code> is returned from <code>StartDocumentTextDetection</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is returned. The default value is 1,000.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetDocumentTextDetectionRequest' })
  .openapi('GetDocumentTextDetectionRequest')

const GetExpenseAnalysisResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is returned in every page of paginated responses from an Amazon Textract operation.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The current status of the text detection job.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text-detection results.',
        }),
    ).exactOptional(),
    ExpenseDocuments: ExpenseDocumentListSchema.and(
      z.any().openapi({ description: 'The expenses detected by Amazon Textract.' }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of warnings that occurred during the text-detection operation for the document.',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns if the detection job could not be completed. Contains explanation for what error occured. ',
        }),
    ).exactOptional(),
    AnalyzeExpenseModelVersion: StringSchema.and(
      z.any().openapi({ description: 'The current model version of AnalyzeExpense.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExpenseAnalysisResponse')

const GetExpenseAnalysisRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the text detection job. The <code>JobId</code> is returned from <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value you can specify is 20. If you specify a value greater than 20, a maximum of 20 results is returned. The default value is 20.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of blocks.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetExpenseAnalysisRequest' })
  .openapi('GetExpenseAnalysisRequest')

const PredictionSchema = z
  .object({
    Value: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The predicted value of a detected object.' }),
    ).exactOptional(),
    Confidence: PercentSchema.and(
      z.any().openapi({ description: "Amazon Textract's confidence in its predicted value." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information regarding predicted values returned by Amazon Textract operations, including the predicted value and the confidence in the predicted value.',
    required: [],
  })
  .openapi('Prediction')

const PredictionListSchema = z.array(PredictionSchema).openapi('PredictionList')

const PageClassificationSchema = z
  .object({
    PageType: PredictionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The class, or document type, assigned to a detected Page object. The class, or document type, assigned to a detected Page object.',
        }),
    ),
    PageNumber: PredictionListSchema.and(
      z
        .any()
        .openapi({
          description:
            " The page number the value was detected on, relative to Amazon Textract's starting position.",
        }),
    ),
  })
  .openapi({
    required: ['PageType', 'PageNumber'],
    description:
      "The class assigned to a Page object detected in an input document. Contains information regarding the predicted type/class of a document's page and the page number that the Page object was detected on.",
  })
  .openapi('PageClassification')

const LendingDetectionSchema = z
  .object({
    Text: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The text extracted for a detected value in a lending document.' }),
    ).exactOptional(),
    SelectionStatus: SelectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The selection status of a selection element, such as an option button or check box.',
        }),
    ).exactOptional(),
    Geometry: GeometrySchema.exactOptional(),
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence level for the text of a detected value in a lending document.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The results extracted for a lending document.', required: [] })
  .openapi('LendingDetection')

const LendingDetectionListSchema = z.array(LendingDetectionSchema).openapi('LendingDetectionList')

const LendingFieldSchema = z
  .object({
    Type: StringSchema.and(
      z.any().openapi({ description: 'The type of the lending document.' }),
    ).exactOptional(),
    KeyDetection: LendingDetectionSchema.exactOptional(),
    ValueDetections: LendingDetectionListSchema.and(
      z.any().openapi({ description: 'An array of LendingDetection objects.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Holds the normalized key-value pairs returned by AnalyzeDocument, including the document type, detected text, and geometry.',
    required: [],
  })
  .openapi('LendingField')

const LendingFieldListSchema = z.array(LendingFieldSchema).openapi('LendingFieldList')

const SignatureDetectionSchema = z
  .object({
    Confidence: PercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence, from 0 to 100, in the predicted values for a detected signature.',
        }),
    ).exactOptional(),
    Geometry: GeometrySchema.exactOptional(),
  })
  .openapi({ description: 'Information regarding a detected signature on a page.', required: [] })
  .openapi('SignatureDetection')

const SignatureDetectionListSchema = z
  .array(SignatureDetectionSchema)
  .openapi('SignatureDetectionList')

const LendingDocumentSchema = z
  .object({
    LendingFields: LendingFieldListSchema.and(
      z.any().openapi({ description: 'An array of LendingField objects.' }),
    ).exactOptional(),
    SignatureDetections: SignatureDetectionListSchema.and(
      z.any().openapi({ description: 'A list of signatures detected in a lending document.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Holds the structured data returned by AnalyzeDocument for lending documents.',
    required: [],
  })
  .openapi('LendingDocument')

const ExtractionSchema = z
  .object({
    LendingDocument: LendingDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Holds the structured data returned by AnalyzeDocument for lending documents.',
        }),
    ).exactOptional(),
    ExpenseDocument: ExpenseDocumentSchema.exactOptional(),
    IdentityDocument: IdentityDocumentSchema.exactOptional(),
  })
  .openapi({
    description:
      'Contains information extracted by an analysis operation after using StartLendingAnalysis.',
    required: [],
  })
  .openapi('Extraction')

const ExtractionListSchema = z.array(ExtractionSchema).openapi('ExtractionList')

const LendingResultSchema = z
  .object({
    Page: UIntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The page number for a page, with regard to whole submission.' }),
    ).exactOptional(),
    PageClassification: PageClassificationSchema.and(
      z.any().openapi({ description: 'The classifier result for a given page.' }),
    ).exactOptional(),
    Extractions: ExtractionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Extraction to hold structured data. e.g. normalized key value pairs instead of raw OCR detections .',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the detections for each page analyzed through the Analyze Lending API.',
    required: [],
  })
  .openapi('LendingResult')

const LendingResultListSchema = z.array(LendingResultSchema).openapi('LendingResultList')

const GetLendingAnalysisResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: ' The current status of the lending analysis job.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of lending results.',
        }),
    ).exactOptional(),
    Results: LendingResultListSchema.and(
      z
        .any()
        .openapi({
          description:
            " Holds the information returned by one of AmazonTextract's document analysis operations for the pinstripe.",
        }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description: ' A list of warnings that occurred during the lending analysis operation. ',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Returns if the lending analysis job could not be completed. Contains explanation for what error occurred. ',
        }),
    ).exactOptional(),
    AnalyzeLendingModelVersion: StringSchema.and(
      z.any().openapi({ description: ' The current model version of the Analyze Lending API.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLendingAnalysisResponse')

const GetLendingAnalysisRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the lending or text-detection job. The <code>JobId</code> is returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return per paginated call. The largest value that you can specify is 30. If you specify a value greater than 30, a maximum of 30 results is returned. The default value is 30.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the previous response was incomplete, Amazon Textract returns a pagination token in the response. You can use this pagination token to retrieve the next set of lending results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['JobId'], title: 'GetLendingAnalysisRequest' })
  .openapi('GetLendingAnalysisRequest')

const PageListSchema = z.array(UIntegerSchema).openapi('PageList')

const SplitDocumentSchema = z
  .object({
    Index: UIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The index for a given document in a DocumentGroup of a specific Type.',
        }),
    ).exactOptional(),
    Pages: PageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of page numbers for a for a given document, ordered by logical boundary.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the pages of a document, defined by logical boundary.',
    required: [],
  })
  .openapi('SplitDocument')

const SplitDocumentListSchema = z.array(SplitDocumentSchema).openapi('SplitDocumentList')

const DetectedSignatureSchema = z
  .object({
    Page: UIntegerSchema.and(
      z.any().openapi({ description: 'The page a detected signature was found on.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that holds information regarding a detected signature on a page.',
    required: [],
  })
  .openapi('DetectedSignature')

const DetectedSignatureListSchema = z
  .array(DetectedSignatureSchema)
  .openapi('DetectedSignatureList')

const UndetectedSignatureSchema = z
  .object({
    Page: UIntegerSchema.and(
      z.any().openapi({ description: 'The page where a signature was expected but not found.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure containing information about an undetected signature on a page where it was expected but not found.',
    required: [],
  })
  .openapi('UndetectedSignature')

const UndetectedSignatureListSchema = z
  .array(UndetectedSignatureSchema)
  .openapi('UndetectedSignatureList')

const DocumentGroupSchema = z
  .object({
    Type: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of document that Amazon Textract has detected. See <a href="https://docs.aws.amazon.com/textract/latest/dg/lending-response-objects.html">Analyze Lending Response Objects</a> for a list of all types returned by Textract.',
        }),
    ).exactOptional(),
    SplitDocuments: SplitDocumentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that contains information about the pages of a document, defined by logical boundary.',
        }),
    ).exactOptional(),
    DetectedSignatures: DetectedSignatureListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of the detected signatures found in a document group.' }),
    ).exactOptional(),
    UndetectedSignatures: UndetectedSignatureListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of any expected signatures not found in a document group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary information about documents grouped by the same document type.',
    required: [],
  })
  .openapi('DocumentGroup')

const DocumentGroupListSchema = z.array(DocumentGroupSchema).openapi('DocumentGroupList')

const UndetectedDocumentTypeListSchema = z
  .array(NonEmptyStringSchema)
  .openapi('UndetectedDocumentTypeList')

const LendingSummarySchema = z
  .object({
    DocumentGroups: DocumentGroupListSchema.and(
      z.any().openapi({ description: 'Contains an array of all DocumentGroup objects.' }),
    ).exactOptional(),
    UndetectedDocumentTypes: UndetectedDocumentTypeListSchema.and(
      z.any().openapi({ description: 'UndetectedDocumentTypes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information regarding DocumentGroups and UndetectedDocumentTypes.',
    required: [],
  })
  .openapi('LendingSummary')

const GetLendingAnalysisSummaryResponseSchema = z
  .object({
    DocumentMetadata: DocumentMetadataSchema.exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: ' The current status of the lending analysis job. ' }),
    ).exactOptional(),
    Summary: LendingSummarySchema.and(
      z
        .any()
        .openapi({ description: ' Contains summary information for documents grouped by type.' }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of warnings that occurred during the lending analysis operation.',
        }),
    ).exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns if the lending analysis could not be completed. Contains explanation for what error occurred.',
        }),
    ).exactOptional(),
    AnalyzeLendingModelVersion: StringSchema.and(
      z.any().openapi({ description: 'The current model version of the Analyze Lending API.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLendingAnalysisSummaryResponse')

const GetLendingAnalysisSummaryRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique identifier for the lending or text-detection job. The <code>JobId</code> is returned from StartLendingAnalysis. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'GetLendingAnalysisSummaryRequest' })
  .openapi('GetLendingAnalysisSummaryRequest')

const StartDocumentAnalysisResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the document text detection job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDocumentAnalysisResponse')

const DocumentLocationSchema = z
  .object({
    S3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket that contains the input document.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>",
    required: [],
  })
  .openapi('DocumentLocation')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestToken')

const JobTagSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.\-:]+/)
  .min(1)
  .max(64)
  .openapi('JobTag')

const SNSTopicArnSchema = z
  .string()
  .regex(/(^arn:([a-z\d-]+):sns:[a-zA-Z\d-]{1,20}:\w{12}:.+$)/)
  .min(20)
  .max(1024)
  .openapi('SNSTopicArn')

const RoleArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):iam::\d{12}:role\/?[a-zA-Z_0-9+=,.@\-_\/]+/)
  .min(20)
  .max(2048)
  .openapi('RoleArn')

const NotificationChannelSchema = z
  .object({
    SNSTopicArn: SNSTopicArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon SNS topic that Amazon Textract posts the completion status to.',
        }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic. ',
        }),
    ),
  })
  .openapi({
    required: ['SNSTopicArn', 'RoleArn'],
    description:
      'The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation. ',
  })
  .openapi('NotificationChannel')

const OutputConfigSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The name of the bucket your output will go to.' }),
    ),
    S3Prefix: S3ObjectNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prefix of the object key that the output will be saved to. When not enabled, the prefix will be “textract_output".',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Bucket'],
    description:
      '<p>Sets whether or not your output will go to a user created bucket. Used to set the name of the bucket, and the prefix on the output file.</p> <p> <code>OutputConfig</code> is an optional parameter which lets you adjust where your output will be placed. By default, Amazon Textract will store the results internally and can only be accessed by the Get API operations. With <code>OutputConfig</code> enabled, you can set the name of the bucket the output will be sent to the file prefix of the results where you can download your results. Additionally, you can set the <code>KMSKeyID</code> parameter to a customer master key (CMK) to encrypt your output. Without this parameter set Amazon Textract will encrypt server-side using the AWS managed CMK for Amazon S3.</p> <p>Decryption of Customer Content is necessary for processing of the documents by Amazon Textract. If your account is opted out under an AI services opt out policy then all unencrypted Customer Content is immediately and permanently deleted after the Customer Content has been processed by the service. No copy of of the output is retained by Amazon Textract. For information about how to opt out, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html"> Managing AI services opt-out policy. </a> </p> <p>For more information on data privacy, see the <a href="https://aws.amazon.com/compliance/data-privacy-faq/">Data Privacy FAQ</a>.</p>',
  })
  .openapi('OutputConfig')

const KMSKeyIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9][A-Za-z0-9:_\/+=,@.-]{0,2048}$/)
  .min(1)
  .max(2048)
  .openapi('KMSKeyId')

const StartDocumentAnalysisRequestSchema = z
  .object({
    DocumentLocation: DocumentLocationSchema.and(
      z.any().openapi({ description: 'The location of the document to be processed.' }),
    ),
    FeatureTypes: FeatureTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of the types of analysis to perform. Add TABLES to the list to return information about the tables that are detected in the input document. Add FORMS to return detected form data. To perform both types of analysis, add TABLES and FORMS to <code>FeatureTypes</code>. All lines and words detected in the document are included in the response (including text that isn't related to the value of <code>FeatureTypes</code>). ",
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotent token that you use to identify the start request. If you use the same token with multiple <code>StartDocumentAnalysis</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier that you specify that's included in the completion notification published to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).",
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to. ',
        }),
    ).exactOptional(),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save the results internally to be accessed by the GetDocumentAnalysis operation.',
        }),
    ).exactOptional(),
    KMSKeyId: KMSKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side,using SSE-S3.',
        }),
    ).exactOptional(),
    QueriesConfig: QueriesConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['DocumentLocation', 'FeatureTypes'],
    title: 'StartDocumentAnalysisRequest',
  })
  .openapi('StartDocumentAnalysisRequest')

const IdempotentParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotentParameterMismatchException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const StartDocumentTextDetectionResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the text detection job for the document. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetDocumentTextDetection</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDocumentTextDetectionResponse')

const StartDocumentTextDetectionRequestSchema = z
  .object({
    DocumentLocation: DocumentLocationSchema.and(
      z.any().openapi({ description: 'The location of the document to be processed.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotent token that\'s used to identify the start request. If you use the same token with multiple <code>StartDocumentTextDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier that you specify that's included in the completion notification published to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).",
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to. ',
        }),
    ).exactOptional(),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets if the output will go to a customer defined bucket. By default Amazon Textract will save the results internally to be accessed with the GetDocumentTextDetection operation.',
        }),
    ).exactOptional(),
    KMSKeyId: KMSKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side,using SSE-S3.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DocumentLocation'], title: 'StartDocumentTextDetectionRequest' })
  .openapi('StartDocumentTextDetectionRequest')

const StartExpenseAnalysisResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the text detection job. The <code>JobId</code> is returned from <code>StartExpenseAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartExpenseAnalysisResponse')

const StartExpenseAnalysisRequestSchema = z
  .object({
    DocumentLocation: DocumentLocationSchema.and(
      z.any().openapi({ description: 'The location of the document to be processed.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotent token that\'s used to identify the start request. If you use the same token with multiple <code>StartDocumentTextDetection</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a> ',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            "An identifier you specify that's included in the completion notification published to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).",
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the operation to. ',
        }),
    ).exactOptional(),
    OutputConfig: OutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets if the output will go to a customer defined bucket. By default, Amazon Textract will save the results internally to be accessed by the <code>GetExpenseAnalysis</code> operation.',
        }),
    ).exactOptional(),
    KMSKeyId: KMSKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side,using SSE-S3.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DocumentLocation'], title: 'StartExpenseAnalysisRequest' })
  .openapi('StartExpenseAnalysisRequest')

const StartLendingAnalysisResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the lending or text-detection job. The <code>JobId</code> is returned from <code>StartLendingAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartLendingAnalysisResponse')

const StartLendingAnalysisRequestSchema = z
  .object({
    DocumentLocation: DocumentLocationSchema,
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The idempotent token that you use to identify the start request. If you use the same token with multiple <code>StartLendingAnalysis</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidentally started more than once. For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/api-sync.html">Calling Amazon Textract Asynchronous Operations</a>.',
        }),
    ).exactOptional(),
    JobTag: JobTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that you specify to be included in the completion notification published to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of document that the completion notification corresponds to (such as a tax form or a receipt).',
        }),
    ).exactOptional(),
    NotificationChannel: NotificationChannelSchema.exactOptional(),
    OutputConfig: OutputConfigSchema.exactOptional(),
    KMSKeyId: KMSKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key used to encrypt the inference results. This can be in either Key ID or Key Alias format. When a KMS key is provided, the KMS key will be used for server-side encryption of the objects in the customer bucket. When this parameter is not enabled, the result will be encrypted server side, using SSE-S3. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DocumentLocation'], title: 'StartLendingAnalysisRequest' })
  .openapi('StartLendingAnalysisRequest')

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

export const postXAmzTargetTextractAnalyzeDocumentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.AnalyzeDocument',
  description:
    '<p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn\'t have a relationship with the value of <code>FeatureTypes</code>). </p> </li> <li> <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table.</p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>Block</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>',
  operationId: 'AnalyzeDocument',
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
        .literal('Textract.AnalyzeDocument')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.AnalyzeDocument'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnalyzeDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AnalyzeDocumentResponseSchema } },
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
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    483: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    484: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
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
      description: 'HumanLoopQuotaExceededException',
      content: { 'application/json': { schema: HumanLoopQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractAnalyzeExpenseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.AnalyzeExpense',
  description:
    '<p> <code>AnalyzeExpense</code> synchronously analyzes an input document for financially related relationships between text.</p> <p>Information is returned as <code>ExpenseDocuments</code> and seperated as follows:</p> <ul> <li> <p> <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which store information about the lines of text, such as an item purchased and its price on a receipt.</p> </li> <li> <p> <code>SummaryFields</code>- Contains all other information a receipt, such as header information or the vendors name.</p> </li> </ul>',
  operationId: 'AnalyzeExpense',
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
        .literal('Textract.AnalyzeExpense')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.AnalyzeExpense'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AnalyzeExpenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AnalyzeExpenseResponseSchema } },
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
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    483: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    484: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
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

export const postXAmzTargetTextractAnalyzeIDRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.AnalyzeID',
  description:
    "Analyzes identity documents for relevant information. This information is extracted and returned as <code>IdentityDocumentFields</code>, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, <code>AnalyzeID</code> doesn't return any Geometry data.",
  operationId: 'AnalyzeID',
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
        .literal('Textract.AnalyzeID')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.AnalyzeID'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnalyzeIDRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AnalyzeIDResponseSchema } },
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
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    483: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    484: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
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

export const postXAmzTargetTextractDetectDocumentTextRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.DetectDocumentText',
  description:
    '<p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be in one of the following image formats: JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>',
  operationId: 'DetectDocumentText',
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
        .literal('Textract.DetectDocumentText')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.DetectDocumentText'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectDocumentTextRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectDocumentTextResponseSchema } },
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
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    483: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    484: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
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

export const postXAmzTargetTextractGetDocumentAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.GetDocumentAnalysis',
  description:
    "<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <note> <p>While processing a document with queries, look out for <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per page query limit has been exceeded or that the operation is trying to query a page in the document which doesn’t exist. </p> </note> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html\">Document Text Analysis</a>.</p>",
  operationId: 'GetDocumentAnalysis',
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
        .literal('Textract.GetDocumentAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.GetDocumentAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDocumentAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDocumentAnalysisResponseSchema } },
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
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidJobIdException',
      content: { 'application/json': { schema: InvalidJobIdExceptionSchema } },
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
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    487: {
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractGetDocumentTextDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.GetDocumentTextDetection',
  description:
    '<p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that\'s registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that\'s returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>',
  operationId: 'GetDocumentTextDetection',
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
        .literal('Textract.GetDocumentTextDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.GetDocumentTextDetection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDocumentTextDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDocumentTextDetectionResponseSchema } },
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
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidJobIdException',
      content: { 'application/json': { schema: InvalidJobIdExceptionSchema } },
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
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    487: {
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractGetExpenseAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.GetExpenseAnalysis',
  description:
    '<p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.</p> <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartExpenseAnalysis</code>.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetExpenseAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that\'s returned from the previous call to <code>GetExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>',
  operationId: 'GetExpenseAnalysis',
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
        .literal('Textract.GetExpenseAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.GetExpenseAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetExpenseAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExpenseAnalysisResponseSchema } },
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
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidJobIdException',
      content: { 'application/json': { schema: InvalidJobIdExceptionSchema } },
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
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    487: {
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractGetLendingAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.GetLendingAnalysis',
  description:
    "<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>",
  operationId: 'GetLendingAnalysis',
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
        .literal('Textract.GetLendingAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.GetLendingAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLendingAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLendingAnalysisResponseSchema } },
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
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidJobIdException',
      content: { 'application/json': { schema: InvalidJobIdExceptionSchema } },
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
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    487: {
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractGetLendingAnalysisSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.GetLendingAnalysisSummary',
  description:
    "<p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>",
  operationId: 'GetLendingAnalysisSummary',
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
        .literal('Textract.GetLendingAnalysisSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.GetLendingAnalysisSummary'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLendingAnalysisSummaryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLendingAnalysisSummaryResponseSchema } },
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
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    483: {
      description: 'InvalidJobIdException',
      content: { 'application/json': { schema: InvalidJobIdExceptionSchema } },
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
      description: 'InvalidS3ObjectException',
      content: { 'application/json': { schema: InvalidS3ObjectExceptionSchema } },
    },
    487: {
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractStartDocumentAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.StartDocumentAnalysis',
  description:
    '<p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>',
  operationId: 'StartDocumentAnalysis',
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
        .literal('Textract.StartDocumentAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.StartDocumentAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDocumentAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDocumentAnalysisResponseSchema } },
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
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
    483: {
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    484: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    485: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    490: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    491: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractStartDocumentTextDetectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.StartDocumentTextDetection',
  description:
    '<p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>',
  operationId: 'StartDocumentTextDetection',
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
        .literal('Textract.StartDocumentTextDetection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.StartDocumentTextDetection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDocumentTextDetectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDocumentTextDetectionResponseSchema } },
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
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
    483: {
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    484: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    485: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    490: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    491: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractStartExpenseAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.StartExpenseAnalysis',
  description:
    '<p>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names.</p> <p> <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the document in that bucket. </p> <p> <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was returned by your call to <code>StartExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>',
  operationId: 'StartExpenseAnalysis',
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
        .literal('Textract.StartExpenseAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.StartExpenseAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartExpenseAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartExpenseAnalysisResponseSchema } },
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
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
    483: {
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    484: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    485: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    490: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    491: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetTextractStartLendingAnalysisRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Textract.StartLendingAnalysis',
  description:
    '<p>Starts the classification and analysis of an input document. <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an Amazon S3 bucket.</p> <p> <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket name and the file name of the document. </p> <p> <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results of the analysis.</p> <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: </p> <ul> <li> <p>detailedResponse (contains the GetLendingAnalysis response)</p> </li> <li> <p>summaryResponse (for the GetLendingAnalysisSummary response)</p> </li> <li> <p>splitDocuments (documents split across logical boundaries)</p> </li> </ul>',
  operationId: 'StartLendingAnalysis',
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
        .literal('Textract.StartLendingAnalysis')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Textract.StartLendingAnalysis'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartLendingAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartLendingAnalysisResponseSchema } },
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
      description: 'InvalidKMSKeyException',
      content: { 'application/json': { schema: InvalidKMSKeyExceptionSchema } },
    },
    483: {
      description: 'UnsupportedDocumentException',
      content: { 'application/json': { schema: UnsupportedDocumentExceptionSchema } },
    },
    484: {
      description: 'DocumentTooLargeException',
      content: { 'application/json': { schema: DocumentTooLargeExceptionSchema } },
    },
    485: {
      description: 'BadDocumentException',
      content: { 'application/json': { schema: BadDocumentExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'ProvisionedThroughputExceededException',
      content: { 'application/json': { schema: ProvisionedThroughputExceededExceptionSchema } },
    },
    488: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    489: {
      description: 'IdempotentParameterMismatchException',
      content: { 'application/json': { schema: IdempotentParameterMismatchExceptionSchema } },
    },
    490: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    491: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
