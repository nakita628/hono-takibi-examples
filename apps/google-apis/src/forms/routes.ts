import { createRoute, z } from '@hono/zod-openapi'

const MediaPropertiesSchema = z
  .object({
    alignment: z
      .enum(['ALIGNMENT_UNSPECIFIED', 'LEFT', 'RIGHT', 'CENTER'])
      .exactOptional()
      .openapi({ description: 'Position of the media.' }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source.',
      }),
  })
  .openapi({ description: 'Properties of the media.', required: [] })
  .openapi('MediaProperties')

const ImageSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the image that is shown on hover and read by screenreaders.',
      }),
    contentUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A URI from which you can download the image; this is valid only for a limited time.',
        readOnly: true,
      }),
    properties: MediaPropertiesSchema.exactOptional().openapi({
      description: 'Properties of an image.',
    }),
    sourceUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.',
      }),
  })
  .openapi({ description: 'Data representing an image.', required: [] })
  .openapi('Image')

const ImageItemSchema = z
  .object({
    image: ImageSchema.exactOptional().openapi({
      description: 'Required. The image displayed in the item.',
    }),
  })
  .openapi({ description: 'An item containing an image.', required: [] })
  .openapi('ImageItem')

const PageBreakItemSchema = z
  .object({})
  .openapi({
    description:
      'A page break. The title and description of this item are shown at the top of the new page.',
  })
  .openapi('PageBreakItem')

const OptionSchema = z
  .object({
    goToAction: z
      .enum(['GO_TO_ACTION_UNSPECIFIED', 'NEXT_SECTION', 'RESTART_FORM', 'SUBMIT_FORM'])
      .exactOptional()
      .openapi({ description: 'Section navigation type.' }),
    goToSectionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Item ID of section header to go to.' }),
    image: ImageSchema.exactOptional().openapi({ description: 'Display image as an option.' }),
    isOther: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The choice as presented to the user.' }),
  })
  .openapi({ description: 'An option for a Choice question.', required: [] })
  .openapi('Option')

const ChoiceQuestionSchema = z
  .object({
    options: z
      .array(OptionSchema)
      .exactOptional()
      .openapi({ description: 'Required. List of options that a respondent must choose from.' }),
    shuffle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last.",
      }),
    type: z
      .enum(['CHOICE_TYPE_UNSPECIFIED', 'RADIO', 'CHECKBOX', 'DROP_DOWN'])
      .exactOptional()
      .openapi({ description: 'Required. The type of choice question.' }),
  })
  .openapi({ description: 'A radio/checkbox/dropdown question.', required: [] })
  .openapi('ChoiceQuestion')

const GridSchema = z
  .object({
    columns: ChoiceQuestionSchema.exactOptional().openapi({
      description:
        'Required. The choices shared by each question in the grid. In other words, the values of the columns. Only `CHECK_BOX` and `RADIO` choices are allowed.',
    }),
    shuffleQuestions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent.',
      }),
  })
  .openapi({
    description:
      'A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.',
    required: [],
  })
  .openapi('Grid')

const QuestionSchema: z.ZodType<QuestionType> = z
  .lazy(() =>
    z
      .object({
        choiceQuestion: ChoiceQuestionSchema.exactOptional().openapi({
          description: 'A respondent can choose from a pre-defined set of options.',
        }),
        dateQuestion: DateQuestionSchema.exactOptional().openapi({
          description: 'A respondent can enter a date.',
        }),
        fileUploadQuestion: FileUploadQuestionSchema.exactOptional().openapi({
          description: 'A respondent can upload one or more files.',
        }),
        grading: GradingSchema.exactOptional().openapi({
          description: 'Grading setup for the question.',
        }),
        questionId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.',
          }),
        required: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the question must be answered in order for a respondent to submit their response.',
          }),
        rowQuestion: RowQuestionSchema.exactOptional().openapi({
          description: 'A row of a QuestionGroupItem.',
        }),
        scaleQuestion: ScaleQuestionSchema.exactOptional().openapi({
          description: 'A respondent can choose a number from a range.',
        }),
        textQuestion: TextQuestionSchema.exactOptional().openapi({
          description: 'A respondent can enter a free text response.',
        }),
        timeQuestion: TimeQuestionSchema.exactOptional().openapi({
          description: 'A respondent can enter a time.',
        }),
      })
      .openapi({
        description: 'Any question. The specific type of question is known by its `kind`.',
        required: [],
      }),
  )
  .openapi('Question')

const QuestionGroupItemSchema = z
  .object({
    grid: GridSchema.exactOptional().openapi({
      description:
        'The question group is a grid with rows of multiple choice questions that share the same options. When `grid` is set, all questions in the group must be of kind `row`.',
    }),
    image: ImageSchema.exactOptional().openapi({
      description: 'The image displayed within the question group above the specific questions.',
    }),
    questions: z
      .array(QuestionSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A list of questions that belong in this question group. A question must only belong to one group. The `kind` of the group may affect what types of questions are allowed.',
      }),
  })
  .openapi({
    description: 'Defines a question that comprises multiple questions grouped together.',
    required: [],
  })
  .openapi('QuestionGroupItem')

const QuestionItemSchema = z
  .object({
    image: ImageSchema.exactOptional().openapi({
      description: 'The image displayed within the question.',
    }),
    question: QuestionSchema.exactOptional().openapi({
      description: 'Required. The displayed question.',
    }),
  })
  .openapi({ description: 'A form item containing a single question.', required: [] })
  .openapi('QuestionItem')

const TextItemSchema = z.object({}).openapi({ description: 'A text item.' }).openapi('TextItem')

const VideoSchema = z
  .object({
    properties: MediaPropertiesSchema.exactOptional().openapi({
      description: 'Properties of a video.',
    }),
    youtubeUri: z.string().exactOptional().openapi({ description: 'Required. A YouTube URI.' }),
  })
  .openapi({ description: 'Data representing a video.', required: [] })
  .openapi('Video')

const VideoItemSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text displayed below the video.' }),
    video: VideoSchema.exactOptional().openapi({
      description: 'Required. The video displayed in the item.',
    }),
  })
  .openapi({ description: 'An item containing a video.', required: [] })
  .openapi('VideoItem')

type ItemType = {
  description?: string
  imageItem?: z.infer<typeof ImageItemSchema>
  itemId?: string
  pageBreakItem?: z.infer<typeof PageBreakItemSchema>
  questionGroupItem?: z.infer<typeof QuestionGroupItemSchema>
  questionItem?: z.infer<typeof QuestionItemSchema>
  textItem?: z.infer<typeof TextItemSchema>
  title?: string
  videoItem?: z.infer<typeof VideoItemSchema>
}

const DateQuestionSchema = z
  .object({
    includeTime: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to include the time as part of the question.' }),
    includeYear: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to include the year as part of the question.' }),
  })
  .openapi({
    description: 'A date question. Date questions default to just month + day.',
    required: [],
  })
  .openapi('DateQuestion')

const FileUploadQuestionSchema = z
  .object({
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the Drive folder where uploaded files are stored.',
      }),
    maxFileSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of bytes allowed for any single file uploaded to this question.',
      }),
    maxFiles: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of files that can be uploaded for this question in a single response.',
      }),
    types: z
      .array(
        z.enum([
          'FILE_TYPE_UNSPECIFIED',
          'ANY',
          'DOCUMENT',
          'PRESENTATION',
          'SPREADSHEET',
          'DRAWING',
          'PDF',
          'IMAGE',
          'VIDEO',
          'AUDIO',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'File types accepted by this question.' }),
  })
  .openapi({
    description:
      'A file upload question. The API currently does not support creating file upload questions.',
    required: [],
  })
  .openapi('FileUploadQuestion')

const CorrectAnswerSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted.',
      }),
  })
  .openapi({
    description:
      'A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.',
    required: [],
  })
  .openapi('CorrectAnswer')

const CorrectAnswersSchema = z
  .object({
    answers: z
      .array(CorrectAnswerSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (`CHECKBOX`) questions, a response is marked correct if it contains exactly the values in this list.',
      }),
  })
  .openapi({ description: 'The answer key for a question.', required: [] })
  .openapi('CorrectAnswers')

const TextLinkSchema = z
  .object({
    displayText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display text for the URI.' }),
    uri: z.string().exactOptional().openapi({ description: 'Required. The URI.' }),
  })
  .openapi({ description: 'Link for text.', required: [] })
  .openapi('TextLink')

const VideoLinkSchema = z
  .object({
    displayText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The display text for the link.' }),
    youtubeUri: z.string().exactOptional().openapi({ description: 'The URI of a YouTube video.' }),
  })
  .openapi({ description: 'Link to a video.', required: [] })
  .openapi('VideoLink')

const ExtraMaterialSchema = z
  .object({
    link: TextLinkSchema.exactOptional().openapi({ description: 'Text feedback.' }),
    video: VideoLinkSchema.exactOptional().openapi({ description: 'Video feedback.' }),
  })
  .openapi({ description: 'Supplementary material to the feedback.', required: [] })
  .openapi('ExtraMaterial')

const FeedbackSchema = z
  .object({
    material: z
      .array(ExtraMaterialSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional information provided as part of the feedback, often used to point the respondent to more reading and resources.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The main text of the feedback.' }),
  })
  .openapi({
    description: 'Feedback for a respondent about their response to a question.',
    required: [],
  })
  .openapi('Feedback')

const GradingSchema = z
  .object({
    correctAnswers: CorrectAnswersSchema.exactOptional().openapi({
      description:
        'Required. The answer key for the question. Responses are automatically graded based on this field.',
    }),
    generalFeedback: FeedbackSchema.exactOptional().openapi({
      description:
        "The feedback displayed for all answers. This is commonly used for short answer questions when a quiz owner wants to quickly give respondents some sense of whether they answered the question correctly before they've had a chance to officially grade the response. General feedback cannot be set for automatically graded multiple choice questions.",
    }),
    pointValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative.',
      }),
    whenRight: FeedbackSchema.exactOptional().openapi({
      description:
        'The feedback displayed for correct responses. This feedback can only be set for multiple choice questions that have correct answers provided.',
    }),
    whenWrong: FeedbackSchema.exactOptional().openapi({
      description:
        'The feedback displayed for incorrect responses. This feedback can only be set for multiple choice questions that have correct answers provided.',
    }),
  })
  .openapi({ description: 'Grading for a single question', required: [] })
  .openapi('Grading')

const RowQuestionSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The title for the single row in the QuestionGroupItem.' }),
  })
  .openapi({
    description: 'Configuration for a question that is part of a question group.',
    required: [],
  })
  .openapi('RowQuestion')

const ScaleQuestionSchema = z
  .object({
    high: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The highest possible value for the scale.' }),
    highLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label to display describing the highest point on the scale.' }),
    low: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The lowest possible value for the scale.' }),
    lowLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label to display describing the lowest point on the scale.' }),
  })
  .openapi({
    description: 'A scale question. The user has a range of numeric values to choose from.',
    required: [],
  })
  .openapi('ScaleQuestion')

const TextQuestionSchema = z
  .object({
    paragraph: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the question is a paragraph question or not. If not, the question is a short text question.',
      }),
  })
  .openapi({ description: 'A text-based question.', required: [] })
  .openapi('TextQuestion')

const TimeQuestionSchema = z
  .object({
    duration: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '`true` if the question is about an elapsed time. Otherwise it is about a time of day.',
      }),
  })
  .openapi({ description: 'A time question.', required: [] })
  .openapi('TimeQuestion')

type QuestionType = {
  choiceQuestion?: z.infer<typeof ChoiceQuestionSchema>
  dateQuestion?: z.infer<typeof DateQuestionSchema>
  fileUploadQuestion?: z.infer<typeof FileUploadQuestionSchema>
  grading?: z.infer<typeof GradingSchema>
  questionId?: string
  required?: boolean
  rowQuestion?: z.infer<typeof RowQuestionSchema>
  scaleQuestion?: z.infer<typeof ScaleQuestionSchema>
  textQuestion?: z.infer<typeof TextQuestionSchema>
  timeQuestion?: z.infer<typeof TimeQuestionSchema>
}

const ItemSchema: z.ZodType<ItemType> = z
  .lazy(() =>
    z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'The description of the item.' }),
        imageItem: ImageItemSchema.exactOptional().openapi({
          description: 'Displays an image on the page.',
        }),
        itemId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.',
          }),
        pageBreakItem: PageBreakItemSchema.exactOptional().openapi({
          description: 'Starts a new page with a title.',
        }),
        questionGroupItem: QuestionGroupItemSchema.exactOptional().openapi({
          description: 'Poses one or more questions to the user with a single major prompt.',
        }),
        questionItem: QuestionItemSchema.exactOptional().openapi({
          description: 'Poses a question to the user.',
        }),
        textItem: TextItemSchema.exactOptional().openapi({
          description: 'Displays a title and description on the page.',
        }),
        title: z.string().exactOptional().openapi({ description: 'The title of the item.' }),
        videoItem: VideoItemSchema.exactOptional().openapi({
          description: 'Displays a video on the page.',
        }),
      })
      .openapi({
        description: 'A single item of the form. `kind` defines which kind of item it is.',
        required: [],
      }),
  )
  .openapi('Item')

const LocationSchema = z
  .object({
    index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of an item in the form. This must be in the range [0..*N*), where *N* is the number of items in the form.',
      }),
  })
  .openapi({ description: 'A specific location in a form.', required: [] })
  .openapi('Location')

const CreateItemRequestSchema = z
  .object({
    item: ItemSchema.exactOptional().openapi({ description: 'Required. The item to create.' }),
    location: LocationSchema.exactOptional().openapi({
      description: 'Required. Where to place the new item.',
    }),
  })
  .openapi({ description: 'Create an item in a form.', required: [] })
  .openapi('CreateItemRequest')

const DeleteItemRequestSchema = z
  .object({
    location: LocationSchema.exactOptional().openapi({
      description: 'Required. The location of the item to delete.',
    }),
  })
  .openapi({ description: 'Delete an item in a form.', required: [] })
  .openapi('DeleteItemRequest')

const MoveItemRequestSchema = z
  .object({
    newLocation: LocationSchema.exactOptional().openapi({
      description: 'Required. The new location for the item.',
    }),
    originalLocation: LocationSchema.exactOptional().openapi({
      description: 'Required. The location of the item to move.',
    }),
  })
  .openapi({ description: 'Move an item in a form.', required: [] })
  .openapi('MoveItemRequest')

const InfoSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the form.' }),
    documentTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The title of the document which is visible in Drive. If `Info.title` is empty, `document_title` may appear in its place in the Google Forms UI and be visible to responders. `document_title` can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update `document_title`.',
        readOnly: true,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The title of the form which is visible to responders.' }),
  })
  .openapi({ description: 'The general information for a form.', required: [] })
  .openapi('Info')

const UpdateFormInfoRequestSchema = z
  .object({
    info: InfoSchema.exactOptional().openapi({ description: 'The info to update.' }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Only values named in this mask are changed. At least one field must be specified. The root `info` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.',
      }),
  })
  .openapi({ description: "Update Form's Info.", required: [] })
  .openapi('UpdateFormInfoRequest')

const UpdateItemRequestSchema = z
  .object({
    item: ItemSchema.exactOptional().openapi({
      description:
        'Required. New values for the item. Note that item and question IDs are used if they are provided (and are in the field mask). If an ID is blank (and in the field mask) a new ID is generated. This means you can modify an item by getting the form via forms.get, modifying your local copy of that item to be how you want it, and using UpdateItemRequest to write it back, with the IDs being the same (or not in the field mask).',
    }),
    location: LocationSchema.exactOptional().openapi({
      description: 'Required. The location identifying the item to update.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Only values named in this mask are changed.' }),
  })
  .openapi({ description: 'Update an item in a form.', required: [] })
  .openapi('UpdateItemRequest')

const QuizSettingsSchema = z
  .object({
    isQuiz: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted.',
      }),
  })
  .openapi({
    description:
      'Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.',
    required: [],
  })
  .openapi('QuizSettings')

const FormSettingsSchema = z
  .object({
    quizSettings: QuizSettingsSchema.exactOptional().openapi({
      description: 'Settings related to quiz forms and grading.',
    }),
  })
  .openapi({ description: "A form's settings.", required: [] })
  .openapi('FormSettings')

const UpdateSettingsRequestSchema = z
  .object({
    settings: FormSettingsSchema.exactOptional().openapi({
      description: 'Required. The settings to update with.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Only values named in this mask are changed. At least one field must be specified. The root `settings` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.',
      }),
  })
  .openapi({ description: "Update Form's FormSettings.", required: [] })
  .openapi('UpdateSettingsRequest')

type RequestType = {
  createItem?: z.infer<typeof CreateItemRequestSchema>
  deleteItem?: z.infer<typeof DeleteItemRequestSchema>
  moveItem?: z.infer<typeof MoveItemRequestSchema>
  updateFormInfo?: z.infer<typeof UpdateFormInfoRequestSchema>
  updateItem?: z.infer<typeof UpdateItemRequestSchema>
  updateSettings?: z.infer<typeof UpdateSettingsRequestSchema>
}

const CreateItemResponseSchema = z
  .object({
    itemId: z.string().exactOptional().openapi({ description: 'The ID of the created item.' }),
    questionId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item.',
      }),
  })
  .openapi({ description: 'The result of creating an item.', required: [] })
  .openapi('CreateItemResponse')

type ResponseType = { createItem?: z.infer<typeof CreateItemResponseSchema> }

const FileUploadAnswerSchema = z
  .object({
    fileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The ID of the Google Drive file.', readOnly: true }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The file name, as stored in Google Drive on upload.',
        readOnly: true,
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The MIME type of the file, as stored in Google Drive on upload.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Info for a single file submitted to a file upload question.',
    required: [],
  })
  .openapi('FileUploadAnswer')

const FileUploadAnswersSchema = z
  .object({
    answers: z
      .array(FileUploadAnswerSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. All submitted files for a FileUpload question.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'All submitted files for a FileUpload question.', required: [] })
  .openapi('FileUploadAnswers')

const GradeSchema = z
  .object({
    correct: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points.',
        readOnly: true,
      }),
    feedback: FeedbackSchema.exactOptional().openapi({
      description: 'Output only. Additional feedback given for an answer.',
      readOnly: true,
    }),
    score: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. The numeric score awarded for the answer.',
        readOnly: true,
      }),
  })
  .openapi({
    description: "Grade information associated with a respondent's answer to a question.",
    required: [],
  })
  .openapi('Grade')

const TextAnswerSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The answer value. Formatting used for different kinds of question: * ChoiceQuestion * `RADIO` or `DROP_DOWN`: A single string corresponding to the option that was selected. * `CHECKBOX`: Multiple strings corresponding to each option that was selected. * TextQuestion: The text that the user entered. * ScaleQuestion: A string containing the number that was selected. * DateQuestion * Without time or year: MM-DD e.g. "05-19" * With year: YYYY-MM-DD e.g. "1986-05-19" * With time: MM-DD HH:MM e.g. "05-19 14:51" * With year and time: YYYY-MM-DD HH:MM e.g. "1986-05-19 14:51" * TimeQuestion: String with time or duration in HH:MM format e.g. "14:51" * RowQuestion within QuestionGroupItem: The answer for each row of a QuestionGroupItem is represented as a separate Answer. Each will contain one string for `RADIO`-type choices or multiple strings for `CHECKBOX` choices.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An answer to a question represented as text.', required: [] })
  .openapi('TextAnswer')

const TextAnswersSchema = z
  .object({
    answers: z
      .array(TextAnswerSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Answers to a question. For multiple-value ChoiceQuestions, each answer is a separate value.',
        readOnly: true,
      }),
  })
  .openapi({ description: "A question's answers as text.", required: [] })
  .openapi('TextAnswers')

const AnswerSchema = z
  .object({
    fileUploadAnswers: FileUploadAnswersSchema.exactOptional().openapi({
      description: 'Output only. The answers to a file upload question.',
      readOnly: true,
    }),
    grade: GradeSchema.exactOptional().openapi({
      description: 'Output only. The grade for the answer if the form was a quiz.',
      readOnly: true,
    }),
    questionId: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The question's ID. See also Question.question_id.",
        readOnly: true,
      }),
    textAnswers: TextAnswersSchema.exactOptional().openapi({
      description: 'Output only. The specific answers as text.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'The submitted answer for a question.', required: [] })
  .openapi('Answer')

const RequestSchema: z.ZodType<RequestType> = z
  .lazy(() =>
    z
      .object({
        createItem: CreateItemRequestSchema.exactOptional().openapi({
          description: 'Create a new item.',
        }),
        deleteItem: DeleteItemRequestSchema.exactOptional().openapi({
          description: 'Delete an item.',
        }),
        moveItem: MoveItemRequestSchema.exactOptional().openapi({
          description: 'Move an item to a specified location.',
        }),
        updateFormInfo: UpdateFormInfoRequestSchema.exactOptional().openapi({
          description: "Update Form's Info.",
        }),
        updateItem: UpdateItemRequestSchema.exactOptional().openapi({
          description: 'Update an item.',
        }),
        updateSettings: UpdateSettingsRequestSchema.exactOptional().openapi({
          description: "Updates the Form's settings.",
        }),
      })
      .openapi({ description: 'The kinds of update requests that can be made.', required: [] }),
  )
  .openapi('Request')

const WriteControlSchema = z
  .object({
    requiredRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error.',
      }),
    targetRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter.',
      }),
  })
  .openapi({ description: 'Provides control over how write requests are executed.', required: [] })
  .openapi('WriteControl')

const BatchUpdateFormRequestSchema = z
  .object({
    includeFormInResponse: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to return an updated version of the model in the response.',
      }),
    requests: z
      .array(RequestSchema)
      .exactOptional()
      .openapi({ description: 'Required. The update requests of this batch.' }),
    writeControl: WriteControlSchema.exactOptional().openapi({
      description: 'Provides control over how write requests are executed.',
    }),
  })
  .openapi({
    description:
      'A batch of updates to perform on a form. All the specified updates are made or none of them are.',
    required: [],
  })
  .openapi('BatchUpdateFormRequest')

const FormSchema = z
  .object({
    formId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The form ID.', readOnly: true }),
    info: InfoSchema.exactOptional().openapi({
      description: 'Required. The title and description of the form.',
    }),
    items: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          "Required. A list of the form's items, which can include section headers, questions, embedded media, etc.",
      }),
    linkedSheetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists).',
        readOnly: true,
      }),
    responderUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions.',
        readOnly: true,
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form has not changed. Conversely, a changed ID (for the same form and user) usually means the form has been updated; however, a changed ID can also be due to internal factors such as ID format changes.',
        readOnly: true,
      }),
    settings: FormSettingsSchema.exactOptional().openapi({
      description:
        "The form's settings. This must be updated with UpdateSettingsRequest; it is ignored during `forms.create` and UpdateFormInfoRequest.",
    }),
  })
  .openapi({
    description:
      'A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).',
    required: [],
  })
  .openapi('Form')

const ResponseSchema: z.ZodType<ResponseType> = z
  .lazy(() =>
    z
      .object({
        createItem: CreateItemResponseSchema.exactOptional().openapi({
          description: 'The result of creating an item.',
        }),
      })
      .openapi({ description: 'A single response from an update.', required: [] }),
  )
  .openapi('Response')

const BatchUpdateFormResponseSchema = z
  .object({
    form: FormSchema.exactOptional().openapi({
      description:
        'Based on the bool request field `include_form_in_response`, a form with all applied mutations/updates is returned or not. This may be later than the revision ID created by these changes.',
    }),
    replies: z
      .array(ResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty.',
      }),
    writeControl: WriteControlSchema.exactOptional().openapi({
      description: 'The updated write control after applying the request.',
    }),
  })
  .openapi({ description: 'Response to a BatchUpdateFormRequest.', required: [] })
  .openapi('BatchUpdateFormResponse')

const CloudPubsubTopicSchema = z
  .object({
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub.',
      }),
  })
  .openapi({ description: 'A Pub/Sub topic.', required: [] })
  .openapi('CloudPubsubTopic')

const WatchTargetSchema = z
  .object({
    topic: CloudPubsubTopicSchema.exactOptional().openapi({
      description:
        'A Pub/Sub topic. To receive notifications, the topic must grant publish privileges to the Forms service account `serviceAccount:forms-notifications@system.gserviceaccount.com`. Only the project that owns a topic may create a watch with it. Pub/Sub delivery guarantees should be considered.',
    }),
  })
  .openapi({ description: 'The target for notification delivery.', required: [] })
  .openapi('WatchTarget')

const WatchSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp of when this was created.', readOnly: true }),
    errorType: z
      .enum(['ERROR_TYPE_UNSPECIFIED', 'PROJECT_NOT_AUTHORIZED', 'NO_USER_ACCESS', 'OTHER_ERRORS'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information.',
        readOnly: true,
      }),
    eventType: z
      .enum(['EVENT_TYPE_UNSPECIFIED', 'SCHEMA', 'RESPONSES'])
      .exactOptional()
      .openapi({ description: 'Required. Which event type to watch for.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'SUSPENDED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`.',
        readOnly: true,
      }),
    target: WatchTargetSchema.exactOptional().openapi({
      description: 'Required. Where to send the notification.',
    }),
  })
  .openapi({
    description:
      "A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew",
    required: [],
  })
  .openapi('Watch')

const CreateWatchRequestSchema = z
  .object({
    watch: WatchSchema.exactOptional().openapi({
      description:
        'Required. The watch object. No ID should be set on this object; use `watch_id` instead.',
    }),
    watchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/.',
      }),
  })
  .openapi({ description: 'Create a new watch.', required: [] })
  .openapi('CreateWatchRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FormResponseSchema = z
  .object({
    answers: z
      .record(z.string(), AnswerSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The actual answers to the questions, keyed by question_id.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp for the first time the response was submitted.',
        readOnly: true,
      }),
    formId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The form ID.', readOnly: true }),
    lastSubmittedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades.',
        readOnly: true,
      }),
    respondentEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The email address (if collected) for the respondent.',
        readOnly: true,
      }),
    responseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The response ID.', readOnly: true }),
    totalScore: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A form response.', required: [] })
  .openapi('FormResponse')

const ListFormResponsesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, there are more responses. To get the next page of responses, provide this as `page_token` in a future request.',
      }),
    responses: z
      .array(FormResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'The returned form responses. Note: The `formId` field is not returned in the `FormResponse` object for list requests.',
      }),
  })
  .openapi({ description: 'Response to a ListFormResponsesRequest.', required: [] })
  .openapi('ListFormResponsesResponse')

const ListWatchesResponseSchema = z
  .object({
    watches: z.array(WatchSchema).exactOptional().openapi({ description: 'The returned watches.' }),
  })
  .openapi({ description: 'The response of a ListWatchesRequest.', required: [] })
  .openapi('ListWatchesResponse')

const RenewWatchRequestSchema = z
  .object({})
  .openapi({ description: 'Renew an existing Watch for seven days.' })
  .openapi('RenewWatchRequest')

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
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/forms.body':
          'See, edit, create, and delete all your Google Forms forms',
        'https://www.googleapis.com/auth/forms.body.readonly': 'See all your Google Forms forms',
        'https://www.googleapis.com/auth/forms.responses.readonly':
          'See all responses to your Google Forms forms',
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
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/forms.body':
          'See, edit, create, and delete all your Google Forms forms',
        'https://www.googleapis.com/auth/forms.body.readonly': 'See all your Google Forms forms',
        'https://www.googleapis.com/auth/forms.responses.readonly':
          'See all responses to your Google Forms forms',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1FormsRoute = createRoute({
  method: 'post',
  path: '/v1/forms',
  tags: ['forms'],
  description:
    'Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.',
  operationId: 'forms.forms.create',
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
    body: { content: { 'application/json': { schema: FormSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FormSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
  ],
})

export const getV1FormsFormIdRoute = createRoute({
  method: 'get',
  path: '/v1/forms/{formId}',
  tags: ['forms'],
  description: 'Get a form.',
  operationId: 'forms.forms.get',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The form ID.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FormSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body.readonly'],
    },
  ],
})

export const getV1FormsFormIdResponsesRoute = createRoute({
  method: 'get',
  path: '/v1/forms/{formId}/responses',
  tags: ['forms'],
  description: "List a form's responses.",
  operationId: 'forms.forms.responses.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which form responses to return. Currently, the only supported filters are: * timestamp > *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp >= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the Form whose responses to list.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFormResponsesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.responses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    },
  ],
})

export const getV1FormsFormIdResponsesResponseIdRoute = createRoute({
  method: 'get',
  path: '/v1/forms/{formId}/responses/{responseId}',
  tags: ['forms'],
  description: 'Get one response from the form.',
  operationId: 'forms.forms.responses.get',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The form ID.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      responseId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The response ID within the form.',
            in: 'path',
            name: 'responseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.responses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    },
  ],
})

export const getV1FormsFormIdWatchesRoute = createRoute({
  method: 'get',
  path: '/v1/forms/{formId}/watches',
  tags: ['forms'],
  description:
    'Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.',
  operationId: 'forms.forms.watches.list',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the Form whose watches to list.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWatchesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.responses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    },
  ],
})

export const postV1FormsFormIdWatchesRoute = createRoute({
  method: 'post',
  path: '/v1/forms/{formId}/watches',
  tags: ['forms'],
  description:
    'Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).',
  operationId: 'forms.forms.watches.create',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. ID of the Form to watch.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateWatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.responses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    },
  ],
})

export const deleteV1FormsFormIdWatchesWatchIdRoute = createRoute({
  method: 'delete',
  path: '/v1/forms/{formId}/watches/{watchId}',
  tags: ['forms'],
  description: 'Delete a watch.',
  operationId: 'forms.forms.watches.delete',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Form.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      watchId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Watch to delete.',
            in: 'path',
            name: 'watchId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.responses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    },
  ],
})

export const postV1FormsFormIdWatchesWatchIdRenewRoute = createRoute({
  method: 'post',
  path: '/v1/forms/{formId}/watches/{watchId}:renew',
  tags: ['forms'],
  description:
    'Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.',
  operationId: 'forms.forms.watches.renew',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Form.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      watchId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Watch to renew.',
            in: 'path',
            name: 'watchId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RenewWatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.responses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    },
  ],
})

export const postV1FormsFormIdBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/forms/{formId}:batchUpdate',
  tags: ['forms'],
  description: 'Change the form with a batch of updates.',
  operationId: 'forms.forms.batchUpdate',
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
      formId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The form ID.',
            in: 'path',
            name: 'formId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchUpdateFormRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdateFormResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.body'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.body'],
    },
  ],
})
