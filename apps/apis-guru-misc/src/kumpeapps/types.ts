type InlineResponse_202 = { success?: boolean | undefined }
type InlineResponse_201 = { app_key: string; success?: boolean | undefined }
type InlineResponse_201_1 = { auth_key?: string | undefined; success?: boolean | undefined }
type _403 = { error?: string | undefined; success?: boolean | undefined }
type AllowanceAllowanceTransaction = {
  amount?: number | undefined
  date?: string | undefined
  transactionDescription?: string | undefined
  transactionId?: number | undefined
  transactionType?: string | undefined
  userId?: number | undefined
}
type Allowance = {
  allowanceTransaction?: AllowanceAllowanceTransaction[] | undefined
  balance?: number | undefined
  id?: number | undefined
  lastUpdated?: string | undefined
  success?: number | undefined
}
type Nodata = { error?: string | undefined; status?: number | undefined }
type _405 = { error?: string | undefined; success?: number | undefined }
type _412 = { error?: string | undefined; success?: number | undefined }
type Success = { message?: string | undefined; success?: boolean | undefined }
type Chore = {
  aiIcon?: string | undefined
  altitude?: number | undefined
  blockDash?: boolean | undefined
  choreDescription?: string | undefined
  choreName?: string | undefined
  choreNumber?: number | undefined
  day?: string | undefined
  extraAllowance?: number | undefined
  idChoreList?: number | undefined
  isCalendar?: boolean | undefined
  kid?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  nfcTag?: string | undefined
  notes?: string | undefined
  oneTime?: boolean | undefined
  optional?: boolean | undefined
  reassignable?: boolean | undefined
  reassigned?: boolean | undefined
  requireObjectDetection?: string | undefined
  startDate?: string | undefined
  status?: string | undefined
  stolen?: boolean | undefined
  stolenBy?: string | undefined
  updated?: string | undefined
  updatedBy?: string | undefined
}
type Chorelist = { chore?: Chore[] | undefined; success?: number | undefined }
type AddUserResponse = {
  added?: string | undefined
  aff_added?: string | undefined
  aff_id?: string | undefined
  aff_payout_type?: string | undefined
  avatar?: string | undefined
  city?: string | undefined
  comment?: string | undefined
  country?: string | undefined
  disable_lock_until?: string | undefined
  email?: string | undefined
  i_agree?: string | undefined
  is_affiliate?: string | undefined
  is_locked?: string | undefined
  lang?: string | undefined
  last_login?: string | undefined
  login?: string | undefined
  name_f?: string | undefined
  name_l?: string | undefined
  pass?: string | undefined
  pass_dattm?: string | undefined
  phone?: string | undefined
  pin?: string | undefined
  plain_password?: string | undefined
  remember_key?: string | undefined
  remote_addr?: string | undefined
  require_consent?: string | undefined
  reseller_id?: string | undefined
  saved_form_id?: string | undefined
  state?: string | undefined
  status?: string | undefined
  street?: string | undefined
  street2?: string | undefined
  subusers_parent_id?: string | undefined
  tax_id?: string | undefined
  unsubscribed?: string | undefined
  user_agent?: string | undefined
  user_id?: number | undefined
  zip?: string | undefined
}
type _201Share = { auth_link?: string | undefined; success?: boolean | undefined }
type User = {
  email?: string | undefined
  emoji?: string | undefined
  enableAllowance?: boolean | undefined
  enableBehaviorChart?: boolean | undefined
  enableChores?: boolean | undefined
  enableNoAds?: boolean | undefined
  enableObjectDetection?: boolean | undefined
  enableTmdb?: boolean | undefined
  firstName?: string | undefined
  homeId?: number | undefined
  isActive?: boolean | undefined
  isAdmin?: boolean | undefined
  isBanned?: boolean | undefined
  isChild?: boolean | undefined
  isDisabled?: boolean | undefined
  isLocked?: boolean | undefined
  isMaster?: boolean | undefined
  lastName?: string | undefined
  masterId?: number | undefined
  pushAllowance?: boolean | undefined
  pushAllowanceNew?: boolean | undefined
  pushChores?: boolean | undefined
  pushChoresNew?: boolean | undefined
  pushChoresReminders?: boolean | undefined
  tmdbKey?: string | undefined
  userId?: number | undefined
  username?: string | undefined
  weeklyAllowance?: number | undefined
}
type Userlist = { success?: boolean | undefined; user?: User[] | undefined }
type Wish = {
  description?: string | undefined
  id?: number | undefined
  link?: string | undefined
  master_id?: number | undefined
  priority?: number | undefined
  title?: string | undefined
  user_id?: number | undefined
}
type Wishlist = { success?: boolean | undefined; wish?: Wish[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/appkey': {
      $patch: {
        input: { query: { app_key: string; comments?: string | undefined } }
        output: InlineResponse_202
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { query: { username: string; password: string; supportsYubikey: boolean } }
        output: InlineResponse_201
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { query: { app_key: string } }
        output: InlineResponse_202
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/authentication/appkey': {
      $patch: {
        input: { query: { app_key: string; comments?: string | undefined } }
        output: InlineResponse_202
        outputFormat: 'json'
        status: 202
      }
      $post: {
        input: { query: { username: string; password: string; supportsYubikey: boolean } }
        output: InlineResponse_201
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { query: { app_key: string } }
        output: InlineResponse_202
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/authentication/authkey': {
      $get:
        | {
            input: {
              query: {
                username: string
                password: string
                otp?: string | undefined
                deviceName?: string | undefined
                identifierForVendor?: string | undefined
              }
            }
            output: InlineResponse_201_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                username: string
                password: string
                otp?: string | undefined
                deviceName?: string | undefined
                identifierForVendor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                username: string
                password: string
                otp?: string | undefined
                deviceName?: string | undefined
                identifierForVendor?: string | undefined
              }
            }
            output: _403
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { query: { auth_key: string; comments?: string | undefined } }
            output: InlineResponse_202
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { auth_key: string; comments?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: InlineResponse_201_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: _403
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { query: { auth_key: string } }
            output: InlineResponse_202
            outputFormat: 'json'
            status: 202
          }
        | { input: { query: { auth_key: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/authentication/verifyotp': {
      $get:
        | { input: { query: { otp: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { otp: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { otp: string } }; output: _403; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/authkey': {
      $get:
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: InlineResponse_201_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: _403
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { query: { auth_key: string; comments?: string | undefined } }
            output: InlineResponse_202
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { auth_key: string; comments?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: InlineResponse_201_1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { username: string; password: string; otp?: string | undefined } }
            output: _403
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { query: { auth_key: string } }
            output: InlineResponse_202
            outputFormat: 'json'
            status: 202
          }
        | { input: { query: { auth_key: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/kkid/allowance': {
      $get:
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: Allowance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { kidUserId: number; transactionDays?: number | undefined } }
            output: _412
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                kidUserId: number
                amount: number
                description: string
                transactionType: 'Add' | 'Subtract'
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/kkid/apns': {
      $post:
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                kidUserId: number
                tool: 'register' | 'subscribe' | 'unsubscribe' | 'send'
                token?: string | undefined
                devicename?: string | undefined
                title?: string | undefined
                message?: string | undefined
                badge?: number | undefined
                sound?: string | undefined
                section?:
                  | 'Chores'
                  | 'Chores-New'
                  | 'Chores-Reminders'
                  | 'Allowance'
                  | 'Allowance-New'
                  | 'WishList'
                  | undefined
                priority?: 'passive' | 'active' | 'time-sensitive' | 'critical' | undefined
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/kkid/chorelist': {
      $delete:
        | {
            input: { query: { idChoreList: number } }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { idChoreList: number } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { idChoreList: number } }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: { query: { idChoreList: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { idChoreList: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { idChoreList: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { idChoreList: number } }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { idChoreList: number } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { idChoreList: number } }
            output: _412
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: Chorelist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                kidUsername?: string | undefined
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | undefined
                status?: string | undefined
                blockDash?: boolean | undefined
                optional?: boolean | undefined
                canSteal?: boolean | undefined
                includeCalendar?: boolean | undefined
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                kidUsername: string
                day?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                nfcTag?: string | undefined
                status?: string | undefined
                choreName: string
                choreDescription?: string | undefined
                choreNumber?: number | undefined
                blockDash?: boolean | undefined
                oneTime?: boolean | undefined
                extraAllowance?: number | undefined
                optional?: boolean | undefined
                reassignable?: boolean | undefined
                canSteal?: boolean | undefined
                startDate?: string | undefined
                notes?: string | undefined
                requireObjectDetection?: boolean | undefined
                objectDetectionTag?: string | undefined
                updatedByAutomation?: boolean | undefined
                aiIcon?: string | undefined
                isCalendar?: boolean | undefined
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: Nodata
            outputFormat: 'json'
            status: 206
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                idChoreList: number
                status?: string | undefined
                stolen?: boolean | undefined
                stolenBy?: string | undefined
                nfcTag?: string | undefined
                notes?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                altitude?: number | undefined
                updatedByAutomation?: boolean | undefined
                whereDay?:
                  | 'Sunday'
                  | 'Monday'
                  | 'Tuesday'
                  | 'Wednesday'
                  | 'Thursday'
                  | 'Friday'
                  | 'Saturday'
                  | 'Weekly'
                  | 'Today'
                  | undefined
                whereStatus?: string | undefined
                whereName?: string | undefined
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/kkid/masteruser': {
      $post:
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: AddUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/kkid/share': {
      $get: {
        input: {
          query: {
            linkUserId: string
            link:
              | 'https://khome.kumpeapps.com/portal/wish-list.php'
              | 'https://khome.kumpeapps.com/portal/chores-today.php'
            scope: 'WishList' | 'WishListAdmin' | 'Chores' | 'ChoresAdmin'
            scope2?: 'WishList' | 'WishListAdmin' | 'Chores' | 'ChoresAdmin' | undefined
            scope3?: 'WishList' | 'WishListAdmin' | 'Chores' | 'ChoresAdmin' | undefined
            scope4?: 'WishList' | 'WishListAdmin' | 'Chores' | 'ChoresAdmin' | undefined
          }
        }
        output: _201Share
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/kkid/user': {
      $get: {
        input: { query: { enableBool?: boolean | undefined } }
        output: Userlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kkid/userlist': {
      $delete:
        | { input: { query: { userID: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { userID: number } }; output: {}; outputFormat: string; status: 202 }
        | { input: { query: { userID: number } }; output: _405; outputFormat: 'json'; status: 405 }
        | { input: { query: { userID: number } }; output: {}; outputFormat: string; status: 409 }
        | { input: { query: { userID: number } }; output: _412; outputFormat: 'json'; status: 412 }
      $get:
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: Userlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: Nodata
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                isChild?: boolean | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableChores?: boolean | undefined
                userID?: number | undefined
                username?: string | undefined
                email?: string | undefined
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
      $post:
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: AddUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                username: string
                password: string
                email: string
                firstName: string
                lastName: string
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
      $put:
        | {
            input: {
              query: {
                userID: number
                username: string
                email: string
                firstName: string
                lastName: string
                emoji?: string | undefined
                tmdbKey?: string | undefined
                enableWishList?: boolean | undefined
                enableChores?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableAdmin?: boolean | undefined
                enableTmdb?: boolean | undefined
                enableObjectDetection?: boolean | undefined
              }
            }
            output: AddUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userID: number
                username: string
                email: string
                firstName: string
                lastName: string
                emoji?: string | undefined
                tmdbKey?: string | undefined
                enableWishList?: boolean | undefined
                enableChores?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableAdmin?: boolean | undefined
                enableTmdb?: boolean | undefined
                enableObjectDetection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              query: {
                userID: number
                username: string
                email: string
                firstName: string
                lastName: string
                emoji?: string | undefined
                tmdbKey?: string | undefined
                enableWishList?: boolean | undefined
                enableChores?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableAdmin?: boolean | undefined
                enableTmdb?: boolean | undefined
                enableObjectDetection?: boolean | undefined
              }
            }
            output: _405
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                userID: number
                username: string
                email: string
                firstName: string
                lastName: string
                emoji?: string | undefined
                tmdbKey?: string | undefined
                enableWishList?: boolean | undefined
                enableChores?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableAdmin?: boolean | undefined
                enableTmdb?: boolean | undefined
                enableObjectDetection?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                userID: number
                username: string
                email: string
                firstName: string
                lastName: string
                emoji?: string | undefined
                tmdbKey?: string | undefined
                enableWishList?: boolean | undefined
                enableChores?: boolean | undefined
                enableAllowance?: boolean | undefined
                enableAdmin?: boolean | undefined
                enableTmdb?: boolean | undefined
                enableObjectDetection?: boolean | undefined
              }
            }
            output: _412
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/kkid/wishlist': {
      $delete: {
        input: { query: { wishId: number } }
        output: Success
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { kidUserId?: number | undefined } }
        output: Wishlist
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            kidUserId: number
            title: string
            description?: string | undefined
            priority?: number | undefined
            link?: string | undefined
          }
        }
        output: Success
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: {
          query: {
            wishId: number
            title?: string | undefined
            description?: string | undefined
            priority?: number | undefined
            link?: string | undefined
          }
        }
        output: Success
        outputFormat: 'json'
        status: 201
      }
    }
  },
  '/'
>
export default routes
