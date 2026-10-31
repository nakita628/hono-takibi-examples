import { createRoute, z } from '@hono/zod-openapi'

const IndividualStudentsOptionsSchema = z
  .object({
    studentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifiers for the students that have access to the coursework/announcement.',
      }),
  })
  .openapi({
    description:
      'Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.',
    required: [],
  })
  .openapi('IndividualStudentsOptions')

const DriveFileSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL that can be used to access the Drive item. Read-only.' }),
    id: z.string().exactOptional().openapi({ description: 'Drive API resource ID.' }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a thumbnail image of the Drive item. Read-only.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the Drive item. Read-only.' }),
  })
  .openapi({ description: 'Representation of a Google Drive file.', required: [] })
  .openapi('DriveFile')

const SharedDriveFileSchema = z
  .object({
    driveFile: DriveFileSchema.exactOptional().openapi({ description: 'Drive file details.' }),
    shareMode: z
      .enum(['UNKNOWN_SHARE_MODE', 'VIEW', 'EDIT', 'STUDENT_COPY'])
      .exactOptional()
      .openapi({ description: 'Mechanism by which students access the Drive item.' }),
  })
  .openapi({ description: 'Drive file that is used as material for course work.', required: [] })
  .openapi('SharedDriveFile')

const FormSchema = z
  .object({
    formUrl: z.string().exactOptional().openapi({ description: 'URL of the form.' }),
    responseUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the form responses document. Only set if responses have been recorded and only when the requesting user is an editor of the form. Read-only.',
      }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a thumbnail image of the Form. Read-only.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the Form. Read-only.' }),
  })
  .openapi({ description: 'Google Forms item.', required: [] })
  .openapi('Form')

const LinkSchema = z
  .object({
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a thumbnail image of the target URL. Read-only.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the target of the URL. Read-only.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters.',
      }),
  })
  .openapi({ description: 'URL item.', required: [] })
  .openapi('Link')

const YouTubeVideoSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL that can be used to view the YouTube video. Read-only.' }),
    id: z.string().exactOptional().openapi({ description: 'YouTube API resource ID.' }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a thumbnail image of the YouTube video. Read-only.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the YouTube video. Read-only.' }),
  })
  .openapi({ description: 'YouTube video item.', required: [] })
  .openapi('YouTubeVideo')

const MaterialSchema = z
  .object({
    driveFile: SharedDriveFileSchema.exactOptional().openapi({
      description: 'Google Drive file material.',
    }),
    form: FormSchema.exactOptional().openapi({ description: 'Google Forms material.' }),
    link: LinkSchema.exactOptional().openapi({
      description:
        'Link material. On creation, this is upgraded to a more appropriate type if possible, and this is reflected in the response.',
    }),
    youtubeVideo: YouTubeVideoSchema.exactOptional().openapi({
      description: 'YouTube video material.',
    }),
  })
  .openapi({
    description:
      'Material attached to course work. When creating attachments, setting the `form` field is not supported.',
    required: [],
  })
  .openapi('Material')

const AnnouncementSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.',
      }),
    assigneeMode: z
      .enum(['ASSIGNEE_MODE_UNSPECIFIED', 'ALL_STUDENTS', 'INDIVIDUAL_STUDENTS'])
      .exactOptional()
      .openapi({
        description:
          'Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.',
      }),
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when this announcement was created. Read-only.' }),
    creatorUserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user that created the announcement. Read-only.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Classroom-assigned identifier of this announcement, unique per course. Read-only.',
      }),
    individualStudentsOptions: IndividualStudentsOptionsSchema.exactOptional().openapi({
      description:
        'Identifiers of students with access to the announcement. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the announcement.',
    }),
    materials: z
      .array(MaterialSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional materials. Announcements must have no more than 20 material items.',
      }),
    scheduledTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional timestamp when this announcement is scheduled to be published.',
      }),
    state: z
      .enum(['ANNOUNCEMENT_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'])
      .exactOptional()
      .openapi({
        description: 'Status of this announcement. If unspecified, the default state is `DRAFT`.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the most recent change to this announcement. Read-only.',
      }),
  })
  .openapi({
    description: 'Announcement created by a teacher for students of the course',
    required: [],
  })
  .openapi('Announcement')

const DriveFolderSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL that can be used to access the Drive folder. Read-only.' }),
    id: z.string().exactOptional().openapi({ description: 'Drive API resource ID.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the Drive folder. Read-only.' }),
  })
  .openapi({ description: 'Representation of a Google Drive folder.', required: [] })
  .openapi('DriveFolder')

const AssignmentSchema = z
  .object({
    studentWorkFolder: DriveFolderSchema.exactOptional().openapi({
      description:
        'Drive folder where attachments from student submissions are placed. This is only populated for course teachers and administrators.',
    }),
  })
  .openapi({ description: 'Additional details for assignments.', required: [] })
  .openapi('Assignment')

const AttachmentSchema = z
  .object({
    driveFile: DriveFileSchema.exactOptional().openapi({
      description: 'Google Drive file attachment.',
    }),
    form: FormSchema.exactOptional().openapi({ description: 'Google Forms attachment.' }),
    link: LinkSchema.exactOptional().openapi({ description: 'Link attachment.' }),
    youTubeVideo: YouTubeVideoSchema.exactOptional().openapi({
      description: 'Youtube video attachment.',
    }),
  })
  .openapi({
    description:
      'Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.',
    required: [],
  })
  .openapi('Attachment')

const AssignmentSubmissionSchema = z
  .object({
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be.',
      }),
  })
  .openapi({ description: 'Student work for an assignment.', required: [] })
  .openapi('AssignmentSubmission')

const CloudPubsubTopicSchema = z
  .object({
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).',
      }),
  })
  .openapi({
    description:
      'A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.',
    required: [],
  })
  .openapi('CloudPubsubTopic')

const CourseMaterialSchema = z
  .object({
    driveFile: DriveFileSchema.exactOptional().openapi({
      description: 'Google Drive file attachment.',
    }),
    form: FormSchema.exactOptional().openapi({ description: 'Google Forms attachment.' }),
    link: LinkSchema.exactOptional().openapi({ description: 'Link atatchment.' }),
    youTubeVideo: YouTubeVideoSchema.exactOptional().openapi({
      description: 'Youtube video attachment.',
    }),
  })
  .openapi({
    description: 'A material attached to a course as part of a material set.',
    required: [],
  })
  .openapi('CourseMaterial')

const CourseMaterialSetSchema = z
  .object({
    materials: z
      .array(CourseMaterialSchema)
      .exactOptional()
      .openapi({ description: 'Materials attached to this set.' }),
    title: z.string().exactOptional().openapi({ description: 'Title for this set.' }),
  })
  .openapi({
    description:
      'A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.',
    required: [],
  })
  .openapi('CourseMaterialSet')

const GradeCategorySchema = z
  .object({
    defaultGradeDenominator: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS.',
      }),
    id: z.string().exactOptional().openapi({ description: 'ID of the grade category.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the grade category.' }),
    weight: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES.',
      }),
  })
  .openapi({
    description:
      'Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.',
    required: [],
  })
  .openapi('GradeCategory')

const GradebookSettingsSchema = z
  .object({
    calculationType: z
      .enum(['CALCULATION_TYPE_UNSPECIFIED', 'TOTAL_POINTS', 'WEIGHTED_CATEGORIES'])
      .exactOptional()
      .openapi({ description: 'Indicates how the overall grade is calculated.' }),
    displaySetting: z
      .enum([
        'DISPLAY_SETTING_UNSPECIFIED',
        'SHOW_OVERALL_GRADE',
        'HIDE_OVERALL_GRADE',
        'SHOW_TEACHERS_ONLY',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates who can see the overall grade..' }),
    gradeCategories: z
      .array(GradeCategorySchema)
      .exactOptional()
      .openapi({
        description: 'Grade categories that are available for coursework in the course.',
      }),
  })
  .openapi({
    description:
      'The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.',
    required: [],
  })
  .openapi('GradebookSettings')

const CourseSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute link to this course in the Classroom web UI. Read-only.' }),
    calendarId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only.',
      }),
    courseGroupEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.',
      }),
    courseMaterialSets: z
      .array(CourseMaterialSetSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Sets of materials that appear on the "about" page of this course. Read-only.',
      }),
    courseState: z
      .enum([
        'COURSE_STATE_UNSPECIFIED',
        'ACTIVE',
        'ARCHIVED',
        'PROVISIONED',
        'DECLINED',
        'SUSPENDED',
      ])
      .exactOptional()
      .openapi({
        description: 'State of the course. If unspecified, the default state is `PROVISIONED`.',
      }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional description. For example, "We\'ll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.',
      }),
    descriptionHeading: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.',
      }),
    enrollmentCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.',
      }),
    gradebookSettings: GradebookSettingsSchema.exactOptional().openapi({
      description:
        "The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to. Read-only",
    }),
    guardiansEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not guardian notifications are enabled for this course. Read-only.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.',
      }),
    ownerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.',
      }),
    room: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.',
      }),
    section: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.',
      }),
    teacherFolder: DriveFolderSchema.exactOptional().openapi({
      description:
        'Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for teachers of the course and domain administrators. Read-only.',
    }),
    teacherGroupEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.',
      }),
  })
  .openapi({ description: 'A Course in Classroom.', required: [] })
  .openapi('Course')

const CourseAliasSchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters.',
      }),
  })
  .openapi({
    description:
      "Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.",
    required: [],
  })
  .openapi('CourseAlias')

const CourseRosterChangesInfoSchema = z
  .object({
    courseId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `course_id` of the course to subscribe to roster changes for.',
      }),
  })
  .openapi({
    description: 'Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.',
    required: [],
  })
  .openapi('CourseRosterChangesInfo')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const MultipleChoiceQuestionSchema = z
  .object({
    choices: z.array(z.string()).exactOptional().openapi({ description: 'Possible choices.' }),
  })
  .openapi({ description: 'Additional details for multiple-choice questions.', required: [] })
  .openapi('MultipleChoiceQuestion')

const CourseWorkSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.',
      }),
    assigneeMode: z
      .enum(['ASSIGNEE_MODE_UNSPECIFIED', 'ALL_STUDENTS', 'INDIVIDUAL_STUDENTS'])
      .exactOptional()
      .openapi({
        description:
          'Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.',
      }),
    assignment: AssignmentSchema.exactOptional().openapi({
      description:
        'Assignment details. This is populated only when `work_type` is `ASSIGNMENT`. Read-only.',
    }),
    associatedWithDeveloper: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.',
      }),
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when this course work was created. Read-only.' }),
    creatorUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier for the user that created the coursework. Read-only.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.',
      }),
    dueDate: DateSchema.exactOptional().openapi({
      description:
        'Optional date, in UTC, that submissions for this course work are due. This must be specified if `due_time` is specified.',
    }),
    dueTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        'Optional time of day, in UTC, that submissions for this course work are due. This must be specified if `due_date` is specified.',
    }),
    gradeCategory: GradeCategorySchema.exactOptional().openapi({
      description:
        "The category that this coursework's grade contributes to. Present only when a category has been chosen for the coursework. May be used in calculating the overall grade. Read-only.",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Classroom-assigned identifier of this course work, unique per course. Read-only.',
      }),
    individualStudentsOptions: IndividualStudentsOptionsSchema.exactOptional().openapi({
      description:
        'Identifiers of students with access to the coursework. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field are assigned the coursework.',
    }),
    materials: z
      .array(MaterialSchema)
      .exactOptional()
      .openapi({
        description: 'Additional materials. CourseWork must have no more than 20 material items.',
      }),
    maxPoints: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.',
      }),
    multipleChoiceQuestion: MultipleChoiceQuestionSchema.exactOptional().openapi({
      description:
        'Multiple choice question details. For read operations, this field is populated only when `work_type` is `MULTIPLE_CHOICE_QUESTION`. For write operations, this field must be specified when creating course work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be set otherwise.',
    }),
    scheduledTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional timestamp when this course work is scheduled to be published.',
      }),
    state: z
      .enum(['COURSE_WORK_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'])
      .exactOptional()
      .openapi({
        description: 'Status of this course work. If unspecified, the default state is `DRAFT`.',
      }),
    submissionModificationMode: z
      .enum([
        'SUBMISSION_MODIFICATION_MODE_UNSPECIFIED',
        'MODIFIABLE_UNTIL_TURNED_IN',
        'MODIFIABLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.',
      }),
    topicId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the most recent change to this course work. Read-only.',
      }),
    workType: z
      .enum([
        'COURSE_WORK_TYPE_UNSPECIFIED',
        'ASSIGNMENT',
        'SHORT_ANSWER_QUESTION',
        'MULTIPLE_CHOICE_QUESTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of this course work. The type is set when the course work is created and cannot be changed.',
      }),
  })
  .openapi({
    description: 'Course work created by a teacher for students of the course.',
    required: [],
  })
  .openapi('CourseWork')

const CourseWorkChangesInfoSchema = z
  .object({
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `course_id` of the course to subscribe to work changes for.' }),
  })
  .openapi({
    description: 'Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.',
    required: [],
  })
  .openapi('CourseWorkChangesInfo')

const CourseWorkMaterialSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.',
      }),
    assigneeMode: z
      .enum(['ASSIGNEE_MODE_UNSPECIFIED', 'ALL_STUDENTS', 'INDIVIDUAL_STUDENTS'])
      .exactOptional()
      .openapi({
        description:
          'Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.',
      }),
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when this course work material was created. Read-only.' }),
    creatorUserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier for the user that created the course work material. Read-only.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Classroom-assigned identifier of this course work material, unique per course. Read-only.',
      }),
    individualStudentsOptions: IndividualStudentsOptionsSchema.exactOptional().openapi({
      description:
        'Identifiers of students with access to the course work material. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the course work material.',
    }),
    materials: z
      .array(MaterialSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional materials. A course work material must have no more than 20 material items.',
      }),
    scheduledTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional timestamp when this course work material is scheduled to be published.',
      }),
    state: z
      .enum(['COURSEWORK_MATERIAL_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'Status of this course work material. If unspecified, the default state is `DRAFT`.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.',
      }),
    topicId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the most recent change to this course work material. Read-only.',
      }),
  })
  .openapi({
    description: 'Course work material created by a teacher for students of the course',
    required: [],
  })
  .openapi('CourseWorkMaterial')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FeedSchema = z
  .object({
    courseRosterChangesInfo: CourseRosterChangesInfoSchema.exactOptional().openapi({
      description:
        'Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. This field must be specified if `feed_type` is `COURSE_ROSTER_CHANGES`.',
    }),
    courseWorkChangesInfo: CourseWorkChangesInfoSchema.exactOptional().openapi({
      description:
        'Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. This field must be specified if `feed_type` is `COURSE_WORK_CHANGES`.',
    }),
    feedType: z
      .enum([
        'FEED_TYPE_UNSPECIFIED',
        'DOMAIN_ROSTER_CHANGES',
        'COURSE_ROSTER_CHANGES',
        'COURSE_WORK_CHANGES',
      ])
      .exactOptional()
      .openapi({ description: 'The type of feed.' }),
  })
  .openapi({
    description:
      'A class of notifications that an application can register to receive. For example: "all roster changes for a domain".',
    required: [],
  })
  .openapi('Feed')

const GlobalPermissionSchema = z
  .object({
    permission: z
      .enum(['PERMISSION_UNSPECIFIED', 'CREATE_COURSE'])
      .exactOptional()
      .openapi({ description: 'Permission value.' }),
  })
  .openapi({ description: 'Global user permission description.', required: [] })
  .openapi('GlobalPermission')

const GradeHistorySchema = z
  .object({
    actorUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The teacher who made the grade change.' }),
    gradeChangeType: z
      .enum([
        'UNKNOWN_GRADE_CHANGE_TYPE',
        'DRAFT_GRADE_POINTS_EARNED_CHANGE',
        'ASSIGNED_GRADE_POINTS_EARNED_CHANGE',
        'MAX_POINTS_CHANGE',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of grade change at this time in the submission grade history.',
      }),
    gradeTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the grade of the submission was changed.' }),
    maxPoints: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The denominator of the grade at this time in the submission grade history.',
      }),
    pointsEarned: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The numerator of the grade at this time in the submission grade history.',
      }),
  })
  .openapi({ description: 'The history of each grade on this submission.', required: [] })
  .openapi('GradeHistory')

const NameSchema = z
  .object({
    familyName: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's last name. Read-only." }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's full name formed by concatenating the first and last name values. Read-only.",
      }),
    givenName: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's first name. Read-only." }),
  })
  .openapi({ description: "Details of the user's name.", required: [] })
  .openapi('Name')

const UserProfileSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the user. Must request `https://www.googleapis.com/auth/classroom.profile.emails` scope for this field to be populated in a response body. Read-only.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Identifier of the user. Read-only.' }),
    name: NameSchema.exactOptional().openapi({ description: 'Name of the user. Read-only.' }),
    permissions: z
      .array(GlobalPermissionSchema)
      .exactOptional()
      .openapi({ description: 'Global permissions of the user. Read-only.' }),
    photoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL of user's profile photo. Must request `https://www.googleapis.com/auth/classroom.profile.photos` scope for this field to be populated in a response body. Read-only.",
      }),
    verifiedTeacher: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only",
      }),
  })
  .openapi({ description: 'Global information for a user.', required: [] })
  .openapi('UserProfile')

const GuardianSchema = z
  .object({
    guardianId: z.string().exactOptional().openapi({ description: 'Identifier for the guardian.' }),
    guardianProfile: UserProfileSchema.exactOptional().openapi({
      description: 'User profile for the guardian.',
    }),
    invitedEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.',
      }),
    studentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier for the student to whom the guardian relationship applies.',
      }),
  })
  .openapi({
    description:
      "Association between a student and a guardian of that student. The guardian may receive information about the student's course work.",
    required: [],
  })
  .openapi('Guardian')

const GuardianInvitationSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that this invitation was created. Read-only.' }),
    invitationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for this invitation. Read-only.' }),
    invitedEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address that the invitation was sent to. This field is only visible to domain administrators.',
      }),
    state: z
      .enum(['GUARDIAN_INVITATION_STATE_UNSPECIFIED', 'PENDING', 'COMPLETE'])
      .exactOptional()
      .openapi({ description: 'The state that this invitation is in.' }),
    studentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the student (in standard format)' }),
  })
  .openapi({
    description:
      'An invitation to become the guardian of a specified user, sent to a specified email address.',
    required: [],
  })
  .openapi('GuardianInvitation')

const InvitationSchema = z
  .object({
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course to invite the user to.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier assigned by Classroom. Read-only.' }),
    role: z
      .enum(['COURSE_ROLE_UNSPECIFIED', 'STUDENT', 'TEACHER', 'OWNER'])
      .exactOptional()
      .openapi({
        description: 'Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
      }),
  })
  .openapi({ description: 'An invitation to join a course.', required: [] })
  .openapi('Invitation')

const ListAnnouncementsResponseSchema = z
  .object({
    announcements: z
      .array(AnnouncementSchema)
      .exactOptional()
      .openapi({ description: 'Announcement items that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing course work.', required: [] })
  .openapi('ListAnnouncementsResponse')

const ListCourseAliasesResponseSchema = z
  .object({
    aliases: z
      .array(CourseAliasSchema)
      .exactOptional()
      .openapi({ description: 'The course aliases.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing course aliases.', required: [] })
  .openapi('ListCourseAliasesResponse')

const ListCourseWorkMaterialResponseSchema = z
  .object({
    courseWorkMaterial: z
      .array(CourseWorkMaterialSchema)
      .exactOptional()
      .openapi({ description: 'Course work material items that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing course work material.', required: [] })
  .openapi('ListCourseWorkMaterialResponse')

const ListCourseWorkResponseSchema = z
  .object({
    courseWork: z
      .array(CourseWorkSchema)
      .exactOptional()
      .openapi({ description: 'Course work items that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing course work.', required: [] })
  .openapi('ListCourseWorkResponse')

const ListCoursesResponseSchema = z
  .object({
    courses: z
      .array(CourseSchema)
      .exactOptional()
      .openapi({ description: 'Courses that match the list request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing courses.', required: [] })
  .openapi('ListCoursesResponse')

const ListGuardianInvitationsResponseSchema = z
  .object({
    guardianInvitations: z
      .array(GuardianInvitationSchema)
      .exactOptional()
      .openapi({ description: 'Guardian invitations that matched the list request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing guardian invitations.', required: [] })
  .openapi('ListGuardianInvitationsResponse')

const ListGuardiansResponseSchema = z
  .object({
    guardians: z
      .array(GuardianSchema)
      .exactOptional()
      .openapi({
        description:
          'Guardians on this page of results that met the criteria specified in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing guardians.', required: [] })
  .openapi('ListGuardiansResponse')

const ListInvitationsResponseSchema = z
  .object({
    invitations: z
      .array(InvitationSchema)
      .exactOptional()
      .openapi({ description: 'Invitations that match the list request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
  })
  .openapi({ description: 'Response when listing invitations.', required: [] })
  .openapi('ListInvitationsResponse')

const MultipleChoiceSubmissionSchema = z
  .object({
    answer: z.string().exactOptional().openapi({ description: "Student's select choice." }),
  })
  .openapi({ description: 'Student work for a multiple-choice question.', required: [] })
  .openapi('MultipleChoiceSubmission')

const ShortAnswerSubmissionSchema = z
  .object({
    answer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Student response to a short-answer question.' }),
  })
  .openapi({ description: 'Student work for a short answer question.', required: [] })
  .openapi('ShortAnswerSubmission')

const StateHistorySchema = z
  .object({
    actorUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The teacher or student who made the change.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATED',
        'TURNED_IN',
        'RETURNED',
        'RECLAIMED_BY_STUDENT',
        'STUDENT_EDITED_AFTER_TURN_IN',
      ])
      .exactOptional()
      .openapi({ description: 'The workflow pipeline stage.' }),
    stateTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the submission entered this state.' }),
  })
  .openapi({ description: 'The history of each state this submission has been in.', required: [] })
  .openapi('StateHistory')

const SubmissionHistorySchema = z
  .object({
    gradeHistory: GradeHistorySchema.exactOptional().openapi({
      description: 'The grade history information of the submission, if present.',
    }),
    stateHistory: StateHistorySchema.exactOptional().openapi({
      description: 'The state history information of the submission, if present.',
    }),
  })
  .openapi({
    description:
      'The history of the submission. This currently includes state and grade histories.',
    required: [],
  })
  .openapi('SubmissionHistory')

const StudentSubmissionSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Absolute link to the submission in the Classroom web UI. Read-only.',
      }),
    assignedGrade: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers.',
      }),
    assignmentSubmission: AssignmentSubmissionSchema.exactOptional().openapi({
      description:
        'Submission content when course_work_type is ASSIGNMENT. Students can modify this content using ModifyAttachments.',
    }),
    associatedWithDeveloper: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.',
      }),
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    courseWorkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier for the course work this corresponds to. Read-only.' }),
    courseWorkType: z
      .enum([
        'COURSE_WORK_TYPE_UNSPECIFIED',
        'ASSIGNMENT',
        'SHORT_ANSWER_QUESTION',
        'MULTIPLE_CHOICE_QUESTION',
      ])
      .exactOptional()
      .openapi({ description: 'Type of course work this submission is for. Read-only.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.',
      }),
    draftGrade: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only.',
      }),
    late: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this submission is late. Read-only.' }),
    multipleChoiceSubmission: MultipleChoiceSubmissionSchema.exactOptional().openapi({
      description: 'Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.',
    }),
    shortAnswerSubmission: ShortAnswerSubmissionSchema.exactOptional().openapi({
      description: 'Submission content when course_work_type is SHORT_ANSWER_QUESTION.',
    }),
    state: z
      .enum([
        'SUBMISSION_STATE_UNSPECIFIED',
        'NEW',
        'CREATED',
        'TURNED_IN',
        'RETURNED',
        'RECLAIMED_BY_STUDENT',
      ])
      .exactOptional()
      .openapi({ description: 'State of this submission. Read-only.' }),
    submissionHistory: z
      .array(SubmissionHistorySchema)
      .exactOptional()
      .openapi({
        description:
          'The history of the submission (includes state and grade histories). Read-only.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier for the student that owns this submission. Read-only.' }),
  })
  .openapi({
    description:
      'Student submission for course work. `StudentSubmission` items are generated when a `CourseWork` item is created. Student submissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.',
    required: [],
  })
  .openapi('StudentSubmission')

const ListStudentSubmissionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
    studentSubmissions: z
      .array(StudentSubmissionSchema)
      .exactOptional()
      .openapi({ description: 'Student work that matches the request.' }),
  })
  .openapi({ description: 'Response when listing student submissions.', required: [] })
  .openapi('ListStudentSubmissionsResponse')

const StudentSchema = z
  .object({
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    profile: UserProfileSchema.exactOptional().openapi({
      description: 'Global user information for the student. Read-only.',
    }),
    studentWorkFolder: DriveFolderSchema.exactOptional().openapi({
      description:
        "Information about a Drive Folder for this student's work in this course. Only visible to the student and domain administrators. Read-only.",
    }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
      }),
  })
  .openapi({ description: 'Student in a course.', required: [] })
  .openapi('Student')

const ListStudentsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
    students: z
      .array(StudentSchema)
      .exactOptional()
      .openapi({ description: 'Students who match the list request.' }),
  })
  .openapi({ description: 'Response when listing students.', required: [] })
  .openapi('ListStudentsResponse')

const TeacherSchema = z
  .object({
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    profile: UserProfileSchema.exactOptional().openapi({
      description: 'Global user information for the teacher. Read-only.',
    }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
      }),
  })
  .openapi({ description: 'Teacher of a course.', required: [] })
  .openapi('Teacher')

const ListTeachersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
    teachers: z
      .array(TeacherSchema)
      .exactOptional()
      .openapi({ description: 'Teachers who match the list request.' }),
  })
  .openapi({ description: 'Response when listing teachers.', required: [] })
  .openapi('ListTeachersResponse')

const TopicSchema = z
  .object({
    courseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the course. Read-only.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.',
      }),
    topicId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the topic. Read-only.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the topic was last updated by the system. Read-only.' }),
  })
  .openapi({ description: 'Topic created by a teacher for the course', required: [] })
  .openapi('Topic')

const ListTopicResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token identifying the next page of results to return. If empty, no further results are available.',
      }),
    topic: z
      .array(TopicSchema)
      .exactOptional()
      .openapi({ description: 'Topic items that match the request.' }),
  })
  .openapi({ description: 'Response when listing topics.', required: [] })
  .openapi('ListTopicResponse')

const ModifyIndividualStudentsOptionsSchema = z
  .object({
    addStudentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'IDs of students to be added as having access to this coursework/announcement.',
      }),
    removeStudentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'IDs of students to be removed from having access to this coursework/announcement.',
      }),
  })
  .openapi({
    description:
      'Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.',
    required: [],
  })
  .openapi('ModifyIndividualStudentsOptions')

const ModifyAnnouncementAssigneesRequestSchema = z
  .object({
    assigneeMode: z
      .enum(['ASSIGNEE_MODE_UNSPECIFIED', 'ALL_STUDENTS', 'INDIVIDUAL_STUDENTS'])
      .exactOptional()
      .openapi({
        description:
          'Mode of the announcement describing whether it is accessible by all students or specified individual students.',
      }),
    modifyIndividualStudentsOptions: ModifyIndividualStudentsOptionsSchema.exactOptional().openapi({
      description:
        'Set which students can view or cannot view the announcement. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.',
    }),
  })
  .openapi({
    description: 'Request to modify assignee mode and options of an announcement.',
    required: [],
  })
  .openapi('ModifyAnnouncementAssigneesRequest')

const ModifyAttachmentsRequestSchema = z
  .object({
    addAttachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.',
      }),
  })
  .openapi({
    description: 'Request to modify the attachments of a student submission.',
    required: [],
  })
  .openapi('ModifyAttachmentsRequest')

const ModifyCourseWorkAssigneesRequestSchema = z
  .object({
    assigneeMode: z
      .enum(['ASSIGNEE_MODE_UNSPECIFIED', 'ALL_STUDENTS', 'INDIVIDUAL_STUDENTS'])
      .exactOptional()
      .openapi({
        description:
          'Mode of the coursework describing whether it will be assigned to all students or specified individual students.',
      }),
    modifyIndividualStudentsOptions: ModifyIndividualStudentsOptionsSchema.exactOptional().openapi({
      description:
        'Set which students are assigned or not assigned to the coursework. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.',
    }),
  })
  .openapi({
    description: 'Request to modify assignee mode and options of a coursework.',
    required: [],
  })
  .openapi('ModifyCourseWorkAssigneesRequest')

const ReclaimStudentSubmissionRequestSchema = z
  .object({})
  .openapi({ description: 'Request to reclaim a student submission.' })
  .openapi('ReclaimStudentSubmissionRequest')

const RegistrationSchema = z
  .object({
    cloudPubsubTopic: CloudPubsubTopicSchema.exactOptional().openapi({
      description: 'The Cloud Pub/Sub topic that notifications are to be sent to.',
    }),
    expiryTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time until which the `Registration` is effective. This is a read-only field assigned by the server.',
      }),
    feed: FeedSchema.exactOptional().openapi({
      description:
        'Specification for the class of notifications that Classroom should deliver to the destination.',
    }),
    registrationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A server-generated unique identifier for this `Registration`. Read-only.',
      }),
  })
  .openapi({
    description:
      'An instruction to Classroom to send notifications from the `feed` to the provided destination.',
    required: [],
  })
  .openapi('Registration')

const ReturnStudentSubmissionRequestSchema = z
  .object({})
  .openapi({ description: 'Request to return a student submission.' })
  .openapi('ReturnStudentSubmissionRequest')

const TurnInStudentSubmissionRequestSchema = z
  .object({})
  .openapi({ description: 'Request to turn in a student submission.' })
  .openapi('TurnInStudentSubmissionRequest')

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
        'https://www.googleapis.com/auth/classroom.announcements':
          'View and manage announcements in Google Classroom',
        'https://www.googleapis.com/auth/classroom.announcements.readonly':
          'View announcements in Google Classroom',
        'https://www.googleapis.com/auth/classroom.courses':
          'See, edit, create, and permanently delete your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.courses.readonly':
          'View your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.coursework.me':
          'See, create and edit coursework items including assignments, questions, and grades',
        'https://www.googleapis.com/auth/classroom.coursework.me.readonly':
          'View your course work and grades in Google Classroom',
        'https://www.googleapis.com/auth/classroom.coursework.students':
          'Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer',
        'https://www.googleapis.com/auth/classroom.coursework.students.readonly':
          'View course work and grades for students in the Google Classroom classes you teach or administer',
        'https://www.googleapis.com/auth/classroom.courseworkmaterials':
          'See, edit, and create classwork materials in Google Classroom',
        'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly':
          'See all classwork materials for your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly':
          'View your Google Classroom guardians',
        'https://www.googleapis.com/auth/classroom.guardianlinks.students':
          'View and manage guardians for students in your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly':
          'View guardians for students in your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.profile.emails':
          'View the email addresses of people in your classes',
        'https://www.googleapis.com/auth/classroom.profile.photos':
          'View the profile photos of people in your classes',
        'https://www.googleapis.com/auth/classroom.push-notifications':
          'Receive notifications about your Google Classroom data',
        'https://www.googleapis.com/auth/classroom.rosters':
          'Manage your Google Classroom class rosters',
        'https://www.googleapis.com/auth/classroom.rosters.readonly':
          'View your Google Classroom class rosters',
        'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly':
          'View your course work and grades in Google Classroom',
        'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly':
          'View course work and grades for students in the Google Classroom classes you teach or administer',
        'https://www.googleapis.com/auth/classroom.topics':
          'See, create, and edit topics in Google Classroom',
        'https://www.googleapis.com/auth/classroom.topics.readonly':
          'View topics in Google Classroom',
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
        'https://www.googleapis.com/auth/classroom.announcements':
          'View and manage announcements in Google Classroom',
        'https://www.googleapis.com/auth/classroom.announcements.readonly':
          'View announcements in Google Classroom',
        'https://www.googleapis.com/auth/classroom.courses':
          'See, edit, create, and permanently delete your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.courses.readonly':
          'View your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.coursework.me':
          'See, create and edit coursework items including assignments, questions, and grades',
        'https://www.googleapis.com/auth/classroom.coursework.me.readonly':
          'View your course work and grades in Google Classroom',
        'https://www.googleapis.com/auth/classroom.coursework.students':
          'Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer',
        'https://www.googleapis.com/auth/classroom.coursework.students.readonly':
          'View course work and grades for students in the Google Classroom classes you teach or administer',
        'https://www.googleapis.com/auth/classroom.courseworkmaterials':
          'See, edit, and create classwork materials in Google Classroom',
        'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly':
          'See all classwork materials for your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly':
          'View your Google Classroom guardians',
        'https://www.googleapis.com/auth/classroom.guardianlinks.students':
          'View and manage guardians for students in your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly':
          'View guardians for students in your Google Classroom classes',
        'https://www.googleapis.com/auth/classroom.profile.emails':
          'View the email addresses of people in your classes',
        'https://www.googleapis.com/auth/classroom.profile.photos':
          'View the profile photos of people in your classes',
        'https://www.googleapis.com/auth/classroom.push-notifications':
          'Receive notifications about your Google Classroom data',
        'https://www.googleapis.com/auth/classroom.rosters':
          'Manage your Google Classroom class rosters',
        'https://www.googleapis.com/auth/classroom.rosters.readonly':
          'View your Google Classroom class rosters',
        'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly':
          'View your course work and grades in Google Classroom',
        'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly':
          'View course work and grades for students in the Google Classroom classes you teach or administer',
        'https://www.googleapis.com/auth/classroom.topics':
          'See, create, and edit topics in Google Classroom',
        'https://www.googleapis.com/auth/classroom.topics.readonly':
          'View topics in Google Classroom',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1CoursesRoute = createRoute({
  method: 'get',
  path: '/v1/courses',
  tags: ['courses'],
  description:
    'Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.',
  operationId: 'classroom.courses.list',
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
      courseStates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'COURSE_STATE_UNSPECIFIED',
              'ACTIVE',
              'ARCHIVED',
              'PROVISIONED',
              'DECLINED',
              'SUSPENDED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.',
            explode: true,
            in: 'query',
            name: 'courseStates',
            schema: {
              items: {
                enum: [
                  'COURSE_STATE_UNSPECIFIED',
                  'ACTIVE',
                  'ARCHIVED',
                  'PROVISIONED',
                  'DECLINED',
                  'SUSPENDED',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      studentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'query',
            name: 'studentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      teacherId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'query',
            name: 'teacherId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCoursesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
    },
  ],
})

export const postV1CoursesRoute = createRoute({
  method: 'post',
  path: '/v1/courses',
  tags: ['courses'],
  description:
    "Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.",
  operationId: 'classroom.courses.create',
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
    body: { content: { 'application/json': { schema: CourseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
  ],
})

export const getV1CoursesCourseIdAliasesRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/aliases',
  tags: ['courses'],
  description:
    'Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.',
  operationId: 'classroom.courses.aliases.list',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCourseAliasesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdAliasesRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/aliases',
  tags: ['courses'],
  description:
    'Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).',
  operationId: 'classroom.courses.aliases.create',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseAliasSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseAliasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
  ],
})

export const deleteV1CoursesCourseIdAliasesAliasRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/aliases/{alias}',
  tags: ['courses'],
  description:
    'Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).',
  operationId: 'classroom.courses.aliases.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'Alias to delete. This may not be the Classroom-assigned identifier.',
            in: 'path',
            name: 'alias',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
  ],
})

export const getV1CoursesCourseIdAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/announcements',
  tags: ['courses'],
  description:
    'Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.',
  operationId: 'classroom.courses.announcements.list',
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
      announcementStates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ANNOUNCEMENT_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.',
            explode: true,
            in: 'query',
            name: 'announcementStates',
            schema: {
              items: {
                enum: ['ANNOUNCEMENT_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`',
            in: 'query',
            name: 'orderBy',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAnnouncementsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdAnnouncementsRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/announcements',
  tags: ['courses'],
  description:
    'Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible',
  operationId: 'classroom.courses.announcements.create',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnouncementSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnouncementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements'],
    },
  ],
})

export const getV1CoursesCourseIdAnnouncementsIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/announcements/{id}',
  tags: ['courses'],
  description:
    'Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.',
  operationId: 'classroom.courses.announcements.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the announcement.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnouncementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements.readonly'],
    },
  ],
})

export const deleteV1CoursesCourseIdAnnouncementsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/announcements/{id}',
  tags: ['courses'],
  description:
    'Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.',
  operationId: 'classroom.courses.announcements.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements'],
    },
  ],
})

export const patchV1CoursesCourseIdAnnouncementsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/courses/{courseId}/announcements/{id}',
  tags: ['courses'],
  description:
    'Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist',
  operationId: 'classroom.courses.announcements.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the announcement.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnouncementSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnouncementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements'],
    },
  ],
})

export const postV1CoursesCourseIdAnnouncementsIdModifyAssigneesRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/announcements/{id}:modifyAssignees',
  tags: ['courses'],
  description:
    'Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.',
  operationId: 'classroom.courses.announcements.modifyAssignees',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the announcement.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyAnnouncementAssigneesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnouncementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.announcements'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.announcements'],
    },
  ],
})

export const getV1CoursesCourseIdCourseWorkRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/courseWork',
  tags: ['courses'],
  description:
    'Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.',
  operationId: 'classroom.courses.courseWork.list',
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
      courseWorkStates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['COURSE_WORK_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.',
            explode: true,
            in: 'query',
            name: 'courseWorkStates',
            schema: {
              items: {
                enum: ['COURSE_WORK_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`',
            in: 'query',
            name: 'orderBy',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCourseWorkResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdCourseWorkRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/courseWork',
  tags: ['courses'],
  description:
    'Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible',
  operationId: 'classroom.courses.courseWork.create',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseWorkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
  ],
})

export const getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions',
  tags: ['courses'],
  description:
    'Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.',
  operationId: 'classroom.courses.courseWork.studentSubmissions.list',
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
      late: z
        .enum(['LATE_VALUES_UNSPECIFIED', 'LATE_ONLY', 'NOT_LATE_ONLY'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.',
            in: 'query',
            name: 'late',
            schema: {
              enum: ['LATE_VALUES_UNSPECIFIED', 'LATE_ONLY', 'NOT_LATE_ONLY'],
              type: 'string',
            },
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'SUBMISSION_STATE_UNSPECIFIED',
              'NEW',
              'CREATED',
              'TURNED_IN',
              'RETURNED',
              'RECLAIMED_BY_STUDENT',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Requested submission states. If specified, returned student submissions match one of the specified submission states.',
            explode: true,
            in: 'query',
            name: 'states',
            schema: {
              items: {
                enum: [
                  'SUBMISSION_STATE_UNSPECIFIED',
                  'NEW',
                  'CREATED',
                  'TURNED_IN',
                  'RETURNED',
                  'RECLAIMED_BY_STUDENT',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      courseWorkId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.',
            in: 'path',
            name: 'courseWorkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListStudentSubmissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.student-submissions.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.student-submissions.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.student-submissions.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.student-submissions.students.readonly'],
    },
  ],
})

export const getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}',
  tags: ['courses'],
  description:
    'Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
  operationId: 'classroom.courses.courseWork.studentSubmissions.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      courseWorkId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course work.',
            in: 'path',
            name: 'courseWorkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the student submission.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StudentSubmissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.student-submissions.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.student-submissions.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.student-submissions.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.student-submissions.students.readonly'],
    },
  ],
})

export const patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}',
  tags: ['courses'],
  description:
    'Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
  operationId: 'classroom.courses.courseWork.studentSubmissions.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      courseWorkId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course work.',
            in: 'path',
            name: 'courseWorkId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the student submission.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StudentSubmissionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StudentSubmissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
  ],
})

export const postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsRoute =
  createRoute({
    method: 'post',
    path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments',
    tags: ['courses'],
    description:
      'Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
    operationId: 'classroom.courses.courseWork.studentSubmissions.modifyAttachments',
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
        courseId: z
          .string()
          .openapi({
            param: {
              description:
                'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
              in: 'path',
              name: 'courseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        courseWorkId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the course work.',
              in: 'path',
              name: 'courseWorkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the student submission.',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ModifyAttachmentsRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StudentSubmissionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
        Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
        Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      },
    ],
  })

export const postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimRoute =
  createRoute({
    method: 'post',
    path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim',
    tags: ['courses'],
    description:
      'Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
    operationId: 'classroom.courses.courseWork.studentSubmissions.reclaim',
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
        courseId: z
          .string()
          .openapi({
            param: {
              description:
                'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
              in: 'path',
              name: 'courseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        courseWorkId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the course work.',
              in: 'path',
              name: 'courseWorkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the student submission.',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ReclaimStudentSubmissionRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
        Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      },
    ],
  })

export const postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnRoute =
  createRoute({
    method: 'post',
    path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return',
    tags: ['courses'],
    description:
      'Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
    operationId: 'classroom.courses.courseWork.studentSubmissions.return',
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
        courseId: z
          .string()
          .openapi({
            param: {
              description:
                'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
              in: 'path',
              name: 'courseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        courseWorkId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the course work.',
              in: 'path',
              name: 'courseWorkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the student submission.',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ReturnStudentSubmissionRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
        Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      },
    ],
  })

export const postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInRoute =
  createRoute({
    method: 'post',
    path: '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn',
    tags: ['courses'],
    description:
      'Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
    operationId: 'classroom.courses.courseWork.studentSubmissions.turnIn',
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
        courseId: z
          .string()
          .openapi({
            param: {
              description:
                'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
              in: 'path',
              name: 'courseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        courseWorkId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the course work.',
              in: 'path',
              name: 'courseWorkId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the student submission.',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TurnInStudentSubmissionRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
        Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      },
    ],
  })

export const getV1CoursesCourseIdCourseWorkIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/courseWork/{id}',
  tags: ['courses'],
  description:
    'Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.',
  operationId: 'classroom.courses.courseWork.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course work.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students.readonly'],
    },
  ],
})

export const deleteV1CoursesCourseIdCourseWorkIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/courseWork/{id}',
  tags: ['courses'],
  description:
    'Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.',
  operationId: 'classroom.courses.courseWork.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
  ],
})

export const patchV1CoursesCourseIdCourseWorkIdRoute = createRoute({
  method: 'patch',
  path: '/v1/courses/{courseId}/courseWork/{id}',
  tags: ['courses'],
  description:
    'Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.',
  operationId: 'classroom.courses.courseWork.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `CourseWork` object. If a field that does not support empty values is included in the update mask and not set in the `CourseWork` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course work.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseWorkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
  ],
})

export const postV1CoursesCourseIdCourseWorkIdModifyAssigneesRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/courseWork/{id}:modifyAssignees',
  tags: ['courses'],
  description:
    'Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.',
  operationId: 'classroom.courses.courseWork.modifyAssignees',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the coursework.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyCourseWorkAssigneesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.coursework.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.coursework.students'],
    },
  ],
})

export const getV1CoursesCourseIdCourseWorkMaterialsRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/courseWorkMaterials',
  tags: ['courses'],
  description:
    'Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.',
  operationId: 'classroom.courses.courseWorkMaterials.list',
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
      courseWorkMaterialStates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum(['COURSEWORK_MATERIAL_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED']),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.',
            explode: true,
            in: 'query',
            name: 'courseWorkMaterialStates',
            schema: {
              items: {
                enum: ['COURSEWORK_MATERIAL_STATE_UNSPECIFIED', 'PUBLISHED', 'DRAFT', 'DELETED'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      materialDriveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.',
            in: 'query',
            name: 'materialDriveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      materialLink: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional filtering for course work material with at least one link material whose URL partially matches the provided string.',
            in: 'query',
            name: 'materialLink',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`',
            in: 'query',
            name: 'orderBy',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCourseWorkMaterialResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdCourseWorkMaterialsRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/courseWorkMaterials',
  tags: ['courses'],
  description:
    'Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible',
  operationId: 'classroom.courses.courseWorkMaterials.create',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseWorkMaterialSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkMaterialSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
    },
  ],
})

export const getV1CoursesCourseIdCourseWorkMaterialsIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/courseWorkMaterials/{id}',
  tags: ['courses'],
  description:
    'Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.',
  operationId: 'classroom.courses.courseWorkMaterials.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course work material.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkMaterialSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly'],
    },
  ],
})

export const deleteV1CoursesCourseIdCourseWorkMaterialsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/courseWorkMaterials/{id}',
  tags: ['courses'],
  description:
    'Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.',
  operationId: 'classroom.courses.courseWorkMaterials.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
    },
  ],
})

export const patchV1CoursesCourseIdCourseWorkMaterialsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/courses/{courseId}/courseWorkMaterials/{id}',
  tags: ['courses'],
  description:
    'Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist',
  operationId: 'classroom.courses.courseWorkMaterials.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course work material.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseWorkMaterialSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseWorkMaterialSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
    },
  ],
})

export const getV1CoursesCourseIdStudentsRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/students',
  tags: ['courses'],
  description:
    'Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.',
  operationId: 'classroom.courses.students.list',
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
              'Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListStudentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdStudentsRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/students',
  tags: ['courses'],
  description:
    "Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.",
  operationId: 'classroom.courses.students.create',
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
      enrollmentCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.',
            in: 'query',
            name: 'enrollmentCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StudentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StudentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const getV1CoursesCourseIdStudentsUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/students/{userId}',
  tags: ['courses'],
  description:
    'Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.',
  operationId: 'classroom.courses.students.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StudentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})

export const deleteV1CoursesCourseIdStudentsUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/students/{userId}',
  tags: ['courses'],
  description:
    'Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.',
  operationId: 'classroom.courses.students.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'userId',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const getV1CoursesCourseIdTeachersRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/teachers',
  tags: ['courses'],
  description:
    'Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.',
  operationId: 'classroom.courses.teachers.list',
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
              'Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTeachersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdTeachersRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/teachers',
  tags: ['courses'],
  description:
    "Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.",
  operationId: 'classroom.courses.teachers.create',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TeacherSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeacherSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const getV1CoursesCourseIdTeachersUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/teachers/{userId}',
  tags: ['courses'],
  description:
    'Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.',
  operationId: 'classroom.courses.teachers.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeacherSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})

export const deleteV1CoursesCourseIdTeachersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/teachers/{userId}',
  tags: ['courses'],
  description:
    'Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.',
  operationId: 'classroom.courses.teachers.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'userId',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const getV1CoursesCourseIdTopicsRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/topics',
  tags: ['courses'],
  description:
    'Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.',
  operationId: 'classroom.courses.topics.list',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTopicResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics.readonly'],
    },
  ],
})

export const postV1CoursesCourseIdTopicsRoute = createRoute({
  method: 'post',
  path: '/v1/courses/{courseId}/topics',
  tags: ['courses'],
  description:
    'Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.',
  operationId: 'classroom.courses.topics.create',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TopicSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics'],
    },
  ],
})

export const getV1CoursesCourseIdTopicsIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{courseId}/topics/{id}',
  tags: ['courses'],
  description:
    'Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.',
  operationId: 'classroom.courses.topics.get',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the course.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the topic.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics.readonly'],
    },
  ],
})

export const deleteV1CoursesCourseIdTopicsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{courseId}/topics/{id}',
  tags: ['courses'],
  description:
    'Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.',
  operationId: 'classroom.courses.topics.delete',
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
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the topic to delete.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics'],
    },
  ],
})

export const patchV1CoursesCourseIdTopicsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/courses/{courseId}/topics/{id}',
  tags: ['courses'],
  description:
    'Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist',
  operationId: 'classroom.courses.topics.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      courseId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'courseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the topic.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TopicSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TopicSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.topics'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.topics'],
    },
  ],
})

export const getV1CoursesIdRoute = createRoute({
  method: 'get',
  path: '/v1/courses/{id}',
  tags: ['courses'],
  description:
    'Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.',
  operationId: 'classroom.courses.get',
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
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
    },
  ],
})

export const putV1CoursesIdRoute = createRoute({
  method: 'put',
  path: '/v1/courses/{id}',
  tags: ['courses'],
  description:
    'Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable',
  operationId: 'classroom.courses.update',
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
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
  ],
})

export const deleteV1CoursesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/courses/{id}',
  tags: ['courses'],
  description:
    'Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.',
  operationId: 'classroom.courses.delete',
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
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
  ],
})

export const patchV1CoursesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/courses/{id}',
  tags: ['courses'],
  description:
    'Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner',
  operationId: 'classroom.courses.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CourseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CourseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.courses'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.courses'],
    },
  ],
})

export const getV1InvitationsRoute = createRoute({
  method: 'get',
  path: '/v1/invitations',
  tags: ['invitations'],
  description:
    'Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.',
  operationId: 'classroom.invitations.list',
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
      courseId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts returned invitations to those for a course with the specified identifier.',
            in: 'query',
            name: 'courseId',
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
              'Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInvitationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})

export const postV1InvitationsRoute = createRoute({
  method: 'post',
  path: '/v1/invitations',
  tags: ['invitations'],
  description:
    "Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.",
  operationId: 'classroom.invitations.create',
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
    body: { content: { 'application/json': { schema: InvitationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InvitationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const getV1InvitationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/invitations/{id}',
  tags: ['invitations'],
  description:
    'Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.',
  operationId: 'classroom.invitations.get',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the invitation to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InvitationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})

export const deleteV1InvitationsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/invitations/{id}',
  tags: ['invitations'],
  description:
    'Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.',
  operationId: 'classroom.invitations.delete',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the invitation to delete.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const postV1InvitationsIdAcceptRoute = createRoute({
  method: 'post',
  path: '/v1/invitations/{id}:accept',
  tags: ['invitations'],
  description:
    'Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.',
  operationId: 'classroom.invitations.accept',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the invitation to accept.',
            in: 'path',
            name: 'id',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
  ],
})

export const postV1RegistrationsRoute = createRoute({
  method: 'post',
  path: '/v1/registrations',
  tags: ['registrations'],
  description:
    "Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.",
  operationId: 'classroom.registrations.create',
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
    body: { content: { 'application/json': { schema: RegistrationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegistrationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.push-notifications'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.push-notifications'],
    },
  ],
})

export const deleteV1RegistrationsRegistrationIdRoute = createRoute({
  method: 'delete',
  path: '/v1/registrations/{registrationId}',
  tags: ['registrations'],
  description:
    'Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.',
  operationId: 'classroom.registrations.delete',
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
      registrationId: z
        .string()
        .openapi({
          param: {
            description: 'The `registration_id` of the `Registration` to be deleted.',
            in: 'path',
            name: 'registrationId',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.push-notifications'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.push-notifications'],
    },
  ],
})

export const getV1UserProfilesStudentIdGuardianInvitationsRoute = createRoute({
  method: 'get',
  path: '/v1/userProfiles/{studentId}/guardianInvitations',
  tags: ['userProfiles'],
  description:
    'Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.',
  operationId: 'classroom.userProfiles.guardianInvitations.list',
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
      invitedEmailAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only results with the specified `invited_email_address` are returned.',
            in: 'query',
            name: 'invitedEmailAddress',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      states: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['GUARDIAN_INVITATION_STATE_UNSPECIFIED', 'PENDING', 'COMPLETE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.',
            explode: true,
            in: 'query',
            name: 'states',
            schema: {
              items: {
                enum: ['GUARDIAN_INVITATION_STATE_UNSPECIFIED', 'PENDING', 'COMPLETE'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      studentId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGuardianInvitationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
    },
  ],
})

export const postV1UserProfilesStudentIdGuardianInvitationsRoute = createRoute({
  method: 'post',
  path: '/v1/userProfiles/{studentId}/guardianInvitations',
  tags: ['userProfiles'],
  description:
    "Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.",
  operationId: 'classroom.userProfiles.guardianInvitations.create',
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
      studentId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the student (in standard format)',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GuardianInvitationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuardianInvitationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
  ],
})

export const getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute = createRoute({
  method: 'get',
  path: '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}',
  tags: ['userProfiles'],
  description:
    'Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.',
  operationId: 'classroom.userProfiles.guardianInvitations.get',
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
      studentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the student whose guardian invitation is being requested.',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'The `id` field of the `GuardianInvitation` being requested.',
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuardianInvitationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
    },
  ],
})

export const patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute = createRoute({
  method: 'patch',
  path: '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}',
  tags: ['userProfiles'],
  description:
    'Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.',
  operationId: 'classroom.userProfiles.guardianInvitations.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      studentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the student whose guardian invitation is to be modified.',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invitationId: z
        .string()
        .openapi({
          param: {
            description: 'The `id` field of the `GuardianInvitation` to be modified.',
            in: 'path',
            name: 'invitationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GuardianInvitationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuardianInvitationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
  ],
})

export const getV1UserProfilesStudentIdGuardiansRoute = createRoute({
  method: 'get',
  path: '/v1/userProfiles/{studentId}/guardians',
  tags: ['userProfiles'],
  description:
    'Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.',
  operationId: 'classroom.userProfiles.guardians.list',
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
      invitedEmailAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.',
            in: 'query',
            name: 'invitedEmailAddress',
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
              'Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.',
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
              'nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      studentId: z
        .string()
        .openapi({
          param: {
            description:
              'Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGuardiansResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
    },
  ],
})

export const getV1UserProfilesStudentIdGuardiansGuardianIdRoute = createRoute({
  method: 'get',
  path: '/v1/userProfiles/{studentId}/guardians/{guardianId}',
  tags: ['userProfiles'],
  description:
    'Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.',
  operationId: 'classroom.userProfiles.guardians.get',
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
      studentId: z
        .string()
        .openapi({
          param: {
            description:
              'The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      guardianId: z
        .string()
        .openapi({
          param: {
            description: 'The `id` field from a `Guardian`.',
            in: 'path',
            name: 'guardianId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuardianSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly'],
    },
  ],
})

export const deleteV1UserProfilesStudentIdGuardiansGuardianIdRoute = createRoute({
  method: 'delete',
  path: '/v1/userProfiles/{studentId}/guardians/{guardianId}',
  tags: ['userProfiles'],
  description:
    'Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.',
  operationId: 'classroom.userProfiles.guardians.delete',
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
      studentId: z
        .string()
        .openapi({
          param: {
            description:
              'The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'studentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      guardianId: z
        .string()
        .openapi({
          param: {
            description: 'The `id` field from a `Guardian`.',
            in: 'path',
            name: 'guardianId',
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
      Oauth2: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.guardianlinks.students'],
    },
  ],
})

export const getV1UserProfilesUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/userProfiles/{userId}',
  tags: ['userProfiles'],
  description:
    'Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.',
  operationId: 'classroom.userProfiles.get',
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
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.emails'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.emails'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.profile.photos'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.profile.photos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/classroom.rosters.readonly'],
    },
  ],
})
