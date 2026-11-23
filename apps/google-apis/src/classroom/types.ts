type DriveFile = {
  alternateLink?: string | undefined
  id?: string | undefined
  thumbnailUrl?: string | undefined
  title?: string | undefined
}
type Form = {
  formUrl?: string | undefined
  responseUrl?: string | undefined
  thumbnailUrl?: string | undefined
  title?: string | undefined
}
type Link = {
  thumbnailUrl?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type YouTubeVideo = {
  alternateLink?: string | undefined
  id?: string | undefined
  thumbnailUrl?: string | undefined
  title?: string | undefined
}
type CourseMaterial = {
  driveFile?: DriveFile | undefined
  form?: Form | undefined
  link?: Link | undefined
  youTubeVideo?: YouTubeVideo | undefined
}
type CourseMaterialSet = { materials?: CourseMaterial[] | undefined; title?: string | undefined }
type GradeCategory = {
  defaultGradeDenominator?: number | undefined
  id?: string | undefined
  name?: string | undefined
  weight?: number | undefined
}
type GradebookSettings = {
  calculationType?:
    | 'CALCULATION_TYPE_UNSPECIFIED'
    | 'TOTAL_POINTS'
    | 'WEIGHTED_CATEGORIES'
    | undefined
  displaySetting?:
    | 'DISPLAY_SETTING_UNSPECIFIED'
    | 'SHOW_OVERALL_GRADE'
    | 'HIDE_OVERALL_GRADE'
    | 'SHOW_TEACHERS_ONLY'
    | undefined
  gradeCategories?: GradeCategory[] | undefined
}
type DriveFolder = {
  alternateLink?: string | undefined
  id?: string | undefined
  title?: string | undefined
}
type Course = {
  alternateLink?: string | undefined
  calendarId?: string | undefined
  courseGroupEmail?: string | undefined
  courseMaterialSets?: CourseMaterialSet[] | undefined
  courseState?:
    | 'COURSE_STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'ARCHIVED'
    | 'PROVISIONED'
    | 'DECLINED'
    | 'SUSPENDED'
    | undefined
  creationTime?: string | undefined
  description?: string | undefined
  descriptionHeading?: string | undefined
  enrollmentCode?: string | undefined
  gradebookSettings?: GradebookSettings | undefined
  guardiansEnabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  ownerId?: string | undefined
  room?: string | undefined
  section?: string | undefined
  teacherFolder?: DriveFolder | undefined
  teacherGroupEmail?: string | undefined
  updateTime?: string | undefined
}
type ListCoursesResponse = { courses?: Course[] | undefined; nextPageToken?: string | undefined }
type CourseAlias = { alias?: string | undefined }
type ListCourseAliasesResponse = {
  aliases?: CourseAlias[] | undefined
  nextPageToken?: string | undefined
}
type Empty = { [x: string]: unknown }
type IndividualStudentsOptions = { studentIds?: string[] | undefined }
type SharedDriveFile = {
  driveFile?: DriveFile | undefined
  shareMode?: 'UNKNOWN_SHARE_MODE' | 'VIEW' | 'EDIT' | 'STUDENT_COPY' | undefined
}
type Material = {
  driveFile?: SharedDriveFile | undefined
  form?: Form | undefined
  link?: Link | undefined
  youtubeVideo?: YouTubeVideo | undefined
}
type Announcement = {
  alternateLink?: string | undefined
  assigneeMode?: 'ASSIGNEE_MODE_UNSPECIFIED' | 'ALL_STUDENTS' | 'INDIVIDUAL_STUDENTS' | undefined
  courseId?: string | undefined
  creationTime?: string | undefined
  creatorUserId?: string | undefined
  id?: string | undefined
  individualStudentsOptions?: IndividualStudentsOptions | undefined
  materials?: Material[] | undefined
  scheduledTime?: string | undefined
  state?: 'ANNOUNCEMENT_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED' | undefined
  text?: string | undefined
  updateTime?: string | undefined
}
type ListAnnouncementsResponse = {
  announcements?: Announcement[] | undefined
  nextPageToken?: string | undefined
}
type ModifyIndividualStudentsOptions = {
  addStudentIds?: string[] | undefined
  removeStudentIds?: string[] | undefined
}
type ModifyAnnouncementAssigneesRequest = {
  assigneeMode?: 'ASSIGNEE_MODE_UNSPECIFIED' | 'ALL_STUDENTS' | 'INDIVIDUAL_STUDENTS' | undefined
  modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions | undefined
}
type Assignment = { studentWorkFolder?: DriveFolder | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type MultipleChoiceQuestion = { choices?: string[] | undefined }
type CourseWork = {
  alternateLink?: string | undefined
  assigneeMode?: 'ASSIGNEE_MODE_UNSPECIFIED' | 'ALL_STUDENTS' | 'INDIVIDUAL_STUDENTS' | undefined
  assignment?: Assignment | undefined
  associatedWithDeveloper?: boolean | undefined
  courseId?: string | undefined
  creationTime?: string | undefined
  creatorUserId?: string | undefined
  description?: string | undefined
  dueDate?: Date | undefined
  dueTime?: TimeOfDay | undefined
  gradeCategory?: GradeCategory | undefined
  id?: string | undefined
  individualStudentsOptions?: IndividualStudentsOptions | undefined
  materials?: Material[] | undefined
  maxPoints?: number | undefined
  multipleChoiceQuestion?: MultipleChoiceQuestion | undefined
  scheduledTime?: string | undefined
  state?: 'COURSE_WORK_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED' | undefined
  submissionModificationMode?:
    | 'SUBMISSION_MODIFICATION_MODE_UNSPECIFIED'
    | 'MODIFIABLE_UNTIL_TURNED_IN'
    | 'MODIFIABLE'
    | undefined
  title?: string | undefined
  topicId?: string | undefined
  updateTime?: string | undefined
  workType?:
    | 'COURSE_WORK_TYPE_UNSPECIFIED'
    | 'ASSIGNMENT'
    | 'SHORT_ANSWER_QUESTION'
    | 'MULTIPLE_CHOICE_QUESTION'
    | undefined
}
type ListCourseWorkResponse = {
  courseWork?: CourseWork[] | undefined
  nextPageToken?: string | undefined
}
type Attachment = {
  driveFile?: DriveFile | undefined
  form?: Form | undefined
  link?: Link | undefined
  youTubeVideo?: YouTubeVideo | undefined
}
type AssignmentSubmission = { attachments?: Attachment[] | undefined }
type MultipleChoiceSubmission = { answer?: string | undefined }
type ShortAnswerSubmission = { answer?: string | undefined }
type GradeHistory = {
  actorUserId?: string | undefined
  gradeChangeType?:
    | 'UNKNOWN_GRADE_CHANGE_TYPE'
    | 'DRAFT_GRADE_POINTS_EARNED_CHANGE'
    | 'ASSIGNED_GRADE_POINTS_EARNED_CHANGE'
    | 'MAX_POINTS_CHANGE'
    | undefined
  gradeTimestamp?: string | undefined
  maxPoints?: number | undefined
  pointsEarned?: number | undefined
}
type StateHistory = {
  actorUserId?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATED'
    | 'TURNED_IN'
    | 'RETURNED'
    | 'RECLAIMED_BY_STUDENT'
    | 'STUDENT_EDITED_AFTER_TURN_IN'
    | undefined
  stateTimestamp?: string | undefined
}
type SubmissionHistory = {
  gradeHistory?: GradeHistory | undefined
  stateHistory?: StateHistory | undefined
}
type StudentSubmission = {
  alternateLink?: string | undefined
  assignedGrade?: number | undefined
  assignmentSubmission?: AssignmentSubmission | undefined
  associatedWithDeveloper?: boolean | undefined
  courseId?: string | undefined
  courseWorkId?: string | undefined
  courseWorkType?:
    | 'COURSE_WORK_TYPE_UNSPECIFIED'
    | 'ASSIGNMENT'
    | 'SHORT_ANSWER_QUESTION'
    | 'MULTIPLE_CHOICE_QUESTION'
    | undefined
  creationTime?: string | undefined
  draftGrade?: number | undefined
  id?: string | undefined
  late?: boolean | undefined
  multipleChoiceSubmission?: MultipleChoiceSubmission | undefined
  shortAnswerSubmission?: ShortAnswerSubmission | undefined
  state?:
    | 'SUBMISSION_STATE_UNSPECIFIED'
    | 'NEW'
    | 'CREATED'
    | 'TURNED_IN'
    | 'RETURNED'
    | 'RECLAIMED_BY_STUDENT'
    | undefined
  submissionHistory?: SubmissionHistory[] | undefined
  updateTime?: string | undefined
  userId?: string | undefined
}
type ListStudentSubmissionsResponse = {
  nextPageToken?: string | undefined
  studentSubmissions?: StudentSubmission[] | undefined
}
type ModifyAttachmentsRequest = { addAttachments?: Attachment[] | undefined }
type ReclaimStudentSubmissionRequest = { [x: string]: unknown }
type ReturnStudentSubmissionRequest = { [x: string]: unknown }
type TurnInStudentSubmissionRequest = { [x: string]: unknown }
type ModifyCourseWorkAssigneesRequest = {
  assigneeMode?: 'ASSIGNEE_MODE_UNSPECIFIED' | 'ALL_STUDENTS' | 'INDIVIDUAL_STUDENTS' | undefined
  modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions | undefined
}
type CourseWorkMaterial = {
  alternateLink?: string | undefined
  assigneeMode?: 'ASSIGNEE_MODE_UNSPECIFIED' | 'ALL_STUDENTS' | 'INDIVIDUAL_STUDENTS' | undefined
  courseId?: string | undefined
  creationTime?: string | undefined
  creatorUserId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  individualStudentsOptions?: IndividualStudentsOptions | undefined
  materials?: Material[] | undefined
  scheduledTime?: string | undefined
  state?: 'COURSEWORK_MATERIAL_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED' | undefined
  title?: string | undefined
  topicId?: string | undefined
  updateTime?: string | undefined
}
type ListCourseWorkMaterialResponse = {
  courseWorkMaterial?: CourseWorkMaterial[] | undefined
  nextPageToken?: string | undefined
}
type Name = {
  familyName?: string | undefined
  fullName?: string | undefined
  givenName?: string | undefined
}
type GlobalPermission = { permission?: 'PERMISSION_UNSPECIFIED' | 'CREATE_COURSE' | undefined }
type UserProfile = {
  emailAddress?: string | undefined
  id?: string | undefined
  name?: Name | undefined
  permissions?: GlobalPermission[] | undefined
  photoUrl?: string | undefined
  verifiedTeacher?: boolean | undefined
}
type Student = {
  courseId?: string | undefined
  profile?: UserProfile | undefined
  studentWorkFolder?: DriveFolder | undefined
  userId?: string | undefined
}
type ListStudentsResponse = { nextPageToken?: string | undefined; students?: Student[] | undefined }
type Teacher = {
  courseId?: string | undefined
  profile?: UserProfile | undefined
  userId?: string | undefined
}
type ListTeachersResponse = { nextPageToken?: string | undefined; teachers?: Teacher[] | undefined }
type Topic = {
  courseId?: string | undefined
  name?: string | undefined
  topicId?: string | undefined
  updateTime?: string | undefined
}
type ListTopicResponse = { nextPageToken?: string | undefined; topic?: Topic[] | undefined }
type Invitation = {
  courseId?: string | undefined
  id?: string | undefined
  role?: 'COURSE_ROLE_UNSPECIFIED' | 'STUDENT' | 'TEACHER' | 'OWNER' | undefined
  userId?: string | undefined
}
type ListInvitationsResponse = {
  invitations?: Invitation[] | undefined
  nextPageToken?: string | undefined
}
type CloudPubsubTopic = { topicName?: string | undefined }
type CourseRosterChangesInfo = { courseId?: string | undefined }
type CourseWorkChangesInfo = { courseId?: string | undefined }
type Feed = {
  courseRosterChangesInfo?: CourseRosterChangesInfo | undefined
  courseWorkChangesInfo?: CourseWorkChangesInfo | undefined
  feedType?:
    | 'FEED_TYPE_UNSPECIFIED'
    | 'DOMAIN_ROSTER_CHANGES'
    | 'COURSE_ROSTER_CHANGES'
    | 'COURSE_WORK_CHANGES'
    | undefined
}
type Registration = {
  cloudPubsubTopic?: CloudPubsubTopic | undefined
  expiryTime?: string | undefined
  feed?: Feed | undefined
  registrationId?: string | undefined
}
type GuardianInvitation = {
  creationTime?: string | undefined
  invitationId?: string | undefined
  invitedEmailAddress?: string | undefined
  state?: 'GUARDIAN_INVITATION_STATE_UNSPECIFIED' | 'PENDING' | 'COMPLETE' | undefined
  studentId?: string | undefined
}
type ListGuardianInvitationsResponse = {
  guardianInvitations?: GuardianInvitation[] | undefined
  nextPageToken?: string | undefined
}
type Guardian = {
  guardianId?: string | undefined
  guardianProfile?: UserProfile | undefined
  invitedEmailAddress?: string | undefined
  studentId?: string | undefined
}
type ListGuardiansResponse = {
  guardians?: Guardian[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/courses': {
      $get: {
        input: {
          query: {
            courseStates?:
              | (
                  | 'COURSE_STATE_UNSPECIFIED'
                  | 'ACTIVE'
                  | 'ARCHIVED'
                  | 'PROVISIONED'
                  | 'DECLINED'
                  | 'SUSPENDED'
                )[]
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            studentId?: string | undefined
            teacherId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCoursesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Course }
        output: Course
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/aliases': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCourseAliasesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CourseAlias }
        output: CourseAlias
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/aliases/:alias': {
      $delete: {
        input: { param: { courseId: string; alias: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/announcements': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            announcementStates?:
              | ('ANNOUNCEMENT_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED')[]
              | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListAnnouncementsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Announcement }
        output: Announcement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/announcements/:id': {
      $delete: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Announcement
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Announcement }
        output: Announcement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/announcements/:id:modifyAssignees': {
      $post: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyAnnouncementAssigneesRequest }
        output: Announcement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            courseWorkStates?:
              | ('COURSE_WORK_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED')[]
              | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCourseWorkResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CourseWork }
        output: CourseWork
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions': {
      $get: {
        input: { param: { courseId: string; courseWorkId: string } } & {
          query: {
            late?: 'LATE_VALUES_UNSPECIFIED' | 'LATE_ONLY' | 'NOT_LATE_ONLY' | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            states?:
              | (
                  | 'SUBMISSION_STATE_UNSPECIFIED'
                  | 'NEW'
                  | 'CREATED'
                  | 'TURNED_IN'
                  | 'RETURNED'
                  | 'RECLAIMED_BY_STUDENT'
                )[]
              | undefined
            userId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListStudentSubmissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id': {
      $get: {
        input: { param: { courseId: string; courseWorkId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: StudentSubmission
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { courseId: string; courseWorkId: string; id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: StudentSubmission }
        output: StudentSubmission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:modifyAttachments': {
      $post: {
        input: { param: { courseId: string; courseWorkId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyAttachmentsRequest }
        output: StudentSubmission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:reclaim': {
      $post: {
        input: { param: { courseId: string; courseWorkId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ReclaimStudentSubmissionRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:return': {
      $post: {
        input: { param: { courseId: string; courseWorkId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ReturnStudentSubmissionRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:courseWorkId/studentSubmissions/:id:turnIn': {
      $post: {
        input: { param: { courseId: string; courseWorkId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TurnInStudentSubmissionRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:id': {
      $delete: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CourseWork
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CourseWork }
        output: CourseWork
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWork/:id:modifyAssignees': {
      $post: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ModifyCourseWorkAssigneesRequest }
        output: CourseWork
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWorkMaterials': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            courseWorkMaterialStates?:
              | ('COURSEWORK_MATERIAL_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED')[]
              | undefined
            materialDriveId?: string | undefined
            materialLink?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCourseWorkMaterialResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CourseWorkMaterial }
        output: CourseWorkMaterial
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/courseWorkMaterials/:id': {
      $delete: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CourseWorkMaterial
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CourseWorkMaterial }
        output: CourseWorkMaterial
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/students': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListStudentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            enrollmentCode?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Student }
        output: Student
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/students/:userId': {
      $delete: {
        input: { param: { courseId: string; userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { courseId: string; userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Student
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/teachers': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTeachersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Teacher }
        output: Teacher
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/teachers/:userId': {
      $delete: {
        input: { param: { courseId: string; userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { courseId: string; userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Teacher
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/topics': {
      $get: {
        input: { param: { courseId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTopicResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { courseId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Topic }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:courseId/topics/:id': {
      $delete: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { courseId: string; id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Topic }
        output: Topic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/courses/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Course
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Course }
        output: Course
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Course }
        output: Course
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/invitations': {
      $get: {
        input: {
          query: {
            courseId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            userId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Invitation }
        output: Invitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/invitations/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Invitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/invitations/:id:accept': {
      $post: {
        input: { param: { id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registrations': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Registration }
        output: Registration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/registrations/:registrationId': {
      $delete: {
        input: { param: { registrationId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/userProfiles/:studentId/guardianInvitations': {
      $get: {
        input: { param: { studentId: string } } & {
          query: {
            invitedEmailAddress?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            states?:
              | ('GUARDIAN_INVITATION_STATE_UNSPECIFIED' | 'PENDING' | 'COMPLETE')[]
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListGuardianInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { studentId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GuardianInvitation }
        output: GuardianInvitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/userProfiles/:studentId/guardianInvitations/:invitationId': {
      $get: {
        input: { param: { studentId: string; invitationId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GuardianInvitation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { studentId: string; invitationId: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GuardianInvitation }
        output: GuardianInvitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/userProfiles/:studentId/guardians': {
      $get: {
        input: { param: { studentId: string } } & {
          query: {
            invitedEmailAddress?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListGuardiansResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/userProfiles/:studentId/guardians/:guardianId': {
      $delete: {
        input: { param: { studentId: string; guardianId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { studentId: string; guardianId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Guardian
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/userProfiles/:userId': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: UserProfile
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
