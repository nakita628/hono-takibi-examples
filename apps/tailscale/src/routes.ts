import { createRoute, z } from '@hono/zod-openapi'

const DeviceSchema = z
  .object({
    addresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['100.87.74.78', 'fd7a:115c:a1e0:ac82:4843:ca90:697d:c36e'],
        description:
          'A list of Tailscale IP addresses for the device,\nincluding both IPv4 (formatted as 100.x.y.z)\nand IPv6 (formatted as fd7a:115c:a1e0:a:b:c:d:e) addresses.\n',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: '92960230385',
        description:
          'The legacy identifier for a device; you\ncan supply this value wherever {deviceId} is indicated in the\nendpoint. Note that although "id" is still accepted, "nodeId" is\npreferred.\n',
      }),
    nodeId: z
      .string()
      .exactOptional()
      .openapi({
        example: 'n292kg92CNTRL',
        description:
          'The preferred identifier for a device;\nsupply this value wherever {deviceId} is indicated in the endpoint.\n',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        example: 'amelie@example.com',
        description:
          'The user who registered the node. For untagged nodes,\n this user is the device owner.\n',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        example: 'pangolin.tailfe8c.ts.net',
        description:
          'The MagicDNS name of the device.\nLearn more about MagicDNS at https://tailscale.com/docs/features/magicdns.\n',
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        example: 'pangolin',
        description:
          'The machine name in the admin console.\nLearn more about machine names at https://tailscale.com/docs/concepts/machine-names.\n',
      }),
    clientVersion: z
      .string()
      .exactOptional()
      .openapi({
        example: 'v1.36.0',
        description:
          'The version of the Tailscale client\nsoftware; this is empty for external devices.\n',
      }),
    updateAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          "'true' if a Tailscale client version\nupgrade is available. This value is empty for external devices.\n",
      }),
    os: z
      .string()
      .exactOptional()
      .openapi({
        example: 'linux',
        description: 'The operating system that the device is running.\n',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description:
          'The date on which the device was added\nto the tailnet; this is empty for external devices.\n',
      }),
    connectedToControl: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description:
          'Indicates if the device recently maintained a TCP connection to the Tailscale control server.\n',
      }),
    lastSeen: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description:
          'When the device was last connected to the Tailscale control server. Omitted if the device has never been online or `connectedToControl` is true.\n',
      }),
    keyExpiryDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          "'true' if the keys for the device will not expire.\nLearn more at https://tailscale.com/docs/features/access-control/key-expiry.\n",
      }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2023-05-30T04:44:05Z',
        description:
          "The expiration date of the device's auth key.\nLearn more about key expiry at https://tailscale.com/docs/features/access-control/key-expiry.\n",
      }),
    authorized: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          "'true' if the device has been authorized to join the tailnet; otherwise, 'false'.\nLearn more about device authorization at https://tailscale.com/docs/features/access-control/device-management/device-approval.\n",
      }),
    isExternal: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          "'true', indicates that a device is not a member of the tailnet, but is shared in to the tailnet;\nif 'false', the device is a member of the tailnet.\nLearn more about node sharing at https://tailscale.com/docs/features/sharing.\n",
      }),
    multipleConnections: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description:
          "'true', indicates that multiple devices are currently connected using the same node key, which is usually a sign of node state being copied between machines.\nIf only one device is connected using this node's key, the field is omitted.\nIf the number of live connections goes back to 0 or 1, this field is also omitted, meaning it's not sticky. In case an attacker steals node state from a legitimate node, they can mask their activities by not connecting concurrently with the legitimate node.\n",
      }),
    machineKey: z
      .string()
      .exactOptional()
      .openapi({
        example: '',
        description:
          'For internal use and is not required for any API operations.\nThis value is empty for external devices.\n',
      }),
    nodeKey: z
      .string()
      .exactOptional()
      .openapi({
        example: 'nodekey:01234567890abcdef',
        description:
          'Mostly for internal use, required for select operations, such as adding a node to a locked tailnet.\nLearn about tailnet locks at https://tailscale.com/docs/features/tailnet-lock.\n',
      }),
    blocksIncomingConnections: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          '\'true\' if the device is not allowed to accept any connections over Tailscale, including pings.\nLearn more in the "Allow incoming connections" section of https://tailscale.com/docs/features/client/manage-preferences.\n',
      }),
    enabledRoutes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['10.0.0.0/16', '192.168.1.0/24'],
        description:
          'The subnet routes for this device that have been approved by a tailnet admin.\nLearn more about subnet routes at https://tailscale.com/docs/features/subnet-routers.\n',
      }),
    advertisedRoutes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['10.0.0.0/16', '192.168.1.0/24'],
        description:
          'The subnets this device requests to expose.\nLearn more about subnet routes at https://tailscale.com/docs/features/subnet-routers.\n',
      }),
    clientConnectivity: z
      .object({
        endpoints: z
          .array(z.string())
          .exactOptional()
          .openapi({
            example: ['199.9.14.201:59128', '192.68.0.21:59128'],
            description: "Client's magicsock UDP IP:port endpoints (IPv4 or IPv6).\n",
          }),
        mappingVariesByDestIP: z
          .boolean()
          .exactOptional()
          .openapi({
            description: "'true' if the host's NAT mappings vary based on the destination IP.\n",
            example: false,
          }),
        latency: z
          .record(
            z.string(),
            z
              .object({
                preferred: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      "'true' for the node's preferred DERP server for incoming traffic.\n",
                  }),
                latencyMs: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Current latency to DERP server.\n' }),
              })
              .openapi({ 'x-additionalPropertiesName': 'DERP server location', required: [] }),
          )
          .exactOptional()
          .openapi({
            description: 'Map of DERP server locations and their current latency.',
            example: {
              Dallas: { latencyMs: 60.463043 },
              'New York City': { preferred: true, latencyMs: 31.323811 },
            },
          }),
        clientSupports: z
          .object({
            hairPinning: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                example: null,
                description: 'This information is no longer tracked and will always be null.\n',
              }),
            ipv6: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                example: false,
                description:
                  "'true' if the device OS supports IPv6,\nregardless of whether IPv6 internet connectivity is available.\n",
              }),
            pcp: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                example: false,
                description: "'true' if PCP port-mapping service exists on your router.\n",
              }),
            pmp: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                example: false,
                description: "'true' if NAT-PMP port-mapping service exists on your router.\n",
              }),
            udp: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                example: false,
                description:
                  "'true' if UDP traffic is enabled on the current network;\nif 'false', Tailscale may be unable to make direct connections, and will rely on our DERP servers.\n",
              }),
            upnp: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                example: false,
                description: "'true' if UPnP port-mapping service exists on your router.\n",
              }),
          })
          .exactOptional()
          .openapi({ description: 'Identifies features supported by the client.\n', required: [] }),
      })
      .exactOptional()
      .openapi({
        description:
          "clientConnectivity provides a report on the device's current physical network conditions.\n",
        example: {
          endpoints: ['199.9.14.201:59128', '192.68.0.21:59128'],
          latency: {
            Dallas: { latencyMs: 60.463043 },
            'New York City': { preferred: true, latencyMs: 31.323811 },
          },
          mappingVariesByDestIP: false,
          clientSupports: {
            hairPinning: null,
            ipv6: false,
            pcp: false,
            pmp: false,
            udp: false,
            upnp: false,
          },
        },
        required: [],
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['tag:golink'],
        description:
          'Lets you assign an identity to a device that is separate from human users, and use it as part of an ACL to restrict access.\nOnce a device is tagged, the tag is the owner of that device.\nA single node can have multiple tags assigned.\nThis value is empty for external devices.\nLearn more about tags at https://tailscale.com/docs/features/tags.\n',
      }),
    tailnetLockError: z
      .string()
      .exactOptional()
      .openapi({
        example: '',
        description:
          'Indicates an issue with the tailnet lock node-key signature on this device.\nThis field is only populated when tailnet lock is enabled.\n',
      }),
    tailnetLockKey: z
      .string()
      .exactOptional()
      .openapi({
        example: '',
        description:
          "The node's tailnet lock key.\nEvery node generates a tailnet lock key (so the value will be present) even if tailnet lock is not enabled.\nLearn more about tailnet lock at https://tailscale.com/docs/features/tailnet-lock.\n",
      }),
    sshEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          "'true' if Tailscale SSH is enabled on this device.\nLearn more about Tailscale SSH at https://tailscale.com/docs/features/tailscale-ssh.\n",
      }),
    postureIdentity: z
      .object({
        serialNumbers: z
          .array(z.string())
          .exactOptional()
          .openapi({ example: ['CP74LFQJXM'] }),
        disabled: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains extra identifiers from the device when the tailnet it is connected to has device posture identification collection enabled.\nIf the device has not opted-in to posture identification collection, this will contain {"disabled": true}.\nLearn more about posture identity at https://tailscale.com/docs/features/access-control/device-management/how-to/manage-identity.\n',
        example: { serialNumbers: ['CP74LFQJXM'] },
        required: [],
      }),
    postureStatus: z
      .object({
        passing: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Reports whether the device is passing this posture.' }),
        impacting: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the status of this posture affects the connectivity of the device.',
          }),
        failingAssertions: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'List of posture assertions the device is failing. Empty if the device is passing.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Reports the status of a single posture for a device.\n',
        required: [],
      }),
    isEphemeral: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          "'true' if the device is ephemeral.\nLearn more about ephemeral nodes at https://tailscale.com/docs/features/ephemeral-nodes.\n",
      }),
    distro: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({
            example: 'ubuntu',
            description: 'The operating system distribution that the device is running.\n',
          }),
        version: z
          .string()
          .exactOptional()
          .openapi({
            example: '25.04',
            description: 'The operating system distribution version that the device is running.\n',
          }),
        codeName: z
          .string()
          .exactOptional()
          .openapi({
            example: 'Plucky Puffin',
            description:
              'The operating system distribution code name that the device is running.\n',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'distro provides details of the operating system distribution, if available.\n',
        example: { name: 'ubuntu', version: '25.04', codeName: 'Plucky Puffin' },
        required: [],
      }),
  })
  .openapi({
    description:
      'A Tailscale device (sometimes referred to as *node* or *machine*), is any computer or mobile device that joins a tailnet.\n\nEach device has a unique ID (`nodeId` in the schema below) that is used to identify the device in API calls.\nThis ID can be found by going to the [Machines](https://login.tailscale.com/admin/machines) page in the admin console,\nselecting the relevant device, then finding the ID in the Machine Details section.\nYou can also [list all devices](#tag/devices/get/tailnet/{tailnet}/devices) in the tailnet to get their `nodeId` values.\n',
    required: [],
  })
  .openapi('Device')

const ErrorSchema = z
  .object({ message: z.string() })
  .openapi({ required: ['message'] })
  .openapi('Error')

const DeviceRoutesSchema = z
  .object({
    advertisedRoutes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The subnets this device requests to expose.\n',
        example: ['10.0.0.0/16', '192.168.1.0/24'],
      }),
    enabledRoutes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The subnet routes for this device that have been approved by a tailnet admin.\n',
        example: ['10.0.0.0/16', '192.168.1.0/24'],
      }),
  })
  .openapi({ required: [] })
  .openapi('DeviceRoutes')

const DevicePostureAttributesSchema = z
  .object({
    attributes: z
      .record(
        z.string(),
        z
          .union([z.string(), z.number(), z.boolean()])
          .openapi({ 'x-additionalPropertiesName': 'Posture attributes' }),
      )
      .exactOptional()
      .openapi({
        description:
          'Contains all the posture attributes assigned to a node.\nAttribute values can be strings, numbers or booleans.\n',
      }),
    expiries: z
      .record(
        z.string(),
        z.iso
          .datetime({ offset: true })
          .openapi({
            example: '2022-12-01T05:23:30Z',
            description: 'Expiry time for a given posture attribute.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Contains the expiry time for each posture attribute, if set.\n' }),
  })
  .openapi({
    example: {
      attributes: {
        'custom:myScore': 80,
        'custom:diskEncryption': true,
        'custom:myAttribute': 'my_value',
        'node:os': 'linux',
        'node:osVersion': '5.19.0-42-generic',
        'node:tsReleaseTrack': 'stable',
        'node:tsVersion': '1.40.0',
        'node:tsAutoUpdate': false,
        'node:tsStateEncrypted': false,
      },
      expiries: { 'custom:myScore': '2024-04-23T18:25:43.511Z' },
    },
    required: [],
  })
  .openapi('DevicePostureAttributes')

const DeviceInviteSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: '12346',
        description:
          'The unique identifier for the invite.\nSupply this value wherever {deviceInviteId} is indicated in the endpoint.\n',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2024-04-03T21:38:49.333829261Z',
        description: 'The creation time of the invite.\n',
      }),
    tailnetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 59954,
        description: 'The ID of the tailnet to which the shared device belongs.\n',
      }),
    deviceId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 11055,
        description: 'The ID of the device being shared.\n',
      }),
    sharerId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 22012,
        description: 'The ID of the user who created the share invite.\n',
      }),
    multiUse: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description: 'Specifies whether this device invite can be accepted\nmore than once.\n',
      }),
    allowExitNode: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Specifies whether the invited user is able to use the\ndevice as an exit node when the device is advertising as one.\n',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        example: 'user@example.com',
        description:
          'The email to which the invite was sent.\nIf empty, the invite was not emailed to anyone,\nbut the inviteUrl can be shared manually.\n',
      }),
    lastEmailSentAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2024-04-03T21:38:49.333829261Z',
        description:
          'The last time the invite was attempted to be sent to Email.\nOnly ever set if `email` is not empty.\n',
      }),
    inviteUrl: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://login.tailscale.com/admin/invite/<code>',
        description:
          'The link to accept the invite.\nAnyone with this link can accept the invite.\nIt is not restricted to the person to which the invite was emailed.\n',
      }),
    accepted: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description: '`true` when the share invite has been accepted.\n',
      }),
    acceptedBy: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            example: 33223,
            description: 'The ID of the user who accepted the share invite.\n',
          }),
        loginName: z
          .string()
          .exactOptional()
          .openapi({
            example: 'someone@example.com',
            description: 'The login name of the user who accepted the share invite.\n',
          }),
        profilePicUrl: z
          .string()
          .exactOptional()
          .openapi({
            example: '',
            description: 'The profile pic URL for the user who accepted the share invite.\n',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Set when the invite has been accepted.\nIt holds information about the user who accepted the share invite.\n',
        required: [],
      }),
  })
  .openapi({
    description:
      "A device invite is an invitation that shares a device with an external\nuser (a user not in the device's tailnet).\n\nEach device invite has a unique ID that is used to identify the invite\nin API calls. You can find all device invite IDs for a particular device\nby [listing all device invites](#tag/deviceinvites/POST/device/{deviceId}/device-invites)\nfor a device.\n",
    required: [],
  })
  .openapi('DeviceInvite')

const UserInviteSchema = z
  .object({
    id: z
      .string()
      .openapi({
        example: '12346',
        description:
          'The unique identifier for the invite.\nSupply this value wherever `userInviteId` is indicated in the endpoint.\n',
      }),
    role: z
      .enum(['member', 'admin', 'it-admin', 'network-admin', 'billing-admin', 'auditor'])
      .openapi({
        example: 'admin',
        description:
          'The tailnet user role to assign to the invited user upon accepting the invite.\n',
      }),
    tailnetId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 59954,
        description: 'The ID of the tailnet to which the user was invited.\n',
      }),
    inviterId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        example: 22012,
        description: 'The ID of the user who created the invite.\n',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        example: 'user@example.com',
        description:
          'The email to which the invite was sent.\nIf empty, the invite was not emailed to anyone,\nbut the inviteUrl can be shared manually.\n',
      }),
    lastEmailSentAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2024-04-03T21:38:49.333829261Z',
        description:
          'The last time the invite was attempted to be sent to Email.\nOnly ever set if `email` is not empty.\n',
      }),
    inviteUrl: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://login.tailscale.com/admin/invite/<code>',
        description:
          "Included when `email` is not part of the tailnet's domain,\nor when `email` is empty. It is the link to accept the invite.\n\nWhen included, anyone with this link can accept the invite.\nIt is not restricted to the person to which the invite was emailed.\n\nWhen `email` is part of the tailnet's domain (has the same @domain.com\nsuffix as the tailnet), the user can join the tailnet automatically by\nlogging in with their domain email at https://login.tailscale.com/start.\nThey'll be assigned the specified `role` upon signing in for the first\ntime.\n",
      }),
  })
  .openapi({
    description:
      'A user invite is an active invitation that lets a user join a tailnet\nwith a preassigned [user role](https://tailscale.com/docs/reference/user-roles).\n\nEach user invite has a unique ID that is used to identify the invite\nin API calls. You can find all user invite IDs for a particular tailnet\nby [listing user invites](#tag/userinvites/get/tailnet/{tailnet}/user-invites).\n',
    required: ['id', 'role', 'tailnetId', 'inviterId'],
  })
  .openapi('UserInvite')

const ConfigurationAuditLogSchema = z
  .object({
    eventTime: z
      .string()
      .openapi({
        description: 'Timestamp of the audit log event, in RFC 3339 format.',
        example: '2024-06-06T15:25:26.583893Z',
      }),
    type: z.literal('CONFIG').openapi({ description: 'The type of log (always "CONFIG").' }),
    deferredAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp recording the time that the audit log rate limiter enqueued the record to be logged at a future time, in RFC 3339 format.',
        example: '0001-01-01T00:00:00Z',
      }),
    eventGroupID: z
      .string()
      .openapi({
        description:
          'Identifier assigned to one or more audit log events, all of which are the result of a single operation.',
        example: '0378d8f57300d172ef7ae3826e097ef0',
      }),
    origin: z
      .enum([
        'ADMIN_CONSOLE',
        'CONFIG_API',
        'CONTROL',
        'IDENTITY_PROVIDER',
        'NODE',
        'SUPPORT_REQUEST',
        'STRIPE',
        'SECURITY_NOTIFICATION',
        'LEGAL_NOTIFICATION',
        'BORDER0_API',
      ])
      .openapi({
        description:
          'The initiator of the action that generated the event, typically an API or user interface, like the Tailscale admin panel.',
        example: 'ADMIN_CONSOLE',
      }),
    actor: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The ID (user ID or node ID) of the actor.',
            example: 'uZKk3KSfrH11DEVEL',
          }),
        type: z
          .enum([
            'USER',
            'NODE',
            'AUTOMATED_WORKER',
            'OAUTH_CLIENT',
            'SCIM',
            'MULLVAD',
            'LOGSTREAM',
            'SECRET_SCANNER',
            'PAM_CONNECTOR',
            'PAM_SERVICE_ACCOUNT',
          ])
          .exactOptional()
          .openapi({ description: 'The entity type of the actor.', example: 'USER' }),
        loginName: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The login name of the actor at time of the action.',
            example: 'lion.dahlia.armadillo@example.com',
          }),
        displayName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The display name of the actor at time of the action.' }),
        tags: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Indicates the tags owning a node. Its value is only set if `type` is `NODE`.',
            example: ['server', 'datacenter1'],
          }),
      })
      .openapi({
        description: 'The person who caused the action related to this event.',
        required: [],
      }),
    target: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The unique ID (user id, tailnet SID, or node id) of the target.',
            example: 'nBLYviWLGB21DEVEL',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Name of the entity at time of the action.',
            example: 'silver-robin-horse-albatross-armadillo.taile18a.ts.net',
          }),
        type: z
          .enum([
            'TAILNET',
            'USER',
            'GROUP',
            'NODE',
            'API_KEY',
            'INVITE',
            'SHARE',
            'BILLING',
            'ADMIN_CONSOLE',
            'WEB_INTERFACE',
            'WEBHOOK_ENDPOINT',
            'FAILED_REQUEST',
          ])
          .exactOptional()
          .openapi({ description: 'The entity type of Target.', example: 'NODE' }),
        isEphemeral: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates whether the target is ephemeral. Its value should only be set if `type` is `NODE``.',
            example: true,
          }),
        property: z
          .enum([
            'ACL',
            'ACL_TAGS',
            'ACCOUNT_EMAIL',
            'ADDRESS',
            'ALLOWED_IPS',
            'AUTO_APPROVED_ROUTES',
            'ATTRIBUTES',
            'BILLING_OWNER',
            'COLLECT_SERVICES',
            'COLLECT_POSTURE_IDENTITY',
            'MULLVAD_VPN',
            'DNS_CONFIG',
            'EMAIL',
            'EXIT_NODE',
            'FEATURE',
            'FILE_SHARING',
            'HTTPS',
            'KEY_EXPIRY_TIME',
            'KEY_EXPIRY',
            'LOG_EXIT_FLOWS',
            'LOGSTREAM_ENDPOINT',
            'MAGIC_DNS',
            'MACHINE_AUTH_NEEDED',
            'MACHINE_APPROVAL_NEEDED',
            'USER_APPROVAL_REQUIRED',
            'MACHINE_NAME',
            'MAX_KEY_DURATION',
            'NETWORK_FLOW_LOGGING',
            'GEOSTEERING',
            'NODE_SHARE',
            'TAILNET_INVITE',
            'PAYMENT_INFO',
            'POSTURE_IDENTITY',
            'POSTURE_INTEGRATION',
            'USER_ROLE',
            'SCIM',
            'SECURITY_EMAIL',
            'STRIPE_CUSTOMER_ID',
            'SUBSCRIPTION',
            'SUBSCRIBED_EVENTS',
            'SUPPORT_EMAIL',
            'SECRET',
            'TCD',
            'TKA',
            'AUTH_PROVIDER',
            'ROUTE_SELECTION',
          ])
          .exactOptional()
          .openapi({
            description:
              "The property name on this target which was updated by the event. When empty, the event didn't update any fields on this target.",
            example: 'ALLOWED_IPS',
          }),
      })
      .openapi({ description: "The object of this event's action.", required: [] }),
    action: z
      .enum([
        'LOGIN',
        'LOGOUT',
        'CREATE',
        'UPDATE',
        'DELETE',
        'CANCEL',
        'REVOKE',
        'APPROVE',
        'SUSPEND',
        'RESTORE',
        'ENABLE',
        'DISABLE',
        'ACCEPT',
        'EXPIRED',
        'PUSH_USER',
        'PUSH_GROUP',
        'VERIFY',
        'JOIN_WAITLIST',
        'INVITE',
        'JOIN',
        'LEAVE',
        'RESEND',
        'MIGRATE_AUTH_PROVIDER',
      ])
      .openapi({
        description: 'The type of change attempted against the `target`.',
        example: 'CREATE',
      }),
    old: z
      .union([z.string(), z.number(), z.int(), z.boolean(), z.array(z.any()), z.object({})])
      .exactOptional()
      .openapi({ description: 'The value of `target.property`` prior to the event.' }),
    new: z
      .union([z.string(), z.number(), z.int(), z.boolean(), z.array(z.any()), z.object({})])
      .exactOptional()
      .openapi({ description: 'The value of `target.property` after the event.' }),
    actionDetails: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the event, such as a client-provided reason, if it exists.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provided when the configuration change failed to be completed. It is a user-presentable reason for the failure.',
      }),
  })
  .openapi({
    required: ['eventTime', 'type', 'eventGroupID', 'origin', 'actor', 'target', 'action'],
    example: {
      action: 'CREATE',
      actor: {
        displayName: 'Lion Dahlia Armadillo',
        id: 'uZKk3KSfrH11DEVEL',
        loginName: 'lion.dahlia.armadillo@example.com',
        type: 'USER',
      },
      deferredAt: '0001-01-01T00:00:00Z',
      eventGroupID: '0378d8f57300d172ef7ae3826e097ef0',
      eventTime: '2024-06-06T15:25:26.583893Z',
      origin: 'ADMIN_CONSOLE',
      target: {
        id: 'nBLYviWLGB21DEVEL',
        isEphemeral: true,
        name: 'silver-robin-horse-albatross-armadillo.taile18a.ts.net',
        type: 'NODE',
      },
      type: 'CONFIG',
    },
  })
  .openapi('ConfigurationAuditLog')

const ConnectionCountsSchema = z
  .object({
    proto: z
      .enum([
        'ah',
        'dccp',
        'egp',
        'esp',
        'gre',
        'icmp',
        'igmp',
        'igp',
        'ipv4',
        'ipv6-icmp',
        'sctp',
        'tcp',
        'udp',
      ])
      .exactOptional()
      .openapi({ description: 'IP protocol name (or number if no name used).', example: 'ipv4' }),
    src: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source addr:port.', example: '108.86.185.125:52343' }),
    dst: z
      .string()
      .exactOptional()
      .openapi({ description: 'Destination addr:port.', example: '108.86.185.126:443' }),
    txPkts: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of packets sent.', example: 10 }),
    txBytes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of bytes sent.', example: 1000 }),
    rxPkts: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of packets received.', example: 10 }),
    rxBytes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of bytes received.', example: 1000 }),
  })
  .openapi({ required: [] })
  .openapi('ConnectionCounts')

const NetworkFlowLogSchema = z
  .object({
    logged: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the flow log, in RFC 3339 format.',
        example: '2024-06-06T15:27:26.583893Z',
      }),
    nodeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the node.', example: 'nBLYviWLGB21DEVEL' }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time at which flow started, in RFC 3339 format.',
        example: '2024-06-06T15:25:26.583893Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time at which flow ended, in RFC 3339 format.',
        example: '2024-06-06T15:26:26.583893Z',
      }),
    virtualTraffic: z.array(ConnectionCountsSchema).exactOptional(),
    subnetTraffic: z.array(ConnectionCountsSchema).exactOptional(),
    exitTraffic: z.array(ConnectionCountsSchema).exactOptional(),
    physicalTraffic: z.array(ConnectionCountsSchema).exactOptional(),
  })
  .openapi({
    example: {
      logged: '2024-06-06T15:27:26.583893Z',
      nodeId: 'nBLYviWLGB21DEVEL',
      start: '2024-06-06T15:25:26.583893Z',
      end: '2024-06-06T15:26:26.583893Z',
      virtualTraffic: [
        {
          proto: 'ipv4',
          src: '108.86.185.125:52343',
          dst: '108.86.185.126:443',
          txPkts: 10,
          txBytes: 10000,
          rxPkts: 10,
          rxBytes: 10000,
        },
      ],
      subnetTraffic: [
        {
          proto: 'ipv4',
          src: '108.86.185.125:52343',
          dst: '108.86.185.126:443',
          txPkts: 10,
          txBytes: 10000,
          rxPkts: 10,
          rxBytes: 10000,
        },
      ],
      exitTraffic: [
        {
          proto: 'ipv4',
          src: '108.86.185.125:52343',
          dst: '108.86.185.126:443',
          txPkts: 10,
          txBytes: 10000,
          rxPkts: 10,
          rxBytes: 10000,
        },
      ],
      physicalTraffic: [
        {
          proto: 'ipv4',
          src: '108.86.185.125:52343',
          dst: '108.86.185.126:443',
          txPkts: 10,
          txBytes: 10000,
          rxPkts: 10,
          rxBytes: 10000,
        },
      ],
    },
    required: [],
  })
  .openapi('NetworkFlowLog')

const LogTypeSchema = z
  .enum(['configuration', 'network'])
  .openapi({ example: 'configuration', description: 'The type of log for logging endpoints.\n' })
  .openapi('LogType')

const LogstreamEndpointPublishingStatusSchema = z
  .object({
    lastActivity: z
      .string()
      .openapi({
        description: 'Timestamp of the most recent publishing activity, in RFC 3339 format.',
        example: '2024-06-10T15:42:13.984555636Z',
      }),
    lastError: z
      .string()
      .openapi({
        description: 'The most recent error (if any).',
        example: 'Something went wrong.',
      }),
    maxBodySize: z
      .int()
      .openapi({ description: 'The size of the largest single request body.', example: 524288 }),
    numBytesSent: z
      .int()
      .openapi({ description: 'Total bytes published across all requests.', example: 17238983 }),
    numEntriesSent: z
      .int()
      .openapi({ description: 'The total number of entries published.', example: 8363 }),
    numSpoofedEntries: z
      .int()
      .openapi({
        description:
          'The number of spoofed entries published. A spoofed entry is one that failed to validate because we did not see receive a matching flow log from the other side of the connection.',
        example: 0,
      }),
    numTotalRequests: z
      .int()
      .openapi({
        description: 'The total number of requests made to the streaming endpoint.',
        example: 10610,
      }),
    numFailedRequests: z
      .int()
      .openapi({
        description: 'The total number of requests to the streaming endpoint that have failed.',
        example: 5434,
      }),
    rateBytesSent: z
      .number()
      .openapi({
        description:
          'The exponentially weighted moving average rate at which data is being streamed to the endpoint, in bytes per second.',
        example: 3.524073767296142,
      }),
    rateEntriesSent: z
      .number()
      .openapi({
        description:
          'The exponentially weighted moving average rate at which entries are being sent to the endpoint, in entries per second.',
        example: 0.008564949767446907,
      }),
    rateTotalRequests: z
      .number()
      .openapi({
        description:
          'The exponentially weighted moving average rate at which requests are being made to the endpoint, in requests per second.',
        example: 0.0037038341100629453,
      }),
    rateFailedRequests: z
      .number()
      .openapi({
        description:
          'The exponentially weighted moving average rate at which requests are failing, in requests per second.',
        example: 4.1431119220540763e-157,
      }),
  })
  .openapi({
    description: 'Latest status of log stream publishing for a specific type of log.',
    example: {
      lastActivity: '2024-06-10T15:42:13.984555636Z',
      lastError: '',
      maxBodySize: 524288,
      numBytesSent: 17238983,
      numEntriesSent: 8363,
      numFailedRequests: 5434,
      numSpoofedEntries: 0,
      numTotalRequests: 10610,
      rateBytesSent: 3.524073767296142,
      rateEntriesSent: 0.008564949767446907,
      rateFailedRequests: 4.1431119220540763e-157,
      rateTotalRequests: 0.0037038341100629453,
    },
    required: [
      'lastActivity',
      'lastError',
      'maxBodySize',
      'numBytesSent',
      'numEntriesSent',
      'numSpoofedEntries',
      'numTotalRequests',
      'numFailedRequests',
      'rateBytesSent',
      'rateEntriesSent',
      'rateTotalRequests',
      'rateFailedRequests',
    ],
  })
  .openapi('LogstreamEndpointPublishingStatus')

const LogstreamEndpointConfigurationSchema = z
  .object({
    logType: LogTypeSchema.exactOptional().openapi({
      description: 'The type of log that is streamed to this endpoint.',
      readOnly: true,
    }),
    destinationType: z
      .enum(['splunk', 'elastic', 'panther', 'cribl', 'crowdstrike', 'datadog', 'axiom', 's3'])
      .exactOptional()
      .openapi({
        description: 'The type of system to which logs are being streamed.',
        example: 'elastic',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to which log streams are being posted. If the DestinationType is `s3`, the URL may be (and often is) empty to use the official Amazon S3 endpoint.',
        example: 'http://100.71.134.73:80/config-log-datastream',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The username with which log streams to this endpoint are authenticated.',
        example: 'myusername',
      }),
    uploadPeriodMinutes: z
      .int()
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          'An optional number of minutes to wait in between uploading new logs. If the quantity of logs does not fit within a single upload, multiple uploads will be made.',
        example: 5,
      }),
    compressionFormat: z
      .enum(['zstd', 'gzip', 'none'])
      .exactOptional()
      .openapi({
        description:
          'The compression algorithm with which to compress logs. `none` disables compression. Defaults to `none`.',
        example: 'zstd',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token/password with which log streams to this endpoint should be authenticated.',
        writeOnly: true,
        example: 'mytoken',
      }),
    s3Bucket: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The S3 bucket name. Required if the destinationType is `s3`.',
        example: 'mycompany-mybucket',
      }),
    s3Region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The region in which the S3 bucket is located. Required if the destinationType is `s3`.',
        example: 'us-east-1',
      }),
    s3KeyPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An optional S3 key prefix to prepend to the auto-generated S3 key name.',
      }),
    s3AuthenticationType: z
      .enum(['accesskey', 'rolearn'])
      .exactOptional()
      .openapi({
        description:
          'What type of authentication to use for S3. Required if the destinationType is `s3`. Tailscale recommends using `rolearn`. See [Amazon documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html).',
      }),
    s3AccessKeyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The S3 access key ID. Required if the destinationType is `s3` and `authenticationType` is `accesskey`.',
      }),
    s3SecretAccessKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The S3 secret access key. Required if the destinationType is `s3` and `authenticationType` is `accesskey`.',
        writeOnly: true,
      }),
    s3RoleArn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Role ARN that Tailscale should supply to AWS when authenticating using role-based authentication. Required if the destinationType is `s3` and `authenticationType` is `rolearn`.',
      }),
    s3ExternalId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The AWS external id that Tailscale supplies when authenticating using role-based authentication. Populated if the destinationType is `s3` and `authenticationType` is `rolearn`. This corresponds to the `externalId` field obtained from [tailnet/{tailnet}/aws-external-id](#tag/logging/POST/tailnet/{tailnet}/aws-external-id).',
        readOnly: true,
      }),
    gcsBucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GCS bucket name. Required if the destinationType is `gcs`.' }),
    gcsKeyPrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional GCS key prefix to append to the GCS bucket name.' }),
    gcsScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The GCS scopes needed to be able to write to the GCS bucket.' }),
    gcsCredentials: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The JSON workload identity credentials from GCS needed for accessing the GCS account.',
      }),
  })
  .openapi({
    description: 'The current configuration of a log streaming endpoint.',
    example: {
      logType: 'configuration',
      destinationType: 'elastic',
      url: 'http://100.71.134.73:80/config-log-datastream',
      user: 'myusername',
    },
    required: [],
  })
  .openapi('LogstreamEndpointConfiguration')

const AwsExternalIdSchema = z
  .object({
    externalId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The external id that Tailscale will supply to AWS when authenticating using role-based authentication.',
        example: '60fe9ce7-7791-4ab3-ab34-4294f5972725',
      }),
    tailscaleAwsAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The AWS account id that Tailscale will supply to AWS when authenticating using role-based authentication.',
        example: '001234567890',
      }),
  })
  .openapi({
    description: 'An external ID for use in authenticating to AWS using role-based authentication.',
    example: {
      externalId: '60fe9ce7-7791-4ab3-ab34-4294f5972725',
      tailscaleAwsAccountId: '001234567890',
    },
    required: [],
  })
  .openapi('AwsExternalId')

const DnsPreferencesSchema = z
  .object({
    magicDNS: z
      .boolean()
      .openapi({ example: true, description: 'Whether MagicDNS is active for this tailnet.\n' }),
  })
  .openapi({ required: ['magicDNS'] })
  .openapi('DnsPreferences')

const DnsSearchPathsSchema = z
  .object({
    searchPaths: z
      .array(z.string())
      .openapi({
        example: ['user1.example.com', 'user2.example.com'],
        description: 'The search domains for the given tailnet.\n',
      }),
  })
  .openapi({ required: ['searchPaths'] })
  .openapi('DnsSearchPaths')

const SplitDnsSchema = z
  .record(
    z.string(),
    z.array(z.string()).nullable().openapi({ 'x-additionalPropertiesName': 'Domain names to DNS' }),
  )
  .openapi({
    example: { 'example.com': ['1.1.1.1', '1.2.3.4'], 'other.com': ['2.2.2.2'] },
    description: 'Map of domain names to lists of nameservers or to `null`.\n',
  })
  .openapi('SplitDns')

const DnsConfigurationResolverSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IPv4 or IPv6 address of the DNS resolver.\n', example: '1.1.1.1' }),
    useWithExitNode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, this resolver should still be used when a device is configured to use a Tailscale exit node. Requires Tailscale v1.88.1 or later.\n',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DnsConfigurationResolver')

const DnsConfigurationPreferencesSchema = z
  .object({
    overrideLocalDNS: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, resolvers in `nameservers` override the local OS DNS configuration; if false, local resolvers are used.\n',
        example: true,
      }),
    magicDNS: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether MagicDNS is enabled for this tailnet.\n', example: true }),
  })
  .openapi({ required: [] })
  .openapi('DnsConfigurationPreferences')

const DnsConfigurationSchema = z
  .object({
    nameservers: z
      .array(DnsConfigurationResolverSchema)
      .exactOptional()
      .openapi({
        description:
          'Global DNS resolvers to use. If `preferences.overrideLocalDNS` is true, these override the local OS configuration; otherwise they are used as fallback resolvers.\n',
        example: [
          { address: '8.8.8.8', useWithExitNode: true },
          { address: '1.1.1.1', useWithExitNode: false },
        ],
      }),
    splitDNS: z
      .record(
        z.string(),
        z
          .array(DnsConfigurationResolverSchema)
          .nullable()
          .openapi({ 'x-additionalPropertiesName': 'Domain names to DNS resolvers' }),
      )
      .exactOptional()
      .openapi({
        description:
          'Map of DNS name suffixes (domains) to lists of resolvers for Split DNS and advanced routing overlays.\n',
        example: {
          'corp.example.com': [
            { address: '10.0.0.53', useWithExitNode: true },
            { address: '10.0.1.53', useWithExitNode: true },
          ],
          'other.internal': [{ address: '10.0.2.53', useWithExitNode: false }],
        },
      }),
    searchPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Search domain paths to apply.\n',
        example: ['user1.example.com', 'user2.example.com'],
      }),
    preferences: DnsConfigurationPreferencesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DnsConfiguration')

const KeyCapabilitiesSchema = z
  .object({
    devices: z
      .object({
        create: z
          .object({
            reusable: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'reusable for auth keys only; reusable auth keys can be used multiple times to register different devices.\nLearn more about reusable auth keys at https://tailscale.com/docs/features/access-control/auth-keys#types-of-auth-keys.\n',
                example: true,
              }),
            ephemeral: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'ephemeral for auth keys only; ephemeral keys are used to connect and then clean up short-lived devices.\nLearn about ephemeral nodes at https://tailscale.com/docs/features/ephemeral-nodes.\n',
                example: false,
              }),
            preauthorized: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  "preauthorized for auth keys only; these are also referred to as \"pre-approved\" keys. 'true' means that devices\nregistered with this key won't require additional approval from a tailnet admin.\nLearn about device approval at https://tailscale.com/docs/features/access-control/device-management/device-approval.\n",
                example: true,
              }),
            tags: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  "tags are the tags that will be set on devices registered with this key.\nLearn about tags at https://tailscale.com/docs/features/tags.\n\nWhether tags are required or optional depends on the owner of the auth key:\n- When creating an auth key owned by the tailnet (using OAuth), it must have tags. The auth tags specified for that new auth key must exactly match the tags that are on the OAuth client used to create that auth key (or they must be tags that are owned by the tags that are on the OAuth client used to create the auth key).\n- When creating an auth key owned by a user (using a user's access token), tags are optional.\n",
                example: ['tag:example'],
              }),
          })
          .exactOptional()
          .openapi({
            description: "`create` specifies the key's permissions when creating devices.\n",
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "`devices` specifies the key's permissions over devices.\nThis field is only populated for auth keys.\n",
        required: [],
      }),
  })
  .openapi({
    description: '`capabilities` is a mapping of resources to permissible actions.\n',
    required: [],
  })
  .openapi('KeyCapabilities')

const KeySchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'k123456CNTRL' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secret key material (only populated at creation time).',
        example: 'tskey-auth-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      }),
    keyType: z
      .enum(['auth', 'client', 'api', 'federated'])
      .exactOptional()
      .openapi({
        description:
          'The type of key. Can be one of "auth", "client", "federated", or "api".\n- "auth" refers to machine auth keys.\n- "client" refers to OAuth clients.\n- "federated" refers to federated identities.\n- "api" refers to personal API access tokens or tokens generated using an OAuth client or federated identity.\n',
        example: 'auth',
      }),
    expirySeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Duration in seconds until the key expires.\nOnly applies to auth keys.\n',
        example: 7776000,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-12-09T23:22:39Z' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2021-12-09T23:22:39Z' }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-09T23:22:39Z' }),
    revoked: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-12T23:22:39Z' }),
    capabilities: KeyCapabilitiesSchema.exactOptional(),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of scopes granted to the key.\n\nOnly applies to OAuth clients, API access tokens, and federated identities.\n',
        example: ['all:read'],
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of tags associated to the trust credential. \nAuth keys created with this client must have these exact tags, or tags owned by the client\'s tags. \nMandatory if the scopes include "devices:core" or "auth_keys". \n\nOnly applies to OAuth clients and federated identities.\n',
        example: ['tag:example'],
      }),
    description: z.string().exactOptional().openapi({ example: 'dev access' }),
    invalid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Response for a revoked (deleted) or expired key will have an `invalid` field set to true.\n',
        example: false,
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the user who created this key, empty for keys created by trust credentials.\n',
        example: 'uscwcTtzzo11DEVEL',
      }),
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value used when matching against the `aud` claim from an OIDC identity token.\n\nSpecifying the audience is optional as Tailscale will generate a secure audience at creation time by default.\nIt is recommended to let Tailscale generate the audience unless the identity provider you are integrating with\nrequires a specific audience format.\n\nOnly applies to federated identities.\n',
        example: 'api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL',
      }),
    issuer: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The issuer of the OIDC identity token used in the token exchange. Must be a valid and publicly reachable https:// URL.\n\nOnly applies to federated identities.\n',
        example: 'https://example.com',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pattern used when matching against the `sub` claim from an OIDC identity token.\nThis pattern can include `*` characters to match against any character.\n\nOnly applies to federated identities.\n',
        example: 'my-example-subject-*',
      }),
    customClaimRules: z
      .record(z.string(), z.string().openapi({ 'x-additionalPropertiesName': 'Custom claim rule' }))
      .exactOptional()
      .openapi({
        description:
          'A map of claim names to pattern strings used to match against arbitrary claims in the OIDC identity token.\nPatterns can include `*` characters to match against any character.\n\nOnly applies to federated identities.\n',
        example: {
          exampleAdditionalClaim: 'valueToMatch',
          otherAdditionalClaim: 'valueWithWildcard*',
        },
      }),
  })
  .openapi({ description: 'An API access token or Auth Key.\n', required: [] })
  .openapi('Key')

const PostureIntegrationSchema = z
  .object({
    provider: z
      .enum(['falcon', 'intune', 'jamfpro', 'kandji', 'kolide', 'sentinelone'])
      .exactOptional()
      .openapi({
        description:
          'The device posture provider.\n\nRequired on POST requests, ignored on PATCH requests.\n',
        example: 'falcon',
      }),
    cloudId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Identifies which of the provider's clouds to integrate with.\n\n- For CrowdStrike Falcon, it will be one of `us-1`, `us-2`, `eu-1` or `us-gov`.\n- For Microsoft Intune, it will be one of `global` or `us-gov`. \n- For Jamf Pro, Kandji and Sentinel One, it is the FQDN of your subdomain, for example `mydomain.sentinelone.net`.\n- For Kolide, this is left blank.\n",
        example: 'us-1',
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Unique identifier for your client.\n\n- For Microsoft Intune, it will be your application's UUID.\n- For CrowdStrike Falcon and Jamf Pro, it will be your client id.\n- For Kandji, Kolide and Sentinel One, this is left blank.\n",
        example: 'us-1',
      }),
    tenantId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Microsoft Intune directory (tenant) ID. For other providers, this is left blank.',
        example: 'd1ae389b-5207-43a2-afca-2de6b03ac7e3',
      }),
    clientSecret: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'The secret (auth key, token, etc.) used to authenticate with the provider.\n\nRequired when creating a new integration, may be omitted when updating an existing integration, in which case we retain the existing password.\n',
        example: 'as32598d#@%asdf',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'A unique identifier for the integration (generated by the system).',
        example: 'pcBEPQVMpki7DEVEL',
      }),
    configUpdated: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Timestamp of the last time this configuration was updated, in RFC 3339 format.',
        example: '2024-06-18T13:43:43.239839Z',
      }),
    status: z
      .object({
        lastSync: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Timestamp of the last synchronization with the device posture provider, in RFC 3339 format.',
            example: '2024-06-18T08:44:33.872282-05:00',
          }),
        error: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If the last synchronization failed, this shows the error message associated with the failed synchronization.',
            example:
              "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
          }),
        providerHostCount: z
          .int()
          .exactOptional()
          .openapi({ description: 'The number of devices known to the provider.', example: 98 }),
        matchedCount: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The number of Tailscale nodes that were matched with provider.',
            example: 11,
          }),
        possibleMatchedCount: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The number of Tailscale nodes with identifiers for matching.',
            example: 16,
          }),
      })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Most recent status for this integration.',
        required: [],
      }),
  })
  .openapi({
    description: 'A configured PostureIntegration.',
    example: {
      id: 'p56wQiqrn7mfDEVEL',
      provider: 'intune',
      cloudId: 'global',
      clientId: '93013672-b00c-4344-80ca-7ecf74f9dce1',
      tenantId: 'd1ae389b-5207-43a2-afca-2de6b03ac7e3',
      configUpdated: '2024-06-18T13:44:28.250168Z',
      status: {
        error:
          "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
        lastSync: '2024-06-18T08:44:33.872282-05:00',
        matchedCount: 0,
        possibleMatchedCount: 0,
        providerHostCount: 0,
      },
    },
    required: [],
  })
  .openapi('PostureIntegration')

const UserSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: '123456',
        description:
          'The unique identifier for the user.\nSupply this value wherever {userId} is indicated in an endpoint.\n',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ example: 'Some User', description: 'The name of the user.\n' }),
    loginName: z
      .string()
      .exactOptional()
      .openapi({
        example: 'someuser@example.com',
        description: 'The emailish login name of the user.\n',
      }),
    profilePicUrl: z
      .string()
      .exactOptional()
      .openapi({ example: '', description: 'The profile pic URL for the user.\n' }),
    tailnetId: z
      .string()
      .exactOptional()
      .openapi({ example: 'example.com', description: 'The tailnet that owns the user.\n' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description: 'The time the user joined their tailnet.\n',
      }),
    type: z
      .enum(['member', 'shared'])
      .exactOptional()
      .openapi({
        example: 'member',
        description:
          'The type of relation this user has to the tailnet associated with the request.\n',
      }),
    role: z
      .enum(['owner', 'member', 'admin', 'it-admin', 'network-admin', 'billing-admin', 'auditor'])
      .exactOptional()
      .openapi({
        example: 'member',
        description:
          'The role of the user. Learn more about [user roles](/docs/reference/user-roles).\n',
      }),
    status: z
      .enum(['active', 'idle', 'suspended', 'needs-approval', 'over-billing-limit'])
      .exactOptional()
      .openapi({
        'x-enumDescriptions': {
          active: 'Last seen within 28 days.',
          idle: 'Last seen longer than 28 days.',
          suspended: 'Suspended from accessing the tailnet.',
          'needs-approval': 'Unable to join tailnet until approved.',
          'over-billing-limit': 'Unable to join tailnet until billing count increased.',
        },
        example: 'active',
        description: 'The status of the user.\n',
      }),
    deviceCount: z
      .int()
      .exactOptional()
      .openapi({ example: 4, description: 'Number of devices the user owns.\n' }),
    lastSeen: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description:
          "The later of either:\n- The last time any of the user's nodes were connected to the network.\n- The last time the user authenticated to any tailscale service, including the admin panel.\n",
      }),
    currentlyConnected: z
      .boolean()
      .exactOptional()
      .openapi({
        example: true,
        description: '`true` when the user has a node currently connected to the control server.\n',
      }),
  })
  .openapi({ description: 'Representation of a user within a tailnet.\n', required: [] })
  .openapi('User')

const ContactSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The contact's email address.", example: 'user@example.com' }),
    fallbackEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: "The email address used when contact's email address has not been verified.",
        example: 'otheruser@example.com',
      }),
    needsVerification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Indicates whether the contact's email address still needs to be verified.",
        example: true,
      }),
  })
  .openapi({
    description: 'A tailnet contact.',
    example: {
      email: 'user@example.com',
      fallbackEmail: 'otheruser@example.com"',
      needsVerification: true,
    },
    required: [],
  })
  .openapi('Contact')

const WebhookSchema = z
  .object({
    endpointId: z
      .string()
      .exactOptional()
      .openapi({ example: '123456', description: 'ID of the webhook endpoint.\n' }),
    endpointUrl: z
      .string()
      .exactOptional()
      .openapi({
        example: 'https://example.com/endpoint',
        description: 'The endpoint that events are sent to from Tailscale via POST requests.\n',
      }),
    providerType: z
      .enum(['slack', 'mattermost', 'googlechat', 'discord'])
      .exactOptional()
      .openapi({
        example: 'slack',
        description:
          'The provider type for the webhook destination, or an empty string if none are applicable.\nOutgoing webhook events are sent in the format expected by the provider type if non-empty.\n',
      }),
    creatorLoginName: z
      .string()
      .exactOptional()
      .openapi({
        example: 'user@example.com',
        description:
          'The login name for the creator of the webhook endpoint.\nIn some cases, such as webhooks created with an OAuth client, this can be blank.\n',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description: 'The time the webhook endpoint was created.\n',
      }),
    lastModified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description: 'The time the webhook endpoint was last modified.\n',
      }),
    subscriptions: z
      .array(
        z.enum([
          'nodeCreated',
          'nodeNeedsApproval',
          'nodeApproved',
          'nodeKeyExpiringInOneDay',
          'nodeKeyExpired',
          'nodeDeleted',
          'nodeSigned',
          'nodeNeedsSignature',
          'policyUpdate',
          'userCreated',
          'userNeedsApproval',
          'userSuspended',
          'userRestored',
          'userDeleted',
          'userApproved',
          'userRoleUpdated',
          'subnetIPForwardingNotEnabled',
          'exitNodeIPForwardingNotEnabled',
        ]),
      )
      .exactOptional()
      .openapi({
        example: ['nodeCreated', 'userDeleted'],
        description:
          'The list of subscribed events that trigger POST requests to the configured endpoint URL.\nLearn more about [webhook events](/docs/features/webhooks#events).\n',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        example: 'xxxxx',
        description:
          'The webhook secret associated with the endpoint.\nOnly populated on creation or when the secret is rotated.\n\nThis secret is used for generating the `Tailscale-Webhook-Signature` header in requests sent to the endpoint URL.\nLearn more about [verifying webhook event signatures](/docs/features/webhooks#verifying-an-event-signature).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const ProviderTypeSchema = z
  .enum(['slack', 'mattermost', 'googlechat', 'discord'])
  .openapi({
    example: 'slack',
    description:
      'The provider type for the webhook destination, or an empty string if none are applicable.\nOutgoing webhook events are sent in the format expected by the provider type if non-empty.\n',
  })
  .openapi('ProviderType')

const SubscriptionsSchema = z
  .array(
    z.enum([
      'nodeCreated',
      'nodeNeedsApproval',
      'nodeApproved',
      'nodeKeyExpiringInOneDay',
      'nodeKeyExpired',
      'nodeDeleted',
      'nodeSigned',
      'nodeNeedsSignature',
      'policyUpdate',
      'userCreated',
      'userNeedsApproval',
      'userSuspended',
      'userRestored',
      'userDeleted',
      'userApproved',
      'userRoleUpdated',
      'subnetIPForwardingNotEnabled',
      'exitNodeIPForwardingNotEnabled',
    ]),
  )
  .openapi({
    example: ['nodeCreated', 'userDeleted'],
    description:
      'The list of subscribed events that trigger POST requests to the configured endpoint URL.\nLearn more about [webhook events](/docs/features/webhooks#events).\n',
  })
  .openapi('Subscriptions')

const TailnetSettingsSchema = z
  .object({
    aclsExternallyManagedOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Prevents users from editing policies in the admin console to avoid conflicts with external management workflows like GitOps or Terraform.\n',
      }),
    aclsExternalLink: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://github.com/example/tailnet-policy',
        description:
          'Link to the external tailnet policy definition or management solution for this tailnet.\n',
      }),
    adminConsoleSessionTimeoutMinutes: z
      .int()
      .min(0)
      .max(43200)
      .exactOptional()
      .openapi({
        example: 180,
        description:
          'The [admin console session timeout](/docs/account/admin-console-session-timeout) for members of this tailnet.\nSetting it to 0 disables the timeout.\n',
      }),
    devicesApprovalOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether [device approval](/docs/features/access-control/device-management/device-approval) is enabled for the tailnet.\n',
      }),
    devicesAutoUpdatesOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether [auto updates](/docs/features/client/update#auto-updates) are enabled for devices that belong to this tailnet.\n',
      }),
    devicesKeyDurationDays: z
      .int()
      .min(1)
      .max(180)
      .exactOptional()
      .openapi({
        example: 180,
        description:
          'The [key expiry](/docs/features/access-control/key-expiry) duration for devices on this tailnet.\n',
      }),
    usersApprovalOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: true,
        description:
          'Whether [user approval](/docs/features/access-control/user-approval) is enabled for this tailnet.\n',
      }),
    usersRoleAllowedToJoinExternalTailnets: z
      .enum(['none', 'admin', 'member'])
      .exactOptional()
      .openapi({
        example: 'admin',
        description:
          'Which user roles are allowed to [join external tailnets](/docs/features/sharing/how-to/invite-any-user).\n',
      }),
    networkFlowLoggingOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether [network flog logs](/docs/features/logging/network-flow-logs) are enabled for the tailnet.\n',
      }),
    regionalRoutingOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        readOnly: true,
        description:
          'Whether [regional routing](/docs/features/route-selection#regional-routing) is enabled for the tailnet.\nA PATCH request should prefer setting `routeSelection`.\nA PATCH request must not specify both the `regionalRoutingOn` and `routeSelection` fields.\n',
      }),
    routeSelection: z
      .enum([
        'active-passive-failover',
        'regional-routing',
        'regional-routing-failover',
        'magicroute',
      ])
      .exactOptional()
      .openapi({
        example: 'active-passive-failover',
        description:
          'The [route selection](/docs/features/route-selection) algorithm used by the tailnet:\n* `active-passive-failover` - Active-passive failover (formerly known as "Failover")\n* `regional-routing` - Regional routing\n* `regional-routing-failover` - Regional routing with in-region failover\n* `magicroute` - MagicRoute\n\nA PATCH request must not specify both the `regionalRoutingOn` and `routeSelection` fields.\n',
      }),
    postureIdentityCollectionOn: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether [identity collection](/docs/features/access-control/device-management/how-to/manage-identity) is enabled for [device posture](/docs/features/device-posture) integrations for the tailnet.\n',
      }),
    httpsEnabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Whether provisioning of [HTTPS certificates](/docs/how-to/set-up-https-certificates) is enabled for this tailnet.\n',
      }),
  })
  .openapi({ description: 'Settings for a tailnet.\n', required: [] })
  .openapi('TailnetSettings')

const VIPServiceInfoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique name of the Service.', example: 'svc:example' }),
    displayName: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'An optional human-readable label for the Service, shown in the Tailscale admin console\nand to clients with access to the Service.\nMust be 64 characters or fewer.\n',
        example: 'Example Service',
      }),
    addrs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The IP addresses assigned to the Service: the IPv4 followed by the IPv6.\n',
        example: ['100.93.49.180', 'fd7a:115c:a1e0::3456:3cb4'],
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional comment for the Service.', example: 'Example Service' }),
    ports: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of protocol:port pairs to be exposed by the Service.\n\nThe only supported protocol is "tcp" at this time. "do-not-validate" can be used to skip validation.\n',
        example: ['tcp:80', 'tcp:443'],
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of optional tags associated with the Service.',
        example: ['tag:example'],
      }),
  })
  .openapi({
    description:
      'An information summary for a Service.\n\nEach Service has a unique name within the tailnet, one IPv4 and one IPv6 address, optional comment, list of ports, \nand optional tags.\n',
    required: [],
  })
  .openapi('VIPServiceInfo')

const VIPServiceInfoPutSchema = z
  .object({
    addrs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IP addresses assigned to the Service.\n\n- For new Services: either unset or a single IPv4 to assign the Service.\n- For existing Services: an IPv4 and an IPv6. The IPv4 can be updated, but not the IPv6.\n',
        example: ['100.93.49.180', 'fd7a:115c:a1e0::3456:3cb4'],
      }),
  })
  .openapi({ required: [] })
  .and(VIPServiceInfoSchema)
  .openapi('VIPServiceInfoPut')

const ServiceHostInfoSchema = z
  .object({
    stableNodeID: z
      .string()
      .exactOptional()
      .openapi({
        example: 'n292kg92CNTRL',
        description: 'The preferred identifier for a device.\n',
      }),
    approvalLevel: z
      .enum(['not-approved', 'approved:auto', 'approved:manual'])
      .exactOptional()
      .openapi({ description: 'The approval level of the device hosting the Service.\n' }),
    configured: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The configuration status of the device hosting the Service.',
        example: 'ready',
      }),
  })
  .openapi({
    description: 'An information summary for a device hosting a Service.\n',
    required: [],
  })
  .openapi('ServiceHostInfo')

const VIPServiceApprovalSchema = z
  .object({
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the Service is approved on the device.\n' }),
    autoApproved: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the Service was auto-approved by an auto-approver.\n',
      }),
  })
  .openapi({
    description: 'The approval status of a Service on a specific device.\n',
    required: [],
  })
  .openapi('VIPServiceApproval')

const OAuthAppSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: 'a123456CNTRL',
        description: 'The unique identifier for the OAuth app.\n',
      }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9._-]+$/)
      .min(3)
      .max(50)
      .exactOptional()
      .openapi({
        example: 'my-oauth-app',
        description:
          'The name of the OAuth app.\nMust be between 3 and 50 characters and contain only alphanumeric characters, dashes, periods, and underscores.\n',
      }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        example: 'An OAuth app used to provision devices.',
        description:
          'A human-readable description of the OAuth app.\nMust be at most 300 characters.\n',
      }),
    redirectURIs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['https://example.com/oauth/callback'],
        description:
          'The list of permitted redirect URIs for the OAuth authorization code flow.\nAt least one redirect URI is required.\n\nEach URI must use the `https` scheme, except for `localhost`, `127.0.0.1`, and `::1`,\nwhich may use any scheme. Raw IP address hosts are not permitted.\n',
      }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['auth_keys:create'],
        description:
          'The list of OAuth scopes granted to the app.\nMust be non-empty.\nLearn more about [OAuth clients and scopes](/docs/features/oauth-clients).\n',
      }),
    allowedNodeAttributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        example: ['custom:myattribute'],
        description: 'The list of custom device attributes that the OAuth app is allowed to set.\n',
      }),
    clientSecret: z
      .string()
      .exactOptional()
      .openapi({
        example: 'xxxxx',
        description:
          'The client secret for the OAuth app.\nOnly populated when the app is created and cannot be retrieved afterwards.\n',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description: 'The time the OAuth app was created.\n',
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2022-12-01T05:23:30Z',
        description: 'The time the OAuth app was last updated.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('OAuthApp')

const NameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]+$/)
  .min(3)
  .max(50)
  .openapi({
    example: 'my-oauth-app',
    description:
      'The name of the OAuth app.\nMust be between 3 and 50 characters and contain only alphanumeric characters, dashes, periods, and underscores.\n',
  })
  .openapi('Name')

const DescriptionSchema = z
  .string()
  .max(300)
  .openapi({
    example: 'An OAuth app used to provision devices.',
    description:
      'A human-readable description of the OAuth app.\nMust be at most 300 characters.\n',
  })
  .openapi('Description')

const RedirectURIsSchema = z
  .array(z.string())
  .openapi({
    example: ['https://example.com/oauth/callback'],
    description:
      'The list of permitted redirect URIs for the OAuth authorization code flow.\nAt least one redirect URI is required.\n\nEach URI must use the `https` scheme, except for `localhost`, `127.0.0.1`, and `::1`,\nwhich may use any scheme. Raw IP address hosts are not permitted.\n',
  })
  .openapi('RedirectURIs')

const ScopesSchema = z
  .array(z.string())
  .openapi({
    example: ['auth_keys:create'],
    description:
      'The list of OAuth scopes granted to the app.\nMust be non-empty.\nLearn more about [OAuth clients and scopes](/docs/features/oauth-clients).\n',
  })
  .openapi('Scopes')

const AllowedNodeAttributesSchema = z
  .array(z.string())
  .openapi({
    example: ['custom:myattribute'],
    description: 'The list of custom device attributes that the OAuth app is allowed to set.\n',
  })
  .openapi('AllowedNodeAttributes')

const OrganizationTailnetSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A stable, globally unique identifier for the tailnet.',
        example: 'T123456CNTRL',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The tailnet's display name.", example: 'Production staging' }),
    orgId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A stable, globally unique identifier for the organization.',
        example: 'o123456CNTRL',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'RFC3339 timestamp of when the tailnet was created.',
        example: '2025-01-01T12:00:00Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrganizationTailnet')

const ListOrganizationTailnetsResponseSchema = z
  .object({
    tailnets: z
      .array(OrganizationTailnetSchema)
      .exactOptional()
      .openapi({ description: 'Tailnets in the organization.' }),
    cursor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Opaque pagination cursor for the next page.',
        example: 'eyJhZnRlciI6IlQxMjM0NTZDTlRSTCJ9',
      }),
    totalCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of tailnets in the organization.', example: 50 }),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationTailnetsResponse')

const CreateOrganizationTailnetRequestSchema = z
  .object({
    displayName: z
      .string()
      .openapi({
        description:
          'A custom name for the tailnet. It can contain letters, numbers, spaces, apostrophes, and hyphens, and must\nbe unique within the organization.\n',
        example: 'Production staging',
      }),
  })
  .openapi({ required: ['displayName'] })
  .openapi('CreateOrganizationTailnetRequest')

const TailnetOAuthClientSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A stable, globally unique identifier for the OAuth client.',
        example: 'k123456CNTRL',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The OAuth client secret.',
        example: 'tskey-client-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      }),
  })
  .openapi({
    description:
      'OAuth client credentials with the `all` scope for the newly created tailnet. The secret is returned only once.\n',
    required: [],
  })
  .openapi('TailnetOAuthClient')

const CreateOrganizationTailnetResponseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A stable, globally unique identifier for the tailnet.',
        example: 'T123456CNTRL',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The tailnet name provided in the request.',
        example: 'Production staging',
      }),
    orgId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A stable, globally unique identifier for the organization.',
        example: 'o123456CNTRL',
      }),
    dnsName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The DNS suffix used to construct fully qualified domain names for devices in this tailnet.',
        example: 'tail1234.ts.net',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'RFC3339 timestamp of when the tailnet was created.',
        example: '2025-01-01T12:00:00Z',
      }),
    oauthClient: TailnetOAuthClientSchema.exactOptional(),
    alreadyExists: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the requested tailnet already exists.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('CreateOrganizationTailnetResponse')

const _400Response = {
  description: 'Bad request.',
  content: {
    'application/json': { schema: ErrorSchema.openapi({ example: { message: 'bad request' } }) },
  },
}

const _402Response = {
  description:
    "Payment required. The tailnet's plan or billing state does not allow the\noperation, and resolving it requires a billing change rather than a\ndifferent request. The `message` field says which change.\n",
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({ example: { message: 'payment required' } }),
    },
  },
}

const _403Response = {
  description: 'Forbidden.',
  content: {
    'application/json': { schema: ErrorSchema.openapi({ example: { message: 'forbidden' } }) },
  },
}

const _404Response = {
  description: 'Not found.',
  content: {
    'application/json': { schema: ErrorSchema.openapi({ example: { message: 'not found' } }) },
  },
}

const _409Response = {
  description: 'Conflict.',
  content: {
    'application/json': { schema: ErrorSchema.openapi({ example: { message: 'conflict' } }) },
  },
}

const _429Response = {
  description: 'Too Many Requests.',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({ example: { message: 'too many requests' } }),
    },
  },
}

const _500Response = {
  description: 'Internal server error.',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({ example: { message: 'internal server error' } }),
    },
  },
}

const _501Response = {
  description: 'Not implemented.',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({ example: { message: 'not implemented' } }),
    },
  },
}

const _502Response = {
  description: 'Bad gateway.',
  content: {
    'application/json': { schema: ErrorSchema.openapi({ example: { message: 'bad gateway' } }) },
  },
}

const _504Response = {
  description: 'Gateway timeout.',
  content: {
    'application/json': {
      schema: ErrorSchema.openapi({
        example: { message: 'request took too long to process, please try again later' },
      }),
    },
  },
}

const TailnetParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'tailnet',
      description:
        'The tailnet ID. \n\nTailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.\n\nWhen specifying a tailnet in the API, you can:\n\n- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.\n  This is the best option for most users.\n  Your API calls would start:\n\n  ```sh\n  curl "https://api.tailscale.com/api/v2/tailnet/-/..."\n  ```\n\n- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**\n  page of the Tailscale admin console.\n\n  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:\n\n  ```sh\n  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."\n  ```\n\n  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).\n',
      required: true,
      schema: { type: 'string', example: 'example.com' },
    },
    example: 'example.com',
  })

const FieldsParamsSchema = z
  .enum(['all', 'default'])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'fields',
      description:
        'Optionally controls whether the response returns **all** fields or only a predefined subset of fields.\nCurrently, there are two supported options:\n\n- **`all`:** return all fields in the response\n- **`default`:** return the following fields\n  - `addresses`\n  - `id`\n  - `nodeId`\n  - `user`\n  - `name`\n  - `hostname`\n  - `clientVersion`\n  - `updateAvailable`\n  - `os`\n  - `created`\n  - `connectedToControl`\n  - `lastSeen`\n  - `keyExpiryDisabled`\n  - `expires`\n  - `authorized`\n  - `isExternal`\n  - `machineKey`\n  - `nodeKey`\n  - `blocksIncomingConnections`\n  - `tailnetLockKey`\n  - `tailnetLockError`\n  - `tags`\n  - `isEphemeral`\n\nIf the `fields` parameter is not supplied, then the default (limited fields) option is used.\n',
      required: false,
      schema: { type: 'string', enum: ['all', 'default'], example: 'all' },
    },
    example: 'all',
  })

const DeviceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'deviceId',
      description:
        "ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.\n",
      required: true,
      schema: { type: 'string' },
    },
  })

const AttributeKeyParamsSchema = z
  .string()
  .max(128)
  .openapi({
    param: {
      in: 'path',
      name: 'attributeKey',
      description:
        'The name of the posture attribute to set.\nThis must be prefixed with `custom`:\n\nKeys have a maximum length of 128 characters including the namespace,\nand can only contain letters, numbers, underscores, and colon.\n\nKeys are case-sensitive. Keys must be unique,\nbut are checked for uniqueness in a case-insensitive manner.\nFor example, `custom:MyAttribute` and `custom:myattribute` cannot both be set within a single tailnet.\n\nAll values for a given key need to be of the same type,\nwhich is determined when the first value is written for a given key.\nFor example, `custom:myattribute` cannot have a numeric value (`87`) for one node and a string value (`"78"`)\nfor another node within the same tailnet.\n',
      required: true,
      schema: { type: 'string', maxLength: 128 },
    },
  })

const UserInviteIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'userInviteId',
      description: 'ID of the user invite.',
      required: true,
      schema: { type: 'string' },
    },
  })

const DeviceInviteIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'deviceInviteId',
      description: 'ID of the device invite.',
      required: true,
      schema: { type: 'string' },
    },
  })

const StartParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'start',
      in: 'query',
      description: 'The start of the time window for which to retrieve logs, in RFC 3339 format.',
      required: true,
      schema: { type: 'string', example: '2023-12-19T16:39:57-08:00' },
    },
    example: '2023-12-19T16:39:57-08:00',
  })

const EndParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'end',
      in: 'query',
      description: 'The end of the time window for which to retrieve logs, in RFC 3339 format.',
      required: true,
      schema: { type: 'string', example: '2023-12-22T02:15:23-08:00' },
    },
    example: '2023-12-22T02:15:23-08:00',
  })

const ActorParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'actor',
      in: 'query',
      description:
        'List of filters on actors, either exact actor IDs or a wildcard search on login name or display name indicated as `~search`.',
      required: false,
      schema: { type: 'array', items: { type: 'string' }, example: ['uc4p8fRHvJ11DEVEL', '~bob'] },
    },
    example: ['uc4p8fRHvJ11DEVEL', '~bob'],
  })

const TargetParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'target',
      in: 'query',
      description:
        'List of target elements for which to filter, attempts to match any part of any of the targets to any of the given strings.',
      required: false,
      schema: { type: 'array', items: { type: 'string' }, example: ['mytarget1', 'sometarget2'] },
    },
    example: ['mytarget1', 'sometarget2'],
  })

const EventParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z.enum([
        'ADMIN_CONSOLE.LOGIN',
        'ADMIN_CONSOLE.LOGOUT',
        'API_KEY.CREATE',
        'API_KEY.EXPIRED',
        'API_KEY.REVOKE',
        'BILLING.CANCEL.SUBSCRIPTION',
        'BILLING.CREATE.SUBSCRIPTION',
        'BILLING.UPDATE.ADDRESS',
        'BILLING.UPDATE.BILLING_OWNER',
        'BILLING.UPDATE.EMAIL',
        'BILLING.UPDATE.PAYMENT_INFO',
        'BILLING.UPDATE.STRIPE_CUSTOMER_ID',
        'BILLING.UPDATE.SUBSCRIPTION',
        'FAILED_REQUEST.UPDATE',
        'GROUP.PUSH_GROUP.ATTRIBUTES',
        'GROUP.UPDATE.USER_ROLE',
        'INVITE.ACCEPT.FEATURE',
        'INVITE.ACCEPT.NODE_SHARE',
        'INVITE.ACCEPT.TAILNET_INVITE',
        'INVITE.CREATE.FEATURE',
        'INVITE.CREATE.NODE_SHARE',
        'INVITE.CREATE.TAILNET_INVITE',
        'INVITE.DELETE.NODE_SHARE',
        'INVITE.DELETE.TAILNET_INVITE',
        'INVITE.RESEND.NODE_SHARE',
        'INVITE.RESEND.TAILNET_INVITE',
        'NODE.APPROVE',
        'NODE.CREATE',
        'NODE.CREATE.ATTRIBUTES',
        'NODE.DELETE',
        'NODE.DELETE.ATTRIBUTES',
        'NODE.DISABLE.KEY_EXPIRY',
        'NODE.DISCONNECT_NODE.CLIENT_LOG',
        'NODE.ENABLE.KEY_EXPIRY',
        'NODE.EXPIRED.KEY_EXPIRY_TIME',
        'NODE.LOGIN',
        'NODE.LOGOUT',
        'NODE.REVOKE',
        'NODE.UPDATE.ACL_TAGS',
        'NODE.UPDATE.ALLOWED_IPS',
        'NODE.UPDATE.ATTRIBUTES',
        'NODE.UPDATE.AUTO_APPROVED_ROUTES',
        'NODE.UPDATE.EXIT_NODE',
        'NODE.UPDATE.KEY_EXPIRY_TIME',
        'NODE.UPDATE.MACHINE_NAME',
        'NODE.UPDATE.POSTURE_IDENTITY',
        'NODE.UPDATE.TKA',
        'SHARE.CREATE',
        'SHARE.DELETE',
        'SHARE.UPDATE',
        'TAILNET.ACCEPT.FEATURE',
        'TAILNET.CREATE',
        'TAILNET.CREATE.LOGSTREAM_ENDPOINT',
        'TAILNET.CREATE.POSTURE_INTEGRATION',
        'TAILNET.CREATE.TKA',
        'TAILNET.DELETE.LOGSTREAM_ENDPOINT',
        'TAILNET.DELETE.POSTURE_INTEGRATION',
        'TAILNET.DELETE.TKA',
        'TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY',
        'TAILNET.DISABLE.COLLECT_SERVICES',
        'TAILNET.DISABLE.FILE_SHARING',
        'TAILNET.DISABLE.GEOSTEERING',
        'TAILNET.DISABLE.HTTPS',
        'TAILNET.DISABLE.LOG_EXIT_FLOWS',
        'TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED',
        'TAILNET.DISABLE.MAGIC_DNS',
        'TAILNET.DISABLE.MULLVAD_VPN',
        'TAILNET.DISABLE.NETWORK_FLOW_LOGGING',
        'TAILNET.DISABLE.SCIM',
        'TAILNET.DISABLE.TKA',
        'TAILNET.DISABLE.USER_APPROVAL_REQUIRED',
        'TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY',
        'TAILNET.ENABLE.COLLECT_SERVICES',
        'TAILNET.ENABLE.FILE_SHARING',
        'TAILNET.ENABLE.GEOSTEERING',
        'TAILNET.ENABLE.HTTPS',
        'TAILNET.ENABLE.LOG_EXIT_FLOWS',
        'TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED',
        'TAILNET.ENABLE.MAGIC_DNS',
        'TAILNET.ENABLE.MULLVAD_VPN',
        'TAILNET.ENABLE.NETWORK_FLOW_LOGGING',
        'TAILNET.ENABLE.SCIM',
        'TAILNET.ENABLE.TKA',
        'TAILNET.ENABLE.USER_APPROVAL_REQUIRED',
        'TAILNET.JOIN',
        'TAILNET.JOIN_WAITLIST.FEATURE',
        'TAILNET.LEAVE',
        'TAILNET.UPDATE.ACCOUNT_EMAIL',
        'TAILNET.UPDATE.ACL',
        'TAILNET.UPDATE.DNS_CONFIG',
        'TAILNET.UPDATE.LOGSTREAM_ENDPOINT',
        'TAILNET.UPDATE.MAX_KEY_DURATION',
        'TAILNET.UPDATE.POSTURE_INTEGRATION',
        'TAILNET.UPDATE.ROUTE_SELECTION',
        'TAILNET.UPDATE.SECURITY_EMAIL',
        'TAILNET.UPDATE.SUPPORT_EMAIL',
        'TAILNET.UPDATE.TCD',
        'TAILNET.UPDATE.TKA',
        'TAILNET.VERIFY.ACCOUNT_EMAIL',
        'TAILNET.VERIFY.SECURITY_EMAIL',
        'TAILNET.VERIFY.SUPPORT_EMAIL',
        'USER.APPROVE',
        'USER.CREATE',
        'USER.DELETE',
        'USER.INVITE',
        'USER.PUSH_USER.ATTRIBUTES',
        'USER.RESEND.TAILNET_INVITE',
        'USER.RESTORE',
        'USER.RESTORE_GLOBAL',
        'USER.SUSPEND',
        'USER.SUSPEND_GLOBAL',
        'USER.UPDATE.USER_ROLE',
        'WEBHOOK_ENDPOINT.CREATE',
        'WEBHOOK_ENDPOINT.DELETE',
        'WEBHOOK_ENDPOINT.UPDATE.SECRET',
        'WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS',
        'WEB_INTERFACE.LOGIN',
        'WEB_INTERFACE.LOGOUT',
        'PAM_CONNECTOR.CREATE',
        'PAM_CONNECTOR.CREATE.ACCESS_TOKEN',
        'PAM_CONNECTOR.DELETE',
        'PAM_CONNECTOR.DISABLE.ACCESS_TOKEN',
        'PAM_CONNECTOR.UPDATE',
        'PAM_SERVICE.CREATE',
        'PAM_SERVICE.DELETE',
        'PAM_SERVICE.UPDATE',
        'PAM_SERVICE_ACCOUNT.CREATE',
        'PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN',
        'PAM_SERVICE_ACCOUNT.DELETE',
        'PAM_SERVICE_ACCOUNT.UPDATE',
        'PAM_SETTINGS.CREATE.CUSTOM_DOMAIN',
        'PAM_SETTINGS.CREATE.NOTIFICATION',
        'PAM_SETTINGS.CREATE.RECORDING_STORAGE',
        'PAM_SETTINGS.DELETE.CUSTOM_DOMAIN',
        'PAM_SETTINGS.DELETE.NOTIFICATION',
        'PAM_SETTINGS.DELETE.RECORDING_STORAGE',
        'PAM_SETTINGS.UPDATE',
        'PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN',
        'PAM_SETTINGS.UPDATE.NOTIFICATION',
        'PAM_SETTINGS.UPDATE.SETUP_WIZARD',
      ]),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'event',
      in: 'query',
      description: 'List of events for which to filter.',
      required: false,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'ADMIN_CONSOLE.LOGIN',
            'ADMIN_CONSOLE.LOGOUT',
            'API_KEY.CREATE',
            'API_KEY.EXPIRED',
            'API_KEY.REVOKE',
            'BILLING.CANCEL.SUBSCRIPTION',
            'BILLING.CREATE.SUBSCRIPTION',
            'BILLING.UPDATE.ADDRESS',
            'BILLING.UPDATE.BILLING_OWNER',
            'BILLING.UPDATE.EMAIL',
            'BILLING.UPDATE.PAYMENT_INFO',
            'BILLING.UPDATE.STRIPE_CUSTOMER_ID',
            'BILLING.UPDATE.SUBSCRIPTION',
            'FAILED_REQUEST.UPDATE',
            'GROUP.PUSH_GROUP.ATTRIBUTES',
            'GROUP.UPDATE.USER_ROLE',
            'INVITE.ACCEPT.FEATURE',
            'INVITE.ACCEPT.NODE_SHARE',
            'INVITE.ACCEPT.TAILNET_INVITE',
            'INVITE.CREATE.FEATURE',
            'INVITE.CREATE.NODE_SHARE',
            'INVITE.CREATE.TAILNET_INVITE',
            'INVITE.DELETE.NODE_SHARE',
            'INVITE.DELETE.TAILNET_INVITE',
            'INVITE.RESEND.NODE_SHARE',
            'INVITE.RESEND.TAILNET_INVITE',
            'NODE.APPROVE',
            'NODE.CREATE',
            'NODE.CREATE.ATTRIBUTES',
            'NODE.DELETE',
            'NODE.DELETE.ATTRIBUTES',
            'NODE.DISABLE.KEY_EXPIRY',
            'NODE.DISCONNECT_NODE.CLIENT_LOG',
            'NODE.ENABLE.KEY_EXPIRY',
            'NODE.EXPIRED.KEY_EXPIRY_TIME',
            'NODE.LOGIN',
            'NODE.LOGOUT',
            'NODE.REVOKE',
            'NODE.UPDATE.ACL_TAGS',
            'NODE.UPDATE.ALLOWED_IPS',
            'NODE.UPDATE.ATTRIBUTES',
            'NODE.UPDATE.AUTO_APPROVED_ROUTES',
            'NODE.UPDATE.EXIT_NODE',
            'NODE.UPDATE.KEY_EXPIRY_TIME',
            'NODE.UPDATE.MACHINE_NAME',
            'NODE.UPDATE.POSTURE_IDENTITY',
            'NODE.UPDATE.TKA',
            'SHARE.CREATE',
            'SHARE.DELETE',
            'SHARE.UPDATE',
            'TAILNET.ACCEPT.FEATURE',
            'TAILNET.CREATE',
            'TAILNET.CREATE.LOGSTREAM_ENDPOINT',
            'TAILNET.CREATE.POSTURE_INTEGRATION',
            'TAILNET.CREATE.TKA',
            'TAILNET.DELETE.LOGSTREAM_ENDPOINT',
            'TAILNET.DELETE.POSTURE_INTEGRATION',
            'TAILNET.DELETE.TKA',
            'TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY',
            'TAILNET.DISABLE.COLLECT_SERVICES',
            'TAILNET.DISABLE.FILE_SHARING',
            'TAILNET.DISABLE.GEOSTEERING',
            'TAILNET.DISABLE.HTTPS',
            'TAILNET.DISABLE.LOG_EXIT_FLOWS',
            'TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED',
            'TAILNET.DISABLE.MAGIC_DNS',
            'TAILNET.DISABLE.MULLVAD_VPN',
            'TAILNET.DISABLE.NETWORK_FLOW_LOGGING',
            'TAILNET.DISABLE.SCIM',
            'TAILNET.DISABLE.TKA',
            'TAILNET.DISABLE.USER_APPROVAL_REQUIRED',
            'TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY',
            'TAILNET.ENABLE.COLLECT_SERVICES',
            'TAILNET.ENABLE.FILE_SHARING',
            'TAILNET.ENABLE.GEOSTEERING',
            'TAILNET.ENABLE.HTTPS',
            'TAILNET.ENABLE.LOG_EXIT_FLOWS',
            'TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED',
            'TAILNET.ENABLE.MAGIC_DNS',
            'TAILNET.ENABLE.MULLVAD_VPN',
            'TAILNET.ENABLE.NETWORK_FLOW_LOGGING',
            'TAILNET.ENABLE.SCIM',
            'TAILNET.ENABLE.TKA',
            'TAILNET.ENABLE.USER_APPROVAL_REQUIRED',
            'TAILNET.JOIN',
            'TAILNET.JOIN_WAITLIST.FEATURE',
            'TAILNET.LEAVE',
            'TAILNET.UPDATE.ACCOUNT_EMAIL',
            'TAILNET.UPDATE.ACL',
            'TAILNET.UPDATE.DNS_CONFIG',
            'TAILNET.UPDATE.LOGSTREAM_ENDPOINT',
            'TAILNET.UPDATE.MAX_KEY_DURATION',
            'TAILNET.UPDATE.POSTURE_INTEGRATION',
            'TAILNET.UPDATE.ROUTE_SELECTION',
            'TAILNET.UPDATE.SECURITY_EMAIL',
            'TAILNET.UPDATE.SUPPORT_EMAIL',
            'TAILNET.UPDATE.TCD',
            'TAILNET.UPDATE.TKA',
            'TAILNET.VERIFY.ACCOUNT_EMAIL',
            'TAILNET.VERIFY.SECURITY_EMAIL',
            'TAILNET.VERIFY.SUPPORT_EMAIL',
            'USER.APPROVE',
            'USER.CREATE',
            'USER.DELETE',
            'USER.INVITE',
            'USER.PUSH_USER.ATTRIBUTES',
            'USER.RESEND.TAILNET_INVITE',
            'USER.RESTORE',
            'USER.RESTORE_GLOBAL',
            'USER.SUSPEND',
            'USER.SUSPEND_GLOBAL',
            'USER.UPDATE.USER_ROLE',
            'WEBHOOK_ENDPOINT.CREATE',
            'WEBHOOK_ENDPOINT.DELETE',
            'WEBHOOK_ENDPOINT.UPDATE.SECRET',
            'WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS',
            'WEB_INTERFACE.LOGIN',
            'WEB_INTERFACE.LOGOUT',
            'PAM_CONNECTOR.CREATE',
            'PAM_CONNECTOR.CREATE.ACCESS_TOKEN',
            'PAM_CONNECTOR.DELETE',
            'PAM_CONNECTOR.DISABLE.ACCESS_TOKEN',
            'PAM_CONNECTOR.UPDATE',
            'PAM_SERVICE.CREATE',
            'PAM_SERVICE.DELETE',
            'PAM_SERVICE.UPDATE',
            'PAM_SERVICE_ACCOUNT.CREATE',
            'PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN',
            'PAM_SERVICE_ACCOUNT.DELETE',
            'PAM_SERVICE_ACCOUNT.UPDATE',
            'PAM_SETTINGS.CREATE.CUSTOM_DOMAIN',
            'PAM_SETTINGS.CREATE.NOTIFICATION',
            'PAM_SETTINGS.CREATE.RECORDING_STORAGE',
            'PAM_SETTINGS.DELETE.CUSTOM_DOMAIN',
            'PAM_SETTINGS.DELETE.NOTIFICATION',
            'PAM_SETTINGS.DELETE.RECORDING_STORAGE',
            'PAM_SETTINGS.UPDATE',
            'PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN',
            'PAM_SETTINGS.UPDATE.NOTIFICATION',
            'PAM_SETTINGS.UPDATE.SETUP_WIZARD',
          ],
        },
        example: ['USER.CREATE', 'NODE.CREATE'],
      },
    },
    example: ['USER.CREATE', 'NODE.CREATE'],
  })

const LogTypeParamsSchema = LogTypeSchema.openapi({
  param: {
    name: 'logType',
    in: 'path',
    description: 'The type of log.',
    required: true,
    schema: { $ref: '#/components/schemas/LogType' },
  },
})

const AllParamsSchema = z
  .stringbool()
  .openapi({
    param: {
      in: 'query',
      name: 'all',
      description:
        'If set to true, this will return all auth keys, API access tokens and OAuth clients for the tailnet.',
      required: true,
      schema: { type: 'boolean', example: true },
    },
    example: true,
  })

const KeyIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'keyId',
      description:
        'The id of the key.\nThe key ID can be found in the [admin console](https://login.tailscale.com/admin/settings/keys).\n',
      required: true,
      schema: { type: 'string', example: 'k123456CNTRL' },
    },
    example: 'k123456CNTRL',
  })

const AcceptHeaderParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Accept',
      required: false,
      schema: { type: 'string' },
      description:
        'Response is encoded as JSON if `application/json` is requested, otherwise HuJSON will be returned.',
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'id',
      description: 'Unique identifier for a posture integration.',
      required: true,
      schema: { type: 'string', example: 'p56wQiqrn7mfDEVEL' },
    },
    example: 'p56wQiqrn7mfDEVEL',
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'userId',
      description: 'ID of the user.\n',
      required: true,
      schema: { type: 'string' },
    },
  })

const ContactTypeParamsSchema = z
  .enum(['account', 'support', 'security'])
  .openapi({
    param: {
      in: 'path',
      name: 'contactType',
      description: 'Type of contact.',
      required: true,
      schema: { type: 'string', enum: ['account', 'support', 'security'], example: 'account' },
    },
    example: 'account',
  })

const EndpointIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'endpointId',
      description: 'ID for the webhook endpoint.\n',
      required: true,
      schema: { type: 'string' },
    },
  })

const ServiceNameParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'serviceName',
      description:
        'The unique name of a Service. The name should be prefixed with "svc:". It should be unique\nacross the tailnet, so names already used for a machine cannot be reused for a Service.\n',
      required: true,
      example: 'svc:example',
      schema: { type: 'string' },
    },
  })

const AppIdParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'appId',
      description: 'The ID of the OAuth app.\n',
      required: true,
      schema: { type: 'string', example: 'a123456CNTRL' },
    },
    example: 'a123456CNTRL',
  })

const OrganizationParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'organization',
      description:
        'The organization identifier.\n\nUse a dash (`-`) to reference the organization of the access token being used to make the API call.\n',
      required: true,
      schema: { type: 'string', example: '-' },
    },
    example: '-',
  })

const ExampleJSONPolicyFileExample = {
  summary: 'JSON policy file',
  value: {
    acls: [{ action: 'accept', ports: ['*:*'], users: ['*'] }],
    groups: { 'group:example': ['user1@example.com', 'user2@example.com'] },
    hosts: { 'example-host-1': '100.100.100.100' },
  },
}

const ExampleHuJSONPolicyFileExample = {
  summary: 'HuJSON policy file',
  value:
    '// Example/default ACLs for unrestricted connections.\n{\n  // Declare static groups of users beyond those in the identity service.\n  "groups": {\n    "group:example": ["user1@example.com", "user2@example.com"],\n  },\n\n  // Declare convenient hostname aliases to use in place of IP addresses.\n  "hosts": {\n    "example-host-1": "100.100.100.100",\n  },\n\n  // Access control lists.\n  "acls": [\n    // Match absolutely everything.\n      // Comment this section out if you want to define specific restrictions.\n    {"action": "accept", "src": ["*"], "dst": ["*:*"]},\n  ],\n}\n',
}

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getTailnetTailnetDevicesRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/devices',
  tags: ['Devices'],
  summary: 'List tailnet devices',
  description: 'Lists the devices in a tailnet.\n\nOAuth Scope: `devices:core:read`.\n',
  operationId: 'listTailnetDevices',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    query: z.object({
      fields: FieldsParamsSchema,
      '<field>=<value> filters': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '<field>=<value> filters',
            description:
              'This endpoint supports server-side filtering of devices by specifying one\nor more filters in the form `<field>=<value>`. Fields must be a top-level\ndevice property - e.g. `isEphemeral`, `tags`, `hostname`, etc. Values are\nmatched as _exact_ matches. Properties with simple types (strings, numbers,\ndates, etc) and lists are supported. Properties that are complex objects\n(e.g. `clientConnectivity`) are not supported. When multiple parameters are\nprovided, the server performs a logical `AND` across all filter parameters\nbefore returning results. For example,\n`isEphemeral=true&tags=tag:prod&tags=tag:subnetrouter` would return devices\nwhere `isEphemeral` is `true` and `tags` contains both `tag:prod` and\n`tag:subnetrouter`.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({ devices: z.array(DeviceSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const deleteTailnetTailnetRoute = createRoute({
  method: 'delete',
  path: '/tailnet/{tailnet}',
  tags: ['Organizations'],
  summary: 'Delete a tailnet',
  description:
    'Delete the specified tailnet and all of its users, devices, and configuration.\n\n[API-only tailnets](https://tailscale.com/docs/features/tailnet-creation-api) can be deleted using an access\ntoken for the tailnet being deleted. You can get a tailnet-specific access token by exchanging either the OAuth\nclient credentials returned when the tailnet was created or an OAuth client from the creating tailnet that has\nthe `all` scope.\n\nOAuth Scope: `all`.\n',
  operationId: 'deleteTailnet',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const patchTailnetTailnetDeviceAttributesRoute = createRoute({
  method: 'patch',
  path: '/tailnet/{tailnet}/device-attributes',
  tags: ['Devices'],
  summary: 'Batch update custom device posture attributes',
  description:
    'Batch updates posture attributes across devices in a tailnet.\n\nThis endpoint uses [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) semantics.\nSpecifying `null` for an attribute will delete that attribute.\n\nAttributes must be in the `custom:` namespace.\n\nOAuth Scope: `devices:posture_attributes`.\n',
  operationId: 'batchUpdateCustomDevicePostureAttributes',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              nodes: z
                .record(
                  z.string(),
                  z
                    .record(
                      z.string(),
                      z
                        .union([
                          z
                            .object({
                              value: z
                                .union([z.string(), z.number(), z.boolean()])
                                .openapi({ description: 'Attribute value.\n' }),
                              expiry: z.iso
                                .datetime({ offset: true })
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Optional expiry time for the attribute.\nIf set, Tailscale automatically removes the attribute within\na few minutes after the specified time.\n',
                                }),
                            })
                            .openapi({ required: ['value'] }),
                          z.null().nullable(),
                        ])
                        .openapi({
                          description:
                            'Attribute configuration with value and optional expiry, or `null` to delete the attribute.\n',
                        }),
                    )
                    .openapi({
                      description:
                        'A mapping of attribute name → attribute configuration for this device.\n',
                    }),
                )
                .exactOptional()
                .openapi({ description: 'A mapping of deviceId → posture attributes.\n' }),
              comment: z
                .string()
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'An optional comment indicating why attributes are being set,\nwhich will be added to the audit log.\n',
                }),
            })
            .openapi({
              example: {
                nodes: {
                  nPM2KNuedB21DEVEL: { 'custom:myattr': { value: 'my_value' } },
                  nPpz3VEKzX11DEVEL: {
                    'custom:flag': { value: true, expiry: '2025-09-19T15:00:00Z' },
                  },
                },
                comment: 'bulk posture attribute update',
              },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: z.null().nullable() } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getDeviceDeviceIdRoute = createRoute({
  method: 'get',
  path: '/device/{deviceId}',
  tags: ['Devices'],
  summary: 'Get a device',
  description:
    'Retrieve the details for the specified device.\n\nOAuth Scope: `devices:core:read`.\n',
  operationId: 'getDevice',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DeviceSchema } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const deleteDeviceDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/device/{deviceId}',
  tags: ['Devices'],
  summary: 'Delete a device',
  description:
    "Deletes the device from its tailnet.\nThe device must belong to the requesting user's tailnet.\nDeleting devices shared with the tailnet is not supported.\n\nOAuth Scope: `devices:core`.\n",
  operationId: 'deleteDevice',
  request: { params: z.object({ deviceId: DeviceIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    500: _500Response,
    501: _501Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdExpireRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/expire',
  tags: ['Devices'],
  summary: "Expire a device's key",
  description:
    "Mark a device's node key as expired.\nThis will require the device to re-authenticate in order to connect to the tailnet.\nThe device must belong to the requesting user's tailnet.\n\nOAuth Scope: `devices:core`.\n",
  operationId: 'expireDeviceKey',
  request: { params: z.object({ deviceId: DeviceIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getDeviceDeviceIdRoutesRoute = createRoute({
  method: 'get',
  path: '/device/{deviceId}/routes',
  tags: ['Devices'],
  summary: 'List device routes',
  description:
    'Retrieve the list of subnet routes that a device is advertising,\nas well as those that are enabled for it.\n\nRoutes must be both advertised and enabled for a device to act as a subnet router or exit node.\nIf a device has advertised routes, they are not exposed to traffic until they are enabled.\nConversely, if routes are enabled before they are advertised, they are not available for routing until the device in question has advertised them.\n\nLearn more about [subnet routers](/docs/features/subnet-routers) and [exit nodes](/docs/features/exit-nodes).\n\nOAuth Scope: `devices:routes:read`.\n',
  operationId: 'listDeviceRoutes',
  request: { params: z.object({ deviceId: DeviceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DeviceRoutesSchema } },
    },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdRoutesRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/routes',
  tags: ['Devices'],
  summary: 'Set device routes',
  description:
    "Set a device's enabled subnet routes by replacing the existing list of subnet routes with the supplied parameters.\n[Advertised routes](/docs/features/subnet-routers#advertise-subnet-routes) cannot be set through the API, since they must be set directly on the device.\n\nRoutes must be both advertised and enabled for a device to act as a subnet router or exit node.\nIf a device has advertised routes, they are not exposed to traffic until they are enabled.\nConversely, if routes are enabled before they are advertised, they are not available for routing until the device in question has advertised them.\n\nLearn more about [subnet routers](/docs/features/subnet-routers) and [exit nodes](/docs/features/exit-nodes).\n\nOAuth Scope: `devices:routes`.\n",
  operationId: 'setDeviceRoutes',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              routes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The new list of enabled subnet routes.\n',
                  example: ['10.0.0.0/16', '192.168.1.0/24'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DeviceRoutesSchema } },
    },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdAuthorizedRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/authorized',
  tags: ['Devices'],
  summary: 'Authorize device',
  description:
    'This call marks a device as authorized or revokes its authorization for tailnets where device authorization is required,\naccording to the authorized field in the payload.\n\nOAuth Scope: `devices:core`.\n',
  operationId: 'authorizeDevice',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authorized: z
                .boolean()
                .openapi({
                  description:
                    '- If `true`, authorize a new device or re-authorize a previously deauthorized device.\n- If `false`, deauthorize an authorized device.\n',
                }),
            })
            .openapi({ required: ['authorized'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdNameRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/name',
  tags: ['Devices'],
  summary: 'Set device name',
  description:
    'When a device is added to a tailnet, its Tailscale [device name](https://tailscale.com/docs/concepts/machine-names) (also sometimes referred to as machine name) is generated from its OS hostname.\nThe device name is the canonical name for the device on your tailnet.\n\nDevice name changes immediately get propogated through your tailnet, so be aware that any existing [Magic DNS](https://tailscale.com/docs/features/magicdns) URLs using the old name will no longer work.\n\nOAuth Scope: `devices:core`.\n',
  operationId: 'setDeviceName',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description:
                    'The new name for the device.\n\nThis can be provided as either the fully qualified domain name for the device (e.g. "nodename.your-domain.ts.net")\nor just the base name (e.g. "nodename").\n\nIf `name` is unset or provided empty, the device\'s name is reset to be\ngenerated from its OS hostname.\n',
                  example: 'dev-server',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdTagsRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/tags',
  tags: ['Devices'],
  summary: 'Set device tags',
  description:
    'Tags let you assign an identity to a device that is separate from human users, and use that identity as part of an ACL to restrict access.\nTags are similar to role accounts, but more flexible.\n\nTags are created in the tailnet policy file by defining the tag and an owner of the tag.\nOnce a device is tagged, the tag is the owner of that device.\nA single node can have multiple tags assigned.\n\nConsult the policy file for your tailnet in the [admin console](https://login.tailscale.com/admin/acls) for the list of tags that have been created for your tailnet.\nLearn more about [tags](https://tailscale.com/docs/features/tags).\n\nOAuth Scope: `devices:core`.\n',
  operationId: 'setDeviceTags',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The new list of tags for the device.\n',
                  example: ['tag:foo', 'tag:bar'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdKeyRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/key',
  tags: ['Devices'],
  summary: 'Update device key',
  description:
    "When a device is added to a tailnet, its key expiry is set according to the tailnet's key expiry setting.\nIf the key is not refreshed and expires, the device can no longer communicate with other devices in the tailnet.\n\nOAuth Scope: `devices:core`.\n",
  operationId: 'updateDeviceKey',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              keyExpiryDisabled: z
                .boolean()
                .openapi({
                  example: true,
                  description:
                    "- If `true`, disable the device's key expiry. The original key expiry time is still maintained. Upon re-enabling, the key will expire at that original time.\n- If `false`, enable the device's key expiry. Sets the key to expire at the original expiry time prior to disabling. The key may already have expired. In that case, the device must be re-authenticated.\n",
                }),
            })
            .openapi({ required: ['keyExpiryDisabled'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdIpRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/ip',
  tags: ['Devices'],
  summary: 'Set device IPv4 address',
  description:
    'When a device is added to a tailnet, its Tailscale IPv4 address is set at random either from the CGNAT range,\nor a subset of the CGNAT range specified by an [ip pool](https://tailscale.com/docs/reference/ip-pool).\nThis endpoint can be used to replace the existing IPv4 address with a specific value.\n\nThis action will break any existing connections to this machine.\nYou will need to reconnect to this machine using the new IP address.\nYou may also need to flush your DNS cache.\n\nOAuth Scope: `devices:core`.\n',
  operationId: 'setDeviceIp',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ipv4: z
                .string()
                .openapi({
                  description: 'The new IPv4 address for the device.\n',
                  example: '100.80.0.1',
                }),
            })
            .openapi({ required: ['ipv4'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getDeviceDeviceIdAttributesRoute = createRoute({
  method: 'get',
  path: '/device/{deviceId}/attributes',
  tags: ['Devices'],
  summary: 'Get device posture attributes',
  description:
    'Retrieve all posture attributes for the specified device.\nThis returns a JSON object of all the key-value pairs of posture attributes for the device.\n\nOAuth Scope: `devices:posture_attributes:read`.\n',
  operationId: 'getDevicePostureAttributes',
  request: { params: z.object({ deviceId: DeviceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DevicePostureAttributesSchema } },
    },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdAttributesAttributeKeyRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/attributes/{attributeKey}',
  tags: ['Devices'],
  summary: 'Set custom device posture attributes',
  description:
    'Create or update a custom posture attribute on the specified device.\nUser-managed attributes must be in the custom namespace,\nwhich is indicated by prefixing the attribute key with `custom:`.\n\nOAuth Scope: `devices:posture_attributes`.\n',
  operationId: 'setCustomDevicePostureAttributes',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema, attributeKey: AttributeKeyParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              value: z
                .union([z.string(), z.number(), z.boolean()])
                .exactOptional()
                .openapi({
                  example: 'my_value',
                  description:
                    'A value can be either a string, number or boolean.\n\nA string value can have a maximum length of 50 characters,\nand can only contain letters, numbers, underscores, and periods.\n\nA number value is an integer and must be a JSON safe number (up to 2^53 - 1).\n',
                }),
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  example: '2022-12-01T05:23:30Z',
                  description:
                    'An optional expiry time for a given posture attribute. If set, Tailscale\nwill automatically remove the attribute within a few minutes after the specified\ntime.\n',
                }),
              comment: z
                .string()
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'An optional comment indicating a reason why an attribute is set,\nwhich will be added to the audit log.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DevicePostureAttributesSchema } },
    },
    404: _404Response,
    429: _429Response,
    500: _500Response,
    504: _504Response,
  },
})

export const deleteDeviceDeviceIdAttributesAttributeKeyRoute = createRoute({
  method: 'delete',
  path: '/device/{deviceId}/attributes/{attributeKey}',
  tags: ['Devices'],
  summary: 'Delete custom device posture attributes',
  description:
    'Delete a posture attribute from the specified device.\nThis is only applicable to user-managed posture attributes in the custom namespace,\nwhich is indicated by prefixing the attribute key with `custom:`.\n\nOAuth Scope: `devices:posture_attributes`.\n',
  operationId: 'deleteCustomDevicePostureAttributes',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema, attributeKey: AttributeKeyParamsSchema }),
  },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    429: _429Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getDeviceDeviceIdDeviceInvitesRoute = createRoute({
  method: 'get',
  path: '/device/{deviceId}/device-invites',
  tags: ['DeviceInvites'],
  summary: 'List device invites',
  description: 'List all share invites for a device.\n\nOAuth Scope: `device_invites:read`.\n',
  operationId: 'listDeviceInvites',
  request: { params: z.object({ deviceId: DeviceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.array(DeviceInviteSchema).openapi({
            example: [
              {
                id: '12345',
                created: '2024-05-08T20:19:51.777861756Z',
                tailnetId: 59954,
                deviceId: 11055,
                sharerId: 22011,
                allowExitNode: true,
                email: 'user@example.com',
                lastEmailSentAt: '2024-05-08T20:19:51.777861756Z',
                inviteUrl: 'https://login.tailscale.com/admin/invite/<code>',
                accepted: false,
              },
              {
                id: '12346',
                created: '2024-04-03T21:38:49.333829261Z',
                tailnetId: 59954,
                deviceId: 11055,
                sharerId: 22012,
                inviteUrl: 'https://login.tailscale.com/admin/invite/<code>',
                accepted: true,
                acceptedBy: { id: 33223, loginName: 'someone@example.com', profilePicUrl: '' },
              },
            ],
          }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postDeviceDeviceIdDeviceInvitesRoute = createRoute({
  method: 'post',
  path: '/device/{deviceId}/device-invites',
  tags: ['DeviceInvites'],
  summary: 'Create device invites',
  description:
    'Create new share invites for a device.\n\nNote that device invites cannot be created using an API access token generated from an OAuth client as the shared device is scoped to a user.\n',
  operationId: 'createDeviceInvites',
  request: {
    params: z.object({ deviceId: DeviceIdParamsSchema }),
    body: {
      description: 'Device invites to create.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                multiUse: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    example: false,
                    description:
                      'Whether the invite can be accepted more than once.\nWhen set to `true`, it results in an invite that can be accepted up to 1,000 times.\n',
                  }),
                allowExitNode: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    example: false,
                    description:
                      'Whether the invited user can use the device as an exit node when it advertises as one.\n',
                  }),
                email: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example: 'user@example.com',
                    description:
                      "The email to send the created invite to.\nIf not set, the endpoint generates and returns an invite URL (but doesn't send it out).\n",
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.array(DeviceInviteSchema).openapi({
            example: [
              {
                id: '12345',
                created: '2024-05-08T20:19:51.777861756Z',
                tailnetId: 59954,
                deviceId: 11055,
                sharerId: 22011,
                allowExitNode: true,
                email: 'user@example.com',
                lastEmailSentAt: '2024-05-08T20:19:51.777861756Z',
                inviteUrl: 'https://login.tailscale.com/admin/invite/<code>',
                accepted: false,
              },
              {
                id: '12346',
                created: '2024-04-03T21:38:49.333829261Z',
                tailnetId: 59954,
                deviceId: 11055,
                sharerId: 22012,
                inviteUrl: 'https://login.tailscale.com/admin/invite/<code>',
                accepted: false,
              },
            ],
          }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getTailnetTailnetUserInvitesRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/user-invites',
  tags: ['UserInvites'],
  summary: 'List user invites',
  description: 'List all open (not yet accepted) user invites to the tailnet.',
  operationId: 'listUserInvites',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.array(UserInviteSchema).openapi({
            example: [
              {
                id: '29214',
                role: 'admin',
                tailnetId: 12345,
                inviterId: 34567,
                email: 'user@example.com',
                lastEmailSentAt: '2024-05-09T16:23:26.91778771Z',
                inviteUrl: 'https://login.tailscale.com/uinv/<code>',
              },
              {
                id: '29215',
                role: 'admin',
                tailnetId: 12345,
                inviterId: 34567,
                email: 'someoneelse@example.com',
                lastEmailSentAt: '2024-05-09T17:23:30.91778771Z',
                inviteUrl: 'https://login.tailscale.com/uinv/<code>',
              },
            ],
          }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetUserInvitesRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/user-invites',
  tags: ['UserInvites'],
  summary: 'Create user invites',
  description:
    'Create, and optionally email out, new user invites to join the tailnet.\n\n> ⓘ Only permitted for user-owned keys, because invites require an inviting user.\n',
  operationId: 'createUserInvites',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                role: z
                  .enum([
                    'member',
                    'admin',
                    'it-admin',
                    'network-admin',
                    'billing-admin',
                    'auditor',
                  ])
                  .default('member')
                  .exactOptional()
                  .openapi({
                    example: 'admin',
                    description: 'Optionally specifies a user role to assign the invited user.\n',
                  }),
                email: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example: 'user@example.com',
                    description:
                      'Optionally specifies the email to send the created invite.\nIf not set, the endpoint generates and returns an invite URL, but does not email it out.\n',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .array(UserInviteSchema)
            .openapi({
              example: [
                {
                  id: '29214',
                  role: 'admin',
                  tailnetId: 12345,
                  inviterId: 34567,
                  email: 'user@example.com',
                  lastEmailSentAt: '2024-05-09T16:23:26.91778771Z',
                  inviteUrl: 'https://login.tailscale.com/uinv/<code>',
                },
              ],
            }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getUserInvitesUserInviteIdRoute = createRoute({
  method: 'get',
  path: '/user-invites/{userInviteId}',
  tags: ['UserInvites'],
  summary: 'Get a user invite',
  description: 'Retrieve a specific user invite.\n',
  operationId: 'getUserInvite',
  request: { params: z.object({ userInviteId: UserInviteIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: UserInviteSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const deleteUserInvitesUserInviteIdRoute = createRoute({
  method: 'delete',
  path: '/user-invites/{userInviteId}',
  tags: ['UserInvites'],
  summary: 'Delete a user invite',
  description:
    'Deletes a specific user invite.\n\n> ⓘ Only permitted for user-owned keys, because invites require an inviting user.\n',
  operationId: 'deleteUserInvite',
  request: { params: z.object({ userInviteId: UserInviteIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
  },
})

export const postUserInvitesUserInviteIdResendRoute = createRoute({
  method: 'post',
  path: '/user-invites/{userInviteId}/resend',
  tags: ['UserInvites'],
  summary: 'Resend a user invite',
  description:
    'Resend a user invite by email. You can only use this if the specified invite\nwas originally created with an email specified.\nRefer to [creating user invites for a tailnet](#tag/userinvites/post/tailnet/{tailnet}/user-invites).\n\nNote: Invite resends are rate limited to one per minute.\n\n> ⓘ Only permitted for user-owned keys, because invites require an inviting user.\n',
  operationId: 'resendUserInvite',
  request: { params: z.object({ userInviteId: UserInviteIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
  },
})

export const getDeviceInvitesDeviceInviteIdRoute = createRoute({
  method: 'get',
  path: '/device-invites/{deviceInviteId}',
  tags: ['DeviceInvites'],
  summary: 'Get a device invite',
  description: 'Retrieve a specific device invite.\n\nOAuth Scope: `device_invites:read`.\n',
  operationId: 'getDeviceInvite',
  request: { params: z.object({ deviceInviteId: DeviceInviteIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DeviceInviteSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const deleteDeviceInvitesDeviceInviteIdRoute = createRoute({
  method: 'delete',
  path: '/device-invites/{deviceInviteId}',
  tags: ['DeviceInvites'],
  summary: 'Delete a device invite',
  description: 'Delete a specific device invite.\n\nOAuth Scope: `device_invites`.\n',
  operationId: 'deleteDeviceInvite',
  request: { params: z.object({ deviceInviteId: DeviceInviteIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
  },
})

export const postDeviceInvitesDeviceInviteIdResendRoute = createRoute({
  method: 'post',
  path: '/device-invites/{deviceInviteId}/resend',
  tags: ['DeviceInvites'],
  summary: 'Resend a device invite',
  description:
    'Resend a device invite by email. You can only use this if the specified invite\nwas originally created with an email specified.\nRefer to [creating device invites for a device](#tag/deviceinvites/post/device/{deviceId}/device-invites).\n\nNote: Invite resends are rate limited to one per minute.\n\nNote that device invites cannot be resent using an API access token generated from an OAuth client as the shared device is scoped to a user.\n',
  operationId: 'resendDeviceInvite',
  request: { params: z.object({ deviceInviteId: DeviceInviteIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    404: _404Response,
    500: _500Response,
  },
})

export const postDeviceInvitesDashAcceptRoute = createRoute({
  method: 'post',
  path: '/device-invites/-/accept',
  tags: ['DeviceInvites'],
  summary: 'Accept a device invite',
  description:
    "Accepts the invitation to share a device into the requesting user's tailnet.\n\nNote that device invites cannot be accepted using an API access token generated from an OAuth client as the shared device is scoped to a user.\n",
  operationId: 'acceptDeviceInvite',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              invite: z
                .string()
                .openapi({
                  example: 'https://login.tailscale.com/admin/invite/xxxxxx',
                  description:
                    'The URL of the invite (in the form `https://login.tailscale.com/admin/invite/{code}`) or the `{code}` component of the URL.\n',
                }),
            })
            .openapi({ required: ['invite'] }),
          examples: {
            usingFullUrl: {
              summary: 'Using the full invite URL',
              value: { invite: 'https://login.tailscale.com/admin/invite/xxxxxx' },
            },
            usingCodeComponent: {
              summary: 'Using `code` component of the invite URL',
              value: { invite: 'xxxxxx' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              device: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '12346', description: 'The `nodeId` for the device.\n' }),
                  os: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'iOS',
                      description: 'The operating system that the device is running.\n',
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'my-phone', description: 'The name of the device.\n' }),
                  fqdn: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'my-phone.something.ts.net',
                      description:
                        'The MagicDNS name of the device.\nLearn more about MagicDNS at https://tailscale.com/docs/features/magicdns.\n',
                    }),
                  ipv4: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: '100.x.y.z',
                      description: 'The IPv4 address of the device.\n',
                    }),
                  ipv6: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'fd7a:115c:x::y:z',
                      description: 'The IPv6 address of the device.\n',
                    }),
                  includeExitNode: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      example: false,
                      description:
                        'Specifies whether the invited user is able to use the\ndevice as an exit node when the device is advertising as one.\n',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about the device being shared.\n',
                  required: [],
                }),
              sharer: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: '22012',
                      description: 'The ID of the user who created the share invite.\n',
                    }),
                  displayName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'Some User',
                      description: 'The display name of the user who created the share invite.\n',
                    }),
                  loginName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'someuser@example.com',
                      description: 'The email address of the user who created the share invite.\n',
                    }),
                  profilePicURL: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: '',
                      description:
                        'The profile pic URL for the user who created the share invite.\n',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'The user who create the device share invite.\n',
                  required: [],
                }),
              acceptedBy: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: '33233',
                      description: 'The ID of the user who accepted the share invite.\n',
                    }),
                  displayName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'Another User',
                      description: 'The display name of the user who accepted the share invite.\n',
                    }),
                  loginName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'anotheruser@example2.com',
                      description: 'The email address of the user who accepted the share invite.\n',
                    }),
                  profilePicURL: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: '',
                      description:
                        'The profile pic URL for the user who accepted the share invite.\n',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'The user accepting the device share invite.\n',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    500: _500Response,
  },
})

export const getTailnetTailnetLoggingConfigurationRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/logging/configuration',
  tags: ['Logging'],
  summary: 'List configuration audit logs',
  description:
    'List all configuration audit logs for a tailnet.\n\nOAuth Scope: `logs:configuration:read`.\n',
  operationId: 'listConfigurationAuditLogs',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      actor: ActorParamsSchema,
      target: TargetParamsSchema,
      event: EventParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'Version of audit logs response.', example: '1.1' }),
              tailnet: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'example.com',
                  description: 'The tailnet on which the logged configuration changes were made.',
                }),
              logs: z
                .array(ConfigurationAuditLogSchema)
                .exactOptional()
                .openapi({ description: 'Matching log entries, ordered chronologically.' }),
            })
            .openapi({
              description:
                "A structured response for all of a Tailnet's audit logs over a period of time.",
              required: [],
            }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const getTailnetTailnetLoggingNetworkRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/logging/network',
  tags: ['Logging'],
  summary: 'List network flow logs',
  description: 'List all network flow logs for a tailnet.\n\nOAuth Scope: `logs:network:read`.\n',
  operationId: 'listNetworkFlowLogs',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Successful operation. The `logs` field contains an array of [NetworkFlowLog](#model/networkflowlog) objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              logs: z
                .array(NetworkFlowLogSchema)
                .exactOptional()
                .openapi({ description: 'Matching log entries, ordered chronologically.' }),
            })
            .openapi({
              description:
                "A structured response for all of a Tailnet's network flow logs over a period of time.",
              required: [],
            }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    502: _502Response,
  },
})

export const getTailnetTailnetLoggingLogTypeStreamStatusRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/logging/{logType}/stream/status',
  tags: ['Logging'],
  summary: 'Get log streaming status',
  description:
    'Retrieve the log streaming status for the provided log type.\n\nOAuth Scope: `log_streaming:read`.\n',
  operationId: 'getLogStreamingStatus',
  request: { params: z.object({ tailnet: TailnetParamsSchema, logType: LogTypeParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: LogstreamEndpointPublishingStatusSchema } },
    },
    404: _404Response,
    502: _502Response,
  },
})

export const getTailnetTailnetLoggingLogTypeStreamRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/logging/{logType}/stream',
  tags: ['Logging'],
  summary: 'Get log streaming configuration',
  description:
    'Retrieve the log streaming configuration for the provided log type.\n\nOAuth Scope: `log_streaming:read`.\n',
  operationId: 'getLogStreamingConfiguration',
  request: { params: z.object({ tailnet: TailnetParamsSchema, logType: LogTypeParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: LogstreamEndpointConfigurationSchema } },
    },
    404: _404Response,
  },
})

export const putTailnetTailnetLoggingLogTypeStreamRoute = createRoute({
  method: 'put',
  path: '/tailnet/{tailnet}/logging/{logType}/stream',
  tags: ['Logging'],
  summary: 'Set log streaming configuration',
  description:
    'Set the log streaming configuration for the provided log type.\n\nOAuth Scope: `log_streaming`. `device_invites` and `policy_file` are also required if streaming to a [private endpoint](https://tailscale.com/docs/features/logging/log-streaming#private-endpoints).\n',
  operationId: 'setLogStreamingConfiguration',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, logType: LogTypeParamsSchema }),
    body: {
      description:
        'The [LogstreamEndpointConfiguration](#model/logstreamendpointconfiguration) to set.\n`logType` is specified in the request URL rather than the body.\n',
      content: {
        'application/json': {
          schema: LogstreamEndpointConfigurationSchema,
          example: {
            destinationType: 'elastic',
            url: 'http://100.71.134.73:80/config-log-datastream',
            user: 'myusername',
            token: 'mytoken',
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
  },
})

export const deleteTailnetTailnetLoggingLogTypeStreamRoute = createRoute({
  method: 'delete',
  path: '/tailnet/{tailnet}/logging/{logType}/stream',
  tags: ['Logging'],
  summary: 'Disable log streaming',
  description:
    'Delete the log streaming configuration for the provided log type.\n\nOAuth Scope: `log_streaming`.\n',
  operationId: 'disableLogStreaming',
  request: { params: z.object({ tailnet: TailnetParamsSchema, logType: LogTypeParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    403: _403Response,
    404: _404Response,
  },
})

export const postTailnetTailnetAwsExternalIdRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/aws-external-id',
  tags: ['Logging'],
  summary: 'Create or get AWS external id',
  description:
    'Get an AWS external id to use for streaming tailnet logs to S3 using role-based authentication,\ncreating a new one for this tailnet when necessary.\n\nOAuth Scope: `log_streaming`.\n',
  operationId: 'getAwsExternalId',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reusable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to true, this same AWS external id will be returned on future calls to this endpoint, if and only if those calls also mark `reusable` as true, and the ID has not yet been linked with an AWS account.',
                }),
            })
            .openapi({ required: [] }),
          example: { reusable: true },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: AwsExternalIdSchema } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/aws-external-id/{id}/validate-aws-trust-policy',
  tags: ['Logging'],
  summary: 'Validate external ID integration with IAM role trust policy',
  description:
    'Validate that Tailscale can assume your IAM role with (and only with)\nthis external ID.\n\nOAuth Scope: `log_streaming`.\n',
  operationId: 'validateAwsExternalId',
  request: {
    params: z.object({
      tailnet: TailnetParamsSchema,
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The AWS external ID to validate.',
            required: true,
            example: '60fe9ce7-7791-4ab3-ab34-4294f5972725',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roleArn: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ARN of the AWS IAM role to validate with this external ID.',
                }),
            })
            .openapi({
              example: { roleArn: 'arn:aws:iam::000000000000:role/tailscale-log-writer' },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Validation succeeded for this external ID and IAM role.' },
    403: _403Response,
    404: _404Response,
    422: {
      description: 'Validation failed for this external ID and IAM role.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'The reason for validation failure.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTailnetTailnetDnsNameserversRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/dns/nameservers',
  tags: ['DNS'],
  summary: 'List DNS nameservers',
  description: 'Lists the global DNS nameservers for a tailnet.\n',
  operationId: 'listDnsNameservers',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              dns: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['8.8.8.8', '1.2.3.4'], description: 'DNS nameservers.\n' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetDnsNameserversRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/dns/nameservers',
  tags: ['DNS'],
  summary: 'Set DNS nameservers',
  description:
    'Replaces the list of global DNS nameservers for the given tailnet with the list supplied in the request.\n\nNote that changing the list of DNS nameservers may also affect the status of MagicDNS (if MagicDNS is on; learn about [MagicDNS](https://tailscale.com/docs/features/magicdns)).\nIf all nameservers have been removed, MagicDNS will be automatically disabled (until explicitly turned back on by the user).\n',
  operationId: 'setDnsNameservers',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dns: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['8.8.8.8', '1.2.3.4'], description: 'DNS nameservers.\n' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Succesful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              dns: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['8.8.8.8', '1.2.3.4'], description: 'DNS nameservers.\n' }),
              magicDNS: z
                .boolean()
                .exactOptional()
                .openapi({
                  example: true,
                  description: 'Whether MagicDNS is active for this tailnet.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetDnsPreferencesRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/dns/preferences',
  tags: ['DNS'],
  summary: 'Get DNS preferences',
  description: 'Retrieves the DNS preferences that are currently set for the given tailnet.\n',
  operationId: 'getDnsPreferences',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Succesful operation.',
      content: { 'application/json': { schema: DnsPreferencesSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetDnsPreferencesRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/dns/preferences',
  tags: ['DNS'],
  summary: 'Set DNS preferences',
  description:
    'Set the DNS preferences for a tailnet; specifically, the MagicDNS setting.\nNote that MagicDNS is dependent on DNS servers.\nLearn about [MagicDNS](https://tailscale.com/docs/features/magicdns).\n\nIf there is at least one DNS server, then MagicDNS can be enabled.\nOtherwise, it returns an error.\n\nNote that removing all nameservers will turn off MagicDNS.\nTo reenable it, nameservers must be added back, and MagicDNS must be explicitly turned on.\n',
  operationId: 'setDnsPreferences',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: { content: { 'application/json': { schema: DnsPreferencesSchema } } },
  },
  responses: {
    200: {
      description: 'Succesful operation.',
      content: { 'application/json': { schema: DnsPreferencesSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetDnsSearchpathsRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/dns/searchpaths',
  tags: ['DNS'],
  summary: 'List DNS search paths',
  description:
    'Retrieves the list of search paths, also referred to as *search domains*, that is currently set for the given tailnet.\n',
  operationId: 'listDnsSearchPaths',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DnsSearchPathsSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetDnsSearchpathsRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/dns/searchpaths',
  tags: ['DNS'],
  summary: 'Set DNS search paths',
  description: 'Replaces the list of search paths for the given tailnet.\n',
  operationId: 'setDnsSearchPaths',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: { content: { 'application/json': { schema: DnsSearchPathsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DnsSearchPathsSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetDnsSplitDnsRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/dns/split-dns',
  tags: ['DNS'],
  summary: 'Get split DNS',
  description:
    'Retrieves the split DNS settings, which is a map from domains to lists of nameservers, that is currently set for the given tailnet.\n',
  operationId: 'getSplitDns',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Succesful operation.',
      content: { 'application/json': { schema: SplitDnsSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const putTailnetTailnetDnsSplitDnsRoute = createRoute({
  method: 'put',
  path: '/tailnet/{tailnet}/dns/split-dns',
  tags: ['DNS'],
  summary: 'Set split DNS',
  description:
    'Replaces the split DNS settings for a given tailnet.\nSetting the value of a mapping to `null` clears the nameservers for that domain.\nSending an empty object clears nameservers for all domains.\n',
  operationId: 'setSplitDns',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: { content: { 'application/json': { schema: SplitDnsSchema } } },
  },
  responses: {
    200: {
      description: 'Succesful operation.',
      content: { 'application/json': { schema: SplitDnsSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const patchTailnetTailnetDnsSplitDnsRoute = createRoute({
  method: 'patch',
  path: '/tailnet/{tailnet}/dns/split-dns',
  tags: ['DNS'],
  summary: 'Update split DNS',
  description:
    'Performs partial updates of the split DNS settings for a given tailnet.\nOnly domains specified in the request map will be modified.\nSetting the value of a mapping to `null` clears the nameservers for that domain.\n',
  operationId: 'updateSplitDns',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: { content: { 'application/json': { schema: SplitDnsSchema } } },
  },
  responses: {
    200: {
      description: 'Succesful operation.',
      content: { 'application/json': { schema: SplitDnsSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetDnsConfigurationRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/dns/configuration',
  tags: ['DNS'],
  summary: 'Get DNS configuration',
  description:
    'Retrieves the full DNS configuration for a tailnet, including global nameservers, split DNS routes, search paths, and MagicDNS configuration.\n',
  operationId: 'getDnsConfiguration',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DnsConfigurationSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetDnsConfigurationRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/dns/configuration',
  tags: ['DNS'],
  summary: 'Set DNS configuration',
  description:
    'Replaces the DNS configuration for the given tailnet.\n\n- `nameservers` defines the global resolvers to use when `preferences.overrideLocalDNS` is true.\n- `splitDNS` maps DNS name suffixes (domains) to lists of resolvers for Split DNS.\n- `searchPaths` sets custom DNS search domain paths.\n- `preferences.overrideLocalDNS` controls whether resolvers in `nameservers` override the local OS configuration (true) or are used or local resolvers are used (false). Defaults to false.\n- `preferences.magicDNS` enables MagicDNS. Defaults to false.\n',
  operationId: 'setDnsConfiguration',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: { content: { 'application/json': { schema: DnsConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: DnsConfigurationSchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetKeysRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/keys',
  tags: ['Keys'],
  summary: 'List tailnet keys',
  description:
    'Returns a list of active auth keys, API access tokens and trust credentials.\n\nIf the parameter {all} was not specified, the set of keys returned depends on the access token used to make the request:\n- If the API call is made with a user-owned API access token, this returns only the keys owned by that user.\n- If the API call is made with an access token derived from an OAuth client, this returns all OAuth clients for the tailnet.\n- If the API call is made with an access token derived from a federated identity, this returns all federated identities for the tailnet.\n\nOAuth Scope: `api_access_tokens:read` grants access to personal API access tokens.\n\nOAuth Scope: `auth_keys:read` grants access to machine auth keys.\n\nOAuth Scope: `oauth_keys:read` grants access to OAuth clients and OAuth tokens.\n\nOAuth Scope: `federated_keys:read` grants access to federated identities.\n',
  operationId: 'listTailnetKeys',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    query: z.object({ all: AllParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              keys: z
                .array(KeySchema)
                .exactOptional()
                .openapi({
                  description: 'A list of the active keys.',
                  example: [
                    {
                      id: 'XXXX14CNTRL',
                      keyType: 'client',
                      created: '2021-12-09T23:22:39Z',
                      scopes: ['all'],
                      description: 'test key',
                      userId: 'uscwcTtzzo11DEVEL',
                    },
                    {
                      id: 'XXXXZ3CNTRL',
                      keyType: 'api',
                      expirySeconds: 7776000,
                      created: '2021-12-09T23:22:39Z',
                      expires: '2022-03-09T23:22:39Z',
                      scopes: ['all'],
                      description: 'production key',
                      userId: 'uscwcTtzzo11DEVEL',
                    },
                    {
                      id: 'XXXX43CNTRL',
                      keyType: 'auth',
                      expirySeconds: 7776000,
                      created: '2021-12-09T23:22:39Z',
                      expires: '2022-03-09T23:22:39Z',
                      capabilities: {
                        devices: {
                          create: {
                            reusable: true,
                            ephemeral: false,
                            preauthorized: true,
                            tags: ['tag:example'],
                          },
                        },
                      },
                      description: 'dev access',
                      userId: 'uscwcTtzzo11DEVEL',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetKeysRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/keys',
  tags: ['Keys'],
  summary: 'Create an auth key or trust credential',
  description:
    'Creates a new [auth key](https://tailscale.com/docs/features/access-control/auth-keys), or [trust credential](https://tailscale.com/docs/reference/trust-credentials) in the specified tailnet.\nTrust credentials include [OAuth clients](https://tailscale.com/docs/features/oauth-clients) and [federated identities](https://tailscale.com/docs/features/workload-identity-federation).\nThe key will be associated with the user who owns the API access token used to make this call,\nor, if the call is made with an access token derived from an OAuth client or federated identity, the key will be owned by the tailnet.\n\nReturns a JSON object with the generated key.\nThe key should be recorded and kept safe and secure because it wields the capabilities or scopes specified in the request.\nThe identity of the key is embedded in the key itself and can be used to perform operations on the key (e.g., revoking it or retrieving information about it).\nThe full key can no longer be retrieved after the initial response.\n\nOAuth Scope: `auth_keys` grants access to create machine auth keys.\n\nOAuth Scope: `oauth_keys` grants access to create OAuth clients.\n\nOAuth Scope: `federated_keys` grants access to created federated identities.\n',
  operationId: 'createKey',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      description:
        'The supported fields vary depending on the value of the `keyType` field.\n\nFor auth keys, at a minimum, the request POST body must have a `capabilities` object with a `devices` object,\nthough it can be an empty JSON object.\nWith nothing else supplied, such a request generates a single-use key with no tags.\n\nFor OAuth clients, at a minimum the request POST body must have at least one scope.\n\nFor federated identities, at a minimum the request POST body must have at least one scope, a valid issuer, and a subject.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              keyType: z
                .enum(['auth', 'client', 'federated'])
                .exactOptional()
                .openapi({
                  description: 'The type of key to create. Defaults to "auth" if omitted.\n',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A short string specifying the purpose of the key. Can be a maximum of 50 alphanumeric characters. Hyphens and spaces are also allowed.\n',
                  example: 'dev access',
                }),
              capabilities: KeyCapabilitiesSchema.exactOptional(),
              expirySeconds: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Specifies the duration in seconds until the key expires. Defaults to 90 days if not supplied.\n\nOnly applies to auth keys.\n',
                  example: 86400,
                }),
              scopes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of scopes to grant to the key. At least one scope is required for OAuth clients and federated identities.\nSee [trust credentials scopes](https://tailscale.com/docs/reference/trust-credentials#scopes) for a list of available scopes.\n\nOnly applies to OAuth clients and federated identities.\n',
                  example: ['all:read'],
                }),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of tags associated to the trust credential. Auth keys created with this credential must have these exact tags, or tags owned by the credential\'s tags.\nMandatory if the scopes include "devices:core" or "auth_keys".\n\nOnly applies to OAuth clients and federated identities.\n',
                  example: ['tag:example'],
                }),
              issuer: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'The issuer of the OIDC identity token used in the token exchange. Must be a valid and publicly reachable https:// URL.\n\nOnly applies to federated identities.\n',
                  example: 'https://example.com',
                }),
              subject: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The pattern used when matching against the `sub` claim from an OIDC identity token.\nPatterns can include `*` characters to match against any character.\n\nOnly applies to federated identities.\n',
                  example: 'my-example-subject-*',
                }),
              audience: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The value used when matching against the `aud` claim from an OIDC identity token.\n\nSpecifying the audience is optional as Tailscale will generate a secure audience at creation time by default.\nIt is recommended to let Tailscale generate the audience unless the identity provider you are integrating with\nrequires a specific audience format.\n\nOnly applies to federated identities.\n',
                  example: 'api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL',
                }),
              customClaimRules: z
                .record(
                  z.string(),
                  z.string().openapi({ 'x-additionalPropertiesName': 'Custom claim rule' }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A map of claim names to pattern strings used to match against arbitrary claims in the OIDC identity token.\nPatterns can include `*` characters to match against any character.\n\nOnly applies to federated identities.\n',
                  example: {
                    exampleAdditionalClaim: 'valueToMatch',
                    otherAdditionalClaim: 'valueWithWildcard*',
                  },
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: KeySchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/keys/{keyId}',
  tags: ['Keys'],
  summary: 'Get key',
  description:
    'Returns a JSON object with information about a specific api access token, OAuth client, federated identity, or auth key, such as its creation and expiration dates and its capabilities.\n\nOAuth Scope: `api_access_tokens:read` grants access to personal API access tokens.\n\nOAuth Scope: `auth_keys:read` grants access to machine auth keys.\n\nOAuth Scope: `oauth_keys:read` grants access to OAuth clients and OAuth tokens.\n\nOAuth Scope: `federated_keys:read` grants access to federated identities.\n',
  operationId: 'getKey',
  request: { params: z.object({ tailnet: TailnetParamsSchema, keyId: KeyIdParamsSchema }) },
  responses: {
    200: {
      description:
        'Successful operation.\n\nResponse for a revoked (deleted) or expired key will have an `invalid` field set to true.\n',
      content: { 'application/json': { schema: KeySchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const putTailnetTailnetKeysKeyIdRoute = createRoute({
  method: 'put',
  path: '/tailnet/{tailnet}/keys/{keyId}',
  tags: ['Keys'],
  summary: 'Set key',
  description:
    'Set the configuration for an existing OAuth client or federated identity.\n\nOAuth Scope: `oauth_keys` grants access to OAuth clients.\n\nOAuth Scope: `federated_keys` grants access to federated identities.\n',
  operationId: 'setKey',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, keyId: KeyIdParamsSchema }),
    body: {
      description: 'The supported fields vary depending on the value of the `keyType` field.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              keyType: z
                .enum(['client', 'federated'])
                .exactOptional()
                .openapi({ description: 'The type of the key being updated.\n' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A short string specifying the purpose of the key. Can be a maximum of 50 alphanumeric characters. Hyphens and spaces are also allowed.\n',
                  example: 'dev access',
                }),
              scopes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of scopes to grant to the key. At least one scope is required.\nSee [trust credentials scopes](https://tailscale.com/docs/reference/trust-credentials#scopes) for a list of available scopes.\n',
                  example: ['all:read'],
                }),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'A list of tags associated to the trust credential. Auth keys created with this credential must have these exact tags, or tags owned by the credential\'s tags.\nMandatory if the scopes include "devices:core" or "auth_keys".\n',
                  example: ['tag:example'],
                }),
              issuer: z
                .url()
                .exactOptional()
                .openapi({
                  description:
                    'The issuer of the OIDC identity token used in the token exchange. Must be a valid https:// URL.\n\nOnly applies to federated identities.\n',
                  example: 'https://example.com',
                }),
              subject: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The pattern used when matching against the `sub` claim from an OIDC identity token.\nPatterns can include `*` characters to match against any character.\n\nOnly applies to federated identities.\n',
                  example: 'my-example-subject-*',
                }),
              audience: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The value used when matching against the `aud` claim from an OIDC identity token.\n\nOnly applies to federated identities.\n',
                  example: 'api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL',
                }),
              customClaimRules: z
                .record(
                  z.string(),
                  z.string().openapi({ 'x-additionalPropertiesName': 'Custom claim rule' }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A map of claim names to pattern strings used to match against arbitrary claims in the OIDC identity token.\nPatterns can include `*` characters to match against any character.\n\nOnly applies to federated identities.\n',
                  example: {
                    exampleAdditionalClaim: 'valueToMatch',
                    otherAdditionalClaim: 'valueWithWildcard*',
                  },
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: KeySchema } },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const deleteTailnetTailnetKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/tailnet/{tailnet}/keys/{keyId}',
  tags: ['Keys'],
  summary: 'Delete key',
  description:
    'Deletes a specific api access token or auth key.\n\nOAuth Scope: `api_access_tokens` grants access to personal API access tokens.\n\nOAuth Scope: `auth_keys` grants access to machine auth keys.\n\nOAuth Scope: `oauth_keys` grants access to OAuth clients and OAuth tokens.\n\nOAuth Scope: `federated_keys` grants access to federated identities.\n',
  operationId: 'deleteKey',
  request: { params: z.object({ tailnet: TailnetParamsSchema, keyId: KeyIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetAclRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/acl',
  tags: ['PolicyFile'],
  summary: 'Get policy file',
  description:
    'Retrieves the current policy file for the given tailnet; \nthis includes the ACL along with the rules and tests that have been defined.\n\nThis method can return the policy file as JSON or HuJSON, depending on the Accept header.\nThe response also includes an `ETag` header, which can be optionally included when [setting the policy file](#tag/policyfile/post/tailnet/{tailnet}/acl) to avoid missed updates.\n\nLearn more about [policy file ACL syntax](https://tailscale.com/docs/reference/syntax/policy-file).\n\nOAuth Scope: `policy_file:read`.\n',
  operationId: 'getPolicyFile',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    headers: z.object({ Accept: AcceptHeaderParamParamsSchema }),
    query: z.object({
      details: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'details',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
            description:
              'Request a detailed description of the tailnet policy file by providing `details=true` in the URL query string.\nSupplying any other value for `details`, or not sending the param, is treated as sending `details=false`.\nIf using this, do not supply an `Accept` parameter in the header.\n\nThe response will contain a JSON object with the fields:\n- `acl`: a base64-encoded string representation of the huJSON format.\n- `warnings`: array of strings for syntactically valid but nonsensical entries.\n- `errors`: an array of strings for parsing failures.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            exampleJSONPolicyFile: ExampleJSONPolicyFileExample,
            exampleWithDetails: {
              summary: 'JSON response with details=true',
              value: {
                acl: 'Ly8gUG9raW5nIGFyb3VuZCBpbiB0aGUgQVBJIGRvY3MsIGhvcGluZyB5b3UnZCBmaW5kIHNvbWV0aGluZyBnb29kLCBlaD8KLy8gV2UgbGlrZSB5b3VyIHN0eWxlISAgR28gZ3JhYiB5b3Vyc2VsZiBhIFRhaWxzY2FsZSB0LXNoaXJ0IGlmIHRoZXJlIGFyZQovLyBzdGlsbCBzb21lIGF2YWlsYWJsZS4gQnV0IHNoaGguLi4gZG9uJ3QgdGVsbCBhbnlvbmUhCi8vCi8vICAgICAgICAgICAgIGh0dHBzOi8vc3dhZy5jb20vZ2lmdC82a29mNGs1Z3B1ZW95ZDB2NXd6MHJkYmMKewoJLy8gRGVjbGFyZSBzdGF0aWMgZ3JvdXBzIG9mIHVzZXJzIGJleW9uZCB0aG9zZSBpbiB0aGUgaWRlbnRpdHkgc2VydmljZS4KCSJncm91cHMiOiB7CgkJImdyb3VwOmV4YW1wbGUiOiBbInVzZXIxQGV4YW1wbGUuY29tIiwgInVzZXIyQGV4YW1wbGUuY29tIl0sCgl9LAoKCS8vIERlY2xhcmUgY29udmVuaWVudCBob3N0bmFtZSBhbGlhc2VzIHRvIHVzZSBpbiBwbGFjZSBvZiBJUCBhZGRyZXNzZXMuCgkiaG9zdHMiOiB7CgkJImV4YW1wbGUtaG9zdC0xIjogIjEwMC4xMDAuMTAwLjEwMCIsCgl9LAoKCS8vIEFjY2VzcyBjb250cm9sIGxpc3RzLgoJImFjbHMiOiBbCgkJLy8gTWF0Y2ggYWJzb2x1dGVseSBldmVyeXRoaW5nLgoJCS8vIENvbW1lbnQgdGhpcyBzZWN0aW9uIG91dCBpZiB5b3Ugd2FudCB0byBkZWZpbmUgc3BlY2lmaWMgcmVzdHJpY3Rpb25zLgoJCXsiYWN0aW9uIjogImFjY2VwdCIsICJ1c2VycyI6IFsiKiJdLCAicG9ydHMiOiBbIio6KiJdfSwKCV0sCn0K',
                warnings: [
                  '"group:example": user not found: "user1@example.com"',
                  '"group:example": user not found: "user2@example.com"',
                ],
                errors: null,
              },
            },
          },
        },
        'application/hujson': {
          schema: z.string(),
          examples: { exampleHuJSONPolicyFile: ExampleHuJSONPolicyFileExample },
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetAclRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/acl',
  tags: ['PolicyFile'],
  summary: 'Set policy file',
  description:
    'Sets the ACL for the given tailnet. HuJSON and JSON are both accepted inputs.\nAn `If-Match` header can be set to avoid missed updates.\n\nOn success, returns the updated ACL in JSON or HuJSON according to the `Accept` header.\nOtherwise, errors are returned for incorrectly defined ACLs, ACLs with failing tests on attempted updates, and mismatched `If-Match` header and `ETag`.\n\nLearn more about [policy file ACL syntax](https://tailscale.com/docs/reference/syntax/policy-file).\n\nOAuth Scope: `policy_file`.\n',
  operationId: 'setPolicyFile',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    headers: z.object({
      Accept: AcceptHeaderParamParamsSchema,
      'If-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Match',
            in: 'header',
            required: false,
            schema: { type: 'string' },
            description:
              'This is a safety mechanism to avoid overwriting other users\' updates to the tailnet policy file.\n\n- Set the `If-Match` value to that of the `ETag` header returned in a `GET` request to `/api/v2/tailnet/{tailnet}/acl`.\n  Tailscale compares the `ETag` value in your request to that of the current tailnet file and only replaces the file if there\'s a match.\n  (A mismatch indicates that another update has been made to the file.) For example: `-H "If-Match: \\"e0b2816b418\\""`.\n- Alternately, set the `If-Match` value to `ts-default` to ensure that the policy file is replaced *only if the current policy file is still the untouched default created automatically* for each tailnet.\n  For example: `-H "If-Match: \\"ts-default\\""`.\n',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { exampleJSONPolicyFile: ExampleJSONPolicyFileExample },
        },
        'application/hujson': {
          schema: z.string(),
          examples: { exampleHuJSONPolicyFile: ExampleHuJSONPolicyFileExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { exampleJSONPolicyFile: ExampleJSONPolicyFileExample },
        },
        'application/hujson': {
          schema: z.string(),
          examples: { exampleHuJSONPolicyFile: ExampleHuJSONPolicyFileExample },
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    412: {
      description: 'If-Match hash mismatch.',
      content: {
        'application/json': {
          schema: ErrorSchema.openapi({
            example: { message: 'precondition failed, invalid old hash' },
          }),
        },
      },
    },
    500: _500Response,
  },
})

export const postTailnetTailnetAclPreviewRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/acl/preview',
  tags: ['PolicyFile'],
  summary: 'Preview rule matches',
  description:
    'When given a user or IP port to match against,\nreturns the tailnet policy rules that apply to that resource,\nwithout saving the policy file to the server.\n',
  operationId: 'previewRuleMatches',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    query: z.object({
      type: z
        .enum(['user', 'ipport'])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'Specify for which type of resource (user or IP port) matching rules are to be fetched.\nRead about [previewing changes in the admin console](https://tailscale.com/docs/features/tailnet-policy-file/manage-tailnet-policies#preview-changes).\n\nOAuth Scope: `policy_file:read`.\n',
            required: true,
            schema: {
              type: 'string',
              enum: ['user', 'ipport'],
              'x-enumDescriptions': {
                user: "Specify `user` if the `previewFor` value is a user's email.\nNote that `user` remains in the API for compatibility purposes,\nbut has been replaced by `src` in policy files.\n",
                ipport:
                  'Specify `ipport` if the `previewFor` value is an IP address and port.\nNote that `ipport` remains in the API for compatibility purposes,\nbut has been replaced by `dst` in policy files.\n',
              },
              example: 'user',
            },
          },
          'x-enumDescriptions': {
            user: "Specify `user` if the `previewFor` value is a user's email.\nNote that `user` remains in the API for compatibility purposes,\nbut has been replaced by `src` in policy files.\n",
            ipport:
              'Specify `ipport` if the `previewFor` value is an IP address and port.\nNote that `ipport` remains in the API for compatibility purposes,\nbut has been replaced by `dst` in policy files.\n',
          },
          example: 'user',
        }),
      previewFor: z
        .string()
        .openapi({
          param: {
            name: 'previewFor',
            in: 'query',
            description:
              '- If `type` is `user`, provide the email of a valid user with registered machines.\n- If `type` is `ipport`, provide an IP address + port: `10.0.0.1:80`.\n\nThe supplied policy file is queried with this parameter to determine which rules match.\n',
            required: true,
            schema: { type: 'string', example: '10.0.0.1:80' },
          },
          example: '10.0.0.1:80',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { exampleJSONPolicyFile: ExampleJSONPolicyFileExample },
        },
        'application/hujson': {
          schema: z.string(),
          examples: { exampleHuJSONPolicyFile: ExampleHuJSONPolicyFileExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The list of rules that apply to the resource.',
      content: {
        'application/json': {
          schema: z
            .object({
              matches: z.array(
                z
                  .object({
                    users: z
                      .array(z.string())
                      .openapi({
                        description: 'Source entities affected by the rule.\n',
                        example: ['*'],
                      }),
                    ports: z
                      .array(z.string())
                      .openapi({
                        description: 'Destinations that can be accessed.\n',
                        example: ['*.*'],
                      }),
                    lineNumber: z
                      .int()
                      .openapi({
                        description: "The rule's location in the policy file.\n",
                        example: 19,
                      }),
                  })
                  .openapi({ required: ['users', 'ports', 'lineNumber'] }),
              ),
              type: z
                .string()
                .openapi({
                  example: 'user',
                  description: 'Echoes the `type` provided in the request.\n',
                }),
              previewFor: z
                .string()
                .openapi({
                  example: 'user1@example.com',
                  description: 'Echoes the `previewFor` provided in the request.\n',
                }),
            })
            .openapi({ required: ['matches', 'type', 'previewFor'] }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetAclValidateRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/acl/validate',
  tags: ['PolicyFile'],
  summary: 'Validate and test policy file',
  description:
    "This endpoint works in one of two modes, neither of which modifies your current tailnet policy file:\n\n- Run ACL tests: When the request body contains ACL tests as a JSON array,\n  Tailscale runs ACL tests against the tailnet's current policy file.\n  Learn more about [ACL tests](https://tailscale.com/docs/reference/syntax/policy-file#tests).\n- Validate a new policy file: When the request body is a JSON object,\n  Tailscale interprets the body as a hypothetical new tailnet policy file with new ACLs,\n  including any new rules and tests.\n  It validates that the policy file is parsable and runs tests to validate the existing rules.\n\nIn either case, this method does not modify the tailnet policy file in any way.\n\nOAuth Scope: `policy_file:read`.\n",
  operationId: 'validateAndTestPolicyFile',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .array(
                z
                  .object({
                    src: z
                      .string()
                      .openapi({
                        example: 'dave@example.com',
                        description:
                          "Specifies the user identity to test, which can be \na [user's email address](https://tailscale.com/docs/reference/syntax/policy-file#reference-users),\na [group](https://tailscale.com/docs/reference/syntax/policy-file#groups),\na [tag](https://tailscale.com/docs/features/tags),\nor a [host](https://tailscale.com/docs/reference/syntax/policy-file#hosts) that maps to an IP address.\nThe test case runs from the perspective of a device authenticated with the provided identity.\n",
                      }),
                    srcPostureAttrs: z
                      .record(
                        z.string(),
                        z
                          .union([z.string(), z.number(), z.boolean()])
                          .openapi({ 'x-additionalPropertiesName': 'Posture attributes' }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Specifies the [device posture attributes](https://tailscale.com/docs/reference/syntax/policy-file#proto-1)\nas key-value pairs to use when evaluating posture conditions in access rules.\nYou only need to use this field if the access rules contain \n[device posture conditions](https://tailscale.com/docs/features/device-posture#device-posture-conditions).\n',
                        example: { 'node:os': 'windows' },
                      }),
                    proto: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example: 'tcp',
                        description:
                          'Specifies the IP protocol for `accept` and `deny` rules,\nsimilar to the `proto` field in [ACL rules](https://tailscale.com/docs/reference/syntax/policy-file#acls).\nWhen omitted, the test checks for either TCP or UDP access.\n',
                      }),
                    accept: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Specifies destinations to accept. Each destination in the list is of the form `host:port`\nwhere `port` is a single numeric port and `host` is in the format described in the\n[acl syntax](https://tailscale.com/docs/reference/syntax/policy-file#accept-and-deny-destinations) documentation.\n\nSources in `src` and `destinations` must refer to specific entities and do not support `*` wildcards.\nFor example, an `accept` destination cannot be `tags:*`.\n',
                      }),
                    deny: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Specifies destinations to deny. Each destination in the list is of the form `host:port`\nwhere `port` is a single numeric port and `host` is in the format described in the\n[acl syntax](https://tailscale.com/docs/reference/syntax/policy-file#accept-and-deny-destinations) documentation.\n\nSources in `src` and `destinations` must refer to specific entities and do not support `*` wildcards.\nFor example, a `deny` destination cannot be `tags:*`.\n',
                      }),
                  })
                  .openapi({ required: ['src'] }),
              )
              .openapi({ description: 'Array of ACL tests.\n' }),
            z.string().openapi({ description: 'The JSON representation of the policy file.\n' }),
          ]),
          examples: {
            aclTest: {
              summary: 'Perform ACL tests',
              value: [
                {
                  src: 'user1@example.com',
                  accept: ['example-host-1:22'],
                  deny: ['example-host-2:100'],
                },
              ],
            },
            aclValidateJSON: {
              summary: 'Validate JSON policy file',
              value:
                '{\n  "acls": [\n   { "action": "accept", "src": ["100.105.106.107"], "dst": ["1.2.3.4:*"] },\n  ],\n  "tests", [\n    {"src": "100.105.106.107", "allow": ["1.2.3.4:80"]}\n  ],\n}\n',
            },
          },
        },
        'application/hujson': {
          schema: z
            .string()
            .openapi({ description: 'The HuJSON representation of the policy file.\n' }),
          examples: {
            aclValidateHuJSON: {
              summary: 'Validate HuJSON policy file',
              value:
                '// Example/default ACLs for unrestricted connections.\n{\n  // Declare static groups of users beyond those in the identity service.\n  "groups": {\n    "group:example": ["user1@example.com", "user2@example.com"]\n  },\n  // Declare convenient hostname aliases to use in place of IP addresses.\n  "hosts": {\n    "example-host-1": "100.100.100.100"\n  },\n  // Access control lists.\n  "acls": [\n    // Match absolutely everything. Comment out this section if you want\n    // to define specific ACL restrictions.\n    { "action": "accept", "users": ["*"], "ports": ["*:*"] }\n  ]\n}\n',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Validation or tests have run. An empty response body implies passing validation or tests.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional().openapi({ example: 'test(s) failed' }),
              data: z
                .array(z.object({}))
                .exactOptional()
                .openapi({
                  example: [
                    {
                      user: 'user1@example.com',
                      errors: ['address "2.2.2.2:22": want: Drop, got: Accept'],
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            testsOrValidationFailed: {
              summary: 'Tests or validation failed',
              value: {
                message: 'test(s) failed',
                data: [
                  {
                    user: 'user1@example.com',
                    errors: ['address "2.2.2.2:22": want: Drop, got: Accept'],
                  },
                ],
              },
            },
            validateSCIMGroupsNotSynced: {
              summary: 'Groups not syncing from SCIM',
              value: {
                message: 'warning(s) found',
                data: [
                  {
                    user: 'group:unknown@example.com',
                    warnings: [
                      'group is not syncing from SCIM and will be ignored by rules in the policy file',
                    ],
                  },
                ],
              },
            },
            testsOrValidationSuccess: { summary: 'Tests or validation succeeded', value: {} },
          },
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetPostureIntegrationsRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/posture/integrations',
  tags: ['DevicePosture'],
  summary: 'List all posture integrations',
  description:
    'List all of the posture integrations for a tailnet.\n\nOAuth Scope: `feature_settings:read`.\n',
  operationId: 'getPostureIntegrations',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              integrations: z
                .array(PostureIntegrationSchema)
                .exactOptional()
                .openapi({ description: 'List of PostureIntegrations.' }),
            })
            .openapi({ required: [] }),
          example: {
            integrations: [
              {
                clientId: 'myclientid',
                cloudId: 'us-1',
                configUpdated: '2024-06-18T13:43:43.239839Z',
                id: 'pcBEPQVMpki7DEVEL',
                provider: 'falcon',
                status: {
                  error:
                    'oauth2: cannot fetch token: 401 Unauthorized\nResponse: {\n "meta": {\n  "query_time": 2.63e-7,\n  "powered_by": "crowdstrike-api-gateway",\n  "trace_id": "f36431bf-cda6-40c9-9afe-6d3db7c55026"\n },\n "errors": [\n  {\n   "code": 401,\n   "message": "access denied, authorization failed"\n  }\n ]\n}',
                  lastSync: '2024-06-18T08:43:43.777283-05:00',
                  matchedCount: 0,
                  possibleMatchedCount: 0,
                  providerHostCount: 0,
                },
              },
              {
                clientId: '93013672-b00c-4344-80ca-7ecf74f9dce1',
                cloudId: 'global',
                configUpdated: '2024-06-18T13:44:28.250168Z',
                id: 'p56wQiqrn7mfDEVEL',
                provider: 'intune',
                status: {
                  error:
                    "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
                  lastSync: '2024-06-18T08:44:33.872282-05:00',
                  matchedCount: 0,
                  possibleMatchedCount: 0,
                  providerHostCount: 0,
                },
                tenantId: 'd1ae389b-5207-43a2-afca-2de6b03ac7e3',
              },
              {
                clientId: '6cabf059-21c9-44d6-bbde-02898f7430dd',
                cloudId: 'mysubdomain.jamfcloud.com',
                configUpdated: '2024-06-18T13:44:56.333103Z',
                id: 'pFKyGf5YerWbDEVEL',
                provider: 'jamfpro',
              },
              {
                clientId: '',
                cloudId: 'mydomain.kandji.io',
                configUpdated: '2024-06-18T13:45:13.631878Z',
                id: 'ph4mxtePUR2LDEVEL',
                provider: 'kandji',
              },
              {
                clientId: '',
                cloudId: '',
                configUpdated: '2024-06-18T13:45:20.919656Z',
                id: 'pvvTj3FGQAh8DEVEL',
                provider: 'kolide',
                status: {
                  error: 'Kolide returned unexpected status code: 401 Unauthorized',
                  lastSync: '2024-06-18T08:45:23.74563-05:00',
                  matchedCount: 0,
                  possibleMatchedCount: 0,
                  providerHostCount: 0,
                },
              },
              {
                clientId: '',
                cloudId: 'mydomain.sentinelone.net',
                configUpdated: '2024-06-18T13:45:36.128461Z',
                id: 'pg9Wqc8sZW2TDEVEL',
                provider: 'sentinelone',
              },
            ],
          },
        },
      },
    },
    403: _403Response,
  },
})

export const postTailnetTailnetPostureIntegrationsRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/posture/integrations',
  tags: ['DevicePosture'],
  summary: 'Create a posture integration',
  description:
    'Create a posture integration, returning the resulting [PostureIntegration](#model/postureintegration).\n\nMust include `provider` and `clientSecret`.\n\nCurrently, only one integration for each provider is supported.\n\nOAuth Scope: `feature_settings`.\n',
  operationId: 'createPostureIntegration',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PostureIntegrationSchema,
          example: {
            provider: 'intune',
            cloudId: 'global',
            clientId: '93013672-b00c-4344-80ca-7ecf74f9dce1',
            tenantId: 'd1ae389b-5207-43a2-afca-2de6b03ac7e3',
            clientSecret: 'as32598d#@%asdf',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: PostureIntegrationSchema } },
    },
    403: _403Response,
    409: _409Response,
  },
})

export const getPostureIntegrationsIdRoute = createRoute({
  method: 'get',
  path: '/posture/integrations/{id}',
  tags: ['DevicePosture'],
  summary: 'Get a posture integration',
  description:
    'Gets the posture integration identified by `{id}`.\n\nOAuth Scope: `feature_settings:read`.\n',
  operationId: 'getPostureIntegration',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: PostureIntegrationSchema } },
    },
    404: _404Response,
  },
})

export const deletePostureIntegrationsIdRoute = createRoute({
  method: 'delete',
  path: '/posture/integrations/{id}',
  tags: ['DevicePosture'],
  summary: 'Delete a posture integration',
  description: 'Delete a specific posture integration.\n\nOAuth Scope: `feature_settings`.\n',
  operationId: 'deletePostureIntegration',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    403: _403Response,
    404: _404Response,
  },
})

export const patchPostureIntegrationsIdRoute = createRoute({
  method: 'patch',
  path: '/posture/integrations/{id}',
  tags: ['DevicePosture'],
  summary: 'Update a posture integration',
  description:
    'Updates the posture integration identified by `{id}`. You may omit the `clientSecret` from your request to retain the previously configured `clientSecret`.\n\nOAuth Scope: `feature_settings`.\n',
  operationId: 'updatePostureIntegration',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PostureIntegrationSchema,
          example: {
            cloudId: 'global',
            clientId: '93013672-b00c-4344-80ca-7ecf74f9dce1',
            tenantId: 'd1ae389b-5207-43a2-afca-2de6b03ac7e3',
            clientSecret: 'as32598d#@%asdf',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: PostureIntegrationSchema } },
    },
    403: _403Response,
    404: _404Response,
  },
})

export const getTailnetTailnetUsersRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/users',
  tags: ['Users'],
  summary: 'List users',
  description: 'List all users of a tailnet.\n\nOAuth Scope: `users:read`.\n',
  operationId: 'listUsers',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    query: z.object({
      type: z
        .enum(['member', 'shared', 'all'])
        .default('member')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Allows for filtering the output by user type.\n',
            required: false,
            schema: {
              type: 'string',
              enum: ['member', 'shared', 'all'],
              default: 'member',
              example: 'member',
            },
          },
          example: 'member',
        }),
      role: z
        .enum([
          'owner',
          'member',
          'admin',
          'it-admin',
          'network-admin',
          'billing-admin',
          'auditor',
          'all',
        ])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description:
              'Allows for filtering the output by user role. Learn more about [user roles](/docs/reference/user-roles).\n',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'owner',
                'member',
                'admin',
                'it-admin',
                'network-admin',
                'billing-admin',
                'auditor',
                'all',
              ],
              default: 'all',
              example: 'all',
            },
          },
          example: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({ users: z.array(UserSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Get a user',
  description: 'Retrieve details about the specified user.\n\nOAuth Scope: `users:read`.\n',
  operationId: 'getUser',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: UserSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postUsersUserIdRoleRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/role',
  tags: ['Users'],
  summary: 'Update user role',
  description:
    "Update the role for the specified user.\n\nLearn more about [user roles](/docs/reference/user-roles).\n\nOAuth Scope: `users`.\n\n> ⓘ User-based access tokens cannot update their own user's role.\n",
  operationId: 'updateUserRole',
  request: {
    params: z.object({ userId: UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role: z
                .enum([
                  'owner',
                  'member',
                  'admin',
                  'it-admin',
                  'network-admin',
                  'billing-admin',
                  'auditor',
                ])
                .exactOptional()
                .openapi({
                  example: 'member',
                  description:
                    'The role of the user. Learn more about [user roles](/docs/reference/user-roles).\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postUsersUserIdApproveRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/approve',
  tags: ['Users'],
  summary: 'Approve a user',
  description:
    "Approve a pending user's access to the tailnet.\nThis is a no-op if user approval has not been enabled for the tailnet, or if the user is already approved.\n\nUser approval can be managed using the [tailnet settings endpoints](#tag/tailnetsettings).\n\nLearn more about [user approval](/docs/features/access-control/user-approval) and [enabling user approval for your network](/docs/features/access-control/user-approval#enable-user-approval-for-your-network).\n\nOAuth Scope: `users`.\n\n> ⓘ User-based access tokens cannot approve their own user.\n",
  operationId: 'approveUser',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    402: _402Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postUsersUserIdSuspendRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/suspend',
  tags: ['Users'],
  summary: 'Suspend a user',
  description:
    'Suspends a user from their tailnet. Learn more about [suspending users](/docs/features/sharing/how-to/remove-team-members#suspending-users).\n\nOAuth Scope: `users`.\n\n> ⓘ User-based access tokens cannot suspend their own user.\n',
  operationId: 'suspendUser',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postUsersUserIdRestoreRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/restore',
  tags: ['Users'],
  summary: 'Restore a user',
  description:
    "Restores a suspended user's access to their tailnet. Learn more about [restoring users](/docs/features/sharing/how-to/remove-team-members#restoring-users).\n\nOAuth Scope: `users`.\n\n> ⓘ User-based access tokens cannot restore their own user.\n",
  operationId: 'restoreUser',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postUsersUserIdDeleteRoute = createRoute({
  method: 'post',
  path: '/users/{userId}/delete',
  tags: ['Users'],
  summary: 'Delete a user',
  description:
    'Delete a user from their tailnet. Learn more about [deleting users](/docs/features/sharing/how-to/remove-team-members#deleting-users).\n\nOAuth Scope: `users`.\n\n> ⓘ User-based access tokens cannot delete their own user.\n',
  operationId: 'deleteUser',
  request: { params: z.object({ userId: UserIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetContactsRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/contacts',
  tags: ['Contacts'],
  summary: 'Get contacts',
  description:
    "Retrieve the tailnet's current contacts.\n\nOAuth Scope: `account_settings:read`.\n",
  operationId: 'getContacts',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({
              account: ContactSchema.exactOptional(),
              support: ContactSchema.exactOptional(),
              security: ContactSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            account: { email: 'owner@example.com' },
            support: { email: 'support@example.com' },
            security: { email: 'security@example.com' },
          },
        },
      },
    },
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const patchTailnetTailnetContactsContactTypeRoute = createRoute({
  method: 'patch',
  path: '/tailnet/{tailnet}/contacts/{contactType}',
  tags: ['Contacts'],
  summary: 'Update contact',
  description:
    'Update the preferences for this type of contact. If the email address has changed, the system will send a verification email to confirm the change.\n\nOAuth Scope: `account_settings`.\n',
  operationId: 'updateContact',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, contactType: ContactTypeParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description: "The contact's email address.",
                  example: 'newuser@example.com',
                }),
            })
            .openapi({ required: ['email'] }),
          example: { email: 'newuser@example.com' },
        },
      },
    },
  },
  responses: {
    200: { description: 'Successful operation.' },
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetContactsContactTypeResendVerificationEmailRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/contacts/{contactType}/resend-verification-email',
  tags: ['Contacts'],
  summary: 'Resend verification email',
  description:
    'Resends the verification email for this contact, if and only if verification is still pending.\n\nOAuth Scope: `account_settings`.\n',
  operationId: 'resendContactVerificationEmail',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, contactType: ContactTypeParamsSchema }),
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetWebhooksRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhooks',
  description: 'List all webhooks for a tailnet.\n\nOAuth Scope: `webhooks:read`.\n',
  operationId: 'listWebhooks',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({ webhooks: z.array(WebhookSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetWebhooksRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  description: 'Create a webhook within a tailnet.\n\nOAuth Scope: `webhooks`.\n',
  operationId: 'createWebhook',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpointUrl: z
                .string()
                .openapi({
                  example: 'https://example.com/endpoint',
                  description:
                    'The endpoint that events are sent to from Tailscale via POST requests.\n',
                }),
              providerType: ProviderTypeSchema.exactOptional(),
              subscriptions: SubscriptionsSchema,
            })
            .openapi({ required: ['endpointUrl', 'subscriptions'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getWebhooksEndpointIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{endpointId}',
  tags: ['Webhooks'],
  summary: 'Get webhook',
  description: 'Retrieve a specific webhook.\n\nOAuth Scope: `webhooks:read`.\n',
  operationId: 'getWebhook',
  request: { params: z.object({ endpointId: EndpointIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const deleteWebhooksEndpointIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{endpointId}',
  tags: ['Webhooks'],
  summary: 'Delete webhook',
  description: 'Delete a specific webhook.\n\nOAuth Scope: `webhooks`.\n',
  operationId: 'deleteWebhook',
  request: { params: z.object({ endpointId: EndpointIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const patchWebhooksEndpointIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{endpointId}',
  tags: ['Webhooks'],
  summary: 'Update webhook',
  description: 'Update a specific webhook.\n\nOAuth Scope: `webhooks`.\n',
  operationId: 'updateWebhook',
  request: {
    params: z.object({ endpointId: EndpointIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ subscriptions: SubscriptionsSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postWebhooksEndpointIdTestRoute = createRoute({
  method: 'post',
  path: '/webhooks/{endpointId}/test',
  tags: ['Webhooks'],
  summary: 'Test a webhook',
  description:
    'Test a specific webhook by sending out a test event to the endpoint URL.\nThis endpoint queues the event which is sent out asynchronously.\n\nIf your webhook is configured correctly, within a few seconds your webhook endpoint should receive an event with type of "test".\n\nOAuth Scope: `webhooks`.\n',
  operationId: 'testWebhook',
  request: { params: z.object({ endpointId: EndpointIdParamsSchema }) },
  responses: {
    202: { description: 'Successfully queued test event.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postWebhooksEndpointIdRotateRoute = createRoute({
  method: 'post',
  path: '/webhooks/{endpointId}/rotate',
  tags: ['Webhooks'],
  summary: 'Rotate webhook secret',
  description:
    'Rotate and generate a new secret for a specific webhook.\n\nThis secret is used for generating the `Tailscale-Webhook-Signature` header in requests sent to the endpoint URL.\nLearn more about [verifying webhook event signatures](/docs/features/webhooks#verifying-an-event-signature).\n\nOAuth Scope: `webhooks`.\n',
  operationId: 'rotateWebhookSecret',
  request: { params: z.object({ endpointId: EndpointIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetSettingsRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/settings',
  tags: ['TailnetSettings'],
  summary: 'Get tailnet settings',
  description:
    'Retrieve the settings for a specific tailnet.\n\nOAuth Scope: `feature_settings:read` - required to view all settings except those governed by the below scopes.\n\nOAuth Scope: `logs:network:read` - required to view the `networkFlowLoggingOn` setting.\n\nOAuth Scope: `networking_settings:read` - required to view the `httpsCertificates` setting.\n\nOAuth Scope: `policy_file:read` - required to view the `aclsExternallyManagedOn` & `aclsExternalLink` settings.\n',
  operationId: 'getTailnetSettings',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: TailnetSettingsSchema } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
})

export const patchTailnetTailnetSettingsRoute = createRoute({
  method: 'patch',
  path: '/tailnet/{tailnet}/settings',
  tags: ['TailnetSettings'],
  summary: 'Update tailnet settings',
  description:
    'Update the settings for a specific tailnet.\n\nOAuth Scope: `feature_settings` - required to update all settings except those governed by the below scopes.\n\nOAuth Scope: `logs:network` - required to update the `networkFlowLoggingOn` setting.\n\nOAuth Scope: `networking_settings` - required to update the `httpsCertificates` setting.\n\nOAuth Scope: `policy_file` - required to update the `aclsExternallyManagedOn` & `aclsExternalLink` settings.\n',
  operationId: 'updateTailnetSettings',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: { content: { 'application/json': { schema: TailnetSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: TailnetSettingsSchema } },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetServicesRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/services',
  tags: ['Services'],
  summary: 'List all Services',
  description:
    'List all Services configured for the tailnet. This includes all Services in the "advertised"\ntab of the Services page in the Tailscale admin console.\n\nOAuth Scope: `services:read`.\n',
  operationId: 'listServices',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({ vipServices: z.array(VIPServiceInfoSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetServicesServiceNameRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/services/{serviceName}',
  tags: ['Services'],
  summary: 'Get a Service',
  description: 'Retrieve the details for the specified Service.\n\nOAuth Scope: `services:read`.\n',
  operationId: 'getService',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, serviceName: ServiceNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: VIPServiceInfoSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const putTailnetTailnetServicesServiceNameRoute = createRoute({
  method: 'put',
  path: '/tailnet/{tailnet}/services/{serviceName}',
  tags: ['Services'],
  summary: 'Update a Service',
  description:
    'Update or create the specified Service. If the Service does not exist, it will\ncreate a Service with the provided details. When creating a new Service, the name\nin the request body must match the serviceName path parameter. When updating an existing\nService, the path parameter is the current name of the Service, and the name in the request\nbody can be used to rename the Service.\n\nOAuth Scope: `services`.\n',
  operationId: 'updateService',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, serviceName: ServiceNameParamsSchema }),
    body: {
      description: 'The Service details to create or update.',
      content: { 'application/json': { schema: VIPServiceInfoPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: VIPServiceInfoSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const deleteTailnetTailnetServicesServiceNameRoute = createRoute({
  method: 'delete',
  path: '/tailnet/{tailnet}/services/{serviceName}',
  tags: ['Services'],
  summary: 'Delete a Service',
  description: 'Delete the specified Service from the tailnet.\n\nOAuth Scope: `services`.\n',
  operationId: 'deleteService',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, serviceName: ServiceNameParamsSchema }),
  },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getTailnetTailnetServicesServiceNameDevicesRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/services/{serviceName}/devices',
  tags: ['Services'],
  summary: 'List devices hosting a Service',
  description:
    'List all devices that are hosting the specified Service.\n\nOAuth Scope: `services`, `devices:core`.\n',
  operationId: 'listServiceHosts',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, serviceName: ServiceNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({ hosts: z.array(ServiceHostInfoSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/services/{serviceName}/device/{deviceId}/approved',
  tags: ['Services'],
  summary: 'Get approval status of Service on a device',
  description:
    'Retrieve the approval status of the specified Service on a specific device.\n\nOAuth Scope: `services`, `devices:core`.\n',
  operationId: 'getServiceDeviceApproval',
  request: {
    params: z.object({
      tailnet: TailnetParamsSchema,
      serviceName: ServiceNameParamsSchema,
      deviceId: DeviceIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: VIPServiceApprovalSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/services/{serviceName}/device/{deviceId}/approved',
  tags: ['Services'],
  summary: 'Update approval status of Service on a device',
  description:
    'Update the approval status of the specified Service on a specific device.\n\nOAuth Scope: `services`, `devices:core`.\n',
  operationId: 'updateServiceDeviceApproval',
  request: {
    params: z.object({
      tailnet: TailnetParamsSchema,
      serviceName: ServiceNameParamsSchema,
      deviceId: DeviceIdParamsSchema,
    }),
    body: {
      description: 'The approval status to set for the Service on the device.',
      content: {
        'application/json': {
          schema: z
            .object({
              approved: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether to approve or revoke approval for the Service on the device.\n',
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: VIPServiceApprovalSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
    504: _504Response,
  },
})

export const getTailnetTailnetOauthAppsRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/oauth-apps',
  tags: ['OAuthApps'],
  summary: 'List OAuth apps',
  description: 'List all OAuth apps for a tailnet.\n\nOAuth Scope: `oauth_apps:read`.\n',
  operationId: 'listOAuthApps',
  request: { params: z.object({ tailnet: TailnetParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: {
        'application/json': {
          schema: z
            .object({ oauthApps: z.array(OAuthAppSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postTailnetTailnetOauthAppsRoute = createRoute({
  method: 'post',
  path: '/tailnet/{tailnet}/oauth-apps',
  tags: ['OAuthApps'],
  summary: 'Create an OAuth app',
  description:
    'Create an OAuth app within a tailnet.\n\nThe generated client secret is returned only in this response and cannot be retrieved later, so be sure to record it.\n\nOAuth Scope: `oauth_apps`.  If you include `allowedNodeAttributes` in the request body, you must also have `devices:posture_attributes`.\n',
  operationId: 'createOAuthApp',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: NameSchema,
              description: DescriptionSchema.exactOptional(),
              redirectURIs: RedirectURIsSchema,
              scopes: ScopesSchema,
              allowedNodeAttributes: AllowedNodeAttributesSchema.exactOptional(),
            })
            .openapi({ required: ['name', 'redirectURIs', 'scopes'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: OAuthAppSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getTailnetTailnetOauthAppsAppIdRoute = createRoute({
  method: 'get',
  path: '/tailnet/{tailnet}/oauth-apps/{appId}',
  tags: ['OAuthApps'],
  summary: 'Get OAuth app',
  description: 'Retrieve a specific OAuth app.\n\nOAuth Scope: `oauth_apps:read`.\n',
  operationId: 'getOAuthApp',
  request: { params: z.object({ tailnet: TailnetParamsSchema, appId: AppIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: OAuthAppSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putTailnetTailnetOauthAppsAppIdRoute = createRoute({
  method: 'put',
  path: '/tailnet/{tailnet}/oauth-apps/{appId}',
  tags: ['OAuthApps'],
  summary: 'Update OAuth app',
  description:
    'Update a specific OAuth app.\n\nThe client secret is not regenerated and is not returned in this response.\n\nOAuth Scope: `oauth_apps`.\n',
  operationId: 'updateOAuthApp',
  request: {
    params: z.object({ tailnet: TailnetParamsSchema, appId: AppIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: NameSchema,
              description: DescriptionSchema.exactOptional(),
              redirectURIs: RedirectURIsSchema,
              scopes: ScopesSchema,
              allowedNodeAttributes: AllowedNodeAttributesSchema.exactOptional(),
            })
            .openapi({ required: ['name', 'redirectURIs', 'scopes'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: OAuthAppSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const deleteTailnetTailnetOauthAppsAppIdRoute = createRoute({
  method: 'delete',
  path: '/tailnet/{tailnet}/oauth-apps/{appId}',
  tags: ['OAuthApps'],
  summary: 'Delete OAuth app',
  description: 'Delete a specific OAuth app.\n\nOAuth Scope: `oauth_apps`.\n',
  operationId: 'deleteOAuthApp',
  request: { params: z.object({ tailnet: TailnetParamsSchema, appId: AppIdParamsSchema }) },
  responses: {
    200: { description: 'Successful operation.' },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getOrganizationsOrganizationTailnetsRoute = createRoute({
  method: 'get',
  path: '/organizations/{organization}/tailnets',
  tags: ['Organizations'],
  summary: 'List tailnets',
  description:
    'List all tailnets in the organization, including the original tailnet and any\n[API-only tailnets](https://tailscale.com/docs/features/tailnet-creation-api) created with the tailnet creation\nAPI.\n\nOAuth Scope: `tailnets:read`.\n',
  operationId: 'listOrganizationTailnets',
  request: {
    params: z.object({ organization: OrganizationParamsSchema }),
    query: z.object({
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 100 },
            description:
              'Maximum number of tailnets to return per page; defaults to the maximum of 100.',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'Opaque pagination cursor from a previous response.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: ListOrganizationTailnetsResponseSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postOrganizationsOrganizationTailnetsRoute = createRoute({
  method: 'post',
  path: '/organizations/{organization}/tailnets',
  tags: ['Organizations'],
  summary: 'Create a tailnet',
  description:
    'Create an [API-only tailnet](https://tailscale.com/docs/features/tailnet-creation-api) in the organization.\nAPI-only tailnets have no human users and do not appear in the admin console. Use them for applications and\ninfrastructure that manage tailnets entirely through the API.\n\nAll plans can create a maximum of 10 tailnets, including their original tailnet. If your use case requires\nmore than 10 tailnets, [contact sales](https://tailscale.com/contact/sales).\n\nThe response includes an OAuth client for the new tailnet. The client secret is returned only in this response\nand cannot be retrieved later, so be sure to record it.\n\nOAuth Scope: `tailnets`.\n',
  operationId: 'createOrganizationTailnet',
  request: {
    params: z.object({ organization: OrganizationParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateOrganizationTailnetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation.',
      content: { 'application/json': { schema: CreateOrganizationTailnetResponseSchema } },
    },
    400: _400Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
})
