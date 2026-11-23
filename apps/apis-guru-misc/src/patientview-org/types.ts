type Credentials = {
  apiKey?: string | undefined
  password?: string | undefined
  username?: string | undefined
}
type ExternalStandard = {
  description?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type Feature = {
  created?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
  name?: string | undefined
}
type Role = {
  description?: string | undefined
  id?: bigint | undefined
  name?:
    | 'PATIENT'
    | 'UNIT_ADMIN'
    | 'STAFF_ADMIN'
    | 'DISEASE_GROUP_ADMIN'
    | 'SPECIALTY_ADMIN'
    | 'GLOBAL_ADMIN'
    | 'GP_ADMIN'
    | 'MEMBER'
    | 'PUBLIC'
    | 'UNIT_ADMIN_API'
    | 'IMPORTER'
    | undefined
  visible?: boolean | undefined
}
type LookupType = {
  created?: string | undefined
  description?: string | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
  type?:
    | 'GROUP'
    | 'MENU'
    | 'ROLE'
    | 'CODE_STANDARD'
    | 'CODE_TYPE'
    | 'FEATURE_TYPE'
    | 'RELATIONSHIP_TYPE'
    | 'IDENTIFIER'
    | 'CONTACT_POINT_TYPE'
    | 'STATISTIC_TYPE'
    | 'NEWS_TYPE'
    | 'GENDER'
    | 'IBD_CROHNSLOCATION'
    | 'IBD_CROHNSPROXIMALTERMINALILEUM'
    | 'IBD_CROHNSPERIANAL'
    | 'IBD_CROHNSBEHAVIOUR'
    | 'IBD_UCEXTENT'
    | 'IBD_EGIMCOMPLICATION'
    | 'IBD_SURGERYMAINPROCEDURE'
    | 'IBD_SMOKINGSTATUS'
    | 'IBD_FAMILYHISTORY'
    | 'LINK_TYPE'
    | undefined
}
type Lookup = {
  created?: string | undefined
  description?: string | undefined
  descriptionFriendly?: string | undefined
  displayOrder?: bigint | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
  lookupType?: LookupType | undefined
  value?: string | undefined
}
type Route = {
  controller?: string | undefined
  created?: string | undefined
  displayOrder?: number | undefined
  id?: bigint | undefined
  lookup?: Lookup | undefined
  templateUrl?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type ApiKey = {
  expired?: boolean | undefined
  expiryDate?: string | undefined
  key?: string | undefined
}
type ContactPointType = {
  description?: string | undefined
  id?: bigint | undefined
  lookupType?: LookupType | undefined
  value?:
    | 'UNIT_WEB_ADDRESS'
    | 'TRUST_WEB_ADDRESS'
    | 'PV_ADMIN_NAME'
    | 'PV_ADMIN_PHONE'
    | 'PV_ADMIN_EMAIL'
    | 'UNIT_ENQUIRIES_PHONE'
    | 'UNIT_ENQUIRIES_EMAIL'
    | 'APPOINTMENT_PHONE'
    | 'APPOINTMENT_EMAIL'
    | 'OUT_OF_HOURS_INFO'
    | undefined
}
type ContactPoint = {
  contactPointType?: ContactPointType | undefined
  content?: string | undefined
  created?: string | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
}
type GroupFeature = {
  created?: string | undefined
  feature?: Feature | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
}
type Link = {
  created?: string | undefined
  displayOrder?: number | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
  link?: string | undefined
  linkType?: Lookup | undefined
  name?: string | undefined
}
type Location = {
  address?: string | undefined
  created?: string | undefined
  email?: string | undefined
  id?: bigint | undefined
  label?: string | undefined
  lastUpdate?: string | undefined
  name?: string | undefined
  phone?: string | undefined
  web?: string | undefined
}
type Group = {
  address1?: string | undefined
  address2?: string | undefined
  address3?: string | undefined
  childGroups?: Group[] | undefined
  code?: string | undefined
  contactPoints?: ContactPoint[] | undefined
  created?: string | undefined
  fhirResourceId?: string | undefined
  groupFeatures?: GroupFeature[] | undefined
  groupType?: Lookup | undefined
  id?: bigint | undefined
  lastImportDate?: string | undefined
  lastUpdate?: string | undefined
  links?: Link[] | undefined
  locations?: Location[] | undefined
  name?: string | undefined
  parentGroups?: Group[] | undefined
  postcode?: string | undefined
  sftpUser?: string | undefined
  shortName?: string | undefined
  visible?: boolean | undefined
  visibleToJoin?: boolean | undefined
}
type GroupRole = { group?: Group | undefined; id?: bigint | undefined; role?: Role | undefined }
type BaseGroup = {
  code?: string | undefined
  groupType?: Lookup | undefined
  id?: bigint | undefined
  lastImportDate?: string | undefined
  name?: string | undefined
  parentCodes?: string[] | undefined
  shortName?: string | undefined
  visible?: boolean | undefined
  visibleToJoin?: boolean | undefined
}
type UserFeature = {
  created?: string | undefined
  feature?: Feature | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
  optInDate?: string | undefined
  optInHidden?: boolean | undefined
  optInStatus?: boolean | undefined
  optOutHidden?: boolean | undefined
}
type User = {
  apiKey?: ApiKey | undefined
  canSwitchUser?: boolean | undefined
  changePassword?: boolean | undefined
  contactNumber?: string | undefined
  created?: string | undefined
  currentLogin?: string | undefined
  currentLoginIpAddress?: string | undefined
  dateOfBirth?: string | undefined
  deleted?: boolean | undefined
  dummy?: boolean | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  forename?: string | undefined
  groupRoles?: GroupRole[] | undefined
  hideSecretWordNotification?: boolean | undefined
  id?: bigint | undefined
  identifiers?: { [x: string]: unknown }[] | undefined
  lastLogin?: string | undefined
  lastLoginIpAddress?: string | undefined
  latestDataReceivedBy?: BaseGroup | undefined
  latestDataReceivedDate?: string | undefined
  locked?: boolean | undefined
  picture?: string | undefined
  roleDescription?: string | undefined
  secretWordIsSet?: boolean | undefined
  surname?: string | undefined
  userFeatures?: UserFeature[] | undefined
  username?: string | undefined
}
type UserToken = {
  auditActions?: string[] | undefined
  checkSecretWord?: boolean | undefined
  created?: string | undefined
  expiration?: string | undefined
  externalStandards?: ExternalStandard[] | undefined
  groupFeatures?: Feature[] | undefined
  groupMessagingEnabled?: boolean | undefined
  mustSetSecretWord?: boolean | undefined
  patientFeatures?: Feature[] | undefined
  patientMessagingFeatureTypes?: string[] | undefined
  patientRoles?: Role[] | undefined
  routes?: Route[] | undefined
  secretWord?: string | undefined
  secretWordChoices?: { [x: string]: unknown } | undefined
  secretWordIndexes?: string[] | undefined
  secretWordSalt?: string | undefined
  secretWordToken?: string | undefined
  securityRoles?: Role[] | undefined
  shouldEnterCondition?: boolean | undefined
  staffFeatures?: Feature[] | undefined
  staffRoles?: Role[] | undefined
  token?: string | undefined
  user?: User | undefined
  userFeatures?: Feature[] | undefined
  userGroups?: BaseGroup[] | undefined
}
type Category = {
  friendlyDescription?: string | undefined
  hidden?: boolean | undefined
  icd10Description?: string | undefined
  id?: bigint | undefined
  number?: number | undefined
}
type CodeCategory = { category?: Category | undefined; id?: bigint | undefined }
type CodeExternalStandard = {
  codeString?: string | undefined
  externalStandard?: ExternalStandard | undefined
  id?: bigint | undefined
}
type Code = {
  code?: string | undefined
  codeCategories?: CodeCategory[] | undefined
  codeType?: Lookup | undefined
  created?: string | undefined
  description?: string | undefined
  displayOrder?: number | undefined
  externalStandards?: CodeExternalStandard[] | undefined
  fullDescription?: string | undefined
  hideFromPatients?: boolean | undefined
  id?: bigint | undefined
  lastUpdate?: string | undefined
  links?: Link[] | undefined
  patientFriendlyName?: string | undefined
  removedExternally?: boolean | undefined
  sourceType?: 'PATIENTVIEW' | 'NHS_CHOICES' | undefined
  standardType?: Lookup | undefined
}
type FhirAllergy = {
  confidenceLevel?: string | undefined
  group?: Group | undefined
  id?: bigint | undefined
  identifier?: string | undefined
  infoSource?: string | undefined
  reaction?: string | undefined
  recordedDate?: string | undefined
  status?: string | undefined
  substance?: string | undefined
  type?: string | undefined
}
type FhirCondition = {
  asserter?: string | undefined
  category?: string | undefined
  code?: string | undefined
  date?: string | undefined
  description?: string | undefined
  fullDescription?: string | undefined
  group?: Group | undefined
  id?: bigint | undefined
  identifier?: string | undefined
  links?: Link[] | undefined
  notes?: string | undefined
  severity?: string | undefined
  status?: string | undefined
}
type FhirObservation = {
  applies?: string | undefined
  bodySite?: string | undefined
  comments?: string | undefined
  comparator?: string | undefined
  diagram?: string | undefined
  group?: Group | undefined
  id?: bigint | undefined
  identifier?: string | undefined
  location?: string | undefined
  name?: string | undefined
  temporaryUuid?: string | undefined
  units?: string | undefined
  value?: string | undefined
}
type FhirProcedure = {
  bodySite?: string | undefined
  id?: bigint | undefined
  type?: string | undefined
}
type FhirEncounter = {
  date?: string | undefined
  encounterType?: string | undefined
  group?: Group | undefined
  id?: bigint | undefined
  identifier?: string | undefined
  links?: Link[] | undefined
  observations?: FhirObservation[] | undefined
  procedures?: FhirProcedure[] | undefined
  status?: string | undefined
}
type FhirContact = {
  id?: bigint | undefined
  system?: string | undefined
  use?: string | undefined
  value?: string | undefined
}
type FhirIdentifier = {
  id?: bigint | undefined
  label?: string | undefined
  value?: string | undefined
}
type FhirPractitioner = {
  address1?: string | undefined
  address2?: string | undefined
  address3?: string | undefined
  address4?: string | undefined
  allowInviteGp?: boolean | undefined
  contacts?: FhirContact[] | undefined
  gender?: string | undefined
  groupCode?: string | undefined
  identifier?: string | undefined
  inviteDate?: string | undefined
  name?: string | undefined
  postcode?: string | undefined
  role?: string | undefined
}
type FhirPatient = {
  address1?: string | undefined
  address2?: string | undefined
  address3?: string | undefined
  address4?: string | undefined
  contacts?: FhirContact[] | undefined
  dateOfBirth?: string | undefined
  dateOfBirthNoTime?: string | undefined
  forename?: string | undefined
  gender?: string | undefined
  group?: Group | undefined
  groupCode?: string | undefined
  identifier?: string | undefined
  identifiers?: FhirIdentifier[] | undefined
  postcode?: string | undefined
  practitioners?: FhirPractitioner[] | undefined
  surname?: string | undefined
}
type Patient = {
  diagnosisCodes?: Code[] | undefined
  fhirAllergies?: FhirAllergy[] | undefined
  fhirConditions?: FhirCondition[] | undefined
  fhirEncounters?: FhirEncounter[] | undefined
  fhirObservations?: FhirObservation[] | undefined
  fhirPatient?: FhirPatient | undefined
  fhirPractitioners?: FhirPractitioner[] | undefined
  group?: Group | undefined
  id?: bigint | undefined
}
type PatientManagement = {
  condition?: FhirCondition | undefined
  encounters?: FhirEncounter[] | undefined
  groupCode?: string | undefined
  identifier?: string | undefined
  observations?: FhirObservation[] | undefined
  patient?: FhirPatient | undefined
  practitioners?: FhirPractitioner[] | undefined
}
type ObservationHeadingGroup = {
  created?: string | undefined
  group?: Group | undefined
  id?: bigint | undefined
  panel?: bigint | undefined
  panelOrder?: bigint | undefined
}
type ObservationHeading = {
  code?: string | undefined
  created?: string | undefined
  decimalPlaces?: bigint | undefined
  defaultPanel?: bigint | undefined
  defaultPanelOrder?: bigint | undefined
  heading?: string | undefined
  id?: bigint | undefined
  infoLink?: string | undefined
  lastUpdate?: string | undefined
  maxGraph?: number | undefined
  minGraph?: number | undefined
  name?: string | undefined
  normalRange?: string | undefined
  observationHeadingGroups?: ObservationHeadingGroup[] | undefined
  units?: string | undefined
}
type EntryStringListFhirObservation = { key?: FhirObservation[] | undefined }
type EntryLongMapStringListFhirObservation = { key?: EntryStringListFhirObservation[] | undefined }
type FhirObservationPage = {
  data?: EntryLongMapStringListFhirObservation[] | undefined
  totalElements?: bigint | undefined
  totalPages?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth/login': {
      $post:
        | { input: { json: Credentials }; output: UserToken; outputFormat: 'text'; status: 200 }
        | { input: { json: Credentials }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: Credentials }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Credentials }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: Credentials }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/auth/logout/:token': {
      $delete:
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/auth/:token/basicuserinformation': {
      $get:
        | { input: { param: { token: string } }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { token: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/patient/:userId/basic': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: Patient[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/patientmanagement/diagnoses': {
      $get:
        | { input: {}; output: Code[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/patientmanagement/lookuptypes': {
      $get:
        | { input: {}; output: LookupType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/patientmanagement/validate': {
      $post:
        | { input: { json: PatientManagement }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: PatientManagement }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: PatientManagement }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: PatientManagement }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: PatientManagement }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId': {
      $get:
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } }
            output: PatientManagement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/patientmanagement/:userId/group/:groupId/identifier/:identifierId/surgeries': {
      $post:
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: bigint; groupId: bigint; identifierId: bigint } } & {
              json: PatientManagement
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/:userId/availableobservationheadings': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: ObservationHeading[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/:userId/observations': {
      $get:
        | {
            input: { param: { userId: bigint } } & {
              query: { code: string[]; limit: bigint; offset: bigint; orderDirection: string }
            }
            output: FhirObservationPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { code: string[]; limit: bigint; offset: bigint; orderDirection: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { code: string[]; limit: bigint; offset: bigint; orderDirection: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: bigint } } & {
              query: { code: string[]; limit: bigint; offset: bigint; orderDirection: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/:userId/observations/:code': {
      $get:
        | {
            input: { param: { userId: bigint; code: string } }
            output: FhirObservation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: bigint; code: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: bigint; code: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: bigint; code: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/:userId/observations/:code/patiententered': {
      $get:
        | {
            input: { param: { userId: bigint; code: string } }
            output: FhirObservation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: bigint; code: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: bigint; code: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { userId: bigint; code: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/:userId/patiententeredobservationheadings': {
      $get:
        | {
            input: { param: { userId: bigint } }
            output: ObservationHeading[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { userId: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
