import { createRoute, z } from '@hono/zod-openapi'

const CreateNetworkSmTargetGroupCreatenetworksmtargetgroupRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .exactOptional()
            .openapi({ description: 'The name of this target group' }),
          scope: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.',
            }),
        })
        .openapi({
          example: { name: 'My target group', scope: 'none', tags: '[]', type: 'devices' },
          required: [],
        }),
    },
  },
}

const UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRequestBody =
  {
    content: {
      'application/json': {
        schema: z
          .object({
            rules: z
              .array(
                z
                  .object({
                    comment: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Description of the rule (optional)' }),
                    destCidr: z
                      .string()
                      .openapi({
                        description:
                          "Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'",
                      }),
                    destPort: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'",
                      }),
                    policy: z
                      .enum(['allow', 'deny'])
                      .openapi({ description: "'allow' or 'deny' traffic specified by this rule" }),
                    protocol: z
                      .enum(['any', 'icmp', 'icmp6', 'tcp', 'udp'])
                      .openapi({
                        description:
                          "The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')",
                      }),
                    srcCidr: z
                      .string()
                      .openapi({
                        description:
                          "Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)",
                      }),
                    srcPort: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'",
                      }),
                    syslogEnabled: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)',
                      }),
                  })
                  .openapi({ required: ['policy', 'protocol', 'srcCidr', 'destCidr'] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'An ordered array of the firewall rules (not including the default rule)',
              }),
            syslogDefaultRule: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  "Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)",
              }),
          })
          .openapi({
            example: {
              rules: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
            required: [],
          }),
      },
    },
  }

const MerakiApiKeySecurityScheme = { in: 'header', name: 'X-Cisco-Meraki-API-Key', type: 'apiKey' }

export const getDevicesSerialCameraAnalyticsLiveRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/analytics/live',
  tags: ['MV Sense'],
  summary: 'Returns live state from camera of analytics zones',
  description: 'Returns live state from camera of analytics zones',
  operationId: 'getDeviceCameraAnalyticsLive',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: { value: { ts: '2018-08-15T18:32:38.123Z', zones: { '0': { person: 0 } } } },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCameraAnalyticsOverviewRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/analytics/overview',
  tags: ['MV Sense'],
  summary: 'Returns an overview of aggregate analytics data for a timespan',
  description: 'Returns an overview of aggregate analytics data for a timespan',
  operationId: 'getDeviceCameraAnalyticsOverview',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 365 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      objectType: z
        .enum(['person', 'vehicle'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].',
            in: 'query',
            name: 'objectType',
            schema: { enum: ['person', 'vehicle'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  averageCount: 5,
                  endTs: '2018-08-15T18:33:38.123Z',
                  entrances: 254,
                  startTs: '2018-08-15T18:32:38.123Z',
                  zoneId: 0,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCameraAnalyticsRecentRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/analytics/recent',
  tags: ['MV Sense'],
  summary: 'Returns most recent record for analytics zones',
  description: 'Returns most recent record for analytics zones',
  operationId: 'getDeviceCameraAnalyticsRecent',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      objectType: z
        .enum(['person', 'vehicle'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].',
            in: 'query',
            name: 'objectType',
            schema: { enum: ['person', 'vehicle'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  averageCount: 2.54,
                  endTs: '2018-08-15T18:33:38.123Z',
                  entrances: 10,
                  startTs: '2018-08-15T18:32:38.123Z',
                  zoneId: 0,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCameraAnalyticsZonesRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/analytics/zones',
  tags: ['MV Sense'],
  summary: 'Returns all configured analytic zones for this camera',
  description: 'Returns all configured analytic zones for this camera',
  operationId: 'getDeviceCameraAnalyticsZones',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  id: '0',
                  label: 'Full Frame',
                  regionOfInterest: { x0: '0.00', x1: '1.00', y0: '0.00', y1: '1.00' },
                  type: 'occupancy',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/analytics/zones/{zoneId}/history',
  tags: ['MV Sense'],
  summary: 'Return historical records for analytic zones',
  description: 'Return historical records for analytic zones',
  operationId: 'getDeviceCameraAnalyticsZoneHistory',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
      zoneId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'zoneId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 365 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      resolution: z
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
              'The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.',
            in: 'query',
            name: 'resolution',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      objectType: z
        .enum(['person', 'vehicle'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].',
            in: 'query',
            name: 'objectType',
            schema: { enum: ['person', 'vehicle'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  averageCount: 1.5,
                  endTs: '2018-08-15T18:33:38.123Z',
                  entrances: 5,
                  startTs: '2018-08-15T18:32:38.123Z',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCameraQualityAndRetentionSettingsRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/qualityAndRetentionSettings',
  tags: ['Cameras'],
  summary: 'Returns quality and retention settings for the given camera',
  description: 'Returns quality and retention settings for the given camera',
  operationId: 'getDeviceCameraQualityAndRetentionSettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                audioRecordingEnabled: false,
                motionBasedRetentionEnabled: false,
                motionDetectorVersion: 2,
                profileId: '1234',
                quality: 'Standard',
                resolution: '1280x720',
                restrictedBandwidthModeEnabled: false,
              },
            },
          },
        },
      },
    },
  },
})

export const putDevicesSerialCameraQualityAndRetentionSettingsRoute = createRoute({
  method: 'put',
  path: '/devices/{serial}/camera/qualityAndRetentionSettings',
  tags: ['Cameras'],
  summary: 'Update quality and retention settings for the given camera',
  description: 'Update quality and retention settings for the given camera',
  operationId: 'updateDeviceCameraQualityAndRetentionSettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              audioRecordingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera',
                }),
              motionBasedRetentionEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera',
                }),
              motionDetectorVersion: z
                .union([z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({
                  description:
                    'The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.',
                }),
              profileId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.",
                }),
              quality: z
                .enum(['Enhanced', 'High', 'Standard'])
                .exactOptional()
                .openapi({
                  description:
                    "Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.",
                }),
              resolution: z
                .enum(['1080x1080', '1280x720', '1920x1080', '2058x2058'])
                .exactOptional()
                .openapi({
                  description:
                    "Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080' or '2058x2058'. Not all resolutions are supported by every camera model.",
                }),
              restrictedBandwidthModeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras.',
                }),
            })
            .openapi({
              example: {
                audioRecordingEnabled: false,
                motionBasedRetentionEnabled: false,
                motionDetectorVersion: 2,
                profileId: '1234',
                quality: 'Standard',
                resolution: '1280x720',
                restrictedBandwidthModeEnabled: false,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                audioRecordingEnabled: false,
                motionBasedRetentionEnabled: false,
                motionDetectorVersion: 2,
                profileId: '1234',
                quality: 'Standard',
                resolution: '1280x720',
                restrictedBandwidthModeEnabled: false,
              },
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCameraVideoSettingsRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/camera/video/settings',
  tags: ['Cameras'],
  summary: 'Returns video settings for the given camera',
  description: 'Returns video settings for the given camera',
  operationId: 'getDeviceCameraVideoSettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { externalRtspEnabled: true, rtspUrl: 'rtsp://10.0.0.1:9000/live' },
            },
          },
        },
      },
    },
  },
})

export const putDevicesSerialCameraVideoSettingsRoute = createRoute({
  method: 'put',
  path: '/devices/{serial}/camera/video/settings',
  tags: ['Cameras'],
  summary: 'Update video settings for the given camera',
  description: 'Update video settings for the given camera',
  operationId: 'updateDeviceCameraVideoSettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              externalRtspEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Boolean indicating if external rtsp stream is exposed' }),
            })
            .openapi({ example: { externalRtspEnabled: true }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { externalRtspEnabled: true, rtspUrl: 'rtsp://10.0.0.1:9000/live' },
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCellularGatewaySettingsRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/cellularGateway/settings',
  tags: ['MG LAN settings'],
  summary: 'Show the LAN Settings of a MG',
  description: 'Show the LAN Settings of a MG',
  operationId: 'getDeviceCellularGatewaySettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                deviceLanIp: '192.168.0.33',
                deviceName: 'name of the MG',
                deviceSubnet: '192.168.0.32/27',
                fixedIpAssignments: [
                  { ip: '192.168.0.10', mac: '0b:00:00:00:00:ac', name: 'server 1' },
                  { ip: '192.168.0.20', mac: '0b:00:00:00:00:ab', name: 'server 2' },
                ],
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putDevicesSerialCellularGatewaySettingsRoute = createRoute({
  method: 'put',
  path: '/devices/{serial}/cellularGateway/settings',
  tags: ['MG LAN settings'],
  summary: 'Update the LAN Settings for a single MG.',
  description: 'Update the LAN Settings for a single MG.',
  operationId: 'updateDeviceCellularGatewaySettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fixedIpAssignments: z
                .array(
                  z
                    .object({
                      ip: z
                        .string()
                        .openapi({
                          description:
                            'The IP address you want to assign to a specific server or device',
                        }),
                      mac: z
                        .string()
                        .openapi({
                          description:
                            'The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A descriptive name of the assignment' }),
                    })
                    .openapi({ required: ['ip', 'mac'] }),
                )
                .exactOptional()
                .openapi({ description: 'list of all fixed IP assignments for a single MG' }),
              reservedIpRanges: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .openapi({ description: 'Comment explaining the reserved IP range' }),
                      end: z
                        .string()
                        .openapi({
                          description: 'Ending IP included in the reserved range of IPs',
                        }),
                      start: z
                        .string()
                        .openapi({
                          description: 'Starting IP included in the reserved range of IPs',
                        }),
                    })
                    .openapi({ required: ['start', 'end', 'comment'] }),
                )
                .exactOptional()
                .openapi({ description: 'list of all reserved IP ranges for a single MG' }),
            })
            .openapi({
              example: {
                deviceLanIp: '192.168.0.33',
                deviceName: 'name of the MG',
                deviceSubnet: '192.168.0.32/27',
                fixedIpAssignments: [
                  { ip: '192.168.0.10', mac: '0b:00:00:00:00:ac', name: 'server 1' },
                  { ip: '192.168.0.20', mac: '0b:00:00:00:00:ab', name: 'server 2' },
                ],
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                deviceLanIp: '192.168.0.33',
                deviceName: 'name of the MG',
                deviceSubnet: '192.168.0.32/27',
                fixedIpAssignments: [
                  { ip: '192.168.0.10', mac: '0b:00:00:00:00:ac', name: 'server 1' },
                  { ip: '192.168.0.20', mac: '0b:00:00:00:00:ab', name: 'server 2' },
                ],
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/cellularGateway/settings/portForwardingRules',
  tags: ['MG port forwarding rules'],
  summary: 'Returns the port forwarding rules for a single MG.',
  description: 'Returns the port forwarding rules for a single MG.',
  operationId: 'getDeviceCellularGatewaySettingsPortForwardingRules',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    access: 'any',
                    lanIp: '172.31.128.5',
                    localPort: '4',
                    name: 'test',
                    protocol: 'tcp',
                    publicPort: '11-12',
                    uplink: 'both',
                  },
                  {
                    access: 'restricted',
                    allowedIps: ['10.10.10.10', '10.10.10.11'],
                    lanIp: '172.31.128.5',
                    localPort: '5',
                    name: 'test 2',
                    protocol: 'tcp',
                    publicPort: '99',
                    uplink: 'both',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute = createRoute({
  method: 'put',
  path: '/devices/{serial}/cellularGateway/settings/portForwardingRules',
  tags: ['MG port forwarding rules'],
  summary: 'Updates the port forwarding rules for a single MG.',
  description: 'Updates the port forwarding rules for a single MG.',
  operationId: 'updateDeviceCellularGatewaySettingsPortForwardingRules',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description:
                            '`any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.',
                        }),
                      allowedIps: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges.',
                        }),
                      lanIp: z
                        .string()
                        .openapi({
                          description:
                            'The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN',
                        }),
                      localPort: z
                        .string()
                        .openapi({
                          description:
                            'A port or port ranges that will receive the forwarded traffic from the WAN',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A descriptive name for the rule' }),
                      protocol: z.string().openapi({ description: 'TCP or UDP' }),
                      publicPort: z
                        .string()
                        .openapi({
                          description:
                            'A port or port ranges that will be forwarded to the host on the LAN',
                        }),
                    })
                    .openapi({
                      required: ['lanIp', 'publicPort', 'localPort', 'protocol', 'access'],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'An array of port forwarding params' }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    access: 'any',
                    lanIp: '172.31.128.5',
                    localPort: '4',
                    name: 'test',
                    protocol: 'tcp',
                    publicPort: '11-12',
                    uplink: 'both',
                  },
                  {
                    access: 'restricted',
                    allowedIps: ['10.10.10.10', '10.10.10.11'],
                    lanIp: '172.31.128.5',
                    localPort: '5',
                    name: 'test 2',
                    protocol: 'tcp',
                    publicPort: '99',
                    uplink: 'both',
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    access: 'any',
                    lanIp: '172.31.128.5',
                    localPort: '4',
                    name: 'test',
                    protocol: 'tcp',
                    publicPort: '11-12',
                    uplink: 'both',
                  },
                  {
                    access: 'restricted',
                    allowedIps: ['10.10.10.10', '10.10.10.11'],
                    lanIp: '172.31.128.5',
                    localPort: '5',
                    name: 'test 2',
                    protocol: 'tcp',
                    publicPort: '99',
                    uplink: 'both',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialClientsRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/clients',
  tags: ['Clients'],
  summary: 'List the clients of a device, up to a maximum of a month ago',
  description:
    'List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.',
  operationId: 'getDeviceClients',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 31 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  description: "Miles's phone",
                  dhcpHostname: 'MilesPhone',
                  id: 'k74272e',
                  ip: '1.2.3.4',
                  mac: '22:33:44:55:66:77',
                  mdnsName: "Miles's phone",
                  switchport: null,
                  usage: { recv: 61, sent: 138 },
                  user: 'milesmeraki',
                  vlan: 255,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postDevicesSerialSwitchPortsCycleRoute = createRoute({
  method: 'post',
  path: '/devices/{serial}/switch/ports/cycle',
  tags: ['Devices'],
  summary: 'Cycle a set of switch ports',
  description: 'Cycle a set of switch ports',
  operationId: 'cycleDeviceSwitchPorts',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ports: z
                .array(z.string())
                .openapi({
                  description:
                    'List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]',
                }),
            })
            .openapi({
              example: {
                ports: ['1', '2-5', '1_MA-MOD-8X10G_1', '1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8'],
              },
              required: ['ports'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                ports: ['1', '2-5', '1_MA-MOD-8X10G_1', '1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8'],
              },
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialSwitchPortStatusesRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/switchPortStatuses',
  tags: ['Switch ports'],
  summary: 'Return the status for all the ports of a switch',
  description: 'Return the status for all the ports of a switch',
  operationId: 'getDeviceSwitchPortStatuses',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 31 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  cdp: {
                    address: '10.0,0.1',
                    capabilities: 'Switch',
                    deviceId: '0c8ddbddee:ff',
                    managementAddress: '10.0.0.100',
                    nativeVlan: 1,
                    platform: 'MS350-24X',
                    portId: 'Port 20',
                    systemName: '',
                    version: '1',
                    vtpManagementDomain: '',
                  },
                  clientCount: 10,
                  duplex: 'full',
                  enabled: true,
                  errors: ['PoE overload', 'Very high proportion of CRC errors'],
                  isUplink: false,
                  lldp: {
                    chassisId: '0c:8d:db:dd:ee:ff',
                    managementAddress: '10.0.0.100',
                    managementVlan: 1,
                    portDescription: 'Port 20',
                    portId: '20',
                    portVlan: 1,
                    systemCapabilities: 'switch',
                    systemDescription: 'MS350-24X Cloud Managed PoE Switch',
                    systemName: 'MS350-24X - Test',
                  },
                  portId: '1',
                  powerUsageInWh: 55.9,
                  securePort: {
                    active: true,
                    authenticationStatus: 'Authentication in progress',
                    configOverrides: {
                      allowedVlans: 'all',
                      type: 'trunk',
                      vlan: 12,
                      voiceVlan: 34,
                    },
                    enabled: true,
                  },
                  speed: '10 Gbps',
                  status: 'Connected',
                  trafficInKbps: { recv: 1, sent: 1.2, total: 2.2 },
                  usageInKb: { recv: 17859, sent: 23008, total: 40867 },
                  warnings: [
                    'SecureConnect authentication in progress',
                    'PoE port was denied power',
                    'High proportion of CRC errors',
                  ],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getDevicesSerialSwitchPortStatusesPacketsRoute = createRoute({
  method: 'get',
  path: '/devices/{serial}/switchPortStatuses/packets',
  tags: ['Switch ports'],
  summary: 'Return the packet counters for all the ports of a switch',
  description: 'Return the packet counters for all the ports of a switch',
  operationId: 'getDeviceSwitchPortStatusesPackets',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 1 day from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  packets: [
                    {
                      desc: 'Total',
                      ratePerSec: { recv: 0, sent: 1, total: 1 },
                      recv: 7946,
                      sent: 104135,
                      total: 112081,
                    },
                    {
                      desc: 'Broadcast',
                      ratePerSec: { recv: 0, sent: 0, total: 0 },
                      recv: 514,
                      sent: 30370,
                      total: 30884,
                    },
                    {
                      desc: 'Multicast',
                      ratePerSec: { recv: 0, sent: 0, total: 0 },
                      recv: 771,
                      sent: 66849,
                      total: 67620,
                    },
                    {
                      desc: 'CRC align errors',
                      ratePerSec: { recv: 0, sent: 0, total: 0 },
                      recv: 0,
                      sent: 0,
                      total: 0,
                    },
                  ],
                  portId: '1',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const putDevicesSerialWirelessBluetoothSettingsRoute = createRoute({
  method: 'put',
  path: '/devices/{serial}/wireless/bluetooth/settings',
  tags: ['Bluetooth settings'],
  summary: 'Update the bluetooth settings for a wireless device',
  description: 'Update the bluetooth settings for a wireless device',
  operationId: 'updateDeviceWirelessBluetoothSettings',
  request: {
    params: z.object({
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              major: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
                }),
              minor: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
                }),
              uuid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
                }),
            })
            .openapi({
              example: { major: 13, minor: 125, uuid: '00000000-0000-0000-000-000000000000' },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              major: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
                }),
              minor: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
                }),
              uuid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.",
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: { major: 13, minor: 125, uuid: '00000000-0000-0000-000-000000000000' },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}',
  tags: ['Networks'],
  summary: 'Return a network',
  description: 'Return a network',
  operationId: 'getNetwork',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                disableMyMerakiCom: false,
                enrollmentString: 'my-enrollment-string',
                id: 'N_24329156',
                name: 'Main Office',
                organizationId: '2930418',
                productTypes: ['appliance', 'switch', 'wireless'],
                tags: ' tag1 tag2 ',
                timeZone: 'America/Los_Angeles',
                type: 'combined',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}',
  tags: ['Networks'],
  summary: 'Update a network',
  description: 'Update a network',
  operationId: 'updateNetwork',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              disableMyMerakiCom: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)",
                }),
              disableRemoteStatusPage: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false",
                }),
              enrollmentString: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.',
                }),
              name: z.string().exactOptional().openapi({ description: 'The name of the network' }),
              tags: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A space-separated list of tags to be applied to the network',
                }),
              timeZone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>",
                }),
            })
            .openapi({
              example: {
                disableMyMerakiCom: false,
                name: 'Main Office',
                tags: ' tag1 tag2 ',
                timeZone: 'America/Los_Angeles',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                disableMyMerakiCom: false,
                enrollmentString: 'my-enrollment-string',
                id: 'N_24329156',
                name: 'Main Office',
                organizationId: '2930418',
                productTypes: ['appliance', 'switch', 'wireless'],
                tags: ' tag1 tag2 ',
                timeZone: 'America/Los_Angeles',
                type: 'combined',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}',
  tags: ['Networks'],
  summary: 'Delete a network',
  description: 'Delete a network',
  operationId: 'deleteNetwork',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdAccessPoliciesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/accessPolicies',
  tags: ['Switch access policies'],
  summary: 'List the access policies for this network',
  description: 'List the access policies for this network. Only valid for MS networks.',
  operationId: 'getNetworkAccessPolicies',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  accessType: '8021.x',
                  guestVlan: 3700,
                  name: 'My access policy',
                  number: 1,
                  radiusServers: [
                    { ip: '1.2.3.4', port: 1337 },
                    { ip: '2.3.4.5', port: 1337 },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdAirMarshalRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/airMarshal',
  tags: ['Networks'],
  summary: 'List Air Marshal scan results from a network',
  description: 'List Air Marshal scan results from a network',
  operationId: 'getNetworkAirMarshal',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 31 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  bssids: [
                    {
                      bssid: '00:11:22:33:44:55',
                      contained: false,
                      detectedBy: [{ device: 'Q234-ABCD-5678', rssi: 17 }],
                    },
                  ],
                  channels: [36, 40],
                  firstSeen: 1518365681,
                  lastSeen: 1526087474,
                  ssid: 'linksys',
                  wiredLastSeen: 1526087474,
                  wiredMacs: ['00:11:22:33:44:55'],
                  wiredVlans: [0, 108],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdAlertSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/alertSettings',
  tags: ['Alert settings'],
  summary: 'Return the alert configuration for this network',
  description: 'Return the alert configuration for this network',
  operationId: 'getNetworkAlertSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                alerts: [
                  {
                    alertDestinations: {
                      allAdmins: false,
                      emails: ['miles@meraki.com'],
                      httpServerIds: ['aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M='],
                      snmp: false,
                    },
                    enabled: true,
                    filters: { timeout: 60 },
                    type: 'gatewayDown',
                  },
                ],
                defaultDestinations: {
                  allAdmins: true,
                  emails: ['miles@meraki.com'],
                  httpServerIds: ['aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M='],
                  snmp: true,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdAlertSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/alertSettings',
  tags: ['Alert settings'],
  summary: 'Update the alert configuration for this network',
  description: 'Update the alert configuration for this network',
  operationId: 'updateNetworkAlertSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              alerts: z
                .array(
                  z
                    .object({
                      alertDestinations: z
                        .object({
                          allAdmins: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If true, then all network admins will receive emails for this alert',
                            }),
                          emails: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'A list of emails that will receive information about the alert',
                            }),
                          httpServerIds: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'A list of HTTP server IDs to send a Webhook to for this alert',
                            }),
                          snmp: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'A hash of destinations for this specific alert',
                          required: [],
                        }),
                      enabled: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'A boolean depicting if the alert is turned on or off',
                        }),
                      filters: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.',
                        }),
                      type: z.string().openapi({ description: 'The type of alert' }),
                    })
                    .openapi({ required: ['type'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.',
                }),
              defaultDestinations: z
                .object({
                  allAdmins: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'If true, then all network admins will receive emails.',
                    }),
                  emails: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'A list of emails that will recieve the alert(s).' }),
                  httpServerIds: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'A list of HTTP server IDs to send a Webhook to' }),
                  snmp: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'The network-wide destinations for all alerts on the network.',
                  required: [],
                }),
            })
            .openapi({
              example: {
                alerts: [
                  {
                    alertDestinations: {
                      allAdmins: false,
                      emails: ['miles@meraki.com'],
                      httpServerIds: ['aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M='],
                      snmp: false,
                    },
                    enabled: true,
                    filters: { timeout: 60 },
                    type: 'gatewayDown',
                  },
                ],
                defaultDestinations: {
                  allAdmins: true,
                  emails: ['miles@meraki.com'],
                  httpServerIds: ['aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M='],
                  snmp: true,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                alerts: [
                  {
                    alertDestinations: {
                      allAdmins: false,
                      emails: ['miles@meraki.com'],
                      httpServerIds: ['aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M='],
                      snmp: false,
                    },
                    enabled: true,
                    filters: { timeout: 60 },
                    type: 'gatewayDown',
                  },
                ],
                defaultDestinations: {
                  allAdmins: true,
                  emails: ['miles@meraki.com'],
                  httpServerIds: ['aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M='],
                  snmp: true,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/appliance/firewall/inboundFirewallRules',
  tags: ['MX L3 inbound firewall'],
  summary: 'Return the inbound firewall rules for an MX network',
  description: 'Return the inbound firewall rules for an MX network',
  operationId: 'getNetworkApplianceFirewallInboundFirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    comment: 'Allow TCP traffic to subnet with HTTP servers.',
                    destCidr: '192.168.1.0/24',
                    destPort: '443',
                    policy: 'allow',
                    protocol: 'tcp',
                    srcCidr: 'Any',
                    srcPort: 'Any',
                    syslogEnabled: false,
                  },
                ],
                syslogDefaultRule: true,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/appliance/firewall/inboundFirewallRules',
  tags: ['MX L3 inbound firewall'],
  summary: 'Update the inbound firewall rules of an MX network',
  description: 'Update the inbound firewall rules of an MX network',
  operationId: 'updateNetworkApplianceFirewallInboundFirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRequestBody,
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    comment: 'Allow TCP traffic to subnet with HTTP servers.',
                    destCidr: '192.168.1.0/24',
                    destPort: '443',
                    policy: 'allow',
                    protocol: 'tcp',
                    srcCidr: 'Any',
                    srcPort: 'Any',
                    syslogEnabled: false,
                  },
                ],
                syslogDefaultRule: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdAppliancePortsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/appliancePorts',
  tags: ['MX VLAN ports'],
  summary: 'List per-port VLAN settings for all ports of a MX.',
  description: 'List per-port VLAN settings for all ports of a MX.',
  operationId: 'getNetworkAppliancePorts',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  accessPolicy: 'open',
                  dropUntaggedTraffic: false,
                  enabled: true,
                  number: 1,
                  type: 'access',
                  vlan: 3,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdAppliancePortsAppliancePortIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/appliancePorts/{appliancePortId}',
  tags: ['MX VLAN ports'],
  summary: 'Return per-port VLAN settings for a single MX port.',
  description: 'Return per-port VLAN settings for a single MX port.',
  operationId: 'getNetworkAppliancePort',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      appliancePortId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'appliancePortId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                accessPolicy: 'open',
                dropUntaggedTraffic: false,
                enabled: true,
                number: 1,
                type: 'access',
                vlan: 3,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdAppliancePortsAppliancePortIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/appliancePorts/{appliancePortId}',
  tags: ['MX VLAN ports'],
  summary: 'Update the per-port VLAN settings for a single MX port.',
  description: 'Update the per-port VLAN settings for a single MX port.',
  operationId: 'updateNetworkAppliancePort',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      appliancePortId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'appliancePortId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessPolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing.",
                }),
              allowedVlans: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port.",
                }),
              dropUntaggedTraffic: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true.',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'The status of the port' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: "The type of the port: 'access' or 'trunk'." }),
              vlan: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.',
                }),
            })
            .openapi({
              example: {
                accessPolicy: 'open',
                dropUntaggedTraffic: false,
                enabled: true,
                type: 'access',
                vlan: 3,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                accessPolicy: 'open',
                dropUntaggedTraffic: false,
                enabled: true,
                number: 1,
                type: 'access',
                vlan: 3,
              },
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdBindRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/bind',
  tags: ['Networks'],
  summary: 'Bind a network to a template.',
  description: 'Bind a network to a template.',
  operationId: 'bindNetwork',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              autoBind: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model.",
                }),
              configTemplateId: z
                .string()
                .openapi({
                  description: 'The ID of the template to which the network should be bound.',
                }),
            })
            .openapi({
              example: { autoBind: false, configTemplateId: 'N_23952905' },
              required: ['configTemplateId'],
            }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdBluetoothClientsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/bluetoothClients',
  tags: ['Bluetooth clients'],
  summary: 'List the Bluetooth clients seen by APs in this network',
  description: 'List the Bluetooth clients seen by APs in this network',
  operationId: 'getNetworkBluetoothClients',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 7 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeConnectivityHistory: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the connectivity history for this client',
            in: 'query',
            name: 'includeConnectivityHistory',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  deviceName: 'Bose QuietComfort 35',
                  id: '1284392014819',
                  inSightAlert: false,
                  lastSeen: 1526087474,
                  mac: '22:33:44:55:66:77',
                  manufacturer: 'Bose',
                  name: "Miles's phone",
                  networkId: 'N_24329156',
                  outOfSightAlert: false,
                  seenByDeviceMac: '00:11:22:33:44:55',
                  tags: ['tag1', 'tag2'],
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/bluetoothClients/{bluetoothClientId}',
  tags: ['Bluetooth clients'],
  summary: 'Return a Bluetooth client',
  description:
    'Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.',
  operationId: 'getNetworkBluetoothClient',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      bluetoothClientId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'bluetoothClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeConnectivityHistory: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the connectivity history for this client',
            in: 'query',
            name: 'includeConnectivityHistory',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      connectivityHistoryTimespan: z
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
              'The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.',
            in: 'query',
            name: 'connectivityHistoryTimespan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                deviceName: 'Bose QuietComfort 35',
                id: '1284392014819',
                inSightAlert: false,
                lastSeen: 1526087474,
                mac: '22:33:44:55:66:77',
                manufacturer: 'Bose',
                name: "Miles's phone",
                networkId: 'N_24329156',
                outOfSightAlert: false,
                seenByDeviceMac: '00:11:22:33:44:55',
                tags: ['tag1', 'tag2'],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdBluetoothSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/bluetoothSettings',
  tags: ['Bluetooth settings'],
  summary:
    'Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.',
  description:
    'Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.',
  operationId: 'getNetworkBluetoothSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              advertisingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether APs will advertise beacons.' }),
              major: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
                }),
              majorMinorAssignmentMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')",
                }),
              minor: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
                }),
              scanningEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether APs will scan for Bluetooth enabled clients.' }),
              uuid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The UUID to be used in the beacon identifier.' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                advertisingEnabled: true,
                major: 1,
                majorMinorAssignmentMode: 'Non-unique',
                minor: 1,
                scanningEnabled: true,
                uuid: '00000000-0000-0000-000-000000000000',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdBluetoothSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/bluetoothSettings',
  tags: ['Bluetooth settings'],
  summary: 'Update the Bluetooth settings for a network',
  description:
    'Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.',
  operationId: 'updateNetworkBluetoothSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              advertisingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether APs will advertise beacons.' }),
              major: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
                }),
              majorMinorAssignmentMode: z
                .enum(['Non-unique', 'Unique'])
                .exactOptional()
                .openapi({
                  description:
                    "The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')",
                }),
              minor: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
                }),
              scanningEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether APs will scan for Bluetooth enabled clients.' }),
              uuid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The UUID to be used in the beacon identifier.' }),
            })
            .openapi({
              example: {
                advertisingEnabled: true,
                major: 1,
                majorMinorAssignmentMode: 'Non-unique',
                minor: 1,
                scanningEnabled: true,
                uuid: '00000000-0000-0000-000-000000000000',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              advertisingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether APs will advertise beacons.' }),
              major: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
                }),
              majorMinorAssignmentMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')",
                }),
              minor: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.",
                }),
              scanningEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether APs will scan for Bluetooth enabled clients.' }),
              uuid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The UUID to be used in the beacon identifier.' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                advertisingEnabled: true,
                major: 1,
                majorMinorAssignmentMode: 'Non-unique',
                minor: 1,
                scanningEnabled: true,
                uuid: '00000000-0000-0000-000-000000000000',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdCameraQualityRetentionProfilesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/camera/qualityRetentionProfiles',
  tags: ['Camera quality retention profiles'],
  summary: 'List the quality retention profiles for this network',
  description: 'List the quality retention profiles for this network',
  operationId: 'getNetworkCameraQualityRetentionProfiles',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  audioRecordingEnabled: false,
                  cloudArchiveEnabled: false,
                  id: '1234',
                  maxRetentionDays: 7,
                  motionBasedRetentionEnabled: false,
                  motionDetectorVersion: 2,
                  name: 'Sample quality retention profile',
                  networkId: 'N_24329156',
                  restrictedBandwidthModeEnabled: true,
                  scheduleId: null,
                  videoSettings: {
                    'MV12/MV22/MV72': { quality: 'High', resolution: '1920x1080' },
                    MV12WE: { quality: 'High', resolution: '1920x1080' },
                    'MV21/MV71': { quality: 'High', resolution: '1280x720' },
                    MV32: { quality: 'Enhanced', resolution: '1080x1080' },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdCameraQualityRetentionProfilesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/camera/qualityRetentionProfiles',
  tags: ['Camera quality retention profiles'],
  summary: 'Creates new quality retention profile for this network.',
  description: 'Creates new quality retention profile for this network.',
  operationId: 'createNetworkCameraQualityRetentionProfile',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              audioRecordingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not to record audio. Can be either true or false. Defaults to false.',
                }),
              cloudArchiveEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.',
                }),
              maxRetentionDays: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days.",
                }),
              motionBasedRetentionEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.',
                }),
              motionDetectorVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the new profile. Must be unique. This parameter is required.',
                }),
              restrictedBandwidthModeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.',
                }),
              scheduleId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Schedule for which this camera will record video, or 'null' to always record.",
                }),
              videoSettings: z
                .object({
                  'MV12/MV22/MV72': z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1280x720', '1920x1080'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1280x720' or '1920x1080'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV12/MV22/MV72 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV12WE: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1280x720', '1920x1080'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1280x720' or '1920x1080'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV12WE camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV13: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1080x1080', '2688x1512'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV13 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  'MV21/MV71': z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .literal('1280x720')
                        .openapi({
                          description: "Resolution of the camera. Can be one of '1280x720'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV21/MV71 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  'MV22X/MV72X': z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1280x720', '1920x1080', '2688x1512'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV22X/MV72X camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV32: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1080x1080', '2058x2058'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV32 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV33: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1080x1080', '2112x2112'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV33 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV52: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1280x720', '1920x1080', '2688x1512', '3840x2160'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV52 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV63: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1920x1080', '2688x1512'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV63 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV63X: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1920x1080', '2688x1512', '3840x2160'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV63X camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV93: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1080x1080', '2112x2112'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV93 camera models.',
                      required: ['quality', 'resolution'],
                    }),
                  MV93X: z
                    .object({
                      quality: z
                        .enum(['Enhanced', 'High', 'Standard'])
                        .openapi({
                          description:
                            "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                        }),
                      resolution: z
                        .enum(['1080x1080', '2112x2112', '2880x2880'])
                        .openapi({
                          description:
                            "Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.",
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Quality and resolution for MV93X camera models.',
                      required: ['quality', 'resolution'],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Video quality and resolution settings for all the camera models.',
                  required: [],
                }),
            })
            .openapi({ example: { name: 'Sample quality retention profile' }, required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                audioRecordingEnabled: false,
                cloudArchiveEnabled: false,
                id: '1234',
                maxRetentionDays: 7,
                motionBasedRetentionEnabled: false,
                motionDetectorVersion: 2,
                name: 'Sample quality retention profile',
                networkId: 'N_24329156',
                restrictedBandwidthModeEnabled: true,
                scheduleId: null,
                videoSettings: {
                  'MV12/MV22/MV72': { quality: 'High', resolution: '1920x1080' },
                  MV12WE: { quality: 'High', resolution: '1920x1080' },
                  'MV21/MV71': { quality: 'High', resolution: '1280x720' },
                  MV32: { quality: 'Enhanced', resolution: '1080x1080' },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute =
  createRoute({
    method: 'get',
    path: '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}',
    tags: ['Camera quality retention profiles'],
    summary: 'Retrieve a single quality retention profile',
    description: 'Retrieve a single quality retention profile',
    operationId: 'getNetworkCameraQualityRetentionProfile',
    request: {
      params: z.object({
        networkId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
          }),
        qualityRetentionProfileId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'qualityRetentionProfileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z.object({}),
            examples: {
              response: {
                value: {
                  audioRecordingEnabled: false,
                  cloudArchiveEnabled: false,
                  id: '1234',
                  maxRetentionDays: 7,
                  motionBasedRetentionEnabled: false,
                  motionDetectorVersion: 2,
                  name: 'Sample quality retention profile',
                  networkId: 'N_24329156',
                  restrictedBandwidthModeEnabled: true,
                  scheduleId: null,
                  videoSettings: {
                    'MV12/MV22/MV72': { quality: 'High', resolution: '1920x1080' },
                    MV12WE: { quality: 'High', resolution: '1920x1080' },
                    'MV21/MV71': { quality: 'High', resolution: '1280x720' },
                    MV32: { quality: 'Enhanced', resolution: '1080x1080' },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

export const putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute =
  createRoute({
    method: 'put',
    path: '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}',
    tags: ['Camera quality retention profiles'],
    summary: 'Update an existing quality retention profile for this network.',
    description: 'Update an existing quality retention profile for this network.',
    operationId: 'updateNetworkCameraQualityRetentionProfile',
    request: {
      params: z.object({
        networkId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
          }),
        qualityRetentionProfileId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'qualityRetentionProfileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                audioRecordingEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Whether or not to record audio. Can be either true or false. Defaults to false.',
                  }),
                cloudArchiveEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.',
                  }),
                maxRetentionDays: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days.",
                  }),
                motionBasedRetentionEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.',
                  }),
                motionDetectorVersion: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.',
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the new profile. Must be unique.' }),
                restrictedBandwidthModeEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.',
                  }),
                scheduleId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Schedule for which this camera will record video, or 'null' to always record.",
                  }),
                videoSettings: z
                  .object({
                    'MV12/MV22/MV72': z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1280x720', '1920x1080'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1280x720' or '1920x1080'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV12/MV22/MV72 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV12WE: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1280x720', '1920x1080'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1280x720' or '1920x1080'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV12WE camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV13: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1080x1080', '2688x1512'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV13 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    'MV21/MV71': z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .literal('1280x720')
                          .openapi({
                            description: "Resolution of the camera. Can be one of '1280x720'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV21/MV71 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    'MV22X/MV72X': z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1280x720', '1920x1080', '2688x1512'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV22X/MV72X camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV32: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1080x1080', '2058x2058'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV32 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV33: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1080x1080', '2112x2112'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV33 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV52: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1280x720', '1920x1080', '2688x1512', '3840x2160'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV52 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV63: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1920x1080', '2688x1512'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV63 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV63X: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1920x1080', '2688x1512', '3840x2160'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV63X camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV93: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1080x1080', '2112x2112'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV93 camera models.',
                        required: ['quality', 'resolution'],
                      }),
                    MV93X: z
                      .object({
                        quality: z
                          .enum(['Enhanced', 'High', 'Standard'])
                          .openapi({
                            description:
                              "Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.",
                          }),
                        resolution: z
                          .enum(['1080x1080', '2112x2112', '2880x2880'])
                          .openapi({
                            description:
                              "Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Quality and resolution for MV93X camera models.',
                        required: ['quality', 'resolution'],
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Video quality and resolution settings for all the camera models.',
                    required: [],
                  }),
              })
              .openapi({ example: {}, required: [] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z.object({}),
            examples: {
              response: {
                value: {
                  audioRecordingEnabled: false,
                  cloudArchiveEnabled: false,
                  id: '1234',
                  maxRetentionDays: 7,
                  motionBasedRetentionEnabled: false,
                  motionDetectorVersion: 2,
                  name: 'Sample quality retention profile',
                  networkId: 'N_24329156',
                  restrictedBandwidthModeEnabled: true,
                  scheduleId: null,
                  videoSettings: {
                    'MV12/MV22/MV72': { quality: 'High', resolution: '1920x1080' },
                    MV12WE: { quality: 'High', resolution: '1920x1080' },
                    'MV21/MV71': { quality: 'High', resolution: '1280x720' },
                    MV32: { quality: 'Enhanced', resolution: '1080x1080' },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

export const deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute =
  createRoute({
    method: 'delete',
    path: '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}',
    tags: ['Camera quality retention profiles'],
    summary: 'Delete an existing quality retention profile for this network.',
    description: 'Delete an existing quality retention profile for this network.',
    operationId: 'deleteNetworkCameraQualityRetentionProfile',
    request: {
      params: z.object({
        networkId: z
          .string()
          .openapi({
            param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
          }),
        qualityRetentionProfileId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'qualityRetentionProfileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'Successful operation' } },
  })

export const getNetworksNetworkIdCameraSchedulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/camera/schedules',
  tags: ['Cameras'],
  summary: 'Returns a list of all camera recording schedules.',
  description: 'Returns a list of all camera recording schedules.',
  operationId: 'getNetworkCameraSchedules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                { id: '123', name: 'Weekday schedule' },
                { id: '124', name: 'Office hours' },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdCamerasSerialSnapshotRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/cameras/{serial}/snapshot',
  tags: ['Cameras'],
  summary:
    'Generate a snapshot of what the camera sees at the specified time and return a link to that image.',
  description:
    'Generate a snapshot of what the camera sees at the specified time and return a link to that image.',
  operationId: 'generateNetworkCameraSnapshot',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fullframe: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '[optional] If set to "true" the snapshot will be taken at full sensor resolution. This will error if used with timestamp.',
                }),
              timestamp: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '[optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time.',
                }),
            })
            .openapi({
              example: { fullframe: false, timestamp: '2021-04-30T15:18:08Z' },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    202: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                expiry: 'Access to the image will expire at 2018-12-11T03:12:39Z.',
                url: 'https://spn4.meraki.com/stream/jpeg/snapshot/b2d123asdf423qd22d2',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdCamerasSerialVideoLinkRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/cameras/{serial}/videoLink',
  tags: ['Cameras'],
  summary: 'Returns video link to the specified camera',
  description:
    'Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.',
  operationId: 'getNetworkCameraVideoLink',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time.',
            in: 'query',
            name: 'timestamp',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                url: 'https://nxx.meraki.com/office-cameras/n/bs0a1k/manage/nodes/new_list/29048243992402?timestamp=1535732570077',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdCellularFirewallRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/cellularFirewallRules',
  tags: ['MX cellular firewall'],
  summary: 'Return the cellular firewall rules for an MX network',
  description: 'Return the cellular firewall rules for an MX network',
  operationId: 'getNetworkCellularFirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdCellularFirewallRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/cellularFirewallRules',
  tags: ['MX cellular firewall'],
  summary: 'Update the cellular firewall rules of an MX network',
  description: 'Update the cellular firewall rules of an MX network',
  operationId: 'updateNetworkCellularFirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Description of the rule (optional)' }),
                      destCidr: z
                        .string()
                        .openapi({
                          description:
                            "Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'",
                        }),
                      destPort: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'",
                        }),
                      policy: z
                        .enum(['allow', 'deny'])
                        .openapi({
                          description: "'allow' or 'deny' traffic specified by this rule",
                        }),
                      protocol: z
                        .enum(['any', 'icmp', 'icmp6', 'tcp', 'udp'])
                        .openapi({
                          description:
                            "The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')",
                        }),
                      srcCidr: z
                        .string()
                        .openapi({
                          description:
                            "Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)",
                        }),
                      srcPort: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'",
                        }),
                      syslogEnabled: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)',
                        }),
                    })
                    .openapi({ required: ['policy', 'protocol', 'srcCidr', 'destCidr'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An ordered array of the firewall rules (not including the default rule)',
                }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    comment: 'Allow TCP traffic to subnet with HTTP servers.',
                    destCidr: '192.168.1.0/24',
                    destPort: '443',
                    policy: 'allow',
                    protocol: 'tcp',
                    srcCidr: 'Any',
                    srcPort: 'Any',
                    syslogEnabled: false,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients',
  tags: ['Clients'],
  summary: 'List the clients that have used this network in the timespan',
  description: 'List the clients that have used this network in the timespan',
  operationId: 'getNetworkClients',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 31 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Short description of the client' }),
              firstSeen: z
                .int()
                .exactOptional()
                .openapi({ description: 'Timestamp client was first seen in the network' }),
              groupPolicy8021x: z
                .string()
                .exactOptional()
                .openapi({ description: '802.1x group policy of the client' }),
              id: z.string().exactOptional().openapi({ description: 'The ID of the client' }),
              ip: z
                .string()
                .exactOptional()
                .openapi({ description: 'The IP address of the client' }),
              ip6: z
                .string()
                .exactOptional()
                .openapi({ description: 'The IPv6 address of the client' }),
              ip6Local: z
                .string()
                .exactOptional()
                .openapi({ description: 'Local IPv6 address of the client' }),
              lastSeen: z
                .int()
                .exactOptional()
                .openapi({ description: 'Timestamp client was last seen in the network' }),
              mac: z
                .string()
                .exactOptional()
                .openapi({ description: 'The MAC address of the client' }),
              manufacturer: z
                .string()
                .exactOptional()
                .openapi({ description: 'Manufacturer of the client' }),
              notes: z.string().exactOptional().openapi({ description: 'Notes on the client' }),
              os: z
                .string()
                .exactOptional()
                .openapi({ description: 'The operating system of the client' }),
              recentDeviceMac: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The MAC address of the node that the device was last connected to',
                }),
              recentDeviceName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the node the device was last connected to' }),
              recentDeviceSerial: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The serial of the node the device was last connected to',
                }),
              smInstalled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Status of SM for the client' }),
              ssid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the SSID that the client is connected to' }),
              status: z
                .enum(['Offline', 'Online'])
                .exactOptional()
                .openapi({ description: 'The connection status of the client' }),
              switchport: z
                .string()
                .exactOptional()
                .openapi({ description: 'The switch port that the client is connected to' }),
              usage: z
                .object({
                  recv: z
                    .float32()
                    .exactOptional()
                    .openapi({ description: 'Usage received by the client' }),
                  sent: z
                    .float32()
                    .exactOptional()
                    .openapi({ description: 'Usage sent by the client' }),
                })
                .exactOptional()
                .openapi({ description: 'Usage, sent and received', required: [] }),
              user: z
                .string()
                .exactOptional()
                .openapi({ description: 'The username of the user of the client' }),
              vlan: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the VLAN that the client is connected to' }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                description: "Miles's phone",
                firstSeen: 1518365681,
                groupPolicy8021x: 'Student_Access',
                id: 'k74272e',
                ip: '1.2.3.4',
                ip6: '2001:db8:3c4d:15::1',
                ip6Local: 'fe80:0:0:0:1430:aac1:6826:75ab',
                lastSeen: 1526087474,
                mac: '22:33:44:55:66:77',
                manufacturer: 'Apple',
                notes: "My AP's note",
                os: 'iOS',
                recentDeviceMac: '22:33:44:55:66:77',
                recentDeviceName: 'Q234-ABCD-5678',
                recentDeviceSerial: '00:11:22:33:44:55',
                smInstalled: true,
                ssid: 'My SSID',
                status: 'Online',
                switchport: 'My switch port',
                usage: { recv: 61, sent: 138 },
                user: 'milesmeraki',
                vlan: '100',
              },
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdClientsConnectionStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/connectionStats',
  tags: ['Wireless health'],
  summary: 'Aggregated connectivity info for this network, grouped by clients',
  description: 'Aggregated connectivity info for this network, grouped by clients',
  operationId: 'getNetworkClientsConnectionStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  connectionStats: { assoc: 0, auth: 4, dhcp: 0, dns: 0, success: 10 },
                  mac: '00:61:71:c8:51:27',
                },
                {
                  connectionStats: { assoc: 0, auth: 1, dhcp: 0, dns: 0, success: 24 },
                  mac: '1c:4d:70:7f:5e:5e',
                },
                {
                  connectionStats: { assoc: 1, auth: 0, dhcp: 0, dns: 0, success: 16 },
                  mac: '1c:4d:70:81:8d:0a',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsLatencyStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/latencyStats',
  tags: ['Wireless health'],
  summary: 'Aggregated latency info for this network, grouped by clients',
  description: 'Aggregated latency info for this network, grouped by clients',
  operationId: 'getNetworkClientsLatencyStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  latencyStats: {
                    backgroundTraffic: {
                      avg: 606.52,
                      rawDistribution: {
                        '0': 1234,
                        '1': 2345,
                        '2': 3456,
                        '4': 4567,
                        '8': 5678,
                        '16': 6789,
                        '32': 7890,
                        '64': 8901,
                        '128': 9012,
                        '256': 83,
                        '512': 1234,
                        '1024': 2345,
                        '2048': 9999,
                      },
                    },
                    bestEffortTraffic: 'same shape as backgroundTraffic',
                    videoTraffic: 'same shape as backgroundTraffic',
                    voiceTraffic: 'same shape as backgroundTraffic',
                  },
                  mac: '00:61:71:c8:51:27',
                },
                {
                  latencyStats: {
                    backgroundTraffic: {
                      avg: 606.52,
                      rawDistribution: {
                        '0': 1234,
                        '1': 2345,
                        '2': 3456,
                        '4': 4567,
                        '8': 5678,
                        '16': 6789,
                        '32': 7890,
                        '64': 8901,
                        '128': 9012,
                        '256': 83,
                        '512': 1234,
                        '1024': 2345,
                        '2048': 9999,
                      },
                    },
                    bestEffortTraffic: 'same shape as backgroundTraffic',
                    videoTraffic: 'same shape as backgroundTraffic',
                    voiceTraffic: 'same shape as backgroundTraffic',
                  },
                  mac: '1c:4d:70:7f:5e:5e',
                },
                {
                  latencyStats: {
                    backgroundTraffic: {
                      avg: 606.52,
                      rawDistribution: {
                        '0': 1234,
                        '1': 2345,
                        '2': 3456,
                        '4': 4567,
                        '8': 5678,
                        '16': 6789,
                        '32': 7890,
                        '64': 8901,
                        '128': 9012,
                        '256': 83,
                        '512': 1234,
                        '1024': 2345,
                        '2048': 9999,
                      },
                    },
                    bestEffortTraffic: 'same shape as backgroundTraffic',
                    videoTraffic: 'same shape as backgroundTraffic',
                    voiceTraffic: 'same shape as backgroundTraffic',
                  },
                  mac: '1c:4d:70:81:8d:0a',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdClientsProvisionRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/clients/provision',
  tags: ['Clients'],
  summary: 'Provisions a client with a name and policy',
  description:
    'Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.',
  operationId: 'provisionNetworkClients',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              devicePolicy: z
                .enum([
                  'Allowed',
                  'Blocked',
                  'Group policy',
                  'Normal',
                  'Per connection',
                  'Whitelisted',
                ])
                .openapi({
                  description:
                    "The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.",
                }),
              groupPolicyId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                }),
              mac: z.string().openapi({ description: 'The MAC address of the client. Required.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The display name for the client. Optional. Limited to 255 bytes.',
                }),
              policiesBySecurityAppliance: z
                .object({
                  devicePolicy: z
                    .enum(['Blocked', 'Normal', 'Whitelisted'])
                    .exactOptional()
                    .openapi({
                      description:
                        "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked' or 'Normal'. Required.",
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)',
                  required: [],
                }),
              policiesBySsid: z
                .object({
                  '0': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '1': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '2': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '3': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '4': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '5': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '6': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '7': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '8': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '9': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '10': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '11': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '12': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '13': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                  '14': z
                    .object({
                      devicePolicy: z
                        .enum(['Blocked', 'Group policy', 'Normal', 'Whitelisted'])
                        .openapi({
                          description:
                            "The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                        }),
                      groupPolicyId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The ID of the desired group policy to apply to the client. Required if \'devicePolicy\' is set to "Group policy". Otherwise this is ignored.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'The number for the SSID',
                      required: ['devicePolicy'],
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy",
                  required: [],
                }),
            })
            .openapi({
              example: {
                devicePolicy: 'Group policy',
                groupPolicyId: '101',
                mac: '00:11:22:33:44:55',
                name: "Miles's phone",
              },
              required: ['mac', 'devicePolicy'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                clientId: 'k74272e',
                devicePolicy: 'Group policy',
                groupPolicyId: '101',
                mac: '00:11:22:33:44:55',
                name: "Miles's phone",
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}',
  tags: ['Clients'],
  summary: 'Return the client associated with the given identifier',
  description:
    'Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.',
  operationId: 'getNetworkClient',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                cdp: null,
                clientVpnConnections: [
                  { connectedAt: 1522613355, disconnectedAt: 1522613360, remoteIp: '1.2.3.4' },
                ],
                description: "Miles's phone",
                firstSeen: 1518365681,
                id: 'k74272e',
                ip: '1.2.3.4',
                ip6: '',
                lastSeen: 1526087474,
                lldp: [
                  ['System name', 'Some system name'],
                  ['System description', 'Some system description'],
                  ['Port ID', '1'],
                  ['Chassis ID', '00:18:0a:00:00:00'],
                  ['Port description', 'eth0'],
                  ['System capabilities', 'Two-port MAC Relay'],
                ],
                mac: '22:33:44:55:66:77',
                manufacturer: 'Apple',
                os: 'iOS',
                recentDeviceMac: '00:11:22:33:44:55',
                smInstalled: true,
                ssid: 'My SSID',
                status: 'Online',
                switchport: null,
                user: 'null',
                vlan: '255',
                wirelessCapabilities: '802.11ac - 2.4 and 5 GHz',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdConnectionStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/connectionStats',
  tags: ['Wireless health'],
  summary: 'Aggregated connectivity info for a given client on this network',
  description:
    'Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.',
  operationId: 'getNetworkClientConnectionStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                connectionStats: { assoc: 0, auth: 4, dhcp: 0, dns: 0, success: 10 },
                mac: '00:61:71:c8:51:27',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdEventsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/events',
  tags: ['Clients'],
  summary: 'Return the events associated with this client',
  description:
    'Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.',
  operationId: 'getNetworkClientEvents',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 100. Default is 100.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  details: { on_packet: 'true', vap: '1' },
                  deviceSerial: 'Q234-ABCD-5678',
                  occurredAt: 1518365681,
                  type: 'l3roaming_assoc_start',
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdClientsClientIdLatencyHistoryRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/latencyHistory',
  tags: ['Clients'],
  summary: 'Return the latency history for a client',
  description:
    'Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.',
  operationId: 'getNetworkClientLatencyHistory',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 791 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 791 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      resolution: z
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
              'The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.',
            in: 'query',
            name: 'resolution',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  latencyBinsByCategory: {
                    backgroundTraffic: {
                      '0.5': 41750,
                      '1.0': 21552,
                      '1024.0': 0,
                      '128.0': 0,
                      '16.0': 0,
                      '2.0': 59940,
                      '2048.0': 0,
                      '256.0': 1896,
                      '32.0': 9954,
                      '4.0': 146622,
                      '512.0': 0,
                      '64.0': 0,
                      '8.0': 57354,
                    },
                    bestEffortTraffic: {
                      '0.5': 1840899,
                      '1.0': 1644506,
                      '1024.0': 4943,
                      '128.0': 191977,
                      '16.0': 1329568,
                      '2.0': 629958,
                      '2048.0': 12072,
                      '256.0': 30560,
                      '32.0': 282168,
                      '4.0': 449564,
                      '512.0': 26032,
                      '64.0': 97573,
                      '8.0': 2009658,
                    },
                    videoTraffic: {
                      '0.5': 0,
                      '1.0': 0,
                      '1024.0': 0,
                      '128.0': 0,
                      '16.0': 0,
                      '2.0': 0,
                      '2048.0': 0,
                      '256.0': 0,
                      '32.0': 0,
                      '4.0': 0,
                      '512.0': 0,
                      '64.0': 0,
                      '8.0': 0,
                    },
                    voiceTraffic: {
                      '0.5': 716,
                      '1.0': 948,
                      '1024.0': 0,
                      '128.0': 0,
                      '16.0': 0,
                      '2.0': 474,
                      '2048.0': 0,
                      '256.0': 0,
                      '32.0': 0,
                      '4.0': 78,
                      '512.0': 0,
                      '64.0': 0,
                      '8.0': 0,
                    },
                  },
                  t0: 1550534400,
                  t1: 1550620800,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdLatencyStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/latencyStats',
  tags: ['Wireless health'],
  summary: 'Aggregated latency info for a given client on this network',
  description:
    'Aggregated latency info for a given client on this network. Clients are identified by their MAC.',
  operationId: 'getNetworkClientLatencyStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                latencyStats: {
                  backgroundTraffic: {
                    avg: 606.52,
                    rawDistribution: {
                      '0': 1234,
                      '1': 2345,
                      '2': 3456,
                      '4': 4567,
                      '8': 5678,
                      '16': 6789,
                      '32': 7890,
                      '64': 8901,
                      '128': 9012,
                      '256': 83,
                      '512': 1234,
                      '1024': 2345,
                      '2048': 9999,
                    },
                  },
                  bestEffortTraffic: 'same shape as backgroundTraffic',
                  videoTraffic: 'same shape as backgroundTraffic',
                  voiceTraffic: 'same shape as backgroundTraffic',
                },
                mac: '00:61:71:c8:51:27',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdPolicyRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/policy',
  tags: ['Clients'],
  summary: 'Return the policy assigned to a client on the network',
  description:
    'Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.',
  operationId: 'getNetworkClientPolicy',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { groupPolicyId: '101', mac: '00:11:22:33:44:55', type: 'Group policy' },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdClientsClientIdPolicyRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/clients/{clientId}/policy',
  tags: ['Clients'],
  summary: 'Update the policy assigned to a client on the network',
  description:
    'Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.',
  operationId: 'updateNetworkClientPolicy',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              devicePolicy: z
                .string()
                .openapi({
                  description:
                    "The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.",
                }),
              groupPolicyId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "[optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID.",
                }),
            })
            .openapi({
              example: { groupPolicyId: '101', mac: '00:11:22:33:44:55', type: 'Group policy' },
              required: ['devicePolicy'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { groupPolicyId: '101', mac: '00:11:22:33:44:55', type: 'Group policy' },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus',
  tags: ['Clients'],
  summary:
    "Return the splash authorization for a client, for each SSID they've associated with through splash",
  description:
    "Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
  operationId: 'getNetworkClientSplashAuthorizationStatus',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                ssids: {
                  '0': {
                    authorizedAt: '2017-07-19 16:24:13 UTC',
                    expiresAt: '2017-07-20 16:24:13 UTC',
                    isAuthorized: true,
                  },
                  '2': { isAuthorized: false },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus',
  tags: ['Clients'],
  summary: "Update a client's splash authorization",
  description:
    "Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
  operationId: 'updateNetworkClientSplashAuthorizationStatus',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ssids: z
                .object({
                  '0': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 0', required: [] }),
                  '1': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 1', required: [] }),
                  '2': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 2', required: [] }),
                  '3': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 3', required: [] }),
                  '4': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 4', required: [] }),
                  '5': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 5', required: [] }),
                  '6': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 6', required: [] }),
                  '7': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 7', required: [] }),
                  '8': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 8', required: [] }),
                  '9': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 9', required: [] }),
                  '10': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 10', required: [] }),
                  '11': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 11', required: [] }),
                  '12': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 12', required: [] }),
                  '13': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 13', required: [] }),
                  '14': z
                    .object({
                      isAuthorized: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'New authorization status for the SSID (true, false).',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Splash authorization for SSID 14', required: [] }),
                })
                .openapi({
                  description:
                    "The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs",
                  required: [],
                }),
            })
            .openapi({
              example: { ssids: { '0': { isAuthorized: true }, '2': { isAuthorized: false } } },
              required: ['ssids'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                ssids: {
                  '0': {
                    authorizedAt: '2017-07-19 16:24:13 UTC',
                    expiresAt: '2017-07-20 16:24:13 UTC',
                    isAuthorized: true,
                  },
                  '2': { isAuthorized: false },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdClientsClientIdUsageHistoryRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/clients/{clientId}/usageHistory',
  tags: ['Clients'],
  summary: "Return the client's daily usage history",
  description:
    "Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.",
  operationId: 'getNetworkClientUsageHistory',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      clientId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'clientId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: { response: { value: [{ received: 680, sent: 500, ts: 1518365681 }] } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdConnectionStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/connectionStats',
  tags: ['Wireless health'],
  summary: 'Aggregated connectivity info for this network',
  description: 'Aggregated connectivity info for this network',
  operationId: 'getNetworkConnectionStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { assoc: 1, auth: 5, dhcp: 0, dns: 0, success: 51 } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdContentFilteringRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/contentFiltering',
  tags: ['Content filtering rules'],
  summary: 'Return the content filtering settings for an MX network',
  description: 'Return the content filtering settings for an MX network',
  operationId: 'getNetworkContentFiltering',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                allowedUrlPatterns: ['http://www.example.org', 'http://help.com.au'],
                blockedUrlCategories: [
                  { id: 'meraki:contentFiltering/category/1', name: 'Real Estate' },
                  { id: 'meraki:contentFiltering/category/7', name: 'Shopping' },
                ],
                blockedUrlPatterns: ['http://www.example.com', 'http://www.betting.com'],
                urlCategoryListSize: 'topSites',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdContentFilteringRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/contentFiltering',
  tags: ['Content filtering rules'],
  summary: 'Update the content filtering settings for an MX network',
  description: 'Update the content filtering settings for an MX network',
  operationId: 'updateNetworkContentFiltering',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              allowedUrlPatterns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of URL patterns that are allowed' }),
              blockedUrlCategories: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of URL categories to block' }),
              blockedUrlPatterns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of URL patterns that are blocked' }),
              urlCategoryListSize: z
                .enum(['fullList', 'topSites'])
                .exactOptional()
                .openapi({
                  description: "URL category list size which is either 'topSites' or 'fullList'",
                }),
            })
            .openapi({
              example: {
                allowedUrlPatterns: ['http://www.example.org', 'http://help.com.au'],
                blockedUrlCategories: [
                  'meraki:contentFiltering/category/1',
                  'meraki:contentFiltering/category/7',
                ],
                blockedUrlPatterns: ['http://www.example.com', 'http://www.betting.com'],
                urlCategoryListSize: 'topSites',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                allowedUrlPatterns: ['http://www.example.org', 'http://help.com.au'],
                blockedUrlCategories: [
                  { id: 'meraki:contentFiltering/category/1', name: 'Real Estate' },
                  { id: 'meraki:contentFiltering/category/7', name: 'Shopping' },
                ],
                blockedUrlPatterns: ['http://www.example.com', 'http://www.betting.com'],
                urlCategoryListSize: 'topSites',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdContentFilteringCategoriesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/contentFiltering/categories',
  tags: ['Content filtering categories'],
  summary: 'List all available content filtering categories for an MX network',
  description: 'List all available content filtering categories for an MX network',
  operationId: 'getNetworkContentFilteringCategories',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                categories: [
                  { id: 'meraki:contentFiltering/category/1', name: 'Real Estate' },
                  { id: 'meraki:contentFiltering/category/3', name: 'Financial Services' },
                  '...',
                  { id: 'meraki:contentFiltering/category/11', name: 'Adult and Pornography' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices',
  tags: ['Devices'],
  summary: 'List the devices in a network',
  description: 'List the devices in a network',
  operationId: 'getNetworkDevices',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  address: '1600 Pennsylvania Ave',
                  beaconIdParams: {
                    major: 5,
                    minor: 3,
                    uuid: '00000000-0000-0000-0000-000000000000',
                  },
                  firmware: 'wireless-25-14',
                  floorPlanId: 'g_1234567',
                  lanIp: '1.2.3.4',
                  lat: 37.4180951010362,
                  lng: -122.098531723022,
                  mac: '00:11:22:33:44:55',
                  model: 'MR34',
                  name: 'My AP',
                  networkId: 'N_24329156',
                  notes: "My AP's note",
                  serial: 'Q234-ABCD-5678',
                  tags: ' recently-added ',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdDevicesClaimRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/devices/claim',
  tags: ['Devices'],
  summary:
    'Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)',
  description:
    'Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)',
  operationId: 'claimNetworkDevices',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              serial: z
                .string()
                .exactOptional()
                .openapi({ description: '[DEPRECATED] The serial of a device to claim' }),
              serials: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of serials of devices to claim' }),
            })
            .openapi({
              example: { serials: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'] },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdDevicesConnectionStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/connectionStats',
  tags: ['Wireless health'],
  summary: 'Aggregated connectivity info for this network, grouped by node',
  description: 'Aggregated connectivity info for this network, grouped by node',
  operationId: 'getNetworkDevicesConnectionStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  connectionStats: { assoc: 0, auth: 1, dhcp: 0, dns: 0, success: 43 },
                  serial: 'Q2JC-2MJM-FHRD',
                },
                {
                  connectionStats: { assoc: 1, auth: 4, dhcp: 0, dns: 0, success: 8 },
                  serial: 'Q2FJ-3SHB-Y2K2',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesLatencyStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/latencyStats',
  tags: ['Wireless health'],
  summary: 'Aggregated latency info for this network, grouped by node',
  description: 'Aggregated latency info for this network, grouped by node',
  operationId: 'getNetworkDevicesLatencyStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  latencyStats: {
                    backgroundTraffic: {
                      avg: 606.52,
                      rawDistribution: {
                        '0': 1234,
                        '1': 2345,
                        '2': 3456,
                        '4': 4567,
                        '8': 5678,
                        '16': 6789,
                        '32': 7890,
                        '64': 8901,
                        '128': 9012,
                        '256': 83,
                        '512': 1234,
                        '1024': 2345,
                        '2048': 9999,
                      },
                    },
                    bestEffortTraffic: 'same shape as backgroundTraffic',
                    videoTraffic: 'same shape as backgroundTraffic',
                    voiceTraffic: 'same shape as backgroundTraffic',
                  },
                  serial: 'Q2JC-2MJM-FHRD',
                },
                {
                  latencyStats: {
                    backgroundTraffic: {
                      avg: 606.52,
                      rawDistribution: {
                        '0': 1234,
                        '1': 2345,
                        '2': 3456,
                        '4': 4567,
                        '8': 5678,
                        '16': 6789,
                        '32': 7890,
                        '64': 8901,
                        '128': 9012,
                        '256': 83,
                        '512': 1234,
                        '1024': 2345,
                        '2048': 9999,
                      },
                    },
                    bestEffortTraffic: 'same shape as backgroundTraffic',
                    videoTraffic: 'same shape as backgroundTraffic',
                    voiceTraffic: 'same shape as backgroundTraffic',
                  },
                  serial: 'Q2FJ-3SHB-Y2K2',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesSerialRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}',
  tags: ['Devices'],
  summary: 'Return a single device',
  description: 'Return a single device',
  operationId: 'getNetworkDevice',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                address: '1600 Pennsylvania Ave',
                beaconIdParams: {
                  major: 5,
                  minor: 3,
                  uuid: '00000000-0000-0000-0000-000000000000',
                },
                firmware: 'wireless-25-14',
                floorPlanId: 'g_1234567',
                lanIp: '1.2.3.4',
                lat: 37.4180951010362,
                lng: -122.098531723022,
                mac: '00:11:22:33:44:55',
                model: 'MR34',
                name: 'My AP',
                networkId: 'N_24329156',
                notes: "My AP's note",
                serial: 'Q234-ABCD-5678',
                tags: ' recently-added ',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdDevicesSerialRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/devices/{serial}',
  tags: ['Devices'],
  summary: 'Update the attributes of a device',
  description: 'Update the attributes of a device',
  operationId: 'updateNetworkDevice',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              address: z
                .string()
                .exactOptional()
                .openapi({ description: 'The address of a device' }),
              floorPlanId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The floor plan to associate to this device. null disassociates the device from the floorplan.',
                }),
              lat: z.float32().exactOptional().openapi({ description: 'The latitude of a device' }),
              lng: z
                .float32()
                .exactOptional()
                .openapi({ description: 'The longitude of a device' }),
              moveMapMarker: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.',
                }),
              name: z.string().exactOptional().openapi({ description: 'The name of a device' }),
              notes: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The notes for the device. String. Limited to 255 characters.',
                }),
              switchProfileId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.",
                }),
              tags: z.string().exactOptional().openapi({ description: 'The tags of a device' }),
            })
            .openapi({
              example: {
                lat: 37.4180951010362,
                lng: -122.098531723022,
                mac: '00:11:22:33:44:55',
                name: 'My AP',
                serial: 'Q234-ABCD-5678',
                tags: ' recently-added ',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                address: '1600 Pennsylvania Ave',
                beaconIdParams: {
                  major: 5,
                  minor: 3,
                  uuid: '00000000-0000-0000-0000-000000000000',
                },
                firmware: 'wireless-25-14',
                floorPlanId: 'g_1234567',
                lanIp: '1.2.3.4',
                lat: 37.4180951010362,
                lng: -122.098531723022,
                mac: '00:11:22:33:44:55',
                model: 'MR34',
                name: 'My AP',
                networkId: 'N_24329156',
                notes: "My AP's note",
                serial: 'Q234-ABCD-5678',
                tags: ' recently-added ',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesSerialConnectionStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}/connectionStats',
  tags: ['Wireless health'],
  summary: 'Aggregated connectivity info for a given AP on this network',
  description: 'Aggregated connectivity info for a given AP on this network',
  operationId: 'getNetworkDeviceConnectionStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                connectionStats: { assoc: 0, auth: 1, dhcp: 0, dns: 0, success: 43 },
                serial: 'Q2JC-2MJM-FHRD',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesSerialLatencyStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}/latencyStats',
  tags: ['Wireless health'],
  summary: 'Aggregated latency info for a given AP on this network',
  description: 'Aggregated latency info for a given AP on this network',
  operationId: 'getNetworkDeviceLatencyStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                latencyStats: {
                  backgroundTraffic: {
                    avg: 606.52,
                    rawDistribution: {
                      '0': 1234,
                      '1': 2345,
                      '2': 3456,
                      '4': 4567,
                      '8': 5678,
                      '16': 6789,
                      '32': 7890,
                      '64': 8901,
                      '128': 9012,
                      '256': 83,
                      '512': 1234,
                      '1024': 2345,
                      '2048': 9999,
                    },
                  },
                  bestEffortTraffic: 'same shape as backgroundTraffic',
                  videoTraffic: 'same shape as backgroundTraffic',
                  voiceTraffic: 'same shape as backgroundTraffic',
                },
                serial: 'Q2JC-2MJM-FHRD',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}/lossAndLatencyHistory',
  tags: ['Devices'],
  summary: 'Get the uplink loss percentage and latency in milliseconds for a wired network device.',
  description:
    'Get the uplink loss percentage and latency in milliseconds for a wired network device.',
  operationId: 'getNetworkDeviceLossAndLatencyHistory',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 60 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 31 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      resolution: z
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
              'The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.',
            in: 'query',
            name: 'resolution',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      uplink: z
        .enum(['cellular', 'wan1', 'wan2'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.',
            in: 'query',
            name: 'uplink',
            schema: { enum: ['cellular', 'wan1', 'wan2'], type: 'string' },
            required: false,
          },
        }),
      ip: z
        .string()
        .openapi({
          param: {
            description: 'The destination IP used to obtain the requested stats. This is required.',
            in: 'query',
            name: 'ip',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  endTime: '2018-10-09T22:19:27Z',
                  latencyMs: 324.12,
                  lossPercent: 5.23,
                  startTime: '2018-10-09T22:18:27Z',
                },
                {
                  endTime: '2018-10-09T22:20:27Z',
                  latencyMs: 43,
                  lossPercent: 1,
                  startTime: '2018-10-09T22:19:27Z',
                },
                {
                  endTime: '2018-10-09T22:21:27Z',
                  latencyMs: 44.02,
                  lossPercent: 0.01,
                  startTime: '2018-10-09T22:20:27Z',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesSerialPerformanceRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}/performance',
  tags: ['Devices'],
  summary: 'Return the performance score for a single MX',
  description:
    'Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.',
  operationId: 'getNetworkDevicePerformance',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { perfScore: 10 } } },
        },
      },
    },
  },
})

export const postNetworksNetworkIdDevicesSerialRebootRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/devices/{serial}/reboot',
  tags: ['Devices'],
  summary: 'Reboot a device',
  description: 'Reboot a device',
  operationId: 'rebootNetworkDevice',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { success: true } } },
        },
      },
    },
  },
})

export const postNetworksNetworkIdDevicesSerialRemoveRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/devices/{serial}/remove',
  tags: ['Devices'],
  summary: 'Remove a single device',
  description: 'Remove a single device',
  operationId: 'removeNetworkDevice',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdDevicesSerialUplinkRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}/uplink',
  tags: ['Devices'],
  summary: 'Return the uplink information for a device.',
  description: 'Return the uplink information for a device.',
  operationId: 'getNetworkDeviceUplink',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  dns: '8.8.8.8, 8.8.4.4',
                  gateway: '1.2.3.5',
                  interface: 'WAN 1',
                  ip: '1.2.3.4',
                  publicIp: '123.123.123.1',
                  status: 'Active',
                  usingStaticIp: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdDevicesSerialWirelessStatusRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/devices/{serial}/wireless/status',
  tags: ['SSIDs'],
  summary: 'Return the SSID statuses of an access point',
  description: 'Return the SSID statuses of an access point',
  operationId: 'getNetworkDeviceWirelessStatus',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      serial: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serial', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                basicServiceSets: [
                  {
                    band: '2.4 GHz',
                    broadcasting: true,
                    bssid: '8A:15:04:00:00:00',
                    channel: 11,
                    channelWidth: '20 MHz',
                    enabled: true,
                    power: '18 dBm',
                    ssidName: 'My SSID',
                    ssidNumber: 0,
                    visible: true,
                  },
                  {
                    band: '5 GHz',
                    broadcasting: true,
                    bssid: '8A:15:14:00:00:00',
                    channel: 64,
                    channelWidth: '40 MHz',
                    enabled: true,
                    power: '18 dBm',
                    ssidName: 'My SSID',
                    ssidNumber: 0,
                    visible: true,
                  },
                  {
                    band: '6 GHz',
                    broadcasting: true,
                    bssid: '8A:15:24:00:00:00',
                    channel: 145,
                    channelWidth: '80 MHz',
                    enabled: true,
                    power: '18 dBm',
                    ssidName: 'My SSID',
                    ssidNumber: 0,
                    visible: true,
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdEventsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/events',
  tags: ['Events'],
  summary: 'List the events for the network',
  description: 'List the events for the network',
  operationId: 'getNetworkEvents',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      productType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental',
            in: 'query',
            name: 'productType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includedEventTypes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of event types. The returned events will be filtered to only include events with these types.',
            explode: false,
            in: 'query',
            name: 'includedEventTypes',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      excludedEventTypes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of event types. The returned events will be filtered to exclude events with these types.',
            explode: false,
            in: 'query',
            name: 'excludedEventTypes',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      deviceMac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The MAC address of the Meraki device which the list of events will be filtered with',
            in: 'query',
            name: 'deviceMac',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceSerial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The serial of the Meraki device which the list of events will be filtered with',
            in: 'query',
            name: 'deviceSerial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the Meraki device which the list of events will be filtered with',
            in: 'query',
            name: 'deviceName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientIp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.',
            in: 'query',
            name: 'clientIp',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientMac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.',
            in: 'query',
            name: 'clientMac',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name, or partial name, of the client which the list of events will be filtered with',
            in: 'query',
            name: 'clientName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      smDeviceMac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The MAC address of the Systems Manager device which the list of events will be filtered with',
            in: 'query',
            name: 'smDeviceMac',
            schema: { type: 'string' },
            required: false,
          },
        }),
      smDeviceName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the Systems Manager device which the list of events will be filtered with',
            in: 'query',
            name: 'smDeviceName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                events: [
                  {
                    clientDescription: "Miles's phone",
                    clientId: 'k74272e',
                    clientMac: '22:33:44:55:66:77',
                    description: '802.11 association',
                    deviceName: 'My AP',
                    deviceSerial: 'Q234-ABCD-5678',
                    eventData: {
                      aid: '2104009183',
                      channel: '36',
                      client_ip: '1.2.3.4',
                      client_mac: '22:33:44:55:66:77',
                      radio: '1',
                      rssi: '12',
                      vap: '1',
                    },
                    networkId: 'N_24329156',
                    occurredAt: '2018-02-11T00:00:00.090210Z',
                    ssidName: 'My SSID',
                    ssidNumber: 1,
                    type: 'association',
                  },
                ],
                message: 'Some error',
                pageEndAt: '2018-02-11T00:00:00.090210Z',
                pageStartAt: '2018-02-11T00:00:00.090210Z',
              },
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdEventsEventTypesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/events/eventTypes',
  tags: ['Events'],
  summary: 'List the event type to human-readable description',
  description: 'List the event type to human-readable description',
  operationId: 'getNetworkEventsEventTypes',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                { category: '802.11', description: '802.11 association', type: 'association' },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdFailedConnectionsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/failedConnections',
  tags: ['Wireless health'],
  summary: 'List of all failed client connection events on this network in a given time range',
  description: 'List of all failed client connection events on this network in a given time range',
  operationId: 'getNetworkFailedConnections',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by AP',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by client MAC',
            in: 'query',
            name: 'clientId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  clientMac: '00:61:71:c8:51:27',
                  failureStep: 'auth',
                  serial: 'Q2JC-2MJM-FHRD',
                  ssidNumber: 0,
                  ts: 1532032592,
                  type: '802.1X auth fail',
                  vlan: -1,
                },
                {
                  clientMac: '00:61:71:c8:51:27',
                  failureStep: 'auth',
                  nodeId: 'Q2FJ-3SHB-Y2K2',
                  ssidNumber: 0,
                  ts: 1532032593,
                  type: '802.1X auth fail',
                  vlan: -1,
                },
                {
                  clientMac: '00:61:71:c8:51:27',
                  failureStep: 'auth',
                  nodeId: 'Q2FJ-3SHB-Y2K2',
                  ssidNumber: 0,
                  ts: 1532032594,
                  type: '802.1X auth fail',
                  vlan: -1,
                },
                {
                  clientMac: '00:61:71:c8:51:27',
                  failureStep: 'auth',
                  nodeId: 'Q2FJ-3SHB-Y2K2',
                  ssidNumber: 0,
                  ts: 1532032595,
                  type: '802.1X auth fail',
                  vlan: -1,
                },
                {
                  clientMac: '1c:4d:70:7f:5e:5e',
                  failureStep: 'assoc',
                  nodeId: 'Q2FJ-3SHB-Y2K2',
                  ssidNumber: 0,
                  ts: 1532032592,
                  type: '802.1X auth fail',
                  vlan: -1,
                },
                {
                  clientMac: '1c:4d:70:81:8d:0a',
                  failureStep: 'auth',
                  nodeId: 'Q2FJ-3SHB-Y2K2',
                  ssidNumber: 0,
                  ts: 1532032595,
                  type: '802.1X auth fail',
                  vlan: -1,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdFirewalledServicesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/firewalledServices',
  tags: ['Firewalled services'],
  summary: 'List the appliance services and their accessibility rules',
  description: 'List the appliance services and their accessibility rules',
  operationId: 'getNetworkFirewalledServices',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [{ access: 'restricted', allowedIps: ['123.123.123.1'], service: 'web' }],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdFirewalledServicesServiceRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/firewalledServices/{service}',
  tags: ['Firewalled services'],
  summary: "Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')",
  description: "Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')",
  operationId: 'getNetworkFirewalledService',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      service: z
        .string()
        .openapi({
          param: { in: 'path', name: 'service', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { access: 'restricted', allowedIps: ['123.123.123.1'], service: 'web' },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdFirewalledServicesServiceRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/firewalledServices/{service}',
  tags: ['Firewalled services'],
  summary: "Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')",
  description:
    "Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')",
  operationId: 'updateNetworkFirewalledService',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      service: z
        .string()
        .openapi({
          param: { in: 'path', name: 'service', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              access: z
                .enum(['blocked', 'restricted', 'unrestricted'])
                .openapi({
                  description:
                    'A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only whitelisted IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required',
                }),
              allowedIps: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of whitelisted IPs that can access the service. This field is required if "access" is set to "restricted". Otherwise this field is ignored',
                }),
            })
            .openapi({
              example: { access: 'restricted', allowedIps: ['123.123.123.1'] },
              required: ['access'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { access: 'restricted', allowedIps: ['123.123.123.1'], service: 'web' },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdFloorPlansRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/floorPlans',
  tags: ['Floor plans'],
  summary: 'List the floor plans that belong to your network',
  description: 'List the floor plans that belong to your network',
  operationId: 'getNetworkFloorPlans',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  bottomLeftCorner: { lat: 37.7696461495, lng: -122.3880815506 },
                  bottomRightCorner: { lat: 37.771524649766654, lng: -122.38795275055205 },
                  center: { lat: 37.770040510499996, lng: -122.38714009525 },
                  devices: [
                    {
                      address: '1600 Pennsylvania Ave',
                      beaconIdParams: {
                        major: 5,
                        minor: 3,
                        uuid: '00000000-0000-0000-0000-000000000000',
                      },
                      firmware: 'wireless-25-14',
                      floorPlanId: 'g_1234567',
                      lanIp: '1.2.3.4',
                      lat: 37.4180951010362,
                      lng: -122.098531723022,
                      mac: '00:11:22:33:44:55',
                      model: 'MR34',
                      name: 'My AP',
                      networkId: 'N_24329156',
                      notes: "My AP's note",
                      serial: 'Q234-ABCD-5678',
                      tags: ' recently-added ',
                    },
                  ],
                  floorPlanId: 'g_1234567',
                  height: 150.1,
                  imageExtension: 'png',
                  imageMd5: '2a9edd3f4ffd80130c647d13eacb59f3',
                  imageUrl: 'https://meraki-na.s3.amazonaws.com/assets/...',
                  imageUrlExpiresAt: '2019-06-11 16:04:54 +00:00',
                  name: 'HQ Floor Plan',
                  topLeftCorner: { lat: 37.769700101836364, lng: -122.3888684251381 },
                  topRightCorner: { lat: 37.77157860210302, lng: -122.38873962509012 },
                  width: 100,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdFloorPlansRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/floorPlans',
  tags: ['Floor plans'],
  summary: 'Upload a floor plan',
  description: 'Upload a floor plan',
  operationId: 'createNetworkFloorPlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bottomLeftCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the bottom left corner of your floor plan.',
                  required: [],
                }),
              bottomRightCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the bottom right corner of your floor plan.',
                  required: [],
                }),
              center: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.",
                  required: [],
                }),
              imageContents: z
                .string()
                .openapi({
                  description:
                    'The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.',
                }),
              name: z.string().openapi({ description: 'The name of your floor plan.' }),
              topLeftCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the top left corner of your floor plan.',
                  required: [],
                }),
              topRightCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the top right corner of your floor plan.',
                  required: [],
                }),
            })
            .openapi({ example: {}, required: ['name', 'imageContents'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                bottomLeftCorner: { lat: 37.7696461495, lng: -122.3880815506 },
                bottomRightCorner: { lat: 37.771524649766654, lng: -122.38795275055205 },
                center: { lat: 37.770040510499996, lng: -122.38714009525 },
                devices: [
                  {
                    address: '1600 Pennsylvania Ave',
                    beaconIdParams: {
                      major: 5,
                      minor: 3,
                      uuid: '00000000-0000-0000-0000-000000000000',
                    },
                    firmware: 'wireless-25-14',
                    floorPlanId: 'g_1234567',
                    lanIp: '1.2.3.4',
                    lat: 37.4180951010362,
                    lng: -122.098531723022,
                    mac: '00:11:22:33:44:55',
                    model: 'MR34',
                    name: 'My AP',
                    networkId: 'N_24329156',
                    notes: "My AP's note",
                    serial: 'Q234-ABCD-5678',
                    tags: ' recently-added ',
                  },
                ],
                floorPlanId: 'g_1234567',
                height: 150.1,
                imageExtension: 'png',
                imageMd5: '2a9edd3f4ffd80130c647d13eacb59f3',
                imageUrl: 'https://meraki-na.s3.amazonaws.com/assets/...',
                imageUrlExpiresAt: '2019-06-11 16:04:54 +00:00',
                name: 'HQ Floor Plan',
                topLeftCorner: { lat: 37.769700101836364, lng: -122.3888684251381 },
                topRightCorner: { lat: 37.77157860210302, lng: -122.38873962509012 },
                width: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdFloorPlansFloorPlanIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/floorPlans/{floorPlanId}',
  tags: ['Floor plans'],
  summary: 'Find a floor plan by ID',
  description: 'Find a floor plan by ID',
  operationId: 'getNetworkFloorPlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      floorPlanId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'floorPlanId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                bottomLeftCorner: { lat: 37.7696461495, lng: -122.3880815506 },
                bottomRightCorner: { lat: 37.771524649766654, lng: -122.38795275055205 },
                center: { lat: 37.770040510499996, lng: -122.38714009525 },
                devices: [
                  {
                    address: '1600 Pennsylvania Ave',
                    beaconIdParams: {
                      major: 5,
                      minor: 3,
                      uuid: '00000000-0000-0000-0000-000000000000',
                    },
                    firmware: 'wireless-25-14',
                    floorPlanId: 'g_1234567',
                    lanIp: '1.2.3.4',
                    lat: 37.4180951010362,
                    lng: -122.098531723022,
                    mac: '00:11:22:33:44:55',
                    model: 'MR34',
                    name: 'My AP',
                    networkId: 'N_24329156',
                    notes: "My AP's note",
                    serial: 'Q234-ABCD-5678',
                    tags: ' recently-added ',
                  },
                ],
                floorPlanId: 'g_1234567',
                height: 150.1,
                imageExtension: 'png',
                imageMd5: '2a9edd3f4ffd80130c647d13eacb59f3',
                imageUrl: 'https://meraki-na.s3.amazonaws.com/assets/...',
                imageUrlExpiresAt: '2019-06-11 16:04:54 +00:00',
                name: 'HQ Floor Plan',
                topLeftCorner: { lat: 37.769700101836364, lng: -122.3888684251381 },
                topRightCorner: { lat: 37.77157860210302, lng: -122.38873962509012 },
                width: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdFloorPlansFloorPlanIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/floorPlans/{floorPlanId}',
  tags: ['Floor plans'],
  summary: "Update a floor plan's geolocation and other meta data",
  description: "Update a floor plan's geolocation and other meta data",
  operationId: 'updateNetworkFloorPlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      floorPlanId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'floorPlanId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bottomLeftCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the bottom left corner of your floor plan.',
                  required: [],
                }),
              bottomRightCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the bottom right corner of your floor plan.',
                  required: [],
                }),
              center: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.",
                  required: [],
                }),
              imageContents: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image.",
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of your floor plan.' }),
              topLeftCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the top left corner of your floor plan.',
                  required: [],
                }),
              topRightCorner: z
                .object({
                  lat: z.float32().exactOptional().openapi({ description: 'Latitude' }),
                  lng: z.float32().exactOptional().openapi({ description: 'Longitude' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The longitude and latitude of the top right corner of your floor plan.',
                  required: [],
                }),
            })
            .openapi({ example: {}, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                bottomLeftCorner: { lat: 37.7696461495, lng: -122.3880815506 },
                bottomRightCorner: { lat: 37.771524649766654, lng: -122.38795275055205 },
                center: { lat: 37.770040510499996, lng: -122.38714009525 },
                devices: [
                  {
                    address: '1600 Pennsylvania Ave',
                    beaconIdParams: {
                      major: 5,
                      minor: 3,
                      uuid: '00000000-0000-0000-0000-000000000000',
                    },
                    firmware: 'wireless-25-14',
                    floorPlanId: 'g_1234567',
                    lanIp: '1.2.3.4',
                    lat: 37.4180951010362,
                    lng: -122.098531723022,
                    mac: '00:11:22:33:44:55',
                    model: 'MR34',
                    name: 'My AP',
                    networkId: 'N_24329156',
                    notes: "My AP's note",
                    serial: 'Q234-ABCD-5678',
                    tags: ' recently-added ',
                  },
                ],
                floorPlanId: 'g_1234567',
                height: 150.1,
                imageExtension: 'png',
                imageMd5: '2a9edd3f4ffd80130c647d13eacb59f3',
                imageUrl: 'https://meraki-na.s3.amazonaws.com/assets/...',
                imageUrlExpiresAt: '2019-06-11 16:04:54 +00:00',
                name: 'HQ Floor Plan',
                topLeftCorner: { lat: 37.769700101836364, lng: -122.3888684251381 },
                topRightCorner: { lat: 37.77157860210302, lng: -122.38873962509012 },
                width: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/floorPlans/{floorPlanId}',
  tags: ['Floor plans'],
  summary: 'Destroy a floor plan',
  description: 'Destroy a floor plan',
  operationId: 'deleteNetworkFloorPlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      floorPlanId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'floorPlanId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdL3FirewallRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/l3FirewallRules',
  tags: ['MX L3 outbound firewall'],
  summary: 'Return the L3 firewall rules for an MX network',
  description: 'Return the L3 firewall rules for an MX network',
  operationId: 'getNetworkL3FirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdL3FirewallRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/l3FirewallRules',
  tags: ['MX L3 outbound firewall'],
  summary: 'Update the L3 firewall rules of an MX network',
  description: 'Update the L3 firewall rules of an MX network',
  operationId: 'updateNetworkL3FirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRequestBody,
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdL7FirewallRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/l7FirewallRules',
  tags: ['MX L7 firewall'],
  summary: 'List the MX L7 firewall rules for an MX network',
  description: 'List the MX L7 firewall rules for an MX network',
  operationId: 'getNetworkL7FirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  { policy: 'deny', type: 'host', value: 'google.com' },
                  { policy: 'deny', type: 'port', value: '23' },
                  { policy: 'deny', type: 'ipRange', value: '10.11.12.00/24' },
                  { policy: 'deny', type: 'ipRange', value: '10.11.12.00/24:5555' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdL7FirewallRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/l7FirewallRules',
  tags: ['MX L7 firewall'],
  summary: 'Update the MX L7 firewall rules for an MX network',
  description: 'Update the MX L7 firewall rules for an MX network',
  operationId: 'updateNetworkL7FirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      policy: z
                        .literal('deny')
                        .exactOptional()
                        .openapi({ description: "'Deny' traffic specified by this rule" }),
                      type: z
                        .enum(['application', 'applicationCategory', 'host', 'ipRange', 'port'])
                        .exactOptional()
                        .openapi({
                          description:
                            "Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'",
                        }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format.",
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'An ordered array of the MX L7 firewall rules' }),
            })
            .openapi({
              example: {
                rules: [
                  { policy: 'deny', type: 'host', value: 'google.com' },
                  { policy: 'deny', type: 'port', value: '23' },
                  { policy: 'deny', type: 'ipRange', value: '10.11.12.00/24' },
                  { policy: 'deny', type: 'ipRange', value: '10.11.12.00/24:5555' },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  { policy: 'deny', type: 'host', value: 'google.com' },
                  { policy: 'deny', type: 'port', value: '23' },
                  { policy: 'deny', type: 'ipRange', value: '10.11.12.00/24' },
                  { policy: 'deny', type: 'ipRange', value: '10.11.12.00/24:5555' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/l7FirewallRules/applicationCategories',
  tags: ['MX L7 application categories'],
  summary:
    'Return the L7 firewall application categories and their associated applications for an MX network',
  description:
    'Return the L7 firewall application categories and their associated applications for an MX network',
  operationId: 'getNetworkL7FirewallRulesApplicationCategories',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                applicationCategories: [
                  {
                    applications: [
                      { id: 'meraki:layer7/application/5', name: 'Advertising.com' },
                      { id: 'meraki:layer7/application/0', name: 'AppNexus' },
                      { id: 'meraki:layer7/application/1', name: 'Brightroll' },
                    ],
                    id: 'meraki:layer7/category/24',
                    name: 'Advertising',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdLatencyStatsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/latencyStats',
  tags: ['Wireless health'],
  summary: 'Aggregated latency info for this network',
  description: 'Aggregated latency info for this network',
  operationId: 'getNetworkLatencyStats',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 180 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 7 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      band: z
        .enum(['2.4', '5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.",
            in: 'query',
            name: 'band',
            schema: { enum: ['2.4', '5'], type: 'string' },
            required: false,
          },
        }),
      ssid: z
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
            description: 'Filter results by SSID',
            in: 'query',
            name: 'ssid',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      vlan: z
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
            description: 'Filter results by VLAN',
            in: 'query',
            name: 'vlan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      apTag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by AP Tag',
            in: 'query',
            name: 'apTag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                backgroundTraffic: {
                  avg: 606.52,
                  rawDistribution: {
                    '0': 1234,
                    '1': 2345,
                    '2': 3456,
                    '4': 4567,
                    '8': 5678,
                    '16': 6789,
                    '32': 7890,
                    '64': 8901,
                    '128': 9012,
                    '256': 83,
                    '512': 1234,
                    '1024': 2345,
                    '2048': 9999,
                  },
                },
                bestEffortTraffic: 'same shape as backgroundTraffic',
                videoTraffic: 'same shape as backgroundTraffic',
                voiceTraffic: 'same shape as backgroundTraffic',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdMerakiAuthUsersRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/merakiAuthUsers',
  tags: ['Meraki auth users'],
  summary: 'List the splash or RADIUS users configured under Meraki Authentication for a network',
  description:
    'List the splash or RADIUS users configured under Meraki Authentication for a network',
  operationId: 'getNetworkMerakiAuthUsers',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  accountType: 'Guest',
                  authorizations: [
                    {
                      authorizedByEmail: 'miles@meraki.com',
                      authorizedByName: 'Miles Meraki',
                      authorizedZone: 'Store WiFi',
                      expiresAt: 1526087474,
                    },
                  ],
                  createdAt: 1518365681,
                  email: 'miles@meraki.com',
                  id: 'aGlAaGkuY29t',
                  name: 'Miles Meraki',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}',
  tags: ['Meraki auth users'],
  summary: 'Return the Meraki Auth splash or RADIUS user',
  description: 'Return the Meraki Auth splash or RADIUS user',
  operationId: 'getNetworkMerakiAuthUser',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      merakiAuthUserId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'merakiAuthUserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                accountType: 'Guest',
                authorizations: [
                  {
                    authorizedByEmail: 'miles@meraki.com',
                    authorizedByName: 'Miles Meraki',
                    authorizedZone: 'Store WiFi',
                    expiresAt: 1526087474,
                  },
                ],
                createdAt: 1518365681,
                email: 'miles@meraki.com',
                id: 'aGlAaGkuY29t',
                name: 'Miles Meraki',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdOneToManyNatRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/oneToManyNatRules',
  tags: ['MX 1:Many NAT rules'],
  summary: 'Return the 1:Many NAT mapping rules for an MX network',
  description: 'Return the 1:Many NAT mapping rules for an MX network',
  operationId: 'getNetworkOneToManyNatRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    portRules: [
                      {
                        allowedIps: ['any'],
                        localIp: '192.168.128.1',
                        localPort: '443',
                        name: 'Rule 1',
                        protocol: 'tcp',
                        publicPort: '9443',
                      },
                      {
                        allowedIps: ['10.82.110.0/24', '10.82.111.0/24'],
                        localIp: '192.168.128.1',
                        localPort: '80',
                        name: 'Rule 2',
                        protocol: 'tcp',
                        publicPort: '8080',
                      },
                    ],
                    publicIp: '146.11.11.13',
                    uplink: 'internet1',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdOneToManyNatRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/oneToManyNatRules',
  tags: ['MX 1:Many NAT rules'],
  summary: 'Set the 1:Many NAT mapping rules for an MX network',
  description: 'Set the 1:Many NAT mapping rules for an MX network',
  operationId: 'updateNetworkOneToManyNatRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      portRules: z
                        .array(
                          z
                            .object({
                              allowedIps: z
                                .array(z.string())
                                .exactOptional()
                                .openapi({
                                  description:
                                    "Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or 'any'",
                                }),
                              localIp: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Local IP address to which traffic will be forwarded',
                                }),
                              localPort: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port',
                                }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'A description of the rule' }),
                              protocol: z
                                .enum(['tcp', 'udp'])
                                .exactOptional()
                                .openapi({ description: "'tcp' or 'udp'" }),
                              publicPort: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Destination port of the traffic that is arriving on the WAN',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .openapi({ description: 'An array of associated forwarding rules' }),
                      publicIp: z
                        .string()
                        .openapi({
                          description:
                            'The IP address that will be used to access the internal resource from the WAN',
                        }),
                      uplink: z
                        .enum(['internet1', 'internet2'])
                        .openapi({
                          description:
                            "The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')",
                        }),
                    })
                    .openapi({ required: ['publicIp', 'uplink', 'portRules'] }),
                )
                .openapi({ description: 'An array of 1:Many nat rules' }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    portRules: [
                      {
                        allowedIps: ['any'],
                        localIp: '192.168.128.1',
                        localPort: '443',
                        name: 'Rule 1',
                        protocol: 'tcp',
                        publicPort: '9443',
                      },
                      {
                        allowedIps: ['10.82.110.0/24', '10.82.111.0/24'],
                        localIp: '192.168.128.1',
                        localPort: '80',
                        name: 'Rule 2',
                        protocol: 'tcp',
                        publicPort: '8080',
                      },
                    ],
                    publicIp: '146.11.11.13',
                    uplink: 'internet1',
                  },
                ],
              },
              required: ['rules'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    portRules: [
                      {
                        allowedIps: ['any'],
                        localIp: '192.168.128.1',
                        localPort: '443',
                        name: 'Rule 1',
                        protocol: 'tcp',
                        publicPort: '9443',
                      },
                      {
                        allowedIps: ['10.82.110.0/24', '10.82.111.0/24'],
                        localIp: '192.168.128.1',
                        localPort: '80',
                        name: 'Rule 2',
                        protocol: 'tcp',
                        publicPort: '8080',
                      },
                    ],
                    publicIp: '146.11.11.13',
                    uplink: 'internet1',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdOneToOneNatRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/oneToOneNatRules',
  tags: ['MX 1:1 NAT rules'],
  summary: 'Return the 1:1 NAT mapping rules for an MX network',
  description: 'Return the 1:1 NAT mapping rules for an MX network',
  operationId: 'getNetworkOneToOneNatRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    allowedInbound: [
                      {
                        allowedIps: ['10.82.112.0/24', '10.82.0.0/16'],
                        destinationPorts: ['80'],
                        protocol: 'tcp',
                      },
                      {
                        allowedIps: ['10.81.110.5', '10.81.0.0/16'],
                        destinationPorts: ['8080'],
                        protocol: 'udp',
                      },
                    ],
                    lanIp: '192.168.128.22',
                    name: 'Service behind NAT',
                    publicIp: '146.12.3.33',
                    uplink: 'internet1',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdOneToOneNatRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/oneToOneNatRules',
  tags: ['MX 1:1 NAT rules'],
  summary: 'Set the 1:1 NAT mapping rules for an MX network',
  description: 'Set the 1:1 NAT mapping rules for an MX network',
  operationId: 'updateNetworkOneToOneNatRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      allowedInbound: z
                        .array(
                          z
                            .object({
                              allowedIps: z
                                .array(z.string())
                                .exactOptional()
                                .openapi({
                                  description:
                                    "An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any'",
                                }),
                              destinationPorts: z
                                .array(z.string())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'An array of ports or port ranges that will be forwarded to the host on the LAN',
                                }),
                              protocol: z
                                .enum(['any', 'icmp-ping', 'tcp', 'udp'])
                                .exactOptional()
                                .openapi({
                                  description:
                                    "Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'",
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource',
                        }),
                      lanIp: z
                        .string()
                        .openapi({
                          description:
                            'The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A descriptive name for the rule' }),
                      publicIp: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The IP address that will be used to access the internal resource from the WAN',
                        }),
                      uplink: z
                        .enum(['internet1', 'internet2'])
                        .exactOptional()
                        .openapi({
                          description:
                            "The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')",
                        }),
                    })
                    .openapi({ required: ['lanIp'] }),
                )
                .openapi({ description: 'An array of 1:1 nat rules' }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    allowedInbound: [
                      {
                        allowedIps: ['10.82.112.0/24', '10.82.0.0/16'],
                        destinationPorts: ['80'],
                        protocol: 'tcp',
                      },
                      {
                        allowedIps: ['10.81.110.5', '10.81.0.0/16'],
                        destinationPorts: ['8080'],
                        protocol: 'udp',
                      },
                    ],
                    lanIp: '192.168.128.22',
                    name: 'Service behind NAT',
                    publicIp: '146.12.3.33',
                    uplink: 'internet1',
                  },
                ],
              },
              required: ['rules'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    allowedInbound: [
                      {
                        allowedIps: ['10.82.112.0/24', '10.82.0.0/16'],
                        destinationPorts: ['80'],
                        protocol: 'tcp',
                      },
                      {
                        allowedIps: ['10.81.110.5', '10.81.0.0/16'],
                        destinationPorts: ['8080'],
                        protocol: 'udp',
                      },
                    ],
                    lanIp: '192.168.128.22',
                    name: 'Service behind NAT',
                    publicIp: '146.12.3.33',
                    uplink: 'internet1',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdPiiPiiKeysRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/pii/piiKeys',
  tags: ['PII'],
  summary:
    'List the keys required to access Personally Identifiable Information (PII) for a given identifier',
  description:
    'List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/piiKeys\n```',
  operationId: 'getNetworkPiiPiiKeys',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The username of a Systems Manager user',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The email of a network user account or a Systems Manager device',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      mac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The MAC of a network client device or a Systems Manager device',
            in: 'query',
            name: 'mac',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The serial of a Systems Manager device',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      imei: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The IMEI of a Systems Manager device',
            in: 'query',
            name: 'imei',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bluetoothMac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The MAC of a Bluetooth client',
            in: 'query',
            name: 'bluetoothMac',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                N_1234: {
                  bluetoothMacs: ['00:77:00:77:00:77'],
                  emails: ['fake@example.com'],
                  imeis: ['990000862471854'],
                  macs: ['00:77:00:77:00:77'],
                  serials: ['abcd1234'],
                  usernames: ['fakename'],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdPiiRequestsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/pii/requests',
  tags: ['PII'],
  summary: 'List the PII requests for this network or organization',
  description:
    'List the PII requests for this network or organization\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests\n```',
  operationId: 'getNetworkPiiRequests',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  completedAt: 1524702227,
                  createdAt: 1524692227,
                  datasets: "['usage', 'events']",
                  id: '1234',
                  mac: '00:77:00:77:00:77',
                  networkId: 'N_1234',
                  organizationWide: false,
                  status: 'Completed',
                  type: 'delete',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdPiiRequestsRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/pii/requests',
  tags: ['PII'],
  summary: 'Submit a new delete or restrict processing PII request',
  description:
    'Submit a new delete or restrict processing PII request\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests\n```',
  operationId: 'createNetworkPiiRequest',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              datasets: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The datasets related to the provided key that should be deleted. Only applies to "delete" requests. The value "all" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)',
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email of a network user account. Only applies to "delete" requests.',
                }),
              mac: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The MAC of a network client device. Applies to both "restrict processing" and "delete" requests.',
                }),
              smDeviceId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The sm_device_id of a Systems Manager device. The only way to "restrict processing" or "delete" a Systems Manager device. Must include "device" in the dataset for a "delete" request to destroy the device.',
                }),
              smUserId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The sm_user_id of a Systems Manager user. The only way to "restrict processing" or "delete" a Systems Manager user. Must include "user" in the dataset for a "delete" request to destroy the user.',
                }),
              type: z
                .enum(['delete', 'restrict processing'])
                .exactOptional()
                .openapi({ description: 'One of "delete" or "restrict processing"' }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The username of a network log in. Only applies to "delete" requests.',
                }),
            })
            .openapi({
              example: { datasets: ['usage', 'events'], mac: '00:77:00:77:00:77', type: 'delete' },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                completedAt: null,
                createdAt: 1524692227,
                datasets: "['usage', 'events']",
                id: '1234',
                mac: '00:77:00:77:00:77',
                networkId: 'N_1234',
                organizationWide: false,
                status: 'Not visible in Dashboard; database deletion in process',
                type: 'delete',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdPiiRequestsRequestIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/pii/requests/{requestId}',
  tags: ['PII'],
  summary: 'Return a PII request',
  description:
    'Return a PII request\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests/{requestId}\n```',
  operationId: 'getNetworkPiiRequest',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      requestId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'requestId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                completedAt: 1524702227,
                createdAt: 1524692227,
                datasets: "['usage', 'events']",
                id: '1234',
                mac: '00:77:00:77:00:77',
                networkId: 'N_1234',
                organizationWide: false,
                status: 'Completed',
                type: 'delete',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdPiiRequestsRequestIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/pii/requests/{requestId}',
  tags: ['PII'],
  summary: 'Delete a restrict processing PII request',
  description:
    'Delete a restrict processing PII request\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/requests/{requestId}\n```',
  operationId: 'deleteNetworkPiiRequest',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      requestId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'requestId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdPiiSmDevicesForKeyRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/pii/smDevicesForKey',
  tags: ['PII'],
  summary:
    'Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier',
  description:
    'Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/smDevicesForKey\n```',
  operationId: 'getNetworkPiiSmDevicesForKey',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The username of a Systems Manager user',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The email of a network user account or a Systems Manager device',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      mac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The MAC of a network client device or a Systems Manager device',
            in: 'query',
            name: 'mac',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The serial of a Systems Manager device',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      imei: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The IMEI of a Systems Manager device',
            in: 'query',
            name: 'imei',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bluetoothMac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The MAC of a Bluetooth client',
            in: 'query',
            name: 'bluetoothMac',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { N_1234: ['1099541095293', '8348382288234'] } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdPiiSmOwnersForKeyRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/pii/smOwnersForKey',
  tags: ['PII'],
  summary:
    'Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier',
  description:
    'Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.\n\n## ALTERNATE PATH\n\n```\n/organizations/{organizationId}/pii/smOwnersForKey\n```',
  operationId: 'getNetworkPiiSmOwnersForKey',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The username of a Systems Manager user',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The email of a network user account or a Systems Manager device',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      mac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The MAC of a network client device or a Systems Manager device',
            in: 'query',
            name: 'mac',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The serial of a Systems Manager device',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      imei: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The IMEI of a Systems Manager device',
            in: 'query',
            name: 'imei',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bluetoothMac: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The MAC of a Bluetooth client',
            in: 'query',
            name: 'bluetoothMac',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { N_1234: ['1099541095293'] } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdPortForwardingRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/portForwardingRules',
  tags: ['MX port forwarding rules'],
  summary: 'Return the port forwarding rules for an MX network',
  description: 'Return the port forwarding rules for an MX network',
  operationId: 'getNetworkPortForwardingRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    allowedIps: ['any'],
                    lanIp: '192.168.128.1',
                    localPort: '442-443',
                    name: 'Description of Port Forwarding Rule',
                    protocol: 'tcp',
                    publicPort: '8100-8101',
                    uplink: 'both',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdPortForwardingRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/portForwardingRules',
  tags: ['MX port forwarding rules'],
  summary: 'Update the port forwarding rules for an MX network',
  description: 'Update the port forwarding rules for an MX network',
  operationId: 'updateNetworkPortForwardingRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      allowedIps: z
                        .array(z.string())
                        .openapi({
                          description:
                            'An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any)',
                        }),
                      lanIp: z
                        .string()
                        .openapi({
                          description:
                            'The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN',
                        }),
                      localPort: z
                        .string()
                        .openapi({
                          description:
                            'A port or port ranges that will receive the forwarded traffic from the WAN',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'A descriptive name for the rule' }),
                      protocol: z.enum(['tcp', 'udp']).openapi({ description: 'TCP or UDP' }),
                      publicPort: z
                        .string()
                        .openapi({
                          description:
                            'A port or port ranges that will be forwarded to the host on the LAN',
                        }),
                      uplink: z
                        .enum(['both', 'internet1', 'internet2'])
                        .exactOptional()
                        .openapi({
                          description:
                            "The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both')",
                        }),
                    })
                    .openapi({
                      required: ['lanIp', 'publicPort', 'localPort', 'allowedIps', 'protocol'],
                    }),
                )
                .openapi({ description: 'An array of port forwarding params' }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    allowedIps: ['any'],
                    lanIp: '192.168.128.1',
                    localPort: '442-443',
                    name: 'Description of Port Forwarding Rule',
                    protocol: 'tcp',
                    publicPort: '8100-8101',
                    uplink: 'both',
                  },
                ],
              },
              required: ['rules'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                rules: [
                  {
                    allowedIps: ['any'],
                    lanIp: '192.168.128.1',
                    localPort: '442-443',
                    name: 'Description of Port Forwarding Rule',
                    protocol: 'tcp',
                    publicPort: '8100-8101',
                    uplink: 'both',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSecurityIntrusionSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/security/intrusionSettings',
  tags: ['Intrusion settings'],
  summary: 'Returns all supported intrusion settings for an MX network',
  description: 'Returns all supported intrusion settings for an MX network',
  operationId: 'getNetworkSecurityIntrusionSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                idsRulesets: 'balanced',
                mode: 'prevention',
                protectedNetworks: {
                  excludedCidr: ['10.0.0.0/8', '127.0.0.0/8'],
                  includedCidr: ['10.0.0.0/8', '127.0.0.0/8', '169.254.0.0/16', '172.16.0.0/12'],
                  useDefault: false,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSecurityIntrusionSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/security/intrusionSettings',
  tags: ['Intrusion settings'],
  summary: 'Set the supported intrusion settings for an MX network',
  description: 'Set the supported intrusion settings for an MX network',
  operationId: 'updateNetworkSecurityIntrusionSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              idsRulesets: z
                .enum(['balanced', 'connectivity', 'security'])
                .exactOptional()
                .openapi({
                  description:
                    "Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved",
                }),
              mode: z
                .enum(['detection', 'disabled', 'prevention'])
                .exactOptional()
                .openapi({
                  description:
                    "Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)",
                }),
              protectedNetworks: z
                .object({
                  excludedCidr: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        "list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false)",
                    }),
                  includedCidr: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        "list of IP addresses or subnets being protected (required if 'useDefault' is false)",
                    }),
                  useDefault: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode",
                  required: [],
                }),
            })
            .openapi({
              example: {
                idsRulesets: 'balanced',
                mode: 'prevention',
                protectedNetworks: {
                  excludedCidr: ['10.0.0.0/8', '127.0.0.0/8'],
                  includedCidr: ['10.0.0.0/8', '127.0.0.0/8', '169.254.0.0/16', '172.16.0.0/12'],
                  useDefault: false,
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                idsRulesets: 'balanced',
                mode: 'prevention',
                protectedNetworks: {
                  excludedCidr: ['10.0.0.0/8', '127.0.0.0/8'],
                  includedCidr: ['10.0.0.0/8', '127.0.0.0/8', '169.254.0.0/16', '172.16.0.0/12'],
                  useDefault: false,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSecurityMalwareSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/security/malwareSettings',
  tags: ['Malware settings'],
  summary: 'Returns all supported malware settings for an MX network',
  description: 'Returns all supported malware settings for an MX network',
  operationId: 'getNetworkSecurityMalwareSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                allowedFiles: [
                  {
                    comment: 'allow ZIP file',
                    sha256: 'e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503',
                  },
                ],
                allowedUrls: [
                  { comment: 'allow example.org', url: 'example.org' },
                  { comment: 'allow help.com.au', url: 'help.com.au' },
                ],
                mode: 'enabled',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSecurityMalwareSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/security/malwareSettings',
  tags: ['Malware settings'],
  summary: 'Set the supported malware settings for an MX network',
  description: 'Set the supported malware settings for an MX network',
  operationId: 'updateNetworkSecurityMalwareSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              allowedFiles: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .openapi({ description: 'Comment about the allowed entity' }),
                      sha256: z.string().openapi({ description: 'The file sha256 hash to allow' }),
                    })
                    .openapi({ required: ['sha256', 'comment'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing',
                }),
              allowedUrls: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .openapi({ description: 'Comment about the allowed entity' }),
                      url: z.string().openapi({ description: 'The url to allow' }),
                    })
                    .openapi({ required: ['url', 'comment'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing',
                }),
              mode: z
                .enum(['disabled', 'enabled'])
                .openapi({
                  description:
                    "Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'",
                }),
            })
            .openapi({
              example: {
                allowedFiles: [
                  {
                    comment: 'allow ZIP file',
                    sha256: 'e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503',
                  },
                ],
                allowedUrls: [
                  { comment: 'allow example.org', url: 'example.org' },
                  { comment: 'allow help.com.au', url: 'help.com.au' },
                ],
                mode: 'enabled',
              },
              required: ['mode'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                allowedFiles: [
                  {
                    comment: 'allow ZIP file',
                    sha256: 'e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503',
                  },
                ],
                allowedUrls: [
                  { comment: 'allow example.org', url: 'example.org' },
                  { comment: 'allow help.com.au', url: 'help.com.au' },
                ],
                mode: 'enabled',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSecurityEventsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/securityEvents',
  tags: ['Security events'],
  summary: 'List the security events (intrusion detection only) for a network',
  description: 'List the security events (intrusion detection only) for a network',
  operationId: 'getNetworkSecurityEvents',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 365 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  blocked: true,
                  classification: '4',
                  clientMac: 'A1:B2:C3:D4:E5:F6',
                  destIp: '10.20.30.40:80',
                  deviceMac: '00:18:0a:01:02:03',
                  message: 'SERVER-WEBAPP JBoss JMX console access attempt',
                  priority: '2',
                  protocol: 'tcp/ip',
                  ruleId: 'meraki:intrusion/snort/GID/1/SID/26267',
                  sigSource: '',
                  signature: '1:21516:9',
                  srcIp: '1.2.3.4:34195',
                  ts: 1547683314.270398,
                },
                {
                  blocked: true,
                  classification: '33',
                  clientMac: 'A1:B2:C3:D4:E5:F6',
                  destIp: '10.20.30.40:80',
                  deviceMac: '00:18:0a:01:02:03',
                  message: 'POLICY-OTHER Adobe ColdFusion admin interface access attempt',
                  priority: '1',
                  protocol: 'tcp/ip',
                  ruleId: 'meraki:intrusion/snort/GID/1/SID/26267',
                  sigSource: '',
                  signature: '1:25975:2',
                  srcIp: '1.2.3.4:56023',
                  ts: 1547683827.723265,
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdSiteToSiteVpnRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/siteToSiteVpn',
  tags: ['Networks'],
  summary: 'Return the site-to-site VPN settings of a network',
  description: 'Return the site-to-site VPN settings of a network. Only valid for MX networks.',
  operationId: 'getNetworkSiteToSiteVpn',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                hubs: [
                  { hubId: 'N_4901849', useDefaultRoute: true },
                  { hubId: 'N_1892489', useDefaultRoute: false },
                ],
                mode: 'spoke',
                peerSgtCapable: true,
                subnets: [
                  { localSubnet: '192.168.1.0/24', useVpn: true },
                  { localSubnet: '192.168.128.0/24', useVpn: true },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSiteToSiteVpnRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/siteToSiteVpn',
  tags: ['Networks'],
  summary: 'Update the site-to-site VPN settings of a network',
  description:
    'Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.',
  operationId: 'updateNetworkSiteToSiteVpn',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hubs: z
                .array(
                  z
                    .object({
                      hubId: z.string().openapi({ description: 'The network ID of the hub.' }),
                      useDefaultRoute: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Only valid in 'spoke' mode. Indicates whether default route traffic should be sent to this hub.",
                        }),
                    })
                    .openapi({ required: ['hubId'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.',
                }),
              mode: z
                .enum(['hub', 'none', 'spoke'])
                .openapi({
                  description: "The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'",
                }),
              subnets: z
                .array(
                  z
                    .object({
                      localSubnet: z
                        .string()
                        .openapi({ description: 'The CIDR notation subnet used within the VPN' }),
                      useVpn: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Indicates the presence of the subnet in the VPN',
                        }),
                    })
                    .openapi({ required: ['localSubnet'] }),
                )
                .exactOptional()
                .openapi({ description: 'The list of subnets and their VPN presence.' }),
            })
            .openapi({
              example: {
                hubs: [
                  { hubId: 'N_4901849', useDefaultRoute: true },
                  { hubId: 'N_1892489', useDefaultRoute: false },
                ],
                mode: 'spoke',
                peerSgtCapable: true,
                subnets: [
                  { localSubnet: '192.168.1.0/24', useVpn: true },
                  { localSubnet: '192.168.128.0/24', useVpn: true },
                ],
              },
              required: ['mode'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                hubs: [
                  { hubId: 'N_4901849', useDefaultRoute: true },
                  { hubId: 'N_1892489', useDefaultRoute: false },
                ],
                mode: 'spoke',
                peerSgtCapable: true,
                subnets: [
                  { localSubnet: '192.168.1.0/24', useVpn: true },
                  { localSubnet: '192.168.128.0/24', useVpn: true },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSmBypassActivationLockAttemptsRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/sm/bypassActivationLockAttempts',
  tags: ['SM'],
  summary: 'Bypass activation lock attempt',
  description: 'Bypass activation lock attempt',
  operationId: 'createNetworkSmBypassActivationLockAttempt',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .array(z.string())
                .openapi({
                  description: 'The ids of the devices to attempt activation lock bypass.',
                }),
            })
            .openapi({ example: { ids: ['1284392014819', '2983092129865'] }, required: ['ids'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { data: {}, id: '1234', status: 'pending' } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}',
  tags: ['SM'],
  summary: 'Bypass activation lock attempt status',
  description: 'Bypass activation lock attempt status',
  operationId: 'getNetworkSmBypassActivationLockAttempt',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      attemptId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'attemptId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                data: {
                  '2090938209': {
                    errors: ['Activation lock bypass code not known for this device'],
                    success: false,
                  },
                  '38290139892': { success: true },
                },
                id: '1234',
                status: 'complete',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSmDeviceFieldsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/sm/device/fields',
  tags: ['SM'],
  summary: 'Modify the fields of a device',
  description: 'Modify the fields of a device',
  operationId: 'updateNetworkSmDeviceFields',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deviceFields: z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'New name for the device' }),
                  notes: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'New notes for the device' }),
                })
                .openapi({
                  description:
                    'The new fields of the device. Each field of this object is optional.',
                  required: [],
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the device to be modified.' }),
              serial: z
                .string()
                .exactOptional()
                .openapi({ description: 'The serial of the device to be modified.' }),
              wifiMac: z
                .string()
                .exactOptional()
                .openapi({ description: 'The wifiMac of the device to be modified.' }),
            })
            .openapi({
              example: {
                deviceFields: { name: "Miles's phone", notes: "Here's some info about my device" },
                id: '1284392014819',
              },
              required: ['deviceFields'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                success: [
                  {
                    id: '1284392014819',
                    name: "Miles's phone",
                    notes: "Here's some info about my device",
                    serial: 'F5XKHEBX',
                    wifiMac: '00:11:22:33:44:55',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSmDeviceWipeRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/sm/device/wipe',
  tags: ['SM'],
  summary: 'Wipe a device',
  description: 'Wipe a device',
  operationId: 'wipeNetworkSmDevice',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the device to be wiped.' }),
              pin: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices.',
                }),
              serial: z
                .string()
                .exactOptional()
                .openapi({ description: 'The serial of the device to be wiped.' }),
              wifiMac: z
                .string()
                .exactOptional()
                .openapi({ description: 'The wifiMac of the device to be wiped.' }),
            })
            .openapi({ example: { id: '1284392014819' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { success: true } } },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/sm/device/{deviceId}/refreshDetails',
  tags: ['SM'],
  summary: 'Refresh the details of a device',
  description: 'Refresh the details of a device',
  operationId: 'refreshNetworkSmDeviceDetails',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdSmDevicesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/devices',
  tags: ['SM'],
  summary: 'List the devices enrolled in an SM network with various specified fields and filters',
  description:
    'List the devices enrolled in an SM network with various specified fields and filters',
  operationId: 'getNetworkSmDevices',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Additional fields that will be displayed for each device. Multiple fields can be passed in as comma separated values.\n    The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,\n    systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,\n    ownerEmail, ownerUsername, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,\n    simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,\n    isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,\n    hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion.',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      wifiMacs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter devices by wifi mac(s). Multiple wifi macs can be passed in as comma separated values.',
            in: 'query',
            name: 'wifiMacs',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serials: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter devices by serial(s). Multiple serials can be passed in as comma separated values.',
            in: 'query',
            name: 'serials',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter devices by id(s). Multiple ids can be passed in as comma separated values.',
            in: 'query',
            name: 'ids',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values.',
            in: 'query',
            name: 'scope',
            schema: { type: 'string' },
            required: false,
          },
        }),
      batchSize: z
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
            description: 'Number of devices to return, 1000 is the default as well as the max.',
            in: 'query',
            name: 'batchSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      batchToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the network has more devices than the batch size, a batch token will be returned\n    as a part of the device list. To see the remainder of the devices, pass in the batchToken as a parameter in the next request.\n    Requests made with the batchToken do not require additional parameters as the batchToken includes the parameters passed in\n    with the original request. Additional parameters passed in with the batchToken will be ignored.',
            in: 'query',
            name: 'batchToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                batchToken: 'MMbCbpHZtG3TKUCr9B9uc5',
                devices: [
                  {
                    id: '1284392014819',
                    ip: '1.2.3.4',
                    name: "Miles's phone",
                    osName: 'iOS 9.3.5',
                    serialNumber: 'F5XKHEBX',
                    ssid: 'My SSID',
                    systemModel: 'iPhone',
                    tags: ['tag1', 'tag2'],
                    uuid: '3d990628ede4c628d52',
                    wifiMac: '00:11:22:33:44:55',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSmDevicesCheckinRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/sm/devices/checkin',
  tags: ['SM'],
  summary: 'Force check-in a set of devices',
  description: 'Force check-in a set of devices',
  operationId: 'checkinNetworkSmDevices',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ids of the devices to be checked-in.' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in.',
                }),
              serials: z
                .string()
                .exactOptional()
                .openapi({ description: 'The serials of the devices to be checked-in.' }),
              wifiMacs: z
                .string()
                .exactOptional()
                .openapi({ description: 'The wifiMacs of the devices to be checked-in.' }),
            })
            .openapi({ example: { ids: '"1284392014819"' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { success: true } } },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSmDevicesTagsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/sm/devices/tags',
  tags: ['SM'],
  summary: 'Add, delete, or update the tags of a set of devices',
  description: 'Add, delete, or update the tags of a set of devices',
  operationId: 'updateNetworkSmDevicesTags',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ids of the devices to be modified.' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified.',
                }),
              serials: z
                .string()
                .exactOptional()
                .openapi({ description: 'The serials of the devices to be modified.' }),
              tags: z
                .string()
                .openapi({ description: 'The tags to be added, deleted, or updated.' }),
              updateAction: z
                .string()
                .openapi({
                  description:
                    'One of add, delete, or update. Only devices that have been modified will be returned.',
                }),
              wifiMacs: z
                .string()
                .exactOptional()
                .openapi({ description: 'The wifiMacs of the devices to be modified.' }),
            })
            .openapi({
              example: { scope: 'withAny, old_tag', tags: 'tag1,tag2', updateAction: 'add' },
              required: ['tags', 'updateAction'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                success: [
                  {
                    id: '1284392014819',
                    serial: 'F5XKHEBX',
                    tags: ['tag1', 'tag2'],
                    wifiMac: '00:11:22:33:44:55',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/sm/devices/{deviceId}/unenroll',
  tags: ['SM'],
  summary: 'Unenroll a device',
  description: 'Unenroll a device',
  operationId: 'unenrollNetworkSmDevice',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { success: true } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmProfilesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/profiles',
  tags: ['SM'],
  summary: 'List all the profiles in the network',
  description: 'List all the profiles in the network',
  operationId: 'getNetworkSmProfiles',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                profiles: [
                  {
                    id: '1234',
                    payload_description: 'API docs test',
                    payload_display_name: 'API Profile',
                    payload_identifier: 'com.meraki.sm.1',
                    payload_types: ['Privacy', 'Document'],
                    scope: 'some',
                    tags: ['tag1', 'tag2'],
                    wifis: [],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmTargetGroupsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/targetGroups',
  tags: ['Named tag scope'],
  summary: 'List the target groups in this network',
  description: 'List the target groups in this network',
  operationId: 'getNetworkSmTargetGroups',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      withDetails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response',
            in: 'query',
            name: 'withDetails',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [{ name: 'My target group', scope: 'none', tags: '[]', type: 'devices' }],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSmTargetGroupsRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/sm/targetGroups',
  tags: ['Named tag scope'],
  summary: 'Add a target group',
  description: 'Add a target group',
  operationId: 'createNetworkSmTargetGroup',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: CreateNetworkSmTargetGroupCreatenetworksmtargetgroupRequestBody,
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { name: 'My target group', scope: 'none', tags: '[]', type: 'devices' },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/targetGroups/{targetGroupId}',
  tags: ['Named tag scope'],
  summary: 'Return a target group',
  description: 'Return a target group',
  operationId: 'getNetworkSmTargetGroup',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      targetGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'targetGroupId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      withDetails: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response',
            in: 'query',
            name: 'withDetails',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { name: 'My target group', scope: 'none', tags: '[]', type: 'devices' },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/sm/targetGroups/{targetGroupId}',
  tags: ['Named tag scope'],
  summary: 'Update a target group',
  description: 'Update a target group',
  operationId: 'updateNetworkSmTargetGroup',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      targetGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'targetGroupId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: CreateNetworkSmTargetGroupCreatenetworksmtargetgroupRequestBody,
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { name: 'My target group', scope: 'none', tags: '[]', type: 'devices' },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/sm/targetGroups/{targetGroupId}',
  tags: ['Named tag scope'],
  summary: 'Delete a target group from a network',
  description: 'Delete a target group from a network',
  operationId: 'deleteNetworkSmTargetGroup',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      targetGroupId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'targetGroupId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdSmUserUserIdDeviceProfilesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/user/{userId}/deviceProfiles',
  tags: ['SM'],
  summary: 'Get the profiles associated with a user',
  description: 'Get the profiles associated with a user',
  operationId: 'getNetworkSmUserDeviceProfiles',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  deviceId: '1234',
                  id: '1284392014819',
                  isEncrypted: true,
                  isManaged: true,
                  name: 'My profile',
                  profileData: '{}',
                  profileIdentifier: 'com.test.app',
                  version: '0.0.1',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmUserUserIdSoftwaresRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/user/{userId}/softwares',
  tags: ['SM'],
  summary: 'Get a list of softwares associated with a user',
  description: 'Get a list of softwares associated with a user',
  operationId: 'getNetworkSmUserSoftwares',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  appId: '1234',
                  bundleSize: null,
                  createdAt: '2018-02-11T00:00:00Z',
                  deviceId: '1234',
                  dynamicSize: null,
                  id: '1284392014819',
                  identifier: 'com.test.app',
                  installedAt: '2018-05-12T00:00:00Z',
                  iosRedemptionCode: null,
                  isManaged: true,
                  itunesId: null,
                  licenseKey: null,
                  name: 'My app',
                  path: '/Path/to/app.app',
                  redemptionCode: null,
                  shortVersion: null,
                  status: null,
                  toInstall: null,
                  toUninstall: false,
                  uninstalledAt: null,
                  updatedAt: '2018-05-12T00:00:00Z',
                  vendor: 'Apple',
                  version: '0.1',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmUsersRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/users',
  tags: ['SM'],
  summary: 'List the owners in an SM network with various specified fields and filters',
  description: 'List the owners in an SM network with various specified fields and filters',
  operationId: 'getNetworkSmUsers',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter users by id(s). Multiple ids can be passed in as comma separated values.',
            in: 'query',
            name: 'ids',
            schema: { type: 'string' },
            required: false,
          },
        }),
      usernames: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter users by username(s). Multiple usernames can be passed in as comma separated values.',
            in: 'query',
            name: 'usernames',
            schema: { type: 'string' },
            required: false,
          },
        }),
      emails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter users by email(s). Multiple emails can be passed in as comma separated values.',
            in: 'query',
            name: 'emails',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags as comma separated values.',
            in: 'query',
            name: 'scope',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  adGroups: [],
                  asmGroups: [],
                  azureAdGroups: [],
                  displayName: 'Miles Meraki <miles@meraki.com>',
                  email: 'miles@meraki.com',
                  fullName: 'Miles Meraki',
                  hasIdentityCertificate: false,
                  hasPassword: false,
                  id: '1234',
                  isExternal: false,
                  samlGroups: [],
                  tags: ['tag1', 'tag2'],
                  userThumbnail: 'https://s3.amazonaws.com/image.extension',
                  username: '',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/cellularUsageHistory',
  tags: ['SM'],
  summary: "Return the client's daily cellular data usage history",
  description: "Return the client's daily cellular data usage history. Usage data is in kilobytes.",
  operationId: 'getNetworkSmCellularUsageHistory',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: { response: { value: [{ received: 61, sent: 138, ts: 1526087474 }] } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdCertsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/certs',
  tags: ['SM'],
  summary: 'List the certs on a device',
  description: 'List the certs on a device',
  operationId: 'getNetworkSmCerts',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  certPem: '-----BEGIN CERTIFICATE-----\n-----END CERTIFICATE-----\n',
                  deviceId: '1234',
                  id: '15',
                  issuer: '',
                  name: 'My Cert',
                  notValidAfter: 'May 12, 2018',
                  notValidBefore: 'Feb 11, 2018',
                  subject: '',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdDeviceProfilesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/deviceProfiles',
  tags: ['SM'],
  summary: 'Get the profiles associated with a device',
  description: 'Get the profiles associated with a device',
  operationId: 'getNetworkSmDeviceProfiles',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  deviceId: '1234',
                  id: '1284392014819',
                  isEncrypted: true,
                  isManaged: true,
                  name: 'My profile',
                  profileData: '{}',
                  profileIdentifier: 'com.test.app',
                  version: '0.0.1',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdNetworkAdaptersRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/networkAdapters',
  tags: ['SM'],
  summary: 'List the network adapters of a device',
  description: 'List the network adapters of a device',
  operationId: 'getNetworkSmNetworkAdapters',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  dhcpServer: '123.123.123.1',
                  dnsServer: '8.8.8.8, 8.8.4.4',
                  gateway: '1.2.3.5',
                  id: '1284392014819',
                  ip: '1.2.3.4',
                  mac: '00:11:22:33:44:55',
                  name: 'en0',
                  subnet: '255.255.255.0',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdRestrictionsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/restrictions',
  tags: ['SM'],
  summary: 'List the restrictions on a device',
  description: 'List the restrictions on a device',
  operationId: 'getNetworkSmRestrictions',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                { profile: 'com.meraki.sm.1', restrictions: { myRestriction: { value: true } } },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdSecurityCentersRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/securityCenters',
  tags: ['SM'],
  summary: 'List the security centers on a device',
  description: 'List the security centers on a device',
  operationId: 'getNetworkSmSecurityCenters',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  antiVirusName: 'meraki_av',
                  fireWallName: 'meraki_fw',
                  hasAntiVirus: true,
                  hasFireWallInstalled: true,
                  id: '1284392014819',
                  isAutoLoginDisabled: true,
                  isDiskEncrypted: true,
                  isFireWallEnabled: true,
                  isRooted: true,
                  runningProcs: '/software,/software_2',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdSoftwaresRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/softwares',
  tags: ['SM'],
  summary: 'Get a list of softwares associated with a device',
  description: 'Get a list of softwares associated with a device',
  operationId: 'getNetworkSmSoftwares',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  appId: '1234',
                  bundleSize: null,
                  createdAt: '2018-02-11T00:00:00Z',
                  deviceId: '1234',
                  dynamicSize: null,
                  id: '1284392014819',
                  identifier: 'com.test.app',
                  installedAt: '2018-05-12T00:00:00Z',
                  iosRedemptionCode: null,
                  isManaged: true,
                  itunesId: null,
                  licenseKey: null,
                  name: 'My app',
                  path: '/Path/to/app.app',
                  redemptionCode: null,
                  shortVersion: null,
                  status: null,
                  toInstall: null,
                  toUninstall: false,
                  uninstalledAt: null,
                  updatedAt: '2018-05-12T00:00:00Z',
                  vendor: 'Apple',
                  version: '0.1',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmDeviceIdWlanListsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/sm/{deviceId}/wlanLists',
  tags: ['SM'],
  summary: 'List the saved SSID names on a device',
  description: 'List the saved SSID names on a device',
  operationId: 'getNetworkSmWlanLists',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      deviceId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'deviceId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  createdAt: '2018-02-11T00:00:00Z',
                  id: '1284392014819',
                  xml: 'Preferred networks on en0:',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSnmpSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/snmpSettings',
  tags: ['SNMP settings'],
  summary: 'Return the SNMP settings for a network',
  description: 'Return the SNMP settings for a network',
  operationId: 'getNetworkSnmpSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                access: 'users',
                users: [{ passphrase: 'hunter2', username: 'AzureDiamond' }],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSplashLoginAttemptsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/splashLoginAttempts',
  tags: ['Splash login attempts'],
  summary: 'List the splash login attempts for a network',
  description: 'List the splash login attempts for a network',
  operationId: 'getNetworkSplashLoginAttempts',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ssidNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(0),
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(5),
            z.literal(6),
            z.literal(7),
            z.literal(8),
            z.literal(9),
            z.literal(10),
            z.literal(11),
            z.literal(12),
            z.literal(13),
            z.literal(14),
          ]),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return the login attempts for the specified SSID',
            in: 'query',
            name: 'ssidNumber',
            schema: { enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], type: 'integer' },
            required: false,
          },
        }),
      loginIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The username, email, or phone number used during login',
            in: 'query',
            name: 'loginIdentifier',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
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
              'The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months',
            in: 'query',
            name: 'timespan',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  authorization: 'success',
                  clientId: 'k74272e',
                  clientMac: '22:33:44:55:66:77',
                  gatewayDeviceMac: '00:11:22:33:44:55',
                  login: 'miles@meraki.com',
                  loginAt: 1518365681,
                  name: 'Miles Meraki',
                  ssid: 'My SSID',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSplitRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/split',
  tags: ['Networks'],
  summary: 'Split a combined network into individual networks for each type of device',
  description: 'Split a combined network into individual networks for each type of device',
  operationId: 'splitNetwork',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                resultingNetworks: [
                  {
                    disableMyMerakiCom: false,
                    enrollmentString: 'my-enrollment-string',
                    id: 'N_1234',
                    name: 'Main Office - switch',
                    organizationId: '2930418',
                    productTypes: ['switch'],
                    tags: ' tag1 tag2 ',
                    timeZone: 'America/Los_Angeles',
                    type: 'switch',
                  },
                  {
                    disableMyMerakiCom: false,
                    enrollmentString: 'my-enrollment-string',
                    id: 'N_5678',
                    name: 'Main Office - wireless',
                    organizationId: '2930418',
                    productTypes: ['wireless'],
                    tags: ' tag1 tag2 ',
                    timeZone: 'America/Los_Angeles',
                    type: 'wireless',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSsidsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/ssids',
  tags: ['SSIDs'],
  summary: 'List the SSIDs in a network',
  description:
    'List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.',
  operationId: 'getNetworkSsids',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  adminSplashUrl: 'http://example.com',
                  authMode: '8021x-radius',
                  availabilityTags: ['test-tag'],
                  availableOnAllAps: false,
                  bandSelection: '5 GHz band only',
                  enabled: true,
                  encryptionMode: 'wpa-eap',
                  ipAssignmentMode: 'NAT mode',
                  minBitrate: 11,
                  name: 'My SSID',
                  number: 0,
                  perClientBandwidthLimitDown: 0,
                  perClientBandwidthLimitUp: 0,
                  radiusAccountingEnabled: false,
                  radiusAttributeForGroupPolicies: 'Filter-Id',
                  radiusEnabled: true,
                  radiusFailoverPolicy: 'null',
                  radiusLoadBalancingPolicy: 'null',
                  radiusServers: [{ host: '0.0.0.0', port: 3000 }],
                  splashPage: 'Click-through splash page',
                  splashTimeout: '30 minutes',
                  ssidAdminAccessible: false,
                  visible: true,
                  walledGardenEnabled: true,
                  walledGardenRanges: 'example.com',
                  wpaEncryptionMode: 'WPA2 only',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSsidsNumberRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/ssids/{number}',
  tags: ['SSIDs'],
  summary: 'Return a single SSID',
  description: 'Return a single SSID',
  operationId: 'getNetworkSsid',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'number', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                adminSplashUrl: 'http://example.com',
                authMode: '8021x-radius',
                availabilityTags: ['test-tag'],
                availableOnAllAps: false,
                bandSelection: '5 GHz band only',
                enabled: true,
                encryptionMode: 'wpa-eap',
                ipAssignmentMode: 'NAT mode',
                minBitrate: 11,
                name: 'My SSID',
                number: 0,
                perClientBandwidthLimitDown: 0,
                perClientBandwidthLimitUp: 0,
                radiusAccountingEnabled: false,
                radiusAttributeForGroupPolicies: 'Filter-Id',
                radiusEnabled: true,
                radiusFailoverPolicy: 'null',
                radiusLoadBalancingPolicy: 'null',
                radiusServers: [{ host: '0.0.0.0', port: 3000 }],
                splashPage: 'Click-through splash page',
                splashTimeout: '30 minutes',
                ssidAdminAccessible: false,
                visible: true,
                walledGardenEnabled: true,
                walledGardenRanges: 'example.com',
                wpaEncryptionMode: 'WPA2 only',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSsidsNumberRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/ssids/{number}',
  tags: ['SSIDs'],
  summary: 'Update the attributes of an SSID',
  description: 'Update the attributes of an SSID',
  operationId: 'updateNetworkSsid',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'number', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apTagsAndVlanIds: z
                .array(
                  z
                    .object({
                      tags: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Comma-separated list of AP tags' }),
                      vlanId: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Numerical identifier that is assigned to the VLAN',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'",
                }),
              authMode: z
                .enum([
                  '8021x-google',
                  '8021x-localradius',
                  '8021x-meraki',
                  '8021x-nac',
                  '8021x-radius',
                  'ipsk-with-radius',
                  'ipsk-without-radius',
                  'open',
                  'open-enhanced',
                  'open-with-nac',
                  'open-with-radius',
                  'psk',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')",
                }),
              availabilityTags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list.',
                }),
              availableOnAllAps: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags.',
                }),
              bandSelection: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering')",
                }),
              concentratorNetworkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'.",
                }),
              defaultVlanId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'",
                }),
              disassociateClientsOnVpnFailover: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'.",
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether or not the SSID is enabled' }),
              encryptionMode: z
                .enum(['wep', 'wpa'])
                .exactOptional()
                .openapi({
                  description:
                    "The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'",
                }),
              enterpriseAdminAccess: z
                .enum(['access disabled', 'access enabled'])
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')",
                }),
              ipAssignmentMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN')",
                }),
              lanIsolationEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'.",
                }),
              minBitrate: z
                .float32()
                .exactOptional()
                .openapi({
                  description:
                    "The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')",
                }),
              name: z.string().exactOptional().openapi({ description: 'The name of the SSID' }),
              perClientBandwidthLimitDown: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The download bandwidth limit in Kbps. (0 represents no limit.)',
                }),
              perClientBandwidthLimitUp: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The upload bandwidth limit in Kbps. (0 represents no limit.)',
                }),
              psk: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The passkey for the SSID. This param is only valid if the authMode is 'psk'",
                }),
              radiusAccountingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'",
                }),
              radiusAccountingServers: z
                .array(
                  z
                    .object({
                      host: z
                        .string()
                        .openapi({
                          description:
                            'IP address to which the APs will send RADIUS accounting messages',
                        }),
                      port: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Port on the RADIUS server that is listening for accounting messages',
                        }),
                      secret: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Shared key used to authenticate messages between the APs and RADIUS server',
                        }),
                    })
                    .openapi({ required: ['host'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'",
                }),
              radiusAttributeForGroupPolicies: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message",
                }),
              radiusCoaEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.',
                }),
              radiusFailoverPolicy: z
                .enum(['Allow access', 'Deny access'])
                .exactOptional()
                .openapi({
                  description:
                    "This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')",
                }),
              radiusLoadBalancingPolicy: z
                .enum(['Round robin', 'Strict priority order'])
                .exactOptional()
                .openapi({
                  description:
                    "This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')",
                }),
              radiusOverride: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'.",
                }),
              radiusServers: z
                .array(
                  z
                    .object({
                      host: z.string().openapi({ description: 'IP address of your RADIUS server' }),
                      port: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'UDP port the RADIUS server listens on for Access-requests',
                        }),
                      secret: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'RADIUS client shared secret' }),
                    })
                    .openapi({ required: ['host'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    "The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'",
                }),
              secondaryConcentratorNetworkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.)",
                }),
              splashPage: z
                .enum([
                  'Billing',
                  'Cisco ISE',
                  'Click-through splash page',
                  'Facebook Wi-Fi',
                  'Google Apps domain',
                  'Google OAuth',
                  'None',
                  'Password-protected with Active Directory',
                  'Password-protected with LDAP',
                  'Password-protected with Meraki RADIUS',
                  'Password-protected with custom RADIUS',
                  'SMS authentication',
                  'Sponsored guest',
                  'Systems Manager Sentry',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.",
                }),
              useVlanTagging: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'",
                }),
              visible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true',
                }),
              vlanId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'",
                }),
              walledGardenEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow access to a configurable list of IP ranges, which users may access prior to sign-on.',
                }),
              walledGardenRanges: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specify your walled garden by entering space-separated addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. 192.168.1.1/24 192.168.37.10/32 www.yahoo.com *.google.com). Meraki's splash page is automatically included in your walled garden.",
                }),
              wpaEncryptionMode: z
                .enum([
                  'WPA1 and WPA2',
                  'WPA1 only',
                  'WPA2 only',
                  'WPA3 Transition Mode',
                  'WPA3 only',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')",
                }),
            })
            .openapi({ example: { enabled: true, name: 'My SSID' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                adminSplashUrl: 'http://example.com',
                authMode: '8021x-radius',
                availabilityTags: ['test-tag'],
                availableOnAllAps: false,
                bandSelection: '5 GHz band only',
                enabled: true,
                encryptionMode: 'wpa-eap',
                ipAssignmentMode: 'NAT mode',
                minBitrate: 11,
                name: 'My SSID',
                number: 0,
                perClientBandwidthLimitDown: 0,
                perClientBandwidthLimitUp: 0,
                radiusAccountingEnabled: false,
                radiusAttributeForGroupPolicies: 'Filter-Id',
                radiusEnabled: true,
                radiusFailoverPolicy: 'null',
                radiusLoadBalancingPolicy: 'null',
                radiusServers: [{ host: '0.0.0.0', port: 3000 }],
                splashPage: 'Click-through splash page',
                splashTimeout: '30 minutes',
                ssidAdminAccessible: false,
                visible: true,
                walledGardenEnabled: true,
                walledGardenRanges: 'example.com',
                wpaEncryptionMode: 'WPA2 only',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSsidsNumberL3FirewallRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/ssids/{number}/l3FirewallRules',
  tags: ['MR L3 firewall'],
  summary: 'Return the L3 firewall rules for an SSID on an MR network',
  description: 'Return the L3 firewall rules for an SSID on an MR network',
  operationId: 'getNetworkSsidL3FirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'number', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSsidsNumberL3FirewallRulesRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/ssids/{number}/l3FirewallRules',
  tags: ['MR L3 firewall'],
  summary: 'Update the L3 firewall rules of an SSID on an MR network',
  description: 'Update the L3 firewall rules of an SSID on an MR network',
  operationId: 'updateNetworkSsidL3FirewallRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'number', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              allowLanAccess: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional)',
                }),
              rules: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Description of the rule (optional)' }),
                      destCidr: z
                        .string()
                        .openapi({
                          description:
                            "Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'",
                        }),
                      destPort: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'",
                        }),
                      policy: z
                        .enum(['allow', 'deny'])
                        .openapi({
                          description: "'allow' or 'deny' traffic specified by this rule",
                        }),
                      protocol: z
                        .enum(['any', 'icmp', 'icmp6', 'tcp', 'udp'])
                        .openapi({
                          description:
                            "The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')",
                        }),
                    })
                    .openapi({ required: ['policy', 'protocol', 'destCidr'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule)',
                }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    comment: 'Allow TCP traffic to subnet with HTTP servers.',
                    destCidr: '192.168.1.0/24',
                    destPort: '443',
                    policy: 'allow',
                    protocol: 'tcp',
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSsidsNumberSplashSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/ssids/{number}/splashSettings',
  tags: ['Splash settings'],
  summary: 'Display the splash page settings for the given SSID',
  description: 'Display the splash page settings for the given SSID',
  operationId: 'getNetworkSsidSplashSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'number', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                splashPage: 'Click-through splash page',
                splashUrl: 'https://www.custom_splash_url.com',
                ssidNumber: 0,
                useSplashUrl: true,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSsidsNumberSplashSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/ssids/{number}/splashSettings',
  tags: ['Splash settings'],
  summary: 'Modify the splash page settings for the given SSID',
  description: 'Modify the splash page settings for the given SSID',
  operationId: 'updateNetworkSsidSplashSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'number', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              splashUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "[optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'",
                }),
              useSplashUrl: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "[optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.",
                }),
            })
            .openapi({
              example: { splashUrl: 'https://www.custom_splash_url.com', useSplashUrl: true },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                splashPage: 'Click-through splash page',
                splashUrl: 'https://www.custom_splash_url.com',
                ssidNumber: 0,
                useSplashUrl: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdStaticRoutesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/staticRoutes',
  tags: ['MX static routes'],
  summary: 'List the static routes for an MX or teleworker network',
  description: 'List the static routes for an MX or teleworker network',
  operationId: 'getNetworkStaticRoutes',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  enabled: true,
                  fixedIpAssignments: {
                    '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                  },
                  gatewayIp: '1.2.3.5',
                  id: 'd7fa4948-7921-4dfa-af6b-ae8b16c20c39',
                  ipVersion: 4,
                  name: 'My route',
                  networkId: 'N_24329156',
                  reservedIpRanges: [
                    { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                  ],
                  subnet: '192.168.1.0/24',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdStaticRoutesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/staticRoutes',
  tags: ['MX static routes'],
  summary: 'Add a static route for an MX or teleworker network',
  description: 'Add a static route for an MX or teleworker network',
  operationId: 'createNetworkStaticRoute',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              gatewayIp: z
                .string()
                .openapi({ description: 'The gateway IP (next hop) of the static route' }),
              name: z.string().openapi({ description: 'The name of the new static route' }),
              subnet: z.string().openapi({ description: 'The subnet of the static route' }),
            })
            .openapi({
              example: { gatewayIp: '1.2.3.5', name: 'My route', subnet: '192.168.1.0/24' },
              required: ['name', 'subnet', 'gatewayIp'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                enabled: true,
                fixedIpAssignments: {},
                gatewayIp: '1.2.3.5',
                id: 'd7fa4948-7921-4dfa-af6b-ae8b16c20c39',
                ipVersion: 4,
                name: 'My route',
                networkId: 'N_24329156',
                reservedIpRanges: [],
                subnet: '192.168.1.0/24',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdStaticRoutesStaticRouteIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/staticRoutes/{staticRouteId}',
  tags: ['MX static routes'],
  summary: 'Return a static route for an MX or teleworker network',
  description: 'Return a static route for an MX or teleworker network',
  operationId: 'getNetworkStaticRoute',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      staticRouteId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'staticRouteId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                enabled: true,
                fixedIpAssignments: {
                  '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                },
                gatewayIp: '1.2.3.5',
                id: 'd7fa4948-7921-4dfa-af6b-ae8b16c20c39',
                ipVersion: 4,
                name: 'My route',
                networkId: 'N_24329156',
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
                subnet: '192.168.1.0/24',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdStaticRoutesStaticRouteIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/staticRoutes/{staticRouteId}',
  tags: ['MX static routes'],
  summary: 'Update a static route for an MX or teleworker network',
  description: 'Update a static route for an MX or teleworker network',
  operationId: 'updateNetworkStaticRoute',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      staticRouteId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'staticRouteId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'The enabled state of the static route' }),
              fixedIpAssignments: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.',
                }),
              gatewayIp: z
                .string()
                .exactOptional()
                .openapi({ description: 'The gateway IP (next hop) of the static route' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the static route' }),
              reservedIpRanges: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .openapi({ description: 'A text comment for the reserved range' }),
                      end: z.string().openapi({ description: 'The last IP in the reserved range' }),
                      start: z
                        .string()
                        .openapi({ description: 'The first IP in the reserved range' }),
                    })
                    .openapi({ required: ['start', 'end', 'comment'] }),
                )
                .exactOptional()
                .openapi({ description: 'The DHCP reserved IP ranges on the static route' }),
              subnet: z
                .string()
                .exactOptional()
                .openapi({ description: 'The subnet of the static route' }),
            })
            .openapi({
              example: {
                fixedIpAssignments: {
                  '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                },
                name: 'My route',
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
                subnet: '192.168.1.0/24',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                enabled: true,
                fixedIpAssignments: {
                  '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                },
                gatewayIp: '1.2.3.5',
                id: 'd7fa4948-7921-4dfa-af6b-ae8b16c20c39',
                ipVersion: 4,
                name: 'My route',
                networkId: 'N_24329156',
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
                subnet: '192.168.1.0/24',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdStaticRoutesStaticRouteIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/staticRoutes/{staticRouteId}',
  tags: ['MX static routes'],
  summary: 'Delete a static route from an MX or teleworker network',
  description: 'Delete a static route from an MX or teleworker network',
  operationId: 'deleteNetworkStaticRoute',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      staticRouteId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'staticRouteId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const postNetworksNetworkIdSwapWarmSpareRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/swapWarmSpare',
  tags: ['MX warm spare settings'],
  summary: 'Swap MX primary and warm spare appliances',
  description: 'Swap MX primary and warm spare appliances',
  operationId: 'swapNetworkWarmSpare',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { success: true } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchLinkAggregationsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/linkAggregations',
  tags: ['Link aggregations'],
  summary: 'List link aggregation groups',
  description: 'List link aggregation groups',
  operationId: 'getNetworkSwitchLinkAggregations',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  id: 'NDU2N18yXzM=',
                  switchPorts: [
                    { portId: '1', serial: 'Q234-ABCD-0001' },
                    { portId: '2', serial: 'Q234-ABCD-0002' },
                    { portId: '3', serial: 'Q234-ABCD-0003' },
                    { portId: '4', serial: 'Q234-ABCD-0004' },
                    { portId: '5', serial: 'Q234-ABCD-0005' },
                    { portId: '6', serial: 'Q234-ABCD-0006' },
                    { portId: '7', serial: 'Q234-ABCD-0007' },
                    { portId: '8', serial: 'Q234-ABCD-0008' },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSwitchLinkAggregationsRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/switch/linkAggregations',
  tags: ['Link aggregations'],
  summary: 'Create a link aggregation group',
  description: 'Create a link aggregation group',
  operationId: 'createNetworkSwitchLinkAggregation',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              switchPorts: z
                .array(
                  z
                    .object({
                      portId: z
                        .string()
                        .openapi({
                          description:
                            'Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").',
                        }),
                      serial: z.string().openapi({ description: 'Serial number of the switch.' }),
                    })
                    .openapi({ required: ['serial', 'portId'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.',
                }),
              switchProfilePorts: z
                .array(
                  z
                    .object({
                      portId: z
                        .string()
                        .openapi({
                          description:
                            'Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").',
                        }),
                      profile: z.string().openapi({ description: 'Profile identifier.' }),
                    })
                    .openapi({ required: ['profile', 'portId'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.',
                }),
            })
            .openapi({
              example: {
                switchPorts: [
                  { portId: '1', serial: 'Q234-ABCD-0001' },
                  { portId: '2', serial: 'Q234-ABCD-0002' },
                  { portId: '3', serial: 'Q234-ABCD-0003' },
                  { portId: '4', serial: 'Q234-ABCD-0004' },
                  { portId: '5', serial: 'Q234-ABCD-0005' },
                  { portId: '6', serial: 'Q234-ABCD-0006' },
                  { portId: '7', serial: 'Q234-ABCD-0007' },
                  { portId: '8', serial: 'Q234-ABCD-0008' },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: 'NDU2N18yXzM=',
                switchPorts: [
                  { portId: '1', serial: 'Q234-ABCD-0001' },
                  { portId: '2', serial: 'Q234-ABCD-0002' },
                  { portId: '3', serial: 'Q234-ABCD-0003' },
                  { portId: '4', serial: 'Q234-ABCD-0004' },
                  { portId: '5', serial: 'Q234-ABCD-0005' },
                  { portId: '6', serial: 'Q234-ABCD-0006' },
                  { portId: '7', serial: 'Q234-ABCD-0007' },
                  { portId: '8', serial: 'Q234-ABCD-0008' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/linkAggregations/{linkAggregationId}',
  tags: ['Link aggregations'],
  summary: 'Update a link aggregation group',
  description: 'Update a link aggregation group',
  operationId: 'updateNetworkSwitchLinkAggregation',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      linkAggregationId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'linkAggregationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              switchPorts: z
                .array(
                  z
                    .object({
                      portId: z
                        .string()
                        .openapi({
                          description:
                            'Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").',
                        }),
                      serial: z.string().openapi({ description: 'Serial number of the switch.' }),
                    })
                    .openapi({ required: ['serial', 'portId'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.',
                }),
              switchProfilePorts: z
                .array(
                  z
                    .object({
                      portId: z
                        .string()
                        .openapi({
                          description:
                            'Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").',
                        }),
                      profile: z.string().openapi({ description: 'Profile identifier.' }),
                    })
                    .openapi({ required: ['profile', 'portId'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.',
                }),
            })
            .openapi({
              example: {
                id: 'NDU2N18yXzM=',
                switchPorts: [
                  { portId: '1', serial: 'Q234-ABCD-0001' },
                  { portId: '2', serial: 'Q234-ABCD-0002' },
                  { portId: '3', serial: 'Q234-ABCD-0003' },
                  { portId: '4', serial: 'Q234-ABCD-0004' },
                  { portId: '5', serial: 'Q234-ABCD-0005' },
                  { portId: '6', serial: 'Q234-ABCD-0006' },
                  { portId: '7', serial: 'Q234-ABCD-0007' },
                  { portId: '8', serial: 'Q234-ABCD-0008' },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: 'NDU2N18yXzM=',
                switchPorts: [
                  { portId: '1', serial: 'Q234-ABCD-0001' },
                  { portId: '2', serial: 'Q234-ABCD-0002' },
                  { portId: '3', serial: 'Q234-ABCD-0003' },
                  { portId: '4', serial: 'Q234-ABCD-0004' },
                  { portId: '5', serial: 'Q234-ABCD-0005' },
                  { portId: '6', serial: 'Q234-ABCD-0006' },
                  { portId: '7', serial: 'Q234-ABCD-0007' },
                  { portId: '8', serial: 'Q234-ABCD-0008' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/switch/linkAggregations/{linkAggregationId}',
  tags: ['Link aggregations'],
  summary: 'Split a link aggregation group into separate ports',
  description: 'Split a link aggregation group into separate ports',
  operationId: 'deleteNetworkSwitchLinkAggregation',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      linkAggregationId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'linkAggregationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdSwitchPortSchedulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/portSchedules',
  tags: ['Switch port schedules'],
  summary: 'List switch port schedules',
  description: 'List switch port schedules',
  operationId: 'getNetworkSwitchPortSchedules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  id: '1234',
                  name: 'Weekdays schedule',
                  networkId: 'N_24329156',
                  portSchedule: {
                    friday: { active: true, from: '9:00', to: '17:00' },
                    monday: { active: true, from: '9:00', to: '17:00' },
                    saturday: { active: false, from: '0:00', to: '24:00' },
                    sunday: { active: false, from: '0:00', to: '24:00' },
                    thursday: { active: true, from: '9:00', to: '17:00' },
                    tuesday: { active: true, from: '9:00', to: '17:00' },
                    wednesday: { active: true, from: '9:00', to: '17:00' },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSwitchPortSchedulesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/switch/portSchedules',
  tags: ['Switch port schedules'],
  summary: 'Add a switch port schedule',
  description: 'Add a switch port schedule',
  operationId: 'createNetworkSwitchPortSchedule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name for your port schedule. Required' }),
              portSchedule: z
                .object({
                  friday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Friday.', required: [] }),
                  monday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Monday.', required: [] }),
                  saturday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Saturday.', required: [] }),
                  sunday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Sunday.', required: [] }),
                  thursday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Thursday.', required: [] }),
                  tuesday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Tuesday.', required: [] }),
                  wednesday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Wednesday.', required: [] }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "    The schedule for switch port scheduling. Schedules are applied to days of the week.\n    When it's empty, default schedule with all days of a week are configured.\n    Any unspecified day in the schedule is added as a default schedule configuration of the day.\n",
                  required: [],
                }),
            })
            .openapi({
              example: {
                name: 'Weekdays schedule',
                portSchedule: {
                  friday: { active: true, from: '9:00', to: '17:00' },
                  monday: { active: true, from: '9:00', to: '17:00' },
                  saturday: { active: false, from: '0:00', to: '24:00' },
                  sunday: { active: false, from: '0:00', to: '24:00' },
                  thursday: { active: true, from: '9:00', to: '17:00' },
                  tuesday: { active: true, from: '9:00', to: '17:00' },
                  wednesday: { active: true, from: '9:00', to: '17:00' },
                },
              },
              required: ['name'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '1234',
                name: 'Weekdays schedule',
                networkId: 'N_24329156',
                portSchedule: {
                  friday: { active: true, from: '9:00', to: '17:00' },
                  monday: { active: true, from: '9:00', to: '17:00' },
                  saturday: { active: false, from: '0:00', to: '24:00' },
                  sunday: { active: false, from: '0:00', to: '24:00' },
                  thursday: { active: true, from: '9:00', to: '17:00' },
                  tuesday: { active: true, from: '9:00', to: '17:00' },
                  wednesday: { active: true, from: '9:00', to: '17:00' },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/portSchedules/{portScheduleId}',
  tags: ['Switch port schedules'],
  summary: 'Update a switch port schedule',
  description: 'Update a switch port schedule',
  operationId: 'updateNetworkSwitchPortSchedule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      portScheduleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'portScheduleId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name for your port schedule.' }),
              portSchedule: z
                .object({
                  friday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Friday.', required: [] }),
                  monday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Monday.', required: [] }),
                  saturday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Saturday.', required: [] }),
                  sunday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Sunday.', required: [] }),
                  thursday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Thursday.', required: [] }),
                  tuesday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Tuesday.', required: [] }),
                  wednesday: z
                    .object({
                      active: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.",
                        }),
                      from: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.",
                        }),
                      to: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.",
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'The schedule object for Wednesday.', required: [] }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "    The schedule for switch port scheduling. Schedules are applied to days of the week.\n    When it's empty, default schedule with all days of a week are configured.\n    Any unspecified day in the schedule is added as a default schedule configuration of the day.\n",
                  required: [],
                }),
            })
            .openapi({
              example: {
                name: 'Weekdays schedule',
                portSchedule: {
                  friday: { active: true, from: '9:00', to: '17:00' },
                  monday: { active: true, from: '9:00', to: '17:00' },
                  saturday: { active: false, from: '0:00', to: '24:00' },
                  sunday: { active: false, from: '0:00', to: '24:00' },
                  thursday: { active: true, from: '9:00', to: '17:00' },
                  tuesday: { active: true, from: '9:00', to: '17:00' },
                  wednesday: { active: true, from: '9:00', to: '17:00' },
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '1234',
                name: 'Weekdays schedule',
                networkId: 'N_24329156',
                portSchedule: {
                  friday: { active: true, from: '9:00', to: '17:00' },
                  monday: { active: true, from: '9:00', to: '17:00' },
                  saturday: { active: false, from: '0:00', to: '24:00' },
                  sunday: { active: false, from: '0:00', to: '24:00' },
                  thursday: { active: true, from: '9:00', to: '17:00' },
                  tuesday: { active: true, from: '9:00', to: '17:00' },
                  wednesday: { active: true, from: '9:00', to: '17:00' },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/switch/portSchedules/{portScheduleId}',
  tags: ['Switch port schedules'],
  summary: 'Delete a switch port schedule',
  description: 'Delete a switch port schedule',
  operationId: 'deleteNetworkSwitchPortSchedule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      portScheduleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'portScheduleId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdSwitchSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings',
  tags: ['Switch settings'],
  summary: 'Returns the switch network settings',
  description: 'Returns the switch network settings',
  operationId: 'getNetworkSwitchSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                powerExceptions: [
                  { powerType: 'redundant', serial: 'Q234-ABCD-0001' },
                  { powerType: 'combined', serial: 'Q234-ABCD-0002' },
                  { powerType: 'redundant', serial: 'Q234-ABCD-0003' },
                  { powerType: 'useNetworkSetting', serial: 'Q234-ABCD-0004' },
                ],
                useCombinedPower: false,
                vlan: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/settings',
  tags: ['Switch settings'],
  summary: 'Update switch network settings',
  description: 'Update switch network settings',
  operationId: 'updateNetworkSwitchSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              powerExceptions: z
                .array(
                  z
                    .object({
                      powerType: z
                        .enum(['combined', 'redundant', 'useNetworkSetting'])
                        .openapi({
                          description:
                            'Per switch exception (combined, redundant, useNetworkSetting)',
                        }),
                      serial: z.string().openapi({ description: 'Serial number of the switch' }),
                    })
                    .openapi({ required: ['serial', 'powerType'] }),
                )
                .exactOptional()
                .openapi({ description: 'Exceptions on a per switch basis to "useCombinedPower"' }),
              useCombinedPower: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'The use Combined Power as the default behavior of secondary power supplies on supported devices.',
                }),
              vlan: z.int().exactOptional().openapi({ description: 'Management VLAN' }),
            })
            .openapi({
              example: {
                powerExceptions: [
                  { powerType: 'redundant', serial: 'Q234-ABCD-0001' },
                  { powerType: 'combined', serial: 'Q234-ABCD-0002' },
                  { powerType: 'redundant', serial: 'Q234-ABCD-0003' },
                  { powerType: 'useNetworkSetting', serial: 'Q234-ABCD-0004' },
                ],
                useCombinedPower: false,
                vlan: 100,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                powerExceptions: [
                  { powerType: 'redundant', serial: 'Q234-ABCD-0001' },
                  { powerType: 'combined', serial: 'Q234-ABCD-0002' },
                  { powerType: 'redundant', serial: 'Q234-ABCD-0003' },
                  { powerType: 'useNetworkSetting', serial: 'Q234-ABCD-0004' },
                ],
                useCombinedPower: false,
                vlan: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchSettingsMtuRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings/mtu',
  tags: ['Switch settings'],
  summary: 'Return the MTU configuration',
  description: 'Return the MTU configuration',
  operationId: 'getNetworkSwitchSettingsMtu',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                defaultMtuSize: 9578,
                overrides: [
                  {
                    mtuSize: 1500,
                    switches: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'],
                  },
                  { mtuSize: 1600, switchProfiles: ['1284392014819', '2983092129865'] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchSettingsMtuRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/settings/mtu',
  tags: ['Switch settings'],
  summary: 'Update the MTU configuration',
  description: 'Update the MTU configuration',
  operationId: 'updateNetworkSwitchSettingsMtu',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              defaultMtuSize: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'MTU size for the entire network. Default value is 9578.',
                }),
              overrides: z
                .array(
                  z
                    .object({
                      mtuSize: z
                        .int()
                        .openapi({ description: 'MTU size for the switches or switch profiles.' }),
                      switchProfiles: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'List of switch profile IDs. Applicable only for template network.',
                        }),
                      switches: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'List of switch serials. Applicable only for switch network.',
                        }),
                    })
                    .openapi({ required: ['mtuSize'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Override MTU size for individual switches or switch profiles. An empty array will clear overrides.',
                }),
            })
            .openapi({
              example: {
                defaultMtuSize: 9578,
                overrides: [
                  {
                    mtuSize: 1500,
                    switches: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'],
                  },
                  { mtuSize: 1600, switchProfiles: ['1284392014819', '2983092129865'] },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                defaultMtuSize: 9578,
                overrides: [
                  {
                    mtuSize: 1500,
                    switches: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'],
                  },
                  { mtuSize: 1600, switchProfiles: ['1284392014819', '2983092129865'] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchSettingsMulticastRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings/multicast',
  tags: ['Switch settings'],
  summary: 'Return multicast settings for a network',
  description: 'Return multicast settings for a network',
  operationId: 'getNetworkSwitchSettingsMulticast',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                defaultSettings: {
                  floodUnknownMulticastTrafficEnabled: true,
                  igmpSnoopingEnabled: true,
                },
                overrides: [
                  {
                    floodUnknownMulticastTrafficEnabled: true,
                    igmpSnoopingEnabled: true,
                    switches: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'],
                  },
                  {
                    floodUnknownMulticastTrafficEnabled: true,
                    igmpSnoopingEnabled: true,
                    stacks: ['789102', '123456', '129102'],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchSettingsMulticastRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/settings/multicast',
  tags: ['Switch settings'],
  summary: 'Update multicast settings for a network',
  description: 'Update multicast settings for a network',
  operationId: 'updateNetworkSwitchSettingsMulticast',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              defaultSettings: z
                .object({
                  floodUnknownMulticastTrafficEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Flood unknown multicast traffic setting for entire network',
                    }),
                  igmpSnoopingEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'IGMP snooping setting for entire network' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.',
                  required: [],
                }),
              overrides: z
                .array(
                  z
                    .object({
                      floodUnknownMulticastTrafficEnabled: z
                        .boolean()
                        .openapi({
                          description:
                            'Flood unknown multicast traffic setting for switches, switch stacks or switch profiles',
                        }),
                      igmpSnoopingEnabled: z
                        .boolean()
                        .openapi({
                          description:
                            'IGMP snooping setting for switches, switch stacks or switch profiles',
                        }),
                      stacks: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description: 'List of switch stack ids for non-template network',
                        }),
                      switchProfiles: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description: 'List of switch profiles ids for template network',
                        }),
                      switches: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description: 'List of switch serials for non-template network',
                        }),
                    })
                    .openapi({
                      required: ['igmpSnoopingEnabled', 'floodUnknownMulticastTrafficEnabled'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.',
                }),
            })
            .openapi({
              example: {
                defaultSettings: {
                  floodUnknownMulticastTrafficEnabled: true,
                  igmpSnoopingEnabled: true,
                },
                overrides: [
                  {
                    floodUnknownMulticastTrafficEnabled: true,
                    igmpSnoopingEnabled: true,
                    switches: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'],
                  },
                  {
                    floodUnknownMulticastTrafficEnabled: true,
                    igmpSnoopingEnabled: true,
                    stacks: ['789102', '123456', '129102'],
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                defaultSettings: {
                  floodUnknownMulticastTrafficEnabled: true,
                  igmpSnoopingEnabled: true,
                },
                overrides: [
                  {
                    floodUnknownMulticastTrafficEnabled: true,
                    igmpSnoopingEnabled: true,
                    switches: ['Q234-ABCD-0001', 'Q234-ABCD-0002', 'Q234-ABCD-0003'],
                  },
                  {
                    floodUnknownMulticastTrafficEnabled: true,
                    igmpSnoopingEnabled: true,
                    stacks: ['789102', '123456', '129102'],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchSettingsQosRulesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings/qosRules',
  tags: ['Switch settings'],
  summary: 'List quality of service rules',
  description: 'List quality of service rules',
  operationId: 'getNetworkSwitchSettingsQosRules',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  dscp: 0,
                  dstPort: 3000,
                  dstPortRange: '3000-3100',
                  id: '1284392014819',
                  protocol: 'TCP',
                  srcPort: 2000,
                  srcPortRange: '70-80',
                  vlan: 100,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSwitchSettingsQosRulesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/switch/settings/qosRules',
  tags: ['Switch settings'],
  summary: 'Add a quality of service rule',
  description: 'Add a quality of service rule',
  operationId: 'createNetworkSwitchSettingsQosRule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dscp: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0',
                }),
              dstPort: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.',
                }),
              dstPortRange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80',
                }),
              protocol: z
                .enum(['ANY', 'TCP', 'UDP'])
                .exactOptional()
                .openapi({
                  description:
                    'The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY"',
                }),
              srcPort: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The source port of the incoming packet. Applicable only if protocol is TCP or UDP.',
                }),
              srcPortRange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80',
                }),
              vlan: z
                .int()
                .openapi({
                  description: 'The VLAN of the incoming packet. A null value will match any VLAN.',
                }),
            })
            .openapi({
              example: {
                dscp: 0,
                dstPort: 3000,
                dstPortRange: '3000-3100',
                protocol: 'TCP',
                srcPort: 2000,
                srcPortRange: '70-80',
                vlan: 100,
              },
              required: ['vlan'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                dscp: 0,
                dstPort: 3000,
                dstPortRange: '3000-3100',
                id: '1284392014819',
                protocol: 'TCP',
                srcPort: 2000,
                srcPortRange: '70-80',
                vlan: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchSettingsQosRulesOrderRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings/qosRules/order',
  tags: ['Switch settings'],
  summary:
    'Return the quality of service rule IDs by order in which they will be processed by the switch',
  description:
    'Return the quality of service rule IDs by order in which they will be processed by the switch',
  operationId: 'getNetworkSwitchSettingsQosRulesOrder',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { ruleIds: ['1284392014819', '2983092129865'] } } },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchSettingsQosRulesOrderRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/settings/qosRules/order',
  tags: ['Switch settings'],
  summary: 'Update the order in which the rules should be processed by the switch',
  description: 'Update the order in which the rules should be processed by the switch',
  operationId: 'updateNetworkSwitchSettingsQosRulesOrder',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ruleIds: z
                .array(z.string())
                .openapi({
                  description:
                    'A list of quality of service rule IDs arranged in order in which they should be processed by the switch.',
                }),
            })
            .openapi({
              example: { ruleIds: ['1284392014819', '2983092129865'] },
              required: ['ruleIds'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { ruleIds: ['1284392014819', '2983092129865'] } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings/qosRules/{qosRuleId}',
  tags: ['Switch settings'],
  summary: 'Return a quality of service rule',
  description: 'Return a quality of service rule',
  operationId: 'getNetworkSwitchSettingsQosRule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      qosRuleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'qosRuleId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                dscp: 0,
                dstPort: 3000,
                dstPortRange: '3000-3100',
                id: '1284392014819',
                protocol: 'TCP',
                srcPort: 2000,
                srcPortRange: '70-80',
                vlan: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/settings/qosRules/{qosRuleId}',
  tags: ['Switch settings'],
  summary: 'Update a quality of service rule',
  description: 'Update a quality of service rule',
  operationId: 'updateNetworkSwitchSettingsQosRule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      qosRuleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'qosRuleId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dscp: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0.',
                }),
              dstPort: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.',
                }),
              dstPortRange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80',
                }),
              protocol: z
                .enum(['ANY', 'TCP', 'UDP'])
                .exactOptional()
                .openapi({
                  description:
                    'The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY".',
                }),
              srcPort: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The source port of the incoming packet. Applicable only if protocol is TCP or UDP.',
                }),
              srcPortRange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80',
                }),
              vlan: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The VLAN of the incoming packet. A null value will match any VLAN.',
                }),
            })
            .openapi({
              example: {
                dscp: 0,
                dstPort: 3000,
                dstPortRange: '3000-3100',
                protocol: 'TCP',
                srcPort: 2000,
                srcPortRange: '70-80',
                vlan: 100,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                dscp: 0,
                dstPort: 3000,
                dstPortRange: '3000-3100',
                id: '1284392014819',
                protocol: 'TCP',
                srcPort: 2000,
                srcPortRange: '70-80',
                vlan: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/switch/settings/qosRules/{qosRuleId}',
  tags: ['Switch settings'],
  summary: 'Delete a quality of service rule',
  description: 'Delete a quality of service rule',
  operationId: 'deleteNetworkSwitchSettingsQosRule',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      qosRuleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'qosRuleId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdSwitchSettingsStormControlRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switch/settings/stormControl',
  tags: ['Switch settings'],
  summary: 'Return the storm control configuration for a switch network',
  description: 'Return the storm control configuration for a switch network',
  operationId: 'getNetworkSwitchSettingsStormControl',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                broadcastThreshold: 30,
                multicastThreshold: 30,
                unknownUnicastThreshold: 30,
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSwitchSettingsStormControlRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/switch/settings/stormControl',
  tags: ['Switch settings'],
  summary: 'Update the storm control configuration for a switch network',
  description: 'Update the storm control configuration for a switch network',
  operationId: 'updateNetworkSwitchSettingsStormControl',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              broadcastThreshold: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.',
                }),
              multicastThreshold: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.',
                }),
              unknownUnicastThreshold: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.',
                }),
            })
            .openapi({
              example: {
                broadcastThreshold: 30,
                multicastThreshold: 30,
                unknownUnicastThreshold: 30,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                broadcastThreshold: 30,
                multicastThreshold: 30,
                unknownUnicastThreshold: 30,
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchStacksRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switchStacks',
  tags: ['Switch stacks'],
  summary: 'List the switch stacks in a network',
  description: 'List the switch stacks in a network',
  operationId: 'getNetworkSwitchStacks',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                { id: '8473', name: 'A cool stack', serials: ['QBZY-XWVU-TSRQ', 'QBAB-CDEF-GHIJ'] },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSwitchStacksRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/switchStacks',
  tags: ['Switch stacks'],
  summary: 'Create a stack',
  description: 'Create a stack',
  operationId: 'createNetworkSwitchStack',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the new stack' }),
              serials: z
                .array(z.string())
                .openapi({
                  description: 'An array of switch serials to be added into the new stack',
                }),
            })
            .openapi({
              example: { name: 'A cool stack', serials: ['QBZY-XWVU-TSRQ', 'QBAB-CDEF-GHIJ'] },
              required: ['name', 'serials'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '8473',
                name: 'A cool stack',
                serials: ['QBZY-XWVU-TSRQ', 'QBAB-CDEF-GHIJ'],
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/switchStacks/{switchStackId}',
  tags: ['Switch stacks'],
  summary: 'Show a switch stack',
  description: 'Show a switch stack',
  operationId: 'getNetworkSwitchStack',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      switchStackId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'switchStackId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '8473',
                name: 'A cool stack',
                serials: ['QBZY-XWVU-TSRQ', 'QBAB-CDEF-GHIJ'],
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/switchStacks/{switchStackId}',
  tags: ['Switch stacks'],
  summary: 'Delete a stack',
  description: 'Delete a stack',
  operationId: 'deleteNetworkSwitchStack',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      switchStackId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'switchStackId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/switchStacks/{switchStackId}/add',
  tags: ['Switch stacks'],
  summary: 'Add a switch to a stack',
  description: 'Add a switch to a stack',
  operationId: 'addNetworkSwitchStack',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      switchStackId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'switchStackId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              serial: z.string().openapi({ description: 'The serial of the switch to be added' }),
            })
            .openapi({ example: { serial: 'QBZY-XWVU-TSRQ' }, required: ['serial'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '8473',
                name: 'A cool stack',
                serials: ['QBZY-XWVU-TSRQ', 'QBAB-CDEF-GHIJ'],
              },
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/switchStacks/{switchStackId}/remove',
  tags: ['Switch stacks'],
  summary: 'Remove a switch from a stack',
  description: 'Remove a switch from a stack',
  operationId: 'removeNetworkSwitchStack',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      switchStackId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'switchStackId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              serial: z.string().openapi({ description: 'The serial of the switch to be removed' }),
            })
            .openapi({ example: { serial: 'QBZY-XWVU-TSRQ' }, required: ['serial'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: { value: { id: '8473', name: 'A cool stack', serials: ['QBAB-CDEF-GHIJ'] } },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSyslogServersRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/syslogServers',
  tags: ['Syslog servers'],
  summary: 'List the syslog servers for a network',
  description: 'List the syslog servers for a network',
  operationId: 'getNetworkSyslogServers',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [{ host: '1.2.3.4', port: 443, roles: ['Wireless event log', 'URLs'] }],
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSyslogServersRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/syslogServers',
  tags: ['Syslog servers'],
  summary: 'Update the syslog servers for a network',
  description: 'Update the syslog servers for a network',
  operationId: 'updateNetworkSyslogServers',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              servers: z
                .array(
                  z
                    .object({
                      host: z
                        .string()
                        .openapi({ description: 'The IP address of the syslog server' }),
                      port: z.int().openapi({ description: 'The port of the syslog server' }),
                      roles: z
                        .array(z.string())
                        .openapi({
                          description:
                            "A list of roles for the syslog server. Options (case-insensitive): 'Wireless event log', 'Appliance event log', 'Switch event log', 'Air Marshal events', 'Flows', 'URLs', 'IDS alerts', 'Security events'",
                        }),
                    })
                    .openapi({ required: ['host', 'port', 'roles'] }),
                )
                .openapi({ description: 'A list of the syslog servers for this network' }),
            })
            .openapi({
              example: {
                servers: [{ host: '1.2.3.4', port: 443, roles: ['Wireless event log', 'URLs'] }],
              },
              required: ['servers'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [{ host: '1.2.3.4', port: 443, roles: ['Wireless event log', 'URLs'] }],
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdTrafficRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/traffic',
  tags: ['Networks'],
  summary: 'Return the traffic analysis data for this network',
  description:
    'Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.',
  operationId: 'getNetworkTraffic',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 30 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      deviceType: z
        .enum(['appliance', 'combined', 'switch', 'wireless'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.",
            in: 'query',
            name: 'deviceType',
            schema: { enum: ['appliance', 'combined', 'switch', 'wireless'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  activeTime: 77000,
                  application: 'Gmail',
                  destination: null,
                  flows: 300,
                  numClients: 7,
                  port: 443,
                  protocol: 'TCP',
                  recv: 61,
                  sent: 138,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdUnbindRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/unbind',
  tags: ['Networks'],
  summary: 'Unbind a network from a template.',
  description: 'Unbind a network from a template.',
  operationId: 'unbindNetwork',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdUplinkSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/uplinkSettings',
  tags: ['Traffic shaping uplink settings'],
  summary: 'Returns the uplink settings for your MX network.',
  description: 'Returns the uplink settings for your MX network.',
  operationId: 'getNetworkUplinkSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                bandwidthLimits: {
                  cellular: { limitDown: 51200, limitUp: 51200 },
                  wan1: { limitDown: 1000000, limitUp: 1000000 },
                  wan2: { limitDown: 1000000, limitUp: 1000000 },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdUplinkSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/uplinkSettings',
  tags: ['Traffic shaping uplink settings'],
  summary: 'Updates the uplink settings for your MX network.',
  description: 'Updates the uplink settings for your MX network.',
  operationId: 'updateNetworkUplinkSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bandwidthLimits: z
                .object({
                  cellular: z
                    .object({
                      limitDown: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The maximum download limit (integer, in Kbps). null indicates no limit',
                        }),
                      limitUp: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The maximum upload limit (integer, in Kbps). null indicates no limit',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: "The bandwidth settings for the 'cellular' uplink",
                      required: [],
                    }),
                  wan1: z
                    .object({
                      limitDown: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The maximum download limit (integer, in Kbps). null indicates no limit',
                        }),
                      limitUp: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The maximum upload limit (integer, in Kbps). null indicates no limit',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: "The bandwidth settings for the 'wan1' uplink",
                      required: [],
                    }),
                  wan2: z
                    .object({
                      limitDown: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The maximum download limit (integer, in Kbps). null indicates no limit',
                        }),
                      limitUp: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The maximum upload limit (integer, in Kbps). null indicates no limit',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: "The bandwidth settings for the 'wan2' uplink",
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)',
                  required: [],
                }),
            })
            .openapi({
              example: {
                bandwidthLimits: {
                  cellular: { limitDown: 51200, limitUp: 51200 },
                  wan1: { limitDown: 1000000, limitUp: 1000000 },
                  wan2: { limitDown: 1000000, limitUp: 1000000 },
                },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                bandwidthLimits: {
                  cellular: { limitDown: 51200, limitUp: 51200 },
                  wan1: { limitDown: 1000000, limitUp: 1000000 },
                  wan2: { limitDown: 1000000, limitUp: 1000000 },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdVlansRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/vlans',
  tags: ['VLANs'],
  summary: 'List the VLANs for an MX network',
  description: 'List the VLANs for an MX network',
  operationId: 'getNetworkVlans',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  applianceIp: '192.168.1.2',
                  cidr: '192.168.1.0/24',
                  dhcpBootFilename: 'sample.file',
                  dhcpBootNextServer: '1.2.3.4',
                  dhcpBootOptionsEnabled: false,
                  dhcpHandling: 'Run a DHCP server',
                  dhcpLeaseTime: '1 day',
                  dhcpOptions: [{ code: '5', type: 'text', value: 'five' }],
                  dhcpRelayServerIps: ['192.168.1.0/24', '192.168.128.0/24'],
                  dnsNameservers: 'google_dns',
                  fixedIpAssignments: {
                    '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                  },
                  groupPolicyId: '101',
                  id: '1234',
                  ipv6: {
                    enabled: true,
                    prefixAssignments: [
                      {
                        autonomous: false,
                        origin: { interfaces: ['wan0'], type: 'internet' },
                        staticApplianceIp6: '2001:db8:3c4d:15::1',
                        staticPrefix: '2001:db8:3c4d:15::/64',
                      },
                    ],
                  },
                  mandatoryDhcp: { enabled: true },
                  mask: 28,
                  name: 'My VLAN',
                  networkId: 'N_24329156',
                  reservedIpRanges: [
                    { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                  ],
                  subnet: '192.168.1.0/24',
                  templateVlanType: 'same',
                  vpnNatSubnet: '192.168.1.0/24',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdVlansRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/vlans',
  tags: ['VLANs'],
  summary: 'Add a VLAN',
  description: 'Add a VLAN',
  operationId: 'createNetworkVlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              applianceIp: z
                .string()
                .openapi({ description: 'The local IP of the appliance on the VLAN' }),
              groupPolicyId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The id of the desired group policy to apply to the VLAN',
                }),
              id: z
                .string()
                .openapi({
                  description: 'The VLAN ID of the new VLAN (must be between 1 and 4094)',
                }),
              name: z.string().openapi({ description: 'The name of the new VLAN' }),
              subnet: z.string().openapi({ description: 'The subnet of the VLAN' }),
            })
            .openapi({
              example: {
                applianceIp: '192.168.1.2',
                groupPolicyId: '101',
                id: '1234',
                name: 'My VLAN',
                subnet: '192.168.1.0/24',
              },
              required: ['id', 'name', 'subnet', 'applianceIp'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                applianceIp: '192.168.1.2',
                cidr: '192.168.1.0/24',
                dhcpBootFilename: 'sample.file',
                dhcpBootNextServer: '1.2.3.4',
                dhcpBootOptionsEnabled: false,
                dhcpHandling: 'Run a DHCP server',
                dhcpLeaseTime: '1 day',
                dhcpOptions: [],
                dnsNameservers: 'google_dns',
                fixedIpAssignments: {},
                groupPolicyId: '101',
                id: '1234',
                ipv6: {
                  enabled: true,
                  prefixAssignments: [
                    {
                      autonomous: false,
                      origin: { interfaces: ['wan0'], type: 'internet' },
                      staticApplianceIp6: '2001:db8:3c4d:15::1',
                      staticPrefix: '2001:db8:3c4d:15::/64',
                    },
                  ],
                },
                mandatoryDhcp: { enabled: true },
                mask: 28,
                name: 'My VLAN',
                networkId: 'N_24329156',
                reservedIpRanges: [],
                subnet: '192.168.1.0/24',
                templateVlanType: 'same',
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdVlansVlanIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/vlans/{vlanId}',
  tags: ['VLANs'],
  summary: 'Return a VLAN',
  description: 'Return a VLAN',
  operationId: 'getNetworkVlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      vlanId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vlanId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                applianceIp: '192.168.1.2',
                cidr: '192.168.1.0/24',
                dhcpBootFilename: 'sample.file',
                dhcpBootNextServer: '1.2.3.4',
                dhcpBootOptionsEnabled: false,
                dhcpHandling: 'Run a DHCP server',
                dhcpLeaseTime: '1 day',
                dhcpOptions: [{ code: '5', type: 'text', value: 'five' }],
                dhcpRelayServerIps: ['192.168.1.0/24', '192.168.128.0/24'],
                dnsNameservers: 'google_dns',
                fixedIpAssignments: {
                  '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                },
                groupPolicyId: '101',
                id: '1234',
                ipv6: {
                  enabled: true,
                  prefixAssignments: [
                    {
                      autonomous: false,
                      origin: { interfaces: ['wan0'], type: 'internet' },
                      staticApplianceIp6: '2001:db8:3c4d:15::1',
                      staticPrefix: '2001:db8:3c4d:15::/64',
                    },
                  ],
                },
                mandatoryDhcp: { enabled: true },
                mask: 28,
                name: 'My VLAN',
                networkId: 'N_24329156',
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
                subnet: '192.168.1.0/24',
                templateVlanType: 'same',
                vpnNatSubnet: '192.168.1.0/24',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdVlansVlanIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/vlans/{vlanId}',
  tags: ['VLANs'],
  summary: 'Update a VLAN',
  description: 'Update a VLAN',
  operationId: 'updateNetworkVlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      vlanId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vlanId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              applianceIp: z
                .string()
                .exactOptional()
                .openapi({ description: 'The local IP of the appliance on the VLAN' }),
              dhcpBootFilename: z
                .string()
                .exactOptional()
                .openapi({ description: 'DHCP boot option for boot filename' }),
              dhcpBootNextServer: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'DHCP boot option to direct boot clients to the server to load the boot file from',
                }),
              dhcpBootOptionsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use DHCP boot options specified in other properties' }),
              dhcpHandling: z
                .enum([
                  'Do not respond to DHCP requests',
                  'Relay DHCP to another server',
                  'Run a DHCP server',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'",
                }),
              dhcpLeaseTime: z
                .enum(['1 day', '1 hour', '1 week', '12 hours', '30 minutes', '4 hours'])
                .exactOptional()
                .openapi({
                  description:
                    "The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'",
                }),
              dhcpOptions: z
                .array(
                  z
                    .object({
                      code: z
                        .string()
                        .openapi({
                          description:
                            'The code for the DHCP option. This should be an integer between 2 and 254.',
                        }),
                      type: z
                        .enum(['hex', 'integer', 'ip', 'text'])
                        .openapi({
                          description:
                            "The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'",
                        }),
                      value: z.string().openapi({ description: 'The value for the DHCP option' }),
                    })
                    .openapi({ required: ['code', 'type', 'value'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.',
                }),
              dhcpRelayServerIps: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The IPs of the DHCP servers that DHCP requests should be relayed to',
                }),
              dnsNameservers: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names',
                }),
              fixedIpAssignments: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.',
                }),
              groupPolicyId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The id of the desired group policy to apply to the VLAN',
                }),
              name: z.string().exactOptional().openapi({ description: 'The name of the VLAN' }),
              reservedIpRanges: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .openapi({ description: 'A text comment for the reserved range' }),
                      end: z.string().openapi({ description: 'The last IP in the reserved range' }),
                      start: z
                        .string()
                        .openapi({ description: 'The first IP in the reserved range' }),
                    })
                    .openapi({ required: ['start', 'end', 'comment'] }),
                )
                .exactOptional()
                .openapi({ description: 'The DHCP reserved IP ranges on the VLAN' }),
              subnet: z.string().exactOptional().openapi({ description: 'The subnet of the VLAN' }),
              vpnNatSubnet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN',
                }),
            })
            .openapi({
              example: {
                applianceIp: '192.168.1.2',
                cidr: '192.168.1.0/24',
                dhcpBootFilename: 'sample.file',
                dhcpBootNextServer: '1.2.3.4',
                dhcpBootOptionsEnabled: false,
                dhcpHandling: 'Run a DHCP server',
                dhcpLeaseTime: '1 day',
                dhcpOptions: [{ code: '5', type: 'text', value: 'five' }],
                dhcpRelayServerIps: ['192.168.1.0/24', '192.168.128.0/24'],
                dnsNameservers: 'google_dns',
                fixedIpAssignments: {
                  '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                },
                groupPolicyId: '101',
                ipv6: {
                  enabled: true,
                  prefixAssignments: [
                    {
                      autonomous: false,
                      origin: { interfaces: ['wan0'], type: 'internet' },
                      staticApplianceIp6: '2001:db8:3c4d:15::1',
                      staticPrefix: '2001:db8:3c4d:15::/64',
                    },
                  ],
                },
                mandatoryDhcp: { enabled: true },
                mask: 28,
                name: 'My VLAN',
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
                subnet: '192.168.1.0/24',
                templateVlanType: 'same',
                vpnNatSubnet: '192.168.1.0/24',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                applianceIp: '192.168.1.2',
                cidr: '192.168.1.0/24',
                dhcpBootFilename: 'sample.file',
                dhcpBootNextServer: '1.2.3.4',
                dhcpBootOptionsEnabled: false,
                dhcpHandling: 'Run a DHCP server',
                dhcpLeaseTime: '1 day',
                dhcpOptions: [{ code: '5', type: 'text', value: 'five' }],
                dhcpRelayServerIps: ['192.168.1.0/24', '192.168.128.0/24'],
                dnsNameservers: 'google_dns',
                fixedIpAssignments: {
                  '22:33:44:55:66:77': { ip: '1.2.3.4', name: 'Some client name' },
                },
                groupPolicyId: '101',
                id: '1234',
                ipv6: {
                  enabled: true,
                  prefixAssignments: [
                    {
                      autonomous: false,
                      origin: { interfaces: ['wan0'], type: 'internet' },
                      staticApplianceIp6: '2001:db8:3c4d:15::1',
                      staticPrefix: '2001:db8:3c4d:15::/64',
                    },
                  ],
                },
                mandatoryDhcp: { enabled: true },
                mask: 28,
                name: 'My VLAN',
                networkId: 'N_24329156',
                reservedIpRanges: [
                  { comment: 'A reserved IP range', end: '192.168.1.1', start: '192.168.1.0' },
                ],
                subnet: '192.168.1.0/24',
                templateVlanType: 'same',
                vpnNatSubnet: '192.168.1.0/24',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdVlansVlanIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/vlans/{vlanId}',
  tags: ['VLANs'],
  summary: 'Delete a VLAN from a network',
  description: 'Delete a VLAN from a network',
  operationId: 'deleteNetworkVlan',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      vlanId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vlanId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdVlansEnabledStateRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/vlansEnabledState',
  tags: ['VLANs'],
  summary: 'Returns the enabled status of VLANs for the network',
  description: 'Returns the enabled status of VLANs for the network',
  operationId: 'getNetworkVlansEnabledState',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { enabled: true, networkId: 'N_24329156' } } },
        },
      },
    },
  },
})

export const putNetworksNetworkIdVlansEnabledStateRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/vlansEnabledState',
  tags: ['VLANs'],
  summary: 'Enable/Disable VLANs for the given network',
  description: 'Enable/Disable VLANs for the given network',
  operationId: 'updateNetworkVlansEnabledState',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z
                .boolean()
                .openapi({
                  description:
                    'Boolean indicating whether to enable (true) or disable (false) VLANs for the network',
                }),
            })
            .openapi({ example: { enabled: true }, required: ['enabled'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { enabled: true, networkId: 'N_24329156' } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdWarmSpareSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/warmSpareSettings',
  tags: ['MX warm spare settings'],
  summary: 'Return MX warm spare settings',
  description: 'Return MX warm spare settings',
  operationId: 'getNetworkWarmSpareSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                enabled: true,
                primarySerial: 'Q234-ABCD-5678',
                spareSerial: 'Q234-ABCD-5678',
                uplinkMode: 'virtual',
                wan1: { ip: '1.2.3.4', subnet: '192.168.1.0/24' },
                wan2: { ip: '1.2.3.4', subnet: '192.168.128.0/24' },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdWarmSpareSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/warmSpareSettings',
  tags: ['MX warm spare settings'],
  summary: 'Update MX warm spare settings',
  description: 'Update MX warm spare settings',
  operationId: 'updateNetworkWarmSpareSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z.boolean().openapi({ description: 'Enable warm spare' }),
              spareSerial: z
                .string()
                .exactOptional()
                .openapi({ description: 'Serial number of the warm spare appliance' }),
              uplinkMode: z
                .string()
                .exactOptional()
                .openapi({ description: 'Uplink mode, either virtual or public' }),
              virtualIp1: z
                .string()
                .exactOptional()
                .openapi({ description: 'The WAN 1 shared IP' }),
              virtualIp2: z
                .string()
                .exactOptional()
                .openapi({ description: 'The WAN 2 shared IP' }),
            })
            .openapi({
              example: {
                enabled: true,
                spareSerial: 'Q234-ABCD-5678',
                uplinkMode: 'virtual',
                virtualIp1: '1.2.3.4',
                virtualIp2: '1.2.3.4',
              },
              required: ['enabled'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                enabled: true,
                primarySerial: 'Q234-ABCD-5678',
                spareSerial: 'Q234-ABCD-5678',
                uplinkMode: 'virtual',
                wan1: { ip: '1.2.3.4', subnet: '192.168.1.0/24' },
                wan2: { ip: '1.2.3.4', subnet: '192.168.128.0/24' },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdWirelessRfProfilesRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/wireless/rfProfiles',
  tags: ['Radio settings'],
  summary: 'List the non-basic RF profiles for this network',
  description: 'List the non-basic RF profiles for this network',
  operationId: 'getNetworkWirelessRfProfiles',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      includeTemplateProfiles: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.',
            in: 'query',
            name: 'includeTemplateProfiles',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  afcEnabled: true,
                  apBandSettings: { bandOperationMode: 'dual', bandSteeringEnabled: true },
                  bandSelectionType: 'ap',
                  clientBalancingEnabled: true,
                  fiveGhzSettings: {
                    channelWidth: 'auto',
                    maxPower: 30,
                    minBitrate: 12,
                    minPower: 8,
                    rxsop: null,
                    validAutoChannels: [
                      36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132,
                      136, 140, 144, 149, 153, 157, 161, 165,
                    ],
                  },
                  id: '1234',
                  minBitrateType: 'band',
                  name: 'Some Custom RF Profile',
                  networkId: 'N_24329156',
                  perSsidSettings: {
                    '0': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 0',
                    },
                    '1': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 1',
                    },
                    '2': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 2',
                    },
                    '3': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 3',
                    },
                    '4': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 4',
                    },
                    '5': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 5',
                    },
                    '6': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 6',
                    },
                    '7': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 7',
                    },
                    '8': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 8',
                    },
                    '9': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 9',
                    },
                    '10': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 10',
                    },
                    '11': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 11',
                    },
                    '12': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 12',
                    },
                    '13': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 13',
                    },
                    '14': {
                      bandOperationMode: 'dual',
                      bandSteeringEnabled: true,
                      minBitrate: 11,
                      name: 'SSID 14',
                    },
                  },
                  transmission: { enabled: true },
                  twoFourGhzSettings: {
                    axEnabled: true,
                    maxPower: 30,
                    minBitrate: 11,
                    minPower: 5,
                    rxsop: null,
                    validAutoChannels: [1, 6, 11],
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postNetworksNetworkIdWirelessRfProfilesRoute = createRoute({
  method: 'post',
  path: '/networks/{networkId}/wireless/rfProfiles',
  tags: ['Radio settings'],
  summary: 'Creates new RF profile for this network',
  description: 'Creates new RF profile for this network',
  operationId: 'createNetworkWirelessRfProfile',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apBandSettings: z
                .object({
                  bandOperationMode: z
                    .enum(['2.4ghz', '5ghz', 'dual'])
                    .exactOptional()
                    .openapi({
                      description: "Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual.",
                    }),
                  bandSteeringEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Steers client to most open band. Can be either true or false. Defaults to true.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: "Settings that will be enabled if selectionType is set to 'ap'.",
                  required: [],
                }),
              bandSelectionType: z
                .enum(['ap', 'ssid'])
                .openapi({
                  description:
                    "Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.",
                }),
              clientBalancingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Steers client to best available access point. Can be either true or false. Defaults to true.',
                }),
              fiveGhzSettings: z
                .object({
                  channelWidth: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. Defaults to auto.",
                    }),
                  maxPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 30.',
                    }),
                  minBitrate: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. Defaults to 12.",
                    }),
                  minPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 8.',
                    }),
                  rxsop: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.',
                    }),
                  validAutoChannels: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.Defaults to [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165].",
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Settings related to 5Ghz band', required: [] }),
              minBitrateType: z
                .enum(['band', 'ssid'])
                .exactOptional()
                .openapi({
                  description:
                    "Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.",
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the new profile. Must be unique. This param is required on creation.',
                }),
              twoFourGhzSettings: z
                .object({
                  axEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.',
                    }),
                  maxPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 30.',
                    }),
                  minBitrate: z
                    .float32()
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. Defaults to 11.",
                    }),
                  minPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 5.',
                    }),
                  rxsop: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.',
                    }),
                  validAutoChannels: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. Defaults to [1, 6, 11].",
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Settings related to 2.4Ghz band', required: [] }),
            })
            .openapi({ example: {}, required: ['name', 'bandSelectionType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                afcEnabled: true,
                apBandSettings: { bandOperationMode: 'dual', bandSteeringEnabled: true },
                bandSelectionType: 'ap',
                clientBalancingEnabled: true,
                fiveGhzSettings: {
                  channelWidth: 'auto',
                  maxPower: 30,
                  minBitrate: 12,
                  minPower: 8,
                  rxsop: null,
                  validAutoChannels: [
                    36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132,
                    136, 140, 144, 149, 153, 157, 161, 165,
                  ],
                },
                id: '1234',
                minBitrateType: 'band',
                name: 'Some Custom RF Profile',
                networkId: 'N_24329156',
                perSsidSettings: {
                  '0': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 0',
                  },
                  '1': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 1',
                  },
                  '2': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 2',
                  },
                  '3': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 3',
                  },
                  '4': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 4',
                  },
                  '5': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 5',
                  },
                  '6': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 6',
                  },
                  '7': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 7',
                  },
                  '8': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 8',
                  },
                  '9': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 9',
                  },
                  '10': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 10',
                  },
                  '11': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 11',
                  },
                  '12': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 12',
                  },
                  '13': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 13',
                  },
                  '14': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 14',
                  },
                },
                transmission: { enabled: true },
                twoFourGhzSettings: {
                  axEnabled: true,
                  maxPower: 30,
                  minBitrate: 11,
                  minPower: 5,
                  rxsop: null,
                  validAutoChannels: [1, 6, 11],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/wireless/rfProfiles/{rfProfileId}',
  tags: ['Radio settings'],
  summary: 'Return a RF profile',
  description: 'Return a RF profile',
  operationId: 'getNetworkWirelessRfProfile',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      rfProfileId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'rfProfileId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                afcEnabled: true,
                apBandSettings: { bandOperationMode: 'dual', bandSteeringEnabled: true },
                bandSelectionType: 'ap',
                clientBalancingEnabled: true,
                fiveGhzSettings: {
                  channelWidth: 'auto',
                  maxPower: 30,
                  minBitrate: 12,
                  minPower: 8,
                  rxsop: null,
                  validAutoChannels: [
                    36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132,
                    136, 140, 144, 149, 153, 157, 161, 165,
                  ],
                },
                id: '1234',
                minBitrateType: 'band',
                name: 'Some Custom RF Profile',
                networkId: 'N_24329156',
                perSsidSettings: {
                  '0': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 0',
                  },
                  '1': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 1',
                  },
                  '2': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 2',
                  },
                  '3': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 3',
                  },
                  '4': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 4',
                  },
                  '5': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 5',
                  },
                  '6': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 6',
                  },
                  '7': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 7',
                  },
                  '8': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 8',
                  },
                  '9': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 9',
                  },
                  '10': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 10',
                  },
                  '11': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 11',
                  },
                  '12': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 12',
                  },
                  '13': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 13',
                  },
                  '14': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 14',
                  },
                },
                transmission: { enabled: true },
                twoFourGhzSettings: {
                  axEnabled: true,
                  maxPower: 30,
                  minBitrate: 11,
                  minPower: 5,
                  rxsop: null,
                  validAutoChannels: [1, 6, 11],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/wireless/rfProfiles/{rfProfileId}',
  tags: ['Radio settings'],
  summary: 'Updates specified RF profile for this network',
  description: 'Updates specified RF profile for this network',
  operationId: 'updateNetworkWirelessRfProfile',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      rfProfileId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'rfProfileId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apBandSettings: z
                .object({
                  bandOperationMode: z
                    .enum(['2.4ghz', '5ghz', 'dual'])
                    .exactOptional()
                    .openapi({ description: "Choice between 'dual', '2.4ghz' or '5ghz'." }),
                  bandSteeringEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Steers client to most open band. Can be either true or false.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: "Settings that will be enabled if selectionType is set to 'ap'.",
                  required: [],
                }),
              bandSelectionType: z
                .enum(['ap', 'ssid'])
                .exactOptional()
                .openapi({ description: "Band selection can be set to either 'ssid' or 'ap'." }),
              clientBalancingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Steers client to best available access point. Can be either true or false.',
                }),
              fiveGhzSettings: z
                .object({
                  channelWidth: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'.",
                    }),
                  maxPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30.',
                    }),
                  minBitrate: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'.",
                    }),
                  minPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30.',
                    }),
                  rxsop: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.',
                    }),
                  validAutoChannels: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.",
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Settings related to 5Ghz band', required: [] }),
              minBitrateType: z
                .enum(['band', 'ssid'])
                .exactOptional()
                .openapi({ description: "Minimum bitrate can be set to either 'band' or 'ssid'." }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the new profile. Must be unique.' }),
              twoFourGhzSettings: z
                .object({
                  axEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering.',
                    }),
                  maxPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30.',
                    }),
                  minBitrate: z
                    .float32()
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.",
                    }),
                  minPower: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30.',
                    }),
                  rxsop: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.',
                    }),
                  validAutoChannels: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({
                      description:
                        "Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'.",
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Settings related to 2.4Ghz band', required: [] }),
            })
            .openapi({ example: {}, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                afcEnabled: true,
                apBandSettings: { bandOperationMode: 'dual', bandSteeringEnabled: true },
                bandSelectionType: 'ap',
                clientBalancingEnabled: true,
                fiveGhzSettings: {
                  channelWidth: 'auto',
                  maxPower: 30,
                  minBitrate: 12,
                  minPower: 8,
                  rxsop: null,
                  validAutoChannels: [
                    36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132,
                    136, 140, 144, 149, 153, 157, 161, 165,
                  ],
                },
                id: '1234',
                minBitrateType: 'band',
                name: 'Some Custom RF Profile',
                networkId: 'N_24329156',
                perSsidSettings: {
                  '0': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 0',
                  },
                  '1': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 1',
                  },
                  '2': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 2',
                  },
                  '3': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 3',
                  },
                  '4': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 4',
                  },
                  '5': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 5',
                  },
                  '6': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 6',
                  },
                  '7': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 7',
                  },
                  '8': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 8',
                  },
                  '9': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 9',
                  },
                  '10': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 10',
                  },
                  '11': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 11',
                  },
                  '12': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 12',
                  },
                  '13': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 13',
                  },
                  '14': {
                    bandOperationMode: 'dual',
                    bandSteeringEnabled: true,
                    minBitrate: 11,
                    name: 'SSID 14',
                  },
                },
                transmission: { enabled: true },
                twoFourGhzSettings: {
                  axEnabled: true,
                  maxPower: 30,
                  minBitrate: 11,
                  minPower: 5,
                  rxsop: null,
                  validAutoChannels: [1, 6, 11],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute = createRoute({
  method: 'delete',
  path: '/networks/{networkId}/wireless/rfProfiles/{rfProfileId}',
  tags: ['Radio settings'],
  summary: 'Delete a RF Profile',
  description: 'Delete a RF Profile',
  operationId: 'deleteNetworkWirelessRfProfile',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
      rfProfileId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'rfProfileId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getNetworksNetworkIdWirelessSettingsRoute = createRoute({
  method: 'get',
  path: '/networks/{networkId}/wireless/settings',
  tags: ['Wireless settings'],
  summary: 'Return the wireless settings for a network',
  description: 'Return the wireless settings for a network',
  operationId: 'getNetworkWirelessSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                ipv6BridgeEnabled: false,
                ledLightsOn: false,
                locationAnalyticsEnabled: false,
                meshingEnabled: true,
                upgradeStrategy: 'minimizeUpgradeTime',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdWirelessSettingsRoute = createRoute({
  method: 'put',
  path: '/networks/{networkId}/wireless/settings',
  tags: ['Wireless settings'],
  summary: 'Update the wireless settings for a network',
  description: 'Update the wireless settings for a network',
  operationId: 'updateNetworkWirelessSettings',
  request: {
    params: z.object({
      networkId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'networkId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ipv6BridgeEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)',
                }),
              ledLightsOn: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)',
                }),
              locationAnalyticsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Toggle for enabling or disabling location analytics for your network',
                }),
              meshingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Toggle for enabling or disabling meshing in a network' }),
              upgradeStrategy: z
                .enum(['minimizeClientDowntime', 'minimizeUpgradeTime'])
                .exactOptional()
                .openapi({
                  description:
                    "The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'",
                }),
            })
            .openapi({
              example: {
                ipv6BridgeEnabled: false,
                ledLightsOn: false,
                locationAnalyticsEnabled: false,
                meshingEnabled: true,
                upgradeStrategy: 'minimizeUpgradeTime',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                ipv6BridgeEnabled: false,
                ledLightsOn: false,
                locationAnalyticsEnabled: false,
                meshingEnabled: true,
                upgradeStrategy: 'minimizeUpgradeTime',
              },
            },
          },
        },
      },
    },
  },
})

export const putNetworksNetworkIdSmDevicesLockRoute = createRoute({
  method: 'put',
  path: '/networks/{network_id}/sm/devices/lock',
  tags: ['SM'],
  summary: 'Lock a set of devices',
  description: 'Lock a set of devices',
  operationId: 'lockNetworkSmDevices',
  request: {
    params: z.object({
      network_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ids of the devices to be locked.' }),
              pin: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The pin number for locking macOS devices (a six digit number). Required only for macOS devices.',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped.',
                }),
              serials: z
                .string()
                .exactOptional()
                .openapi({ description: 'The serials of the devices to be locked.' }),
              wifiMacs: z
                .string()
                .exactOptional()
                .openapi({ description: 'The wifiMacs of the devices to be locked.' }),
            })
            .openapi({ example: { ids: '"1284392014819"' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { response: { value: { success: true } } },
        },
      },
    },
  },
})

export const getNetworksNetworkIdSmIdConnectivityRoute = createRoute({
  method: 'get',
  path: '/networks/{network_id}/sm/{id}/connectivity',
  tags: ['SM'],
  summary:
    'Returns historical connectivity data (whether a device is regularly checking in to Dashboard).',
  description:
    'Returns historical connectivity data (whether a device is regularly checking in to Dashboard).',
  operationId: 'getNetworkSmConnectivity',
  request: {
    params: z.object({
      network_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: { response: { value: [{ firstSeenAt: 1518365681, lastSeenAt: 1526087474 }] } },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdSmIdDesktopLogsRoute = createRoute({
  method: 'get',
  path: '/networks/{network_id}/sm/{id}/desktopLogs',
  tags: ['SM'],
  summary:
    'Return historical records of various Systems Manager network connection details for desktop devices.',
  description:
    'Return historical records of various Systems Manager network connection details for desktop devices.',
  operationId: 'getNetworkSmDesktopLogs',
  request: {
    params: z.object({
      network_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  dhcpServer: '1.2.3.4',
                  dnsServer: '8',
                  gateway: '1.2.3.5',
                  ip: '1.2.3.4',
                  measuredAt: 1526087474,
                  networkDevice: 'NIC',
                  networkDriver: 'Driver',
                  networkMTU: '1500',
                  publicIP: '123.123.123.1',
                  subnet: '192.168.1.0/24',
                  ts: 1526087474,
                  user: 'milesmeraki',
                  wifiAuth: 'wpa-psk',
                  wifiBssid: '00:11:22:33:44:55',
                  wifiChannel: '11',
                  wifiNoise: '-99',
                  wifiRssi: '-11',
                  wifiSsid: 'ssid',
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdSmIdDeviceCommandLogsRoute = createRoute({
  method: 'get',
  path: '/networks/{network_id}/sm/{id}/deviceCommandLogs',
  tags: ['SM'],
  summary: 'Return historical records of commands sent to Systems Manager devices',
  description:
    'Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.',
  operationId: 'getNetworkSmDeviceCommandLogs',
  request: {
    params: z.object({
      network_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  action: 'UpdateProfile',
                  dashboardUser: 'Miles Meraki',
                  details: '{}',
                  name: 'My profile',
                  ts: 1526087474,
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getNetworksNetworkIdSmIdPerformanceHistoryRoute = createRoute({
  method: 'get',
  path: '/networks/{network_id}/sm/{id}/performanceHistory',
  tags: ['SM'],
  summary:
    'Return historical records of various Systems Manager client metrics for desktop devices.',
  description:
    'Return historical records of various Systems Manager client metrics for desktop devices.',
  operationId: 'getNetworkSmPerformanceHistory',
  request: {
    params: z.object({
      network_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  cpuPercentUsed: 0.95,
                  diskUsage: { c: { space: 9096, used: 2048 } },
                  memActive: 1024,
                  memFree: 1024,
                  memInactive: 2048,
                  memWired: 4096,
                  networkReceived: 512,
                  networkSent: 512,
                  swapUsed: 768,
                  ts: 1526087474,
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getOrganizationsRoute = createRoute({
  method: 'get',
  path: '/organizations',
  tags: ['Organizations'],
  summary: 'List the organizations that the user has privileges on',
  description: 'List the organizations that the user has privileges on',
  operationId: 'getOrganizations',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  id: '2930418',
                  name: 'My organization',
                  url: 'https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}',
  tags: ['Organizations'],
  summary: 'Return an organization',
  description: 'Return an organization',
  operationId: 'getOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '2930418',
                name: 'My organization',
                url: 'https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview',
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdActionBatchesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/actionBatches',
  tags: ['Action batches'],
  summary: 'Return the list of action batches in the organization',
  description: 'Return the list of action batches in the organization',
  operationId: 'getOrganizationActionBatches',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      status: z
        .enum(['completed', 'failed', 'pending'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter batches by status. Valid types are pending, completed, and failed.',
            in: 'query',
            name: 'status',
            schema: { enum: ['completed', 'failed', 'pending'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  actions: [
                    {
                      body: { name: 'Group 1' },
                      operation: 'create',
                      resource: '/networks/L_XXXXX/groupPolicies',
                    },
                  ],
                  confirmed: true,
                  id: '123',
                  organizationId: '2930418',
                  status: {
                    completed: true,
                    createdResources: [{ id: 100, uri: '/networks/L_XXXXX/groupPolicies/100' }],
                    errors: [],
                    failed: false,
                  },
                  synchronous: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdActionBatchesRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/actionBatches',
  tags: ['Action batches'],
  summary: 'Create an action batch',
  description: 'Create an action batch',
  operationId: 'createOrganizationActionBatch',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              actions: z
                .array(
                  z
                    .object({
                      body: z
                        .object({})
                        .default({})
                        .exactOptional()
                        .openapi({ description: 'The body of the action' }),
                      operation: z.string().openapi({ description: 'The operation to be used' }),
                      resource: z
                        .string()
                        .openapi({
                          description: 'Unique identifier for the resource to be acted on',
                        }),
                    })
                    .openapi({ required: ['resource', 'operation'] }),
                )
                .openapi({
                  description:
                    "A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)",
                }),
              confirmed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false.',
                }),
              synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false.',
                }),
            })
            .openapi({
              example: {
                actions: [
                  {
                    body: { name: 'Group 1' },
                    operation: 'create',
                    resource: '/networks/L_XXXXX/groupPolicies',
                  },
                ],
                confirmed: true,
                synchronous: false,
              },
              required: ['actions'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                actions: [
                  {
                    body: { name: 'Group 1' },
                    operation: 'create',
                    resource: '/networks/L_XXXXX/groupPolicies',
                  },
                ],
                confirmed: true,
                id: '123',
                organizationId: '2930418',
                status: {
                  completed: true,
                  createdResources: [{ id: 100, uri: '/networks/L_XXXXX/groupPolicies/100' }],
                  errors: [],
                  failed: false,
                },
                synchronous: false,
              },
            },
          },
        },
      },
    },
  },
})

export const putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/actionBatches/{actionBatchId}',
  tags: ['Action batches'],
  summary: 'Update an action batch',
  description: 'Update an action batch',
  operationId: 'updateOrganizationActionBatch',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      actionBatchId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'actionBatchId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              confirmed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true.',
                }),
              synchronous: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch.',
                }),
            })
            .openapi({ example: { confirmed: true, synchronous: false }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                actions: [
                  {
                    body: { name: 'Group 1' },
                    operation: 'create',
                    resource: '/networks/L_XXXXX/groupPolicies',
                  },
                ],
                confirmed: true,
                id: '123',
                organizationId: '2930418',
                status: { completed: false, createdResources: [], errors: [], failed: false },
                synchronous: false,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}/actionBatches/{actionBatchId}',
  tags: ['Action batches'],
  summary: 'Delete an action batch',
  description: 'Delete an action batch',
  operationId: 'deleteOrganizationActionBatch',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      actionBatchId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'actionBatchId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getOrganizationsOrganizationIdAdminsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/admins',
  tags: ['Admins'],
  summary: 'List the dashboard administrators in this organization',
  description: 'List the dashboard administrators in this organization',
  operationId: 'getOrganizationAdmins',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  accountStatus: 'ok',
                  authenticationMethod: 'Email',
                  email: 'miles@meraki.com',
                  hasApiKey: true,
                  id: '212406',
                  lastActive: 1526087474,
                  name: 'Miles Meraki',
                  networks: [{ access: 'full', id: 'N_24329156' }],
                  orgAccess: 'none',
                  tags: [{ access: 'read-only', tag: 'west' }],
                  twoFactorAuthEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdAdminsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/admins',
  tags: ['Admins'],
  summary: 'Create a new dashboard administrator',
  description: 'Create a new dashboard administrator',
  operationId: 'createOrganizationAdmin',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authenticationMethod: z
                .enum(['Cisco SecureX Sign-On', 'Email'])
                .exactOptional()
                .openapi({
                  description:
                    "The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication",
                }),
              email: z
                .string()
                .openapi({
                  description:
                    'The email of the dashboard administrator. This attribute can not be updated.',
                }),
              name: z.string().openapi({ description: 'The name of the dashboard administrator' }),
              networks: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description:
                            'The privilege of the dashboard administrator on the network',
                        }),
                      id: z.string().openapi({ description: 'The network ID' }),
                    })
                    .openapi({ required: ['id', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of networks that the dashboard administrator has privileges on',
                }),
              orgAccess: z
                .enum(['enterprise', 'full', 'none', 'read-only'])
                .openapi({
                  description:
                    "The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'",
                }),
              tags: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description: 'The privilege of the dashboard administrator on the tag',
                        }),
                      tag: z.string().openapi({ description: 'The name of the tag' }),
                    })
                    .openapi({ required: ['tag', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of tags that the dashboard administrator has privileges on',
                }),
            })
            .openapi({
              example: {
                email: 'miles@meraki.com',
                name: 'Miles Meraki',
                orgAccess: 'none',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
              required: ['email', 'name', 'orgAccess'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                accountStatus: 'ok',
                authenticationMethod: 'Email',
                email: 'miles@meraki.com',
                hasApiKey: true,
                id: '212406',
                lastActive: 1526087474,
                name: 'Miles Meraki',
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                tags: [{ access: 'read-only', tag: 'west' }],
                twoFactorAuthEnabled: false,
              },
            },
          },
        },
      },
    },
  },
})

export const putOrganizationsOrganizationIdAdminsAdminIdRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/admins/{adminId}',
  tags: ['Admins'],
  summary: 'Update an administrator',
  description: 'Update an administrator',
  operationId: 'updateOrganizationAdmin',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      adminId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'adminId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the dashboard administrator' }),
              networks: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description:
                            'The privilege of the dashboard administrator on the network',
                        }),
                      id: z.string().openapi({ description: 'The network ID' }),
                    })
                    .openapi({ required: ['id', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of networks that the dashboard administrator has privileges on',
                }),
              orgAccess: z
                .enum(['enterprise', 'full', 'none', 'read-only'])
                .exactOptional()
                .openapi({
                  description:
                    "The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'",
                }),
              tags: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description: 'The privilege of the dashboard administrator on the tag',
                        }),
                      tag: z.string().openapi({ description: 'The name of the tag' }),
                    })
                    .openapi({ required: ['tag', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of tags that the dashboard administrator has privileges on',
                }),
            })
            .openapi({
              example: {
                name: 'Miles Meraki',
                orgAccess: 'none',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                accountStatus: 'ok',
                authenticationMethod: 'Email',
                email: 'miles@meraki.com',
                hasApiKey: true,
                id: '212406',
                lastActive: 1526087474,
                name: 'Miles Meraki',
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                tags: [{ access: 'read-only', tag: 'west' }],
                twoFactorAuthEnabled: false,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteOrganizationsOrganizationIdAdminsAdminIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}/admins/{adminId}',
  tags: ['Admins'],
  summary: 'Revoke all access for a dashboard administrator within this organization',
  description: 'Revoke all access for a dashboard administrator within this organization',
  operationId: 'deleteOrganizationAdmin',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      adminId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'adminId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getOrganizationsOrganizationIdApiRequestsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/apiRequests',
  tags: ['API usage'],
  summary: 'List the API requests made by an organization',
  description: 'List the API requests made by an organization',
  operationId: 'getOrganizationApiRequests',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 31 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 31 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      adminId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the results by the ID of the admin who made the API requests',
            in: 'query',
            name: 'adminId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the results by the path of the API requests',
            in: 'query',
            name: 'path',
            schema: { type: 'string' },
            required: false,
          },
        }),
      method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')",
            in: 'query',
            name: 'method',
            schema: { type: 'string' },
            required: false,
          },
        }),
      responseCode: z
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
            description: 'Filter the results by the response code of the API requests',
            in: 'query',
            name: 'responseCode',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sourceIp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the results by the IP address of the originating API request',
            in: 'query',
            name: 'sourceIp',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  adminId: '212406',
                  host: 'api.meraki.com',
                  method: 'GET',
                  path: '/api/v0/organizations/33349/apiRequests',
                  queryString: 'timespan=604800',
                  responseCode: 200,
                  sourceIp: '123.123.123.1',
                  ts: '2019-02-20T17:31:23Z',
                  userAgent: 'PostmanRuntime/7.6.0',
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getOrganizationsOrganizationIdApiRequestsOverviewRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/apiRequests/overview',
  tags: ['API usage'],
  summary: 'Return an aggregated overview of API requests data',
  description: 'Return an aggregated overview of API requests data',
  operationId: 'getOrganizationApiRequestsOverview',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 31 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 31 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                responseCodeCounts: {
                  '200': 50000,
                  '201': 4000,
                  '204': 1000,
                  '400': 3500,
                  '404': 1500,
                  '429': 10000,
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdClaimRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/claim',
  tags: ['Organizations'],
  summary: 'Claim a list of devices, licenses, and/or orders into an organization',
  description:
    "Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.",
  operationId: 'claimIntoOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              licenses: z
                .array(
                  z
                    .object({
                      key: z.string().openapi({ description: 'The key of the license' }),
                      mode: z
                        .enum(['addDevices', 'renew'])
                        .exactOptional()
                        .openapi({
                          description:
                            "Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled.",
                        }),
                    })
                    .openapi({ required: ['key'] }),
                )
                .exactOptional()
                .openapi({ description: 'The licenses that should be claimed' }),
              orders: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The numbers of the orders that should be claimed' }),
              serials: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The serials of the devices that should be claimed' }),
            })
            .openapi({
              example: {
                licenses: [{ key: 'Z2XXXXXXXXXX', mode: 'addDevices' }],
                orders: ['4CXXXXXXX'],
                serials: ['Q234-ABCD-5678'],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                licenses: [{ key: 'Z2XXXXXXXXXX', mode: 'addDevices' }],
                orders: ['4CXXXXXXX'],
                serials: ['Q234-ABCD-5678'],
              },
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdCloneRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/clone',
  tags: ['Organizations'],
  summary: 'Create a new organization by cloning the addressed organization',
  description: 'Create a new organization by cloning the addressed organization',
  operationId: 'cloneOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the new organization' }),
            })
            .openapi({ example: { name: 'My organization' }, required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '2930418',
                name: 'My organization',
                url: 'https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview',
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdConfigTemplatesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/configTemplates',
  tags: ['Config templates'],
  summary: 'List the configuration templates for this organization',
  description: 'List the configuration templates for this organization',
  operationId: 'getOrganizationConfigTemplates',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  id: 'N_24329156',
                  name: 'My config template',
                  productTypes: ['appliance', 'switch', 'wireless'],
                  timeZone: 'America/Los_Angeles',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/organizations/{organizationId}/configTemplates/{configTemplateId}',
  tags: ['Config templates'],
  summary: 'Remove a configuration template',
  description: 'Remove a configuration template',
  operationId: 'deleteOrganizationConfigTemplate',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      configTemplateId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'configTemplateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Successful operation' } },
})

export const getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute =
  createRoute({
    method: 'get',
    path: '/organizations/{organizationId}/configTemplates/{configTemplateId}/switchProfiles',
    tags: ['Switch profiles'],
    summary: 'List the switch profiles for your switch template configuration',
    description: 'List the switch profiles for your switch template configuration',
    operationId: 'getOrganizationConfigTemplateSwitchProfiles',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'organizationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        configTemplateId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'configTemplateId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z.array(z.object({})),
            examples: {
              response: {
                value: [
                  { model: 'MS450-24', name: 'A Simple Switch Profile', switchProfileId: '1234' },
                ],
              },
            },
          },
        },
      },
    },
  })

export const getOrganizationsOrganizationIdConfigurationChangesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/configurationChanges',
  tags: ['Change log'],
  summary: 'View the Change Log for your organization',
  description: 'View the Change Log for your organization',
  operationId: 'getOrganizationConfigurationChanges',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 365 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 365 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      networkId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters on the given network',
            in: 'query',
            name: 'networkId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      adminId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters on the given Admin',
            in: 'query',
            name: 'adminId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  adminEmail: 'miles@meraki.com',
                  adminId: '212406',
                  adminName: 'Miles Meraki',
                  label: 'PUT /api/v1/organizations/2930418',
                  newValue:
                    '{"id":"2930418","name":"My organization changed","url":"https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview"}',
                  oldValue:
                    '{"id":"2930418","name":"My organization","url":"https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview"}',
                  page: 'via API',
                  ts: '2018-02-11T00:00:00.090210Z',
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getOrganizationsOrganizationIdDeviceStatusesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/deviceStatuses',
  tags: ['Organizations'],
  summary: 'List the status of every Meraki device in the organization',
  description: 'List the status of every Meraki device in the organization',
  operationId: 'getOrganizationDeviceStatuses',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  lanIp: '1.2.3.4',
                  mac: '00:11:22:33:44:55',
                  name: 'My AP',
                  networkId: 'N_24329156',
                  publicIp: '123.123.123.1',
                  serial: 'Q234-ABCD-5678',
                  status: 'online',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdDevicesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/devices',
  tags: ['Devices'],
  summary: 'List the devices in an organization',
  description: 'List the devices in an organization',
  operationId: 'getOrganizationDevices',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      configurationUpdatedAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter results by whether or not the device's configuration has been updated after the given timestamp",
            in: 'query',
            name: 'configurationUpdatedAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  address: '1600 Pennsylvania Ave',
                  firmware: 'wireless-25-14',
                  lanIp: '1.2.3.4',
                  lat: 37.4180951010362,
                  lng: -122.098531723022,
                  mac: '00:11:22:33:44:55',
                  model: 'MR34',
                  name: 'My AP',
                  networkId: 'N_24329156',
                  notes: "My AP's note",
                  serial: 'Q234-ABCD-5678',
                  tags: ' recently-added ',
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getOrganizationsOrganizationIdInsightMonitoredMediaServersRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/insight/monitoredMediaServers',
  tags: ['Monitored media servers'],
  summary: 'List the monitored media servers for this organization',
  description:
    'List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.',
  operationId: 'getOrganizationInsightMonitoredMediaServers',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                { address: '123.123.123.1', id: '1284392014819', name: 'Sample VoIP Provider' },
              ],
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdInsightMonitoredMediaServersRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/insight/monitoredMediaServers',
  tags: ['Monitored media servers'],
  summary: 'Add a media server to be monitored for this organization',
  description:
    'Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.',
  operationId: 'createOrganizationInsightMonitoredMediaServer',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              address: z
                .string()
                .openapi({
                  description:
                    'The IP address (IPv4 only) or hostname of the media server to monitor',
                }),
              name: z.string().openapi({ description: 'The name of the VoIP provider' }),
            })
            .openapi({
              example: { address: '123.123.123.1', name: 'Sample VoIP Provider' },
              required: ['name', 'address'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                address: '123.123.123.1',
                id: '1284392014819',
                name: 'Sample VoIP Provider',
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute =
  createRoute({
    method: 'get',
    path: '/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}',
    tags: ['Monitored media servers'],
    summary: 'Return a monitored media server for this organization',
    description:
      'Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.',
    operationId: 'getOrganizationInsightMonitoredMediaServer',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'organizationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        monitoredMediaServerId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'monitoredMediaServerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z.object({}),
            examples: {
              response: {
                value: {
                  address: '123.123.123.1',
                  id: '1284392014819',
                  name: 'Sample VoIP Provider',
                },
              },
            },
          },
        },
      },
    },
  })

export const putOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute =
  createRoute({
    method: 'put',
    path: '/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}',
    tags: ['Monitored media servers'],
    summary: 'Update a monitored media server for this organization',
    description:
      'Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.',
    operationId: 'updateOrganizationInsightMonitoredMediaServer',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'organizationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        monitoredMediaServerId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'monitoredMediaServerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                address: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The IP address (IPv4 only) or hostname of the media server to monitor',
                  }),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The name of the VoIP provider' }),
              })
              .openapi({
                example: { address: '123.123.123.1', name: 'Sample VoIP Provider' },
                required: [],
              }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: z.object({}),
            examples: {
              response: {
                value: {
                  address: '123.123.123.1',
                  id: '1284392014819',
                  name: 'Sample VoIP Provider',
                },
              },
            },
          },
        },
      },
    },
  })

export const deleteOrganizationsOrganizationIdInsightMonitoredMediaServersMonitoredMediaServerIdRoute =
  createRoute({
    method: 'delete',
    path: '/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}',
    tags: ['Monitored media servers'],
    summary: 'Delete a monitored media server from this organization',
    description:
      'Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.',
    operationId: 'deleteOrganizationInsightMonitoredMediaServer',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'organizationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        monitoredMediaServerId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'monitoredMediaServerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'Successful operation' } },
  })

export const getOrganizationsOrganizationIdInventoryRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/inventory',
  tags: ['Organizations'],
  summary: 'Return the inventory for an organization',
  description: 'Return the inventory for an organization',
  operationId: 'getOrganizationInventory',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      includeLicenseInfo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false.',
            in: 'query',
            name: 'includeLicenseInfo',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  claimedAt: 1518365681,
                  mac: '00:11:22:33:44:55',
                  model: 'MR34',
                  name: 'My AP',
                  networkId: 'N_24329156',
                  publicIp: '123.123.123.1',
                  serial: 'Q234-ABCD-5678',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdLicenseStateRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/licenseState',
  tags: ['Licenses'],
  summary: 'Return an overview of the license state for an organization',
  description: 'Return an overview of the license state for an organization',
  operationId: 'getOrganizationLicenseState',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                expirationDate: 'Feb 8, 2020 UTC',
                licensedDeviceCounts: { MS: 100 },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdLicensesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/licenses',
  tags: ['Licenses'],
  summary: 'List the licenses for an organization',
  description: 'List the licenses for an organization',
  operationId: 'getOrganizationLicenses',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceSerial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the licenses to those assigned to a particular device',
            in: 'query',
            name: 'deviceSerial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      networkId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the licenses to those assigned in a particular network',
            in: 'query',
            name: 'networkId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .enum(['active', 'expired', 'expiring', 'recentlyQueued', 'unused', 'unusedActive'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'",
            in: 'query',
            name: 'state',
            schema: {
              enum: ['active', 'expired', 'expiring', 'recentlyQueued', 'unused', 'unusedActive'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  activationDate: '2019-09-01T15:01:46Z',
                  claimDate: '2019-08-29T12:40:10Z',
                  deviceSerial: 'Q234-ABCD-5678',
                  durationInDays: 365,
                  expirationDate: '2020-10-30T15:01:46Z',
                  headLicenseId: '1234',
                  id: '1234',
                  licenseKey: 'Z21234567890',
                  licenseType: 'MX64-ENT',
                  networkId: 'N_24329156',
                  orderNumber: '4C1234567',
                  permanentlyQueuedLicenses: [
                    {
                      durationInDays: 60,
                      id: '5678',
                      licenseKey: 'Z21234567890',
                      licenseType: 'MX64-ENT',
                      orderNumber: '4C1234567',
                    },
                  ],
                  seatCount: null,
                  state: 'active',
                  totalDurationInDays: 425,
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postOrganizationsOrganizationIdLicensesAssignSeatsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/licenses/assignSeats',
  tags: ['Licenses'],
  summary: 'Assign SM seats to a network',
  description:
    'Assign SM seats to a network. This will increase the managed SM device limit of the network',
  operationId: 'assignOrganizationLicensesSeats',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              licenseId: z
                .string()
                .openapi({ description: 'The ID of the SM license to assign seats from' }),
              networkId: z
                .string()
                .openapi({ description: 'The ID of the SM network to assign the seats to' }),
              seatCount: z
                .int()
                .openapi({
                  description:
                    'The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license',
                }),
            })
            .openapi({
              example: { licenseId: '1234', networkId: 'N_24329156', seatCount: 20 },
              required: ['licenseId', 'networkId', 'seatCount'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                resultingLicenses: [
                  {
                    activationDate: '2019-09-01T15:01:46Z',
                    claimDate: '2019-08-29T12:40:10Z',
                    deviceSerial: null,
                    durationInDays: 365,
                    expirationDate: '2020-08-31T15:01:46Z',
                    headLicenseId: '1234',
                    id: '1234',
                    licenseKey: 'Z21234567890',
                    licenseType: 'SME',
                    networkId: 'N_24329156',
                    orderNumber: '4C1234567',
                    permanentlyQueuedLicenses: [],
                    seatCount: 25,
                    state: 'active',
                    totalDurationInDays: 365,
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdLicensesMoveSeatsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/licenses/moveSeats',
  tags: ['Licenses'],
  summary: 'Move SM seats to another organization',
  description: 'Move SM seats to another organization',
  operationId: 'moveOrganizationLicensesSeats',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destOrganizationId: z
                .string()
                .openapi({ description: 'The ID of the organization to move the SM seats to' }),
              licenseId: z
                .string()
                .openapi({ description: 'The ID of the SM license to move the seats from' }),
              seatCount: z
                .int()
                .openapi({
                  description:
                    'The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license',
                }),
            })
            .openapi({
              example: { destOrganizationId: '2930418', licenseId: '1234', seatCount: 20 },
              required: ['destOrganizationId', 'licenseId', 'seatCount'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: { destOrganizationId: '2930418', licenseId: '1234', seatCount: 20 },
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdLicensesRenewSeatsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/licenses/renewSeats',
  tags: ['Licenses'],
  summary: 'Renew SM seats of a license',
  description:
    'Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license',
  operationId: 'renewOrganizationLicensesSeats',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              licenseIdToRenew: z
                .string()
                .openapi({
                  description:
                    'The ID of the SM license to renew. This license must already be assigned to an SM network',
                }),
              unusedLicenseId: z
                .string()
                .openapi({
                  description:
                    "The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'",
                }),
            })
            .openapi({
              example: { licenseIdToRenew: '123', unusedLicenseId: '1234' },
              required: ['licenseIdToRenew', 'unusedLicenseId'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                resultingLicenses: [
                  {
                    activationDate: '2019-09-01T15:01:46Z',
                    claimDate: '2019-08-29T12:40:10Z',
                    deviceSerial: null,
                    durationInDays: 365,
                    expirationDate: '2020-08-31T15:01:46Z',
                    headLicenseId: '1234',
                    id: '1234',
                    licenseKey: 'Z21234567890',
                    licenseType: 'SME',
                    networkId: 'N_24329156',
                    orderNumber: '4C1234567',
                    permanentlyQueuedLicenses: [],
                    seatCount: 25,
                    state: 'active',
                    totalDurationInDays: 365,
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdLicensesLicenseIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/licenses/{licenseId}',
  tags: ['Licenses'],
  summary: 'Display a license',
  description: 'Display a license',
  operationId: 'getOrganizationLicense',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      licenseId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'licenseId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                activationDate: '2019-09-01T15:01:46Z',
                claimDate: '2019-08-29T12:40:10Z',
                deviceSerial: 'Q234-ABCD-5678',
                durationInDays: 365,
                expirationDate: '2020-10-30T15:01:46Z',
                headLicenseId: '1234',
                id: '1234',
                licenseKey: 'Z21234567890',
                licenseType: 'MX64-ENT',
                networkId: 'N_24329156',
                orderNumber: '4C1234567',
                permanentlyQueuedLicenses: [
                  {
                    durationInDays: 60,
                    id: '5678',
                    licenseKey: 'Z21234567890',
                    licenseType: 'MX64-ENT',
                    orderNumber: '4C1234567',
                  },
                ],
                seatCount: null,
                state: 'active',
                totalDurationInDays: 425,
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdNetworksRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/networks',
  tags: ['Networks'],
  summary: 'List the networks in an organization',
  description: 'List the networks in an organization',
  operationId: 'getOrganizationNetworks',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      configTemplateId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional parameter that is the ID of a config template. Will return all networks bound to that template.',
            in: 'query',
            name: 'configTemplateId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  disableMyMerakiCom: false,
                  enrollmentString: 'my-enrollment-string',
                  id: 'N_24329156',
                  name: 'Main Office',
                  organizationId: '2930418',
                  productTypes: ['appliance', 'switch', 'wireless'],
                  tags: ' tag1 tag2 ',
                  timeZone: 'America/Los_Angeles',
                  type: 'combined',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdNetworksRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/networks',
  tags: ['Networks'],
  summary: 'Create a network',
  description: 'Create a network',
  operationId: 'createOrganizationNetwork',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              copyFromNetworkId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.",
                }),
              disableMyMerakiCom: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)",
                }),
              disableRemoteStatusPage: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false",
                }),
              name: z.string().openapi({ description: 'The name of the new network' }),
              tags: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A space-separated list of tags to be applied to the network',
                }),
              timeZone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>",
                }),
              type: z
                .string()
                .openapi({
                  description:
                    'The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network.',
                }),
            })
            .openapi({
              example: {
                disableMyMerakiCom: false,
                name: 'Main Office',
                tags: ' tag1 tag2 ',
                timeZone: 'America/Los_Angeles',
                type: 'appliance switch camera',
              },
              required: ['name', 'type'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                disableMyMerakiCom: false,
                enrollmentString: 'my-enrollment-string',
                id: 'N_24329156',
                name: 'Main Office',
                organizationId: '2930418',
                productTypes: ['appliance', 'switch', 'wireless'],
                tags: ' tag1 tag2 ',
                timeZone: 'America/Los_Angeles',
                type: 'combined',
              },
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdNetworksCombineRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/networks/combine',
  tags: ['Networks'],
  summary: 'Combine multiple networks into a single network',
  description: 'Combine multiple networks into a single network',
  operationId: 'combineOrganizationNetworks',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enrollmentString: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted.",
                }),
              name: z.string().openapi({ description: 'The name of the combined network' }),
              networkIds: z
                .array(z.string())
                .openapi({
                  description:
                    'A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network',
                }),
            })
            .openapi({
              example: { name: 'Long Island Office', networkIds: ['N_1234', 'N_5678'] },
              required: ['name', 'networkIds'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                resultingNetwork: {
                  disableMyMerakiCom: false,
                  enrollmentString: 'my-enrollment-string',
                  id: 'N_24329156',
                  name: 'Main Office',
                  organizationId: '2930418',
                  productTypes: ['appliance', 'switch', 'wireless'],
                  tags: ' tag1 tag2 ',
                  timeZone: 'America/Los_Angeles',
                  type: 'combined',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdOpenapiSpecRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/openapiSpec',
  tags: ['OpenAPI Spec'],
  summary: "Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON",
  description:
    "Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON",
  operationId: 'getOrganizationOpenapiSpec',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                info: {
                  description:
                    'This collection of API calls provides an easy way to interact with a Cisco Meraki network',
                  title: 'Meraki Dashboard API',
                  version: 'v0',
                },
                paths: {
                  '/organizations': {
                    get: {
                      description: 'List the organizations that the user has privileges on',
                      operationId: 'getOrganizations',
                      responses: {
                        '200': {
                          description: 'Successful operation',
                          examples: {
                            'application/json': [{ id: '2930418', name: 'My organization' }],
                          },
                        },
                      },
                    },
                  },
                },
                swagger: '2.0',
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdSamlRolesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/samlRoles',
  tags: ['SAML roles'],
  summary: 'List the SAML roles for this organization',
  description: 'List the SAML roles for this organization',
  operationId: 'getOrganizationSamlRoles',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  id: '1284392014819',
                  networks: [{ access: 'full', id: 'N_24329156' }],
                  orgAccess: 'none',
                  role: 'myrole',
                  tags: [{ access: 'read-only', tag: 'west' }],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postOrganizationsOrganizationIdSamlRolesRoute = createRoute({
  method: 'post',
  path: '/organizations/{organizationId}/samlRoles',
  tags: ['SAML roles'],
  summary: 'Create a SAML role',
  description: 'Create a SAML role',
  operationId: 'createOrganizationSamlRole',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              networks: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description: 'The privilege of the SAML administrator on the network',
                        }),
                      id: z.string().openapi({ description: 'The network ID' }),
                    })
                    .openapi({ required: ['id', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'The list of networks that the SAML administrator has privileges on',
                }),
              orgAccess: z
                .string()
                .openapi({
                  description: 'The privilege of the SAML administrator on the organization',
                }),
              role: z.string().openapi({ description: 'The role of the SAML administrator' }),
              tags: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description: 'The privilege of the SAML administrator on the tag',
                        }),
                      tag: z.string().openapi({ description: 'The name of the tag' }),
                    })
                    .openapi({ required: ['tag', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'The list of tags that the SAML administrator has privleges on',
                }),
            })
            .openapi({
              example: {
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                role: 'myrole',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
              required: ['role', 'orgAccess'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '1284392014819',
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                role: 'myrole',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/samlRoles/{samlRoleId}',
  tags: ['SAML roles'],
  summary: 'Return a SAML role',
  description: 'Return a SAML role',
  operationId: 'getOrganizationSamlRole',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      samlRoleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'samlRoleId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '1284392014819',
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                role: 'myrole',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
            },
          },
        },
      },
    },
  },
})

export const putOrganizationsOrganizationIdSamlRolesSamlRoleIdRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/samlRoles/{samlRoleId}',
  tags: ['SAML roles'],
  summary: 'Update a SAML role',
  description: 'Update a SAML role',
  operationId: 'updateOrganizationSamlRole',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
      samlRoleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'samlRoleId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              networks: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description: 'The privilege of the SAML administrator on the network',
                        }),
                      id: z.string().openapi({ description: 'The network ID' }),
                    })
                    .openapi({ required: ['id', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'The list of networks that the SAML administrator has privileges on',
                }),
              orgAccess: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The privilege of the SAML administrator on the organization',
                }),
              role: z
                .string()
                .exactOptional()
                .openapi({ description: 'The role of the SAML administrator' }),
              tags: z
                .array(
                  z
                    .object({
                      access: z
                        .string()
                        .openapi({
                          description: 'The privilege of the SAML administrator on the tag',
                        }),
                      tag: z.string().openapi({ description: 'The name of the tag' }),
                    })
                    .openapi({ required: ['tag', 'access'] }),
                )
                .exactOptional()
                .openapi({
                  description: 'The list of tags that the SAML administrator has privleges on',
                }),
            })
            .openapi({
              example: {
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                id: '1284392014819',
                networks: [{ access: 'full', id: 'N_24329156' }],
                orgAccess: 'none',
                role: 'myrole',
                tags: [{ access: 'read-only', tag: 'west' }],
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdSecurityIntrusionSettingsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/security/intrusionSettings',
  tags: ['Intrusion settings'],
  summary: 'Returns all supported intrusion settings for an organization',
  description: 'Returns all supported intrusion settings for an organization',
  operationId: 'getOrganizationSecurityIntrusionSettings',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                whitelistedRules: [
                  {
                    message: 'SQL sa login failed',
                    ruleId: 'meraki:intrusion/snort/GID/01/SID/688',
                  },
                  {
                    message:
                      'MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines',
                    ruleId: 'meraki:intrusion/snort/GID/01/SID/5805',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putOrganizationsOrganizationIdSecurityIntrusionSettingsRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/security/intrusionSettings',
  tags: ['Intrusion settings'],
  summary: 'Sets supported intrusion settings for an organization',
  description: 'Sets supported intrusion settings for an organization',
  operationId: 'updateOrganizationSecurityIntrusionSettings',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              whitelistedRules: z
                .array(
                  z
                    .object({
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET',
                        }),
                      ruleId: z
                        .string()
                        .openapi({
                          description:
                            'A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents',
                        }),
                    })
                    .openapi({ required: ['ruleId'] }),
                )
                .openapi({ description: 'Sets a list of specific SNORT signatures to allow' }),
            })
            .openapi({
              example: {
                whitelistedRules: [
                  {
                    message: 'SQL sa login failed',
                    ruleId: 'meraki:intrusion/snort/GID/01/SID/688',
                  },
                  {
                    message:
                      'MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines',
                    ruleId: 'meraki:intrusion/snort/GID/01/SID/5805',
                  },
                ],
              },
              required: ['whitelistedRules'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                whitelistedRules: [
                  {
                    message: 'SQL sa login failed',
                    ruleId: 'meraki:intrusion/snort/GID/01/SID/688',
                  },
                  {
                    message:
                      'MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines',
                    ruleId: 'meraki:intrusion/snort/GID/01/SID/5805',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdSecurityEventsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/securityEvents',
  tags: ['Security events'],
  summary: 'List the security events (intrusion detection only) for an organization',
  description: 'List the security events (intrusion detection only) for an organization',
  operationId: 'getOrganizationSecurityEvents',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 365 days after t0.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      perPage: z
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
              'The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.',
            in: 'query',
            name: 'perPage',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startingAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'startingAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endingBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.',
            in: 'query',
            name: 'endingBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  blocked: true,
                  classification: '4',
                  clientMac: 'A1:B2:C3:D4:E5:F6',
                  destIp: '10.20.30.40:80',
                  deviceMac: '00:18:0a:01:02:03',
                  message: 'SERVER-WEBAPP JBoss JMX console access attempt',
                  priority: '2',
                  protocol: 'tcp/ip',
                  ruleId: 'meraki:intrusion/snort/GID/1/SID/26267',
                  sigSource: '',
                  signature: '1:21516:9',
                  srcIp: '1.2.3.4:34195',
                  ts: 1547683314.270398,
                },
                {
                  blocked: true,
                  classification: '33',
                  clientMac: 'A1:B2:C3:D4:E5:F6',
                  destIp: '10.20.30.40:80',
                  deviceMac: '00:18:0a:01:02:03',
                  message: 'POLICY-OTHER Adobe ColdFusion admin interface access attempt',
                  priority: '1',
                  protocol: 'tcp/ip',
                  ruleId: 'meraki:intrusion/snort/GID/1/SID/26267',
                  sigSource: '',
                  signature: '1:25975:2',
                  srcIp: '1.2.3.4:56023',
                  ts: 1547683827.723265,
                },
              ],
            },
          },
        },
      },
      headers: z.object({
        Link: {
          description:
            'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getOrganizationsOrganizationIdSnmpRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/snmp',
  tags: ['SNMP settings'],
  summary: 'Return the SNMP settings for an organization',
  description: 'Return the SNMP settings for an organization',
  operationId: 'getOrganizationSnmp',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            response: {
              value: {
                hostname: 'snmp.meraki.com',
                peerIps: '123.123.123.1',
                port: 443,
                v2cEnabled: false,
                v3AuthMode: 'SHA',
                v3Enabled: true,
                v3PrivMode: 'AES128',
              },
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdThirdPartyVPNPeersRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/thirdPartyVPNPeers',
  tags: ['Organizations'],
  summary: 'Return the third party VPN peers for an organization',
  description: 'Return the third party VPN peers for an organization',
  operationId: 'getOrganizationThirdPartyVPNPeers',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  ikeVersion: '2',
                  ipsecPolicies: {
                    childAuthAlgo: ['sha1'],
                    childCipherAlgo: ['aes128'],
                    childLifetime: 28800,
                    childPfsGroup: ['disabled'],
                    ikeAuthAlgo: ['sha1'],
                    ikeCipherAlgo: ['tripledes'],
                    ikeDiffieHellmanGroup: ['group2'],
                    ikeLifetime: 28800,
                    ikePrfAlgo: ['prfsha1'],
                  },
                  name: 'My peer 1',
                  networkTags: ['all'],
                  privateSubnets: ['192.168.1.0/24', '192.168.128.0/24'],
                  publicIp: '123.123.123.1',
                  secret: 'asdf1234',
                },
                {
                  ikeVersion: '1',
                  ipsecPoliciesPreset: 'default',
                  name: 'My peer 2',
                  networkTags: ['none'],
                  privateSubnets: ['192.168.2.0/24', '192.168.129.0/24'],
                  publicIp: '123.123.123.2',
                  remoteId: 'miles@meraki.com',
                  secret: 'asdf56785678567856785678',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const putOrganizationsOrganizationIdThirdPartyVPNPeersRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/thirdPartyVPNPeers',
  tags: ['Organizations'],
  summary: 'Update the third party VPN peers for an organization',
  description: 'Update the third party VPN peers for an organization',
  operationId: 'updateOrganizationThirdPartyVPNPeers',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              peers: z
                .array(
                  z
                    .object({
                      ikeVersion: z
                        .enum(['1', '2'])
                        .default('1')
                        .exactOptional()
                        .openapi({
                          description:
                            "[optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.",
                        }),
                      ipsecPolicies: z
                        .object({
                          childAuthAlgo: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'",
                            }),
                          childCipherAlgo: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'",
                            }),
                          childLifetime: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The lifetime of the Phase 2 SA in seconds.' }),
                          childPfsGroup: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1'",
                            }),
                          ikeAuthAlgo: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'",
                            }),
                          ikeCipherAlgo: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'",
                            }),
                          ikeDiffieHellmanGroup: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1'",
                            }),
                          ikeLifetime: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The lifetime of the Phase 1 SA in seconds.' }),
                          ikePrfAlgo: z
                            .array(z.enum(['default', 'prfmd5', 'prfsha1', 'prfsha256']))
                            .exactOptional()
                            .openapi({
                              description:
                                "[optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm.",
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.',
                          required: [],
                        }),
                      ipsecPoliciesPreset: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored.",
                        }),
                      name: z.string().openapi({ description: 'The name of the VPN peer' }),
                      networkTags: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            "A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all'].",
                        }),
                      privateSubnets: z
                        .array(z.string())
                        .openapi({
                          description: 'The list of the private subnets of the VPN peer',
                        }),
                      publicIp: z
                        .string()
                        .openapi({ description: 'The public IP of the VPN peer' }),
                      remoteId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '[optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.',
                        }),
                      secret: z
                        .string()
                        .openapi({ description: 'The shared secret with the VPN peer' }),
                    })
                    .openapi({ required: ['name', 'publicIp', 'privateSubnets', 'secret'] }),
                )
                .openapi({ description: 'The list of VPN peers' }),
            })
            .openapi({
              example: {
                peers: [
                  {
                    ikeVersion: '2',
                    ipsecPolicies: {
                      childAuthAlgo: ['sha1'],
                      childCipherAlgo: ['aes128'],
                      childLifetime: 28800,
                      childPfsGroup: ['disabled'],
                      ikeAuthAlgo: ['sha1'],
                      ikeCipherAlgo: ['tripledes'],
                      ikeDiffieHellmanGroup: ['group2'],
                      ikeLifetime: 28800,
                      ikePrfAlgo: ['prfsha1'],
                    },
                    name: 'My peer 1',
                    networkTags: ['all'],
                    privateSubnets: ['192.168.1.0/24', '192.168.128.0/24'],
                    publicIp: '123.123.123.1',
                    secret: 'asdf1234',
                  },
                  {
                    ikeVersion: '1',
                    ipsecPoliciesPreset: 'default',
                    name: 'My peer 2',
                    networkTags: ['none'],
                    privateSubnets: ['192.168.2.0/24', '192.168.129.0/24'],
                    publicIp: '123.123.123.2',
                    remoteId: 'miles@meraki.com',
                    secret: 'asdf56785678567856785678',
                  },
                ],
              },
              required: ['peers'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  ikeVersion: '2',
                  ipsecPolicies: {
                    childAuthAlgo: ['sha1'],
                    childCipherAlgo: ['aes128'],
                    childLifetime: 28800,
                    childPfsGroup: ['disabled'],
                    ikeAuthAlgo: ['sha1'],
                    ikeCipherAlgo: ['tripledes'],
                    ikeDiffieHellmanGroup: ['group2'],
                    ikeLifetime: 28800,
                    ikePrfAlgo: ['prfsha1'],
                  },
                  name: 'My peer 1',
                  networkTags: ['all'],
                  privateSubnets: ['192.168.1.0/24', '192.168.128.0/24'],
                  publicIp: '123.123.123.1',
                  secret: 'asdf1234',
                },
                {
                  ikeVersion: '1',
                  ipsecPoliciesPreset: 'default',
                  name: 'My peer 2',
                  networkTags: ['none'],
                  privateSubnets: ['192.168.2.0/24', '192.168.129.0/24'],
                  publicIp: '123.123.123.2',
                  remoteId: 'miles@meraki.com',
                  secret: 'asdf56785678567856785678',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdUplinksLossAndLatencyRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/uplinksLossAndLatency',
  tags: ['Organizations'],
  summary:
    'Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago',
  description:
    'Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago',
  operationId: 'getOrganizationUplinksLossAndLatency',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      t0: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The beginning of the timespan for the data. The maximum lookback period is 60 days from today.',
            in: 'query',
            name: 't0',
            schema: { type: 'string' },
            required: false,
          },
        }),
      t1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.',
            in: 'query',
            name: 't1',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.',
            in: 'query',
            name: 'timespan',
            schema: { format: 'float', type: 'number' },
            required: false,
          },
        }),
      uplink: z
        .enum(['cellular', 'wan1', 'wan2'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.',
            in: 'query',
            name: 'uplink',
            schema: { enum: ['cellular', 'wan1', 'wan2'], type: 'string' },
            required: false,
          },
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional filter for a specific destination IP. Default will return all destination IPs.',
            in: 'query',
            name: 'ip',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  ip: '8.8.8.8',
                  networkId: 'N_12345',
                  serial: 'Q2AB-CDEF-GHIJ',
                  timeSeries: [{ latencyMs: 194.9, lossPercent: 5.3, ts: '2019-01-31T18:46:13Z' }],
                  uplink: 'wan1',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getOrganizationsOrganizationIdVpnFirewallRulesRoute = createRoute({
  method: 'get',
  path: '/organizations/{organizationId}/vpnFirewallRules',
  tags: ['MX VPN firewall'],
  summary: "Return the firewall rules for an organization's site-to-site VPN",
  description: "Return the firewall rules for an organization's site-to-site VPN",
  operationId: 'getOrganizationVpnFirewallRules',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const putOrganizationsOrganizationIdVpnFirewallRulesRoute = createRoute({
  method: 'put',
  path: '/organizations/{organizationId}/vpnFirewallRules',
  tags: ['MX VPN firewall'],
  summary: "Update the firewall rules of an organization's site-to-site VPN",
  description: "Update the firewall rules of an organization's site-to-site VPN",
  operationId: 'updateOrganizationVpnFirewallRules',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'organizationId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rules: z
                .array(
                  z
                    .object({
                      comment: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Description of the rule (optional)' }),
                      destCidr: z
                        .string()
                        .openapi({
                          description:
                            "Comma-separated list of destination IP address(es) (in IP or CIDR notation) or 'any' (FQDN not supported)",
                        }),
                      destPort: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'",
                        }),
                      policy: z
                        .enum(['allow', 'deny'])
                        .openapi({
                          description: "'allow' or 'deny' traffic specified by this rule",
                        }),
                      protocol: z
                        .enum(['any', 'icmp', 'icmp6', 'tcp', 'udp'])
                        .openapi({
                          description:
                            "The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')",
                        }),
                      srcCidr: z
                        .string()
                        .openapi({
                          description:
                            "Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (FQDN not supported)",
                        }),
                      srcPort: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'",
                        }),
                      syslogEnabled: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)',
                        }),
                    })
                    .openapi({ required: ['policy', 'protocol', 'srcCidr', 'destCidr'] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An ordered array of the firewall rules (not including the default rule)',
                }),
              syslogDefaultRule: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)",
                }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    comment: 'Allow TCP traffic to subnet with HTTP servers.',
                    destCidr: '192.168.1.0/24',
                    destPort: '443',
                    policy: 'allow',
                    protocol: 'tcp',
                    srcCidr: 'Any',
                    srcPort: 'Any',
                    syslogEnabled: false,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.array(z.object({})),
          examples: {
            response: {
              value: [
                {
                  comment: 'Allow TCP traffic to subnet with HTTP servers.',
                  destCidr: '192.168.1.0/24',
                  destPort: '443',
                  policy: 'allow',
                  protocol: 'tcp',
                  srcCidr: 'Any',
                  srcPort: 'Any',
                  syslogEnabled: false,
                },
              ],
            },
          },
        },
      },
    },
  },
})
