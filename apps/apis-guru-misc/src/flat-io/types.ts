type ClassState = 'active' | 'inactive' | 'archived'
type GroupType = 'generic' | 'classTeachers' | 'classStudents'
type GroupDetails = {
  creationDate?: string | undefined
  id?: string | undefined
  name?: string | undefined
  organization?: string | undefined
  readOnly?: boolean | undefined
  type?: GroupType | undefined
  usersCount?: number | undefined
}
type ClassDetails = {
  assignmentsCount?: number | undefined
  canvas?: { domain?: string | undefined; id?: string | undefined } | undefined
  clever?:
    | {
        creationDate?: string | undefined
        id?: string | undefined
        modificationDate?: string | undefined
        subject?:
          | 'english/language arts'
          | 'math'
          | 'science'
          | 'social studies'
          | 'language'
          | 'homeroom/advisory'
          | 'interventions/online learning'
          | 'technology and engineering'
          | 'PE and health'
          | 'arts and music'
          | 'other'
          | undefined
        termEndDate?: string | undefined
        termName?: string | undefined
        termStartDate?: string | undefined
      }
    | undefined
  creationDate?: string | undefined
  description?: string | undefined
  enrollmentCode?: string | undefined
  googleClassroom?: { alternateLink?: string | undefined; id?: string | undefined } | undefined
  googleDrive?:
    | { teacherFolderAlternateLink?: string | undefined; teacherFolderId?: string | undefined }
    | undefined
  id?: string | undefined
  issues?:
    | {
        sync?:
          | {
              email?: string | undefined
              id?: string | undefined
              reason?: 'otherOrgnanization' | 'personalSubscription' | undefined
            }[]
          | undefined
      }
    | undefined
  lti?:
    | {
        contextId?: string | undefined
        contextLabel?: string | undefined
        contextTitle?: string | undefined
      }
    | undefined
  mfc?: { alternateLink?: string | undefined; id?: string | undefined } | undefined
  microsoftGraph?: { id?: string | undefined } | undefined
  name?: string | undefined
  organization?: string | undefined
  owner?: string | undefined
  section?: string | undefined
  state?: ClassState | undefined
  studentsGroup?: GroupDetails | undefined
  teachersGroup?: GroupDetails | undefined
  theme?: string | undefined
}
type FlatErrorResponse = {
  code?: string | undefined
  id?: string | undefined
  message?: string | undefined
  param?: string | undefined
}
type ClassCreation = { name: string; section?: string | undefined }
type ClassUpdate = { name?: string | undefined; section?: string | undefined }
type MediaScoreSharingMode = 'read' | 'write' | 'copy' | 'performance'
type MediaAttachment = {
  authorName?: string | undefined
  authorUrl?: string | undefined
  description?: string | undefined
  googleDriveFileId?: string | undefined
  html?: string | undefined
  htmlHeight?: string | undefined
  htmlWidth?: string | undefined
  iconUrl?: string | undefined
  lockScoreTemplate?: boolean | undefined
  mimeType?: string | undefined
  revision?: string | undefined
  score?: string | undefined
  sharingMode?: MediaScoreSharingMode | undefined
  thumbnailHeight?: number | undefined
  thumbnailUrl?: string | undefined
  thumbnailWidth?: number | undefined
  title?: string | undefined
  track?: string | undefined
  type?:
    | 'rich'
    | 'photo'
    | 'video'
    | 'link'
    | 'flat'
    | 'googleDrive'
    | 'worksheet'
    | 'performance'
    | undefined
  url?: string | undefined
  worksheet?: string | undefined
}
type GoogleClassroomCoursework = {
  alternateLink?: string | undefined
  id?: string | undefined
  state?: string | undefined
  topicId?: (string | null) | undefined
}
type MicrosoftGraphAssignment = {
  alternateLink?: string | undefined
  categories?: string[] | undefined
  id?: string | undefined
  state?: string | undefined
}
type GoogleClassroomSubmission = {
  alternateLink?: string | undefined
  id?: string | undefined
  state?: string | undefined
}
type MicrosoftGraphSubmission = {
  alternateLink?: string | undefined
  id?: string | undefined
  state?: string | undefined
}
type AssignmentSubmissionState = 'created' | 'turnedIn' | 'returned'
type AssignmentSubmission = {
  assignment?: string | undefined
  attachments?: MediaAttachment[] | undefined
  classroom?: string | undefined
  creationDate?: string | undefined
  creator?: string | undefined
  draftGrade?: (number | null) | undefined
  googleClassroom?: GoogleClassroomSubmission | undefined
  grade?: (number | null) | undefined
  id?: string | undefined
  maxPoints?: number | undefined
  microsoftGraph?: MicrosoftGraphSubmission | undefined
  returnCreator?: string | undefined
  returnDate?: string | undefined
  state?: AssignmentSubmissionState | undefined
  submissionDate?: string | undefined
}
type AssignmentType =
  | 'none'
  | 'newScore'
  | 'scoreTemplate'
  | 'sharedWriting'
  | 'worksheet'
  | 'performance'
type Assignment = {
  attachments?: MediaAttachment[] | undefined
  canvas?: { alternateLink?: string | undefined; id?: string | undefined } | undefined
  classroom?: string | undefined
  cover?: string | undefined
  coverFile?: string | undefined
  creationDate?: string | undefined
  creator?: string | undefined
  description?: string | undefined
  dueDate?: string | undefined
  googleClassroom?: GoogleClassroomCoursework | undefined
  lti?: { id?: string | undefined } | undefined
  maxPoints?: number | undefined
  mfc?: { alternateLink?: string | undefined; id?: string | undefined } | undefined
  microsoftGraph?: MicrosoftGraphAssignment | undefined
  scheduledDate?: string | undefined
  state?: 'draft' | 'active' | 'archived' | undefined
  submissions?: AssignmentSubmission[] | undefined
  title?: string | undefined
  type?: AssignmentType | undefined
}
type ClassAttachmentCreation = {
  googleDriveFileId?: string | undefined
  lockScoreTemplate?: boolean | undefined
  score?: string | undefined
  sharingMode?: MediaScoreSharingMode | undefined
  type?: 'flat' | 'link' | 'googleDrive' | 'worksheet' | undefined
  url?: string | undefined
  worksheet?: string | undefined
}
type AssignmentCreation = {
  assignedStudents?: string[] | undefined
  assigneeMode?: 'everyone' | 'selected' | undefined
  attachments?: ClassAttachmentCreation[] | undefined
  cover?: (string | null) | undefined
  coverFile?: (string | null) | undefined
  description?: string | undefined
  dueDate?: (string | null) | undefined
  googleClassroom?: { topicId?: (string | null) | undefined } | undefined
  maxPoints?: (number | null) | undefined
  microsoftGraph?: { categories?: (string[] | null) | undefined } | undefined
  nbPlaybackAuthorized?: (number | null) | undefined
  scheduledDate?: (string | null) | undefined
  state?: 'draft' | 'active' | undefined
  title?: string | undefined
  toolset?: (string | null) | undefined
  type?: AssignmentType | undefined
}
type AssignmentCopy = {
  assignment?: string | undefined
  classroom?: string | undefined
  scheduledDate?: string | undefined
}
type AssignmentSubmissionUpdate = {
  attachments?: ClassAttachmentCreation[] | undefined
  comments?: { total?: number | undefined; unread?: number | undefined } | undefined
  draftGrade?: (number | null) | undefined
  grade?: (number | null) | undefined
  return?: boolean | undefined
  submit?: boolean | undefined
}
type AssignmentSubmissionComment = {
  comment?: string | undefined
  date?: string | undefined
  id?: string | undefined
  modificationDate?: string | undefined
  submission?: string | undefined
  unread?: boolean | undefined
  user?: string | undefined
}
type AssignmentSubmissionCommentCreation = { comment: string }
type AssignmentSubmissionHistory = {
  attachment?: { revision?: string | undefined; score?: string | undefined } | undefined
  date?: string | undefined
  draftGrade?: number | undefined
  grade?: number | undefined
  maxPoints?: number | undefined
  state?: AssignmentSubmissionState | undefined
  users?: string[] | undefined
}
type Group = {
  creationDate?: string | undefined
  id?: string | undefined
  name?: string | undefined
  organization?: string | undefined
  readOnly?: boolean | undefined
  type?: 'generic' | 'classTeachers' | 'classStudents' | undefined
  usersCount?: number | undefined
}
type ClassRoles = 'teacher' | 'student'
type OrganizationRoles = 'admin' | 'billing' | 'teacher' | 'user'
type UserPublic = {
  firstname?: string | undefined
  id?: string | undefined
  isFlatTeam?: boolean | undefined
  isPowerUser?: boolean | undefined
  lastname?: string | undefined
  name?: string | undefined
  picture?: (string | null) | undefined
  printableName?: string | undefined
  type?: 'user' | 'guest' | undefined
  username?: string | undefined
  classRole?: ClassRoles | undefined
  htmlUrl?: string | undefined
  organization?: string | undefined
  organizationRole?: OrganizationRoles | undefined
  bio?: string | undefined
  coverPicture?: string | undefined
  followersCount?: number | undefined
  followingCount?: number | undefined
  instruments?: string[] | undefined
  likedScoresCount?: number | undefined
  ownedPublicScoresCount?: number | undefined
  profileTheme?: string | undefined
  registrationDate?: string | undefined
}
type ResourceCollaborator = {
  aclAdmin?: boolean | undefined
  aclRead?: boolean | undefined
  aclWrite?: boolean | undefined
  isCollaborator?: boolean | undefined
  collection?: string | undefined
  group?: Group | undefined
  id?: string | undefined
  invited?: boolean | undefined
  score?: string | undefined
  user?: UserPublic | undefined
  userEmail?: string | undefined
}
type CollectionPrivacy = 'private'
type ResourceRights = {
  aclAdmin?: boolean | undefined
  aclRead?: boolean | undefined
  aclWrite?: boolean | undefined
  isCollaborator?: boolean | undefined
}
type CollectionType = 'root' | 'regular' | 'sharedWithMe' | 'sharedWithGroup' | 'trash'
type UserPublicSummary = {
  firstname?: string | undefined
  id?: string | undefined
  isFlatTeam?: boolean | undefined
  isPowerUser?: boolean | undefined
  lastname?: string | undefined
  name?: string | undefined
  picture?: (string | null) | undefined
  printableName?: string | undefined
  type?: 'user' | 'guest' | undefined
  username?: string | undefined
  classRole?: ClassRoles | undefined
  htmlUrl?: string | undefined
  organization?: string | undefined
  organizationRole?: OrganizationRoles | undefined
}
type Collection = {
  app?: string | undefined
  capabilities?:
    | {
        canAddScores?: boolean | undefined
        canDelete?: boolean | undefined
        canDeleteScores?: boolean | undefined
        canEdit?: boolean | undefined
        canShare?: boolean | undefined
      }
    | undefined
  collaborators?: ResourceCollaborator[] | undefined
  collections?: string[] | undefined
  creationDate?: string | undefined
  htmlUrl?: string | undefined
  id?: string | undefined
  privacy?: CollectionPrivacy | undefined
  rights?: ResourceRights | undefined
  sharingKey?: string | undefined
  title?: string | undefined
  type?: CollectionType | undefined
  user?: UserPublicSummary | undefined
}
type CollectionCreation = { privacy: CollectionPrivacy; title: string }
type CollectionModification = {
  privacy?: CollectionPrivacy | undefined
  title?: string | undefined
}
type ScorePrivacy = 'public' | 'private' | 'organizationPublic' | 'privateLink'
type ScoreCommentsCounts = {
  monthly?: number | undefined
  total?: number | undefined
  unique?: number | undefined
  weekly?: number | undefined
}
type ScoreCreationType = 'original' | 'arrangement' | 'other'
type ScoreLicense =
  | 'copyright'
  | 'cc0'
  | 'cc-by'
  | 'cc-by-sa'
  | 'cc-by-nd'
  | 'cc-by-nc'
  | 'cc-by-nc-sa'
  | 'cc-by-nc-nd'
type ScoreLikesCounts = {
  monthly?: number | undefined
  total?: number | undefined
  weekly?: number | undefined
}
type ScorePlaysCounts = {
  monthly?: number | undefined
  total?: number | undefined
  weekly?: number | undefined
}
type ScoreViewsCounts = {
  monthly?: number | undefined
  total?: number | undefined
  weekly?: number | undefined
}
type ScoreDetails = {
  htmlUrl?: string | undefined
  id?: string | undefined
  privacy?: ScorePrivacy | undefined
  sharingKey?: string | undefined
  title?: string | undefined
  user?: UserPublicSummary | undefined
  arranger?: string | undefined
  collaborators?: ResourceCollaborator[] | undefined
  collections?: string[] | undefined
  comments?: ScoreCommentsCounts | undefined
  composer?: string | undefined
  creationDate?: string | undefined
  creationType?: ScoreCreationType | undefined
  description?: string | undefined
  durationTime?: number | undefined
  googleDriveFileId?: string | undefined
  instruments?: string[] | undefined
  license?: ScoreLicense | undefined
  licenseText?: string | undefined
  likes?: ScoreLikesCounts | undefined
  lyricist?: string | undefined
  mainTempoQpm?: number | undefined
  modificationDate?: string | undefined
  numberMeasures?: number | undefined
  organization?: string | undefined
  parentScore?: string | undefined
  plays?: ScorePlaysCounts | undefined
  publicationDate?: string | undefined
  rights?: ResourceRights | undefined
  samples?: string[] | undefined
  subtitle?: string | undefined
  tags?: string[] | undefined
  views?: ScoreViewsCounts | undefined
}
type FlatLocales =
  | 'en'
  | 'en-GB'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'ro'
  | 'ru'
  | 'sv'
  | 'tr'
  | 'zh-Hans'
type UserDetails = {
  firstname?: string | undefined
  id?: string | undefined
  isFlatTeam?: boolean | undefined
  isPowerUser?: boolean | undefined
  lastname?: string | undefined
  name?: string | undefined
  picture?: (string | null) | undefined
  printableName?: string | undefined
  type?: 'user' | 'guest' | undefined
  username?: string | undefined
  classRole?: ClassRoles | undefined
  htmlUrl?: string | undefined
  organization?: string | undefined
  organizationRole?: OrganizationRoles | undefined
  bio?: string | undefined
  coverPicture?: string | undefined
  followersCount?: number | undefined
  followingCount?: number | undefined
  instruments?: string[] | undefined
  likedScoresCount?: number | undefined
  ownedPublicScoresCount?: number | undefined
  profileTheme?: string | undefined
  registrationDate?: string | undefined
  coverPictureFile?: (string | null) | undefined
  locale?: FlatLocales | undefined
  pictureFile?: (string | null) | undefined
  privateProfile?: boolean | undefined
}
type OrganizationInvitation = {
  customCode?: string | undefined
  email?: string | undefined
  id?: string | undefined
  invitedBy?: string | undefined
  organization?: string | undefined
  organizationRole?: OrganizationRoles | undefined
  usedBy?: string | undefined
}
type OrganizationInvitationCreation = {
  email?: string | undefined
  organizationRole?: OrganizationRoles | undefined
}
type LmsName =
  | 'canvas'
  | 'moodle'
  | 'schoology'
  | 'blackboard'
  | 'desire2learn'
  | 'sakai'
  | 'schoolbox'
  | 'other'
type LtiCredentials = {
  consumerKey?: string | undefined
  consumerSecret?: string | undefined
  creationDate?: string | undefined
  creator?: string | undefined
  id?: string | undefined
  lastUsage?: string | undefined
  lms?: LmsName | undefined
  name?: string | undefined
  organization?: string | undefined
}
type LtiCredentialsCreation = { lms: LmsName; name: string }
type LicenseMode = 'credit' | 'site'
type LicenseSources = 'order' | 'trial' | 'voucher' | 'distributor' | 'subscription' | 'appStore'
type UserDetailsAdmin = {
  firstname?: string | undefined
  id?: string | undefined
  isFlatTeam?: boolean | undefined
  isPowerUser?: boolean | undefined
  lastname?: string | undefined
  name?: string | undefined
  picture?: (string | null) | undefined
  printableName?: string | undefined
  type?: 'user' | 'guest' | undefined
  username?: string | undefined
  classRole?: ClassRoles | undefined
  htmlUrl?: string | undefined
  organization?: string | undefined
  organizationRole?: OrganizationRoles | undefined
  email?: string | undefined
  lastActivityDate?: string | undefined
  license?:
    | {
        active?: boolean | undefined
        expirationDate?: string | undefined
        id?: string | undefined
        mode?: LicenseMode | undefined
        source?: LicenseSources | undefined
      }
    | undefined
}
type UserCreation = {
  email?: string | undefined
  firstname?: string | undefined
  lastname?: string | undefined
  locale?: FlatLocales | undefined
  password: string
  username: string
}
type UserAdminUpdate = {
  email?: string | undefined
  firstname?: string | undefined
  lastname?: string | undefined
  organizationRole?: OrganizationRoles | undefined
  password?: string | undefined
  username?: string | undefined
}
type ScoreSource = { googleDrive?: string | undefined }
type ScoreCreation = {
  collection?: string | undefined
  data?: string | undefined
  dataEncoding?: 'base64' | undefined
  filename?: string | undefined
  googleDriveFolder?: string | undefined
  privacy: ScorePrivacy
  source?: ScoreSource | undefined
  title?: string | undefined
}
type ScoreModification = {
  arranger?: string | undefined
  composer?: string | undefined
  creationType?: ScoreCreationType | undefined
  description?: string | undefined
  license?: ScoreLicense | undefined
  licenseText?: string | undefined
  lyricist?: string | undefined
  privacy?: ScorePrivacy | undefined
  sharingKey?: string | undefined
  subtitle?: string | undefined
  tags?: string[] | undefined
  title?: string | undefined
}
type ResourceCollaboratorCreation = {
  aclAdmin?: boolean | undefined
  aclRead?: boolean | undefined
  aclWrite?: boolean | undefined
  group?: string | undefined
  user?: string | undefined
  userEmail?: string | undefined
  userToken?: string | undefined
}
type ScoreCommentContext = {
  measureUuids: string[]
  partUuid: string
  staffIdx?: number | undefined
  staffUuid?: string | undefined
  startDpq: number
  startTimePos: number
  stopDpq: number
  stopTimePos: number
}
type ScoreComment = {
  comment?: string | undefined
  context?: ScoreCommentContext | undefined
  date?: string | undefined
  id?: string | undefined
  mentions?: string[] | undefined
  modificationDate?: string | undefined
  rawComment?: string | undefined
  replyTo?: string | undefined
  resolved?: boolean | undefined
  resolvedBy?: string | undefined
  revision?: string | undefined
  score?: string | undefined
  spam?: boolean | undefined
  type?: 'document' | 'inline' | undefined
  user?: string | undefined
}
type ScoreCommentCreation = {
  comment: string
  context?: ScoreCommentContext | undefined
  mentions?: string[] | undefined
  rawComment?: string | undefined
  replyTo?: string | undefined
  revision?: string | undefined
}
type ScoreCommentUpdate = {
  comment?: string | undefined
  context?: ScoreCommentContext | undefined
  rawComment?: string | undefined
  revision?: string | undefined
}
type ScoreFork = { collection?: string | undefined }
type ScoreRevisionStatistics = { additions?: number | undefined; deletions?: number | undefined }
type ScoreRevision = {
  autosave?: boolean | undefined
  collaborators?: string[] | undefined
  creationDate?: string | undefined
  description?: string | undefined
  event?: string | undefined
  id?: string | undefined
  statistics?: ScoreRevisionStatistics | undefined
  user?: string | undefined
}
type ScoreRevisionCreation = {
  autosave?: boolean | undefined
  data: string
  dataEncoding?: 'base64' | undefined
  description?: string | undefined
}
type ScoreTrackState = 'draft' | 'completed' | 'deleted'
type ScoreTrackPoint = { measureUuid?: string | undefined; time: number; type: 'measure' | 'end' }
type ScoreTrackType = 'audio' | 'soundcloud' | 'youtube' | 'vimeo'
type ScoreTrack = {
  creationDate?: string | undefined
  creator?: string | undefined
  default?: boolean | undefined
  id?: string | undefined
  mediaId?: string | undefined
  modificationDate?: string | undefined
  score?: string | undefined
  state?: ScoreTrackState | undefined
  synchronizationPoints?: ScoreTrackPoint[] | undefined
  title?: string | undefined
  type?: ScoreTrackType | undefined
  url?: string | undefined
}
type ScoreTrackCreation = {
  default?: boolean | undefined
  state?: ScoreTrackState | undefined
  synchronizationPoints?: ScoreTrackPoint[] | undefined
  title?: string | undefined
  url?: string | undefined
}
type ScoreTrackUpdate = {
  default?: boolean | undefined
  state?: ScoreTrackState | undefined
  synchronizationPoints?: ScoreTrackPoint[] | undefined
  title?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/classes': {
      $get:
        | {
            input: { query: { state?: 'active' | 'inactive' | 'archived' | undefined } }
            output: ClassDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { state?: 'active' | 'inactive' | 'archived' | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ClassCreation }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ClassCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: ClassCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/enroll/:enrollmentCode': {
      $post:
        | {
            input: { param: { enrollmentCode: string } }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enrollmentCode: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class': {
      $get:
        | {
            input: { param: { class: string } }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { class: string } } & { json: ClassUpdate }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } } & { json: ClassUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/activate': {
      $post:
        | {
            input: { param: { class: string } }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/archive': {
      $delete:
        | {
            input: { param: { class: string } }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { class: string } }
            output: ClassDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments': {
      $get:
        | {
            input: { param: { class: string } }
            output: Assignment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { class: string } } & { json: AssignmentCreation }
            output: Assignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string } } & { json: AssignmentCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/archive': {
      $delete:
        | {
            input: { param: { class: string; assignment: string } }
            output: Assignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { class: string; assignment: string } }
            output: Assignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/copy': {
      $post:
        | {
            input: { param: { class: string; assignment: string } } & { json: AssignmentCopy }
            output: Assignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } } & { json: AssignmentCopy }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions': {
      $get:
        | {
            input: { param: { class: string; assignment: string } }
            output: AssignmentSubmission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { class: string; assignment: string } } & {
              json: AssignmentSubmissionUpdate
            }
            output: AssignmentSubmission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } } & {
              json: AssignmentSubmissionUpdate
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions/csv': {
      $get:
        | {
            input: { param: { class: string; assignment: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } }
            output: FlatErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions/excel': {
      $get:
        | {
            input: { param: { class: string; assignment: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string } }
            output: FlatErrorResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions/:submission': {
      $delete:
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: AssignmentSubmission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { class: string; assignment: string; submission: string } } & {
              json: AssignmentSubmissionUpdate
            }
            output: AssignmentSubmission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } } & {
              json: AssignmentSubmissionUpdate
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions/:submission/comments': {
      $get:
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: AssignmentSubmissionComment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { class: string; assignment: string; submission: string } } & {
              json: AssignmentSubmissionCommentCreation
            }
            output: AssignmentSubmissionComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } } & {
              json: AssignmentSubmissionCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } } & {
              json: AssignmentSubmissionCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } } & {
              json: AssignmentSubmissionCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions/:submission/comments/:comment': {
      $delete:
        | {
            input: {
              param: { class: string; assignment: string; submission: string; comment: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { class: string; assignment: string; submission: string; comment: string }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { class: string; assignment: string; submission: string; comment: string }
            } & { json: AssignmentSubmissionCommentCreation }
            output: AssignmentSubmissionComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { class: string; assignment: string; submission: string; comment: string }
            } & { json: AssignmentSubmissionCommentCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { class: string; assignment: string; submission: string; comment: string }
            } & { json: AssignmentSubmissionCommentCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { class: string; assignment: string; submission: string; comment: string }
            } & { json: AssignmentSubmissionCommentCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/assignments/:assignment/submissions/:submission/history': {
      $get:
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: AssignmentSubmissionHistory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { class: string; assignment: string; submission: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/students/:user/submissions': {
      $get:
        | {
            input: { param: { class: string; user: string } }
            output: AssignmentSubmission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { class: string; user: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/classes/:class/users/:user': {
      $delete:
        | {
            input: { param: { class: string; user: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { class: string; user: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { class: string; user: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { class: string; user: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections': {
      $get:
        | {
            input: {
              query: {
                parent?: string | undefined
                sort?: 'creationDate' | 'title' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                previous?: string | undefined
              }
            }
            output: Collection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                parent?: string | undefined
                sort?: 'creationDate' | 'title' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                previous?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CollectionCreation }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CollectionCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CollectionCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/:collection': {
      $delete:
        | {
            input: { param: { collection: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { collection: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { collection: string } } & { json: CollectionModification }
            output: Collection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & { json: CollectionModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection: string } } & { json: CollectionModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection: string } } & { json: CollectionModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/:collection/scores': {
      $get:
        | {
            input: { param: { collection: string } } & {
              query: {
                sort?: 'creationDate' | 'modificationDate' | 'title' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                previous?: string | undefined
                sharingKey?: string | undefined
              }
            }
            output: ScoreDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string } } & {
              query: {
                sort?: 'creationDate' | 'modificationDate' | 'title' | undefined
                direction?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                previous?: string | undefined
                sharingKey?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/:collection/scores/:score': {
      $delete:
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: ScoreDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection: string; score: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/collections/:collection/untrash': {
      $post:
        | {
            input: { param: { collection: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { collection: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/:group': {
      $get:
        | {
            input: { param: { group: string } }
            output: GroupDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/:group/scores': {
      $get:
        | {
            input: { param: { group: string } } & { query: { parent?: string | undefined } }
            output: ScoreDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group: string } } & { query: { parent?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/groups/:group/users': {
      $get:
        | {
            input: { param: { group: string } } & {
              query: { source?: 'googleClassroom' | 'microsoftGraph' | 'clever' | undefined }
            }
            output: UserPublic[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group: string } } & {
              query: { source?: 'googleClassroom' | 'microsoftGraph' | 'clever' | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/me': {
      $get:
        | {
            input: { query: { onlyId?: boolean | undefined } }
            output: UserDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { onlyId?: boolean | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/invitations': {
      $get:
        | {
            input: {
              query: {
                role?: 'user' | 'teacher' | 'admin' | undefined
                limit?: number | undefined
                next?: string | undefined
                previous?: string | undefined
              }
            }
            output: OrganizationInvitation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                role?: 'user' | 'teacher' | 'admin' | undefined
                limit?: number | undefined
                next?: string | undefined
                previous?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: OrganizationInvitationCreation }
            output: OrganizationInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationInvitationCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/invitations/:invitation': {
      $delete:
        | {
            input: { param: { invitation: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { invitation: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/lti/credentials': {
      $get:
        | { input: {}; output: LtiCredentials[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: FlatErrorResponse; outputFormat: 'json'; status: 403 }
        | { input: {}; output: FlatErrorResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: LtiCredentialsCreation }
            output: LtiCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LtiCredentialsCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: LtiCredentialsCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/lti/credentials/:credentials': {
      $delete:
        | {
            input: { param: { credentials: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { credentials: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { credentials: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { credentials: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/users': {
      $get:
        | {
            input: {
              query: {
                sort?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                next?: string | undefined
                previous?: string | undefined
                role?: ('user' | 'teacher' | 'admin')[] | undefined
                q?: string | undefined
                group?: string[] | undefined
                noActiveLicense?: boolean | undefined
                licenseExpirationDate?: string[] | undefined
                onlyIds?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: UserDetailsAdmin[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                next?: string | undefined
                previous?: string | undefined
                role?: ('user' | 'teacher' | 'admin')[] | undefined
                q?: string | undefined
                group?: string[] | undefined
                noActiveLicense?: boolean | undefined
                licenseExpirationDate?: string[] | undefined
                onlyIds?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: UserCreation }
            output: UserDetailsAdmin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/users/count': {
      $get:
        | {
            input: {
              query: {
                role?: ('user' | 'teacher' | 'admin')[] | undefined
                q?: string | undefined
                group?: string[] | undefined
                noActiveLicense?: boolean | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                role?: ('user' | 'teacher' | 'admin')[] | undefined
                q?: string | undefined
                group?: string[] | undefined
                noActiveLicense?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/organizations/users/:user': {
      $delete:
        | {
            input: { param: { user: string } } & {
              query: { convertToIndividual?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user: string } } & {
              query: { convertToIndividual?: boolean | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { user: string } } & { json: UserAdminUpdate }
            output: UserDetailsAdmin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { json: UserAdminUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores': {
      $post:
        | {
            input: { json: ScoreCreation }
            output: ScoreDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScoreCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ScoreCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: ScoreCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score': {
      $delete:
        | {
            input: { param: { score: string } } & { query: { now?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { score: string } } & { query: { now?: boolean | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { query: { now?: boolean | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { query: { now?: boolean | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: ScoreDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { score: string } } & { json: ScoreModification }
            output: ScoreDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { json: ScoreModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { json: ScoreModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { json: ScoreModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { json: ScoreModification }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/collaborators': {
      $get:
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: ResourceCollaborator[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { score: string } } & { json: ResourceCollaboratorCreation }
            output: ResourceCollaborator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { json: ResourceCollaboratorCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { json: ResourceCollaboratorCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { json: ResourceCollaboratorCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { json: ResourceCollaboratorCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/collaborators/:collaborator': {
      $delete:
        | {
            input: { param: { score: string; collaborator: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { score: string; collaborator: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; collaborator: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; collaborator: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { score: string; collaborator: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: ResourceCollaborator
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string; collaborator: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string; collaborator: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; collaborator: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; collaborator: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/comments': {
      $get:
        | {
            input: { param: { score: string } } & {
              query: {
                type?: 'document' | 'inline' | undefined
                sort?: 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                sharingKey?: string | undefined
              }
            }
            output: ScoreComment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & {
              query: {
                type?: 'document' | 'inline' | undefined
                sort?: 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                sharingKey?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & {
              query: {
                type?: 'document' | 'inline' | undefined
                sort?: 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                sharingKey?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & {
              query: {
                type?: 'document' | 'inline' | undefined
                sort?: 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                sharingKey?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & {
              query: {
                type?: 'document' | 'inline' | undefined
                sort?: 'date' | undefined
                direction?: 'asc' | 'desc' | undefined
                sharingKey?: string | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreCommentCreation
            }
            output: ScoreComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreCommentCreation
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/comments/:comment': {
      $delete:
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            } & { json: ScoreCommentUpdate }
            output: ScoreComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            } & { json: ScoreCommentUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            } & { json: ScoreCommentUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            } & { json: ScoreCommentUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            } & { json: ScoreCommentUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/comments/:comment/resolved': {
      $delete:
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; comment: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/fork': {
      $post:
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreFork
            }
            output: ScoreDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreFork
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreFork
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreFork
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } } & {
              json: ScoreFork
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/revisions': {
      $get:
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: ScoreRevision[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { query: { sharingKey?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { score: string } } & { json: ScoreRevisionCreation }
            output: ScoreRevision
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { json: ScoreRevisionCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string } } & { json: ScoreRevisionCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { json: ScoreRevisionCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { json: ScoreRevisionCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/revisions/:revision': {
      $get:
        | {
            input: { param: { score: string; revision: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: ScoreRevision
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string; revision: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { score: string; revision: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; revision: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; revision: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/revisions/:revision/:format': {
      $get:
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                score: string
                revision: string
                format:
                  | 'json'
                  | 'mxl'
                  | 'xml'
                  | 'mp3'
                  | 'wav'
                  | 'midi'
                  | 'thumbnail.png'
                  | 'synchronizationPoints'
              }
            } & {
              query: {
                sharingKey?: string | undefined
                parts?: string | undefined
                onlyCached?: boolean | undefined
                url?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/submissions': {
      $get:
        | {
            input: { param: { score: string } }
            output: AssignmentSubmission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/tracks': {
      $get:
        | {
            input: { param: { score: string } } & {
              query: {
                sharingKey?: string | undefined
                assignment?: string | undefined
                listAutoTrack?: boolean | undefined
              }
            }
            output: ScoreTrack[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & {
              query: {
                sharingKey?: string | undefined
                assignment?: string | undefined
                listAutoTrack?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & {
              query: {
                sharingKey?: string | undefined
                assignment?: string | undefined
                listAutoTrack?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & {
              query: {
                sharingKey?: string | undefined
                assignment?: string | undefined
                listAutoTrack?: boolean | undefined
              }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { score: string } } & { json: ScoreTrackCreation }
            output: ScoreTrack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string } } & { json: ScoreTrackCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } } & { json: ScoreTrackCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } } & { json: ScoreTrackCreation }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/tracks/:track': {
      $delete:
        | {
            input: { param: { score: string; track: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { score: string; track: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; track: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; track: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { score: string; track: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: ScoreTrack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string; track: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; track: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; track: string } } & {
              query: { sharingKey?: string | undefined }
            }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { score: string; track: string } } & { json: ScoreTrackUpdate }
            output: ScoreTrack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { score: string; track: string } } & { json: ScoreTrackUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string; track: string } } & { json: ScoreTrackUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string; track: string } } & { json: ScoreTrackUpdate }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scores/:score/untrash': {
      $post:
        | { input: { param: { score: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { score: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { score: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { score: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user': {
      $get:
        | {
            input: { param: { user: string } }
            output: UserPublic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user/likes': {
      $get:
        | {
            input: { param: { user: string } } & { query: { ids?: boolean | undefined } }
            output: ScoreDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { ids?: boolean | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/users/:user/scores': {
      $get:
        | {
            input: { param: { user: string } } & { query: { parent?: string | undefined } }
            output: ScoreDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string } } & { query: { parent?: string | undefined } }
            output: FlatErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
