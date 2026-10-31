import { createRoute, z } from '@hono/zod-openapi'

const MediaScoreSharingModeSchema = z
  .enum(['read', 'write', 'copy', 'performance'])
  .default('read')
  .openapi({ description: 'The sharing mode of the score for classes post and assignments' })
  .openapi('MediaScoreSharingMode')

const MediaAttachmentSchema = z
  .object({
    authorName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resolved author name of the attachment' }),
    authorUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resolved author url of the attachment' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resolved description of the attachment' }),
    googleDriveFileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Google Drive File' }),
    html: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the attachment type is `rich` or `video`, the HTML code of the\nmedia to display\n',
      }),
    htmlHeight: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the `html` is available, the height of the widget' }),
    htmlWidth: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the `html` is available, the width of the widget' }),
    iconUrl: z.string().exactOptional().openapi({ description: 'The URL of the icon' }),
    lockScoreTemplate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.",
      }),
    mimeType: z.string().exactOptional().openapi({ description: 'The mine type of the file' }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'An unique revision identifier of a score' }),
    score: z.string().exactOptional().openapi({ description: 'An unique Flat score identifier' }),
    sharingMode: MediaScoreSharingModeSchema.exactOptional(),
    thumbnailHeight: z
      .int()
      .exactOptional()
      .openapi({ description: 'If the `thumbnailUrl` is available, the width of the thumbnail\n' }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the attachment type is `rich`, `video`, `photo` or `link`, a\ndisplayable thumbnail for this attachment\n',
      }),
    thumbnailWidth: z
      .int()
      .exactOptional()
      .openapi({ description: 'If the `thumbnailUrl` is available, the width of the thumbnail\n' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resolved title of the attachment' }),
    track: z.string().exactOptional().openapi({ description: 'A unique track identifier' }),
    type: z
      .enum(['rich', 'photo', 'video', 'link', 'flat', 'googleDrive', 'worksheet', 'performance'])
      .exactOptional()
      .openapi({
        description:
          'The type of the assignment resolved:\n* `rich`, `photo`, `video` are attachment types that are automatically resolved from a `link` attachment.\n* A `flat` attachment is a score document where the unique identifier will be specified in the `score` property. Its sharing mode will be provided in the `sharingMode` property.\n',
      }),
    url: z.string().exactOptional().openapi({ description: 'The url of the attachment' }),
    worksheet: z
      .string()
      .exactOptional()
      .openapi({ description: 'An unique worksheet identifier' }),
  })
  .openapi({
    description:
      'Media attachment. The API will automatically resolve the details, oEmbed,\nand media available if possible and return them in this object\n',
    example: {
      authorName: 'Flat',
      authorUrl: 'https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw',
      description: 'Discover Flat on https://flat.io',
      html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SNbRUiBZ4Uw" frameborder="0" allowfullscreen></iframe>',
      thumbnailHeight: 1052,
      thumbnailUrl: 'https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg',
      thumbnailWidth: 1868,
      title: 'Flat - The online collaborative music notation software',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=SNbRUiBZ4Uw',
    },
    required: [],
  })
  .openapi('MediaAttachment')

const GoogleClassroomCourseworkSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute link to this coursework in the Classroom web UI' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the coursework assigned by Classroom' }),
    state: z.string().exactOptional().openapi({ description: 'State of the coursework' }),
    topicId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier of the topic where the assignment is created' }),
  })
  .openapi({
    description: 'A coursework on Google Classroom',
    example: {
      alternateLink: 'http://classroom.google.com/c/music-theory/a/first-assignment/detail',
      id: '1235665432',
      state: 'draft',
    },
    required: [],
  })
  .openapi('GoogleClassroomCoursework')

const MicrosoftGraphAssignmentSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute link to this assignement in the Microsoft Teams web UI' }),
    categories: z
      .array(z.string().openapi({ description: 'A Microsoft Teams assignment category ID' }))
      .exactOptional()
      .openapi({ description: 'List of categories where this assignment is published under' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the assignement assigned by Microsoft Teams' }),
    state: z.string().exactOptional().openapi({ description: 'State of the assignment' }),
  })
  .openapi({
    description: 'A Microsoft Teams asignment',
    example: {
      alternateLink: 'https://teams.microsoft.com/l/entity',
      categories: ['0a012acd-6e78-4cd0-89a9-80d296e48f82'],
      id: '8e460d32-d2d4-46b3-8e1a-9b7677a48fda',
      state: 'draft',
    },
    required: [],
  })
  .openapi('MicrosoftGraphAssignment')

const GoogleClassroomSubmissionSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute link to this coursework in the Classroom web UI' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the coursework submission assigned by Classroom' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'State of the submission on Google Classroom' }),
  })
  .openapi({
    description: 'A coursework submission on Google Classroom',
    example: {
      alternateLink:
        'http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission',
      id: 'CgsI-00000000000',
      state: 'turned_in',
    },
    required: [],
  })
  .openapi('GoogleClassroomSubmission')

const MicrosoftGraphSubmissionSchema = z
  .object({
    alternateLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Absolute link to this submission in the Microsoft Teams web UI' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the submission assigned by Microsoft Teams' }),
    state: z.string().exactOptional().openapi({ description: 'State of the submission' }),
  })
  .openapi({
    description: 'A Microsoft Teams submission',
    example: {
      alternateLink: 'https://teams.microsoft.com/l/entity',
      id: '8e460d32-d2d4-46b3-8e1a-9b7677a48fda',
      state: 'returned',
    },
    required: [],
  })
  .openapi('MicrosoftGraphSubmission')

const AssignmentSubmissionStateSchema = z
  .enum(['created', 'turnedIn', 'returned'])
  .openapi({ description: 'State of the submission' })
  .openapi('AssignmentSubmissionState')

const AssignmentSubmissionSchema = z
  .object({
    assignment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the assignment' }),
    attachments: z.array(MediaAttachmentSchema).exactOptional(),
    classroom: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the classroom where the assignment was posted\n',
      }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date when the submission was created' }),
    creator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The User identifier of the student who created the submission' }),
    draftGrade: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission',
      }),
    googleClassroom: GoogleClassroomSubmissionSchema.exactOptional(),
    grade: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional grade. If unset, no grade was set.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of the submission' }),
    maxPoints: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Optional max points for the grade. If set, a corresponding `draftGrade` or `grade` will be set.',
      }),
    microsoftGraph: MicrosoftGraphSubmissionSchema.exactOptional(),
    returnCreator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The User unique identifier of the teacher who returned the submission\n',
      }),
    returnDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date when the teacher returned the work' }),
    state: AssignmentSubmissionStateSchema.exactOptional(),
    submissionDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date when the student submitted his work' }),
  })
  .openapi({
    description: 'Assignment Submission',
    example: {
      assignment: '58c49068524c03ec576ca43c',
      attachments: [{ score: '58c4955a226ffff257211a8d', title: 'Hello - Student', type: 'flat' }],
      classroom: '58c4725345cd836264f0b29e',
      creationDate: '2020-08-12T00:25:00.748000Z',
      creator: '559eb5c7f0d4d5e46d03781d',
      draftGrade: 82,
      googleClassroom: {
        alternateLink:
          'http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission',
        id: 'CgsI-00000000000',
        state: 'turned_in',
      },
      grade: 80,
      id: '58c4955c226ffff257211a90',
      returnCreator: '559eb5c7f0d4d5e46d000000',
      returnDate: '2020-08-15T00:25:00.748000Z',
      submissionDate: '2020-08-12T00:45:22.748000Z',
    },
    required: [],
  })
  .openapi('AssignmentSubmission')

const AssignmentTypeSchema = z
  .enum(['none', 'newScore', 'scoreTemplate', 'sharedWriting', 'worksheet', 'performance'])
  .openapi({ description: 'Type of the assignment' })
  .openapi('AssignmentType')

type AssignmentType = {
  attachments?: z.infer<typeof MediaAttachmentSchema>[]
  canvas?: { alternateLink?: string; id?: string }
  classroom?: string
  cover?: string
  coverFile?: string
  creationDate?: string
  creator?: string
  description?: string
  dueDate?: string
  googleClassroom?: z.infer<typeof GoogleClassroomCourseworkSchema>
  lti?: { id?: string }
  maxPoints?: number
  mfc?: { alternateLink?: string; id?: string }
  microsoftGraph?: z.infer<typeof MicrosoftGraphAssignmentSchema>
  scheduledDate?: string
  state?: 'draft' | 'active' | 'archived'
  submissions?: z.infer<typeof AssignmentSubmissionSchema>[]
  title?: string
  type?: z.infer<typeof AssignmentTypeSchema>
}

const AssignmentSchema: z.ZodType<AssignmentType> = z
  .lazy(() =>
    z
      .object({
        attachments: z.array(MediaAttachmentSchema).exactOptional(),
        canvas: z
          .object({
            alternateLink: z
              .string()
              .exactOptional()
              .openapi({ description: 'Link to Canvas assignment' }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier of the course on Canvas assignment' }),
          })
          .exactOptional()
          .openapi({ description: 'A Canvas LMS assignment', required: [] }),
        classroom: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The unique identifier of the class where this assignment was posted',
          }),
        cover: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the cover to display' }),
        coverFile: z
          .string()
          .exactOptional()
          .openapi({ description: 'The id of the cover to display' }),
        creationDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The creation date of this assignment' }),
        creator: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The User unique identifier of the creator of this assignment\n',
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Description and content of the assignment' }),
        dueDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The due date of this assignment, late submissions will be marked as\npaste due.\n',
          }),
        googleClassroom: GoogleClassroomCourseworkSchema.exactOptional(),
        lti: z
          .object({
            id: z.string().exactOptional().openapi({ description: 'Resource ID in the LMS' }),
          })
          .exactOptional()
          .openapi({ description: 'An LTI assignment', required: [] }),
        maxPoints: z
          .number()
          .exactOptional()
          .openapi({ description: 'If set, the grading will be enabled for the assignement\n' }),
        mfc: z
          .object({
            alternateLink: z
              .string()
              .exactOptional()
              .openapi({ description: 'Link to MusicFirst Classroom task' }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier of the course on MusicFirst Task' }),
          })
          .exactOptional()
          .openapi({ description: 'A MusicFirst Classroom assignment', required: [] }),
        microsoftGraph: MicrosoftGraphAssignmentSchema.exactOptional(),
        scheduledDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The publication (scheduled) date of the assignment.\nIf this one is specified, the assignment will only be listed to the teachers of the class.\n',
          }),
        state: z
          .enum(['draft', 'active', 'archived'])
          .exactOptional()
          .openapi({ description: 'State of the assignment' }),
        submissions: z.array(AssignmentSubmissionSchema).exactOptional(),
        title: z.string().exactOptional().openapi({ description: 'Title of the assignment' }),
        type: AssignmentTypeSchema.exactOptional(),
      })
      .openapi({
        description: 'Assignment details',
        example: {
          attachments: [
            { score: '0000000000000000', type: 'flat' },
            { type: 'link', url: 'https://flat.io/developers' },
            {
              authorName: 'Flat',
              authorUrl: 'https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw',
              description: 'Discover Flat on https://flat.io',
              html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SNbRUiBZ4Uw" frameborder="0" allowfullscreen></iframe>',
              thumbnailHeight: 1052,
              thumbnailUrl: 'https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg',
              thumbnailWidth: 1868,
              title: 'Flat - The online collaborative music notation software',
              type: 'video',
              url: 'https://www.youtube.com/watch?v=SNbRUiBZ4Uw',
            },
          ],
          canvas: {
            alternateLink: 'https://canvas.instructure.com/courses/00000/assignments/12345',
            id: '12345',
          },
          classroom: '58c4725345cd836264f0b29e',
          creationDate: '2017-06-12T13:56:19.613000Z',
          creator: '5832bf149995c4024bd6de7d',
          description: 'Get started with Flat',
          dueDate: '2017-07-12T13:56:19.613000Z',
          googleClassroom: {
            alternateLink: 'http://classroom.google.com/c/music-theory/a/first-assignment/detail',
            id: '1235665432',
          },
          lti: { id: '12345' },
          maxPoints: 100,
          scheduledDate: '2017-06-18T13:56:19.613000Z',
          state: 'active',
          submissions: [
            {
              assignment: '58c49068524c03ec576ca43c',
              attachments: [
                { score: '58c4955a226ffff257211a8d', title: 'Hello - Student', type: 'flat' },
              ],
              classroom: '58c4725345cd836264f0b29e',
              creationDate: '2017-03-12T00:25:00.748000Z',
              creator: '559eb5c7f0d4d5e46d03781d',
              googleClassroom: {
                alternateLink:
                  'http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission',
                id: 'CgsI-00000000000',
                state: 'turned_in',
              },
              id: '58c4955c226ffff257211a90',
              submissionDate: '2017-03-12T00:25:22.748000Z',
            },
          ],
          title: 'My first assignment',
        },
        required: [],
      }),
  )
  .openapi('Assignment')

const AssignmentCopySchema = z
  .object({
    assignment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional destination assignment where the original assignement will be copied. Must be a draft.',
      }),
    classroom: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination classroom where the assignment will be copied' }),
    scheduledDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The publication (scheduled) date of the assignment.\nIf this one is specified, the assignment will only be listed to the teachers of the class.\nAlternatively the existing `scheduledDate` from the copied assignment will be used.\n',
      }),
  })
  .openapi({
    description: 'Assignment copy operation',
    example: { classroom: '0000000000000000' },
    required: [],
  })
  .openapi('AssignmentCopy')

const ClassAttachmentCreationSchema = z
  .object({
    googleDriveFileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Google Drive File' }),
    lockScoreTemplate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.",
      }),
    score: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique Flat score identifier. The user creating the assignment must at least have read access to the document. If the user has admin rights, new group permissions will be automatically added for the\nteachers and students of the class.\n',
      }),
    sharingMode: MediaScoreSharingModeSchema.exactOptional(),
    type: z
      .enum(['flat', 'link', 'googleDrive', 'worksheet'])
      .exactOptional()
      .openapi({ description: 'The type of the attachment posted' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the attachment.' }),
    worksheet: z
      .string()
      .exactOptional()
      .openapi({ description: 'An unique worksheet identifier' }),
  })
  .openapi({
    description:
      'Attachment creation for an assignment or stream post.\nThis attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.\n',
    example: { score: '000000000000000001', sharingMode: 'copy', type: 'flat' },
    required: [],
  })
  .openapi('ClassAttachmentCreation')

const AssignmentCreationSchema = z
  .object({
    assignedStudents: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Identifiers for the students that have access to the assignment' }),
    assigneeMode: z
      .enum(['everyone', 'selected'])
      .exactOptional()
      .openapi({ description: 'Possible modes of assigning assignments' }),
    attachments: z.array(ClassAttachmentCreationSchema).exactOptional(),
    cover: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The URL of the cover to display' }),
    coverFile: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The id of the cover to display' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description and content of the assignment' }),
    dueDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The due date of this assignment, late submissions will be marked as paste due. If not set, the assignment won't have a due date.\n",
      }),
    googleClassroom: z
      .object({
        topicId: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Identifier of the topic where the assignment is created' }),
      })
      .exactOptional()
      .openapi({ description: 'Google Classroom options for this assignment', required: [] }),
    maxPoints: z
      .number()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If set, the grading will be enabled for the assignement with this value as the maximum of points\n',
      }),
    microsoftGraph: z
      .object({
        categories: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: 'List of categories this assignment belongs to' }),
      })
      .exactOptional()
      .openapi({ description: 'Microsoft Graph options for this assignment', required: [] }),
    nbPlaybackAuthorized: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The number of playback authorized on the scores of the assignment.',
      }),
    scheduledDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The publication (scheduled) date of the assignment.\nIf this one is specified, the assignment will only be listed to the teachers of the class.\n',
      }),
    state: z
      .enum(['draft', 'active'])
      .exactOptional()
      .openapi({ description: 'State of the assignment' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the assignment' }),
    toolset: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The id of the associated toolset' }),
    type: AssignmentTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Assignment creation details',
    example: {
      attachments: [
        { score: '0000000000000000', type: 'flat' },
        { type: 'link', url: 'https://flat.io/developers' },
      ],
      description: 'Get started with Flat',
      dueDate: '2017-07-12T13:56:19.613000Z',
      maxPoints: 100,
      scheduledDate: '2017-06-20T13:56:19.613000Z',
      title: 'First assignment',
    },
    required: [],
  })
  .openapi('AssignmentCreation')

const AssignmentSubmissionCommentSchema = z
  .object({
    comment: z.string().exactOptional().openapi({ description: 'The comment text' }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the comment was posted' }),
    id: z.string().exactOptional().openapi({ description: 'The comment unique identifier' }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of the last comment modification' }),
    submission: z
      .string()
      .exactOptional()
      .openapi({ description: 'The submission unique identifier' }),
    unread: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the comment is unread by the current user' }),
    user: z.string().exactOptional().openapi({ description: 'The author unique identifier' }),
  })
  .openapi({ description: 'Feedback comment added to an assignment submission', required: [] })
  .openapi('AssignmentSubmissionComment')

const AssignmentSubmissionCommentCreationSchema = z
  .object({ comment: z.string().openapi({ description: 'The comment text' }) })
  .openapi({ description: 'Creation of a assignment submission comment', required: ['comment'] })
  .openapi('AssignmentSubmissionCommentCreation')

const AssignmentSubmissionHistorySchema = z
  .object({
    attachment: z
      .object({
        revision: z
          .string()
          .exactOptional()
          .openapi({ description: 'The revision identifier that changed' }),
        score: z
          .string()
          .exactOptional()
          .openapi({ description: 'The score identifier that changed' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the submission was changed' }),
    draftGrade: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The numerator of the grade at this time in the submission grade history',
      }),
    grade: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The numerator of the grade at this time in the submission grade history',
      }),
    maxPoints: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The denominator of the grade at this time in the submission grade history',
      }),
    state: AssignmentSubmissionStateSchema.exactOptional(),
    users: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The user(s) unique identifier(s) who made the change' }),
  })
  .openapi({ description: 'History item of the submission', required: [] })
  .openapi('AssignmentSubmissionHistory')

const AssignmentSubmissionUpdateSchema = z
  .object({
    attachments: z.array(ClassAttachmentCreationSchema).exactOptional(),
    comments: z
      .object({
        total: z
          .number()
          .exactOptional()
          .openapi({ description: 'The total number of comments added to the submission' }),
        unread: z
          .number()
          .exactOptional()
          .openapi({ description: 'The number of unread comments for the current user' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    draftGrade: z
      .number()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission',
      }),
    grade: z
      .number()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional grade. If unset, no grade was set.' }),
    return: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, the submission will be marked as done' }),
    submit: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, the submission will be marked as done' }),
  })
  .openapi({
    description: 'Assignment Submission creation',
    example: {
      attachments: [{ score: '58c4955a226ffff257211a8d', title: 'Hello - Student', type: 'flat' }],
      submit: true,
    },
    required: [],
  })
  .openapi('AssignmentSubmissionUpdate')

const ClassCreationSchema = z
  .object({
    name: z.string().max(255).openapi({ description: 'The name of the new class' }),
    section: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'The section of the new class' }),
  })
  .openapi({
    description: 'Creation of a classroom',
    example: { name: 'Music Theory Course', section: 'Music Theory 101' },
    required: ['name'],
  })
  .openapi('ClassCreation')

const ClassStateSchema = z
  .enum(['active', 'inactive', 'archived'])
  .openapi({ description: 'The state of a classroom' })
  .openapi('ClassState')

const GroupTypeSchema = z
  .enum(['generic', 'classTeachers', 'classStudents'])
  .openapi({ description: 'The type of the group' })
  .openapi('GroupType')

const GroupDetailsSchema = z
  .object({
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the group was create' }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the group' }),
    name: z.string().exactOptional().openapi({ description: 'The displayable name of the group' }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Organization owning the group' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: '`true` if the properties and members of this group are in in read-only\n',
      }),
    type: GroupTypeSchema.exactOptional(),
    usersCount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of students in this group' }),
  })
  .openapi({
    description: 'The details of a group',
    example: {
      creationDate: '2017-07-02T15:02:40.207000Z',
      id: '58c4955c226ffff257211a00',
      name: '5th Grade - Teachers',
      organization: '0000000000000000000000042',
      readOnly: false,
      type: 'classTeachers',
      usersCount: 2,
    },
    required: [],
  })
  .openapi('GroupDetails')

const ClassDetailsSchema = z
  .object({
    assignmentsCount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of assignments created in the class' }),
    canvas: z
      .object({
        domain: z
          .string()
          .exactOptional()
          .openapi({ description: 'Canvas instance domain (e.g. "canvas.instructure.com")' }),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'Unique identifier of the course on Canvas' }),
      })
      .exactOptional()
      .openapi({ description: 'Meta information provided by Canvs LMS', required: [] }),
    clever: z
      .object({
        creationDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The creation date of the section on clever' }),
        id: z.string().exactOptional().openapi({ description: 'Clever section unique identifier' }),
        modificationDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The last modification date of the section on clever' }),
        subject: z
          .enum([
            'english/language arts',
            'math',
            'science',
            'social studies',
            'language',
            'homeroom/advisory',
            'interventions/online learning',
            'technology and engineering',
            'PE and health',
            'arts and music',
            'other',
          ])
          .exactOptional()
          .openapi({ description: 'Normalized subject of the course' }),
        termEndDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'End date of the term' }),
        termName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the term when this course happens' }),
        termStartDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'Beginning date of the term' }),
      })
      .exactOptional()
      .openapi({ description: 'Clever.com section-related information', required: [] }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the class was create' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optionnal description for this class' }),
    enrollmentCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Teachers only] The enrollment code that can be used by the students to join the class\n',
      }),
    googleClassroom: z
      .object({
        alternateLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'Absolute link to this course in the Classroom web UI' }),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The course identifier on Google Classroom' }),
      })
      .exactOptional()
      .openapi({ description: 'Google Classroom course-related information', required: [] }),
    googleDrive: z
      .object({
        teacherFolderAlternateLink: z
          .string()
          .exactOptional()
          .openapi({ description: "[Teachers only] The Drive URL of the teachers' folder\n" }),
        teacherFolderId: z
          .string()
          .exactOptional()
          .openapi({
            description: "[Teachers only] The Drive directory identifier of the teachers' folder\n",
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Google Drive course-related information provided by Google Classroom',
        required: [],
      }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the class' }),
    issues: z
      .object({
        sync: z
          .array(
            z
              .object({
                email: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The email address of the user concerned by this sync issue',
                  }),
                id: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The account user identifier' }),
                reason: z
                  .enum(['otherOrgnanization', 'personalSubscription'])
                  .exactOptional()
                  .openapi({ description: 'The reason why the account cannot be synced' }),
              })
              .openapi({ description: 'A sync issue', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Synchronization issues for the class' }),
      })
      .exactOptional()
      .openapi({ description: 'Detected issues for this class', required: [] }),
    lti: z
      .object({
        contextId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Unique context identifier provided' }),
        contextLabel: z.string().exactOptional().openapi({ description: 'Context label' }),
        contextTitle: z.string().exactOptional().openapi({ description: 'Context title' }),
      })
      .exactOptional()
      .openapi({ description: 'Meta information provided by the LTI consumer', required: [] }),
    mfc: z
      .object({
        alternateLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'Link to MusicFirst Classroom class' }),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'Unique identifier of the course on MusicFirst Classroom' }),
      })
      .exactOptional()
      .openapi({ description: 'Meta information provided by Canvs LMS', required: [] }),
    microsoftGraph: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The course identifier on Microsoft Graph' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional().openapi({ description: 'The name of the class' }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Organization owning this class' }),
    owner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the User owning this class' }),
    section: z.string().exactOptional().openapi({ description: 'The section of the class' }),
    state: ClassStateSchema.exactOptional(),
    studentsGroup: GroupDetailsSchema.exactOptional(),
    teachersGroup: GroupDetailsSchema.exactOptional(),
    theme: z
      .string()
      .exactOptional()
      .openapi({ description: 'The theme identifier using in Flat User Interface' }),
  })
  .openapi({
    description: 'A classroom',
    example: {
      assignmentsCount: 10,
      canvas: { id: '000000000' },
      creationTime: '2017-01-25T09:47:34.544000Z',
      enrollmentCode: 'jm447ear',
      googleClassroom: {
        alternateLink: 'http://classroom.google.com/c/music-theory',
        id: '00000000',
      },
      googleDrive: {
        teacherFolderAlternateLink: 'https://drive.google.com/drive/folders/0B-0000000000000000',
        teacherFolderId: '0B-0000000000000000',
      },
      id: '100000000000000000000001',
      lti: { contextId: '042', contextLabel: 'MUSIC', contextTitle: 'Music Theory 101' },
      microsoftGraph: { id: '00000000-0000-0000-0000-000000000000' },
      name: 'Music Theory 101',
      organization: '100000000000000000000002',
      owner: '100000000000000000000003',
      section: 'Music Theory 101',
      state: 'active',
      theme: 'blue-8',
    },
    required: [],
  })
  .openapi('ClassDetails')

const ClassRolesSchema = z
  .enum(['teacher', 'student'])
  .openapi({ description: "User's Class Role (for Edu users only)" })
  .openapi('ClassRoles')

const ClassUpdateSchema = z
  .object({
    name: z.string().max(255).exactOptional().openapi({ description: 'The name of the class' }),
    section: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'The section of the class' }),
  })
  .openapi({
    description: 'Update of a classroom',
    example: { name: 'Music Theory Course', section: 'Music Theory 101' },
    required: [],
  })
  .openapi('ClassUpdate')

const ResourceRightsSchema = z
  .object({
    aclAdmin: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '`True` if the current user can manage the current document (i.e. share, delete)\n\nIf this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.\n',
      }),
    aclRead: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: '`True` if the current user can read the current document\n' }),
    aclWrite: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '`True` if the current user can modify the current document.\n\nIf this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.\n',
      }),
    isCollaborator: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '`True` if the current user is a collaborator of the current document (direct or via group).\n',
      }),
  })
  .openapi({
    description: 'The rights of the current user on a score or collection',
    example: { aclAdmin: true, aclRead: true, aclWrite: true, isCollaborator: true },
    required: [],
  })
  .openapi('ResourceRights')

const GroupSchema = z
  .object({
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation date of the group' }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the group' }),
    name: z.string().exactOptional().openapi({ description: 'The display name of the group' }),
    organization: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the group is related to an organization, this field will contain\nthe unique identifier of the organization\n',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: '`True` if the group is set in read-only\n' }),
    type: z
      .enum(['generic', 'classTeachers', 'classStudents'])
      .exactOptional()
      .openapi({
        description:
          'The type of the group:\n* `generic`: A group created by a Flat user\n* `classTeachers`: A group created automaticaly by Flat that contains\n  the teachers of a class\n* `classStudents`: A group created automaticaly by Flat that contains\n  the studnets of a class\n',
      }),
    usersCount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of users in this group' }),
  })
  .openapi({
    description: 'A group of users',
    example: {
      creationDate: '2015-01-19T00:22:02.387000Z',
      id: '0000000000000000000000043',
      name: '5th grade',
      organization: '0000000000000000000000042',
      readOnly: true,
      type: 'classTeachers',
      userCount: 24,
    },
    required: [],
  })
  .openapi('Group')

const UserBasicsSchema = z
  .object({
    firstname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Firstname of the user (for education users)' }),
    id: z.string().exactOptional().openapi({ description: 'The user unique identifier' }),
    isFlatTeam: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Will be 'true' if user is part of the Flat Team" }),
    isPowerUser: z
      .boolean()
      .exactOptional()
      .openapi({ description: "User license status. 'true' if user is an individual Power user" }),
    lastname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lastname of the user (for education users)' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A displayable name for the user (for consumer users)' }),
    picture: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The URL of the picture to display' }),
    printableName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name that can be directly printed (name, firstname & lastname, or username)',
      }),
    type: z
      .enum(['user', 'guest'])
      .exactOptional()
      .openapi({ description: 'The type of user account' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user name (unique for the organization)' }),
  })
  .openapi({
    discriminator: { propertyName: 'type' },
    example: {
      id: '000000000000000000000001',
      isFlatTeam: true,
      isPowerUser: true,
      name: 'Flat Team',
      picture: 'https://flat.io/img/logo_flat.svg',
      printableName: 'Flat Team',
      username: 'flat',
    },
    required: [],
  })
  .openapi('UserBasics')

const OrganizationRolesSchema = z
  .enum(['admin', 'billing', 'teacher', 'user'])
  .openapi({ description: "User's Organization Role (for Edu users only)" })
  .openapi('OrganizationRoles')

const UserPublicSummarySchema = UserBasicsSchema.and(
  z
    .object({
      classRole: ClassRolesSchema.exactOptional(),
      htmlUrl: z
        .string()
        .exactOptional()
        .openapi({ description: 'Link to user profile (for Indiv. users only)' }),
      organization: z
        .string()
        .exactOptional()
        .openapi({ description: 'Organization ID (for Edu users only)' }),
      organizationRole: OrganizationRolesSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Public User details summary' })
  .openapi('UserPublicSummary')

const UserPublicSchema = UserPublicSummarySchema.and(
  z
    .object({
      bio: z.string().exactOptional().openapi({ description: "User's biography" }),
      coverPicture: z
        .string()
        .exactOptional()
        .openapi({ description: 'Cover picture (backgroud) for the profile' }),
      followersCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number of followers the user have' }),
      followingCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number of people the user follow' }),
      instruments: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'An array of the instrument identifiers.\nThe format of the strings is `{instrument-group}.{instrument-id}`.\n',
        }),
      likedScoresCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number of the scores liked by the user' }),
      ownedPublicScoresCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number of public scores the user have' }),
      profileTheme: z
        .string()
        .exactOptional()
        .openapi({ description: 'Theme (background) for the profile' }),
      registrationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'Date the user signed up' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Public User details' })
  .openapi('UserPublic')

const ResourceCollaboratorSchema = ResourceRightsSchema.and(
  z
    .object({
      collection: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If this object is a permission of a collection, this property will contain the unique identifier of the collection',
        }),
      group: GroupSchema.exactOptional(),
      id: z
        .string()
        .exactOptional()
        .openapi({ description: 'The unique identifier of the permission' }),
      invited: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'If this property is `true`, this is still a pending invitation\n',
        }),
      score: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If this object is a permission of a score, this property will contain the unique identifier of the score',
        }),
      user: UserPublicSchema.exactOptional(),
      userEmail: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If the collaborator is not a user of Flat yet, this field will contain his email.\n',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A collaborator of a score. The `userEmail` and `group` are only available if the requesting user is a collaborator of the related score (in this case these permissions will eventualy not be listed and exposed publicly).\n',
  })
  .openapi('ResourceCollaborator')

const CollectionPrivacySchema = z
  .literal('private')
  .openapi({
    description:
      'The collection main privacy mode.\n- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.\n',
  })
  .openapi('CollectionPrivacy')

const CollectionTypeSchema = z
  .enum(['root', 'regular', 'sharedWithMe', 'sharedWithGroup', 'trash'])
  .openapi({
    description:
      'Type of the collection.\nThe type will influence the capabilitied available on the collections and how this collection is/can be populated.\n',
  })
  .openapi('CollectionType')

const CollectionSchema = z
  .object({
    app: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If this directory is dedicated to an app, the unique idenfier of this app',
      }),
    capabilities: z
      .object({
        canAddScores: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can add scores to the collection\n\nIf this collection has the `type` `trash`, this property will be set to `false`. Use `DELETE /v2/scores/{score}` to trash a score.\n',
          }),
        canDelete: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the current user can delete the collection\n' }),
        canDeleteScores: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can delete scores from the collection\n\nIf this collection has the `type` `trash`, this property will be set to `false`. Use `POST /v2/scores/{score}/untrash` to restore a score.\n',
          }),
        canEdit: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can modify the metadata for the collection\n',
          }),
        canShare: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can modify the sharing settings for the collection\n',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.',
        required: [],
      }),
    collaborators: z
      .array(ResourceCollaboratorSchema)
      .exactOptional()
      .openapi({ description: 'The list of the collaborators of the collection' }),
    collections: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The List of parent collections, which includes all the collections this score is included. Please note that you might not have access to all of them.',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the collection was created' }),
    htmlUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The url where the collection can be viewed in a web browser' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of the collection' }),
    privacy: CollectionPrivacySchema.exactOptional(),
    rights: ResourceRightsSchema.exactOptional(),
    sharingKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The private sharing key of the collection (available when the `privacy` mode is set to `privateLink`)',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the collection' }),
    type: CollectionTypeSchema.exactOptional(),
    user: UserPublicSummarySchema.exactOptional(),
  })
  .openapi({ description: 'Collection of scores', required: [] })
  .openapi('Collection')

const CollectionCreationSchema = z
  .object({
    privacy: CollectionPrivacySchema,
    title: z.string().min(1).max(300).openapi({ description: 'The title of the collection' }),
  })
  .openapi({
    example: { privacy: 'private', title: 'Jazz scores' },
    required: ['privacy', 'title'],
  })
  .openapi('CollectionCreation')

const CollectionModificationSchema = z
  .object({
    privacy: CollectionPrivacySchema.exactOptional(),
    title: z
      .string()
      .min(1)
      .max(300)
      .exactOptional()
      .openapi({ description: 'The title of the collection' }),
  })
  .openapi({ description: 'Edit the collection metadata', required: [] })
  .openapi('CollectionModification')

const FlatErrorResponseSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A corresponding code for this error' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An unique error identifier generated for the request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A printable message for this message' }),
    param: z
      .string()
      .exactOptional()
      .openapi({ description: 'The related parameter that caused the error' }),
  })
  .openapi({
    description: 'An API Error response',
    example: { code: 'CLIENT_ERROR', id: '123456789', message: 'Invalid request' },
    required: [],
  })
  .openapi('FlatErrorResponse')

const FlatLocalesSchema = z
  .enum([
    'en',
    'en-GB',
    'es',
    'fr',
    'de',
    'it',
    'ja',
    'ko',
    'nl',
    'pl',
    'pt',
    'pt-BR',
    'ro',
    'ru',
    'sv',
    'tr',
    'zh-Hans',
  ])
  .default('en')
  .openapi({ description: 'The user language' })
  .openapi('FlatLocales')

const LicenseModeSchema = z
  .enum(['credit', 'site'])
  .openapi({ description: 'Mode of the license' })
  .openapi('LicenseMode')

const LicenseSourcesSchema = z
  .enum(['order', 'trial', 'voucher', 'distributor', 'subscription', 'appStore'])
  .default('order')
  .openapi({ description: 'Source of the license' })
  .openapi('LicenseSources')

const LmsNameSchema = z
  .enum([
    'canvas',
    'moodle',
    'schoology',
    'blackboard',
    'desire2learn',
    'sakai',
    'schoolbox',
    'other',
  ])
  .openapi({ description: 'LMS name' })
  .openapi('LmsName')

const LtiCredentialsSchema = z
  .object({
    consumerKey: z.string().exactOptional().openapi({ description: 'OAuth 1 Consumer Key' }),
    consumerSecret: z.string().exactOptional().openapi({ description: 'OAuth 1 Consumer Secret' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation date of thse credentials' }),
    creator: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the user who created these credentials' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of this couple of credentials' }),
    lastUsage: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The last time these credentials were used' }),
    lms: LmsNameSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name of the couple of credentials' }),
    organization: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the Organization associated to these credentials',
      }),
  })
  .openapi({
    description: 'A couple of LTI 1.x OAuth credentials',
    example: {
      consumerKey: '200082F5-FAFD-4C6E-BB19-7DAB5D6264D4',
      consumerSecret: '168b6181c05eae14298176a274273e4ebef0d15555fe3e80c6a98ccd57d0c3b6',
      creationDate: '2017-06-06T11:03:01.955000Z',
      creator: '5832bf149995c4024bd6de7d',
      id: '59368be5c66caf895ee02387',
      lastUsage: '2017-06-13T16:02:34.324000Z',
      lms: 'canvas',
      name: 'My couple of credentials for Canvas',
      organization: '5832c801a4bedc05f4fb4993',
    },
    required: [],
  })
  .openapi('LtiCredentials')

const LtiCredentialsCreationSchema = z
  .object({
    lms: LmsNameSchema,
    name: z.string().max(300).openapi({ description: 'Name of the couple of credentials' }),
  })
  .openapi({
    description: 'Creation of a couple of LTI 1.x OAuth credentials',
    example: { lms: 'canvas', name: 'My couple of credentials for Canvas' },
    required: ['lms', 'name'],
  })
  .openapi('LtiCredentialsCreation')

const OrganizationInvitationSchema = z
  .object({
    customCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Enrollment code to use when joining this organization' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address this invitation was sent to' }),
    id: z.string().exactOptional().openapi({ description: 'The invitation unique identifier' }),
    invitedBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the User who created this invitation' }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Organization owning this class' }),
    organizationRole: OrganizationRolesSchema.exactOptional(),
    usedBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the User who used this invitation' }),
  })
  .openapi({
    description: 'Details of an invitation to join an organization',
    example: {
      creationDate: '2017-07-02T15:05:15.576000Z',
      customCode: 'u5raQ7pZ',
      email: 'edu@flat.io',
      id: '59590bab53b1af260610000',
      invitedBy: '55b8d8f395c8db031ed00000',
      organization: '55df29a6694e4a3953100000',
      organizationRole: 'teacher',
    },
    required: [],
  })
  .openapi('OrganizationInvitation')

const OrganizationInvitationCreationSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address you want to send the invitation to' }),
    organizationRole: OrganizationRolesSchema.exactOptional(),
  })
  .openapi({
    description: 'The parameters to create an organization invitation',
    example: { email: 'edu@flat.io', organizationRole: 'teacher' },
    required: [],
  })
  .openapi('OrganizationInvitationCreation')

const ResourceCollaboratorCreationSchema = z
  .object({
    aclAdmin: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '`True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document\n',
      }),
    aclRead: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          '`True` if the related user can read the score. (probably true if the user has a permission on the document).\n',
      }),
    aclWrite: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: '`True` if the related user can modify the score.\n' }),
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of a Flat group' }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of a Flat user' }),
    userEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fill this field to invite an individual user by email.\n' }),
    userToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token received in an invitation to join the score.\n' }),
  })
  .openapi({
    description: 'Add a collaborator to a resource.',
    example: { aclAdmin: false, aclRead: true, aclWrite: true, userEmail: 'jdoe@flat.io' },
    required: [],
  })
  .openapi('ResourceCollaboratorCreation')

const ScoreCommentContextSchema = z
  .object({
    measureUuids: z.array(z.string()).openapi({ description: 'The list of measure UUIds' }),
    partUuid: z.string().openapi({ description: 'The unique identifier (UUID) of the score part' }),
    staffIdx: z
      .number()
      .exactOptional()
      .openapi({ description: '(Deprecated, use `staffUuid`) The identififer of the staff' }),
    staffUuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identififer (UUID) of the staff' }),
    startDpq: z.number(),
    startTimePos: z.number(),
    stopDpq: z.number(),
    stopTimePos: z.number(),
  })
  .openapi({
    description:
      'The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).\n',
    example: {
      measureUuids: [
        'e6a6a60b-8710-f819-9a49-e907b19c6f1f',
        'da83d93c-e3a6-3c73-1bbe-15e5131d6437',
        '056ec5eb-9213-df56-6ae8-d9b99673dc48',
      ],
      partUuid: '91982db7-2e6d-285e-7a19-76b4bd005b8b',
      staffUuid: '9395d8f3-f42b-47b6-8c5d-6ba704961ec0',
      startDpq: 1,
      startTimePos: 2,
      stopDpq: 1,
      stopTimePos: 3,
    },
    required: ['measureUuids', 'partUuid', 'startDpq', 'startTimePos', 'stopDpq', 'stopTimePos'],
  })
  .openapi('ScoreCommentContext')

const ScoreCommentSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The comment text that can includes mentions using the following\nformat: `@[id:username]`.\n',
      }),
    context: ScoreCommentContextSchema.exactOptional(),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the comment was posted' }),
    id: z.string().exactOptional().openapi({ description: 'The comment unique identifier' }),
    mentions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of user identifier mentioned on the score' }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of the last comment modification' }),
    rawComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A raw version of the comment, that can be displayed without parsing\nthe mentions.\n',
      }),
    replyTo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the comment is a reply to another comment, the unique identifier of the parent comment\n',
      }),
    resolved: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For inline comments, the comment can be marked as resolved and will be hidden in the future responses\n',
      }),
    resolvedBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the user is marked as resolved, this will contain the unique identifier of the User who marked this comment as resolved\n',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of revision the comment was posted' }),
    score: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the score where the comment was posted' }),
    spam: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '`true  if the message has been detected as spam and hidden from other users\n',
      }),
    type: z
      .enum(['document', 'inline'])
      .exactOptional()
      .openapi({ description: 'The type of the comment' }),
    user: z.string().exactOptional().openapi({ description: 'The author unique identifier' }),
  })
  .openapi({
    description: 'Comment added on a sheet music',
    example: {
      comment: '@[000000000000000000000000:flat] Great work!',
      context: {
        measureUuids: [
          'e6a6a60b-8710-f819-9a49-e907b19c6f1f',
          'da83d93c-e3a6-3c73-1bbe-15e5131d6437',
          '056ec5eb-9213-df56-6ae8-d9b99673dc48',
        ],
        partUuid: '91982db7-2e6d-285e-7a19-76b4bd005b8b',
        staffUuid: '9395d8f3-f42b-47b6-8c5d-6ba704961ec0',
        startDpq: 1,
        startTimePos: 2,
        stopDpq: 1,
        stopTimePos: 3,
      },
      date: '2017-01-26T20:29:10.622000Z',
      id: '000000000000000000000010',
      mentions: ['000000000000000000000000'],
      modificationDate: '2017-01-26T21:29:10.622000Z',
      rawComment: '@flat: Great work!',
      replyTo: '000000000000000000000000',
      resolved: true,
      resolvedBy: '000000000000000000000000',
      revision: '000000000000000000000011',
      score: '000000000000000000000042',
      spam: false,
      type: 'inline',
      user: '000000000000000000000001',
    },
    required: [],
  })
  .openapi('ScoreComment')

const ScoreCommentCreationSchema = z
  .object({
    comment: z
      .string()
      .openapi({
        description:
          'The comment text that can includes mentions using the following format: `@[id:username]`.\n',
      }),
    context: ScoreCommentContextSchema.exactOptional(),
    mentions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of user identifiers mentioned in this comment' }),
    rawComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.\n',
      }),
    replyTo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the comment is a reply to another comment, the unique identifier of the parent comment\n',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.\n',
      }),
  })
  .openapi({
    description: 'Creation of a comment',
    example: {
      comment: '@[000000000000000000000000:flat] Great work!',
      context: {
        measureUuids: [
          'e6a6a60b-8710-f819-9a49-e907b19c6f1f',
          'da83d93c-e3a6-3c73-1bbe-15e5131d6437',
          '056ec5eb-9213-df56-6ae8-d9b99673dc48',
        ],
        partUuid: '91982db7-2e6d-285e-7a19-76b4bd005b8b',
        staffUuid: '9395d8f3-f42b-47b6-8c5d-6ba704961ec0',
        startDpq: 1,
        startTimePos: 2,
        stopDpq: 1,
        stopTimePos: 3,
      },
      mentions: ['000000000000000000000000'],
      rawComment: '@flat: Great work!',
      replyTo: '000000000000000000000000',
      revision: '000000000000000000000010',
    },
    required: ['comment'],
  })
  .openapi('ScoreCommentCreation')

const ScoreCommentUpdateSchema = z
  .object({
    comment: z
      .string()
      .min(1)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'The comment text that can includes mentions using the following format: `@[id:username]`.\n',
      }),
    context: ScoreCommentContextSchema.exactOptional(),
    rawComment: z
      .string()
      .min(1)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.\n',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.\n',
      }),
  })
  .openapi({
    description: 'Update of a comment',
    example: {
      comment: '@[000000000000000000000000:flat] Great work!',
      context: {
        measureUuids: [
          'e6a6a60b-8710-f819-9a49-e907b19c6f1f',
          'da83d93c-e3a6-3c73-1bbe-15e5131d6437',
          '056ec5eb-9213-df56-6ae8-d9b99673dc48',
        ],
        partUuid: '91982db7-2e6d-285e-7a19-76b4bd005b8b',
        staffUuid: '9395d8f3-f42b-47b6-8c5d-6ba704961ec0',
        startDpq: 1,
        startTimePos: 2,
        stopDpq: 1,
        stopTimePos: 3,
      },
      mentions: ['000000000000000000000000'],
      rawComment: '@flat: Great work!',
      replyTo: '000000000000000000000000',
      revision: '000000000000000000000011',
    },
    required: [],
  })
  .openapi('ScoreCommentUpdate')

const ScoreCommentsCountsSchema = z
  .object({
    monthly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The monthly unique number of comments added to the score' }),
    total: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total number of comments added to the score' }),
    unique: z
      .number()
      .exactOptional()
      .openapi({ description: 'The unique (1/user) number of comments added to the score' }),
    weekly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The weekly unique number of comments added to the score' }),
  })
  .openapi({
    description:
      "A computed version of the total, unique, weekly and monthly number of\ncomments added on the documents (this doesn't include inline comments).\n",
    example: { monthly: 30, total: 42, unique: 35, weekly: 10 },
    required: [],
  })
  .openapi('ScoreCommentsCounts')

const ScorePrivacySchema = z
  .enum(['public', 'private', 'organizationPublic', 'privateLink'])
  .openapi({
    description:
      'The score main privacy mode.\n\n- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.\n- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.\n- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.\n- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.\n\nThe score can also be individually shared to a set of users or groups using the different collaborators API methods.\n\nWhen a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.\n\nWhen using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).\n',
  })
  .openapi('ScorePrivacy')

const ScoreSourceSchema = z
  .object({
    googleDrive: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the score is a file on Google Drive, this field property must contain its identifier. To use this method, the Drive file must be public or the Flat Drive App must have access to the file.\n',
      }),
  })
  .openapi({ example: { googleDrive: '0B-0000000000000001' }, required: [] })
  .openapi('ScoreSource')

const ScoreCreationSchema = z
  .object({
    collection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of a collection where the score will be created.\nIf no collection identifier is provided, the score will be stored in the `root` directory.\n',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.\nBinary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.\n',
        example: '<score-partwise version="3.0"></score-partwise>',
      }),
    dataEncoding: z
      .literal('base64')
      .exactOptional()
      .openapi({
        description:
          'The optional encoding of the score data. This property must match the encoding used for the `data` property.',
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'If this is an imported file, its filename' }),
    googleDriveFolder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the user uses Google Drive and this properties is specified, the file will be created in this directory. The currently user creating the file must be granted to write in this directory.\n',
      }),
    privacy: ScorePrivacySchema,
    source: ScoreSourceSchema.exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the new score. If the title is too long, the API may trim this one.\n\nIf this title is not specified, the API will try to (in this order):\n  - Use the title contained in the file (e.g. [`movement-title`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-movement-title.htm) or [`credit-words`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-credit-words.htm) for [MusicXML](http://www.musicxml.com/) files).\n  - Use the name of the file for files from a specified `source` (e.g. Google Drive) or the one in the `filename` property\n  - Set a default title (e.g. "New Music Score")\n',
      }),
  })
  .openapi({
    description: 'A new created score',
    example: {
      data: '<score-partwise version="3.0"></score-partwise>',
      googleDriveFolder: '0B-0000000000000000',
      privacy: 'private',
      title: 'My new score',
    },
    required: ['privacy'],
  })
  .openapi('ScoreCreation')

const ScoreCreationTypeSchema = z
  .enum(['original', 'arrangement', 'other'])
  .openapi({ description: 'The type of creation (an orginal, an arrangement)' })
  .openapi('ScoreCreationType')

const ScoreSummarySchema = z
  .object({
    htmlUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The url where the score can be viewed in a web browser' }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the score' }),
    privacy: ScorePrivacySchema.exactOptional(),
    sharingKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The private sharing key of the score (available when the `privacy` mode is set to `privateLink`)',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the score' }),
    user: UserPublicSummarySchema.exactOptional(),
  })
  .openapi({
    description: 'A summary of the score details',
    example: {
      htmlUrl: 'https://flat.io/score/000000000000000000000000',
      id: '000000000000000000000000',
      privacy: 'private',
      title: 'My score',
      user: {
        id: '000000000000000000000001',
        name: 'Flat Team',
        picture: 'https://flat.io/img/logo_flat.svg',
        printableName: 'Flat Team',
        username: 'flat',
      },
    },
    required: [],
  })
  .openapi('ScoreSummary')

const ScoreLicenseSchema = z
  .enum([
    'copyright',
    'cc0',
    'cc-by',
    'cc-by-sa',
    'cc-by-nd',
    'cc-by-nc',
    'cc-by-nc-sa',
    'cc-by-nc-nd',
  ])
  .openapi({
    description:
      'License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/\n',
  })
  .openapi('ScoreLicense')

const ScoreLikesCountsSchema = z
  .object({
    monthly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of new likes during the last month' }),
    total: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total number of likes of the score' }),
    weekly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of new likes during the last week' }),
  })
  .openapi({
    description:
      'A computed version of the weekly, monthly and total of number of likes\nfor a score\n',
    example: { monthly: 30, total: 42, weekly: 10 },
    required: [],
  })
  .openapi('ScoreLikesCounts')

const ScorePlaysCountsSchema = z
  .object({
    monthly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The monthly number of plays of the score' }),
    total: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total number of plays of the score' }),
    weekly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The weekly number of plays of the score' }),
  })
  .openapi({
    description:
      'A computed version of the total, weekly, and monthly number of plays of\nthe score\n',
    example: { monthly: 30, total: 42, weekly: 10 },
    required: [],
  })
  .openapi('ScorePlaysCounts')

const ScoreViewsCountsSchema = z
  .object({
    monthly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The monthly number of views of the score' }),
    total: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total number of views of the score' }),
    weekly: z
      .number()
      .exactOptional()
      .openapi({ description: 'The weekly number of views of the score' }),
  })
  .openapi({
    description:
      'A computed version of the total, weekly, and monthly number of views of\nthe score\n',
    example: { monthly: 30, total: 42, weekly: 10 },
    required: [],
  })
  .openapi('ScoreViewsCounts')

const ScoreDetailsSchema = ScoreSummarySchema.and(
  z
    .object({
      arranger: z.string().exactOptional().openapi({ description: 'Arranger of the score' }),
      collaborators: z
        .array(ResourceCollaboratorSchema)
        .exactOptional()
        .openapi({ description: 'The list of the collaborators of the score' }),
      collections: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'The List of parent collections, which includes all the collections this score is included. Please note that you might not have access to all of them.',
        }),
      comments: ScoreCommentsCountsSchema.exactOptional(),
      composer: z.string().exactOptional().openapi({ description: 'Composer of the score' }),
      creationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The date when the score was created' }),
      creationType: ScoreCreationTypeSchema.exactOptional(),
      description: z
        .string()
        .exactOptional()
        .openapi({ description: 'Description of the creation' }),
      durationTime: z
        .number()
        .exactOptional()
        .openapi({ description: 'In seconds, an approximative duration of the score' }),
      googleDriveFileId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If the user uses Google Drive and the score exists on Google Drive, this field will contain the unique identifier of the Flat score on Google Drive. You can access the document using the url: `https://drive.google.com/open?id={googleDriveFileId}`\n',
        }),
      instruments: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            "An array of the instrument identifiers used in the last version of the score. This is mainly used to display a list of the instruments in the Flat's UI or instruments icons. The format of the strings is `{instrument-group}.{instrument-id}`.\n",
        }),
      license: ScoreLicenseSchema.exactOptional(),
      licenseText: z
        .string()
        .exactOptional()
        .openapi({ description: 'Additional license text written on the exported/printed score' }),
      likes: ScoreLikesCountsSchema.exactOptional(),
      lyricist: z.string().exactOptional().openapi({ description: 'Lyricist of the score' }),
      mainTempoQpm: z
        .number()
        .exactOptional()
        .openapi({ description: 'The main tempo of the score (in QPM)' }),
      modificationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The date of the last revision of the score' }),
      numberMeasures: z
        .int()
        .exactOptional()
        .openapi({ description: 'The number of measures in the score' }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'If the score has been created in an organization, the identifier of this organization. This property is especially used with the score privacy `organizationPublic`.\n',
        }),
      parentScore: z
        .string()
        .exactOptional()
        .openapi({
          description: 'If the score has been forked, the unique identifier of the parent score.\n',
        }),
      plays: ScorePlaysCountsSchema.exactOptional(),
      publicationDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'The date when the score was published on Flat' }),
      rights: ResourceRightsSchema.exactOptional(),
      samples: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'An array of the audio samples identifiers used the different score parts.\nThe format of the strings is `{instrument-group}.{sample-id}`.\n',
        }),
      subtitle: z.string().exactOptional().openapi({ description: 'Subtitle of the score' }),
      tags: z
        .array(z.string().regex(/^[a-zA-Z0-9]{1,30}$/))
        .exactOptional()
        .openapi({ description: 'Tags describing the score' }),
      views: ScoreViewsCountsSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'The score and all its details' })
  .openapi('ScoreDetails')

const ScoreForkSchema = z
  .object({
    collection: z
      .string()
      .default('root')
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of a collection where the score will be copied.\nIf no collection identifier is provided, the score will be stored in the `root` directory.\n',
      }),
  })
  .openapi({ description: 'Options to fork the score', required: [] })
  .openapi('ScoreFork')

const ScoreModificationSchema = z
  .object({
    arranger: z.string().exactOptional().openapi({ description: 'The arranger of the score' }),
    composer: z.string().exactOptional().openapi({ description: 'The composer of the score' }),
    creationType: ScoreCreationTypeSchema.exactOptional(),
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({ description: 'Description of the creation' }),
    license: ScoreLicenseSchema.exactOptional(),
    licenseText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rights info written on the score' }),
    lyricist: z.string().exactOptional().openapi({ description: 'The lyricist of the score' }),
    privacy: ScorePrivacySchema.exactOptional(),
    sharingKey: z
      .string()
      .regex(/^[a-f0-9]{128}$/)
      .exactOptional()
      .openapi({
        description:
          'When using the `privacy` mode `privateLink`, this property can be used to set a custom sharing key, otherwise a new key will be generated.',
      }),
    subtitle: z.string().exactOptional().openapi({ description: 'The subtitle of the score' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'Tags describing the score' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the score' }),
  })
  .openapi({
    description: 'Edit the score metadata',
    example: { privacy: 'private' },
    required: [],
  })
  .openapi('ScoreModification')

const ScoreRevisionStatisticsSchema = z
  .object({
    additions: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of additions operations in the last revision' }),
    deletions: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of deletions operations in the last revision' }),
  })
  .openapi({
    description: 'The statistics related to the score revision (additions and deletions)\n',
    example: { additions: 24, deletions: 5 },
    required: [],
  })
  .openapi('ScoreRevisionStatistics')

const ScoreRevisionSchema = z
  .object({
    autosave: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this revision was automatically generated by Flat and not on\npurpose by the user.\n',
      }),
    collaborators: z
      .array(
        z
          .string()
          .openapi({
            description:
              'The list of user identifier or collaborators who worked on this\nrevision. This is list is built from the history of the revision\nspecified during the creation of the revision.\n',
          }),
      )
      .exactOptional(),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when this revision was created' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description associated to the revision' }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last event (action id) of the revision' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the revision.' }),
    statistics: ScoreRevisionStatisticsSchema.exactOptional(),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user identifier who created the revision' }),
  })
  .openapi({
    description: 'A score revision metadata',
    example: {
      autosave: true,
      collaborators: ['000000000000000000000010', '000000000000000000000020'],
      creationDate: '2017-01-26T20:29:10.622000Z',
      description: 'New revision',
      user: '000000000000000000000020',
    },
    required: [],
  })
  .openapi('ScoreRevision')

const ScoreRevisionCreationSchema = z
  .object({
    autosave: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Must be set to `true` if the revision was created automatically.\n',
      }),
    data: z
      .string()
      .openapi({
        description:
          'The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.\nBinary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.\n',
        example: '<score-partwise version="3.0"></score-partwise>',
      }),
    dataEncoding: z
      .literal('base64')
      .exactOptional()
      .openapi({
        description:
          'The optional encoding of the score data. This property must match the encoding used for the `data` property.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description associated to the revision' }),
  })
  .openapi({
    description: 'A new created revision',
    example: {
      autosave: true,
      data: '<score-partwise version="3.0"></score-partwise>',
      description: 'New revision',
      history: [
        {
          args: {
            measureUuid: '0be9f739-3213-f312-bb0a-00ad0c787ef7',
            previousUuid: '888cb742-2110-a050-ba71-28300ba6d61f',
          },
          fnc: 'action.AddMeasure',
          id: 'b278ad43-2e99-4e60-a782-ac119b294ab8',
          userId: '000000000000000000000010',
        },
      ],
    },
    required: ['data'],
  })
  .openapi('ScoreRevisionCreation')

const ScoreTrackStateSchema = z
  .enum(['draft', 'completed', 'deleted'])
  .default('draft')
  .openapi({ description: 'State of the track' })
  .openapi('ScoreTrackState')

const ScoreTrackPointSchema = z
  .object({
    measureUuid: z.uuid().exactOptional().openapi({ description: 'The measure unique identifier' }),
    time: z.number().openapi({ description: 'The corresponding time in seconds' }),
    type: z
      .enum(['measure', 'end'])
      .openapi({
        description:
          'The type of the synchronization point. If the type is `measure`, the measure uuid must be present in `measureUuid`',
      }),
  })
  .openapi({
    description: 'A track synchronization point',
    example: { measureUuid: '5132a788-69e6-d0c6-84ec-4bd858658d7c', time: 0, type: 'measure' },
    required: ['time', 'type'],
  })
  .openapi('ScoreTrackPoint')

const ScoreTrackTypeSchema = z
  .enum(['audio', 'soundcloud', 'youtube', 'vimeo'])
  .openapi({ description: 'The type of an audio track' })
  .openapi('ScoreTrackType')

const ScoreTrackSchema = z
  .object({
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation date of the track' }),
    creator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the track creator' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the track should be used as default audio source' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the score track' }),
    mediaId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the track when hosted on an external service.\nFor example, if the url is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, `mediaId` will be `dQw4w9WgXcQ`\n',
      }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The modification date of the track' }),
    score: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the score' }),
    state: ScoreTrackStateSchema.exactOptional(),
    synchronizationPoints: z.array(ScoreTrackPointSchema).exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'Title of the track' }),
    type: ScoreTrackTypeSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'The URL of the track' }),
  })
  .openapi({
    description: 'An audio track for a score',
    example: {
      creationDate: '2017-10-22T14:58:22.753000Z',
      creator: '5815d4b53269d90d2c80b71c',
      default: true,
      id: '59ecb20e563736b1e1f75dce',
      mediaId: 'dQw4w9WgXcQ',
      modificationDate: '2017-10-22T14:58:33.424000Z',
      score: '59a29d96f35a6411d7508bdd',
      state: 'completed',
      synchronizationPoints: [
        { measureUuid: '5132a788-69e6-d0c6-84ec-4bd858658d7c', time: 0, type: 'measure' },
        { time: 213, type: 'end' },
      ],
      title: 'Rick Astley - Never Gonna Give You Up',
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    required: [],
  })
  .openapi('ScoreTrack')

const ScoreTrackCreationSchema = z
  .object({
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the track should be used as default audio source' }),
    state: ScoreTrackStateSchema.exactOptional(),
    synchronizationPoints: z.array(ScoreTrackPointSchema).exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'Title of the track' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the track' }),
  })
  .openapi({
    description:
      'Creation of a new track. This one must contain the URL of the track or the corresponding file\n',
    example: {
      default: true,
      state: 'draft',
      synchronizationPoints: [
        { measureUuid: '5132a788-69e6-d0c6-84ec-4bd858658d7c', time: 0, type: 'measure' },
        { time: 213, type: 'end' },
      ],
      title: 'Rick Astley - Never Gonna Give You Up',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    required: [],
  })
  .openapi('ScoreTrackCreation')

const ScoreTrackUpdateSchema = z
  .object({
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the track should be used as default audio source' }),
    state: ScoreTrackStateSchema.exactOptional(),
    synchronizationPoints: z.array(ScoreTrackPointSchema).exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'Title of the track' }),
  })
  .openapi({
    description: 'Update an existing track.\n',
    example: {
      default: true,
      state: 'draft',
      synchronizationPoints: [
        { measureUuid: '5132a788-69e6-d0c6-84ec-4bd858658d7c', time: 0, type: 'measure' },
        { time: 213, type: 'end' },
      ],
      title: 'Rick Astley - Never Gonna Give You Up',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    required: [],
  })
  .openapi('ScoreTrackUpdate')

const UserAdminUpdateSchema = z
  .object({
    email: z.email().exactOptional().openapi({ description: 'Email of the account' }),
    firstname: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ description: 'First name of the user' }),
    lastname: z.string().max(60).exactOptional().openapi({ description: 'Last name of the user' }),
    organizationRole: OrganizationRolesSchema.exactOptional(),
    password: z
      .string()
      .min(6)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'Password of the account' }),
    username: z
      .string()
      .regex(/^[A-Za-z0-9\-_.]+$/)
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({ description: 'Username of the account' }),
  })
  .openapi({ description: 'User update as an organization admin', required: [] })
  .openapi('UserAdminUpdate')

const UserCreationSchema = z
  .object({
    email: z.email().exactOptional().openapi({ description: 'Email of the new account' }),
    firstname: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({ description: 'First name of the user' }),
    lastname: z.string().max(60).exactOptional().openapi({ description: 'Last name of the user' }),
    locale: FlatLocalesSchema.exactOptional(),
    password: z.string().min(6).max(1000).openapi({ description: 'Password of the new account' }),
    username: z
      .string()
      .regex(/^[A-Za-z0-9\-_.]+$/)
      .min(1)
      .max(30)
      .openapi({ description: 'Username of the new account' }),
  })
  .openapi({ description: 'User creation', required: ['password', 'username'] })
  .openapi('UserCreation')

const UserDetailsSchema = UserPublicSchema.and(
  z
    .object({
      coverPictureFile: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: 'The ID of the user profile cover picture' }),
      id: z.string().exactOptional().openapi({ description: 'Identifier of the user' }),
      locale: FlatLocalesSchema.exactOptional(),
      pictureFile: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: 'The ID of the user profile picture' }),
      privateProfile: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Tell either this user profile is private or not (individual accounts only)',
        }),
      type: z
        .enum(['user', 'guest'])
        .exactOptional()
        .openapi({ description: 'The type of account' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'User details' })
  .openapi('UserDetails')

const UserDetailsAdminSchema = UserPublicSummarySchema.and(
  z
    .object({
      email: z.email().exactOptional().openapi({ description: 'Email of the user' }),
      lastActivityDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'Date of the last user activity' }),
      license: z
        .object({
          active: z.boolean().exactOptional().openapi({ description: 'ID of the current license' }),
          expirationDate: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({ description: 'Date when the license expires' }),
          id: z.string().exactOptional().openapi({ description: 'ID of the current license' }),
          mode: LicenseModeSchema.exactOptional(),
          source: LicenseSourcesSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({ description: 'Current active license of the user', required: [] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'User details (view for organization teacher / admin)' })
  .openapi('UserDetailsAdmin')

const AssignmentParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier of the assignment',
      in: 'path',
      name: 'assignment',
      required: true,
      schema: { type: 'string' },
    },
  })

const ClassParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier of the class',
      in: 'path',
      name: 'class',
      required: true,
      schema: { type: 'string' },
    },
  })

const CommentParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier of the comment',
      in: 'path',
      name: 'comment',
      required: true,
      schema: { type: 'string' },
    },
  })

const GroupParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier of a Flat group\n',
      in: 'path',
      name: 'group',
      required: true,
      schema: { type: 'string' },
    },
  })

const GroupIdsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter users by group',
      in: 'query',
      name: 'group',
      schema: { items: { type: 'string' }, type: 'array' },
      required: false,
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(50)
  .exactOptional()
  .openapi({
    param: {
      description: 'This is the maximum number of objects that may be returned',
      in: 'query',
      name: 'limit',
      schema: { default: 50, maximum: 1000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const NextParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
      in: 'query',
      name: 'next',
      schema: { type: 'string' },
      required: false,
    },
  })

const NoActiveLicenseParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: "Filter users who don't have an active license",
      in: 'query',
      name: 'noActiveLicense',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const PostParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier of the post',
      in: 'path',
      name: 'post',
      required: true,
      schema: { type: 'string' },
    },
  })

const PreviousParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
      in: 'query',
      name: 'previous',
      schema: { type: 'string' },
      required: false,
    },
  })

const RoleParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.enum(['user', 'teacher', 'admin'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter users by role',
      in: 'query',
      name: 'role',
      schema: { items: { enum: ['user', 'teacher', 'admin'], type: 'string' }, type: 'array' },
      required: false,
    },
  })

const SearchInputQueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The query to search',
      in: 'query',
      name: 'q',
      schema: { type: 'string' },
      required: false,
    },
  })

const SortDirectionParamsSchema = z
  .enum(['asc', 'desc'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort direction',
      in: 'query',
      name: 'direction',
      schema: { enum: ['asc', 'desc'], type: 'string' },
      required: false,
    },
  })

const SubmissionParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique identifier of the submission',
      in: 'path',
      name: 'submission',
      required: true,
      schema: { type: 'string' },
    },
  })

const OAuth2SecurityScheme = {
  description:
    'OAuth 2.0 authentication for your app or. Please only request the most restrictive and needed scopes. Using some of the scopes may require an additional review from our team. The Flat API supports **authorization code** and **implicit** flows.\n',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://flat.io/auth/oauth',
      scopes: {
        'account.education_profile':
          "Provides access to the basic person's education profile and public organization information.\n",
        'account.email': "Provices access to the person's email.\n",
        'account.public_profile':
          "Provides access to the basic person's public profile. Education profiles may be anonymized with this scope, you can request the scope `education_profile` to access to the a basic education account profile.\n",
        collections: "Full, permissive scope to access all of a user's collections.",
        'collections.add_scores': "Allow to add scores to a user's collections.",
        'collections.readonly': "Allow read-only access to a user's collections.",
        'edu.admin': 'Full, permissive scope to manage all the admin of an organization.',
        'edu.admin.lti': 'Access and manage the LTI Credentials for an organization.',
        'edu.admin.lti.readonly': 'Read-only access to the LTI Credentials of an organization.',
        'edu.admin.users': 'Access and manage the users and invitations of the organization.',
        'edu.admin.users.readonly':
          'Read-only access to the users and invitations of the organization.',
        'edu.assignments': 'Read-write access to the assignments and submissions.',
        'edu.assignments.readonly': 'Read-only access to the assignments and submissions.',
        'edu.classes': 'Full, permissive scope to manage the classes.',
        'edu.classes.readonly': 'Read-only access to the classes.',
        scores: "Full, permissive scope to access all of a user's scores.\n",
        'scores.readonly':
          "Allows read-only access to all a user's scores. You won't need this scope to read public scores.\n",
        'scores.social': 'Allow to post comments and like scores\n',
      },
      tokenUrl: 'https://api.flat.io/oauth/access_token',
    },
  },
  type: 'oauth2',
}

export const getClassesRoute = createRoute({
  method: 'get',
  path: '/classes',
  tags: ['Class'],
  summary: 'List the classes available for the current user',
  operationId: 'listClasses',
  request: {
    query: z.object({
      state: z
        .enum(['active', 'inactive', 'archived'])
        .default('active')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the classes by state',
            in: 'query',
            name: 'state',
            schema: { default: 'active', enum: ['active', 'inactive', 'archived'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of classes',
      content: { 'application/json': { schema: z.array(ClassDetailsSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.classes.readonly'] }],
})

export const postClassesRoute = createRoute({
  method: 'post',
  path: '/classes',
  tags: ['Class'],
  summary: 'Create a new class',
  description:
    'Classrooms on Flat allow you to create activities with assignments and post content to a specific group.\n\nWhen creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.\n\nIf the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.\n\nYou can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.\n',
  operationId: 'createClass',
  request: {
    body: { content: { 'application/json': { schema: ClassCreationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The new class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const postClassesEnrollEnrollmentCodeRoute = createRoute({
  method: 'post',
  path: '/classes/enroll/{enrollmentCode}',
  tags: ['Class'],
  summary: 'Join a class',
  description:
    'Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.\n\nFlat will automatically add the user to the corresponding class group based on this role in the organization.\n',
  operationId: 'enrollClass',
  request: {
    params: z.object({
      enrollmentCode: z
        .string()
        .openapi({
          param: {
            description: 'The enrollment code, available to the teacher in `ClassDetails`\n',
            in: 'path',
            name: 'enrollmentCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The new class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const getClassesClassRoute = createRoute({
  method: 'get',
  path: '/classes/{class}',
  tags: ['Class'],
  summary: 'Get the details of a single class',
  operationId: 'getClass',
  request: { params: z.object({ class: ClassParamsSchema }) },
  responses: {
    200: {
      description: 'The new class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.classes.readonly'] }],
})

export const putClassesClassRoute = createRoute({
  method: 'put',
  path: '/classes/{class}',
  tags: ['Class'],
  summary: 'Update the class',
  description: 'Update the meta information of the class\n',
  operationId: 'updateClass',
  request: {
    params: z.object({ class: ClassParamsSchema }),
    body: {
      description: 'Details of the Class',
      content: { 'application/json': { schema: ClassUpdateSchema } },
    },
  },
  responses: {
    200: {
      description: 'The new class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const postClassesClassActivateRoute = createRoute({
  method: 'post',
  path: '/classes/{class}/activate',
  tags: ['Class'],
  summary: 'Activate the class',
  description:
    'Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.\n',
  operationId: 'activateClass',
  request: { params: z.object({ class: ClassParamsSchema }) },
  responses: {
    200: {
      description: 'The class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const postClassesClassArchiveRoute = createRoute({
  method: 'post',
  path: '/classes/{class}/archive',
  tags: ['Class'],
  summary: 'Archive the class',
  description:
    'Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.\n',
  operationId: 'archiveClass',
  request: { params: z.object({ class: ClassParamsSchema }) },
  responses: {
    200: {
      description: 'The class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const deleteClassesClassArchiveRoute = createRoute({
  method: 'delete',
  path: '/classes/{class}/archive',
  tags: ['Class'],
  summary: 'Unarchive the class',
  description:
    'Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.\n',
  operationId: 'unarchiveClass',
  request: { params: z.object({ class: ClassParamsSchema }) },
  responses: {
    200: {
      description: 'The class details',
      content: { 'application/json': { schema: ClassDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const getClassesClassAssignmentsRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments',
  tags: ['Class'],
  summary: 'Assignments listing',
  operationId: 'listAssignments',
  request: { params: z.object({ class: ClassParamsSchema }) },
  responses: {
    200: {
      description: 'List of assignments for the class',
      content: { 'application/json': { schema: z.array(AssignmentSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.classes',
        'edu.classes.readonly',
        'edu.assignments',
        'edu.assignments.readonly',
      ],
    },
  ],
})

export const postClassesClassAssignmentsRoute = createRoute({
  method: 'post',
  path: '/classes/{class}/assignments',
  tags: ['Class'],
  summary: 'Assignment creation',
  description:
    'Use this method as a teacher to create and post a new assignment to a class.\n\nIf the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.\n',
  operationId: 'createAssignment',
  request: {
    params: z.object({ class: ClassParamsSchema }),
    body: { content: { 'application/json': { schema: AssignmentCreationSchema } } },
  },
  responses: {
    200: {
      description: 'The assignment has been created',
      content: { 'application/json': { schema: AssignmentSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const postClassesClassAssignmentsAssignmentArchiveRoute = createRoute({
  method: 'post',
  path: '/classes/{class}/assignments/{assignment}/archive',
  tags: ['Class'],
  summary: 'Archive the assignment',
  description: 'Archive the assignment\n',
  operationId: 'archiveAssignment',
  request: { params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }) },
  responses: {
    200: {
      description: 'The assignment details',
      content: { 'application/json': { schema: AssignmentSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const deleteClassesClassAssignmentsAssignmentArchiveRoute = createRoute({
  method: 'delete',
  path: '/classes/{class}/assignments/{assignment}/archive',
  tags: ['Class'],
  summary: 'Unarchive the assignment.',
  description: 'Mark the assignment as `active`.\n',
  operationId: 'unarchiveAssignment',
  request: { params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }) },
  responses: {
    200: {
      description: 'The assignment details',
      content: { 'application/json': { schema: AssignmentSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const postClassesClassAssignmentsAssignmentCopyRoute = createRoute({
  method: 'post',
  path: '/classes/{class}/assignments/{assignment}/copy',
  tags: ['Class'],
  summary: 'Copy an assignment',
  description:
    'Copy an assignment to a specified class.\n\nIf the original assignment has a due date in the past, this new assingment will be created without a due date.\n\nIf the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.\n',
  operationId: 'copyAssignment',
  request: {
    params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }),
    body: { content: { 'application/json': { schema: AssignmentCopySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The new created assingment',
      content: { 'application/json': { schema: AssignmentSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const getClassesClassAssignmentsAssignmentSubmissionsRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments/{assignment}/submissions',
  tags: ['Class'],
  summary: "List the students' submissions",
  operationId: 'getSubmissions',
  request: { params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }) },
  responses: {
    200: {
      description: 'The submissions',
      content: { 'application/json': { schema: z.array(AssignmentSubmissionSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.classes',
        'edu.classes.readonly',
        'edu.assignments',
        'edu.assignments.readonly',
      ],
    },
  ],
})

export const putClassesClassAssignmentsAssignmentSubmissionsRoute = createRoute({
  method: 'put',
  path: '/classes/{class}/assignments/{assignment}/submissions',
  tags: ['Class'],
  summary: 'Create or edit a submission',
  description:
    'Use this method as a student to create, update and submit a submission related to an assignment.\nStudents can only set `attachments` and `submit`.\nTeachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.\n',
  operationId: 'createSubmission',
  request: {
    params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }),
    body: {
      content: { 'application/json': { schema: AssignmentSubmissionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The submission',
      content: { 'application/json': { schema: AssignmentSubmissionSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const getClassesClassAssignmentsAssignmentSubmissionsCsvRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments/{assignment}/submissions/csv',
  tags: ['Class'],
  summary: 'CSV Grades exports',
  description: 'Export list of submissions grades to a CSV file',
  operationId: 'exportSubmissionsReviewsAsCsv',
  request: { params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }) },
  responses: {
    200: {
      description: 'List of submissions',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    default: { description: 'Error', content: { 'text/csv': { schema: FlatErrorResponseSchema } } },
  },
  security: [
    {
      OAuth2: [
        'edu.classes',
        'edu.classes.readonly',
        'edu.assignments',
        'edu.assignments.readonly',
      ],
    },
  ],
})

export const getClassesClassAssignmentsAssignmentSubmissionsExcelRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments/{assignment}/submissions/excel',
  tags: ['Class'],
  summary: 'Excel Grades exports',
  description: 'Export list of submissions grades to an Excel file',
  operationId: 'exportSubmissionsReviewsAsExcel',
  request: { params: z.object({ class: ClassParamsSchema, assignment: AssignmentParamsSchema }) },
  responses: {
    200: {
      description: 'List of submissions',
      content: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    default: {
      description: 'Error',
      content: {
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: FlatErrorResponseSchema,
        },
      },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.classes',
        'edu.classes.readonly',
        'edu.assignments',
        'edu.assignments.readonly',
      ],
    },
  ],
})

export const getClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments/{assignment}/submissions/{submission}',
  tags: ['Class'],
  summary: 'Get a student submission',
  operationId: 'getSubmission',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      assignment: AssignmentParamsSchema,
      submission: SubmissionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A submission',
      content: { 'application/json': { schema: AssignmentSubmissionSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.classes',
        'edu.classes.readonly',
        'edu.assignments',
        'edu.assignments.readonly',
      ],
    },
  ],
})

export const putClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute = createRoute({
  method: 'put',
  path: '/classes/{class}/assignments/{assignment}/submissions/{submission}',
  tags: ['Class'],
  summary: 'Edit a submission',
  description:
    'Use this method as a teacher to update the different submission and give feedback.\nTeachers can only set `return`, `draftGrade` and `grade`\n',
  operationId: 'editSubmission',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      assignment: AssignmentParamsSchema,
      submission: SubmissionParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: AssignmentSubmissionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The submission',
      content: { 'application/json': { schema: AssignmentSubmissionSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute = createRoute({
  method: 'delete',
  path: '/classes/{class}/assignments/{assignment}/submissions/{submission}',
  tags: ['Class'],
  summary: 'Delete a submission',
  description:
    'Use this method as a teacher to delete a submission and allow student to start over the assignment\n',
  operationId: 'deleteSubmission',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      assignment: AssignmentParamsSchema,
      submission: SubmissionParamsSchema,
    }),
  },
  responses: {
    204: { description: 'The submission has been deleted' },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes', 'edu.assignments'] }],
})

export const getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments/{assignment}/submissions/{submission}/comments',
  tags: ['Class'],
  summary: 'List the feedback comments of a submission',
  operationId: 'getSubmissionComments',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      assignment: AssignmentParamsSchema,
      submission: SubmissionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The comments of the score',
      content: { 'application/json': { schema: z.array(AssignmentSubmissionCommentSchema) } },
    },
    403: {
      description: 'Not granted to access to this submission',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Submission not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.assignments', 'edu.assignments.readonly'] }],
})

export const postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute = createRoute({
  method: 'post',
  path: '/classes/{class}/assignments/{assignment}/submissions/{submission}/comments',
  tags: ['Class'],
  summary: 'Add a feedback comment to a submission',
  operationId: 'postSubmissionComment',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      assignment: AssignmentParamsSchema,
      submission: SubmissionParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: AssignmentSubmissionCommentCreationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The comment',
      content: { 'application/json': { schema: AssignmentSubmissionCommentSchema } },
    },
    403: {
      description: 'Not granted to access to this submission',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Submission not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.assignments'] }],
})

export const putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute =
  createRoute({
    method: 'put',
    path: '/classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment}',
    tags: ['Class'],
    summary: 'Update a feedback comment to a submission',
    operationId: 'updateSubmissionComment',
    request: {
      params: z.object({
        class: ClassParamsSchema,
        assignment: AssignmentParamsSchema,
        submission: SubmissionParamsSchema,
        comment: CommentParamsSchema,
      }),
      body: {
        content: { 'application/json': { schema: AssignmentSubmissionCommentCreationSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'The comment',
        content: { 'application/json': { schema: AssignmentSubmissionCommentSchema } },
      },
      403: {
        description: 'Not granted to access to this submission',
        content: { 'application/json': { schema: FlatErrorResponseSchema } },
      },
      404: {
        description: 'Submission not found',
        content: { 'application/json': { schema: FlatErrorResponseSchema } },
      },
      default: {
        description: 'Error',
        content: { 'application/json': { schema: FlatErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['edu.assignments'] }],
  })

export const deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute =
  createRoute({
    method: 'delete',
    path: '/classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment}',
    tags: ['Class'],
    summary: 'Delete a feedback comment to a submission',
    operationId: 'deleteSubmissionComment',
    request: {
      params: z.object({
        class: ClassParamsSchema,
        assignment: AssignmentParamsSchema,
        submission: SubmissionParamsSchema,
        comment: CommentParamsSchema,
      }),
    },
    responses: {
      204: { description: 'The comment has been deleted' },
      default: {
        description: 'Error',
        content: { 'application/json': { schema: FlatErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['edu.assignments'] }],
  })

export const getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/assignments/{assignment}/submissions/{submission}/history',
  tags: ['Class'],
  summary: 'Get the history of the submission',
  description:
    'For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.\n',
  operationId: 'getSubmissionHistory',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      assignment: AssignmentParamsSchema,
      submission: SubmissionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The history of the submission',
      content: { 'application/json': { schema: z.array(AssignmentSubmissionHistorySchema) } },
    },
    403: {
      description: 'Not granted to access to this submission',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Submission not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.assignments', 'edu.assignments.readonly'] }],
})

export const getClassesClassStudentsUserSubmissionsRoute = createRoute({
  method: 'get',
  path: '/classes/{class}/students/{user}/submissions',
  tags: ['Class'],
  summary: 'List the submissions for a student',
  description:
    'Use this method as a teacher to list all the assignment submissions sent by a student of the class\n',
  operationId: 'listClassStudentSubmissions',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      user: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the user',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of submissions',
      content: { 'application/json': { schema: z.array(AssignmentSubmissionSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.classes',
        'edu.classes.readonly',
        'edu.assignments',
        'edu.assignments.readonly',
      ],
    },
  ],
})

export const putClassesClassUsersUserRoute = createRoute({
  method: 'put',
  path: '/classes/{class}/users/{user}',
  tags: ['Class'],
  summary: 'Add a user to the class',
  description:
    'This method can be used by a teacher of the class to enroll another Flat user into the class.\n\nOnly users that are part of your Organization can be enrolled in a class of this same Organization.\n\nWhen enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.\n',
  operationId: 'addClassUser',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      user: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the user',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The user has been added to the class' },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const deleteClassesClassUsersUserRoute = createRoute({
  method: 'delete',
  path: '/classes/{class}/users/{user}',
  tags: ['Class'],
  summary: 'Remove a user from the class',
  description:
    'This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.\n\nWarning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.\n',
  operationId: 'deleteClassUser',
  request: {
    params: z.object({
      class: ClassParamsSchema,
      user: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the user',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The user has been removed from the class' },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.classes'] }],
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Collection'],
  summary: 'List the collections',
  description:
    "Use this method to list the user's collections contained in `parent` (by default in the `root` collection).\nIf no sort option is provided, the collections are sorted by `creationDate` `desc`.\n\nNote that this method will not include the `parent` collection in the listing.\nFor example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.\n",
  operationId: 'listCollections',
  request: {
    query: z.object({
      parent: z
        .string()
        .default('root')
        .exactOptional()
        .openapi({
          param: {
            description:
              "List the collection contained in this `parent` collection.\n\nThis option doesn't provide a complete multi-level collection support.\nWhen sharing a collection with someone, this one will have as `parent` `sharedWithMe`.\n",
            in: 'query',
            name: 'parent',
            schema: { default: 'root', type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['creationDate', 'title'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort',
            in: 'query',
            name: 'sort',
            schema: { enum: ['creationDate', 'title'], type: 'string' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'direction',
            schema: { enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'This is the maximum number of objects that may be returned',
            in: 'query',
            name: 'limit',
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      next: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
            in: 'query',
            name: 'next',
            schema: { type: 'string' },
            required: false,
          },
        }),
      previous: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
            in: 'query',
            name: 'previous',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of collections',
      content: { 'application/json': { schema: z.array(CollectionSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections', 'collections.readonly'] }],
})

export const postCollectionsRoute = createRoute({
  method: 'post',
  path: '/collections',
  tags: ['Collection'],
  summary: 'Create a new collection',
  description: 'This method will create a new collection and add it to your `root` collection.\n',
  operationId: 'createCollection',
  request: {
    body: { content: { 'application/json': { schema: CollectionCreationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Collection created',
      content: { 'application/json': { schema: CollectionSchema } },
    },
    400: {
      description: 'Bad collection creation request',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections'] }],
})

export const getCollectionsCollectionRoute = createRoute({
  method: 'get',
  path: '/collections/{collection}',
  tags: ['Collection'],
  summary: 'Get collection details',
  operationId: 'getCollection',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection details',
      content: { 'application/json': { schema: CollectionSchema } },
    },
    403: {
      description: 'Not granted to access to this collection',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections', 'collections.readonly'] }],
})

export const putCollectionsCollectionRoute = createRoute({
  method: 'put',
  path: '/collections/{collection}',
  tags: ['Collection'],
  summary: "Update a collection's metadata",
  operationId: 'editCollection',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CollectionModificationSchema } } },
  },
  responses: {
    200: {
      description: 'Collection details',
      content: { 'application/json': { schema: CollectionSchema } },
    },
    403: {
      description: 'Not granted to access to this collection',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections'] }],
})

export const deleteCollectionsCollectionRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection}',
  tags: ['Collection'],
  summary: 'Delete the collection',
  description:
    'This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.\n',
  operationId: 'deleteCollection',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Collection deleted' },
    403: {
      description: 'Not granted to access to this collection',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections'] }],
})

export const getCollectionsCollectionScoresRoute = createRoute({
  method: 'get',
  path: '/collections/{collection}/scores',
  tags: ['Collection'],
  summary: 'List the scores contained in a collection',
  description:
    'Use this method to list the scores contained in a collection.\nIf no sort option is provided, the scores are sorted by `modificationDate` `desc`.\n',
  operationId: 'listCollectionScores',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['creationDate', 'modificationDate', 'title'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort',
            in: 'query',
            name: 'sort',
            schema: { enum: ['creationDate', 'modificationDate', 'title'], type: 'string' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'direction',
            schema: { enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'This is the maximum number of objects that may be returned',
            in: 'query',
            name: 'limit',
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      next: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
            in: 'query',
            name: 'next',
            schema: { type: 'string' },
            required: false,
          },
        }),
      previous: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
            in: 'query',
            name: 'previous',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of scores',
      content: { 'application/json': { schema: z.array(ScoreDetailsSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections'] }],
})

export const putCollectionsCollectionScoresScoreRoute = createRoute({
  method: 'put',
  path: '/collections/{collection}/scores/{score}',
  tags: ['Collection'],
  summary: 'Add a score to the collection',
  description:
    'This operation will add a score to a collection. The default behavior will make the score available across multiple collections.\nYou must have the capability `canAddScores` on the provided `collection` to perform the action.\n',
  operationId: 'addScoreToCollection',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Score details',
      content: { 'application/json': { schema: ScoreDetailsSchema } },
    },
    403: {
      description: 'Not granted to access to this collection or score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Collection or score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections', 'collections.add_scores'] }],
})

export const deleteCollectionsCollectionScoresScoreRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection}/scores/{score}',
  tags: ['Collection'],
  summary: 'Delete a score from the collection',
  description:
    'This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.\nThis can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.\n',
  operationId: 'deleteScoreFromCollection',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Score removed from the collection' },
    403: {
      description: 'Not granted to access to this collection',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections'] }],
})

export const postCollectionsCollectionUntrashRoute = createRoute({
  method: 'post',
  path: '/collections/{collection}/untrash',
  tags: ['Collection'],
  summary: 'Untrash a collection',
  description:
    'This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.\n',
  operationId: 'untrashCollection',
  request: {
    params: z.object({
      collection: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the collection.\nThe following aliases are supported:\n- `root`: The root collection of the account\n- `sharedWithMe`: Automatically contains new resources that have been shared individually\n- `trash`: Automatically contains resources that have been deleted\n',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The score has been untrashed' },
    403: {
      description: 'Not granted to manage this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['collections'] }],
})

export const getGroupsGroupRoute = createRoute({
  method: 'get',
  path: '/groups/{group}',
  tags: ['Group'],
  summary: 'Get group information',
  operationId: 'getGroupDetails',
  request: { params: z.object({ group: GroupParamsSchema }) },
  responses: {
    200: {
      description: 'The group details',
      content: { 'application/json': { schema: GroupDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.admin',
        'edu.admin.users',
        'edu.admin.users.readonly',
        'edu.classes',
        'edu.classes.readonly',
      ],
    },
  ],
})

export const getGroupsGroupScoresRoute = createRoute({
  method: 'get',
  path: '/groups/{group}/scores',
  tags: ['Group', 'Score'],
  summary: "List group's scores",
  description: 'Get the list of scores shared with a group.\n',
  operationId: 'getGroupScores',
  request: {
    params: z.object({ group: GroupParamsSchema }),
    query: z.object({
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the score forked from the score id `parent`',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The group's scores",
      content: { 'application/json': { schema: z.array(ScoreDetailsSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const getGroupsGroupUsersRoute = createRoute({
  method: 'get',
  path: '/groups/{group}/users',
  tags: ['Group'],
  summary: "List group's users",
  operationId: 'listGroupUsers',
  request: {
    params: z.object({ group: GroupParamsSchema }),
    query: z.object({
      source: z
        .enum(['googleClassroom', 'microsoftGraph', 'clever'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the users by their source\n',
            in: 'query',
            name: 'source',
            schema: { enum: ['googleClassroom', 'microsoftGraph', 'clever'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of users member of the group',
      content: { 'application/json': { schema: z.array(UserPublicSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'edu.admin',
        'edu.admin.users',
        'edu.admin.users.readonly',
        'edu.classes',
        'edu.classes.readonly',
      ],
    },
  ],
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Account'],
  summary: 'Get current user profile',
  description: 'Get details about the current authenticated User.\n',
  operationId: 'getAuthenticatedUser',
  request: {
    query: z.object({
      onlyId: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return the user id',
            in: 'query',
            name: 'onlyId',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current user details',
      content: { 'application/json': { schema: UserDetailsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['account.public_profile', 'account.education_profile'] }],
})

export const getOrganizationsInvitationsRoute = createRoute({
  method: 'get',
  path: '/organizations/invitations',
  tags: ['Organization'],
  summary: 'List the organization invitations',
  operationId: 'listOrganizationInvitations',
  request: {
    query: z.object({
      role: z
        .enum(['user', 'teacher', 'admin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter users by role',
            in: 'query',
            name: 'role',
            schema: { enum: ['user', 'teacher', 'admin'], type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'This is the maximum number of objects that may be returned',
            in: 'query',
            name: 'limit',
            schema: { default: 50, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      next: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
            in: 'query',
            name: 'next',
            schema: { type: 'string' },
            required: false,
          },
        }),
      previous: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n',
            in: 'query',
            name: 'previous',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of invitations',
      content: { 'application/json': { schema: z.array(OrganizationInvitationSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users', 'edu.admin.users.readonly'] }],
})

export const postOrganizationsInvitationsRoute = createRoute({
  method: 'post',
  path: '/organizations/invitations',
  tags: ['Organization'],
  summary: 'Create a new invitation to join the organization',
  description:
    "This method creates and sends invitation for teachers and admins.\n\nInvitations can only be used by new Flat users or users who are not part of the organization yet.\n\nIf the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.\n",
  operationId: 'createOrganizationInvitation',
  request: {
    body: { content: { 'application/json': { schema: OrganizationInvitationCreationSchema } } },
  },
  responses: {
    200: {
      description: 'New invitation created',
      content: { 'application/json': { schema: OrganizationInvitationSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users'] }],
})

export const deleteOrganizationsInvitationsInvitationRoute = createRoute({
  method: 'delete',
  path: '/organizations/invitations/{invitation}',
  tags: ['Organization'],
  summary: 'Remove an organization invitation',
  operationId: 'removeOrganizationInvitation',
  request: {
    params: z.object({
      invitation: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the invitation',
            in: 'path',
            name: 'invitation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The invitation has been removed' },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users'] }],
})

export const getOrganizationsLtiCredentialsRoute = createRoute({
  method: 'get',
  path: '/organizations/lti/credentials',
  tags: ['Organization'],
  summary: 'List LTI 1.x credentials',
  operationId: 'listLtiCredentials',
  responses: {
    200: {
      description: 'The list of LTI Credentials',
      content: { 'application/json': { schema: z.array(LtiCredentialsSchema) } },
    },
    403: {
      description: 'Not admin of an organization',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.lti', 'edu.admin.lti.readonly'] }],
})

export const postOrganizationsLtiCredentialsRoute = createRoute({
  method: 'post',
  path: '/organizations/lti/credentials',
  tags: ['Organization'],
  summary: 'Create a new couple of LTI 1.x credentials',
  description:
    'Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).\n',
  operationId: 'createLtiCredentials',
  request: {
    body: {
      content: { 'application/json': { schema: LtiCredentialsCreationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The LTI Credentials',
      content: { 'application/json': { schema: LtiCredentialsSchema } },
    },
    403: {
      description: 'Not admin of an organization',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.lti'] }],
})

export const deleteOrganizationsLtiCredentialsCredentialsRoute = createRoute({
  method: 'delete',
  path: '/organizations/lti/credentials/{credentials}',
  tags: ['Organization'],
  summary: 'Revoke LTI 1.x credentials',
  operationId: 'revokeLtiCredentials',
  request: {
    params: z.object({
      credentials: z
        .string()
        .openapi({
          param: {
            description: 'Credentials unique identifier\n',
            in: 'path',
            name: 'credentials',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Credentials revoked' },
    403: {
      description: 'Not admin of an organization',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Credentials not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.lti'] }],
})

export const getOrganizationsUsersRoute = createRoute({
  method: 'get',
  path: '/organizations/users',
  tags: ['Organization'],
  summary: 'List the organization users',
  operationId: 'listOrganizationUsers',
  request: {
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The order to sort the user list',
            in: 'query',
            name: 'sort',
            schema: {
              items: {
                enum: ['firstname', 'lastname', 'lastActivityDate', 'licenseExpirationDate'],
                type: 'string',
              },
              type: 'string',
            },
            required: false,
          },
        }),
      direction: SortDirectionParamsSchema,
      next: NextParamsSchema,
      previous: PreviousParamsSchema,
      role: RoleParamsSchema,
      q: SearchInputQueryParamsSchema,
      group: GroupIdsParamsSchema,
      noActiveLicense: NoActiveLicenseParamsSchema,
      licenseExpirationDate: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter users by license expiration date or `active` / `notActive`',
            in: 'query',
            name: 'licenseExpirationDate',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      onlyIds: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only user ids',
            in: 'query',
            name: 'onlyIds',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'This is the maximum number of objects that may be returned',
            in: 'query',
            name: 'limit',
            schema: { default: 25, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of users',
      content: { 'application/json': { schema: z.array(UserDetailsAdminSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users', 'edu.admin.users.readonly'] }],
})

export const postOrganizationsUsersRoute = createRoute({
  method: 'post',
  path: '/organizations/users',
  tags: ['Organization'],
  summary: 'Create a new user account',
  operationId: 'createOrganizationUser',
  request: { body: { content: { 'application/json': { schema: UserCreationSchema } } } },
  responses: {
    200: {
      description: 'New user created',
      content: { 'application/json': { schema: UserDetailsAdminSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users'] }],
})

export const getOrganizationsUsersCountRoute = createRoute({
  method: 'get',
  path: '/organizations/users/count',
  tags: ['Organization'],
  summary: 'Count the organization users using the provided filters',
  operationId: 'countOrgaUsers',
  request: {
    query: z.object({
      role: RoleParamsSchema,
      q: SearchInputQueryParamsSchema,
      group: GroupIdsParamsSchema,
      noActiveLicense: NoActiveLicenseParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Number of users', content: { 'application/json': { schema: z.int() } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users', 'edu.admin.users.readonly'] }],
})

export const putOrganizationsUsersUserRoute = createRoute({
  method: 'put',
  path: '/organizations/users/{user}',
  tags: ['Organization'],
  summary: 'Update account information',
  operationId: 'updateOrganizationUser',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the Flat account\n',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserAdminUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'User updated',
      content: { 'application/json': { schema: UserDetailsAdminSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users'] }],
})

export const deleteOrganizationsUsersUserRoute = createRoute({
  method: 'delete',
  path: '/organizations/users/{user}',
  tags: ['Organization'],
  summary: 'Remove an account from Flat',
  description:
    'This operation removes an account from Flat and its data, including:\n* The music scores created by this user (documents, history, comments, collaboration information)\n* Education related data (assignments and classroom information)\n',
  operationId: 'removeOrganizationUser',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the Flat account\n',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      convertToIndividual: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, the account will be only removed from the organization and converted into an individual account on our public website, https://flat.io.\nThis operation will remove the education-related data from the account.\nBefore realizing this operation, you need to be sure that the user is at least 13 years old and that this one has read and agreed to the Individual Terms of Services of Flat available on https://flat.io/legal.\n',
            in: 'query',
            name: 'convertToIndividual',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'User deleted' },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['edu.admin', 'edu.admin.users'] }],
})

export const postScoresRoute = createRoute({
  method: 'post',
  path: '/scores',
  tags: ['Score'],
  summary: 'Create a new score',
  description:
    "Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.\n\nThis API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).\n\nThe currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).\n\nIf no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.\nIf a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.\nYou can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.\n",
  operationId: 'createScore',
  request: {
    body: { content: { 'application/json': { schema: ScoreCreationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Score created',
      content: { 'application/json': { schema: ScoreDetailsSchema } },
    },
    400: {
      description: 'Bad score creation request',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreRoute = createRoute({
  method: 'get',
  path: '/scores/{score}',
  tags: ['Score'],
  summary: "Get a score's metadata",
  description:
    'Get the details of a score identified by the `score` parameter in the URL.\nThe currently authenticated user must have at least a read access to the document to use this API call.\n',
  operationId: 'getScore',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Score details',
      content: { 'application/json': { schema: ScoreDetailsSchema } },
    },
    402: {
      description: 'Account overquota and this document is out of the granted quota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const putScoresScoreRoute = createRoute({
  method: 'put',
  path: '/scores/{score}',
  tags: ['Score'],
  summary: "Edit a score's metadata",
  description:
    'This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.\n\nTo edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).\n\nWhen editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.\nThis pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.\n',
  operationId: 'editScore',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScoreModificationSchema } } },
  },
  responses: {
    200: {
      description: 'Score details',
      content: { 'application/json': { schema: ScoreDetailsSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const deleteScoresScoreRoute = createRoute({
  method: 'delete',
  path: '/scores/{score}',
  tags: ['Score'],
  summary: 'Delete a score',
  description:
    "This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.\n\nWhen called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.\nThe score won't be accessible anymore after calling this method and the user's quota will directly be updated.\n\nWhen called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).\n",
  operationId: 'deleteScore',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      now: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If `true`, the score deletion will be scheduled to be done ASAP',
            in: 'query',
            name: 'now',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The score has been removed' },
    403: {
      description: 'Not granted to manage this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreCollaboratorsRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/collaborators',
  tags: ['Score'],
  summary: 'List the collaborators',
  description:
    'This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.\n\nCollaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).\n',
  operationId: 'getScoreCollaborators',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of collaborators',
      content: { 'application/json': { schema: z.array(ResourceCollaboratorSchema) } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.readonly', 'scores'] }],
})

export const postScoresScoreCollaboratorsRoute = createRoute({
  method: 'post',
  path: '/scores/{score}/collaborators',
  tags: ['Score'],
  summary: 'Add a new collaborator',
  description:
    'Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.\n- To add an existing Flat user to the resource, specify its unique identifier in the `user` property.\n- To invite an external user to the resource, specify its email in the `userEmail` property.\n- To add a Flat group to the resource, specify its unique identifier in the `group` property.\n- To update an existing collaborator, process the same request with different rights.\n',
  operationId: 'addScoreCollaborator',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResourceCollaboratorCreationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The newly added collaborator metadata',
      content: { 'application/json': { schema: ResourceCollaboratorSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to manage this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreCollaboratorsCollaboratorRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/collaborators/{collaborator}',
  tags: ['Score'],
  summary: 'Get a collaborator',
  description: 'Get the information about a collaborator (User or Group).\n',
  operationId: 'getScoreCollaborator',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collaborator: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**\n',
            in: 'path',
            name: 'collaborator',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collaborator information',
      content: { 'application/json': { schema: ResourceCollaboratorSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or collaborator not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.readonly'] }],
})

export const deleteScoresScoreCollaboratorsCollaboratorRoute = createRoute({
  method: 'delete',
  path: '/scores/{score}/collaborators/{collaborator}',
  tags: ['Score'],
  summary: 'Delete a collaborator',
  description: 'Remove the specified collaborator from the score\n',
  operationId: 'removeScoreCollaborator',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collaborator: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**\n',
            in: 'path',
            name: 'collaborator',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The collaborator has been removed' },
    403: {
      description: 'Not granted to manage this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or collaborator not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreCommentsRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/comments',
  tags: ['Score'],
  summary: 'List comments',
  description:
    'This method lists the different comments added on a music score (documents and inline) sorted by their post dates.',
  operationId: 'getScoreComments',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['document', 'inline'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the comments by type',
            in: 'query',
            name: 'type',
            schema: { enum: ['document', 'inline'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .literal('date')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort',
            in: 'query',
            name: 'sort',
            schema: { enum: ['date'], type: 'string' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'direction',
            schema: { enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The comments of the score',
      content: { 'application/json': { schema: z.array(ScoreCommentSchema) } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.readonly', 'scores.social', 'scores'] }],
})

export const postScoresScoreCommentsRoute = createRoute({
  method: 'post',
  path: '/scores/{score}/comments',
  tags: ['Score'],
  summary: 'Post a new comment',
  description:
    "Post a document or a contextualized comment on a document.\n\nPlease note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.\n",
  operationId: 'postScoreComment',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ScoreCommentCreationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new comment',
      content: { 'application/json': { schema: ScoreCommentSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description:
        'Not granted to access to this score, to post a comment, or your API call triggered our spam filter.',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.social', 'scores'] }],
})

export const putScoresScoreCommentsCommentRoute = createRoute({
  method: 'put',
  path: '/scores/{score}/comments/{comment}',
  tags: ['Score'],
  summary: 'Update an existing comment',
  operationId: 'updateScoreComment',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a sheet music comment\n',
            in: 'path',
            name: 'comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScoreCommentUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The edited comment',
      content: { 'application/json': { schema: ScoreCommentSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score or not the original comment creator',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.social', 'scores'] }],
})

export const deleteScoresScoreCommentsCommentRoute = createRoute({
  method: 'delete',
  path: '/scores/{score}/comments/{comment}',
  tags: ['Score'],
  summary: 'Delete a comment',
  operationId: 'deleteScoreComment',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a sheet music comment\n',
            in: 'path',
            name: 'comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The comment has been deleted' },
    403: {
      description: 'Not granted to access to this score or not the original comment creator',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or comment not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.social', 'scores'] }],
})

export const putScoresScoreCommentsCommentResolvedRoute = createRoute({
  method: 'put',
  path: '/scores/{score}/comments/{comment}/resolved',
  tags: ['Score'],
  summary: 'Mark the comment as resolved',
  operationId: 'markScoreCommentResolved',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a sheet music comment\n',
            in: 'path',
            name: 'comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The comment has been marked as resolved' },
    403: {
      description: 'Not granted to mark this comment as resolved',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or comment not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.social', 'scores'] }],
})

export const deleteScoresScoreCommentsCommentResolvedRoute = createRoute({
  method: 'delete',
  path: '/scores/{score}/comments/{comment}/resolved',
  tags: ['Score'],
  summary: 'Mark the comment as unresolved',
  operationId: 'markScoreCommentUnresolved',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a sheet music comment\n',
            in: 'path',
            name: 'comment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The comment has been unmarked as resolved' },
    403: {
      description: 'Not granted to unmark this comment as resolved',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or comment not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores.social', 'scores'] }],
})

export const postScoresScoreForkRoute = createRoute({
  method: 'post',
  path: '/scores/{score}/fork',
  tags: ['Score', 'Class'],
  summary: 'Fork a score',
  description:
    'This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.\n\nWhen using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.\n',
  operationId: 'forkScore',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScoreForkSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Score details',
      content: { 'application/json': { schema: ScoreDetailsSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreRevisionsRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/revisions',
  tags: ['Score'],
  summary: 'List the revisions',
  description:
    'When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.\n\nDepending the plan of the account, this list can be trunked to the few last revisions.\n',
  operationId: 'getScoreRevisions',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of revisions',
      content: { 'application/json': { schema: z.array(ScoreRevisionSchema) } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const postScoresScoreRevisionsRoute = createRoute({
  method: 'post',
  path: '/scores/{score}/revisions',
  tags: ['Score'],
  summary: 'Create a new revision',
  description: 'Update a score by uploading a new revision for this one.\n',
  operationId: 'createScoreRevision',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ScoreRevisionCreationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new created revision metadata',
      content: { 'application/json': { schema: ScoreRevisionSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to modify this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreRevisionsRevisionRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/revisions/{revision}',
  tags: ['Score'],
  summary: 'Get a score revision',
  description:
    'When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific\nrevision metadata.\n',
  operationId: 'getScoreRevision',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.\n',
            in: 'path',
            name: 'revision',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Revision metadata',
      content: { 'application/json': { schema: ScoreRevisionSchema } },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const getScoresScoreRevisionsRevisionFormatRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/revisions/{revision}/{format}',
  tags: ['Score'],
  summary: 'Get a score revision data',
  description:
    'Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML\n`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.\n',
  operationId: 'getScoreRevisionData',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revision: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.\n',
            in: 'path',
            name: 'revision',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum([
          'json',
          'mxl',
          'xml',
          'mp3',
          'wav',
          'midi',
          'thumbnail.png',
          'synchronizationPoints',
        ])
        .openapi({
          param: {
            description: 'The format of the file you will retrieve',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              enum: [
                'json',
                'mxl',
                'xml',
                'mp3',
                'wav',
                'midi',
                'thumbnail.png',
                'synchronizationPoints',
              ],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parts: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional a set of parts uuid to be exported. This parameter must be composed of parts uuids\nseparated by commas. For example "59df645f-bb1c-f1b4-b573-d2afc4491f94,34ef645f-1aef-f3bc-1564-34cca4492b87".\n',
            in: 'query',
            name: 'parts',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onlyCached: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only return files already generated and cached in Flat's production\ncache. If the file is not availabe, a 404 will be returned\n",
            in: 'query',
            name: 'onlyCached',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      url: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns a json with the `url` in it instead of redirecting\n',
            in: 'query',
            name: 'url',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Revision data',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/vnd.recordare.musicxml': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/vnd.recordare.musicxml+xml': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'audio/midi': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'audio/mp3': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'audio/wav': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    402: {
      description: 'Account overquota',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or associated file not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const getScoresScoreSubmissionsRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/submissions',
  tags: ['Score', 'Class'],
  summary: 'List submissions related to the score',
  description:
    'This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.\n',
  operationId: 'getScoreSubmissions',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of submissions',
      content: { 'application/json': { schema: z.array(AssignmentSubmissionSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const getScoresScoreTracksRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/tracks',
  tags: ['Score'],
  summary: 'List the audio or video tracks linked to a score',
  operationId: 'listScoreTracks',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      assignment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An assignment id with which all the tracks returned will be related to\n',
            in: 'query',
            name: 'assignment',
            schema: { type: 'string' },
            required: false,
          },
        }),
      listAutoTrack: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true, and if available, return last automatically synchronized Flat's mp3 export as an additional track\n",
            in: 'query',
            name: 'listAutoTrack',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of tracks',
      content: { 'application/json': { schema: z.array(ScoreTrackSchema) } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const postScoresScoreTracksRoute = createRoute({
  method: 'post',
  path: '/scores/{score}/tracks',
  tags: ['Score'],
  summary: 'Add a new video or audio track to the score',
  description:
    'Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.\nThis API method support medias hosted on SoundCloud, YouTube and Vimeo.\n',
  operationId: 'addScoreTrack',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScoreTrackCreationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Created track',
      content: { 'application/json': { schema: ScoreTrackSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getScoresScoreTracksTrackRoute = createRoute({
  method: 'get',
  path: '/scores/{score}/tracks/{track}',
  tags: ['Score'],
  summary: 'Retrieve the details of an audio or video track linked to a score',
  operationId: 'getScoreTrack',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      track: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a score audio track\n',
            in: 'path',
            name: 'track',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sharingKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n',
            in: 'query',
            name: 'sharingKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Track details',
      content: { 'application/json': { schema: ScoreTrackSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or Track not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})

export const putScoresScoreTracksTrackRoute = createRoute({
  method: 'put',
  path: '/scores/{score}/tracks/{track}',
  tags: ['Score'],
  summary: 'Update an audio or video track linked to a score',
  operationId: 'updateScoreTrack',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      track: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a score audio track\n',
            in: 'path',
            name: 'track',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScoreTrackUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated track',
      content: { 'application/json': { schema: ScoreTrackSchema } },
    },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or Track not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const deleteScoresScoreTracksTrackRoute = createRoute({
  method: 'delete',
  path: '/scores/{score}/tracks/{track}',
  tags: ['Score'],
  summary: 'Remove an audio or video track linked to the score',
  operationId: 'deleteScoreTrack',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
      track: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of a score audio track\n',
            in: 'path',
            name: 'track',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Track removed' },
    403: {
      description: 'Not granted to access to this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score or Track not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const postScoresScoreUntrashRoute = createRoute({
  method: 'post',
  path: '/scores/{score}/untrash',
  tags: ['Score'],
  summary: 'Untrash a score',
  description:
    'This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.\n',
  operationId: 'untrashScore',
  request: {
    params: z.object({
      score: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n',
            in: 'path',
            name: 'score',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The score has been untrashed' },
    403: {
      description: 'Not granted to manage this score',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    404: {
      description: 'Score not found',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores'] }],
})

export const getUsersUserRoute = createRoute({
  method: 'get',
  path: '/users/{user}',
  tags: ['User'],
  summary: 'Get a public user profile',
  description: 'Get a public profile of a Flat User.\n',
  operationId: 'getUser',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description:
              'This route parameter is the unique identifier of the user. You can specify an email instead of an unique identifier. If you are executing this request authenticated, you can use `me` as a value instead of the current User unique identifier to work on the current authenticated user.\n',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The user public details',
      content: { 'application/json': { schema: UserPublicSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['account.public_profile', 'account.education_profile'] }],
})

export const getUsersUserLikesRoute = createRoute({
  method: 'get',
  path: '/users/{user}/likes',
  tags: ['User', 'Score'],
  summary: 'List liked scores',
  operationId: 'gerUserLikes',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.\n',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      ids: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only the identifiers of the scores',
            in: 'query',
            name: 'ids',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of liked scores',
      content: { 'application/json': { schema: z.array(ScoreDetailsSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['account.public_profile'] }],
})

export const getUsersUserScoresRoute = createRoute({
  method: 'get',
  path: '/users/{user}/scores',
  tags: ['User', 'Score'],
  summary: "List user's scores",
  description:
    'Get the list of public scores owned by a User.\n\n**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.\nThis method will no longer list private and shared scores, but only public scores of a Flat account.\nIf you want to access to private scores, please use the [Collections API](#tag/Collection) instead.\n',
  operationId: 'getUserScores',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description:
              'Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.\n',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the score forked from the score id `parent`',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The user scores',
      content: { 'application/json': { schema: z.array(ScoreDetailsSchema) } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: FlatErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['scores', 'scores.readonly'] }],
})
