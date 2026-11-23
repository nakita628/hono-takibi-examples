type RequestCodeRequestBody = {
  cc: string
  cert: string
  method: 'sms' | 'voice'
  phone_number: string
  pin?: string | undefined
}
type RequestCodeAccount = { vname?: string | undefined }
type RequestCodeResponse = { account?: RequestCodeAccount[] | undefined }
type SetShardsRequestBody = {
  cc: string
  phone_number: string
  pin: string
  shards: '1' | '2' | '4' | '8' | '16' | '32'
}
type RegisterAccountRequestBody = { code: string }
type CheckContactRequestBody = { blocking?: 'no_wait' | 'wait' | undefined; contacts: string[] }
type Error = {
  code?: number | undefined
  details?: string | undefined
  href?: string | undefined
  title?: string | undefined
}
type Meta = {
  api_status?: 'deprecated' | 'experimental' | 'stable' | undefined
  version?: string | undefined
}
type CheckContact = {
  input?: string | undefined
  status?: 'processing' | 'valid' | 'invalid' | undefined
  wa_id?: string | undefined
}
type CheckContactResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  contacts?: CheckContact[] | undefined
}
type Group = { creation_time?: number | undefined; id?: string | undefined }
type GroupsResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  groups?: Group[] | undefined
}
type CreateGroupRequestBody = { subject: string }
type GroupInfo = {
  admins?: string[] | undefined
  creation_time?: number | undefined
  creator?: string | undefined
  participants?: string[] | undefined
  subject?: string | undefined
}
type GroupResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  groups?: GroupInfo[] | undefined
}
type UpdateGroupInfoRequestBody = { subject: string }
type GroupAdminRequestBody = { wa_ids: string[] }
type GroupInvite = { link?: string | undefined }
type GroupInviteResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  groups?: GroupInvite[] | undefined
}
type RemoveGroupParticipantRequestBody = { wa_ids: string[] }
type UploadMedia = { id?: string | undefined }
type UploadMediaResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  media?: UploadMedia[] | undefined
}
type AudioById = { id: string }
type Provider = { name: string }
type AudioByProvider = { link: string; provider: Provider }
type Audio = AudioById | AudioByProvider
type Address = {
  city: string
  country: string
  country_code: string
  state: string
  street: string
  type: string
  zip: string
}
type Email = { email: string; type: string }
type Name = {
  first_name?: string | undefined
  formatted_name: string
  last_name?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
}
type Org = { company: string; department?: string | undefined; title?: string | undefined }
type Phone = { phone?: string | undefined; type?: string | undefined; wa_id?: string | undefined }
type Url = { type?: string | undefined; url?: string | undefined }
type Contact = {
  addresses?: Address[] | undefined
  birthday?: string | undefined
  emails?: Email[] | undefined
  ims?: string[] | undefined
  name?: Name | undefined
  org?: Org | undefined
  phones?: Phone[] | undefined
  urls?: Url[] | undefined
}
type DocumentById = { caption: string; filename: string; id: string }
type DocumentByProvider = { caption: string; filename: string; link: string; provider: Provider }
type Document = DocumentById | DocumentByProvider
type Language = { code: string; policy: 'fallback' | 'deterministic' }
type Currency = { amount_1000: number; currency_code: string }
type DateTimeComponent = {
  day_of_month?: number | undefined
  day_of_week?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | undefined
  hour?: number | undefined
  minute?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type DateTimeUnixEpoch = { timestamp?: number | undefined }
type DateTimeObject = {
  component?: DateTimeComponent | undefined
  unix_epoch?: DateTimeUnixEpoch | undefined
}
type LocalizableParam = {
  currency?: Currency | undefined
  date_time?: DateTimeObject | undefined
  default: string
}
type Hsm = {
  element_name: string
  language: Language
  localizable_params: LocalizableParam[]
  namespace: string
}
type ImageById = { caption: string; id: string }
type ImageByProvider = { caption: string; link: string; provider: Provider }
type Image = ImageById | ImageByProvider
type Location = { address: string; latitude: string; longitude: string; name: string }
type Text = { body: string }
type MessageType =
  | 'audio'
  | 'contacts'
  | 'document'
  | 'hsm'
  | 'image'
  | 'location'
  | 'text'
  | 'video'
  | 'voice'
  | 'unknown'
type VideoById = { caption: string; id: string }
type VideoByProvider = { caption: string; link: string; provider: Provider }
type Video = VideoById | VideoByProvider
type SendMessageRequestBody = {
  audio?: Audio | undefined
  contacts?: Contact[] | undefined
  document?: Document | undefined
  hsm?: Hsm | undefined
  image?: Image | undefined
  location?: Location | undefined
  preview_url?: boolean | undefined
  recipient_type?: 'individual' | 'group' | undefined
  text?: Text | undefined
  to: string
  ttl?: { [x: string]: unknown } | undefined
  type?: MessageType | undefined
  video?: Video | undefined
}
type Message = { id?: string | undefined }
type MessageResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  messages?: Message[] | undefined
}
type MarkMessageAsReadRequestBody = { status: string }
type EnableTwoStepRequestBody = { pin: string }
type Media = { auto_download: ('audio' | 'document' | 'voice' | 'video' | 'image.')[] }
type Webhooks = {
  max_concurrent_requests?: '6' | '12' | '18' | '24' | undefined
  url?: string | undefined
}
type ApplicationSettings = {
  callback_backoff_delay_ms?: string | undefined
  callback_persist?: boolean | undefined
  heartbeat_interval?: number | undefined
  max_callback_backoff_delay_ms?: string | undefined
  media?: Media | undefined
  on_call_pager?: string | undefined
  pass_through?: boolean | undefined
  sent_status?: boolean | undefined
  unhealthy_interval?: number | undefined
  webhooks?: Webhooks | undefined
}
type Response = { errors?: Error[] | undefined; meta?: Meta | undefined }
type ConfigBearer = { bearer: string }
type Basic = { password?: string | undefined; username?: string | undefined }
type ConfigBasic = { basic?: Basic | undefined }
type Config = ConfigBearer | ConfigBasic
type MediaProvider = {
  config?: Config | undefined
  name?: string | undefined
  type?: string | undefined
}
type MediaProviderSettingsApplicationMedia = { providers?: MediaProvider[] | undefined }
type MediaProviderSettingsApplication = {
  media?: MediaProviderSettingsApplicationMedia | undefined
}
type MediaProviderSettings = { application?: MediaProviderSettingsApplication | undefined }
type GetMediaProvidersResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  settings?: MediaProviderSettings | undefined
}
type BackupSettingsRequestBody = { password: string }
type BackupSettings = { data?: string | undefined }
type BackupSettingsResponse = { settings?: BackupSettings | undefined }
type BusinessProfile = {
  address: string
  description: string
  email: string
  vertical: string
  websites: string[]
}
type BusinessSettingsBusiness = { profile?: BusinessProfile | undefined }
type BusinessSettings = { business?: BusinessSettingsBusiness | undefined }
type GetBusinessProfileResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  settings?: BusinessSettings | undefined
}
type ProfileAbout = { text: string }
type ProfileAboutSettingsProfile = { about?: ProfileAbout | undefined }
type ProfileAboutSettings = { profile?: ProfileAboutSettingsProfile | undefined }
type GetProfileAboutResponse = { settings?: ProfileAboutSettings | undefined }
type ProfilePhotoSettings = {
  profile?: { photo?: { link?: string | undefined } | undefined } | undefined
}
type GetProfilePhotoResponse = { settings?: ProfilePhotoSettings | undefined }
type RestoreSettingsRequestBody = { data: string; password: string }
type CreateUserRequestBody = { password: string; username: string }
type UserResponseItem = { username?: string | undefined }
type UserResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  users?: UserResponseItem[] | undefined
}
type LoginAdminRequestBody = { new_password: string }
type UserLoginResponseItem = { expires_after?: string | undefined; token?: string | undefined }
type UserLoginResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  users?: UserLoginResponseItem[] | undefined
}
type UserRole = 'ROLE_ADMIN' | 'ROLE_USER'
type DetailedUserResponseItem = { ROLES?: UserRole | undefined; username?: string | undefined }
type DetailedUserResponse = {
  errors?: Error[] | undefined
  meta?: Meta | undefined
  users?: DetailedUserResponseItem[] | undefined
}
type UpdateUserRequestBody = { password: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $post:
        | { input: { json: RequestCodeRequestBody }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: RequestCodeRequestBody }
            output: RequestCodeResponse
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/account/shards': {
      $post: {
        input: { json: SetShardsRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/account/verify': {
      $post: {
        input: { json: RegisterAccountRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/certificates/external': {
      $post: { input: { json: File }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/certificates/external/ca': {
      $get: { input: {}; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/certificates/webhooks/ca': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: File; outputFormat: 'text'; status: 200 }
      $post: { input: { json: File }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/contacts': {
      $post: {
        input: { json: CheckContactRequestBody }
        output: CheckContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups': {
      $get: { input: {}; output: GroupsResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateGroupRequestBody }
        output: GroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:GroupId': {
      $get: {
        input: { param: { GroupId: string } }
        output: GroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { GroupId: string } } & { json: UpdateGroupInfoRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/groups/:GroupId/admins': {
      $delete: {
        input: { param: { GroupId: string } } & { json: GroupAdminRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { GroupId: string } } & { json: GroupAdminRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/groups/:GroupId/icon': {
      $delete: {
        input: { param: { GroupId: string } } & { form: { File: File } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { GroupId: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { GroupId: string } } & { form: { File: File } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/groups/:GroupId/invite': {
      $delete: {
        input: { param: { GroupId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { GroupId: string } }
        output: GroupInviteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:GroupId/leave': {
      $post: {
        input: { param: { GroupId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/groups/:GroupId/participants': {
      $delete: {
        input: { param: { GroupId: string } } & { json: RemoveGroupParticipantRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/health': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/media': {
      $post: {
        input: { json: File }
        output: UploadMediaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media/:MediaId': {
      $delete: {
        input: { param: { MediaId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { MediaId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/messages': {
      $post: {
        input: { json: SendMessageRequestBody }
        output: MessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/messages/:MessageID': {
      $put: {
        input: { param: { MessageID: string } } & { json: MarkMessageAsReadRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/metrics': {
      $get:
        | {
            input: { query: { format?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/settings/account/two-step': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: EnableTwoStepRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/settings/application': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: ApplicationSettings; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { json: ApplicationSettings }
        output: Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/application/media/providers': {
      $get: { input: {}; output: GetMediaProvidersResponse; outputFormat: 'json'; status: 200 }
      $post: { input: { json: MediaProvider[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/settings/application/media/providers/:ProviderName': {
      $delete: {
        input: { param: { ProviderName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/settings/backup': {
      $post: {
        input: { json: BackupSettingsRequestBody }
        output: BackupSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/business/profile': {
      $get: { input: {}; output: GetBusinessProfileResponse; outputFormat: 'json'; status: 200 }
      $post: { input: { json: BusinessProfile }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/settings/profile/about': {
      $get: { input: {}; output: GetProfileAboutResponse; outputFormat: 'json'; status: 200 }
      $patch: { input: { json: ProfileAbout }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/settings/profile/photo': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { query: { format?: string | undefined } }
            output: GetProfilePhotoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
      $post: { input: { form: { File: File } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/settings/restore': {
      $post: {
        input: { json: RestoreSettingsRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/stats/app': {
      $get:
        | {
            input: { query: { format?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/stats/db': {
      $get:
        | {
            input: { query: { format?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/support': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users': {
      $post: {
        input: { json: CreateUserRequestBody }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/login': {
      $post: {
        input: { json: LoginAdminRequestBody }
        output: UserLoginResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/logout': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/users/:UserUsername': {
      $delete: {
        input: { param: { UserUsername: string } }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { UserUsername: string } }
        output: DetailedUserResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { UserUsername: string } } & { json: UpdateUserRequestBody }
        output: UserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
