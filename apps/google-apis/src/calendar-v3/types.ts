type ConferenceProperties = { allowedConferenceSolutionTypes?: string[] | undefined }
type Calendar = {
  conferenceProperties?: ConferenceProperties | undefined
  description?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  location?: string | undefined
  summary?: string | undefined
  timeZone?: string | undefined
}
type AclRule = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  role?: string | undefined
  scope?: { type?: string | undefined; value?: string | undefined } | undefined
}
type Acl = {
  etag?: string | undefined
  items?: AclRule[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
}
type Channel = {
  address?: string | undefined
  expiration?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  params?: { [x: string]: string } | undefined
  payload?: boolean | undefined
  resourceId?: string | undefined
  resourceUri?: string | undefined
  token?: string | undefined
  type?: string | undefined
}
type EventReminder = { method?: string | undefined; minutes?: number | undefined }
type EventAttachment = {
  fileId?: string | undefined
  fileUrl?: string | undefined
  iconLink?: string | undefined
  mimeType?: string | undefined
  title?: string | undefined
}
type EventAttendee = {
  additionalGuests?: number | undefined
  comment?: string | undefined
  displayName?: string | undefined
  email?: string | undefined
  id?: string | undefined
  optional?: boolean | undefined
  organizer?: boolean | undefined
  resource?: boolean | undefined
  responseStatus?: string | undefined
  self?: boolean | undefined
}
type ConferenceSolutionKey = { type?: string | undefined }
type ConferenceSolution = {
  iconUri?: string | undefined
  key?: ConferenceSolutionKey | undefined
  name?: string | undefined
}
type ConferenceRequestStatus = { statusCode?: string | undefined }
type CreateConferenceRequest = {
  conferenceSolutionKey?: ConferenceSolutionKey | undefined
  requestId?: string | undefined
  status?: ConferenceRequestStatus | undefined
}
type EntryPoint = {
  accessCode?: string | undefined
  entryPointFeatures?: string[] | undefined
  entryPointType?: string | undefined
  label?: string | undefined
  meetingCode?: string | undefined
  passcode?: string | undefined
  password?: string | undefined
  pin?: string | undefined
  regionCode?: string | undefined
  uri?: string | undefined
}
type ConferenceParametersAddOnParameters = { parameters?: { [x: string]: string } | undefined }
type ConferenceParameters = { addOnParameters?: ConferenceParametersAddOnParameters | undefined }
type ConferenceData = {
  conferenceId?: string | undefined
  conferenceSolution?: ConferenceSolution | undefined
  createRequest?: CreateConferenceRequest | undefined
  entryPoints?: EntryPoint[] | undefined
  notes?: string | undefined
  parameters?: ConferenceParameters | undefined
  signature?: string | undefined
}
type EventDateTime = {
  date?: string | undefined
  dateTime?: string | undefined
  timeZone?: string | undefined
}
type EventFocusTimeProperties = {
  autoDeclineMode?: string | undefined
  chatStatus?: string | undefined
  declineMessage?: string | undefined
}
type EventOutOfOfficeProperties = {
  autoDeclineMode?: string | undefined
  declineMessage?: string | undefined
}
type EventWorkingLocationProperties = {
  customLocation?: { label?: string | undefined } | undefined
  homeOffice?: { [x: string]: unknown } | undefined
  officeLocation?:
    | {
        buildingId?: string | undefined
        deskId?: string | undefined
        floorId?: string | undefined
        floorSectionId?: string | undefined
        label?: string | undefined
      }
    | undefined
  type?: string | undefined
}
type Event = {
  anyoneCanAddSelf?: boolean | undefined
  attachments?: EventAttachment[] | undefined
  attendees?: EventAttendee[] | undefined
  attendeesOmitted?: boolean | undefined
  colorId?: string | undefined
  conferenceData?: ConferenceData | undefined
  created?: string | undefined
  creator?:
    | {
        displayName?: string | undefined
        email?: string | undefined
        id?: string | undefined
        self?: boolean | undefined
      }
    | undefined
  description?: string | undefined
  end?: EventDateTime | undefined
  endTimeUnspecified?: boolean | undefined
  etag?: string | undefined
  eventType?: string | undefined
  extendedProperties?:
    | {
        private?: { [x: string]: string } | undefined
        shared?: { [x: string]: string } | undefined
      }
    | undefined
  focusTimeProperties?: EventFocusTimeProperties | undefined
  gadget?:
    | {
        display?: string | undefined
        height?: number | undefined
        iconLink?: string | undefined
        link?: string | undefined
        preferences?: { [x: string]: string } | undefined
        title?: string | undefined
        type?: string | undefined
        width?: number | undefined
      }
    | undefined
  guestsCanInviteOthers?: boolean | undefined
  guestsCanModify?: boolean | undefined
  guestsCanSeeOtherGuests?: boolean | undefined
  hangoutLink?: string | undefined
  htmlLink?: string | undefined
  iCalUID?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  location?: string | undefined
  locked?: boolean | undefined
  organizer?:
    | {
        displayName?: string | undefined
        email?: string | undefined
        id?: string | undefined
        self?: boolean | undefined
      }
    | undefined
  originalStartTime?: EventDateTime | undefined
  outOfOfficeProperties?: EventOutOfOfficeProperties | undefined
  privateCopy?: boolean | undefined
  recurrence?: string[] | undefined
  recurringEventId?: string | undefined
  reminders?:
    | { overrides?: EventReminder[] | undefined; useDefault?: boolean | undefined }
    | undefined
  sequence?: number | undefined
  source?: { title?: string | undefined; url?: string | undefined } | undefined
  start?: EventDateTime | undefined
  status?: string | undefined
  summary?: string | undefined
  transparency?: string | undefined
  updated?: string | undefined
  visibility?: string | undefined
  workingLocationProperties?: EventWorkingLocationProperties | undefined
}
type Events = {
  accessRole?: string | undefined
  defaultReminders?: EventReminder[] | undefined
  description?: string | undefined
  etag?: string | undefined
  items?: Event[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
  summary?: string | undefined
  timeZone?: string | undefined
  updated?: string | undefined
}
type ColorDefinition = { background?: string | undefined; foreground?: string | undefined }
type Colors = {
  calendar?: { [x: string]: ColorDefinition } | undefined
  event?: { [x: string]: ColorDefinition } | undefined
  kind?: string | undefined
  updated?: string | undefined
}
type FreeBusyRequestItem = { id?: string | undefined }
type FreeBusyRequest = {
  calendarExpansionMax?: number | undefined
  groupExpansionMax?: number | undefined
  items?: FreeBusyRequestItem[] | undefined
  timeMax?: string | undefined
  timeMin?: string | undefined
  timeZone?: string | undefined
}
type TimePeriod = { end?: string | undefined; start?: string | undefined }
type Error = { domain?: string | undefined; reason?: string | undefined }
type FreeBusyCalendar = { busy?: TimePeriod[] | undefined; errors?: Error[] | undefined }
type FreeBusyGroup = { calendars?: string[] | undefined; errors?: Error[] | undefined }
type FreeBusyResponse = {
  calendars?: { [x: string]: FreeBusyCalendar } | undefined
  groups?: { [x: string]: FreeBusyGroup } | undefined
  kind?: string | undefined
  timeMax?: string | undefined
  timeMin?: string | undefined
}
type CalendarNotification = { method?: string | undefined; type?: string | undefined }
type CalendarListEntry = {
  accessRole?: string | undefined
  backgroundColor?: string | undefined
  colorId?: string | undefined
  conferenceProperties?: ConferenceProperties | undefined
  defaultReminders?: EventReminder[] | undefined
  deleted?: boolean | undefined
  description?: string | undefined
  etag?: string | undefined
  foregroundColor?: string | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  location?: string | undefined
  notificationSettings?: { notifications?: CalendarNotification[] | undefined } | undefined
  primary?: boolean | undefined
  selected?: boolean | undefined
  summary?: string | undefined
  summaryOverride?: string | undefined
  timeZone?: string | undefined
}
type CalendarList = {
  etag?: string | undefined
  items?: CalendarListEntry[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
}
type Setting = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  value?: string | undefined
}
type Settings = {
  etag?: string | undefined
  items?: Setting[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  nextSyncToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/calendars': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Calendar }
        output: Calendar
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId': {
      $delete: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Calendar
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Calendar }
        output: Calendar
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Calendar }
        output: Calendar
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/acl': {
      $get: {
        input: { param: { calendarId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            syncToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Acl
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            sendNotifications?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AclRule }
        output: AclRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/acl/watch': {
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            syncToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/acl/:ruleId': {
      $delete: {
        input: { param: { calendarId: string; ruleId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { calendarId: string; ruleId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AclRule
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { calendarId: string; ruleId: string } } & {
          query: {
            sendNotifications?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AclRule }
        output: AclRule
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { calendarId: string; ruleId: string } } & {
          query: {
            sendNotifications?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AclRule }
        output: AclRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/clear': {
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events': {
      $get: {
        input: { param: { calendarId: string } } & {
          query: {
            alwaysIncludeEmail?: boolean | undefined
            eventTypes?: ('default' | 'focusTime' | 'outOfOffice' | 'workingLocation')[] | undefined
            iCalUID?: string | undefined
            maxAttendees?: number | undefined
            maxResults?: number | undefined
            orderBy?: 'startTime' | 'updated' | undefined
            pageToken?: string | undefined
            privateExtendedProperty?: string[] | undefined
            q?: string | undefined
            sharedExtendedProperty?: string[] | undefined
            showDeleted?: boolean | undefined
            showHiddenInvitations?: boolean | undefined
            singleEvents?: boolean | undefined
            syncToken?: string | undefined
            timeMax?: string | undefined
            timeMin?: string | undefined
            timeZone?: string | undefined
            updatedMin?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Events
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            conferenceDataVersion?: number | undefined
            maxAttendees?: number | undefined
            sendNotifications?: boolean | undefined
            sendUpdates?: 'all' | 'externalOnly' | 'none' | undefined
            supportsAttachments?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Event }
        output: Event
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events/import': {
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            conferenceDataVersion?: number | undefined
            supportsAttachments?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Event }
        output: Event
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events/quickAdd': {
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            text: string
            sendNotifications?: boolean | undefined
            sendUpdates?: 'all' | 'externalOnly' | 'none' | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Event
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events/watch': {
      $post: {
        input: { param: { calendarId: string } } & {
          query: {
            alwaysIncludeEmail?: boolean | undefined
            eventTypes?: ('default' | 'focusTime' | 'outOfOffice' | 'workingLocation')[] | undefined
            iCalUID?: string | undefined
            maxAttendees?: number | undefined
            maxResults?: number | undefined
            orderBy?: 'startTime' | 'updated' | undefined
            pageToken?: string | undefined
            privateExtendedProperty?: string[] | undefined
            q?: string | undefined
            sharedExtendedProperty?: string[] | undefined
            showDeleted?: boolean | undefined
            showHiddenInvitations?: boolean | undefined
            singleEvents?: boolean | undefined
            syncToken?: string | undefined
            timeMax?: string | undefined
            timeMin?: string | undefined
            timeZone?: string | undefined
            updatedMin?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events/:eventId': {
      $delete: {
        input: { param: { calendarId: string; eventId: string } } & {
          query: {
            sendNotifications?: boolean | undefined
            sendUpdates?: 'all' | 'externalOnly' | 'none' | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { calendarId: string; eventId: string } } & {
          query: {
            alwaysIncludeEmail?: boolean | undefined
            maxAttendees?: number | undefined
            timeZone?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Event
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { calendarId: string; eventId: string } } & {
          query: {
            alwaysIncludeEmail?: boolean | undefined
            conferenceDataVersion?: number | undefined
            maxAttendees?: number | undefined
            sendNotifications?: boolean | undefined
            sendUpdates?: 'all' | 'externalOnly' | 'none' | undefined
            supportsAttachments?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Event }
        output: Event
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { calendarId: string; eventId: string } } & {
          query: {
            alwaysIncludeEmail?: boolean | undefined
            conferenceDataVersion?: number | undefined
            maxAttendees?: number | undefined
            sendNotifications?: boolean | undefined
            sendUpdates?: 'all' | 'externalOnly' | 'none' | undefined
            supportsAttachments?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Event }
        output: Event
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events/:eventId/instances': {
      $get: {
        input: { param: { calendarId: string; eventId: string } } & {
          query: {
            alwaysIncludeEmail?: boolean | undefined
            maxAttendees?: number | undefined
            maxResults?: number | undefined
            originalStart?: string | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            timeMax?: string | undefined
            timeMin?: string | undefined
            timeZone?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Events
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars/:calendarId/events/:eventId/move': {
      $post: {
        input: { param: { calendarId: string; eventId: string } } & {
          query: {
            destination: string
            sendNotifications?: boolean | undefined
            sendUpdates?: 'all' | 'externalOnly' | 'none' | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Event
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/stop': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/colors': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Colors
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/freeBusy': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: FreeBusyRequest }
        output: FreeBusyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/calendarList': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            minAccessRole?: 'freeBusyReader' | 'owner' | 'reader' | 'writer' | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            showHidden?: boolean | undefined
            syncToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CalendarList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            colorRgbFormat?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CalendarListEntry }
        output: CalendarListEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/calendarList/watch': {
      $post: {
        input: {
          query: {
            maxResults?: number | undefined
            minAccessRole?: 'freeBusyReader' | 'owner' | 'reader' | 'writer' | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            showHidden?: boolean | undefined
            syncToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/calendarList/:calendarId': {
      $delete: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { calendarId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CalendarListEntry
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { calendarId: string } } & {
          query: {
            colorRgbFormat?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CalendarListEntry }
        output: CalendarListEntry
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { calendarId: string } } & {
          query: {
            colorRgbFormat?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CalendarListEntry }
        output: CalendarListEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/settings': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            syncToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/settings/watch': {
      $post: {
        input: {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            syncToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/settings/:setting': {
      $get: {
        input: { param: { setting: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Setting
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
