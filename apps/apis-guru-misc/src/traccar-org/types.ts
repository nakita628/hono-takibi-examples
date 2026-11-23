type Attribute = {
  attribute?: string | undefined
  description?: string | undefined
  expression?: string | undefined
  id?: number | undefined
  type?: string | undefined
}
type Calendar = {
  attributes?: { [x: string]: unknown } | undefined
  data?: string | undefined
  id?: number | undefined
  name?: string | undefined
}
type Command = {
  attributes?: { [x: string]: unknown } | undefined
  description?: string | undefined
  deviceId?: number | undefined
  id?: number | undefined
  type?: string | undefined
}
type CommandType = { type?: string | undefined }
type Device = {
  attributes?: { [x: string]: unknown } | undefined
  category?: string | undefined
  contact?: string | undefined
  disabled?: boolean | undefined
  geofenceIds?: number[] | undefined
  groupId?: number | undefined
  id?: number | undefined
  lastUpdate?: string | undefined
  model?: string | undefined
  name?: string | undefined
  phone?: string | undefined
  positionId?: number | undefined
  status?: string | undefined
  uniqueId?: string | undefined
}
type DeviceAccumulators = {
  deviceId?: number | undefined
  hours?: number | undefined
  totalDistance?: number | undefined
}
type Driver = {
  attributes?: { [x: string]: unknown } | undefined
  id?: number | undefined
  name?: string | undefined
  uniqueId?: string | undefined
}
type Event = {
  attributes?: { [x: string]: unknown } | undefined
  deviceId?: number | undefined
  eventTime?: string | undefined
  geofenceId?: number | undefined
  id?: number | undefined
  maintenanceId?: number | undefined
  positionId?: number | undefined
  type?: string | undefined
}
type Geofence = {
  area?: string | undefined
  attributes?: { [x: string]: unknown } | undefined
  calendarId?: number | undefined
  description?: string | undefined
  id?: number | undefined
  name?: string | undefined
}
type Group = {
  attributes?: { [x: string]: unknown } | undefined
  groupId?: number | undefined
  id?: number | undefined
  name?: string | undefined
}
type Maintenance = {
  attributes?: { [x: string]: unknown } | undefined
  id?: number | undefined
  name?: string | undefined
  period?: number | undefined
  start?: number | undefined
  type?: string | undefined
}
type Notification = {
  always?: boolean | undefined
  attributes?: { [x: string]: unknown } | undefined
  calendarId?: number | undefined
  id?: number | undefined
  mail?: boolean | undefined
  sms?: boolean | undefined
  type?: string | undefined
  web?: boolean | undefined
}
type NotificationType = { type?: string | undefined }
type Permission = {
  attributeId?: number | undefined
  calendarId?: number | undefined
  deviceId?: number | undefined
  driverId?: number | undefined
  geofenceId?: number | undefined
  groupId?: number | undefined
  managedUserId?: number | undefined
  notificationId?: number | undefined
  userId?: number | undefined
}
type Position = {
  accuracy?: number | undefined
  address?: string | undefined
  altitude?: number | undefined
  attributes?: { [x: string]: unknown } | undefined
  course?: number | undefined
  deviceId?: number | undefined
  deviceTime?: string | undefined
  fixTime?: string | undefined
  id?: number | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  network?: { [x: string]: unknown } | undefined
  outdated?: boolean | undefined
  protocol?: string | undefined
  serverTime?: string | undefined
  speed?: number | undefined
  valid?: boolean | undefined
}
type ReportStops = {
  address?: string | undefined
  deviceId?: number | undefined
  deviceName?: string | undefined
  duration?: number | undefined
  endTime?: string | undefined
  engineHours?: number | undefined
  lat?: number | undefined
  lon?: number | undefined
  spentFuel?: number | undefined
  startTime?: string | undefined
}
type ReportSummary = {
  averageSpeed?: number | undefined
  deviceId?: number | undefined
  deviceName?: string | undefined
  distance?: number | undefined
  engineHours?: number | undefined
  maxSpeed?: number | undefined
  spentFuel?: number | undefined
}
type ReportTrips = {
  averageSpeed?: number | undefined
  deviceId?: number | undefined
  deviceName?: string | undefined
  distance?: number | undefined
  driverName?: string | undefined
  driverUniqueId?: number | undefined
  duration?: number | undefined
  endAddress?: string | undefined
  endLat?: number | undefined
  endLon?: number | undefined
  endTime?: string | undefined
  maxSpeed?: number | undefined
  spentFuel?: number | undefined
  startAddress?: string | undefined
  startLat?: number | undefined
  startLon?: number | undefined
  startTime?: string | undefined
}
type Server = {
  attributes?: { [x: string]: unknown } | undefined
  bingKey?: string | undefined
  coordinateFormat?: string | undefined
  deviceReadonly?: boolean | undefined
  forceSettings?: boolean | undefined
  id?: number | undefined
  latitude?: number | undefined
  limitCommands?: boolean | undefined
  longitude?: number | undefined
  map?: string | undefined
  mapUrl?: string | undefined
  poiLayer?: string | undefined
  readonly?: boolean | undefined
  registration?: boolean | undefined
  twelveHourFormat?: boolean | undefined
  version?: string | undefined
  zoom?: number | undefined
}
type User = {
  administrator?: boolean | undefined
  attributes?: { [x: string]: unknown } | undefined
  coordinateFormat?: string | undefined
  deviceLimit?: number | undefined
  deviceReadonly?: boolean | undefined
  disabled?: boolean | undefined
  email?: string | undefined
  expirationTime?: string | undefined
  id?: number | undefined
  latitude?: number | undefined
  limitCommands?: boolean | undefined
  longitude?: number | undefined
  map?: string | undefined
  name?: string | undefined
  password?: string | undefined
  phone?: string | undefined
  poiLayer?: string | undefined
  readonly?: boolean | undefined
  twelveHourFormat?: boolean | undefined
  userLimit?: number | undefined
  zoom?: number | undefined
}
type Statistics = {
  activeDevices?: number | undefined
  activeUsers?: number | undefined
  captureTime?: string | undefined
  messagesReceived?: number | undefined
  messagesStored?: number | undefined
  requests?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/attributes/computed': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            userId?: number | undefined
            deviceId?: number | undefined
            groupId?: number | undefined
            refresh?: boolean | undefined
          }
        }
        output: Attribute[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Attribute }; output: Attribute; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/attributes/computed/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Attribute }
        output: Attribute
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendars': {
      $get: {
        input: { query: { all?: boolean | undefined; userId?: number | undefined } }
        output: Calendar[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Calendar }; output: Calendar; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/calendars/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Calendar }
        output: Calendar
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/commands': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            userId?: number | undefined
            deviceId?: number | undefined
            groupId?: number | undefined
            refresh?: boolean | undefined
          }
        }
        output: Command[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Command }; output: Command; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/commands/send': {
      $get:
        | {
            input: { query: { deviceId?: number | undefined } }
            output: Command[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { deviceId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | { input: { json: Command }; output: Command; outputFormat: 'json'; status: 200 }
        | { input: { json: Command }; output: Command; outputFormat: 'json'; status: 202 }
        | { input: { json: Command }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/commands/types': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number | undefined
                protocol?: string | undefined
                textChannel?: boolean | undefined
              }
            }
            output: CommandType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number | undefined
                protocol?: string | undefined
                textChannel?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/commands/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Command }
        output: Command
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices': {
      $get:
        | {
            input: {
              query: {
                all?: boolean | undefined
                userId?: number | undefined
                id?: number | undefined
                uniqueId?: string | undefined
              }
            }
            output: Device[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                all?: boolean | undefined
                userId?: number | undefined
                id?: number | undefined
                uniqueId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post: { input: { json: Device }; output: Device; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/devices/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Device }
        output: Device
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:id/accumulators': {
      $put: {
        input: { param: { id: number } } & { json: DeviceAccumulators }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/drivers': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            userId?: number | undefined
            deviceId?: number | undefined
            groupId?: number | undefined
            refresh?: boolean | undefined
          }
        }
        output: Driver[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Driver }; output: Driver; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/drivers/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Driver }
        output: Driver
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/events/:id': {
      $get: { input: { param: { id: number } }; output: Event; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/geofences': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            userId?: number | undefined
            deviceId?: number | undefined
            groupId?: number | undefined
            refresh?: boolean | undefined
          }
        }
        output: Geofence[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Geofence }; output: Geofence; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/geofences/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Geofence }
        output: Geofence
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups': {
      $get: {
        input: { query: { all?: boolean | undefined; userId?: number | undefined } }
        output: Group[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: Group }; output: Group; outputFormat: 'json'; status: 200 }
        | { input: { json: Group }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/groups/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Group }
        output: Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/maintenance': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            userId?: number | undefined
            deviceId?: number | undefined
            groupId?: number | undefined
            refresh?: boolean | undefined
          }
        }
        output: Maintenance[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Maintenance }
        output: Maintenance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/maintenance/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Maintenance }
        output: Maintenance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications': {
      $get: {
        input: {
          query: {
            all?: boolean | undefined
            userId?: number | undefined
            deviceId?: number | undefined
            groupId?: number | undefined
            refresh?: boolean | undefined
          }
        }
        output: Notification[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Notification }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications/test': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/notifications/types': {
      $get: { input: {}; output: NotificationType[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notifications/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: Notification }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/permissions': {
      $delete: { input: { json: Permission }; output: {}; outputFormat: string; status: 204 }
      $post:
        | { input: { json: Permission }; output: Permission; outputFormat: 'json'; status: 200 }
        | { input: { json: Permission }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/positions': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number | undefined
                from?: string | undefined
                to?: string | undefined
                id?: number | undefined
              }
            }
            output: Position[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number | undefined
                from?: string | undefined
                to?: string | undefined
                id?: number | undefined
              }
            }
            output: Position[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number | undefined
                from?: string | undefined
                to?: string | undefined
                id?: number | undefined
              }
            }
            output: Position[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reports/events': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                type?: string[] | undefined
                from: string
                to: string
              }
            }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                type?: string[] | undefined
                from: string
                to: string
              }
            }
            output: Event[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reports/route': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: Position[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: Position[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reports/stops': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: ReportStops[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: ReportStops[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reports/summary': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: ReportSummary[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: ReportSummary[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reports/trips': {
      $get:
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: ReportTrips[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: number[] | undefined
                groupId?: number[] | undefined
                from: string
                to: string
              }
            }
            output: ReportTrips[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/server': {
      $get: { input: {}; output: Server; outputFormat: 'json'; status: 200 }
      $put: { input: { json: Server }; output: Server; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/session': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { query: { token?: string | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: { email: string; password: string } } & {
              form: { email: string; password: string }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; password: string } } & {
              form: { email: string; password: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/statistics': {
      $get: {
        input: { query: { from: string; to: string } }
        output: Statistics[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { query: { userId?: string | undefined } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post: { input: { json: User }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: number } } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
