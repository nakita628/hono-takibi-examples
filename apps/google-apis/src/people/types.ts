type GroupClientData = { key?: string | undefined; value?: string | undefined }
type ContactGroupMetadata = { deleted?: boolean | undefined; updateTime?: string | undefined }
type ContactGroup = {
  clientData?: GroupClientData[] | undefined
  etag?: string | undefined
  formattedName?: string | undefined
  groupType?: 'GROUP_TYPE_UNSPECIFIED' | 'USER_CONTACT_GROUP' | 'SYSTEM_CONTACT_GROUP' | undefined
  memberCount?: number | undefined
  memberResourceNames?: string[] | undefined
  metadata?: ContactGroupMetadata | undefined
  name?: string | undefined
  resourceName?: string | undefined
}
type ListContactGroupsResponse = {
  contactGroups?: ContactGroup[] | undefined
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
  totalItems?: number | undefined
}
type CreateContactGroupRequest = {
  contactGroup?: ContactGroup | undefined
  readGroupFields?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type ContactGroupResponse = {
  contactGroup?: ContactGroup | undefined
  requestedResourceName?: string | undefined
  status?: Status | undefined
}
type BatchGetContactGroupsResponse = { responses?: ContactGroupResponse[] | undefined }
type ProfileMetadata = {
  objectType?: 'OBJECT_TYPE_UNSPECIFIED' | 'PERSON' | 'PAGE' | undefined
  userTypes?:
    | ('USER_TYPE_UNKNOWN' | 'GOOGLE_USER' | 'GPLUS_USER' | 'GOOGLE_APPS_USER')[]
    | undefined
}
type Source = {
  etag?: string | undefined
  id?: string | undefined
  profileMetadata?: ProfileMetadata | undefined
  type?:
    | 'SOURCE_TYPE_UNSPECIFIED'
    | 'ACCOUNT'
    | 'PROFILE'
    | 'DOMAIN_PROFILE'
    | 'CONTACT'
    | 'OTHER_CONTACT'
    | 'DOMAIN_CONTACT'
    | undefined
  updateTime?: string | undefined
}
type FieldMetadata = {
  primary?: boolean | undefined
  source?: Source | undefined
  sourcePrimary?: boolean | undefined
  verified?: boolean | undefined
}
type Address = {
  city?: string | undefined
  country?: string | undefined
  countryCode?: string | undefined
  extendedAddress?: string | undefined
  formattedType?: string | undefined
  formattedValue?: string | undefined
  metadata?: FieldMetadata | undefined
  poBox?: string | undefined
  postalCode?: string | undefined
  region?: string | undefined
  streetAddress?: string | undefined
  type?: string | undefined
}
type AgeRangeType = {
  ageRange?:
    | 'AGE_RANGE_UNSPECIFIED'
    | 'LESS_THAN_EIGHTEEN'
    | 'EIGHTEEN_TO_TWENTY'
    | 'TWENTY_ONE_OR_OLDER'
    | undefined
  metadata?: FieldMetadata | undefined
}
type Biography = {
  contentType?: 'CONTENT_TYPE_UNSPECIFIED' | 'TEXT_PLAIN' | 'TEXT_HTML' | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type Birthday = {
  date?: Date | undefined
  metadata?: FieldMetadata | undefined
  text?: string | undefined
}
type BraggingRights = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type CalendarUrl = {
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  url?: string | undefined
}
type ClientData = {
  key?: string | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type CoverPhoto = { metadata?: FieldMetadata | undefined; url?: string | undefined }
type EmailAddress = {
  displayName?: string | undefined
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  value?: string | undefined
}
type Event = {
  date?: Date | undefined
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
}
type ExternalId = {
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  value?: string | undefined
}
type FileAs = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type Gender = {
  addressMeAs?: string | undefined
  formattedValue?: string | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type ImClient = {
  formattedProtocol?: string | undefined
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  protocol?: string | undefined
  type?: string | undefined
  username?: string | undefined
}
type Interest = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type Locale = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type Location = {
  buildingId?: string | undefined
  current?: boolean | undefined
  deskCode?: string | undefined
  floor?: string | undefined
  floorSection?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  value?: string | undefined
}
type ContactGroupMembership = {
  contactGroupId?: string | undefined
  contactGroupResourceName?: string | undefined
}
type DomainMembership = { inViewerDomain?: boolean | undefined }
type Membership = {
  contactGroupMembership?: ContactGroupMembership | undefined
  domainMembership?: DomainMembership | undefined
  metadata?: FieldMetadata | undefined
}
type PersonMetadata = {
  deleted?: boolean | undefined
  linkedPeopleResourceNames?: string[] | undefined
  objectType?: 'OBJECT_TYPE_UNSPECIFIED' | 'PERSON' | 'PAGE' | undefined
  previousResourceNames?: string[] | undefined
  sources?: Source[] | undefined
}
type MiscKeyword = {
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'OUTLOOK_BILLING_INFORMATION'
    | 'OUTLOOK_DIRECTORY_SERVER'
    | 'OUTLOOK_KEYWORD'
    | 'OUTLOOK_MILEAGE'
    | 'OUTLOOK_PRIORITY'
    | 'OUTLOOK_SENSITIVITY'
    | 'OUTLOOK_SUBJECT'
    | 'OUTLOOK_USER'
    | 'HOME'
    | 'WORK'
    | 'OTHER'
    | undefined
  value?: string | undefined
}
type Name = {
  displayName?: string | undefined
  displayNameLastFirst?: string | undefined
  familyName?: string | undefined
  givenName?: string | undefined
  honorificPrefix?: string | undefined
  honorificSuffix?: string | undefined
  metadata?: FieldMetadata | undefined
  middleName?: string | undefined
  phoneticFamilyName?: string | undefined
  phoneticFullName?: string | undefined
  phoneticGivenName?: string | undefined
  phoneticHonorificPrefix?: string | undefined
  phoneticHonorificSuffix?: string | undefined
  phoneticMiddleName?: string | undefined
  unstructuredName?: string | undefined
}
type Nickname = {
  metadata?: FieldMetadata | undefined
  type?:
    | 'DEFAULT'
    | 'MAIDEN_NAME'
    | 'INITIALS'
    | 'GPLUS'
    | 'OTHER_NAME'
    | 'ALTERNATE_NAME'
    | 'SHORT_NAME'
    | undefined
  value?: string | undefined
}
type Occupation = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type Organization = {
  costCenter?: string | undefined
  current?: boolean | undefined
  department?: string | undefined
  domain?: string | undefined
  endDate?: Date | undefined
  formattedType?: string | undefined
  fullTimeEquivalentMillipercent?: number | undefined
  jobDescription?: string | undefined
  location?: string | undefined
  metadata?: FieldMetadata | undefined
  name?: string | undefined
  phoneticName?: string | undefined
  startDate?: Date | undefined
  symbol?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type PhoneNumber = {
  canonicalForm?: string | undefined
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  value?: string | undefined
}
type Photo = { metadata?: FieldMetadata | undefined; url?: string | undefined }
type Relation = {
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  person?: string | undefined
  type?: string | undefined
}
type RelationshipInterest = {
  formattedValue?: string | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type RelationshipStatus = {
  formattedValue?: string | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type Residence = {
  current?: boolean | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type SipAddress = {
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  value?: string | undefined
}
type Skill = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type Tagline = { metadata?: FieldMetadata | undefined; value?: string | undefined }
type Url = {
  formattedType?: string | undefined
  metadata?: FieldMetadata | undefined
  type?: string | undefined
  value?: string | undefined
}
type UserDefined = {
  key?: string | undefined
  metadata?: FieldMetadata | undefined
  value?: string | undefined
}
type Person = {
  addresses?: Address[] | undefined
  ageRange?:
    | 'AGE_RANGE_UNSPECIFIED'
    | 'LESS_THAN_EIGHTEEN'
    | 'EIGHTEEN_TO_TWENTY'
    | 'TWENTY_ONE_OR_OLDER'
    | undefined
  ageRanges?: AgeRangeType[] | undefined
  biographies?: Biography[] | undefined
  birthdays?: Birthday[] | undefined
  braggingRights?: BraggingRights[] | undefined
  calendarUrls?: CalendarUrl[] | undefined
  clientData?: ClientData[] | undefined
  coverPhotos?: CoverPhoto[] | undefined
  emailAddresses?: EmailAddress[] | undefined
  etag?: string | undefined
  events?: Event[] | undefined
  externalIds?: ExternalId[] | undefined
  fileAses?: FileAs[] | undefined
  genders?: Gender[] | undefined
  imClients?: ImClient[] | undefined
  interests?: Interest[] | undefined
  locales?: Locale[] | undefined
  locations?: Location[] | undefined
  memberships?: Membership[] | undefined
  metadata?: PersonMetadata | undefined
  miscKeywords?: MiscKeyword[] | undefined
  names?: Name[] | undefined
  nicknames?: Nickname[] | undefined
  occupations?: Occupation[] | undefined
  organizations?: Organization[] | undefined
  phoneNumbers?: PhoneNumber[] | undefined
  photos?: Photo[] | undefined
  relations?: Relation[] | undefined
  relationshipInterests?: RelationshipInterest[] | undefined
  relationshipStatuses?: RelationshipStatus[] | undefined
  residences?: Residence[] | undefined
  resourceName?: string | undefined
  sipAddresses?: SipAddress[] | undefined
  skills?: Skill[] | undefined
  taglines?: Tagline[] | undefined
  urls?: Url[] | undefined
  userDefined?: UserDefined[] | undefined
}
type ListOtherContactsResponse = {
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
  otherContacts?: Person[] | undefined
  totalSize?: number | undefined
}
type SearchResult = { person?: Person | undefined }
type SearchResponse = { results?: SearchResult[] | undefined }
type ContactToCreate = { contactPerson?: Person | undefined }
type BatchCreateContactsRequest = {
  contacts?: ContactToCreate[] | undefined
  readMask?: string | undefined
  sources?:
    | (
        | 'READ_SOURCE_TYPE_UNSPECIFIED'
        | 'READ_SOURCE_TYPE_PROFILE'
        | 'READ_SOURCE_TYPE_CONTACT'
        | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
      )[]
    | undefined
}
type PersonResponse = {
  httpStatusCode?: number | undefined
  person?: Person | undefined
  requestedResourceName?: string | undefined
  status?: Status | undefined
}
type BatchCreateContactsResponse = { createdPeople?: PersonResponse[] | undefined }
type BatchDeleteContactsRequest = { resourceNames?: string[] | undefined }
type Empty = { [x: string]: unknown }
type GetPeopleResponse = { responses?: PersonResponse[] | undefined }
type BatchUpdateContactsRequest = {
  contacts?: { [x: string]: Person } | undefined
  readMask?: string | undefined
  sources?:
    | (
        | 'READ_SOURCE_TYPE_UNSPECIFIED'
        | 'READ_SOURCE_TYPE_PROFILE'
        | 'READ_SOURCE_TYPE_CONTACT'
        | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
      )[]
    | undefined
  updateMask?: string | undefined
}
type BatchUpdateContactsResponse = { updateResult?: { [x: string]: PersonResponse } | undefined }
type ListDirectoryPeopleResponse = {
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
  people?: Person[] | undefined
}
type SearchDirectoryPeopleResponse = {
  nextPageToken?: string | undefined
  people?: Person[] | undefined
  totalSize?: number | undefined
}
type UpdateContactGroupRequest = {
  contactGroup?: ContactGroup | undefined
  readGroupFields?: string | undefined
  updateGroupFields?: string | undefined
}
type ListConnectionsResponse = {
  connections?: Person[] | undefined
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
  totalItems?: number | undefined
  totalPeople?: number | undefined
}
type ModifyContactGroupMembersRequest = {
  resourceNamesToAdd?: string[] | undefined
  resourceNamesToRemove?: string[] | undefined
}
type ModifyContactGroupMembersResponse = {
  canNotRemoveLastContactGroupResourceNames?: string[] | undefined
  notFoundResourceNames?: string[] | undefined
}
type CopyOtherContactToMyContactsGroupRequest = {
  copyMask?: string | undefined
  readMask?: string | undefined
  sources?:
    | (
        | 'READ_SOURCE_TYPE_UNSPECIFIED'
        | 'READ_SOURCE_TYPE_PROFILE'
        | 'READ_SOURCE_TYPE_CONTACT'
        | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
      )[]
    | undefined
}
type DeleteContactPhotoResponse = { person?: Person | undefined }
type UpdateContactPhotoRequest = {
  personFields?: string | undefined
  photoBytes?: string | undefined
  sources?:
    | (
        | 'READ_SOURCE_TYPE_UNSPECIFIED'
        | 'READ_SOURCE_TYPE_PROFILE'
        | 'READ_SOURCE_TYPE_CONTACT'
        | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
      )[]
    | undefined
}
type UpdateContactPhotoResponse = { person?: Person | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/contactGroups': {
      $get: {
        input: {
          query: {
            groupFields?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            syncToken?: string | undefined
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
        output: ListContactGroupsResponse
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
        } & { json: CreateContactGroupRequest }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/contactGroups:batchGet': {
      $get: {
        input: {
          query: {
            groupFields?: string | undefined
            maxMembers?: number | undefined
            resourceNames?: string[] | undefined
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
        output: BatchGetContactGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/otherContacts': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            requestSyncToken?: boolean | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
              | undefined
            syncToken?: string | undefined
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
        output: ListOtherContactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/otherContacts:search': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            query?: string | undefined
            readMask?: string | undefined
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
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:batchCreateContacts': {
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
        } & { json: BatchCreateContactsRequest }
        output: BatchCreateContactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:batchDeleteContacts': {
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
        } & { json: BatchDeleteContactsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:batchGet': {
      $get: {
        input: {
          query: {
            personFields?: string | undefined
            'requestMask.includeField'?: string | undefined
            resourceNames?: string[] | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
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
        output: GetPeopleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:batchUpdateContacts': {
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
        } & { json: BatchUpdateContactsRequest }
        output: BatchUpdateContactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:createContact': {
      $post: {
        input: {
          query: {
            personFields?: string | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
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
        } & { json: Person }
        output: Person
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:listDirectoryPeople': {
      $get: {
        input: {
          query: {
            mergeSources?:
              | (
                  | 'DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED'
                  | 'DIRECTORY_MERGE_SOURCE_TYPE_CONTACT'
                )[]
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            requestSyncToken?: boolean | undefined
            sources?:
              | (
                  | 'DIRECTORY_SOURCE_TYPE_UNSPECIFIED'
                  | 'DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT'
                  | 'DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE'
                )[]
              | undefined
            syncToken?: string | undefined
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
        output: ListDirectoryPeopleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:searchContacts': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            query?: string | undefined
            readMask?: string | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
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
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/people:searchDirectoryPeople': {
      $get: {
        input: {
          query: {
            mergeSources?:
              | (
                  | 'DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED'
                  | 'DIRECTORY_MERGE_SOURCE_TYPE_CONTACT'
                )[]
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            readMask?: string | undefined
            sources?:
              | (
                  | 'DIRECTORY_SOURCE_TYPE_UNSPECIFIED'
                  | 'DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT'
                  | 'DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE'
                )[]
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
        output: SearchDirectoryPeopleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName': {
      $delete: {
        input: { param: { resourceName: string } } & {
          query: {
            deleteContacts?: boolean | undefined
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
        input: { param: { resourceName: string } } & {
          query: {
            personFields?: string | undefined
            'requestMask.includeField'?: string | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
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
        output: Person
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceName: string } } & {
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
        } & { json: UpdateContactGroupRequest }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName/connections': {
      $get: {
        input: { param: { resourceName: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            personFields?: string | undefined
            'requestMask.includeField'?: string | undefined
            requestSyncToken?: boolean | undefined
            sortOrder?:
              | 'LAST_MODIFIED_ASCENDING'
              | 'LAST_MODIFIED_DESCENDING'
              | 'FIRST_NAME_ASCENDING'
              | 'LAST_NAME_ASCENDING'
              | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
              | undefined
            syncToken?: string | undefined
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
        output: ListConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName/members:modify': {
      $post: {
        input: { param: { resourceName: string } } & {
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
        } & { json: ModifyContactGroupMembersRequest }
        output: ModifyContactGroupMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName:copyOtherContactToMyContactsGroup': {
      $post: {
        input: { param: { resourceName: string } } & {
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
        } & { json: CopyOtherContactToMyContactsGroupRequest }
        output: Person
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName:deleteContact': {
      $delete: {
        input: { param: { resourceName: string } } & {
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
    '/v1/:resourceName:deleteContactPhoto': {
      $delete: {
        input: { param: { resourceName: string } } & {
          query: {
            personFields?: string | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
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
        output: DeleteContactPhotoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName:updateContact': {
      $patch: {
        input: { param: { resourceName: string } } & {
          query: {
            personFields?: string | undefined
            sources?:
              | (
                  | 'READ_SOURCE_TYPE_UNSPECIFIED'
                  | 'READ_SOURCE_TYPE_PROFILE'
                  | 'READ_SOURCE_TYPE_CONTACT'
                  | 'READ_SOURCE_TYPE_DOMAIN_CONTACT'
                )[]
              | undefined
            updatePersonFields?: string | undefined
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
        } & { json: Person }
        output: Person
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resourceName:updateContactPhoto': {
      $patch: {
        input: { param: { resourceName: string } } & {
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
        } & { json: UpdateContactPhotoRequest }
        output: UpdateContactPhotoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
