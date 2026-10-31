import { createRoute, z } from '@hono/zod-openapi'

const PromotionSchema = z
  .object({
    credit_monthly_cap: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount available to spend per month.\n',
        example: '10.00',
        'x-linode-cli-display': 5,
      }),
    credit_remaining: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total amount of credit left for this promotion.\n',
        example: '50.00',
        'x-linode-cli-display': 3,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A detailed description of this promotion.\n',
        example:
          'Receive up to $10 off your services every month for 6 months! Unused credits will expire once this promotion period ends.',
      }),
    expire_dt: z
      .string()
      .exactOptional()
      .openapi({
        description: "When this promotion's credits expire.\n",
        example: '2018-01-31T23:59:59',
        'x-linode-cli-display': 2,
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The location of an image for this promotion.\n',
        example: 'https://linode.com/10_a_month_promotion.svg',
      }),
    service_type: z
      .enum([
        'all',
        'backup',
        'blockstorage',
        'db_mysql',
        'ip_v4',
        'linode',
        'linode_disk',
        'linode_memory',
        'longview',
        'managed',
        'nodebalancer',
        'objectstorage',
        'transfer_tx',
      ])
      .exactOptional()
      .openapi({
        description: 'The service to which this promotion applies.\n',
        example: 'all',
        'x-linode-cli-display': 1,
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short details of this promotion.\n',
        example: '$10 off your Linode a month!',
        'x-linode-cli-display': 10,
      }),
    this_month_credit_remaining: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount of credit left for this month for this promotion.\n',
        example: '10.00',
        'x-linode-cli-display': 4,
      }),
  })
  .openapi({
    description:
      'Promotions generally\noffer a set amount of credit that can be used toward your Linode\nservices, and the promotion expires after a specified date. As well,\na monthly cap on the promotional offer is set.\n\nSimply put, a promotion offers a certain amount of credit every\nmonth, until either the expiration date is passed, or until the total\npromotional credit is used, whichever comes first.\n',
    readOnly: true,
    required: [],
  })
  .openapi('Promotion')

const AccountSchema = z
  .object({
    active_promotions: z.array(PromotionSchema).exactOptional().openapi({ readOnly: true }),
    active_since: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The datetime of when the account was activated.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    address_1: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description: "First line of this Account's billing address.",
        example: '123 Main Street',
      }),
    address_2: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description: "Second line of this Account's billing address.",
        example: 'Suite A',
      }),
    balance: z
      .number()
      .exactOptional()
      .openapi({
        description: "This Account's balance, in US dollars.",
        example: 200,
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    balance_uninvoiced: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "This Account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.\n",
        example: 145,
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    billing_source: z
      .enum(['akamai', 'linode'])
      .exactOptional()
      .openapi({
        description:
          'The source of service charges for this Account, as determined by its relationship with Akamai.\nAccounts that are associated with Akamai-specific customers return a value of `akamai`.\nAll other Accounts return a value of `linode`.\n',
        example: 'akamai',
        readOnly: true,
      }),
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of capabilities your account supports.\n',
        example: ['Linodes', 'NodeBalancers', 'Block Storage', 'Object Storage'],
        readOnly: true,
      }),
    city: z
      .string()
      .max(24)
      .exactOptional()
      .openapi({
        description: "The city for this Account's billing address.",
        example: 'Philadelphia',
      }),
    company: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description: 'The company name associated with this Account.',
        example: 'Linode LLC',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: "The two-letter ISO 3166 country code of this Account's billing address.\n",
        example: 'US',
      }),
    credit_card: z
      .object({
        expiry: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The expiration month and year of the credit card.',
            example: '11/2022',
          }),
        last_four: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The last four digits of the credit card associated with this Account.\n',
            example: 1111,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Credit Card information associated with this Account.',
        readOnly: true,
        required: [],
      }),
    email: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description: 'The email address of the person associated with this Account.',
        example: 'john.smith@linode.com',
        'x-linode-cli-display': 3,
      }),
    euuid: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'An external unique identifier for this account.\n',
        example: 'E1AF5EEC-526F-487D-B317EBEB34C87D71',
        readOnly: true,
      }),
    first_name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The first name of the person associated with this Account.',
        example: 'John',
        'x-linode-cli-display': 1,
      }),
    last_name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The last name of the person associated with this Account.',
        example: 'Smith',
        'x-linode-cli-display': 2,
      }),
    phone: z
      .string()
      .max(32)
      .exactOptional()
      .openapi({
        description: 'The phone number associated with this Account.',
        example: '215-555-1212',
      }),
    state: z
      .string()
      .max(24)
      .exactOptional()
      .openapi({
        description:
          "If billing address is in the United States (US) or Canada (CA), only the two-letter ISO 3166 State or Province code are accepted. If entering a US military address, state abbreviations (AA, AE, AP) should be entered. If the address is outside the US or CA, this is the Province associated with the Account's billing address.\n",
        example: 'PA',
      }),
    tax_id: z
      .string()
      .max(25)
      .exactOptional()
      .openapi({
        description:
          'The tax identification number associated with this Account, for tax calculations in some countries. If you do not live in a country that collects tax, this should be an empty string (`""`).\n',
        example: 'ATU99999999',
      }),
    zip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The zip code of this Account's billing address. The following restrictions apply:\n\n- May only consist of letters, numbers, spaces, and hyphens.\n- Must not contain more than 9 letter or number characters.\n",
        example: '19102-1234',
      }),
  })
  .openapi({ description: 'Account object', required: [] })
  .openapi('Account')

const AccountSettingsSchema = z
  .object({
    backups_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.\n',
        example: true,
        'x-linode-cli-display': 4,
      }),
    longview_subscription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Longview Pro tier you are currently subscribed to. The value must be a [Longview Subscription](/docs/api/longview/#longview-subscriptions-list) ID or `null` for Longview Free.\n',
        example: 'longview-3',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    managed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.\n",
        example: true,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    network_helper: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables network helper across all users by default for new Linodes and Linode Configs.\n',
        example: false,
        'x-linode-cli-display': 1,
      }),
    object_storage: z
      .enum(['disabled', 'suspended', 'active'])
      .default('disabled')
      .exactOptional()
      .openapi({
        description:
          "A string describing the status of this account's Object Storage service enrollment.\n",
        example: 'active',
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
  })
  .openapi({ description: 'Account Settings object', required: [] })
  .openapi('AccountSettings')

const AuthorizedAppSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this app was authorized.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    expiry: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "When the app's access to your account expires. If `null`, the app's access must be revoked manually.\n",
        example: '2018-01-15T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This authorization's ID, used for revoking access.\n",
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The name of the application you've authorized.\n",
        example: 'example-app',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    scopes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access.\n',
        example: 'linodes:read_only',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    thumbnail_url: z
      .url()
      .exactOptional()
      .openapi({
        description: "The URL at which this app's thumbnail may be accessed.\n",
        example: null,
        readOnly: true,
      }),
    website: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The website where you can get more information about this app.\n',
        example: 'example.org',
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
  })
  .openapi({
    description: 'An application you have authorized access to your Account through OAuth.\n',
    required: [],
  })
  .openapi('AuthorizedApp')

const DiskSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Disk was created.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    filesystem: z
      .enum(['raw', 'swap', 'ext3', 'ext4', 'initrd'])
      .exactOptional()
      .openapi({
        description:
          'The Disk filesystem can be one of:\n\n  * raw - No filesystem, just a raw binary stream.\n  * swap - Linux swap area.\n  * ext3 - The ext3 journaling filesystem for Linux.\n  * ext4 - The ext4 journaling filesystem for Linux.\n  * initrd - initrd (uncompressed initrd, ext2, max 32 MB).\n',
        example: 'ext4',
        'x-linode-cli-display': 5,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "This Disk's ID which must be provided for all operations impacting this Disk.\n",
        example: 25674,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .min(1)
      .max(48)
      .exactOptional()
      .openapi({
        description: "The Disk's label is for display purposes only.\n",
        example: 'Debian 9 Disk',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    size: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The size of the Disk in MB.',
        example: 48640,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    status: z
      .enum(['ready', 'not ready', 'deleting'])
      .exactOptional()
      .openapi({
        description:
          "A brief description of this Disk's current state. This field may change without direct action from you, as a result of operations performed to the Disk or the Linode containing the Disk.\n",
        example: 'ready',
        readOnly: true,
        'x-linode-cli-color': { default_: 'yellow', 'not ready': 'red', ready: 'green' },
        'x-linode-cli-display': 3,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Disk was last updated.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Disk')

const BackupSchema = z
  .object({
    available: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this Backup is available for restoration.\n\nBackups undergoing maintenance are not available for restoration.\n',
        example: true,
        readOnly: true,
      }),
    configs: z
      .array(z.string().openapi({ example: 'My Debian 9 Config' }))
      .exactOptional()
      .openapi({
        description:
          'A list of the labels of the Configuration profiles that are part of the Backup.\n',
        readOnly: true,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date the Backup was taken.',
        example: '2018-01-15T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    disks: z
      .array(
        z
          .object({
            filesystem: z.lazy(() => DiskSchema).exactOptional(),
            label: z.string().exactOptional().openapi({ example: 'My Debian 9 Disk' }),
            size: z.int().exactOptional().openapi({ example: 9001 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'A list of the disks that are part of the Backup.\n',
        readOnly: true,
      }),
    finished: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date the Backup completed.',
        example: '2018-01-15T00:01:01',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Backup.',
        example: 123456,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A label for Backups that are of type `snapshot`.',
        example: 'Webserver-Backup-2018',
        'x-linode-cli-display': 5,
      }),
    status: z
      .enum([
        'paused',
        'pending',
        'running',
        'needsPostProcessing',
        'successful',
        'failed',
        'userAborted',
      ])
      .exactOptional()
      .openapi({
        description: 'The current state of a specific Backup.',
        example: 'successful',
        readOnly: true,
        'x-linode-cli-color': {
          default_: 'yellow',
          failed: 'red',
          successful: 'green',
          userAborted: 'f',
        },
        'x-linode-cli-display': 2,
      }),
    type: z
      .enum(['auto', 'snapshot'])
      .exactOptional()
      .openapi({
        description:
          'This indicates whether the Backup is an automatic Backup or manual snapshot taken by the User at a specific point in time.\n',
        example: 'snapshot',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date the Backup was most recently updated.',
        example: '2018-01-15T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An object representing a Backup or snapshot for a Linode with Backup service enabled.\n',
    required: [],
  })
  .openapi('Backup')

const CreditCardSchema = z
  .object({
    card_number: z
      .string()
      .min(14)
      .max(24)
      .openapi({
        description: 'Your credit card number. No spaces or dashes allowed.',
        example: 4111111111111111,
      }),
    cvv: z
      .string()
      .min(3)
      .max(4)
      .openapi({
        description:
          'CVV (Card Verification Value) of the credit card, typically found on the back of the card.\n',
        example: '123',
      }),
    expiry_month: z
      .int()
      .min(1)
      .max(12)
      .openapi({
        description:
          'A value from 1-12 representing the expiration month of your credit card.\n\n  * 1 = January\n  * 2 = February\n  * 3 = March\n  * Etc.\n',
        example: 12,
      }),
    expiry_year: z
      .int()
      .openapi({
        description:
          'A four-digit integer representing the expiration year of\nyour credit card.\n\nThe combination of `expiry_month` and `expiry_year`\nmust result in a month/year combination of the current month or in\nthe future. An expiration date set in the past is invalid.\n',
        example: 2020,
      }),
  })
  .openapi({
    description:
      'An object representing the credit card information you have on file with\nLinode to make Payments against your Account.\n',
    required: ['card_number', 'expiry_month', 'expiry_year', 'cvv'],
  })
  .openapi('CreditCard')

const CreditCardDataSchema = z
  .object({
    card_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of credit card.', example: 'Discover', readOnly: true }),
    expiry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The expiration month and year of the credit card.',
        example: '06/2022',
        readOnly: true,
      }),
    last_four: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last four digits of the credit card number.',
        example: '1234',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Credit card information.', required: [] })
  .openapi('CreditCardData')

const DatabaseSchema = z
  .object({
    allow_list: z
      .array(z.string().regex(/^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/))
      .exactOptional()
      .openapi({
        description:
          'A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.\n\nBy default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.\n\nIf `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n',
        example: ['203.0.113.1/32', '192.0.1.0/24'],
      }),
    cluster_size: z
      .union([z.literal(1), z.literal(3)])
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of Linode Instance nodes deployed to the Managed Database.\n\nChoosing 3 nodes creates a high availability cluster consisting of 1 primary node and 2 replica nodes.\n',
        example: 3,
        'x-linode-cli-display': 5,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Managed Database was created.',
        example: '2022-01-01T00:01:01',
        readOnly: true,
      }),
    encrypted: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the Managed Databases is encrypted.', example: false }),
    engine: z
      .enum(['mongodb', 'mysql', 'postgresql'])
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine type.',
        example: 'mysql',
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    hosts: z
      .object({
        primary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The primary host for the Managed Database.',
            example: 'lin-123-456-mysql-mysql-primary.servers.linodedb.net',
          }),
        secondary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The secondary/private network host for the Managed Database.\n\nA private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.\n\n**Note**: The secondary hostname is publicly viewable and accessible.\n',
            example: 'lin-123-456-mysql-primary-private.servers.linodedb.net',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The primary and secondary hosts for the Managed Database. These are assigned after provisioning is complete.',
        readOnly: true,
        required: [],
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'A unique ID that can be used to identify and reference the Managed Database.',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    instance_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Append this to `https://api.linode.com` to run commands for the Managed Database.\n',
        example: '/v4/databases/mysql/instances/123',
        readOnly: true,
      }),
    label: z
      .string()
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description: 'A unique, user-defined string referring to the Managed Database.',
        example: 'example-db',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The [Region](/docs/api/regions/) ID for the Managed Database.',
        example: 'us-east',
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    status: z
      .enum([
        'provisioning',
        'active',
        'suspending',
        'suspended',
        'resuming',
        'restoring',
        'failed',
        'degraded',
        'updating',
        'backing_up',
      ])
      .exactOptional()
      .openapi({
        description: 'The operating status of the Managed Database.',
        example: 'active',
        readOnly: true,
        'x-linode-cli-color': {
          active: 'green',
          default_: 'white',
          degraded: 'red',
          failed: 'red',
          provisioning: 'yellow',
          restoring: 'yellow',
          resuming: 'yellow',
          updating: 'yellow',
        },
        'x-linode-cli-display': 100,
        'x-linode-filterable': true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Linode Instance type used by the Managed Database for its nodes.',
        example: 'g6-dedicated-2',
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Managed Database was last updated.',
        example: '2022-01-01T00:01:01',
        readOnly: true,
      }),
    updates: z
      .object({
        day_of_week: z
          .int()
          .min(1)
          .max(7)
          .exactOptional()
          .openapi({
            description: 'The day to perform maintenance. 1=Monday, 2=Tuesday, etc.',
            example: 1,
          }),
        duration: z
          .int()
          .min(1)
          .max(3)
          .exactOptional()
          .openapi({ description: 'The maximum maintenance window time in hours.', example: 3 }),
        frequency: z
          .enum(['weekly', 'monthly'])
          .default('weekly')
          .exactOptional()
          .openapi({
            description: 'Whether maintenance occurs on a weekly or monthly basis.',
            example: 'weekly',
          }),
        hour_of_day: z
          .int()
          .min(0)
          .max(23)
          .exactOptional()
          .openapi({ description: 'The hour to begin maintenance based in UTC time.', example: 0 }),
        week_of_month: z
          .int()
          .min(1)
          .max(4)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The week of the month to perform `monthly` frequency updates. Defaults to `null`.\n\n* Required for `monthly` frequency updates.\n\n* Must be `null` for `weekly` frequency updates.\n',
            example: null,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Configuration settings for automated patch update maintenance for the Managed Database.',
        required: [],
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine version.',
        example: '8.0.26',
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
  })
  .openapi({
    description:
      'A general Managed Database instance object containing properties that are identical for all database types.',
    required: [],
  })
  .openapi('Database')

const DatabaseBackupSchema = z
  .object({
    created: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A time value given in a combined date and time format that represents when the database backup was created.',
        example: '2022-01-01T00:01:01',
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the database backup object.',
        example: 123,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({
        description:
          "The database backup's label, for display purposes only.\n\nMust include only ASCII letters or numbers.\n",
        example: 'Scheduled - 02/04/22 11:11 UTC-XcCRmI',
        'x-linode-cli-display': 2,
      }),
    type: z
      .enum(['snapshot', 'auto'])
      .exactOptional()
      .openapi({
        description: 'The type of database backup, determined by how the backup was created.',
        example: 'auto',
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'A database backup object.', required: [] })
  .openapi('DatabaseBackup')

const DatabaseBackupSnapshotSchema = z
  .object({
    label: z
      .string()
      .min(1)
      .max(30)
      .openapi({
        description:
          'The label for the Database snapshot backup.\n\n* Must include only ASCII letters or numbers.\n* Must be unique among other backup labels for this Database.\n',
        example: 'db-snapshot',
      }),
    target: z
      .enum(['primary', 'secondary'])
      .default('primary')
      .exactOptional()
      .openapi({
        description:
          'The Database cluster target.\nIf the Database is a high availability cluster, choosing `secondary` creates a snapshot backup of a replica node.\n',
        example: 'primary',
      }),
  })
  .openapi({
    description: 'Managed Database request object for snapshot backup.',
    required: ['label'],
  })
  .openapi('DatabaseBackupSnapshot')

const DatabaseCredentialsSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The randomly-generated root password for the Managed Database instance.',
        example: 's3cur3P@ssw0rd',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The root username for the Managed Database instance.',
        example: 'linroot',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
  })
  .openapi({ description: 'Managed Database object for database credentials.', required: [] })
  .openapi('DatabaseCredentials')

const DatabaseEngineSchema = z
  .object({
    engine: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine type.',
        example: 'mysql',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine ID in engine/version format.',
        example: 'mysql/8.0.26',
        'x-linode-cli-display': 1,
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine version.',
        example: '8.0.26',
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Managed Database engine object.', required: [] })
  .openapi('DatabaseEngine')

const DatabaseMongoDBSchema = z
  .object({
    allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
    cluster_size: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 5 }),
    compression_type: z
      .enum(['none', 'snappy', 'zlip'])
      .default('none')
      .exactOptional()
      .openapi({
        description:
          'The type of data compression for this Database.\n\nSnappy has a lower comparative compression ratio and resource consumption rate.\n\nZlip has a higher comparative compression ratio and resource consumption rate.\n',
        example: 'none',
        'x-linode-cli-display': 99,
      }),
    created: z.lazy(() => DatabaseSchema).exactOptional(),
    encrypted: z.lazy(() => DatabaseSchema).exactOptional(),
    engine: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine type.',
        example: 'mongodb',
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    hosts: z
      .object({
        primary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The primary host for the Managed Database.',
            example: 'lin-0000-0000.servers.linodedb.net',
          }),
        secondary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The secondary/private network host for the Managed Database.\n\nA private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.\n\n**Note**: The secondary hostname is publicly viewable and accessible.\n',
            example: null,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The primary and secondary hosts for the Managed Database. These are assigned after provisioning is complete.',
        readOnly: true,
        required: [],
      }),
    id: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 1 }),
    label: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 2 }),
    peers: z
      .array(
        z
          .string()
          .openapi({
            description:
              'The peer address of a Managed MongoDB Database cluster node. Each node in a cluster has its own unique peer address.\n',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'An array of peer addresses for this Database.\n',
        example: [
          'lin-0000-0000.servers.linodedb.net',
          'lin-0000-0001.servers.linodedb.net',
          'lin-0000-0002.servers.linodedb.net',
        ],
      }),
    port: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The access port for this Managed Database.',
        example: 27017,
        'x-linode-cli-display': 98,
      }),
    region: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 3 }),
    replica_set: z
      .string()
      .max(64)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Label for configuring a MongoDB [replica set](https://www.mongodb.com/docs/manual/replication/). Choose the same label on multiple Databases to include them in the same replica set.\n\nIf `null`, the Database is not included in any replica set.\n',
        example: null,
      }),
    ssl_connection: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to require SSL credentials to establish a connection to the Managed Database.\n\nUse the **Managed MongoDB Database Credentials View** ([GET /databases/mongodb/instances/{instanceId}/credentials](/docs/api/databases/#managed-mongodb-database-credentials-view)) command for access information.\n',
        example: true,
      }),
    status: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({
        'x-linode-cli-color': {
          active: 'green',
          default_: 'white',
          degraded: 'red',
          failed: 'red',
          provisioning: 'yellow',
          restoring: 'yellow',
          resuming: 'yellow',
        },
        'x-linode-cli-display': 100,
      }),
    storage_engine: z
      .enum(['mmapv1', 'wiredtiger'])
      .default('wiredtiger')
      .exactOptional()
      .openapi({
        description:
          'The type of storage engine for this Database.\n\n**Note:** MMAPV1 is not available for MongoDB versions 4.0 and above.\n',
        example: 'wiredtiger',
      }),
    type: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 4 }),
    updated: z.lazy(() => DatabaseSchema).exactOptional(),
    updates: z.lazy(() => DatabaseSchema).exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine version.',
        example: '4.4.10',
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Managed MongoDB Databases object.', required: [] })
  .openapi('DatabaseMongoDB')

const DatabaseMongoDBRequestSchema = z
  .object({
    allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
    cluster_size: z.lazy(() => DatabaseMongoDBSchema).exactOptional(),
    compression_type: z.lazy(() => DatabaseMongoDBSchema).exactOptional(),
    encrypted: z.lazy(() => DatabaseSchema).exactOptional(),
    engine: z
      .string()
      .openapi({
        description: 'The Managed Database engine in engine/version format.',
        example: 'mongodb/4.4.10',
      }),
    label: z.lazy(() => DatabaseMongoDBSchema),
    region: z.lazy(() => DatabaseMongoDBSchema),
    replica_set: z.lazy(() => DatabaseMongoDBSchema).exactOptional(),
    ssl_connection: z.lazy(() => DatabaseMongoDBSchema).exactOptional(),
    storage_engine: z.lazy(() => DatabaseMongoDBSchema).exactOptional(),
    type: z.lazy(() => DatabaseMongoDBSchema),
  })
  .openapi({
    description: 'Managed MongoDB Database request object.',
    required: ['label', 'type', 'engine', 'region'],
  })
  .openapi('DatabaseMongoDBRequest')

const DatabaseMySQLSchema = z
  .object({
    allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
    cluster_size: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 5 }),
    created: z.lazy(() => DatabaseSchema).exactOptional(),
    encrypted: z.lazy(() => DatabaseSchema).exactOptional(),
    engine: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine type.',
        example: 'mysql',
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    hosts: z.lazy(() => DatabaseSchema).exactOptional(),
    id: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 1 }),
    label: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 2 }),
    port: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The access port for this Managed Database.',
        example: 3306,
        'x-linode-cli-display': 98,
      }),
    region: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 3 }),
    replication_type: z
      .enum(['none', 'asynch', 'semi_synch'])
      .exactOptional()
      .openapi({
        description:
          'The replication method used for the Managed Database.\n\nDefaults to `none` for a single cluster and `semi_synch` for a high availability cluster.\n\nMust be `none` for a single node cluster.\n\nMust be `asynch` or `semi_synch` for a high availability cluster.\n',
        example: 'semi_synch',
        'x-linode-cli-display': 99,
      }),
    ssl_connection: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to require SSL credentials to establish a connection to the Managed Database.\n\nUse the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command for access information.\n',
        example: true,
      }),
    status: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({
        'x-linode-cli-color': {
          active: 'green',
          default_: 'white',
          degraded: 'red',
          failed: 'red',
          provisioning: 'yellow',
          restoring: 'yellow',
          resuming: 'yellow',
        },
        'x-linode-cli-display': 100,
      }),
    type: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 4 }),
    updated: z.lazy(() => DatabaseSchema).exactOptional(),
    updates: z.lazy(() => DatabaseSchema).exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine version.',
        example: '8.0.26',
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Managed MySQL Databases object.', required: [] })
  .openapi('DatabaseMySQL')

const DatabaseMySQLRequestSchema = z
  .object({
    allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
    cluster_size: z.lazy(() => DatabaseMySQLSchema).exactOptional(),
    encrypted: z.lazy(() => DatabaseSchema).exactOptional(),
    engine: z
      .string()
      .openapi({
        description: 'The Managed Database engine in engine/version format.',
        example: 'mysql/8.0.26',
      }),
    label: z.lazy(() => DatabaseMySQLSchema),
    region: z.lazy(() => DatabaseMySQLSchema),
    replication_type: z.lazy(() => DatabaseMySQLSchema).exactOptional(),
    ssl_connection: z.lazy(() => DatabaseMySQLSchema).exactOptional(),
    type: z.lazy(() => DatabaseMySQLSchema),
  })
  .openapi({
    description: 'Managed MySQL Database request object.',
    required: ['label', 'type', 'engine', 'region'],
  })
  .openapi('DatabaseMySQLRequest')

const DatabasePostgreSQLSchema = z
  .object({
    allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
    cluster_size: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 5 }),
    created: z.lazy(() => DatabaseSchema).exactOptional(),
    encrypted: z.lazy(() => DatabaseSchema).exactOptional(),
    engine: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine type.',
        example: 'postgresql',
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    hosts: z
      .object({
        primary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The primary host for the Managed Database.',
            example: 'lin-0000-000-pgsql-primary.servers.linodedb.net',
          }),
        secondary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The secondary/private network host for the Managed Database.\n\nA private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.\n\n**Note**: The secondary hostname is publicly viewable and accessible.\n',
            example: 'lin-0000-000-pgsql-primary-private.servers.linodedb.net',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The primary and secondary hosts for the Managed Database. These are assigned after provisioning is complete.',
        readOnly: true,
        required: [],
      }),
    id: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 1 }),
    label: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 2 }),
    port: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The access port for this Managed Database.',
        example: 3306,
        'x-linode-cli-display': 98,
      }),
    region: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 3 }),
    replication_commit_type: z
      .enum(['on', 'local', 'remote_write', 'remote_apply', 'off'])
      .default('local')
      .exactOptional()
      .openapi({
        description:
          'The synchronization level of the replicating server.\n\nMust be `local` or `off` for the `asynch` replication type.\n\nMust be `on`, `remote_write`, or `remote_apply` for the `semi_synch` replication type.\n',
        example: 'local',
        'x-linode-cli-display': 100,
      }),
    replication_type: z
      .enum(['none', 'asynch', 'semi_synch'])
      .exactOptional()
      .openapi({
        description:
          'The replication method used for the Managed Database.\n\nDefaults to `none` for a single cluster and `semi_synch` for a high availability cluster.\n\nMust be `none` for a single node cluster.\n\nMust be `asynch` or `semi_synch` for a high availability cluster.\n',
        example: 'semi_synch',
        'x-linode-cli-display': 99,
      }),
    ssl_connection: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to require SSL credentials to establish a connection to the Managed Database.\n\nUse the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command for access information.\n',
        example: true,
      }),
    status: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({
        'x-linode-cli-color': {
          active: 'green',
          default_: 'white',
          degraded: 'red',
          failed: 'red',
          provisioning: 'yellow',
          restoring: 'yellow',
          resuming: 'yellow',
        },
        'x-linode-cli-display': 100,
      }),
    type: z
      .lazy(() => DatabaseSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 4 }),
    updated: z.lazy(() => DatabaseSchema).exactOptional(),
    updates: z.lazy(() => DatabaseSchema).exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Managed Database engine version.',
        example: '13.2',
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Managed PostgreSQL Databases object.', required: [] })
  .openapi('DatabasePostgreSQL')

const DatabasePostgreSQLRequestSchema = z
  .object({
    allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
    cluster_size: z.lazy(() => DatabasePostgreSQLSchema).exactOptional(),
    encrypted: z.lazy(() => DatabaseSchema).exactOptional(),
    engine: z
      .string()
      .openapi({
        description: 'The Managed Database engine in engine/version format.',
        example: 'postgresql/13.2',
      }),
    label: z.lazy(() => DatabasePostgreSQLSchema),
    region: z.lazy(() => DatabasePostgreSQLSchema),
    replication_commit_type: z.lazy(() => DatabasePostgreSQLSchema).exactOptional(),
    replication_type: z.lazy(() => DatabasePostgreSQLSchema).exactOptional(),
    ssl_connection: z.lazy(() => DatabasePostgreSQLSchema).exactOptional(),
    type: z.lazy(() => DatabasePostgreSQLSchema),
  })
  .openapi({
    description: 'Managed PostgreSQL Database request object.',
    required: ['label', 'type', 'engine', 'region'],
  })
  .openapi('DatabasePostgreSQLRequest')

const DatabaseSSLSchema = z
  .object({
    ca_certificate: z
      .base64()
      .exactOptional()
      .openapi({
        description: 'The base64-encoded SSL CA certificate for the Managed Database instance.',
        example: 'LS0tLS1CRUdJ...==',
        'x-linode-cli-display': 1,
      }),
  })
  .openapi({ description: 'Managed Database SSL object.', required: [] })
  .openapi('DatabaseSSL')

const DatabaseTypeEngineSchema = z
  .object({
    price: z
      .object({
        hourly: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Cost (in US dollars) per hour for this subscription tier.',
            example: 0.03,
          }),
        monthly: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Maximum cost (in US dollars) per month for this subscription tier.',
            example: 20,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cost in US dollars, broken down into hourly and monthly charges.',
        required: [],
      }),
    quantity: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The number of nodes for the Managed Database cluster for this subscription tier.',
        example: 1,
      }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseTypeEngine')

const DatabaseTypeSchema = z
  .object({
    class: z
      .string()
      .exactOptional()
      .openapi({ description: 'The compute class category.', example: 'nanode' }),
    deprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this Database plan type has been deprecated and is no longer available.',
        example: false,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    disk: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The amount of disk space set aside for Databases of this plan type. The value is represented in megabytes.',
        example: 25600,
        'x-linode-cli-display': 4,
      }),
    engines: z
      .object({
        mongodb: z
          .array(DatabaseTypeEngineSchema)
          .exactOptional()
          .openapi({ description: 'Pricing details for MongoDB Managed Databases.' }),
        mysql: z
          .array(DatabaseTypeEngineSchema)
          .exactOptional()
          .openapi({ description: 'Pricing details for MySQL Managed Databases.' }),
        postgresql: z
          .array(DatabaseTypeEngineSchema)
          .exactOptional()
          .openapi({ description: 'Pricing details for PostgreSQL Managed Databases.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID representing the Managed Database node plan type.',
        example: 'g6-nanode-1',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable string that describes each plan type. For display purposes only.',
        example: 'DBaaS - Nanode 1GB',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    memory: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The amount of RAM allocated to Database created of this plan type. The value is represented in megabytes.',
        example: 1024,
        'x-linode-cli-display': 3,
      }),
    vcpus: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The integer of number CPUs allocated to databases of this plan type.',
        example: 1,
        'x-linode-cli-display': 5,
      }),
  })
  .openapi({ description: 'Managed Database plan type object.', required: [] })
  .openapi('DatabaseType')

const DeviceSchema = z
  .object({
    disk_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The Disk ID, or `null` if a Volume is assigned to this slot.',
        example: 124458,
      }),
    volume_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The Volume ID, or `null` if a Disk is assigned to this slot.',
        example: null,
      }),
  })
  .openapi({
    description:
      'Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.\nDevices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.\n',
    required: [],
  })
  .openapi('Device')

const DevicesSchema = z
  .object({
    sda: DeviceSchema.exactOptional(),
    sdb: DeviceSchema.exactOptional(),
    sdc: DeviceSchema.exactOptional(),
    sdd: DeviceSchema.exactOptional(),
    sde: DeviceSchema.exactOptional(),
    sdf: DeviceSchema.exactOptional(),
    sdg: DeviceSchema.exactOptional(),
    sdh: DeviceSchema.exactOptional(),
  })
  .openapi({
    description:
      "A dictionary of device disks to use as a device map in a Linode's configuration profile.\n* An empty device disk dictionary or a dictionary with empty values for device slots is allowed.\n* If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.\n",
    required: [],
  })
  .openapi('Devices')

const DiskRequestSchema = z
  .object({
    authorized_keys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of public SSH keys that will be automatically appended\nto the root user's `~/.ssh/authorized_keys` file when deploying from an Image.\n",
        example: ['ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer'],
        writeOnly: true,
      }),
    authorized_users: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of usernames. If the usernames have associated SSH keys, the keys will be appended to the root users `~/.ssh/authorized_keys` file automatically when deploying from an Image.\n',
        example: ['myUser', 'secondaryUser'],
        writeOnly: true,
      }),
    filesystem: z.lazy(() => DiskSchema).exactOptional(),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An Image ID to deploy the Linode Disk from.\n\nAccess the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view\nall available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating\na disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Access the User's\nGrant Update ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint to\nadjust permissions for an Account Image.\n",
        example: 'linode/debian9',
      }),
    label: z.lazy(() => DiskSchema).exactOptional(),
    root_pass: z
      .string()
      .min(7)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          "This sets the root user's password on a newly-created Linode Disk when deploying from an Image.\n\n* **Required** when creating a Linode Disk from an Image, including when using a StackScript.\n\n* Must meet a password strength score requirement that is calculated internally by the API.\nIf the strength requirement is not met, you will receive a `Password does not meet strength requirement` error.\n",
        example: 'aComplexP@ssword',
        writeOnly: true,
      }),
    size: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The size of the Disk in MB.\n\nImages require a minimum size. Access the Image View ([GET /images/{imageID}](/docs/api/images/#image-view)) endpoint to view its size.\n',
        example: 48640,
        'x-linode-filterable': true,
      }),
    stackscript_data: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'This field is required only if the StackScript being deployed requires input data from the User for successful completion. See [User Defined Fields (UDFs)](/docs/guides/writing-scripts-for-use-with-linode-stackscripts-a-tutorial/#user-defined-fields-udfs) for more details.\n\nThis field is required to be valid JSON.\n\nTotal length cannot exceed 65,535 characters.\n',
        example: { gh_username: 'linode' },
      }),
    stackscript_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A StackScript ID that will cause the referenced StackScript to be run during\ndeployment of this Linode. A compatible `image` is required to use a\nStackScript. To get a list of available StackScript and their permitted Images\nsee [/stackscripts](/docs/api/stackscripts/#stackscripts-list).\nThis field cannot be used when deploying from a Backup or a Private Image.\n',
        example: 10079,
      }),
  })
  .openapi({ description: 'Disk object request.', required: [] })
  .openapi('DiskRequest')

const DomainSchema = z
  .object({
    axfr_ips: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of IPs that may perform a zone transfer for this Domain. The total combined length of all data within this array cannot exceed 1000 characters.\n\n**Note**: This is potentially dangerous, and should be set to an empty list unless you intend to use it.\n',
        example: [],
      }),
    description: z
      .string()
      .min(1)
      .max(253)
      .exactOptional()
      .openapi({
        description: 'A description for this Domain. This is for display purposes only.\n',
        example: null,
      }),
    domain: z
      .string()
      .regex(
        /\A(\*\.)?([a-zA-Z0-9-_]{1,63}\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\Z/,
      )
      .min(1)
      .max(253)
      .exactOptional()
      .openapi({
        description:
          "The domain this Domain represents. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
        example: 'example.org',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    expire_sec: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The amount of time in seconds that may pass before this Domain is no longer\nauthoritative.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 1209600.\n',
        example: 300,
      }),
    group: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The group this Domain belongs to.  This is for display purposes only.\n',
        example: null,
        'x-linode-filterable': true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Domain's unique ID",
        example: 1234,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    master_ips: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IP addresses representing the master DNS for this Domain. At least one value is required for `type` slave Domains. The total combined length of all data within this array cannot exceed 1000 characters.\n',
        example: [],
      }),
    refresh_sec: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The amount of time in seconds before this Domain should be refreshed.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 14400.\n',
        example: 300,
      }),
    retry_sec: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The interval, in seconds, at which a failed refresh should be retried.\n\n* Valid values are\n0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n* Any other value is rounded up to the nearest valid value.\n\n* A value of 0 is equivalent to the default value of 14400.\n',
        example: 300,
      }),
    soa_email: z
      .email()
      .exactOptional()
      .openapi({
        description:
          'Start of Authority email address. This is required for `type` master Domains.\n',
        example: 'admin@example.org',
        'x-linode-cli-display': 5,
      }),
    status: z
      .enum(['disabled', 'active'])
      .default('active')
      .exactOptional()
      .openapi({
        description: 'Used to control whether this Domain is currently being rendered.\n',
        example: 'active',
        'x-linode-cli-color': {
          active: 'green',
          default_: 'red',
          disabled: 'yellow',
          edit_mode: 'yellow',
        },
        'x-linode-cli-display': 4,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of tags applied to this object.  Tags are for organizational purposes only.\n',
        example: ['example tag', 'another example'],
        'x-linode-filterable': true,
      }),
    ttl_sec: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          '"Time to Live" - the amount of time in seconds that this Domain\'s records may be cached by resolvers or other domain servers.\n* Valid values are 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n* Any other value is rounded up to the nearest valid value.\n* A value of 0 is equivalent to the default value of 86400.\n',
        example: 300,
      }),
    type: z
      .enum(['master', 'slave'])
      .exactOptional()
      .openapi({
        description:
          'Whether this Domain represents the authoritative source of information for the domain it describes ("master"), or whether it is a read-only copy of a master ("slave").\n',
        example: 'master',
        'x-linode-cli-display': 3,
      }),
  })
  .openapi({
    description:
      "A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.\n",
    required: [],
  })
  .openapi('Domain')

const DomainRecordSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Domain Record was created.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Record's unique ID.",
        example: 123456,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    name: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The name of this Record. For requests, this property\'s actual usage and whether it is required depends\non the type of record this represents:\n\n`A` and `AAAA`: The hostname or FQDN of the Record.\n\n`NS`: The subdomain, if any, to use with the Domain of the Record. Wildcard NS records (`*`) are not supported.\n\n`MX`: The mail subdomain. For example, `sub` for the address `user@sub.example.com` under the `example.com`\nDomain. Must be an empty string (`""`) for a Null MX Record.\n\n`CNAME`: The hostname. Must be unique. Required.\n\n`TXT`: The hostname.\n\n`SRV`: Unused. Use the `service` property to set the service name for this record.\n\n`CAA`: The subdomain. Omit or enter an empty string (`""`) to apply to the entire Domain.\n\n`PTR`: See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](/docs/guides/configure-rdns/).\n',
        example: 'test',
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    port: z
      .int()
      .min(0)
      .max(65535)
      .exactOptional()
      .openapi({
        description:
          'The port this Record points to. Only valid and required for SRV record requests.\n',
        example: 80,
      }),
    priority: z
      .int()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The priority of the target host for this Record. Lower values are preferred. Only valid for\nMX and SRV record requests. Required for SRV record requests.\n\nDefaults to `0` for MX record requests. Must be `0` for Null MX records.\n',
        example: 50,
        'x-linode-cli-display': 6,
      }),
    protocol: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The protocol this Record's service communicates with. An underscore (`_`) is prepended automatically to the submitted value for this property. Only valid for SRV record requests.\n",
        example: null,
      }),
    service: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the service. An underscore (`_`) is prepended and a period (`.`) is appended automatically to the submitted value for this property. Only valid and required for SRV record requests.\n',
        example: null,
      }),
    tag: z
      .enum(['issue', 'issuewild', 'iodef'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The tag portion of a CAA record. Only valid and required for CAA record requests.\n',
        example: null,
        'x-linode-filterable': true,
      }),
    target: z
      .string()
      .max(65535)
      .exactOptional()
      .openapi({
        description:
          'The target for this Record. For requests, this property\'s actual usage and whether it is required depends\non the type of record this represents:\n\n`A` and `AAAA`: The IP address. Use `[remote_addr]` to submit the IPv4 address of the request. Required.\n\n`NS`: The name server. Must be a valid domain. Required.\n\n`MX`: The mail server. Must be a valid domain unless creating a Null MX Record. To create a\n[Null MX Record](https://datatracker.ietf.org/doc/html/rfc7505), first\n[remove](/docs/api/domains/#domain-record-delete) any additional MX records, create an MX record with empty strings\n(`""`) for the `target` and `name`. If a Domain has a Null MX record, new MX records cannot be created. Required.\n\n`CNAME`: The alias. Must be a valid domain. Required.\n\n`TXT`: The value. Required.\n\n`SRV`: The target domain or subdomain. If a subdomain is entered, it is automatically used with the Domain.\nTo configure for a different domain, enter a valid FQDN. For example, the value `www` with a Domain for\n`example.com` results in a target set to `www.example.com`, whereas the value `sample.com` results in a\ntarget set to `sample.com`. Required.\n\n`CAA`: The value. For `issue` or `issuewild` tags, the domain of your certificate issuer. For the `iodef`\ntag, a contact or submission URL (domain, http, https, or mailto). Requirements depend on the tag for this record:\n  * `issue`: The domain of your certificate issuer. Must be a valid domain.\n  * `issuewild`: Must begin with `*`.\n  * `iodef`: Must be either (1) a valid domain, (2) a valid domain prepended with `http://` or `https://`, or (3) a valid email address prepended with `mailto:`.\n\n`PTR`: Required. See our guide on how to [Configure Your Linode for Reverse DNS\n(rDNS)](/docs/guides/configure-rdns/).\n\nWith the exception of A, AAAA, and CAA records, this field accepts a trailing period.\n',
        example: '192.0.2.0',
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    ttl_sec: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '"Time to Live" - the amount of time in seconds that this Domain\'s records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.\n',
        example: 604800,
        'x-linode-cli-display': 5,
      }),
    type: z
      .enum(['A', 'AAAA', 'NS', 'MX', 'CNAME', 'TXT', 'SRV', 'PTR', 'CAA'])
      .exactOptional()
      .openapi({
        description:
          'The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address. For more information, see the guides on [DNS Record Types](/docs/products/networking/dns-manager/guides/#dns-record-types).\n',
        example: 'A',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Domain Record was last updated.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    weight: z
      .int()
      .min(0)
      .max(65535)
      .exactOptional()
      .openapi({
        description:
          'The relative weight of this Record used in the case of identical priority. Higher values are preferred. Only valid and required for SRV record requests.\n',
        example: 50,
        'x-linode-cli-display': 7,
      }),
  })
  .openapi({ description: 'A single record on a Domain.\n', required: [] })
  .openapi('DomainRecord')

const EntityTransferSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this transfer was created.\n',
        example: '2021-02-11T16:37:03',
      }),
    entities: z
      .object({
        linodes: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array containing the IDs of each of the Linodes included in this transfer.\n',
            example: [111, 222],
            'x-linode-cli-display': 5,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'A collection of the entities to include in this transfer request, separated by type.\n',
        required: [],
      }),
    expiry: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When this transfer expires. Transfers will automatically expire 24 hours after creation.\n',
        example: '2021-02-12T16:37:03',
        'x-linode-cli-display': 3,
      }),
    is_sender: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the requesting account created this transfer.\n',
        example: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    status: z
      .enum(['accepted', 'cancelled', 'completed', 'failed', 'pending', 'stale'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transfer request.\n\n`accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete.\n\n`cancelled`: The transfer has been cancelled by the sender.\n\n`completed`: The transfer has completed successfully.\n\n`failed`: The transfer has failed after initiation.\n\n`pending`: The transfer is ready to be accepted.\n\n`stale`: The transfer has exceeded its expiration date. It can no longer be accepted or cancelled.\n',
        example: 'pending',
        'x-linode-cli-color': {
          accepted: 'yellow',
          cancelled: 'red',
          completed: 'green',
          default_: 'white',
          failed: 'red',
          pending: 'yellow',
          stale: 'red',
        },
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    token: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The token used to identify and accept or cancel this transfer.\n',
        example: '123E4567-E89B-12D3-A456-426614174000',
        'x-linode-cli-display': 1,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this transfer was last updated.\n',
        example: '2021-02-11T16:37:03',
      }),
  })
  .openapi({ description: 'An object representing an Entity Transfer.\n', required: [] })
  .openapi('EntityTransfer')

const ErrorObjectSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field in the request that caused this error. This may be a path, separated by periods in the case of nested fields. In some cases this may come back as "null" if the error is not specific to any single element of the request.\n',
        example: 'fieldname',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'What happened to cause this error. In most cases, this can be fixed immediately by changing the data you sent in the request, but in some cases you will be instructed to [open a Support Ticket](/docs/api/support/#support-ticket-open) or perform some other action before you can complete the request successfully.\n',
        example: 'fieldname must be a valid value',
      }),
  })
  .openapi({
    description:
      'An object for describing a single error that occurred during the processing of a request.\n',
    required: [],
  })
  .openapi('ErrorObject')

const EventSchema = z
  .object({
    action: z
      .enum([
        'account_update',
        'account_settings_update',
        'backups_enable',
        'backups_cancel',
        'backups_restore',
        'community_question_reply',
        'community_like',
        'credit_card_updated',
        'disk_create',
        'disk_delete',
        'disk_update',
        'disk_duplicate',
        'disk_imagize',
        'disk_resize',
        'dns_record_create',
        'dns_record_delete',
        'dns_record_update',
        'dns_zone_create',
        'dns_zone_delete',
        'dns_zone_import',
        'dns_zone_update',
        'entity_transfer_accept',
        'entity_transfer_cancel',
        'entity_transfer_create',
        'entity_transfer_fail',
        'entity_transfer_stale',
        'firewall_create',
        'firewall_delete',
        'firewall_disable',
        'firewall_enable',
        'firewall_update',
        'firewall_device_add',
        'firewall_device_remove',
        'host_reboot',
        'image_delete',
        'image_update',
        'image_upload',
        'ipaddress_update',
        'lassie_reboot',
        'lish_boot',
        'linode_addip',
        'linode_boot',
        'linode_clone',
        'linode_create',
        'linode_delete',
        'linode_update',
        'linode_deleteip',
        'linode_migrate',
        'linode_migrate_datacenter',
        'linode_migrate_datacenter_create',
        'linode_mutate',
        'linode_mutate_create',
        'linode_reboot',
        'linode_rebuild',
        'linode_resize',
        'linode_resize_create',
        'linode_shutdown',
        'linode_snapshot',
        'linode_config_create',
        'linode_config_delete',
        'linode_config_update',
        'lke_node_create',
        'longviewclient_create',
        'longviewclient_delete',
        'longviewclient_update',
        'managed_disabled',
        'managed_enabled',
        'managed_service_create',
        'managed_service_delete',
        'nodebalancer_create',
        'nodebalancer_delete',
        'nodebalancer_update',
        'nodebalancer_config_create',
        'nodebalancer_config_delete',
        'nodebalancer_config_update',
        'nodebalancer_node_create',
        'nodebalancer_node_delete',
        'nodebalancer_node_update',
        'oauth_client_create',
        'oauth_client_delete',
        'oauth_client_secret_reset',
        'oauth_client_update',
        'password_reset',
        'payment_method_add',
        'payment_submitted',
        'profile_update',
        'stackscript_create',
        'stackscript_delete',
        'stackscript_update',
        'stackscript_publicize',
        'stackscript_revise',
        'tag_create',
        'tag_delete',
        'tfa_disabled',
        'tfa_enabled',
        'ticket_attachment_upload',
        'ticket_create',
        'ticket_update',
        'token_create',
        'token_delete',
        'token_update',
        'user_create',
        'user_update',
        'user_delete',
        'user_ssh_key_add',
        'user_ssh_key_delete',
        'user_ssh_key_update',
        'vlan_attach',
        'vlan_detach',
        'volume_attach',
        'volume_clone',
        'volume_create',
        'volume_delete',
        'volume_update',
        'volume_detach',
        'volume_resize',
      ])
      .exactOptional()
      .openapi({
        description: 'The action that caused this Event. New actions may be added in the future.\n',
        example: 'ticket_create',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Event was created.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    duration: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total duration in seconds that it takes for the Event to complete.\n',
        example: 300.56,
        readOnly: true,
        'x-linode-cli-display': 7,
      }),
    entity: z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The unique ID for an Event's entity.\n\n\nSome Event entities do not have IDs associated with them, so they\nwill not be returned when filtering by ID. These Events include:\n  * `account`\n  * `profile`\n\nEntities for some Events are assigned the ID of the Linode they correspond to.\nWhen filtering by ID for these Events, use the corresponding Linode's ID.\nThese Events include:\n  * `disks`\n  * `backups`\n\n\nTag Events use a tag's name for the entity ID field. When filtering by ID\nfor tag Events, supply the name of the tag.\n",
            example: 11111,
            'x-linode-filterable': true,
          }),
        label: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The current label of this object. The label may reflect changes that occur with this Event.\n',
            example: 'Problem booting my Linode',
            'x-linode-cli-display': 5,
          }),
        type: z
          .enum([
            'account',
            'backups',
            'community',
            'disks',
            'domain',
            'entity_transfer',
            'firewall',
            'image',
            'ipaddress',
            'linode',
            'longview',
            'managed_service',
            'nodebalancer',
            'oauth_client',
            'profile',
            'stackscript',
            'tag',
            'ticket',
            'token',
            'user',
            'user_ssh_key',
            'volume',
          ])
          .exactOptional()
          .openapi({
            description: 'The type of entity that is being referenced by the Event.\n',
            example: 'ticket',
            readOnly: true,
            'x-linode-filterable': true,
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.\n',
            example: '/v4/support/tickets/11111',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "Detailed information about the Event's entity, including ID, type, label, and URL used to access it.\n",
        readOnly: true,
        required: [],
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Event.',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
        'x-linode-filterable': true,
      }),
    message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Provides additional information about the event. Additional information may include, but is not limited to, a more detailed representation of events which can help diagnose non-obvious failures.\n',
        example: 'None',
        'x-linode-cli-display': 9,
      }),
    percent_complete: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A percentage estimating the amount of time remaining for an Event.\nReturns `null` for notification events.\n',
        example: null,
        readOnly: true,
      }),
    rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The rate of completion of the Event. Only some Events will return rate; for example, migration and resize Events.\n',
        example: null,
        readOnly: true,
      }),
    read: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If this Event has been read.', example: true, readOnly: true }),
    secondary_entity: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The ID of the object that is the secondary entity.\n',
            example: 'linode/debian9',
          }),
        label: z
          .string()
          .exactOptional()
          .openapi({ description: 'The label of this object.\n', example: 'linode1234' }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The type of entity that is being referenced by the Event.\n',
            example: 'linode',
            readOnly: true,
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.\n',
            example: '/v4/linode/instances/1234',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "Detailed information about the Event's secondary entity, which provides additional information\nfor events such as, but not limited to, `linode_boot`, `linode_reboot`, `linode_create`, and `linode_clone` Event actions.\n",
        readOnly: true,
        required: [],
      }),
    seen: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If this Event has been seen.', example: true, readOnly: true }),
    status: z
      .enum(['failed', 'finished', 'notification', 'scheduled', 'started'])
      .exactOptional()
      .openapi({
        description: 'The current status of this Event.',
        readOnly: true,
        'x-linode-cli-color': {
          default_: 'white',
          failed: 'red',
          finished: 'green',
          started: 'yellow',
        },
        'x-linode-cli-display': 8,
      }),
    time_remaining: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The estimated time remaining until the completion of this Event. This value is only returned for some in-progress migration events. For all other in-progress events, the `percent_complete` attribute will indicate about how much more work is to be done.\n',
        example: null,
        readOnly: true,
      }),
    username: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The username of the User who caused the Event.\n',
        example: 'exampleUser',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({
    description:
      'A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.\nThe Events returned depends on your grants.\n',
    required: [],
  })
  .openapi('Event')

const FirewallRuleConfigSchema = z
  .object({
    action: z
      .enum(['ACCEPT', 'DROP'])
      .exactOptional()
      .openapi({
        description:
          "Controls whether traffic is accepted or dropped by this rule. Overrides the Firewall's `inbound_policy` if this is an inbound rule, or the `outbound_policy` if this is an outbound rule.\n",
        example: 'ACCEPT',
      }),
    addresses: z
      .object({
        ipv4: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'A list of IPv4 addresses or networks. Must be in IP/mask format.',
            example: ['192.0.2.0/24'],
          }),
        ipv6: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'A list of IPv6 addresses or networks. Must be in IP/mask format.',
            example: ['2001:DB8::/32'],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.\n',
        required: [],
      }),
    description: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Used to describe this rule. For display purposes only.\n',
        example: 'An example firewall rule description.',
      }),
    label: z
      .string()
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description: 'Used to identify this rule. For display purposes only.\n',
        example: 'firewallrule123',
      }),
    ports: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the port or ports on which traffic will be allowed:\n\n- The string may be a single port, a range of ports, or a comma-separated list of single ports and port ranges. A space is permitted following each comma.\n- A range of ports is inclusive of the start and end values for the range. The end value of the range must be greater than the start value.\n- Ports must be within 1 and 65535, and may not contain any leading zeroes. For example, port "080" is not allowed.\n- Ports may not be specified if a rule\'s protocol is `ICMP` or `IPENCAP`.\n- At least one port must be specified if a rule\'s protocol is `TCP` or `UDP`.\n- The ports string can have up to 15 *pieces*, where a single port is treated as one piece, and a port range is treated as two pieces. For example, the string "22-24, 80, 443" has four pieces.\n',
        example: '22-24, 80, 443',
      }),
    protocol: z
      .enum(['TCP', 'UDP', 'ICMP', 'IPENCAP'])
      .exactOptional()
      .openapi({ description: 'The type of network traffic to allow.\n', example: 'TCP' }),
  })
  .openapi({
    description:
      "One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.\n",
    required: [],
  })
  .openapi('FirewallRuleConfig')

const FirewallSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Firewall was created.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "The Firewall's unique ID.\n",
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
        'x-linode-filterable': true,
      }),
    label: z
      .string()
      .regex(/^[a-zA-Z]((?!--|__|..)[a-zA-Z0-9-_.])+$/)
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description:
          "The Firewall's label, for display purposes only.\n\nFirewall labels have the following constraints:\n\n  * Must begin and end with an alphanumeric character.\n  * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).\n  * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.\n  * Must be between 3 and 32 characters.\n  * Must be unique.\n",
        example: 'firewall123',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    rules: z
      .object({
        inbound: z
          .array(FirewallRuleConfigSchema)
          .exactOptional()
          .openapi({
            description: 'The inbound rules for the firewall, as a JSON array.\n',
            'x-linode-cli-format': 'json',
          }),
        inbound_policy: z
          .enum(['ACCEPT', 'DROP'])
          .exactOptional()
          .openapi({
            description:
              'The default behavior for inbound traffic. This setting can be overridden by [updating](/docs/api/networking/#firewall-rules-update) the `inbound.action` property of the Firewall Rule.\n',
            example: 'DROP',
          }),
        outbound: z
          .array(FirewallRuleConfigSchema)
          .exactOptional()
          .openapi({
            description: 'The outbound rules for the firewall, as a JSON array.\n',
            'x-linode-cli-format': 'json',
          }),
        outbound_policy: z
          .enum(['ACCEPT', 'DROP'])
          .exactOptional()
          .openapi({
            description:
              'The default behavior for outbound traffic. This setting can be overridden by [updating](/docs/api/networking/#firewall-rules-update) the `outbound.action` property of the Firewall Rule.\n',
            example: 'DROP',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The inbound and outbound access rules to apply to the Firewall.\n\nA Firewall may have up to 25 rules across its inbound and outbound rulesets.\n',
        required: [],
      }),
    status: z
      .enum(['enabled', 'disabled', 'deleted'])
      .exactOptional()
      .openapi({
        description:
          "The status of this Firewall.\n\n  * When a Firewall is first created its status is `enabled`.\n  * Use the [Update Firewall](/docs/api/networking/#firewall-update) endpoint to set a Firewall's status to `enabled` or `disabled`.\n  * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.\n",
        example: 'enabled',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of tags applied to this object. Tags are for organizational purposes only.\n',
        example: ['example tag', 'another example'],
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Firewall was last updated.\n',
        example: '2018-01-02T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
  })
  .openapi({
    description:
      'A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.\n',
    required: [],
  })
  .openapi('Firewall')

const FirewallDevicesSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Device was created.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    entity: z
      .object({
        id: z.int().exactOptional().openapi({ description: "The entity's ID", example: 123 }),
        label: z
          .string()
          .exactOptional()
          .openapi({ description: "The entity's label.", example: 'my-linode', readOnly: true }),
        type: z
          .literal('linode')
          .exactOptional()
          .openapi({ description: "The entity's type.", example: 'linode' }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            description: 'The URL you can use to access this entity.\n',
            example: '/v4/linode/instances/123',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The Linode service that this Firewall has been applied to.\n',
        readOnly: true,
        required: [],
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "The Device's unique ID\n",
        example: 123,
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Device was last updated.\n',
        example: '2018-01-02T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
  })
  .openapi({
    description:
      'Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.\n',
    required: [],
  })
  .openapi('FirewallDevices')

const GooglePayDataSchema = z
  .object({
    card_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of credit card.', example: 'Discover', readOnly: true }),
    expiry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The expiration month and year of the credit card.',
        example: '06/2022',
        readOnly: true,
      }),
    last_four: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last four digits of the credit card number.',
        example: '1234',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Google Pay information.', required: [] })
  .openapi('GooglePayData')

const GrantSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the entity this grant applies to.\n', example: 123 }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current label of the entity this grant applies to, for display purposes.\n',
        example: 'example-entity',
        readOnly: true,
      }),
    permissions: z
      .enum(['read_only', 'read_write'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The level of access this User has to this entity.  If null, this User has no access.\n',
        example: 'read_only',
      }),
  })
  .openapi({
    description:
      'Represents the level of access a restricted User has to a specific resource on the Account.\n',
    required: [],
  })
  .openapi('Grant')

const GrantsResponseSchema = z
  .object({
    database: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description: 'The grants this User has for each Database that is owned by this Account.\n',
      }),
    domain: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description: 'The grants this User has for each Domain that is owned by this Account.\n',
      }),
    global: z
      .object({
        account_access: z
          .enum(['read_only', 'read_write'])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The level of access this User has to Account-level actions, like billing information. A restricted User will never be able to manage users.\n',
            example: 'read_only',
          }),
        add_databases: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'if true, this User may add Managed Databases.', example: true }),
        add_domains: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may add Domains.', example: true }),
        add_firewalls: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may add Firewalls.', example: true }),
        add_images: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may add Images.', example: true }),
        add_linodes: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may create Linodes.', example: true }),
        add_longview: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, this User may create Longview clients and view the current plan.',
            example: true,
          }),
        add_nodebalancers: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may add NodeBalancers.', example: true }),
        add_stackscripts: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may add StackScripts.', example: true }),
        add_volumes: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, this User may add Volumes.', example: true }),
        cancel_account: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If true, this User may cancel the entire Account.',
            example: false,
          }),
        longview_subscription: z
          .boolean()
          .exactOptional()
          .openapi({
            description: "If true, this User may manage the Account's Longview subscription.",
            example: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A structure containing the Account-level grants a User has.\n',
        required: [],
      }),
    image: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description: 'The grants this User has for each Image that is owned by this Account.\n',
      }),
    linode: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description: 'The grants this User has for each Linode that is owned by this Account.\n',
      }),
    longview: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description:
          'The grants this User has for each Longview Client that is owned by this Account.\n',
      }),
    nodebalancer: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description:
          'The grants this User has for each NodeBalancer that is owned by this Account.\n',
      }),
    stackscript: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description:
          'The grants this User has for each StackScript that is owned by this Account.\n',
      }),
    volume: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({
        description:
          'The grants this User has for each Block Storage Volume that is owned by this Account.\n',
      }),
  })
  .openapi({
    description:
      'A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.\n',
    required: [],
  })
  .openapi('GrantsResponse')

const IPAddressSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IP address.\n',
        example: '97.107.143.141',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    gateway: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The default gateway for this address.\n',
        example: '97.107.143.1',
        readOnly: true,
      }),
    linode_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Linode this address currently belongs to. For IPv4 addresses, this is by default the Linode that this address was assigned to on creation, and these addresses my be moved using the [/networking/ipv4/assign](/docs/api/networking/#ips-to-linodes-assign) endpoint. For SLAAC and link-local addresses, this value may not be changed.\n',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    prefix: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of bits set in the subnet mask.\n',
        example: 24,
        readOnly: true,
      }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this is a public or private IP address.\n',
        example: true,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    rdns: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.\n',
        example: 'test.example.org',
        'x-linode-cli-display': 4,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Region this IP address resides in.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    subnet_mask: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The mask that separates host bits from network bits for this address.\n',
        example: '255.255.255.0',
        readOnly: true,
      }),
    type: z
      .enum(['ipv4', 'ipv6', 'ipv6/pool', 'ipv6/range'])
      .exactOptional()
      .openapi({
        description: 'The type of address this is.\n',
        example: 'ipv4',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({
    description: "An IP address that exists in Linode's system, either IPv4 or IPv6.\n",
    required: [],
  })
  .openapi('IPAddress')

const IPAddressPrivateSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private IPv4 address.\n',
        example: '192.168.133.234',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    gateway: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default gateway for this address.\n',
        example: null,
        readOnly: true,
      }),
    linode_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Linode this address currently belongs to.\n',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    prefix: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of bits set in the subnet mask.\n',
        example: 17,
        readOnly: true,
      }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this is a public or private IP address.\n',
        example: false,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    rdns: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reverse DNS assigned to this address.\n',
        example: null,
        'x-linode-cli-display': 4,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Region this address resides in.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    subnet_mask: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The mask that separates host bits from network bits for this address.\n',
        example: '255.255.128.0',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of address this is.\n',
        example: 'ipv4',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({
    description: "A private IPv4 address that exists in Linode's system.\n",
    required: [],
  })
  .openapi('IPAddressPrivate')

const IPAddressV6LinkLocalSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IPv6 link-local address.\n',
        example: 'fe80::f03c:91ff:fe24:3a2f',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    gateway: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default gateway for this address.\n',
        example: 'fe80::1',
        readOnly: true,
      }),
    linode_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Linode this address currently belongs to.\n',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    prefix: z
      .int()
      .exactOptional()
      .openapi({ description: 'The network prefix.\n', example: 64, readOnly: true }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this is a public or private IP address.\n',
        example: false,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    rdns: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reverse DNS assigned to this address.\n',
        example: null,
        'x-linode-cli-display': 4,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Region this address resides in.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    subnet_mask: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subnet mask.\n',
        example: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of address this is.\n',
        example: 'ipv6',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({
    description: "A link-local IPv6 address that exists in Linode's system,.\n",
    required: [],
  })
  .openapi('IPAddressV6LinkLocal')

const IPAddressV6SlaacSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The address.\n',
        example: '2600:3c03::f03c:91ff:fe24:3a2f',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    gateway: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default gateway for this address.\n',
        example: 'fe80::1',
        readOnly: true,
      }),
    linode_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Linode this address currently belongs to.\n',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    prefix: z
      .int()
      .exactOptional()
      .openapi({ description: 'The network prefix.\n', example: 64, readOnly: true }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this is a public or private IP address.\n',
        example: true,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    rdns: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reverse DNS assigned to this address.\n',
        example: null,
        'x-linode-cli-display': 4,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Region this address resides in.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    subnet_mask: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subnet mask.\n',
        example: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of address this is.\n',
        example: 'ipv6',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({ description: "A SLAAC IPv6 address that exists in Linode's system.\n", required: [] })
  .openapi('IPAddressV6Slaac')

const IPAddressesAssignRequestSchema = z
  .object({
    assignments: z
      .array(
        z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The IPv4 address or IPv6 range for this assignment.\n* Must be an IPv4 address or an IPv6 range you can access in the Region specified.\n* IPv6 ranges must include a prefix length of `/56` or `/64`, for example: `2001:db8:3c4d:15::/64`.\n* Assignment of an IPv6 range to a Linode updates the route target of the range to the assigned Linode's SLAAC address.\n* May be a public or private address.\n",
                example: '192.0.2.1',
              }),
            linode_id: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  "The ID of the Linode to assign this address to. The IP's previous Linode will lose this address, and must end up with at least one public address and no more than one private address once all assignments have been made.\n",
                example: 123,
              }),
          })
          .openapi({ required: [] }),
      )
      .openapi({
        description:
          'The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed.\n',
        required: ['address', 'linode_id'],
      }),
    region: z
      .string()
      .openapi({
        description:
          'The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.\n',
        example: 'us-east',
      }),
  })
  .openapi({
    description: 'Request object for IP Addresses Assign (POST /networking/ips/assign).',
    required: ['region', 'assignments'],
  })
  .openapi('IPAddressesAssignRequest')

const IPAddressesShareRequestSchema = z
  .object({
    ips: z
      .array(z.string())
      .openapi({
        description:
          'A list of secondary Linode IPs to share with the primary Linode.\n* Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)\n* Can include both private and public IPv4 addresses.\n* You must have access to all of these addresses and they must be in the same Region as the primary Linode.\n* Enter an empty array to remove all shared IP addresses.\n',
        example: ['192.0.2.1', '2001:db8:3c4d:15::'],
      }),
    linode_id: z
      .int()
      .openapi({
        description: 'The ID of the primary Linode that the addresses will be shared with.\n',
        example: 123,
      }),
  })
  .openapi({
    description: 'A request object IP Addresses Share (POST /networking/ips/share)',
    required: ['linode_id', 'ips'],
  })
  .openapi('IPAddressesShareRequest')

const IPv6PoolSchema = z
  .object({
    prefix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The prefix length of the address, denoting how many addresses can be assigned from this pool calculated as 2 <sup>128-prefix</sup>.\n',
        example: 124,
        'x-linode-cli-display': 2,
      }),
    range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IPv6 range of addresses in this pool.\n',
        example: '2600:3c01::2:5000:0',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The region for this pool of IPv6 addresses.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    route_target: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The last address in this block of IPv6 addresses.\n',
        example: '2600:3c01::2:5000:f',
      }),
  })
  .openapi({ description: 'An object representing an IPv6 pool.\n', required: [] })
  .openapi('IPv6Pool')

const IPv6RangeSchema = z
  .object({
    prefix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The prefix length of the address, denoting how many addresses can be assigned from this range calculated as 2 <sup>128-prefix</sup>.\n',
        example: 64,
        'x-linode-cli-display': 2,
      }),
    range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IPv6 range of addresses in this pool.\n',
        example: '2600:3c01::',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The region for this range of IPv6 addresses.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    route_target: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The last address in this block of IPv6 addresses.\n',
        example: '2600:3c01::ffff:ffff:ffff:ffff',
      }),
  })
  .openapi({ description: 'An object representing an IPv6 range.\n', required: [] })
  .openapi('IPv6Range')

const IPv6RangeBGPSchema = z
  .object({
    is_bgp: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this IPv6 range is shared.\n',
        example: false,
        readOnly: true,
      }),
    linodes: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'A list of Linodes targeted by this IPv6 range. Includes Linodes with IP sharing.\n',
        example: [123],
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    prefix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The prefix length of the address, denoting how many addresses can be assigned from this range calculated as 2 <sup>128-prefix</sup>.\n',
        example: 64,
        'x-linode-cli-display': 2,
      }),
    range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IPv6 range of addresses in this pool.\n',
        example: '2600:3c01::',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The region for this range of IPv6 addresses.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
  })
  .openapi({ description: 'An object representing an IPv6 range.\n', required: [] })
  .openapi('IPv6RangeBGP')

const ImageSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Image was created.',
        example: '2021-08-14T22:44:02',
        readOnly: true,
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the User who created this Image, or "linode" for public Images.\n',
        example: 'linode',
        readOnly: true,
      }),
    deprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this Image is deprecated. Will only be true for deprecated public Images.\n',
        example: false,
        readOnly: true,
        'x-linode-filterable': true,
      }),
    description: z
      .string()
      .min(1)
      .max(65000)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A detailed description of this Image.',
        example: 'Example Image description.',
        'x-linode-cli-color': { None: 'black', default_: 'white' },
        'x-linode-cli-display': 4,
      }),
    eol: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date of the public Image's planned end of life. `None` for private Images.\n",
        example: '2026-07-01T04:00:00',
        readOnly: true,
      }),
    expiry: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only Images created automatically from a deleted Linode (type=automatic) will expire.\n',
        example: null,
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Image.',
        example: 'linode/debian11',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    is_public: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the Image is a public distribution image. False if Image is private Account-specific Image.',
        example: true,
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short description of the Image.\n',
        example: 'Debian 11',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    size: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The minimum size this Image needs to deploy. Size is in MB.\n',
        example: 2500,
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
    status: z
      .enum(['creating', 'pending_upload', 'available'])
      .exactOptional()
      .openapi({
        description:
          'The current status of this Image.\n\nOnly Images in an "available" status can be deployed. Images in a "creating" status are being created from a Linode Disk, and will become "available" shortly. Images in a "pending_upload" status are waiting for data to be [uploaded](/docs/api/images/#image-upload), and become "available" after the upload and processing are complete.\n\nThe "+order_by" and "+order" operators are not available for [filtering](/docs/api/#filtering-and-sorting) on this key.\n',
        example: 'available',
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
    type: z
      .enum(['manual', 'automatic'])
      .exactOptional()
      .openapi({
        description:
          'How the Image was created.\n\n"Manual" Images can be created at any time.\n\n"Automatic" Images are created automatically from a deleted Linode.\n',
        example: 'manual',
        readOnly: true,
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Image was last updated.',
        example: '2021-08-14T22:44:02',
        readOnly: true,
      }),
    vendor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The upstream distribution vendor. `None` for private Images.\n',
        example: 'Debian',
        readOnly: true,
        'x-linode-cli-color': { None: 'black', default_: 'white' },
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Image object', required: [] })
  .openapi('Image')

const InvoiceSchema = z
  .object({
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Invoice was generated.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "The Invoice's unique ID.",
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The Invoice's display label.",
        example: 'Invoice',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    subtotal: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of the Invoice before taxes in US Dollars.',
        example: 120.25,
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    tax: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of tax levied on the Invoice in US Dollars.',
        example: 12.25,
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
    tax_summary: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The source of this tax subtotal.',
                example: 'PA STATE TAX',
              }),
            tax: z
              .number()
              .exactOptional()
              .openapi({
                description: 'The amount of tax subtotal attributable to this source.',
                example: 12.25,
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The amount of tax broken down into subtotals by source.',
        readOnly: true,
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of the Invoice after taxes in US Dollars.',
        example: 132.5,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
  })
  .openapi({ description: 'Account Invoice object', required: [] })
  .openapi('Invoice')

const InvoiceItemSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The price, in US dollars, of the Invoice Item. Equal to the unit price multiplied by quantity.',
        example: 20.2,
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    from: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date the Invoice Item started, based on month.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The Invoice Item's display label.",
        example: 'Linode 123',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    quantity: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The quantity of this Item for the specified Invoice.',
        example: 4,
        readOnly: true,
      }),
    tax: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of tax levied on this Item in US Dollars.',
        example: 1.25,
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
    to: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date the Invoice Item ended, based on month.',
        example: '2018-01-31T11:59:59',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The price of this Item after taxes in US Dollars.',
        example: 21.45,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    type: z
      .enum(['hourly', 'misc'])
      .exactOptional()
      .openapi({
        description: 'The type of service, ether `hourly` or `misc`.',
        example: 'hourly',
        readOnly: true,
      }),
    unit_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The monthly service fee in US Dollars for this Item.',
        example: 5.05,
        readOnly: true,
      }),
  })
  .openapi({ description: 'An InvoiceItem object.', required: [] })
  .openapi('InvoiceItem')

const KernelSchema = z
  .object({
    architecture: z
      .enum(['x86_64', 'i386'])
      .exactOptional()
      .openapi({
        description: 'The architecture of this Kernel.',
        example: 'x86_64',
        readOnly: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    built: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date on which this Kernel was built.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    deprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this Kernel is marked as deprecated, this field has a value of true; otherwise, this field is false.',
        example: false,
        readOnly: true,
        'x-linode-filterable': true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Kernel.',
        example: 'linode/latest-64bit',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    kvm: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this Kernel is suitable for KVM Linodes.',
        example: true,
        readOnly: true,
        'x-linode-filterable': true,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The friendly name of this Kernel.',
        example: 'Latest 64 bit (4.15.7-x86_64-linode102)',
        readOnly: true,
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    pvops: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this Kernel is suitable for paravirtualized operations.',
        example: false,
        readOnly: true,
        'x-linode-filterable': true,
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Linux Kernel version.',
        example: '4.15.7',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    xen: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this Kernel is suitable for Xen Linodes.',
        example: false,
        readOnly: true,
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Linux kernel object', required: [] })
  .openapi('Kernel')

const LKEClusterSchema = z
  .object({
    control_plane: z
      .object({
        high_availability: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.\n',
            example: true,
            'x-linode-cli-display': 5,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components. Enabling High Avaialability for LKE is an **irreversible** change.\n',
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Kubernetes cluster was created.',
        example: '2019-09-12T21:25:30Z',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Kubernetes cluster's unique ID.",
        example: 1234,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    k8s_version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version will be deployed.\n',
        example: '1.25',
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    label: z
      .string()
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({
        description:
          'This Kubernetes cluster\'s unique label for display purposes only.\nLabels have the following constraints:\n\n  * UTF-8 characters will be returned by the API using escape\n    sequences of their Unicode code points. For example, the\n    Japanese character *か* is 3 bytes in UTF-8 (`0xE382AB`). Its\n    Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this\n    character and the API will return it as the escape sequence\n    using six 1 byte characters which represent 2 bytes of Unicode\n    code point (`"\\u30ab"`).\n  * 4 byte UTF-8 characters are not supported.\n  * If the label is entirely composed of UTF-8 characters, the API\n    response will return the code points using up to 193 1 byte\n    characters.\n',
        example: 'lkecluster12345',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: "This Kubernetes cluster's location.",
        example: 'us-central',
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.\n',
        example: ['ecomm', 'blogs'],
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Kubernetes cluster was updated.',
        example: '2019-09-13T21:24:16Z',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Kubernetes cluster.', required: [] })
  .openapi('LKECluster')

const LKENodeStatusSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The Node's ID.\n", example: '123456' }),
    instance_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Linode's ID. When no Linode is currently provisioned for this Node, this will be null.\n",
        example: 123458,
      }),
    status: z
      .enum(['ready', 'not_ready'])
      .exactOptional()
      .openapi({
        description: "The Node's status as it pertains to being a Kubernetes node.\n",
        example: 'ready',
      }),
  })
  .openapi({
    description: 'Status information for a Node which is a member of a Kubernetes cluster.\n',
    readOnly: true,
    required: [],
  })
  .openapi('LKENodeStatus')

const LKENodePoolSchema = z
  .object({
    autoscaler: z
      .object({
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether autoscaling is enabled for this Node Pool. Defaults to `false`.',
            example: true,
          }),
        max: z
          .int()
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              "The maximum number of nodes to autoscale to. Defaults to the Node Pool's `count`.",
            example: 12,
          }),
        min: z
          .int()
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              "The minimum number of nodes to autoscale to. Defaults to the Node Pool's `count`.",
            example: 3,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'When enabled, the number of nodes autoscales within the defined minimum and maximum values.\n',
        required: [],
      }),
    count: z
      .int()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ description: 'The number of nodes in the Node Pool.', example: 6 }),
    disks: z
      .array(
        z
          .object({
            size: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  "The size of this custom disk partition in MB.\n\n  * The size of this disk partition must not exceed the capacity of the node's plan type.\n",
                example: 1024,
              }),
            type: z
              .enum(['raw', 'ext4'])
              .exactOptional()
              .openapi({
                description: "This custom disk partition's filesystem type.\n",
                example: 'ext-4',
              }),
          })
          .openapi({
            description:
              "The values to assign to each partition in this Node Pool's custom disk layout.\n",
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description: "This Node Pool's custom disk layout.\n",
        'x-linode-cli-format': 'json',
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Node Pool's unique ID.\n",
        example: 456,
        'x-linode-filterable': true,
      }),
    nodes: z
      .array(LKENodeStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Status information for the Nodes which are members of this Node Pool. If a Linode has not been provisioned for a given Node slot, the instance_id will be returned as null.\n',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of tags applied to this object. Tags are for organizational purposes only.\n',
        example: ['example tag', 'another example'],
        'x-linode-filterable': true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Linode Type for all of the nodes in the Node Pool.',
        example: 'g6-standard-4',
      }),
  })
  .openapi({
    description:
      'The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.\n',
    required: [],
  })
  .openapi('LKENodePool')

const LKENodePoolRequestBodySchema = z
  .object({
    autoscaler: z
      .object({
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether autoscaling is enabled for this Node Pool. Defaults to `false`.',
            example: true,
          }),
        max: z
          .int()
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              "The maximum number of nodes to autoscale to. Defaults to the Node Pool's `count`. Defaults to the value provided by the `count` field.\n",
            example: 12,
          }),
        min: z
          .int()
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              "The minimum number of nodes to autoscale to. Defaults to the Node Pool's `count`.",
            example: 3,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'When enabled, the number of nodes autoscales within the defined minimum and maximum values.\n\nWhen making a request, `max` and `min` require each other.\n',
        required: [],
      }),
    count: z.lazy(() => LKENodePoolSchema).exactOptional(),
    disks: z
      .array(z.lazy(() => LKENodePoolSchema))
      .exactOptional()
      .openapi({
        description:
          "**Note**: This field should be omitted except for special use cases. The disks specified here are\npartitions in *addition* to the primary partition and reduce the size of the primary partition,\nwhich can lead to stability problems for the Node.\n\nThis Node Pool's custom disk layout. Each item in this array will create a new disk\npartition for each node in this Node Pool.\n\n  * The custom disk layout is applied to each node in this Node Pool.\n  * The maximum number of custom disk partitions that can be configured is 7.\n  * Once the requested disk paritions are allocated, the remaining disk space is allocated to the node's boot disk.\n  * A Node Pool's custom disk layout is immutable over the lifetime of the Node Pool.\n",
        'x-linode-cli-format': 'json',
      }),
    tags: z.lazy(() => LKENodePoolSchema).exactOptional(),
    type: z.lazy(() => LKENodePoolSchema).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a collection of Linodes which will be members of a Kubernetes cluster.\n',
    required: [],
  })
  .openapi('LKENodePoolRequestBody')

const LKEVersionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Kubernetes version number available for deployment to a Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version.\n',
        example: '1.25',
      }),
  })
  .openapi({ description: 'LKE versions\n', readOnly: true, required: [] })
  .openapi('LKEVersion')

const LinodeSchema = z
  .object({
    alerts: z
      .object({
        cpu: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The percentage of CPU usage required to trigger an alert.\nIf the average CPU usage over two hours exceeds this value, we'll send you an alert.\nYour Linode's total CPU capacity is represented as 100%, multiplied by its number of\ncores.\n\nFor example, a two core Linode's CPU capacity is represented as 200%. If you want\nto be alerted at 90% of a two core Linode's CPU capacity, set the alert value to `180`.\n\nThe default value is 90% multiplied by the number of cores.\n\nIf the value is set to `0` (zero), the alert is disabled.\n",
            example: 180,
          }),
        io: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The amount of disk IO operation per second required to trigger an alert. If the average disk IO over two hours exceeds this value, we'll send you an alert. If set to `0` (zero), this alert is disabled.\n",
            example: 10000,
          }),
        network_in: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The amount of incoming traffic, in Mbit/s, required to trigger an alert. If the average incoming traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.\n",
            example: 10,
          }),
        network_out: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The amount of outbound traffic, in Mbit/s, required to trigger an alert. If the average outbound traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.\n",
            example: 10,
          }),
        transfer_quota: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The percentage of network transfer that may be used before an alert is triggered. When this value is exceeded, we'll alert you. If this is set to `0` (zero), the alert is disabled.\n",
            example: 80,
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    backups: z
      .object({
        available: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether Backups for this Linode are available for restoration.\n\nBackups undergoing maintenance are not available for restoration.\n',
            example: true,
            readOnly: true,
          }),
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If this Linode has the Backup service enabled. To enable backups, see [POST /linode/instances/{linodeId}/backups/enable](/docs/api/linode-instances/#backups-enable).\n',
            example: true,
            readOnly: true,
          }),
        last_successful: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: "The last successful backup date. 'null' if there was no previous backup.",
            example: '2018-01-01T00:01:01',
            readOnly: true,
          }),
        schedule: z
          .object({
            day: z
              .enum([
                'Scheduling',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "The day of the week that your Linode's weekly Backup is taken.\nIf not set manually, a day will be chosen for you. Backups\nare taken every day, but backups taken on this day are\npreferred when selecting backups to retain for a longer period.\n\n\nIf not set manually, then when backups are initially enabled, this\nmay come back as `Scheduling` until the `day` is automatically selected.\n",
                example: 'Saturday',
              }),
            window: z
              .enum([
                'Scheduling',
                'W0',
                'W2',
                'W4',
                'W6',
                'W8',
                'W10',
                'W12',
                'W14',
                'W16',
                'W18',
                'W20',
                'W22',
              ])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The window in which your backups will be taken, in UTC. A\nbackups window is a two-hour span of time in which the backup\nmay occur.\n\n\nFor example, `W10` indicates that your backups should be\ntaken between 10:00 and 12:00. If you do not choose a backup\nwindow, one will be selected for you automatically.\n\n\nIf not set manually, when backups are initially enabled this\nmay come back as `Scheduling` until the `window` is automatically selected.\n',
                example: 'W22',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({
        description:
          "Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).\n",
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Linode was created.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'A deprecated property denoting a group label for this Linode.\n',
        example: 'Linode-Group',
        'x-linode-filterable': true,
      }),
    host_uuid: z
      .uuid()
      .exactOptional()
      .openapi({
        description: "The Linode's host machine, as a UUID.",
        example: '3a3ddd59d9a78bb8de041391075df44de62bfec8',
        readOnly: true,
      }),
    hypervisor: z
      .literal('kvm')
      .exactOptional()
      .openapi({
        description: 'The virtualization software powering this Linode.\n',
        example: 'kvm',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "This Linode's ID which must be provided for all operations impacting this Linode.\n",
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
        'x-linode-filterable': true,
      }),
    image: z
      .lazy(() => DiskRequestSchema)
      .nullable()
      .exactOptional()
      .openapi({
        example: 'linode/debian10',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    ipv4: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address\nupon creation, and may get a single private IPv4 address if needed. You may need to\n[open a support ticket](/docs/api/support/#support-ticket-open)\nto get additional IPv4 addresses.\n\nIPv4 addresses may be reassigned between your Linodes, or shared with other Linodes.\nSee the [/networking](/docs/api/networking/) endpoints for details.\n",
        example: ['203.0.113.1', '192.0.2.1'],
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
    ipv6: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`.\n",
        example: 'c001:d00d::1337/128',
        readOnly: true,
      }),
    label: z
      .string()
      .regex(/^[a-zA-Z]((?!--|__|..)[a-zA-Z0-9-_.])+$/)
      .min(3)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          "The Linode's label is for display purposes only. If no label is provided for a Linode,\na default will be assigned.\n\nLinode labels have the following constraints:\n\n  * Must begin and end with an alphanumeric character.\n  * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).\n  * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.\n",
        example: 'linode123',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This is the [Region](/docs/api/regions/#regions-list) where the Linode was deployed. A Linode's region can only be changed by initiating a [cross data center migration](/docs/api/linode-instances/#dc-migrationpending-host-migration-initiate).\n",
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    specs: z
      .object({
        disk: z
          .int()
          .exactOptional()
          .openapi({
            description:
              "The amount of storage space, in MB, this Linode has access to. A typical Linode will divide this space between a primary disk with an `image` deployed to it, and a swap disk, usually 512 MB. This is the default configuration created when deploying a Linode with an `image` through [POST /linode/instances](/docs/api/linode-instances/#linode-create). While this configuration is suitable for 99% of use cases, if you need finer control over your Linode's disks, see the [/linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disks-list) endpoints.\n",
            example: 81920,
            readOnly: true,
          }),
        memory: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The amount of RAM, in MB, this Linode has access to. Typically a Linode will choose to boot with all of its available RAM, but this can be configured in a Config profile, see the [/linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profiles-list) endpoints and the LinodeConfig object for more information.\n',
            example: 4096,
            readOnly: true,
          }),
        transfer: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The amount of network transfer this Linode is allotted each month.',
            example: 4000,
            readOnly: true,
          }),
        vcpus: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The number of vcpus this Linode has access to. Typically a Linode will choose to boot with all of its available vcpus, but this can be configured in a Config Profile, see the [/linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profiles-list) endpoints and the LinodeConfig object for more information.\n',
            example: 2,
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Information about the resources available to this Linode.',
        readOnly: true,
        required: [],
      }),
    status: z
      .enum([
        'running',
        'offline',
        'booting',
        'rebooting',
        'shutting_down',
        'provisioning',
        'deleting',
        'migrating',
        'rebuilding',
        'cloning',
        'restoring',
        'stopped',
      ])
      .exactOptional()
      .openapi({
        description:
          'A brief description of this Linode\'s current state. This field may change without direct action from you. For example, when a Linode goes into maintenance mode its status will display "stopped".\n',
        example: 'running',
        readOnly: true,
        'x-linode-cli-color': { default_: 'yellow', offline: 'red', running: 'green' },
        'x-linode-cli-display': 6,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of tags applied to this object.  Tags are for organizational purposes only.\n',
        example: ['example tag', 'another example'],
        'x-linode-filterable': true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This is the [Linode Type](/docs/api/linode-types/#types-list) that this Linode was deployed with.\nTo change a Linode's Type, use [POST /linode/instances/{linodeId}/resize](/docs/api/linode-instances/#linode-resize).\n",
        example: 'g6-standard-1',
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Linode was last updated.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    watchdog_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible.\nTo prevent a loop, Lassie will give up if there have been more than 5 boot jobs issued within 15 minutes.\n',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Linode')

const LinodeConfigInterfaceSchema = z
  .object({
    ipam_address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "This Network Interface's private IP address in Classless Inter-Domain Routing (CIDR) notation.\n\nOnly used for `vlan` purpose interfaces. Must be an empty string or `null` for `public` purpose interfaces.\n\nThe Linode is configured to use this address for the associated interface upon reboot if Network Helper is enabled. If Network Helper is disabled, the address can be enabled with [manual static IP configuration](/docs/guides/manual-network-configuration/).\n\nMust be unique among the Linode's interfaces.\n",
        example: '10.0.0.1/24',
      }),
    label: z
      .string()
      .regex(/\/[a-z0-9-]+\//)
      .min(1)
      .max(64)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The name of this interface.\n\nRequired for `vlan` purpose interfaces. Must be an empty string or `null` for `public` purpose interfaces.\n\nIf the VLAN label is new, a VLAN is created. Up to 10 VLANs can be created in each data center region. To view your active VLANs, use the [VLANs List](/docs/api/networking/#vlans-list) endpoint.\n\nMay only consist of ASCII letters, numbers, and dashes (`-`).\n\nMust be unique among the Linode's interfaces.\n",
        example: 'example-interface',
        'x-linode-filterable': true,
      }),
    purpose: z
      .enum(['public', 'vlan'])
      .exactOptional()
      .openapi({
        description:
          "The type of interface.\n\n* `public`\n  * Only one `public` interface per Linode can be defined.\n  * The Linode's default public IPv4 address is assigned to the `public` interface.\n  * A Linode must have a public interface in the first/eth0 position to be reachable via the public internet upon boot without additional system configuration. If no `public` interface is configured, the Linode is not directly reachable via the public internet. In this case, access can only be established via LISH or other Linodes connected to the same VLAN.\n\n* `vlan`\n  * Configuring a `vlan` purpose interface attaches this Linode to the VLAN with the specified `label`.\n  * The Linode is configured to use the specified `ipam_address`, if any.\n",
        example: 'vlan',
      }),
  })
  .openapi({
    description: "The Network Interface to apply to this Linode's configuration profile.\n",
    required: [],
  })
  .openapi('LinodeConfigInterface')

const LinodeConfigInterfacesSchema = z
  .array(LinodeConfigInterfaceSchema)
  .openapi({
    description:
      "An array of Network Interfaces to add to this Linode's Configuration Profile.\n\nUp to three interface objects can be entered in this array. The position in the array determines the interface to which the settings apply:\n\n- First/0:  eth0\n- Second/1: eth1\n- Third/2:  eth2\n\nWhen updating a Linode's interfaces, *each interface must be redefined*. An empty interfaces array results in a default public interface configuration only.\n\nIf no public interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.\n\n**Note:** Changes to Linode interface configurations can be enabled by rebooting the Linode.\n\n**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.\nIf a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,\nthe migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,\nyou will be prompted to select a different data center or contact support.\n\n**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.\n",
    required: ['purpose'],
  })
  .openapi('LinodeConfigInterfaces')

const LinodeConfigSchema = z
  .object({
    comments: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional field for arbitrary User comments on this Config.',
        example: 'This is my main Config',
      }),
    devices: DevicesSchema.exactOptional(),
    helpers: z
      .object({
        devtmpfs_automount: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Populates the /dev directory early during boot without udev.  Defaults to false.\n',
            example: false,
          }),
        distro: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Helps maintain correct inittab/upstart console device.',
            example: true,
          }),
        modules_dep: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Creates a modules dependency file for the Kernel you run.',
            example: true,
          }),
        network: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Automatically configures static networking.', example: true }),
        updatedb_disabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Disables updatedb cron job to avoid disk thrashing.',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Helpers enabled when booting to this Linode Config.',
        required: [],
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of this Config.',
        example: 23456,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    interfaces: LinodeConfigInterfacesSchema.exactOptional(),
    kernel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A Kernel ID to boot a Linode with. Defaults to "linode/latest-64bit".',
        example: 'linode/latest-64bit',
        'x-linode-cli-display': 3,
      }),
    label: z
      .string()
      .min(1)
      .max(48)
      .exactOptional()
      .openapi({
        description: "The Config's label is for display purposes only.\n",
        example: 'My Config',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    memory_limit: z
      .int()
      .exactOptional()
      .openapi({ description: 'Defaults to the total RAM of the Linode.\n', example: 2048 }),
    root_device: z
      .string()
      .regex(/a-z, A-Z, 0-9, \/, _, -/)
      .exactOptional()
      .openapi({
        description:
          'The root device to boot.\n* If no value or an invalid value is provided, root device will default to `/dev/sda`.\n* If the device specified at the root device location is not mounted, the Linode will not boot until a device is mounted.\n',
        example: '/dev/sda',
      }),
    run_level: z
      .enum(['default', 'single', 'binbash'])
      .exactOptional()
      .openapi({
        description: 'Defines the state of your Linode after booting. Defaults to `default`.\n',
        example: 'default',
      }),
    virt_mode: z
      .enum(['paravirt', 'fullvirt'])
      .exactOptional()
      .openapi({
        description:
          'Controls the virtualization mode. Defaults to `paravirt`.\n* `paravirt` is suitable for most cases. Linodes running in paravirt mode\n  share some qualities with the host, ultimately making it run faster since\n  there is less transition between it and the host.\n* `fullvirt` affords more customization, but is slower because 100% of the VM\n  is virtualized.\n',
        example: 'paravirt',
      }),
  })
  .openapi({ required: [] })
  .openapi('LinodeConfig')

const LinodeRequestSchema = z
  .object({
    authorized_keys: z.lazy(() => DiskRequestSchema).exactOptional(),
    authorized_users: z.lazy(() => DiskRequestSchema).exactOptional(),
    booted: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'This field defaults to `true` if the Linode is created with an Image or from a Backup.\nIf it is deployed from an Image or a Backup and you wish it to remain `offline` after deployment, set this to `false`.\n',
        writeOnly: true,
      }),
    image: z.lazy(() => DiskRequestSchema).exactOptional(),
    root_pass: z.lazy(() => DiskRequestSchema).exactOptional(),
    stackscript_data: z.lazy(() => DiskRequestSchema).exactOptional(),
    stackscript_id: z.lazy(() => DiskRequestSchema).exactOptional(),
  })
  .openapi({ description: 'Common properties for creating and rebuilding Linodes.', required: [] })
  .openapi('LinodeRequest')

const LinodeStatsSchema = z
  .object({
    cpu: z
      .array(z.array(z.number().openapi({ example: [1521483600000, 0.42] })))
      .exactOptional()
      .openapi({ description: 'Percentage of CPU used.\n' }),
    io: z
      .object({
        io: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 0.19] })))
          .exactOptional()
          .openapi({ description: 'Block/s written.' }),
        swap: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 0] })))
          .exactOptional()
          .openapi({ description: 'Block/s written.' }),
      })
      .exactOptional()
      .openapi({ description: 'Input/Output statistics.', required: [] }),
    netv4: z
      .object({
        in: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 2004.36] })))
          .exactOptional()
          .openapi({ description: 'Input stats for IPv4, measured in bits/s (bits/second).' }),
        out: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 3928.91] })))
          .exactOptional()
          .openapi({ description: 'Output stats for IPv4, measured in bits/s (bits/second).' }),
        private_in: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 0] })))
          .exactOptional()
          .openapi({
            description: 'Private IPv4 input statistics, measured in bits/s (bits/second).',
          }),
        private_out: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 5.6] })))
          .exactOptional()
          .openapi({
            description: 'Private IPv4 output statistics, measured in bits/s (bits/second).',
          }),
      })
      .exactOptional()
      .openapi({ description: 'IPv4 statistics.', required: [] }),
    netv6: z
      .object({
        in: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 0] })))
          .exactOptional()
          .openapi({ description: 'Input stats for IPv6, measured in bits/s (bits/second).' }),
        out: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 0] })))
          .exactOptional()
          .openapi({ description: 'Output stats for IPv6, measured in bits/s (bits/second).' }),
        private_in: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 195.18] })))
          .exactOptional()
          .openapi({
            description: 'Private IPv6 input statistics, measured in bits/s (bits/second).',
          }),
        private_out: z
          .array(z.array(z.number().openapi({ example: [1521484800000, 5.6] })))
          .exactOptional()
          .openapi({
            description: 'Private IPv6 output statistics, measured in bits/s (bits/second).',
          }),
      })
      .exactOptional()
      .openapi({ description: 'IPv6 statistics.', required: [] }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title for this data set.',
        example: 'linode.com - my-linode (linode123456) - day (5 min avg)',
      }),
  })
  .openapi({
    description:
      'CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.\n',
    readOnly: true,
    required: [],
  })
  .openapi('LinodeStats')

const LinodeTypeSchema = z
  .object({
    addons: z
      .object({
        backups: z
          .object({
            price: z
              .object({
                hourly: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'The cost (in US dollars) per hour to add Backups service.\n',
                    example: 0.008,
                  }),
                monthly: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'The cost (in US dollars) per month to add Backups service.\n',
                    example: 5,
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Cost of enabling Backups for this Linode Type.',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Information about the optional Backup service offered for Linodes.\n',
            readOnly: true,
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A list of optional add-on services for Linodes and their associated costs.\n',
        readOnly: true,
        required: [],
      }),
    class: z
      .enum(['nanode', 'standard', 'dedicated', 'gpu', 'highmem'])
      .exactOptional()
      .openapi({
        description:
          "The class of the Linode Type. We currently offer five classes of Linodes:\n\n  * nanode - Nanode instances are good for low-duty workloads,\n    where performance isn't critical. **Note:** As of June 16th, 2020, Nanodes became\n    1 GB Linodes in the Cloud Manager, however, the API, the CLI, and billing will\n    continue to refer to these instances as Nanodes.\n  * standard - Standard Shared instances are good for medium-duty workloads and\n    are a good mix of performance, resources, and price. **Note:** As of June 16th, 2020,\n    Standard Linodes in the Cloud Manager became Shared Linodes, however, the API, the CLI, and\n    billing will continue to refer to these instances as Standard Linodes.\n  * dedicated - Dedicated CPU instances are good for full-duty workloads\n    where consistent performance is important.\n  * gpu - Linodes with dedicated NVIDIA Quadro &reg; RTX 6000 GPUs accelerate highly\n    specialized applications such as machine learning, AI, and video transcoding.\n  * highmem - High Memory instances favor RAM over other resources, and can be\n    good for memory hungry use cases like caching and in-memory databases.\n    All High Memory plans contain dedicated CPU cores.\n",
        example: 'standard',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    disk: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The Disk size, in MB, of the Linode Type.\n',
        example: 81920,
        readOnly: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    gpus: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of GPUs this Linode Type offers.\n',
        example: 0,
        readOnly: true,
        'x-linode-cli-display': 11,
        'x-linode-filterable': true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID representing the Linode Type.',
        example: 'g6-standard-2',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The Linode Type's label is for display purposes only.\n",
        example: 'Linode 4GB',
        readOnly: true,
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    memory: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Amount of RAM included in this Linode Type.\n',
        example: 4096,
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    network_out: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The Mbits outbound bandwidth allocation.\n',
        example: 1000,
        readOnly: true,
        'x-linode-cli-display': 7,
        'x-linode-filterable': true,
      }),
    price: z
      .object({
        hourly: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Cost (in US dollars) per hour.',
            example: 0.03,
            'x-linode-cli-display': 9,
          }),
        monthly: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Cost (in US dollars) per month.',
            example: 20,
            'x-linode-cli-display': 10,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cost in US dollars, broken down into hourly and monthly charges.\n',
        readOnly: true,
        required: [],
      }),
    successor: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The Linode Type that a [mutate](/docs/api/linode-instances/#linode-upgrade) will upgrade to for a Linode of this type.  If "null", a Linode of this type may not mutate.\n',
        example: null,
        readOnly: true,
      }),
    transfer: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The monthly outbound transfer amount, in MB.\n',
        example: 4000,
        readOnly: true,
        'x-linode-cli-display': 8,
        'x-linode-filterable': true,
      }),
    vcpus: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of VCPU cores this Linode Type offers.\n',
        example: 2,
        readOnly: true,
        'x-linode-cli-display': 6,
        'x-linode-filterable': true,
      }),
  })
  .openapi({
    description:
      'Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.\n',
    required: [],
  })
  .openapi('LinodeType')

const LoginSchema = z
  .object({
    datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the login was initiated.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this login object.\n',
        example: 1234,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The remote IP address that requested the login.\n',
        example: '192.0.2.0',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    restricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the User that was logged into was a restricted User, false otherwise.\n',
        example: true,
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The username of the User that was logged into.\n',
        example: 'example_user',
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
  })
  .openapi({
    description: 'An object representing a previous successful login for a User.\n',
    required: [],
  })
  .openapi('Login')

const LongviewClientSchema = z
  .object({
    api_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The API key for this Client, used when configuring the Longview\nClient application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.\n',
        example: 'BD1B4B54-D752-A76D-5A9BD8A17F39DB61',
        readOnly: true,
      }),
    apps: z
      .object({
        apache: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If True, the Apache Longview Client module is monitoring Apache on your server.\n',
            example: true,
            readOnly: true,
          }),
        mysql: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If True, the MySQL Longview Client modules is monitoring MySQL on your server.\n',
            example: true,
            readOnly: true,
          }),
        nginx: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If True, the Nginx Longview Client module is monitoring Nginx on your server.\n',
            example: false,
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.\n',
        readOnly: true,
        required: [],
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Longview Client was created.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Client's unique ID.\n",
        example: 789,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    install_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The install code for this Client, used when configuring the Longview\nClient application on your Linode.\n\nReturns as `[REDACTED]` if you do not have read-write access to this client.\n',
        example: 'BD1B5605-BF5E-D385-BA07AD518BE7F321',
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    label: z
      .string()
      .regex(/[a-zA-Z0-9-_]{3,32}/)
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description: "This Client's unique label. This is for display purposes only.\n",
        example: 'client789',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Longview Client was last updated.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A LongviewClient is a single monitor set up to track statistics about one of your servers.\n',
    required: [],
  })
  .openapi('LongviewClient')

const LongviewPlanSchema = z
  .object({
    longview_subscription: z
      .enum(['longview-3', 'longview-10', 'longview-40', 'longview-100'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The subscription ID for a particular Longview plan. A value of `null` corresponds to Longview Free.\n\nYou can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details of each plan.\n',
        example: 'longview-10',
        'x-linode-cli-display': 1,
      }),
  })
  .openapi({ description: 'Longview Plan object.\n', required: [] })
  .openapi('LongviewPlan')

const LongviewSubscriptionSchema = z
  .object({
    clients_included: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of Longview Clients that may be created with this Subscription tier.\n',
        example: 10,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    id: z
      .enum(['longview-3', 'longview-10', 'longview-40', 'longview-100'])
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Subscription tier.\n',
        example: 'longview-10',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A display name for this Subscription tier.\n',
        example: 'Longview Pro 10 pack',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    price: z
      .object({
        hourly: z
          .number()
          .exactOptional()
          .openapi({
            description: 'The hourly price, in US dollars, for this Subscription tier.\n',
            example: 0.06,
            readOnly: true,
          }),
        monthly: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The maximum monthly price in US Dollars for this Subscription tier. You will never be charged more than this amount per month for this subscription.\n',
            example: 40,
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Pricing information about this Subscription tier.\n',
        readOnly: true,
        'x-linode-cli-display': 4,
        required: [],
      }),
  })
  .openapi({
    description:
      'A Longview Subscription represents a tier of Longview service you can subscribe to.\n',
    required: [],
  })
  .openapi('LongviewSubscription')

const MaintenanceSchema = z
  .object({
    entity: z
      .object({
        id: z
          .number()
          .exactOptional()
          .openapi({
            description: 'The id of the entity being affected by maintenance.\n',
            example: 1234,
          }),
        label: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The label of the entity being affected by maintenance.\n',
            example: 'demo-linode',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The type of entity.\n', example: 'Linode' }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The API endpoint prefix to use in combination with the entity id to find specific information about the entity.\n',
            example: 'https://api.linode.com/v4/linode/instances/{linodeId}',
          }),
      })
      .exactOptional()
      .openapi({ description: 'The entity being affected by maintenance.\n', required: [] }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reason maintenance is being performed.\n',
        example: "This maintenance will allow us to update the BIOS on the host's motherboard.",
      }),
    status: z
      .enum(['completed', 'pending', 'started'])
      .exactOptional()
      .openapi({
        description:
          'The maintenance status.\n\nMaintenance progresses in the following sequence: pending, started, then completed.\n',
        example: 'started',
        'x-linode-filterable': true,
      }),
    type: z
      .enum(['reboot', 'cold_migration', 'live_migration'])
      .exactOptional()
      .openapi({
        description: 'The type of maintenance.\n',
        example: 'reboot',
        'x-linode-filterable': true,
      }),
    when: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the maintenance will begin.\n\n[Filterable](/docs/api/#filtering-and-sorting) with the following parameters:\n\n* A single value in date-time string format ("%Y-%m-%dT%H:%M:%S"), which returns only matches to that value.\n\n* A dictionary containing pairs of inequality operator string keys ("+or", "+gt", "+gte", "+lt", "+lte",\nor "+neq") and single date-time string format values ("%Y-%m-%dT%H:%M:%S"). "+or" accepts an array of values that\nmay consist of single date-time strings or dictionaries of inequality operator pairs.\n',
        example: '2020-07-09T00:01:01',
        'x-linode-filterable': true,
      }),
  })
  .openapi({ description: 'Information about maintenance affecting an entity.\n', required: [] })
  .openapi('Maintenance')

const ManagedContactSchema = z
  .object({
    email: z
      .email()
      .exactOptional()
      .openapi({
        description: 'The address to email this Contact to alert them of issues.\n',
        example: 'john.doe@example.org',
        'x-linode-cli-display': 3,
      }),
    group: z
      .string()
      .min(2)
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A grouping for this Contact. This is for display purposes only.\n',
        example: 'on-call',
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Contact's unique ID.\n",
        example: 567,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    name: z
      .string()
      .regex(/[a-zA-Z0-9-_ ]{2,64}/)
      .min(2)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'The name of this Contact.\n',
        example: 'John Doe',
        'x-linode-cli-display': 2,
      }),
    phone: z
      .object({
        primary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: "This Contact's primary phone number.\n",
            example: '123-456-7890',
          }),
        secondary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "This Contact's secondary phone number.\n", example: null }),
      })
      .exactOptional()
      .openapi({
        description: 'Information about how to reach this Contact by phone.\n',
        'x-linode-cli-display': 4,
        required: [],
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Contact was last updated.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Information about someone Linode's special forces may contact in case an issue is detected with a manager service.\n",
    required: [],
  })
  .openapi('ManagedContact')

const ManagedCredentialSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Credential's unique ID.\n",
        example: 9991,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .regex(/[a-zA-Z0-9-_ \.]{2,75}/)
      .min(2)
      .max(75)
      .exactOptional()
      .openapi({
        description: 'The unique label for this Credential. This is for display purposes only.\n',
        example: 'prod-password-1',
        'x-linode-cli-display': 2,
      }),
    last_decrypted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date this Credential was last decrypted by a member of Linode special forces.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
  })
  .openapi({
    description:
      "A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.\n",
    required: [],
  })
  .openapi('ManagedCredential')

const ManagedIssueSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    entity: z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({ description: "This ticket's ID\n", example: 98765, readOnly: true }),
        label: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The summary for this Ticket.\n',
            example: 'Managed Issue opened!',
            readOnly: true,
          }),
        type: z
          .literal('ticket')
          .exactOptional()
          .openapi({
            description: 'The type of entity this is. In this case, it is always a Ticket.\n',
            example: 'ticket',
            readOnly: true,
          }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            description: 'The relative URL where you can access this Ticket.\n',
            example: '/support/tickets/98765',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The ticket this Managed Issue opened.\n',
        readOnly: true,
        'x-linode-cli-display': 4,
        required: [],
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Issue's unique ID.\n",
        example: 823,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    services: z
      .array(z.int().openapi({ example: 654 }))
      .exactOptional()
      .openapi({
        description: 'An array of Managed Service IDs that were affected by this Issue.\n',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
  })
  .openapi({
    description: 'An Issue that was detected with a service Linode is managing.\n',
    required: [],
  })
  .openapi('ManagedIssue')

const ManagedLinodeSettingsSchema = z
  .object({
    group: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The group of the Linode these Settings are for. This is for display purposes only.\n',
        example: 'linodes',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Linode these Settings are for.\n',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The label of the Linode these Settings are for.\n',
        example: 'linode123',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    ssh: z
      .object({
        access: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description:
              'If true, Linode special forces may access this Linode over ssh to respond to Issues.\n',
            example: true,
          }),
        ip: z
          .string()
          .default('any')
          .exactOptional()
          .openapi({
            description:
              "The IP Linode special forces should use to access this Linode\nwhen responding to an Issue.\n\nBy default, any of a Linode's IP addresses can be used for incident response access.\n",
            example: '203.0.113.1',
          }),
        port: z
          .int()
          .min(1)
          .max(65535)
          .nullable()
          .default(null)
          .exactOptional()
          .openapi({
            description:
              'The port Linode special forces should use to access this Linode\nover ssh to respond to an Issue.\n\nThe default `null` value corresponds to port 22.\n',
            example: 22,
          }),
        user: z
          .string()
          .min(0)
          .max(32)
          .nullable()
          .default(null)
          .exactOptional()
          .openapi({
            description:
              "The specific user, if any, Linode's special forces should use when accessing this\nLinode to respond to an issue.\n\nThe default `null` value corresponds to the root user.\n",
            example: 'linode',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The SSH settings for this Linode.\n',
        'x-linode-cli-display': 4,
        required: [],
      }),
  })
  .openapi({
    description:
      'Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.\n',
    required: [],
  })
  .openapi('ManagedLinodeSettings')

const ManagedServiceSchema = z
  .object({
    address: z
      .url()
      .min(3)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The URL at which this Service is monitored.\n\nURL parameters such as `?no-cache=1` are preserved.\n\nURL fragments/anchors such as `#monitor` are **not** preserved.\n',
        example: 'https://example.org',
        'x-linode-cli-display': 5,
      }),
    body: z
      .string()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'What to expect to find in the response body for the Service to be considered up.\n',
        example: 'it worked',
      }),
    consultation_group: z
      .string()
      .min(0)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The group of ManagedContacts who should be notified or consulted with when an Issue is detected.\n',
        example: 'on-call',
        'x-linode-cli-display': 6,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Managed Service was created.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    credentials: z
      .array(z.int().openapi({ example: 9991 }))
      .exactOptional()
      .openapi({
        description:
          'An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.\n',
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This Service's unique ID.\n",
        example: 9944,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .regex(/[a-zA-Z0-9-_ \.]{3,64}/)
      .min(3)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'The label for this Service. This is for display purposes only.\n',
        example: 'prod-1',
        'x-linode-cli-display': 4,
      }),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.\n',
        example: 'The service name is my-cool-application',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.\n',
        example: null,
      }),
    service_type: z
      .enum(['url', 'tcp'])
      .exactOptional()
      .openapi({
        description: 'How this Service is monitored.\n',
        example: 'url',
        'x-linode-cli-display': 3,
      }),
    status: z
      .enum(['disabled', 'pending', 'ok', 'problem'])
      .exactOptional()
      .openapi({
        description: 'The current status of this Service.\n',
        example: 'ok',
        readOnly: true,
        'x-linode-cli-color': { default_: 'yellow', disabled: 'red', ok: 'green' },
        'x-linode-cli-display': 2,
      }),
    timeout: z
      .int()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'How long to wait, in seconds, for a response before considering the Service to be down.\n',
        example: 30,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Managed Service was last updated.',
        example: '2018-03-01T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.\n',
    required: [],
  })
  .openapi('ManagedService')

const NodeBalancerSchema = z
  .object({
    client_conn_throttle: z
      .int()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({
        description: 'Throttle connections per second.  Set to 0 (zero) to disable throttling.\n',
        example: 0,
        'x-linode-cli-display': 6,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this NodeBalancer was created.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_.\n",
        example: '192.0.2.1.ip.linodeusercontent.com',
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This NodeBalancer's unique ID.\n",
        example: 12345,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    ipv4: z
      .string()
      .exactOptional()
      .openapi({
        description: "This NodeBalancer's public IPv4 address.\n",
        example: '203.0.113.1',
        readOnly: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    ipv6: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "This NodeBalancer's public IPv6 address.\n",
        example: null,
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    label: z
      .string()
      .regex(/[a-zA-Z0-9-_]{3,32}/)
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description: "This NodeBalancer's label. These must be unique on your Account.\n",
        example: 'balancer12345',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.\n',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of Tags applied to this object.  Tags are for organizational purposes only.\n',
        example: ['example tag', 'another example'],
        'x-linode-filterable': true,
      }),
    transfer: z
      .object({
        in: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The total outbound transfer, in MB, used for this NodeBalancer this month.\n',
            example: 28.91200828552246,
            readOnly: true,
          }),
        out: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The total inbound transfer, in MB, used for this NodeBalancer this month.\n',
            example: 3.5487728118896484,
            readOnly: true,
          }),
        total: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The total transfer, in MB, used by this NodeBalancer this month.\n',
            example: 32.46078109741211,
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information about the amount of transfer this NodeBalancer has had so far this month.\n',
        readOnly: true,
        required: [],
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this NodeBalancer was last updated.\n',
        example: '2018-03-01T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.\n",
    required: [],
  })
  .openapi('NodeBalancer')

const NodeBalancerConfigSchema = z
  .object({
    algorithm: z
      .enum(['roundrobin', 'leastconn', 'source'])
      .default('roundrobin')
      .exactOptional()
      .openapi({
        description:
          'What algorithm this NodeBalancer should use for routing traffic to backends.\n',
        example: 'roundrobin',
        'x-linode-cli-display': 4,
      }),
    check: z
      .enum(['none', 'connection', 'http', 'http_body'])
      .default('none')
      .exactOptional()
      .openapi({
        description:
          'The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.\n* If `none` no check is performed.\n* `connection` requires only a connection to the backend to succeed.\n* `http` and `http_body` rely on the backend serving HTTP, and that\n  the response returned matches what is expected.\n',
        example: 'http_body',
      }),
    check_attempts: z
      .int()
      .min(1)
      .max(30)
      .default(3)
      .exactOptional()
      .openapi({
        description: 'How many times to attempt a check before considering a backend to be down.\n',
        example: 3,
      }),
    check_body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.\n',
        example: 'it works',
      }),
    check_interval: z
      .int()
      .default(31)
      .exactOptional()
      .openapi({
        description:
          'How often, in seconds, to check that backends are up and serving requests.\n\nMust be greater than `check_timeout`.\n',
        example: 90,
      }),
    check_passive: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.\n',
        example: true,
        'x-linode-cli-display': 6,
      }),
    check_path: z
      .string()
      .regex(/^[a-zA-Z0-9\/\-%?&=.]*$/)
      .exactOptional()
      .openapi({
        description:
          'The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.\n',
        example: '/test',
      }),
    check_timeout: z
      .int()
      .min(1)
      .max(30)
      .default(30)
      .exactOptional()
      .openapi({
        description:
          'How long, in seconds, to wait for a check attempt before considering it failed.\n\nMust be less than `check_interval`.\n',
        example: 10,
      }),
    cipher_suite: z
      .enum(['recommended', 'legacy'])
      .default('recommended')
      .exactOptional()
      .openapi({
        description:
          'What ciphers to use for SSL connections served by this NodeBalancer.\n\n* `legacy` is considered insecure and should only be used if necessary.\n',
        example: 'recommended',
        'x-linode-cli-color': { default_: 'white', legacy: 'red' },
        'x-linode-cli-display': 7,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This config's unique ID",
        example: 4567,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    nodebalancer_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID for the NodeBalancer this config belongs to.\n',
        example: 12345,
        readOnly: true,
      }),
    nodes_status: z
      .object({
        down: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The number of backends considered to be "DOWN" and unhealthy.  These are not in rotation, and not serving requests.\n',
            example: 0,
            readOnly: true,
          }),
        up: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The number of backends considered to be "UP" and healthy, and that are serving requests.\n',
            example: 4,
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.\n',
        readOnly: true,
        'x-linode-cli-display': 10,
        required: [],
      }),
    port: z
      .int()
      .min(1)
      .max(65535)
      .default(80)
      .exactOptional()
      .openapi({
        description:
          "The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.\n",
        example: 80,
        'x-linode-cli-display': 2,
      }),
    protocol: z
      .enum(['http', 'https', 'tcp'])
      .default('http')
      .exactOptional()
      .openapi({
        description:
          'The protocol this port is configured to serve.\n\n* The `http` and `tcp` protocols do not support `ssl_cert` and `ssl_key`.\n\n* The `https` protocol is mutually required with `ssl_cert` and `ssl_key`.\n\nReview our guide on [Available Protocols](/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features.\n',
        example: 'http',
        'x-linode-cli-display': 3,
      }),
    proxy_protocol: z
      .enum(['none', 'v1', 'v2'])
      .default('none')
      .exactOptional()
      .openapi({
        description:
          "ProxyProtocol is a TCP extension that sends initial TCP connection information such as source/destination IPs and ports to backend devices. This information would be lost otherwise. Backend devices must be configured to work with ProxyProtocol if enabled.\n\n* If ommited, or set to `none`, the NodeBalancer doesn't send any auxilary data over TCP connections. This is the default.\n* If set to `v1`, the human-readable header format (Version 1) is used. Requires `tcp` protocol.\n* If set to `v2`, the binary header format (Version 2) is used. Requires `tcp` protocol.\n",
        example: 'none',
      }),
    ssl_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL\ncertificate and Certificate Authority chain) that should be served on this\nNodeBalancerConfig\'s port.\n\nLine breaks must be represented as "\\n" in the string for requests (but not when using the Linode CLI).\n\n[Diffie-Hellman Parameters](/docs/products/networking/nodebalancers/guides/ssl-termination/#diffie-hellman-parameters) can be included in this value to enable forward secrecy.\n\nThe contents of this field will not be shown in any responses that display\nthe NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field\nappears.\n\nThe read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig\nresponse are automatically derived from your certificate. Please refer to these fields to\nverify that the appropriate certificate was assigned to your NodeBalancerConfig.\n',
        example: '<REDACTED>',
      }),
    ssl_commonname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.\n',
        example: 'www.example.com',
        readOnly: true,
        'x-linode-cli-display': 8,
      }),
    ssl_fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The read-only SHA1-encoded fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.\n',
        example: '00:01:02:03:04:05:06:07:08:09:0A:0B:0C:0D:0E:0F:10:11:12:13',
        readOnly: true,
        'x-linode-cli-display': 9,
      }),
    ssl_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.\n\nLine breaks must be represented as "\\n" in the string for requests (but not when using the Linode CLI).\n\nThe contents of this field will not be shown in any responses that display\nthe NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field\nappears.\n\nThe read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig\nresponse are automatically derived from your certificate. Please refer to these fields to\nverify that the appropriate certificate was assigned to your NodeBalancerConfig.\n',
        example: '<REDACTED>',
      }),
    stickiness: z
      .enum(['none', 'table', 'http_cookie'])
      .default('none')
      .exactOptional()
      .openapi({
        description:
          'Controls how session stickiness is handled on this port.\n* If set to `none` connections will always be assigned a backend based on the algorithm configured.\n* If set to `table` sessions from the same remote address will be routed to the same\n  backend.\n\n* For HTTP or HTTPS clients, `http_cookie` allows sessions to be\n  routed to the same backend based on a cookie set by the NodeBalancer.\n',
        example: 'http_cookie',
        'x-linode-cli-display': 5,
      }),
  })
  .openapi({
    description:
      'A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.\n\nNodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.\n',
    required: [],
  })
  .openapi('NodeBalancerConfig')

const NodeBalancerNodeSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The private IP Address where this backend can be reached. This _must_ be a private IP address.\n',
        example: '192.168.210.120:80',
        'x-linode-cli-display': 3,
      }),
    config_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The NodeBalancer Config ID that this Node belongs to.\n',
        example: 4567,
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This node's unique ID.",
        example: 54321,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .regex(/[a-zA-Z0-9-_.]{3,32}/)
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description: 'The label for this node.  This is for display purposes only.\n',
        example: 'node54321',
        'x-linode-cli-display': 2,
      }),
    mode: z
      .enum(['accept', 'reject', 'drain', 'backup'])
      .exactOptional()
      .openapi({
        description:
          'The mode this NodeBalancer should use when sending traffic to this backend.\n* If set to `accept` this backend is accepting traffic.\n* If set to `reject` this backend will not receive traffic.\n* If set to `drain` this backend will not receive _new_ traffic, but connections already\n  pinned to it will continue to be routed to it.\n\n* If set to `backup`, this backend will only receive traffic if all `accept` nodes\n  are down.\n',
        example: 'accept',
        'x-linode-cli-display': 6,
      }),
    nodebalancer_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The NodeBalancer ID that this Node belongs to.\n',
        example: 12345,
        readOnly: true,
      }),
    status: z
      .enum(['unknown', 'UP', 'DOWN'])
      .exactOptional()
      .openapi({
        description:
          'The current status of this node, based on the configured checks of its NodeBalancer Config.\n',
        example: 'UP',
        readOnly: true,
        'x-linode-cli-color': { DOWN: 'red', UP: 'green', default_: 'white', unknown: 'yellow' },
        'x-linode-cli-display': 4,
      }),
    weight: z
      .int()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.\n',
        example: 50,
        'x-linode-cli-display': 5,
      }),
  })
  .openapi({
    description:
      'A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.\n',
    required: [],
  })
  .openapi('NodeBalancerNode')

const NodeBalancerStatsSchema = z
  .object({
    data: z
      .object({
        connections: z
          .array(z.number().openapi({ example: [1526391300000, 0] }))
          .exactOptional()
          .openapi({
            description:
              'An array of key/value pairs representing unix timestamp and reading for connections to this NodeBalancer.\n',
          }),
        traffic: z
          .object({
            in: z
              .array(z.number().openapi({ example: [1526391300000, 631.21] }))
              .exactOptional()
              .openapi({
                description:
                  'An array of key/value pairs representing unix timestamp and reading for inbound traffic.\n',
              }),
            out: z
              .array(z.number().openapi({ example: [1526391300000, 103.44] }))
              .exactOptional()
              .openapi({
                description:
                  'An array of key/value pairs representing unix timestamp and reading for outbound traffic.\n',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Traffic statistics for this NodeBalancer.\n', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'The data returned about this NodeBalancers.\n', required: [] }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title for the statistics generated in this response.\n',
        example: 'linode.com - balancer12345 (12345) - day (5 min avg)',
      }),
  })
  .openapi({ description: 'Stats for this NodeBalancer.\n', required: [] })
  .openapi('NodeBalancerStats')

const NotificationSchema = z
  .object({
    body: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A full description of this Notification, in markdown format.  Not all Notifications include bodies.\n',
        example: null,
        readOnly: true,
      }),
    entity: z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({
            description: "The unique ID of the Notification's entity, based on the entity type.\n",
            example: 3456,
          }),
        label: z
          .string()
          .exactOptional()
          .openapi({
            description: "The current label for this Notification's entity.\n",
            example: 'Linode not booting.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The type of entity this is related to.', example: 'ticket' }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL where you can access the object this Notification is for. If a relative URL, it is relative to the domain you retrieved the Notification from.\n',
            example: '/support/tickets/3456',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Detailed information about the Notification.',
        readOnly: true,
        required: [],
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short description of this Notification.\n',
        example: 'You have an important ticket open!',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable description of the Notification.',
        example: 'You have an important ticket open!',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    severity: z
      .enum(['minor', 'major', 'critical'])
      .exactOptional()
      .openapi({
        description:
          'The severity of this Notification.  This field can be used to decide how prominently to display the Notification, what color to make the display text, etc.\n',
        example: 'major',
        readOnly: true,
        'x-linode-cli-color': { critical: 'b', default_: 'white', minor: 'blue' },
        'x-linode-cli-display': 3,
      }),
    type: z
      .enum([
        'migration_scheduled',
        'migration_imminent',
        'migration_pending',
        'reboot_scheduled',
        'outage',
        'payment_due',
        'ticket_important',
        'ticket_abuse',
        'notice',
        'maintenance',
        'promotion',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of Notification this is.',
        example: 'ticket_important',
        readOnly: true,
      }),
    until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If this Notification has a duration, this will be the ending time for the Event/action. For example, if there is scheduled maintenance for one of our systems, `until` would be set to the end of the maintenance window.\n',
        example: null,
        readOnly: true,
        'x-linode-cli-color': { None: 'black', default_: 'white' },
        'x-linode-cli-display': 5,
      }),
    when: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If this Notification is of an Event that will happen at a fixed, future time, this is when the named action will be taken. For example, if a Linode is to be migrated in response to a Security Advisory, this field will contain the approximate time the Linode will be taken offline for migration.\n',
        example: null,
        readOnly: true,
        'x-linode-cli-color': { None: 'black', default_: 'white' },
        'x-linode-cli-display': 4,
      }),
  })
  .openapi({
    description: 'An important, often time-sensitive item related to your Account.\n',
    required: [],
  })
  .openapi('Notification')

const OAuthClientSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).\n',
        example: '2737bf16b39ab5d7b4a1',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .min(1)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          'The name of this application.  This will be presented to users when they are asked to grant it access to their Account.\n',
        example: 'Test_Client_1',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    public: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.\n',
        example: false,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    redirect_uri: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The location a successful log in from <a target="_top" href="https://login.linode.com">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.\n',
        example: 'https://example.org/oauth/callback',
        'x-linode-cli-display': 5,
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.\n',
        example: '<REDACTED>',
        readOnly: true,
      }),
    status: z
      .enum(['active', 'disabled', 'suspended'])
      .exactOptional()
      .openapi({
        description: 'The status of this application.  `active` by default.\n',
        example: 'active',
        readOnly: true,
        'x-linode-cli-color': { default_: 'white', suspended: 'red' },
        'x-linode-cli-display': 3,
      }),
    thumbnail_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.\n",
        example: 'https://api.linode.com/v4/account/clients/2737bf16b39ab5d7b4a1/thumbnail',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User\'s account for the purposes of their application.\n',
    required: [],
  })
  .openapi('OAuthClient')

const ObjectStorageBucketSchema = z
  .object({
    cluster: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the Object Storage Cluster this bucket is in.',
        example: 'us-east-1',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When this bucket was created.', example: '2019-01-01T01:23:45' }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public.\n',
        example: 'example-bucket.us-east-1.linodeobjects.com',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this bucket.', example: 'example-bucket' }),
    objects: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of objects stored in this bucket.\n', example: 4 }),
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'The size of the bucket in bytes.', example: 188318981 }),
  })
  .openapi({
    description:
      'An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).\n',
    required: [],
  })
  .openapi('ObjectStorageBucket')

const ObjectStorageClusterSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The base URL for this cluster, used for connecting with third-party clients.',
        example: 'us-east-1.linodeobjects.com',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID for this cluster.', example: 'us-east-1' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region where this cluster is located.', example: 'us-east' }),
    static_site_domain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The base URL for this cluster used when hosting static sites.',
        example: 'website-us-east-1.linodeobjects.com',
      }),
    status: z
      .enum(['available', 'unavailable'])
      .exactOptional()
      .openapi({ description: "This cluster's status.", example: 'available' }),
  })
  .openapi({ description: 'An Object Storage Cluster', required: [] })
  .openapi('ObjectStorageCluster')

const ObjectStorageKeySchema = z
  .object({
    access_key: z
      .string()
      .exactOptional()
      .openapi({
        description: "This keypair's access key. This is not secret.",
        example: 'KVAKUTGBA4WTR2NSJQ81',
        readOnly: true,
      }),
    bucket_access: z
      .array(
        z
          .object({
            bucket_name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The unique label of the bucket to which the key will grant limited access.',
                example: 'example-bucket',
              }),
            cluster: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The Object Storage cluster where a bucket to which the key is granting access is hosted.',
                example: 'ap-south-1',
              }),
            permissions: z
              .enum(['read_write', 'read_only'])
              .exactOptional()
              .openapi({
                description: "This Limited Access Key's permissions for the selected bucket.",
                example: 'read_only',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          "Defines this key as a Limited Access Key. Limited Access Keys restrict this Object Storage key's access to only the bucket(s) declared in this array and define their bucket-level permissions.\n\n\n  Limited Access Keys can:\n\n  * [list all buckets](/docs/api/object-storage/#object-storage-buckets-list) available on this Account, but cannot perform any actions on a bucket unless it has access to the bucket.\n\n\n  * [create new buckets](/docs/api/object-storage/#object-storage-bucket-create), but do not have any access to the buckets it creates, unless explicitly given access to them.\n\n\n  **Note:** You can create an Object Storage Limited Access Key without access to any buckets.\n  This is achieved by sending a request with an empty `bucket_access` array.\n\n\n  **Note:** If this field is omitted, a regular unlimited access key is issued.\n",
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: "This keypair's unique ID", example: 123, readOnly: true }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The label given to this key. For display purposes only.',
        example: 'my-key',
      }),
    limited: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not this key is a limited access key. Will return `false` if this key grants full access to all buckets on the user's account.",
        example: true,
        readOnly: true,
      }),
    secret_key: z
      .string()
      .exactOptional()
      .openapi({
        description: "This keypair's secret key. Only returned on key creation.",
        example: 'OiA6F5r0niLs3QA2stbyq7mY5VCV7KqOzcmitmHw',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A keypair used to communicate with the Object Storage S3 API.',
    required: [],
  })
  .openapi('ObjectStorageKey')

const ObjectStorageObjectSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An MD-5 hash of the object. `null` if this object represents a prefix.\n',
        example: '9f254c71e28e033bf9e0e5262e3e72ab',
      }),
    is_truncated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Designates if there is another page of bucket objects.',
        example: true,
      }),
    last_modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time this object was last modified. `null` if this object represents a prefix.\n',
        example: '2019-01-01T01:23:45',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this object or prefix.\n', example: 'example' }),
    next_marker: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Returns the value you should pass to the `marker` query parameter to get the next page of objects. If there is no next page, `null` will be returned.\n',
        example: 'bd021c21-e734-4823-97a4-58b41c2cd4c8.892602.184',
      }),
    owner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The owner of this object, as a UUID. `null` if this object represents a prefix.\n',
        example: 'bfc70ab2-e3d4-42a4-ad55-83921822270c',
      }),
    size: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The size of this object, in bytes. `null` if this object represents a prefix.\n',
        example: 123,
      }),
  })
  .openapi({
    description:
      'An Object in Object Storage, or a "prefix" that contains one or more objects when a `delimiter` is used.\n',
    required: [],
  })
  .openapi('ObjectStorageObject')

const ObjectStorageSSLSchema = z
  .object({
    certificate: z
      .string()
      .openapi({
        description:
          'Your Base64 encoded and PEM formatted SSL certificate.\n\nLine breaks must be represented as "\\n" in the string for requests (but not when using the Linode CLI)\n',
        example: '-----BEGIN CERTIFICATE-----\nCERTIFICATE_INFORMATION\n-----END CERTIFICATE-----',
      }),
    private_key: z
      .string()
      .openapi({
        description:
          'The private key associated with this TLS/SSL certificate.\n\nLine breaks must be represented as "\\n" in the string for requests (but not when using the Linode CLI)\n',
        example: '-----BEGIN PRIVATE KEY-----\nPRIVATE_KEY_INFORMATION\n-----END PRIVATE KEY-----',
      }),
  })
  .openapi({
    description:
      'Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.\n',
    required: ['certificate', 'private_key'],
  })
  .openapi('ObjectStorageSSL')

const ObjectStorageSSLResponseSchema = z
  .object({
    ssl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating if this Bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.\n',
        example: true,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'If this Object Storage bucket has a corresponding TLS/SSL Certificate.\n',
    required: [],
  })
  .openapi('ObjectStorageSSLResponse')

const PaginationEnvelopeSchema = z
  .object({
    page: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The current [page](/docs/api/#pagination).',
        example: 1,
        readOnly: true,
      }),
    pages: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The total number of [pages](/docs/api/#pagination).',
        example: 1,
        readOnly: true,
      }),
    results: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of results.', example: 1, readOnly: true }),
  })
  .openapi({
    description:
      'An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.\n',
    required: [],
  })
  .openapi('PaginationEnvelope')

const PayPalSchema = z
  .object({
    cancel_url: z
      .string()
      .openapi({
        description: 'The URL to have PayPal redirect to when Payment is cancelled.',
        example: 'https://example.org',
      }),
    redirect_url: z
      .string()
      .openapi({
        description: 'The URL to have PayPal redirect to when Payment is approved.',
        example: 'https://example.org',
      }),
    usd: z
      .string()
      .openapi({
        description:
          "The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.",
        example: '120.50',
      }),
  })
  .openapi({
    description: 'An object representing the staging of a Payment via PayPal.\n',
    required: ['cancel_url', 'redirect_url', 'usd'],
  })
  .openapi('PayPal')

const PayPalDataSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address associated with your PayPal account.',
        example: 'example@linode.com',
        readOnly: true,
      }),
    paypal_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'PayPal Merchant ID associated with your PayPal account.',
        example: 'ABC1234567890',
        readOnly: true,
      }),
  })
  .openapi({ description: 'PayPal information.', required: [] })
  .openapi('PayPalData')

const PayPalExecuteSchema = z
  .object({
    payer_id: z
      .string()
      .openapi({
        description:
          'The PayerID returned by PayPal during the transaction authorization process.\n',
        example: 'ABCDEFGHIJKLM',
      }),
    payment_id: z
      .string()
      .openapi({
        description:
          'The PaymentID returned from [POST /account/payments/paypal](/docs/api/account/#paypal-payment-stage) that has been approved with PayPal.\n',
        example: 'PAY-1234567890ABCDEFGHIJKLMN',
      }),
  })
  .openapi({
    description:
      'An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.\n',
    required: ['payer_id', 'payment_id'],
  })
  .openapi('PayPalExecute')

const PaymentSchema = z
  .object({
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the Payment was made.',
        example: '2018-01-15T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of the Payment.',
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    usd: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The amount, in US dollars, of the Payment.',
        example: '120.50',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
  })
  .openapi({ description: 'Payment object response.', required: [] })
  .openapi('Payment')

const PaymentMethodSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the Payment Method was added to the Account.',
        example: '2018-01-15T00:01:01',
        readOnly: true,
      }),
    data: z
      .xor([
        CreditCardDataSchema.openapi({ 'x-linode-ref-name': 'Credit Card' }),
        GooglePayDataSchema.openapi({ 'x-linode-ref-name': 'Google Pay' }),
        PayPalDataSchema.openapi({ 'x-linode-ref-name': 'Paypal' }),
      ])
      .exactOptional()
      .openapi({
        discriminator: { propertyName: 'type' },
        'x-linode-cli-display': 4,
        'x-linode-cli-format': 'json',
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Payment Method.',
        example: 123,
        'x-linode-cli-display': 1,
      }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this Payment Method is the default method for automatically processing service charges.\n',
        example: true,
        'x-linode-cli-display': 3,
      }),
    type: z
      .enum(['credit_card', 'google_pay', 'paypal'])
      .exactOptional()
      .openapi({
        description: 'The type of Payment Method.',
        example: 'credit_card',
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({ description: 'Payment Method Response Object.', required: [] })
  .openapi('PaymentMethod')

const PaymentRequestSchema = z
  .object({
    cvv: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CVV (Card Verification Value) of the credit card to be used for the Payment. Required if paying by credit card.\n',
        example: '123',
      }),
    payment_method_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Payment Method to apply to the Payment.\n',
        example: 123,
      }),
    usd: z
      .string()
      .regex(/^\$?\d+\.\d{2}$/)
      .openapi({
        description:
          'The amount in US Dollars of the Payment.\n\n* Can begin with or without `$`.\n* Commas (`,`) are not accepted.\n* Must end with a decimal expression, such as `.00` or `.99`.\n* Minimum: `$5.00` or the Account balance, whichever is lower.\n* Maximum: `$2000.00` or the Account balance up to `$50000.00`, whichever is greater.\n',
        example: '$120.50',
      }),
  })
  .openapi({ description: 'Payment object request.', required: ['usd'] })
  .openapi('PaymentRequest')

const PersonalAccessTokenSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time this token was created.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    expiry: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with "null" as their expiry and will never expire unless revoked.\n',
        example: '2018-01-01T13:46:32',
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: "This token's unique ID, which can be used to revoke it.\n",
        example: 123,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          "This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.\n",
        example: 'linode-cli',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    scopes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the <a target="_top" href="https://github.com/linode/linode-cli">Linode CLI</a>, require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure.\n',
        example: '*',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned.\n',
        example: 'abcdefghijklmnop',
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
  })
  .openapi({
    description:
      'A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.\n',
    required: [],
  })
  .openapi('PersonalAccessToken')

const ProfileSchema = z
  .object({
    authentication_type: z
      .enum(['password', 'github'])
      .exactOptional()
      .openapi({
        description:
          "This account's Cloud Manager authentication type. Authentication types are chosen through\nCloud Manager and authorized when logging into your account. These authentication types are either\nthe user's password (in conjunction with their username), or the name of their\nindentity provider such as GitHub. For example, if a user:\n\n- Has never used Third-Party Authentication, their authentication type will be `password`.\n- Is using Third-Party Authentication, their authentication type will be the name of their Identity Provider (eg. `github`).\n- Has used Third-Party Authentication and has since revoked it, their authentication type will be `password`.\n\n\n**Note:** This functionality may not yet be available in Cloud Manager.\nSee the [Cloud Manager Changelog](/changelog/cloud-manager/) for the latest updates.\n",
        example: 'password',
        readOnly: true,
      }),
    authorized_keys: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The list of SSH Keys authorized to use Lish for your User. This value is ignored if `lish_auth_method` is "disabled."\n',
        example: null,
      }),
    email: z
      .email()
      .exactOptional()
      .openapi({
        description:
          'Your email address.  This address will be used for communication with Linode as necessary.\n',
        example: 'example-user@gmail.com',
        'x-linode-cli-display': 2,
      }),
    email_notifications: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, you will receive email notifications about account activity.  If false, you may still receive business-critical communications through email.\n',
        example: true,
      }),
    ip_whitelist_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'If true, logins for your User will only be allowed from whitelisted IPs. This setting is currently deprecated, and cannot be enabled.\n\nIf you disable this setting, you will not be able to re-enable it.\n',
        example: false,
      }),
    lish_auth_method: z
      .enum(['password_keys', 'keys_only', 'disabled'])
      .exactOptional()
      .openapi({
        description:
          "The authentication methods that are allowed when connecting to [the Linode Shell (Lish)](/docs/guides/lish/).\n* `keys_only` is the most secure if you intend to use Lish.\n* `disabled` is recommended if you do not intend to use Lish at all.\n* If this account's Cloud Manager authentication type is set to a Third-Party Authentication method, `password_keys` cannot be used as your Lish authentication method. To view this account's Cloud Manager `authentication_type` field, send a request to the [View Profile](/docs/api/profile/#profile-view) endpoint.\n",
        example: 'keys_only',
      }),
    referrals: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Your referral code.  If others use this when signing up for Linode, you will receive account credit.\n',
            example: '871be32f49c1411b14f29f618aaf0c14637fb8d3',
            readOnly: true,
          }),
        completed: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The number of completed signups with your referral code.\n',
            example: 0,
            readOnly: true,
          }),
        credit: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The amount of account credit in US Dollars issued to you through the referral program.\n',
            example: 0,
            readOnly: true,
          }),
        pending: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The number of pending signups with your referral code.  You will not receive credit for these signups until they are completed.\n',
            example: 0,
            readOnly: true,
          }),
        total: z
          .int()
          .exactOptional()
          .openapi({
            description: 'The number of users who have signed up with your referral code.\n',
            example: 0,
            readOnly: true,
          }),
        url: z
          .url()
          .exactOptional()
          .openapi({
            description:
              'Your referral url, used to direct others to sign up for Linode with your referral code.\n',
            example: 'https://www.linode.com/?r=871be32f49c1411b14f29f618aaf0c14637fb8d3',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "Information about your status in our referral program.\n\nThis information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.\n",
        readOnly: true,
        required: [],
      }),
    restricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, your User has restrictions on what can be accessed on your Account. To get details on what entities/actions you can access/perform, see [/profile/grants](/docs/api/profile/#grants-list).\n',
        example: false,
        'x-linode-cli-display': 3,
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timezone you prefer to see times in. This is not used by the API directly. It is provided for the benefit of clients such as the Linode Cloud Manager and other clients built on the API. All times returned by the API are in UTC.\n',
        example: 'US/Eastern',
      }),
    two_factor_auth: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, logins from untrusted computers will require Two Factor Authentication.  See [/profile/tfa-enable](/docs/api/profile/#two-factor-secret-create) to enable Two Factor Authentication.\n',
        example: true,
        'x-linode-cli-display': 4,
      }),
    uid: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Your unique ID in our system. This value will never change, and can safely be used to identify your User.\n',
        example: 1234,
        readOnly: true,
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your username, used for logging in to our system.\n',
        example: 'exampleUser',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    verified_phone_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number verified for this Profile with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.\n\n`null` if this Profile has no verified phone number.\n',
        example: '+5555555555',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.\n',
    required: [],
  })
  .openapi('Profile')

const RegionSchema = z
  .object({
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of capabilities of this region.\n',
        example: ['Linodes', 'NodeBalancers', 'Block Storage', 'Object Storage'],
        readOnly: true,
        'x-linode-cli-display': 4,
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The country where this Region resides.',
        example: 'us',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Region.',
        example: 'us-east',
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Detailed location information for this Region, including city, state or region, and country.',
        example: 'Newark, NJ, USA',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    resolvers: z
      .object({
        ipv4: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The IPv4 addresses for this region's DNS resolvers, separated by commas.\n",
            example: '192.0.2.0,192.0.2.1',
            readOnly: true,
          }),
        ipv6: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The IPv6 addresses for this region's DNS resolvers, separated by commas.\n",
            example: '2001:0db8::,2001:0db8::1',
            readOnly: true,
          }),
      })
      .exactOptional()
      .openapi({ readOnly: true, 'x-linode-cli-display': 6, required: [] }),
    status: z
      .enum(['ok', 'outage'])
      .exactOptional()
      .openapi({
        description: "This region's current operational status.\n",
        example: 'ok',
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
  })
  .openapi({ description: 'An area where Linode services are available.', required: [] })
  .openapi('Region')

const RescueDevicesSchema = z
  .object({
    sda: DeviceSchema.exactOptional(),
    sdb: DeviceSchema.exactOptional(),
    sdc: DeviceSchema.exactOptional(),
    sdd: DeviceSchema.exactOptional(),
    sde: DeviceSchema.exactOptional(),
    sdf: DeviceSchema.exactOptional(),
    sdg: DeviceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RescueDevices')

const SSHKeySchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date this key was added.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of an SSH Key object.\n',
        example: 42,
        readOnly: true,
      }),
    label: z
      .string()
      .min(0)
      .max(64)
      .exactOptional()
      .openapi({ description: 'A label for the SSH Key.\n', example: 'My SSH Key' }),
    ssh_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.\n\nAccepted formats:\n* ssh-dss\n* ssh-rsa\n* ecdsa-sha2-nistp\n* ssh-ed25519\n* sk-ecdsa-sha2-nistp256 (Akamai-specific)\n',
        example: 'ssh-rsa AAAA_valid_public_ssh_key_123456785== user@their-computer',
      }),
  })
  .openapi({
    description:
      "A credential object for authenticating a User's secure shell connection to a Linode.\n",
    required: [],
  })
  .openapi('SSHKey')

const SecurityQuestionSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID representing the security question.', example: 1 }),
    question: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The security question.',
        example: 'In what city were you born?',
        readOnly: true,
      }),
    response: z
      .string()
      .min(3)
      .max(17)
      .exactOptional()
      .openapi({ description: 'The security question response.\n', example: 'Gotham City' }),
  })
  .openapi({ description: 'Single security question and response object.', required: [] })
  .openapi('SecurityQuestion')

const SecurityQuestionsGetSchema = z
  .object({
    security_questions: z
      .array(
        z
          .object({
            id: z.lazy(() => SecurityQuestionSchema).exactOptional(),
            question: z.lazy(() => SecurityQuestionSchema).exactOptional(),
            response: z.lazy(() => SecurityQuestionSchema).exactOptional(),
          })
          .openapi({
            description: 'Single security question and response object for GET operation.',
            required: [],
          }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'Security questions and responses object for GET operation.',
    required: [],
  })
  .openapi('SecurityQuestionsGet')

const SecurityQuestionsPostSchema = z
  .object({
    security_questions: z
      .array(
        z
          .object({
            question_id: z.lazy(() => SecurityQuestionSchema).exactOptional(),
            response: z.lazy(() => SecurityQuestionSchema).exactOptional(),
            security_question: z.lazy(() => SecurityQuestionSchema).exactOptional(),
          })
          .openapi({
            description: 'Single security question and response object for POST operation.',
            required: [],
          }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'Security questions and responses object for POST operation.',
    required: [],
  })
  .openapi('SecurityQuestionsPost')

const ServiceTransferSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this transfer was created.\n',
        example: '2021-02-11T16:37:03',
      }),
    entities: z
      .object({
        linodes: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array containing the IDs of each of the Linodes included in this transfer.\n',
            example: [111, 222],
            'x-linode-cli-display': 5,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'A collection of the services to include in this transfer request, separated by type.\n',
        required: [],
      }),
    expiry: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When this transfer expires. Transfers will automatically expire 24 hours after creation.\n',
        example: '2021-02-12T16:37:03',
        'x-linode-cli-display': 3,
      }),
    is_sender: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the requesting account created this transfer.\n',
        example: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    status: z
      .enum(['accepted', 'cancelled', 'completed', 'failed', 'pending', 'stale'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transfer request.\n\n`accepted`: The transfer has been accepted by another user and is currently in progress.\nTransfers can take up to 3 hours to complete.\n\n`cancelled`: The transfer has been cancelled by the sender.\n\n`completed`: The transfer has completed successfully.\n\n`failed`: The transfer has failed after initiation.\n\n`pending`: The transfer is ready to be accepted.\n\n`stale`: The transfer has exceeded its expiration date. It can no longer be accepted or\ncancelled.\n',
        example: 'pending',
        'x-linode-cli-color': {
          accepted: 'yellow',
          cancelled: 'red',
          completed: 'green',
          default_: 'white',
          failed: 'red',
          pending: 'yellow',
          stale: 'red',
        },
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    token: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The token used to identify and accept or cancel this transfer.\n',
        example: '123E4567-E89B-12D3-A456-426614174000',
        'x-linode-cli-display': 1,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this transfer was last updated.\n',
        example: '2021-02-11T16:37:03',
      }),
  })
  .openapi({ description: 'An object representing a Service Transfer.\n', required: [] })
  .openapi('ServiceTransfer')

const UserDefinedFieldSchema = z
  .object({
    default: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default value.  If not specified, this value will be used.\n',
        readOnly: true,
      }),
    example: z
      .string()
      .openapi({
        description: 'An example value for the field.\n',
        example: 'hunter2',
        readOnly: true,
      }),
    label: z
      .string()
      .openapi({
        description:
          'A human-readable label for the field that will serve as the input prompt for entering the value during deployment.\n',
        example: 'Enter the password',
        readOnly: true,
      }),
    manyOf: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of acceptable values for the field in any quantity, combination or order.\n',
        example: 'avalue,anothervalue,thirdvalue',
        readOnly: true,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the field.\n', example: 'DB_PASSWORD', readOnly: true }),
    oneOf: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A list of acceptable single values for the field.\n',
        example: 'avalue,anothervalue,thirdvalue',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.\n',
    required: ['label', 'name', 'example'],
  })
  .openapi('UserDefinedField')

const StackScriptSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date this StackScript was created.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 6,
      }),
    deployments_active: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Count of currently active, deployed Linodes created from this StackScript.\n',
        example: 1,
        readOnly: true,
      }),
    deployments_total: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The total number of times this StackScript has been deployed.\n',
        example: 12,
        readOnly: true,
        'x-linode-filterable': true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description for the StackScript.\n',
        example: 'This StackScript installs and configures MySQL\n',
        'x-linode-filterable': true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this StackScript.',
        example: 10079,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    images: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of Image IDs. These are the Images that can be deployed with this StackScript.\n\n`any/all` indicates that all available Images, including private Images, are accepted.\n',
        example: ['linode/debian9', 'linode/debian8'],
        'x-linode-cli-display': 4,
      }),
    is_public: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**\n',
        example: true,
        'x-linode-cli-display': 5,
        'x-linode-filterable': true,
      }),
    label: z
      .string()
      .min(3)
      .max(128)
      .exactOptional()
      .openapi({
        description: "The StackScript's label is for display purposes only.\n",
        example: 'a-stackscript',
        'x-linode-cli-display': 3,
        'x-linode-filterable': true,
      }),
    mine: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns `true` if this StackScript is owned by the account of the user making the request, and the user\nmaking the request is unrestricted or has access to this StackScript.\n',
        example: true,
        readOnly: true,
        'x-linode-filterable': true,
      }),
    rev_note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field allows you to add notes for the set of revisions made to this StackScript.\n',
        example: 'Set up MySQL',
        'x-linode-filterable': true,
      }),
    script: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The script to execute when provisioning a new Linode with this StackScript.\n',
        example: '"#!/bin/bash"\n',
        'x-linode-cli-format': 'file',
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date this StackScript was last updated.\n',
        example: '2018-01-01T00:01:01',
        readOnly: true,
        'x-linode-cli-display': 7,
      }),
    user_defined_fields: z
      .array(UserDefinedFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.\n',
        example: { example: 'hunter2', label: 'Enter the DB password', name: 'DB_PASSWORD' },
        readOnly: true,
      }),
    user_gravatar_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Gravatar ID for the User who created the StackScript.\n',
        example: 'a445b305abda30ebc766bc7fda037c37',
        readOnly: true,
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The User who created the StackScript.\n',
        example: 'myuser',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({
    description:
      'A StackScript enables you to quickly deploy a fully-configured application in an automated manner.\n',
    required: [],
  })
  .openapi('StackScript')

const StatsDataSchema = z
  .object({
    x: z
      .int()
      .exactOptional()
      .openapi({
        description: 'A stats graph data point.\n',
        example: 11513761600000,
        readOnly: true,
      }),
    y: z
      .int()
      .exactOptional()
      .openapi({ description: 'A stats graph data point.\n', example: 29.94, readOnly: true }),
  })
  .openapi({ description: 'A stat data point.\n', required: [] })
  .openapi('StatsData')

const StatsDataAvailableSchema = z
  .object({
    cpu: z
      .array(StatsDataSchema)
      .exactOptional()
      .openapi({ description: 'CPU usage stats from the last 24 hours.' }),
    disk: z
      .array(StatsDataSchema)
      .exactOptional()
      .openapi({ description: 'Disk usage stats from the last 24 hours.' }),
    net_in: z
      .array(StatsDataSchema)
      .exactOptional()
      .openapi({ description: 'Inbound network traffic stats from the last 24 hours.' }),
    net_out: z
      .array(StatsDataSchema)
      .exactOptional()
      .openapi({ description: 'Outbound network traffic stats from the last 24 hours.' }),
    swap: z
      .array(StatsDataSchema)
      .exactOptional()
      .openapi({ description: 'Swap usage stats from the last 24 hours.' }),
  })
  .openapi({
    description: 'A collection of graph data returned for managed stats.\n',
    required: [],
  })
  .openapi('StatsDataAvailable')

const StatsDataUnavailableSchema = z
  .array(z.string().openapi({ example: 'Graphs are not yet available.' }))
  .openapi({
    description: 'An array of error messages if managed stats are unavaliable.\n',
    readOnly: true,
  })
  .openapi('StatsDataUnavailable')

const SupportTicketSchema = z
  .object({
    attachments: z
      .array(z.string().openapi({ example: ['screenshot.jpg', 'screenshot.txt'] }))
      .exactOptional()
      .openapi({
        description:
          'A list of filenames representing attached files associated with this Ticket.\n',
        readOnly: true,
      }),
    closable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Support Ticket may be closed.\n', example: false }),
    closed: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time this Ticket was closed.\n',
        example: '2015-06-04T16:07:03',
        readOnly: true,
        'x-linode-filterable': true,
      }),
    description: z
      .string()
      .min(1)
      .max(65000)
      .exactOptional()
      .openapi({
        description: 'The full details of the issue or question.\n',
        example:
          "I'm having trouble setting the root password on my Linode. I tried following the instructions but something is not working and I'm not sure what I'm doing wrong. Can you please help me figure out how I can reset it?\n",
        readOnly: true,
        'x-linode-cli-display': 5,
      }),
    entity: z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({
            description: "The unique ID for this Ticket's entity.\n",
            example: 10400,
            readOnly: true,
          }),
        label: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The current label of this entity.\n',
            example: 'linode123456',
            readOnly: true,
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The type of entity this is related to.\n',
            example: 'linode',
            readOnly: true,
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL where you can access the object this event is for. If a relative URL, it is relative to the domain you retrieved the entity from.\n',
            example: '/v4/linode/instances/123456',
            readOnly: true,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The entity this Ticket was opened for.\n',
        readOnly: true,
        'x-linode-cli-display': 6,
        required: [],
      }),
    gravatar_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Gravatar ID of the User who opened this Ticket.\n',
        example: '474a1b7373ae0be4132649e69c36ce30',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Support Ticket.\n',
        example: 11223344,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    opened: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time this Ticket was created.\n',
        example: '2015-06-04T14:16:44',
        readOnly: true,
        'x-linode-cli-display': 4,
        'x-linode-filterable': true,
      }),
    opened_by: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The User who opened this Ticket.\n',
        example: 'some_user',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    status: z
      .enum(['closed', 'new', 'open'])
      .exactOptional()
      .openapi({
        description: 'The current status of this Ticket.',
        example: 'open',
        readOnly: true,
      }),
    summary: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'The summary or title for this Ticket.\n',
        example: 'Having trouble resetting root password on my Linode\n',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time this Ticket was last updated.\n',
        example: '2015-06-04T16:07:03',
        readOnly: true,
        'x-linode-filterable': true,
      }),
    updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The User who last updated this Ticket.\n',
        example: 'some_other_user',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Support Ticket opened on your Account.\n', required: [] })
  .openapi('SupportTicket')

const SupportTicketReplySchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time this Ticket reply was created.\n',
        example: '2015-06-02T14:31:41',
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    created_by: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The User who submitted this reply.\n',
        example: 'John Q. Linode',
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The body of this Support Ticket reply.\n',
        example:
          "Hello,\\nI'm sorry to hear that you are having trouble resetting the root password of your Linode. Just to be sure, have you tried to follow the instructions in our online documentation? The link is here:\\n \\nhttps://linode.com/docs/guides/reset-the-root-password-on-your-linode/ \\n\\nIf you have, please reply with any additional steps you have also taken.\\n\\nRegards, Linode Support Team\n",
        readOnly: true,
      }),
    from_linode: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If set to true, this reply came from a Linode employee.\n',
        example: true,
        readOnly: true,
      }),
    gravatar_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Gravatar ID of the User who created this reply.\n',
        example: '474a1b7373ae0be4132649e69c36ce30',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Support Ticket reply.\n',
        example: 11223345,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
  })
  .openapi({ description: 'An object representing a reply to a Support Ticket.\n', required: [] })
  .openapi('SupportTicketReply')

const SupportTicketRequestSchema = z
  .object({
    database_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Managed Database this ticket is regarding, if relevant.\n',
      }),
    description: z
      .string()
      .min(1)
      .max(65000)
      .openapi({
        description: 'The full details of the issue or question.\n',
        example:
          "I'm having trouble setting the root password on my Linode. I tried following the instructions but something is not working and I'm not sure what I'm doing wrong. Can you please help me figure out how I can reset it?\n",
      }),
    domain_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Domain this ticket is regarding, if relevant.\n',
        example: null,
      }),
    firewall_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID of the Firewall this ticket is regarding, if relevant.\n' }),
    linode_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Linode this ticket is regarding, if relevant.\n',
        example: 123,
      }),
    lkecluster_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Kubernetes cluster this ticket is regarding, if relevant.\n',
        example: 123,
      }),
    longviewclient_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Longview client this ticket is regarding, if relevant.\n',
        example: null,
      }),
    managed_issue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Designates if this ticket is related to a [Managed service](https://www.linode.com/products/managed/). If `true`, the following constraints will apply:\n* No ID attributes (i.e. `linode_id`, `domain_id`, etc.) should be provided with this request.\n* Your account must have a [Managed service enabled](/docs/api/managed/#managed-service-enable).\n',
        example: false,
      }),
    nodebalancer_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the NodeBalancer this ticket is regarding, if relevant.\n',
        example: null,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Region](/docs/api/regions/) ID for the associated VLAN this ticket is regarding.\n\nOnly allowed when submitting a VLAN ticket.\n',
        example: null,
      }),
    summary: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description: 'The summary or title for this SupportTicket.\n',
        example: 'Having trouble resetting root password on my Linode\n',
      }),
    vlan: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label of the VLAN this ticket is regarding, if relevant. To view your VLANs, use the VLANs List ([GET /networking/vlans](/docs/api/networking/#vlans-list)) endpoint.\n\nRequires a specified `region` to identify the VLAN.\n',
        example: null,
      }),
    volume_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the Volume this ticket is regarding, if relevant.\n',
        example: null,
      }),
  })
  .openapi({
    description:
      'An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.\nOnly one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.\n',
    required: ['summary', 'description'],
  })
  .openapi('SupportTicketRequest')

const TagSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A Label used for organization of objects on your Account.\n',
        example: 'example tag',
      }),
  })
  .openapi({
    description:
      'A tag that has been applied to an object on your Account. Tags are currently for organizational purposes only.\n',
    required: [],
  })
  .openapi('Tag')

const TransferSchema = z
  .object({
    billable: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The amount of your transfer pool that is billable this billing cycle.\n',
        example: 0,
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    quota: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The amount of network usage allowed this billing cycle.\n',
        example: 9141,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    used: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The amount of network usage you have used this billing cycle.\n',
        example: 2,
        readOnly: true,
        'x-linode-cli-display': 2,
      }),
  })
  .openapi({
    description:
      'An object representing your network utilization for the current month, in Gigabytes.\n',
    required: [],
  })
  .openapi('Transfer')

const TrustedDeviceSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked.\n',
        example: '2018-01-01T01:01:01',
        readOnly: true,
      }),
    expiry: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this TrustedDevice session expires.  Sessions typically last 30 days.\n',
        example: '2018-01-31T01:01:01',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID for this TrustedDevice',
        example: 123,
        readOnly: true,
      }),
    last_authenticated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The last time this TrustedDevice was successfully used to authenticate to <a target="_top" href="https://login.linode.com">login.linode.com</a>.\n',
        example: '2018-01-05T12:57:12',
        readOnly: true,
      }),
    last_remote_addr: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last IP Address to successfully authenticate with this TrustedDevice.\n',
        example: '203.0.113.1',
        readOnly: true,
      }),
    user_agent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The User Agent of the browser that created this TrustedDevice session.\n',
        example:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36 Vivaldi/2.1.1337.36\n',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.\n',
    required: [],
  })
  .openapi('TrustedDevice')

const UserSchema = z
  .object({
    email: z
      .email()
      .exactOptional()
      .openapi({
        description:
          'The email address for the User. Linode sends emails to this address for account management communications. May be used for other communications as configured.\n',
        example: 'example_user@linode.com',
        'x-linode-cli-display': 2,
      }),
    restricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the User must be granted access to perform actions or access entities on this Account. See User Grants View ([GET /account/users/{username}/grants](/docs/api/account/#users-grants-view)) for details on how to configure grants for a restricted User.\n',
        example: true,
        'x-linode-cli-display': 3,
      }),
    ssh_keys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of SSH Key labels added by this User.\n\nUsers can add keys with the SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) command.\n\nThese keys are deployed when this User is included in the `authorized_users`\nfield of the following requests:\n- Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))\n- Linode Rebuild ([POST /linode/instances/{linodeId}/rebuild](/docs/api/linode-instances/#linode-rebuild))\n- Disk Create ([POST /linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disk-create))\n',
        example: ['home-pc', 'laptop'],
        readOnly: true,
      }),
    tfa_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean value indicating if the User has Two Factor Authentication (TFA) enabled. See the Create Two Factor Secret ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) endpoint to enable TFA.\n',
        readOnly: true,
      }),
    username: z
      .string()
      .regex(/^[a-zA-Z0-9]((?![_-]{2,})[a-zA-Z0-9-_])+[a-zA-Z0-9]$/)
      .min(3)
      .max(32)
      .exactOptional()
      .openapi({
        description:
          "The User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).\n",
        example: 'example_user',
        'x-linode-cli-display': 1,
        'x-linode-filterable': true,
      }),
  })
  .openapi({
    description:
      "A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.\n",
    required: [],
  })
  .openapi('User')

const VlansSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date this VLAN was created.\n',
        example: '2020-01-01T00:01:01',
        readOnly: true,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of this VLAN.',
        example: 'vlan-example',
        readOnly: true,
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    linodes: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description: 'An array of Linode IDs attached to this VLAN.\n',
        example: [111, 222],
        readOnly: true,
        'x-linode-cli-display': 3,
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This VLAN's data center region.\n\n**Note:** Currently, a VLAN can only be assigned to a Linode\nwithin the same data center region.\n",
        example: 'ap-west',
        readOnly: true,
        'x-linode-cli-display': 1,
        'x-linode-filterable': true,
      }),
  })
  .openapi({
    description: 'A virtual local area network (VLAN) associated with your Account.\n',
    required: [],
  })
  .openapi('Vlans')

const VolumeSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Volume was created.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
    filesystem_path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.\n",
        example: '/dev/disk/by-id/scsi-0Linode_Volume_my-volume',
        readOnly: true,
      }),
    hardware_type: z
      .enum(['hdd', 'nvme'])
      .exactOptional()
      .openapi({
        description: 'The storage type of this Volume.',
        example: 'nvme',
        readOnly: true,
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique ID of this Volume.',
        example: 12345,
        readOnly: true,
        'x-linode-cli-display': 1,
      }),
    label: z
      .string()
      .regex(/^[a-zA-Z]((?!--|__)[a-zA-Z0-9-_])+$/)
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({
        description: "The Volume's label is for display purposes only.\n",
        example: 'my-volume',
        'x-linode-cli-display': 2,
        'x-linode-filterable': true,
      }),
    linode_id: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If a Volume is attached to a specific Linode, the ID of that Linode will be displayed here.\n',
        example: 12346,
        'x-linode-cli-display': 6,
      }),
    linode_label: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If a Volume is attached to a specific Linode, the label of that Linode will be displayed here.\n',
        example: 'linode123',
        readOnly: true,
        'x-linode-cli-display': 7,
      }),
    region: z
      .lazy(() => RegionSchema)
      .exactOptional()
      .openapi({ 'x-linode-cli-display': 5 }),
    size: z
      .int()
      .max(10240)
      .exactOptional()
      .openapi({
        description: "The Volume's size, in GiB.\n",
        example: 30,
        'x-linode-cli-display': 4,
      }),
    status: z
      .enum(['creating', 'active', 'resizing'])
      .exactOptional()
      .openapi({
        description:
          'The current status of the volume.  Can be one of:\n\n  * `creating` - the Volume is being created and is not yet available\n    for use.\n  * `active` - the Volume is online and available for use.\n  * `resizing` - the Volume is in the process of upgrading\n    its current capacity.\n',
        example: 'active',
        readOnly: true,
        'x-linode-cli-color': { active: 'green', contact_support: 'red', default_: 'yellow' },
        'x-linode-cli-display': 3,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of Tags applied to this object.  Tags are for organizational purposes only.\n',
        example: ['example tag', 'another example'],
        'x-linode-filterable': true,
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When this Volume was last updated.',
        example: '2018-01-01T00:01:01',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Block Storage Volume associated with your Account.\n', required: [] })
  .openapi('Volume')

const WarningObjectSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specific information related to the warning.\n',
        example: 'Linode 123 could not be rebooted.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The general warning message.\n',
        example: 'Unable to reboot Linode.',
      }),
  })
  .openapi({
    description: 'An object for describing a single warning associated with a response.\n',
    required: [],
  })
  .openapi('WarningObject')

const AcceptedResponseResponse = {
  description:
    'Accepted with warning.\n\nA warnings array is included with the standard 200 response body.\n',
  content: {
    'application/json': {
      schema: z
        .object({ warnings: z.array(WarningObjectSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const DeprecatedResponseResponse = {
  description:
    'Request successful. This endpoint is deprecated and may be removed in a future release.\n\nA warnings array is included with the standard 200 response body.\n',
  content: {
    'application/json': {
      schema: z
        .object({ warnings: z.array(WarningObjectSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const ErrorResponseResponse = {
  description: 'Error',
  content: {
    'application/json': {
      schema: z
        .object({ errors: z.array(ErrorObjectSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const PageOffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description: 'The page of a collection to return.',
      in: 'query',
      name: 'page',
      required: false,
      schema: { default: 1, minimum: 1, type: 'integer' },
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(25).max(500),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of items to return per page.',
      in: 'query',
      name: 'page_size',
      schema: { default: 100, maximum: 500, minimum: 25, type: 'integer' },
      required: false,
    },
  })

const OauthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.linode.com/oauth/authorize',
      scopes: {
        'account:read_only': 'Allows access to GET information about your Account.',
        'account:read_write': 'Allows access to all endpoints related to your Account.',
        'databases:read_only': '*Originally missing*',
        'databases:read_write': '*Originally missing*',
        'domains:read_only': 'Allows access to GET Domains on your Account.',
        'domains:read_write': 'Allows access to all Domain endpoints.',
        'events:read_only': 'Allows access to GET your Events.',
        'events:read_write': 'Allows access to all endpoints related to your Events.',
        'firewall:read_only': 'Allows access to GET information about your Firewalls.',
        'firewall:read_write': 'Allows acces to all Firewall endpoints.',
        'images:read_only': 'Allows access to GET your Images.',
        'images:read_write': 'Allows access to all endpoints related to your Images.',
        'ips:read': '*Originally missing*',
        'ips:read_only': 'Allows access to GET your ips.',
        'ips:read_write': 'Allows access to all endpoints related to your ips.',
        'linodes:read_only': 'Allows access to GET Linodes on your Account.',
        'linodes:read_write': 'Allow access to all endpoints related to your Linodes.',
        'lke:read_only': 'Allows access to GET LKE Clusters on your Account.',
        'lke:read_write': 'Allows access to all endpoints related to LKE Clusters on your Account.',
        'longview:read_only': 'Allows access to GET your Longview Clients.',
        'longview:read_write': 'Allows access to all endpoints related to your Longview Clients.',
        'nodebalancers:read_only': 'Allows access to GET NodeBalancers on your Account.',
        'nodebalancers:read_write': 'Allows access to all NodeBalancer endpoints.',
        'object_storage:read_only':
          'Allows access to GET information related to your Object Storage.',
        'object_storage:read_write': 'Allows access to all Object Storage endpoints.',
        'stackscripts:read_only': 'Allows access to GET your StackScripts.',
        'stackscripts:read_write': 'Allows access to all endpoints related to your StackScripts.',
        'volumes:read_only': 'Allows access to GET your Volumes.',
        'volumes:read_write': 'Allows access to all endpoints related to your Volumes.',
      },
      tokenUrl: 'https://login.linode.com/oauth/token',
    },
  },
  type: 'oauth2',
}

const PersonalAccessTokenSecurityScheme = { scheme: 'bearer', type: 'http' }

const AttachVolumeLink = {
  operationId: 'attachVolume',
  parameters: { volumeID: '$request.body#/id' },
}

const BootLinodeLink = {
  operationId: 'bootLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const CloneLinodeLink = {
  operationId: 'cloneLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const CloneVolumeLink = {
  operationId: 'cloneVolume',
  parameters: { volumeId: '$request.body#/id' },
}

const DeleteLinodeLink = {
  operationId: 'deleteLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const DetachVolumeLink = {
  operationId: 'detachVolume',
  parameters: { volumeId: '$request.body#/id' },
}

const MutateLinodeLink = {
  operationId: 'mutateLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const RebootLinodeLink = {
  operationId: 'rebootLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const RebuildLinodeLink = {
  operationId: 'rebuildLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const RescueLinodeLink = {
  operationId: 'rescueLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const ResizeLinodeLink = {
  operationId: 'resizeLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const ResizeVolumeLink = {
  operationId: 'resizeVolume',
  parameters: { volumeId: '$request.body#/id' },
}

const ShutdownLinodeLink = {
  operationId: 'shutdownLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

const UpdateLinodeLink = {
  operationId: 'updateLinodeInstance',
  parameters: { linodeId: '$request.body#/id' },
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Account View',
  description: 'Returns the contact and billing information related to your Account.\n',
  operationId: 'getAccount',
  responses: {
    200: {
      description: 'Returns a single Account object.',
      content: { 'application/json': { schema: AccountSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putAccountRoute = createRoute({
  method: 'put',
  path: '/account',
  tags: ['Account'],
  summary: 'Account Update',
  description: 'Updates contact and billing information related to your Account.\n',
  operationId: 'updateAccount',
  request: {
    body: {
      description:
        'Update contact and billing information.\n\nAccount properties that are excluded from a request remain unchanged.\n\nWhen updating an Account\'s `country` to "US", an error is returned if the Account\'s `zip` is not a valid US zip code.\n',
      content: { 'application/json': { schema: AccountSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated Account.',
      content: { 'application/json': { schema: AccountSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountCancelRoute = createRoute({
  method: 'post',
  path: '/account/cancel',
  tags: ['Account'],
  summary: 'Account Cancel',
  description:
    'Cancels an active Linode account. This action will cause Linode to attempt to charge the credit card on file for the remaining balance. An error will occur if Linode fails to charge the credit card on file. Restricted users will not be able to cancel an account.\n',
  operationId: 'cancelAccount',
  request: {
    body: {
      description: 'Supply a comment stating the reason that you are cancelling your account.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              comments: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Any reason for cancelling the account, and any other comments you might have about your Linode service.\n',
                  example: "I'm consolidating multiple accounts into one.",
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
      description: 'Account cancelled',
      content: {
        'application/json': {
          schema: z
            .object({
              survey_link: z
                .string()
                .exactOptional()
                .openapi({ description: "A link to Linode's exit survey." }),
            })
            .openapi({ example: { survey_link: "https://alinktothesurvey.com'" }, required: [] }),
        },
      },
    },
    409: {
      description: 'Could not charge the credit card on file',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'A string explaining that the account could not be cancelled because there is an outstanding balance on the account that must be paid first.\n',
                          example:
                            'We were unable to charge your credit card for services rendered. We cannot cancel this account until the balance has been paid.\n',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountCreditCardRoute = createRoute({
  method: 'post',
  path: '/account/credit-card',
  tags: ['Account'],
  summary: 'Credit Card Add/Edit',
  description:
    '**DEPRECATED**. Please use Payment Method Add ([POST /account/payment-methods](/docs/api/account/#payment-method-add)).\n\nAdds a credit card Payment Method to your account and sets it as the default method.\n',
  operationId: 'createCreditCard',
  request: {
    body: {
      description: 'Update the credit card information associated with your Account.',
      content: { 'application/json': { schema: CreditCardSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Credit Card updated.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountEntityTransfersRoute = createRoute({
  method: 'get',
  path: '/account/entity-transfers',
  tags: ['Account'],
  summary: 'Entity Transfers List',
  description:
    '**DEPRECATED**. Please use [Service Transfers List](/docs/api/account/#service-transfers-list).\n',
  operationId: 'getEntityTransfers',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'Returns a paginated list of Entity Transfer objects containing the details of all transfers that have been created and accepted by this account.\n',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(EntityTransferSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountEntityTransfersRoute = createRoute({
  method: 'post',
  path: '/account/entity-transfers',
  tags: ['Account'],
  summary: 'Entity Transfer Create',
  description:
    '**DEPRECATED**. Please use [Service Transfer Create](/docs/api/account/#service-transfer-create).\n',
  operationId: 'createEntityTransfer',
  request: {
    body: {
      description: 'The entities to include in this transfer request.',
      content: {
        'application/json': {
          schema: z
            .object({ entities: z.lazy(() => EntityTransferSchema) })
            .openapi({ required: ['entities'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns an Entity Transfer object for the request.\n',
      content: { 'application/json': { schema: EntityTransferSchema } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountEntityTransfersTokenRoute = createRoute({
  method: 'get',
  path: '/account/entity-transfers/{token}',
  tags: ['Account'],
  summary: 'Entity Transfer View',
  description:
    '**DEPRECATED**. Please use [Service Transfer View](/docs/api/account/#service-transfer-view).\n',
  operationId: 'getEntityTransfer',
  request: {
    params: z.object({
      token: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Entity Transfer.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns an Entity Transfer object containing the details of the transfer for the specified token.\n',
      content: { 'application/json': { schema: EntityTransferSchema } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const deleteAccountEntityTransfersTokenRoute = createRoute({
  method: 'delete',
  path: '/account/entity-transfers/{token}',
  tags: ['Account'],
  summary: 'Entity Transfer Cancel',
  description:
    '**DEPRECATED**. Please use [Service Transfer Cancel](/docs/api/account/#service-transfer-cancel).\n',
  operationId: 'deleteEntityTransfer',
  request: {
    params: z.object({
      token: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Entity Transfer.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Entity Transfer cancelled.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountEntityTransfersTokenAcceptRoute = createRoute({
  method: 'post',
  path: '/account/entity-transfers/{token}/accept',
  tags: ['Account'],
  summary: 'Entity Transfer Accept',
  description:
    '**DEPRECATED**. Please use [Service Transfer Accept](/docs/api/account/#service-transfer-accept).\n',
  operationId: 'acceptEntityTransfer',
  request: {
    params: z.object({
      token: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Entity Transfer.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Entity Transfer accepted.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountEventsRoute = createRoute({
  method: 'get',
  path: '/account/events',
  tags: ['Account'],
  summary: 'Events List',
  description:
    'Returns a collection of Event objects representing actions taken on your Account from the last 90 days. The Events returned depend on your grants.\n',
  operationId: 'getEvents',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated lists of Event objects from the last 90 days.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(EventSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['events:read_only'] }],
})

export const getAccountEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/account/events/{eventId}',
  tags: ['Account'],
  summary: 'Event View',
  description: 'Returns a single Event object.\n',
  operationId: 'getEvent',
  request: {
    params: z.object({
      eventId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Event.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An Event object',
      content: { 'application/json': { schema: EventSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['events:read_only'] }],
})

export const postAccountEventsEventIdReadRoute = createRoute({
  method: 'post',
  path: '/account/events/{eventId}/read',
  tags: ['Account'],
  summary: 'Event Mark as Read',
  description: 'Marks a single Event as read.',
  operationId: 'eventRead',
  request: {
    params: z.object({
      eventId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Event to designate as read.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Event read.', content: { 'application/json': { schema: z.object({}) } } },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['events:read_only'] }],
})

export const postAccountEventsEventIdSeenRoute = createRoute({
  method: 'post',
  path: '/account/events/{eventId}/seen',
  tags: ['Account'],
  summary: 'Event Mark as Seen',
  description: 'Marks all Events up to and including this Event by ID as seen.\n',
  operationId: 'eventSeen',
  request: {
    params: z.object({
      eventId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Event to designate as seen.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Events seen.', content: { 'application/json': { schema: z.object({}) } } },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['events:read_only'] }],
})

export const getAccountInvoicesRoute = createRoute({
  method: 'get',
  path: '/account/invoices',
  tags: ['Account'],
  summary: 'Invoices List',
  description: 'Returns a paginated list of Invoices against your Account.\n',
  operationId: 'getInvoices',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of Invoice objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(InvoiceSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountInvoicesInvoiceIdRoute = createRoute({
  method: 'get',
  path: '/account/invoices/{invoiceId}',
  tags: ['Account'],
  summary: 'Invoice View',
  description: 'Returns a single Invoice object.',
  operationId: 'getInvoice',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Invoice.',
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An Invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountInvoicesInvoiceIdItemsRoute = createRoute({
  method: 'get',
  path: '/account/invoices/{invoiceId}/items',
  tags: ['Account'],
  summary: 'Invoice Items List',
  description: 'Returns a paginated list of Invoice items.',
  operationId: 'getInvoiceItems',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Invoice.',
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A paginated list of InvoiceItem objects',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(InvoiceItemSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountLoginsRoute = createRoute({
  method: 'get',
  path: '/account/logins',
  tags: ['Account'],
  summary: 'User Logins List All',
  description:
    'Returns a collection of successful logins for all users on the account during the last 90 days. This command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getAccountLogins',
  responses: {
    200: {
      description:
        'A collection of successful logins for all users on the account during the last 90 days.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LoginSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountLoginsLoginIdRoute = createRoute({
  method: 'get',
  path: '/account/logins/{loginId}',
  tags: ['Account'],
  summary: 'Login View',
  description:
    'Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This command can only be accessed by the unrestricted users of the account.\n',
  operationId: 'getAccountLogin',
  request: {
    params: z.object({
      loginId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the login object to access.',
            in: 'path',
            name: 'loginId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested login object.',
      content: { 'application/json': { schema: LoginSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountMaintenanceRoute = createRoute({
  method: 'get',
  path: '/account/maintenance',
  tags: ['Account'],
  summary: 'Maintenance List',
  description:
    'Returns a collection of Maintenance objects for any entity a user has permissions to view. Cancelled Maintenance objects are not returned.\n\nCurrently, Linodes are the only entities available for viewing.\n',
  operationId: 'getMaintenance',
  responses: {
    200: {
      description: 'Returns a paginated list of Maintenance objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(MaintenanceSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: [] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getAccountNotificationsRoute = createRoute({
  method: 'get',
  path: '/account/notifications',
  tags: ['Account'],
  summary: 'Notifications List',
  description:
    'Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.\nYou cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.\n',
  operationId: 'getNotifications',
  responses: {
    200: {
      description: 'Returns a paginated list of Notification objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NotificationSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountOauthClientsRoute = createRoute({
  method: 'get',
  path: '/account/oauth-clients',
  tags: ['Account'],
  summary: 'OAuth Clients List',
  description:
    'Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.\n',
  operationId: 'getClients',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of OAuth Clients.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(OAuthClientSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountOauthClientsRoute = createRoute({
  method: 'post',
  path: '/account/oauth-clients',
  tags: ['Account'],
  summary: 'OAuth Client Create',
  description:
    'Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.\n',
  operationId: 'createClient',
  request: {
    body: {
      description: 'Information about the OAuth Client to create.',
      content: {
        'application/json': {
          schema: OAuthClientSchema.openapi({ required: ['label', 'redirect_uri'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Client created successfully.',
      content: { 'application/json': { schema: OAuthClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountOauthClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/account/oauth-clients/{clientId}',
  tags: ['Account'],
  summary: 'OAuth Client View',
  description: 'Returns information about a single OAuth client.\n',
  operationId: 'getClient',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The OAuth Client ID to look up.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the requested client.',
      content: { 'application/json': { schema: OAuthClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putAccountOauthClientsClientIdRoute = createRoute({
  method: 'put',
  path: '/account/oauth-clients/{clientId}',
  tags: ['Account'],
  summary: 'OAuth Client Update',
  description:
    'Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.\n',
  operationId: 'updateClient',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The OAuth Client ID to look up.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: OAuthClientSchema } },
    },
  },
  responses: {
    200: {
      description: 'Client updated successfully.',
      content: { 'application/json': { schema: OAuthClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteAccountOauthClientsClientIdRoute = createRoute({
  method: 'delete',
  path: '/account/oauth-clients/{clientId}',
  tags: ['Account'],
  summary: 'OAuth Client Delete',
  description:
    'Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target="_top" href="https://login.linode.com">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).\n',
  operationId: 'deleteClient',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The OAuth Client ID to look up.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountOauthClientsClientIdResetSecretRoute = createRoute({
  method: 'post',
  path: '/account/oauth-clients/{clientId}/reset-secret',
  tags: ['Account'],
  summary: 'OAuth Client Secret Reset',
  description:
    'Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.\n',
  operationId: 'resetClientSecret',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The OAuth Client ID to look up.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Client secret reset successfully.',
      content: { 'application/json': { schema: OAuthClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountOauthClientsClientIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/account/oauth-clients/{clientId}/thumbnail',
  tags: ['Account'],
  summary: 'OAuth Client Thumbnail View',
  description:
    'Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.\n',
  operationId: 'getClientThumbnail',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The OAuth Client ID to look up.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The client's thumbnail.",
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    default: ErrorResponseResponse,
  },
})

export const putAccountOauthClientsClientIdThumbnailRoute = createRoute({
  method: 'put',
  path: '/account/oauth-clients/{clientId}/thumbnail',
  tags: ['Account'],
  summary: 'OAuth Client Thumbnail Update',
  description:
    'Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.\n',
  operationId: 'setClientThumbnail',
  request: {
    params: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The OAuth Client ID to look up.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The image to set as the thumbnail.',
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Thumbnail updated successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/account/payment-methods',
  tags: ['Account'],
  summary: 'Payment Methods List',
  description: 'Returns a paginated list of Payment Methods for this Account.\n',
  operationId: 'getPaymentMethods',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of Payment Method objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PaymentMethodSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postAccountPaymentMethodsRoute = createRoute({
  method: 'post',
  path: '/account/payment-methods',
  tags: ['Account'],
  summary: 'Payment Method Add',
  description:
    'Adds a Payment Method to your Account with the option to set it as the default method.\n\n* Adding a default Payment Method removes the default status from any other Payment Method.\n\n* An Account can have up to 6 active Payment Methods.\n\n* Up to 60 Payment Methods can be added each day.\n\n* Prior to adding a Payment Method, ensure that your billing address information is up-to-date\nwith a valid `zip` by using the Account Update ([PUT /account](/docs/api/account/#account-update)) endpoint.\n\n* A `payment_method_add` event is generated when a payment is successfully submitted.\n',
  operationId: 'createPaymentMethod',
  request: {
    body: {
      description: 'The details of the Payment Method to add.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: CreditCardSchema,
              is_default: z.lazy(() => PaymentMethodSchema),
              type: z
                .literal('credit_card')
                .openapi({
                  description:
                    'The type of Payment Method.\n\nAlternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/) guide\nfor details and instructions.\n',
                  example: 'credit_card',
                }),
            })
            .openapi({
              description: 'Payment Method Request Object.',
              required: ['type', 'data', 'is_default'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Payment Method added.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getAccountPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'get',
  path: '/account/payment-methods/{paymentMethodId}',
  tags: ['Account'],
  summary: 'Payment Method View',
  description: 'View the details of the specified Payment Method.\n',
  operationId: 'getPaymentMethod',
  request: {
    params: z.object({
      paymentMethodId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Payment Method to look up.',
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a Payment Method Object.',
      content: { 'application/json': { schema: PaymentMethodSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const deleteAccountPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'delete',
  path: '/account/payment-methods/{paymentMethodId}',
  tags: ['Account'],
  summary: 'Payment Method Delete',
  description:
    'Deactivate the specified Payment Method.\n\nThe default Payment Method can not be deleted. To add a new default Payment Method, access the Payment Method\nAdd ([POST /account/payment-methods](/docs/api/account/#payment-method-add)) endpoint. To designate an existing\nPayment Method as the default method, access the Payment Method Make Default\n([POST /account/payment-methods/{paymentMethodId}/make-default](/docs/api/account/#payment-method-make-default))\nendpoint.\n',
  operationId: 'deletePaymentMethod',
  request: {
    params: z.object({
      paymentMethodId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Payment Method to look up.',
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payment Method deactivated.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute = createRoute({
  method: 'post',
  path: '/account/payment-methods/{paymentMethodId}/make-default',
  tags: ['Account'],
  summary: 'Payment Method Make Default',
  description:
    'Make the specified Payment Method the default method for automatically processing payments.\n\nRemoves the default status from any other Payment Method.\n',
  operationId: 'makePaymentMethodDefault',
  request: {
    params: z.object({
      paymentMethodId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Payment Method to make default.',
            in: 'path',
            name: 'paymentMethodId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payment Method successfully set as the default method.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getAccountPaymentsRoute = createRoute({
  method: 'get',
  path: '/account/payments',
  tags: ['Account'],
  summary: 'Payments List',
  description: 'Returns a paginated list of Payments made on this Account.\n',
  operationId: 'getPayments',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of Payment objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PaymentSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountPaymentsRoute = createRoute({
  method: 'post',
  path: '/account/payments',
  tags: ['Account'],
  summary: 'Payment Make',
  description:
    'Makes a Payment to your Account.\n\n* The requested amount is charged to the default Payment Method if no `payment_method_id` is specified.\n\n* A `payment_submitted` event is generated when a payment is successfully submitted.\n',
  operationId: 'createPayment',
  request: {
    body: {
      description: 'Information about the Payment you are making.',
      content: { 'application/json': { schema: PaymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Payment submitted successfully.',
      content: { 'application/json': { schema: PaymentSchema } },
    },
    202: AcceptedResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountPaymentsPaypalRoute = createRoute({
  method: 'post',
  path: '/account/payments/paypal',
  tags: ['Account'],
  summary: 'PayPal Payment Stage',
  description:
    '**Note**: This endpoint is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/).\n',
  operationId: 'createPayPalPayment',
  request: {
    body: {
      description: 'The amount of the Payment to submit via PayPal.\n',
      content: { 'application/json': { schema: PayPalSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'PayPal Payment staged.',
      content: {
        'application/json': {
          schema: z
            .object({
              checkout_token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The checkout token generated for this Payment.\n',
                  example: 'EC-1A2B3C4D5E6F7G8H9',
                  readOnly: true,
                }),
              payment_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The paypal-generated ID for this Payment. Used when authorizing the Payment in PayPal's interface.\n",
                  example: 'PAY-1234567890ABCDEFGHIJKLMN',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    299: DeprecatedResponseResponse,
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountPaymentsPaypalExecuteRoute = createRoute({
  method: 'post',
  path: '/account/payments/paypal/execute',
  tags: ['Account'],
  summary: 'Staged/Approved PayPal Payment Execute',
  description:
    '**Note**: This endpoint is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/).\n',
  operationId: 'executePayPalPayment',
  request: {
    body: {
      description: 'The details of the Payment to execute.\n',
      content: { 'application/json': { schema: PayPalExecuteSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'PayPal Payment executed.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    202: AcceptedResponseResponse,
    299: DeprecatedResponseResponse,
    default: ErrorResponseResponse,
  },
  deprecated: true,
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountPaymentsPaymentIdRoute = createRoute({
  method: 'get',
  path: '/account/payments/{paymentId}',
  tags: ['Account'],
  summary: 'Payment View',
  description: 'Returns information about a specific Payment.\n',
  operationId: 'getPayment',
  request: {
    params: z.object({
      paymentId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Payment to look up.',
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A Payment object.',
      content: { 'application/json': { schema: PaymentSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountPromoCodesRoute = createRoute({
  method: 'post',
  path: '/account/promo-codes',
  tags: ['Account'],
  summary: 'Promo Credit Add',
  description:
    "Adds an expiring Promo Credit to your account.\n\nThe following restrictions apply:\n\n* Your account must be less than 90 days old.\n* There must not be an existing Promo Credit already on your account.\n* The requesting User must be unrestricted. Use the User Update\n  ([PUT /account/users/{username}](/docs/api/account/#user-update)) to change a User's restricted status.\n* The `promo_code` must be valid and unexpired.\n",
  operationId: 'createPromoCredit',
  request: {
    body: {
      description: 'Enter a Promo Code to add its associated credit to your Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              promo_code: z.string().min(1).max(32).openapi({ description: 'The Promo Code.\n' }),
            })
            .openapi({ required: ['promo_code'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Promo Credit successfully added.\n',
      content: { 'application/json': { schema: PromotionSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountServiceTransfersRoute = createRoute({
  method: 'get',
  path: '/account/service-transfers',
  tags: ['Account'],
  summary: 'Service Transfers List',
  description:
    'Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getServiceTransfers',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'Returns a paginated list of Service Transfer objects containing the details of all transfers that have been created and accepted by this account.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ServiceTransferSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountServiceTransfersRoute = createRoute({
  method: 'post',
  path: '/account/service-transfers',
  tags: ['Account'],
  summary: 'Service Transfer Create',
  description:
    'Creates a transfer request for the specified services. A request can contain any of the specified service types\nand any number of each service type. At this time, only Linodes can be transferred.\n\nWhen created successfully, a confirmation email is sent to the account that created this transfer containing a\ntransfer token and instructions on completing the transfer.\n\nWhen a transfer is [accepted](/docs/api/account/#service-transfer-accept), the requested services are moved to\nthe receiving account. Linode services will not experience interruptions due to the transfer process. Backups\nfor Linodes are transferred as well.\n\nDNS records that are associated with requested services will not be transferred or updated. Please ensure that\nassociated DNS records have been updated or communicated to the recipient prior to the transfer.\n\nA transfer can take up to three hours to complete once accepted. When a transfer is\ncompleted, billing for transferred services ends for the sending account and begins for the receiving account.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nThere are several conditions that must be met in order to successfully create a transfer request:\n\n1. The account creating the transfer must not have a past due balance or active Terms of Service violation.\n\n1. The service must be owned by the account that is creating the transfer.\n\n1. The service must not be assigned to another Service Transfer that is pending or that has been accepted and is\nincomplete.\n\n1. Linodes must not:\n\n    * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.\n\n    * have any attached Block Storage Volumes.\n\n    * have any shared IP addresses.\n\n    * have any assigned /56, /64, or /116 IPv6 ranges.\n',
  operationId: 'createServiceTransfer',
  request: {
    body: {
      description: 'The services to include in this transfer request.',
      content: {
        'application/json': {
          schema: z
            .object({ entities: z.lazy(() => ServiceTransferSchema) })
            .openapi({ required: ['entities'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns a Service Transfer object for the request.\n',
      content: { 'application/json': { schema: ServiceTransferSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountServiceTransfersTokenRoute = createRoute({
  method: 'get',
  path: '/account/service-transfers/{token}',
  tags: ['Account'],
  summary: 'Service Transfer View',
  description:
    'Returns the details of the Service Transfer for the provided token.\n\nWhile a transfer is pending, any unrestricted user *of any account* can access this command. After a\ntransfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and\naccepted the transfer. If cancelled or expired, only unrestricted users of the account that created the\ntransfer can view it.\n',
  operationId: 'getServiceTransfer',
  request: {
    params: z.object({
      token: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Service Transfer.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns a Service Transfer object containing the details of the transfer for the specified token.\n',
      content: { 'application/json': { schema: ServiceTransferSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const deleteAccountServiceTransfersTokenRoute = createRoute({
  method: 'delete',
  path: '/account/service-transfers/{token}',
  tags: ['account'],
  summary: 'Service Transfer Cancel',
  description:
    'Cancels the Service Transfer for the provided token. Once cancelled, a transfer cannot be accepted or otherwise\nacted on in any way. If cancelled in error, the transfer must be\n[created](/docs/api/account/#service-transfer-create) again.\n\nWhen cancelled, an email notification for the cancellation is sent to the account that created\nthis transfer. Transfers can not be cancelled if they are expired or have been accepted.\n\nThis command can only be accessed by the unrestricted users of the account that created this transfer.\n',
  operationId: 'deleteServiceTransfer',
  request: {
    params: z.object({
      token: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Service Transfer.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service Transfer cancelled.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountServiceTransfersTokenAcceptRoute = createRoute({
  method: 'post',
  path: '/account/service-transfers/{token}/accept',
  tags: ['Account'],
  summary: 'Service Transfer Accept',
  description:
    "Accept a Service Transfer for the provided token to receive the services included in the transfer to your\naccount. At this time, only Linodes can be transferred.\n\nWhen accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer\ncan take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred\nservices ends for the sending account and begins for the receiving account.\n\nThis command can only be accessed by the unrestricted users of the account that receives the transfer. Users\nof the same account that created a transfer cannot accept the transfer.\n\nThere are several conditions that must be met in order to accept a transfer request:\n\n1. Only transfers with a `pending` status can be accepted.\n\n1. The account accepting the transfer must have a registered payment method and must not have a past due\n  balance or other account limitations for the services to be transferred.\n\n1. Both the account that created the transfer and the account that is accepting the transfer must not have any\nactive Terms of Service violations.\n\n1. The service must still be owned by the account that created the transfer.\n\n1. Linodes must not:\n\n    * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.\n\n    * have any attached Block Storage Volumes.\n\n    * have any shared IP addresses.\n\n    * have any assigned /56, /64, or /116 IPv6 ranges.\n\nAny and all of the above conditions must be cured and maintained by the relevant account prior to the\ntransfer's expiration to allow the transfer to be accepted by the receiving account.\n",
  operationId: 'acceptServiceTransfer',
  request: {
    params: z.object({
      token: z
        .uuid()
        .openapi({
          param: {
            description: 'The UUID of the Service Transfer.',
            in: 'path',
            name: 'token',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service Transfer accepted.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountSettingsRoute = createRoute({
  method: 'get',
  path: '/account/settings',
  tags: ['Account'],
  summary: 'Account Settings View',
  description:
    'Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.\n',
  operationId: 'getAccountSettings',
  responses: {
    200: {
      description: 'Returns a single Account settings object.',
      content: { 'application/json': { schema: AccountSettingsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putAccountSettingsRoute = createRoute({
  method: 'put',
  path: '/account/settings',
  tags: ['Account'],
  summary: 'Account Settings Update',
  description:
    'Updates your Account settings.\n\nTo update your Longview subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).\n',
  operationId: 'updateAccountSettings',
  request: {
    body: {
      description: 'Update Account settings information.',
      content: { 'application/json': { schema: AccountSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated Account settings.',
      content: { 'application/json': { schema: AccountSettingsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postAccountSettingsManagedEnableRoute = createRoute({
  method: 'post',
  path: '/account/settings/managed-enable',
  tags: ['Account'],
  summary: 'Linode Managed Enable',
  description:
    "Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](/docs/guides/linode-managed/) to learn more.\n",
  operationId: 'enableAccountManaged',
  responses: {
    200: {
      description: 'Managed services enabled for account.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountTransferRoute = createRoute({
  method: 'get',
  path: '/account/transfer',
  tags: ['Account'],
  summary: 'Network Utilization View',
  description:
    'Returns a Transfer object showing your network utilization, in GB, for the current month.\n',
  operationId: 'getTransfer',
  responses: {
    200: {
      description: 'Returns a single Transfer object.',
      content: { 'application/json': { schema: TransferSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getAccountUsersRoute = createRoute({
  method: 'get',
  path: '/account/users',
  tags: ['Account'],
  summary: 'Users List',
  description:
    "Returns a paginated list of Users on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nUsers may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.\n",
  operationId: 'getUsers',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Users.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(UserSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postAccountUsersRoute = createRoute({
  method: 'post',
  path: '/account/users',
  tags: ['Account'],
  summary: 'User Create',
  description:
    "Creates a User on your Account. Once created, a confirmation message containing\npassword creation and login instructions is sent to the User's email address.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nThe User's account access is determined by whether or not they are restricted,\nand what grants they have been given.\n",
  operationId: 'createUser',
  request: {
    body: {
      description: 'Information about the User to create.',
      content: {
        'application/json': { schema: UserSchema.openapi({ required: ['username', 'email'] }) },
      },
    },
  },
  responses: {
    200: {
      description: 'New User created successfully.',
      content: { 'application/json': { schema: UserSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountUsersUsernameRoute = createRoute({
  method: 'get',
  path: '/account/users/{username}',
  tags: ['Account'],
  summary: 'User View',
  description:
    'Returns information about a single User on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getUser',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username to look up.',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested User object',
      content: { 'application/json': { schema: UserSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putAccountUsersUsernameRoute = createRoute({
  method: 'put',
  path: '/account/users/{username}',
  tags: ['Account'],
  summary: 'User Update',
  description:
    'Update information about a User on your Account. This can be used to\nchange the restricted status of a User. When making a User restricted,\nno grants will be configured by default and you must then set up grants\nin order for the User to access anything on the Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'updateUser',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username to look up.',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The information to update.',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  responses: {
    200: {
      description: 'User updated successfully.',
      content: { 'application/json': { schema: UserSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteAccountUsersUsernameRoute = createRoute({
  method: 'delete',
  path: '/account/users/{username}',
  tags: ['Account'],
  summary: 'User Delete',
  description:
    "Deletes a User. The deleted User will be immediately logged out and\nmay no longer log in or perform any actions. All of the User's Grants\nwill be removed.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
  operationId: 'deleteUser',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username to look up.',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getAccountUsersUsernameGrantsRoute = createRoute({
  method: 'get',
  path: '/account/users/{username}/grants',
  tags: ['Account'],
  summary: "User's Grants View",
  description:
    'Returns the full grants structure for the specified account User\n(other than the account owner, see below for details). This includes all entities\non the Account alongside the level of access this User has to each of them.\n\nThis command can only be accessed by the unrestricted users of an account.\n\nThe current authenticated User, including the account owner, may view their\nown grants at the [/profile/grants](/docs/api/profile/#grants-list)\nendpoint, but will not see entities that they do not have access to.\n',
  operationId: 'getUserGrants',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username to look up.',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The User's grants.",
      content: { 'application/json': { schema: GrantsResponseSchema } },
    },
    204: {
      description:
        'This is an unrestricted User, and therefore has no grants to return. This User may access everything on the Account and perform all actions.\n',
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putAccountUsersUsernameGrantsRoute = createRoute({
  method: 'put',
  path: '/account/users/{username}/grants',
  tags: ['Account'],
  summary: "User's Grants Update",
  description:
    'Update the grants a User has. This can be used to give a User access\nto new entities or actions, or take access away.  You do not need to\ninclude the grant for every entity on the Account in this request; any\nthat are not included will remain unchanged.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'updateUserGrants',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username to look up.',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The grants to update. Omitted grants will be left unchanged.',
      content: { 'application/json': { schema: GrantsResponseSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Grants updated successfully.',
      content: { 'application/json': { schema: GrantsResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getDatabasesEnginesRoute = createRoute({
  method: 'get',
  path: '/databases/engines',
  tags: ['Databases'],
  summary: 'Managed Database Engines List',
  description:
    'Display all available Managed Database engine types and versions. Engine IDs are used when creating new Managed Databases.\n',
  operationId: 'getDatabasesEngines',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'Returns a paginated list of all available Managed Database engines and versions.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseEngineSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesEnginesEngineIdRoute = createRoute({
  method: 'get',
  path: '/databases/engines/{engineId}',
  tags: ['Databases'],
  summary: 'Managed Database Engine View',
  description: 'Display information for a single Managed Database engine type and version.\n',
  operationId: 'getDatabasesEngine',
  request: {
    params: z.object({
      engineId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Managed Database engine.',
            in: 'path',
            name: 'engineId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns information for a single Managed Database engine type and version.',
      content: { 'application/json': { schema: DatabaseEngineSchema } },
    },
    default: ErrorResponseResponse,
  },
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesInstancesRoute = createRoute({
  method: 'get',
  path: '/databases/instances',
  tags: ['Databases'],
  summary: 'Managed Databases List All',
  description:
    'Display all Managed Databases that are accessible by your User, regardless of engine type.\n\nFor more detailed information on a particular Database instance, make a request to its `instance_uri`.\n',
  operationId: 'getDatabasesInstances',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of all accessible Managed Databases on your Account.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z.object({ data: z.array(DatabaseSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMongodbInstancesRoute = createRoute({
  method: 'get',
  path: '/databases/mongodb/instances',
  tags: ['Databases'],
  summary: 'Managed MongoDB Databases List',
  description:
    'Display all accessible Managed MongoDB Databases.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'getDatabasesMongoDBInstances',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'Returns a paginated list of all accessible Managed MongoDB Databases on your Account.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseMongoDBSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMongodbInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/databases/mongodb/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database View',
  description:
    'Display information for a single, accessible Managed MongoDB Database.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'getDatabasesMongoDBInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns information for a single Managed MongoDB Database.',
      content: { 'application/json': { schema: DatabaseMongoDBSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const putDatabasesMongodbInstancesInstanceIdRoute = createRoute({
  method: 'put',
  path: '/databases/mongodb/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Update',
  description:
    "Update a Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\nUpdating addresses in the `allow_list` overwrites any existing addresses.\n\n* IP addresses and ranges on this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\n* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MongoDB Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
  operationId: 'putDatabasesMongoDBInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated information for the Managed MongoDB Database.',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
              label: z.lazy(() => DatabaseMongoDBSchema).exactOptional(),
              updates: z.lazy(() => DatabaseSchema).exactOptional(),
            })
            .openapi({
              description: 'Updated information for the Managed MongoDB Database.',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Managed Database updated successfully.',
      content: { 'application/json': { schema: DatabaseMongoDBSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const deleteDatabasesMongodbInstancesInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/databases/mongodb/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Delete',
  description:
    "Remove a Managed MongoDB Database from your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active`, `failed`, or `degraded` status to perform this command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
  operationId: 'deleteDatabasesMongoDBInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed MongoDB Database successfully deleted.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMongodbInstancesInstanceIdBackupsRoute = createRoute({
  method: 'get',
  path: '/databases/mongodb/instances/{instanceId}/backups',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Backups List',
  description:
    'Display all backups for an accessible Managed MongoDB Database.\n\nThe Database must not be provisioning to perform this command.\n\nDatabase `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.\n\nDatabase `snapshot` type backups are created by accessing the **Managed MongoDB Database Backup Snapshot Create** ([POST /databases/mongodb/instances/{instanceId}/backups](/docs/api/databases/#managed-mongodb-database-backup-snapshot-create)) command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'getDatabasesMongoDBInstanceBackups',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of backups for the Managed MongoDB Database.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseBackupSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMongodbInstancesInstanceIdBackupsRoute = createRoute({
  method: 'post',
  path: '/databases/mongodb/instances/{instanceId}/backups',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Backup Snapshot Create',
  description:
    'Creates a snapshot backup of a Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nUp to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.\n\nBackups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.\n\nThe Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'postDatabasesMongoDBInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the snapshot backup to create.',
      content: { 'application/json': { schema: DatabaseBackupSnapshotSchema } },
    },
  },
  responses: {
    200: {
      description: 'Database snapshot backup request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/databases/mongodb/instances/{instanceId}/backups/{backupId}',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Backup View',
  description:
    'Display information for a single backup for an accessible Managed MongoDB Database.\n\nThe Database must not be provisioning to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'getDatabasesMongoDBInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single backup for the Managed MongoDB Database.',
      content: { 'application/json': { schema: DatabaseBackupSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute = createRoute({
  method: 'delete',
  path: '/databases/mongodb/instances/{instanceId}/backups/{backupId}',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Backup Delete',
  description:
    'Delete a single backup for an accessible Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must not be provisioning to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'deleteDatabaseMongoDBInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request to delete Database backup successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRoute = createRoute({
  method: 'post',
  path: '/databases/mongodb/instances/{instanceId}/backups/{backupId}/restore',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Backup Restore',
  description:
    'Restore a backup to a Managed MongoDB Database on your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.\n\n**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'postDatabasesMongoDBInstanceBackupRestore',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request to restore backup successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMongodbInstancesInstanceIdCredentialsRoute = createRoute({
  method: 'get',
  path: '/databases/mongodb/instances/{instanceId}/credentials',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Credentials View',
  description:
    'Display the root username and password for an accessible Managed MongoDB Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'getDatabasesMongoDBInstanceCredentials',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database root username and password.',
      content: { 'application/json': { schema: DatabaseCredentialsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMongodbInstancesInstanceIdCredentialsResetRoute = createRoute({
  method: 'post',
  path: '/databases/mongodb/instances/{instanceId}/credentials/reset',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Credentials Reset',
  description:
    "Reset the root password for a Managed MongoDB Database.\n\nRequires `read_write` access to the Database.\n\nA new root password is randomly generated and accessible with the **Managed MongoDB Database Credentials View** ([GET /databases/mongodb/instances/{instanceId}/credentials](/docs/api/databases/#managed-mongodb-database-credentials-view)) command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: Note that it may take several seconds for credentials to reset.\n\n**Note**: New MongoDB Databases cannot currently be created.\n",
  operationId: 'postDatabasesMongoDBInstanceCredentialsReset',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database instance credentials successfully reset.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMongodbInstancesInstanceIdPatchRoute = createRoute({
  method: 'post',
  path: '/databases/mongodb/instances/{instanceId}/patch',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database Patch',
  description:
    'Apply security patches and updates to the underlying operating system of the Managed MongoDB Database. This function runs during regular maintenance windows, which are configurable with the **Managed MongoDB Database Update** ([PUT /databases/mongodb/instances/{instanceId}](/docs/api/databases/#managed-mongodb-database-update)) command.\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**:\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'postDatabasesMongoDBInstancePatch',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database instance patch request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMongodbInstancesInstanceIdSslRoute = createRoute({
  method: 'get',
  path: '/databases/mongodb/instances/{instanceId}/ssl',
  tags: ['Databases'],
  summary: 'Managed MongoDB Database SSL Certificate View',
  description:
    'Display the SSL CA certificate for an accessible Managed MongoDB Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: New MongoDB Databases cannot currently be created.\n',
  operationId: 'getDatabasesMongoDBInstanceSSL',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MongoDB Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the SSL CA certificate of a single Managed MongoDB Database.',
      content: { 'application/json': { schema: DatabaseSSLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMysqlInstancesRoute = createRoute({
  method: 'get',
  path: '/databases/mysql/instances',
  tags: ['Databases'],
  summary: 'Managed MySQL Databases List',
  description: 'Display all accessible Managed MySQL Databases.\n',
  operationId: 'getDatabasesMySQLInstances',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'Returns a paginated list of all accessible Managed MySQL Databases on your Account.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseMySQLSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMysqlInstancesRoute = createRoute({
  method: 'post',
  path: '/databases/mysql/instances',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Create',
  description:
    "Provision a Managed MySQL Database.\n\nRestricted Users must have the `add_databases` grant to use this command.\n\nNew instances can take approximately 15 to 30 minutes to provision.\n\nThe `allow_list` is used to control access to the Managed Database.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\nAll Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MySQL Database during configurable maintenance windows.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.\n\n* To modify update the maintenance window for a Database, use the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.\n",
  operationId: 'postDatabasesMySQLInstances',
  request: {
    body: {
      description: 'Information about the Managed MySQL Database you are creating.',
      content: { 'application/json': { schema: DatabaseMySQLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A new Managed MySQL Database is provisioning.',
      content: { 'application/json': { schema: DatabaseMySQLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMysqlInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/databases/mysql/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed MySQL Database View',
  description: 'Display information for a single, accessible Managed MySQL Database.\n',
  operationId: 'getDatabasesMySQLInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns information for a single Managed MySQL Database.',
      content: { 'application/json': { schema: DatabaseMySQLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const putDatabasesMysqlInstancesInstanceIdRoute = createRoute({
  method: 'put',
  path: '/databases/mysql/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Update',
  description:
    "Update a Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\nUpdating addresses in the `allow_list` overwrites any existing addresses.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\n* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MySQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.\n",
  operationId: 'putDatabasesMySQLInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated information for the Managed MySQL Database.',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
              label: z.lazy(() => DatabaseMySQLSchema).exactOptional(),
              updates: z.lazy(() => DatabaseSchema).exactOptional(),
            })
            .openapi({
              description: 'Updated information for the Managed MySQL Database.',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Managed Database updated successfully.',
      content: { 'application/json': { schema: DatabaseMySQLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const deleteDatabasesMysqlInstancesInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/databases/mysql/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Delete',
  description:
    "Remove a Managed MySQL Database from your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active`, `failed`, or `degraded` status to perform this command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n",
  operationId: 'deleteDatabasesMySQLInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed MySQL Database successfully deleted.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMysqlInstancesInstanceIdBackupsRoute = createRoute({
  method: 'get',
  path: '/databases/mysql/instances/{instanceId}/backups',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Backups List',
  description:
    'Display all backups for an accessible Managed MySQL Database.\n\nThe Database must not be provisioning to perform this command.\n\nDatabase `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.\n\nDatabase `snapshot` type backups are created by accessing the **Managed MySQL Database Backup Snapshot Create** ([POST /databases/mysql/instances/{instanceId}/backups](/docs/api/databases/#managed-mysql-database-backup-snapshot-create)) command.\n',
  operationId: 'getDatabasesMySQLInstanceBackups',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of backups for the Managed MySQL Database.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseBackupSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMysqlInstancesInstanceIdBackupsRoute = createRoute({
  method: 'post',
  path: '/databases/mysql/instances/{instanceId}/backups',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Backup Snapshot Create',
  description:
    'Creates a snapshot backup of a Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nUp to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.\n\nBackups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.\n\nThe Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.\n',
  operationId: 'postDatabasesMySQLInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the snapshot backup to create.',
      content: { 'application/json': { schema: DatabaseBackupSnapshotSchema } },
    },
  },
  responses: {
    200: {
      description: 'Database snapshot backup request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/databases/mysql/instances/{instanceId}/backups/{backupId}',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Backup View',
  description:
    'Display information for a single backup for an accessible Managed MySQL Database.\n\nThe Database must not be provisioning to perform this command.\n',
  operationId: 'getDatabasesMySQLInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single backup for the Managed MySQL Database.',
      content: { 'application/json': { schema: DatabaseBackupSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute = createRoute({
  method: 'delete',
  path: '/databases/mysql/instances/{instanceId}/backups/{backupId}',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Backup Delete',
  description:
    'Delete a single backup for an accessible Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must not be provisioning to perform this command.\n',
  operationId: 'deleteDatabaseMySQLInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request to delete Database backup successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRoute = createRoute({
  method: 'post',
  path: '/databases/mysql/instances/{instanceId}/backups/{backupId}/restore',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Backup Restore',
  description:
    'Restore a backup to a Managed MySQL Database on your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.\n\n**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.\n',
  operationId: 'postDatabasesMySQLInstanceBackupRestore',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request to restore backup successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMysqlInstancesInstanceIdCredentialsRoute = createRoute({
  method: 'get',
  path: '/databases/mysql/instances/{instanceId}/credentials',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Credentials View',
  description:
    'Display the root username and password for an accessible Managed MySQL Database.\n\nThe Database must have an `active` status to perform this command.\n',
  operationId: 'getDatabasesMySQLInstanceCredentials',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database root username and password.',
      content: { 'application/json': { schema: DatabaseCredentialsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMysqlInstancesInstanceIdCredentialsResetRoute = createRoute({
  method: 'post',
  path: '/databases/mysql/instances/{instanceId}/credentials/reset',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Credentials Reset',
  description:
    "Reset the root password for a Managed MySQL Database.\n\nRequires `read_write` access to the Database.\n\nA new root password is randomly generated and accessible with the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: Note that it may take several seconds for credentials to reset.\n",
  operationId: 'postDatabasesMySQLInstanceCredentialsReset',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database instance credentials successfully reset.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesMysqlInstancesInstanceIdPatchRoute = createRoute({
  method: 'post',
  path: '/databases/mysql/instances/{instanceId}/patch',
  tags: ['Databases'],
  summary: 'Managed MySQL Database Patch',
  description:
    'Apply security patches and updates to the underlying operating system of the Managed MySQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.\n',
  operationId: 'postDatabasesMySQLInstancePatch',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database instance patch request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesMysqlInstancesInstanceIdSslRoute = createRoute({
  method: 'get',
  path: '/databases/mysql/instances/{instanceId}/ssl',
  tags: ['Databases'],
  summary: 'Managed MySQL Database SSL Certificate View',
  description:
    'Display the SSL CA certificate for an accessible Managed MySQL Database.\n\nThe Database must have an `active` status to perform this command.\n',
  operationId: 'getDatabasesMySQLInstanceSSL',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed MySQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the SSL CA certificate of a single Managed MySQL Database.',
      content: { 'application/json': { schema: DatabaseSSLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesPostgresqlInstancesRoute = createRoute({
  method: 'get',
  path: '/databases/postgresql/instances',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Databases List',
  description: 'Display all accessible Managed PostgreSQL Databases.\n',
  operationId: 'getDatabasesPostgreSQLInstances',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'Returns a paginated list of all accessible Managed PostgreSQL Databases on your Account.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabasePostgreSQLSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesPostgresqlInstancesRoute = createRoute({
  method: 'post',
  path: '/databases/postgresql/instances',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Create',
  description:
    "Provision a Managed PostgreSQL Database.\n\nRestricted Users must have the `add_databases` grant to use this command.\n\nNew instances can take approximately 15 to 30 minutes to provision.\n\nThe `allow_list` is used to control access to the Managed Database.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\nAll Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database during configurable maintenance windows.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n\n* To modify update the maintenance window for a Database, use the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.\n",
  operationId: 'postDatabasesPostgreSQLInstances',
  request: {
    body: {
      description: 'Information about the Managed PostgreSQL Database you are creating.',
      content: { 'application/json': { schema: DatabasePostgreSQLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A new Managed PostgreSQL Database is provisioning.',
      content: { 'application/json': { schema: DatabasePostgreSQLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesPostgresqlInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/databases/postgresql/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database View',
  description: 'Display information for a single, accessible Managed PostgreSQL Database.\n',
  operationId: 'getDatabasesPostgreSQLInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns information for a single Managed PostgreSQL Database.',
      content: { 'application/json': { schema: DatabasePostgreSQLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const putDatabasesPostgresqlInstancesInstanceIdRoute = createRoute({
  method: 'put',
  path: '/databases/postgresql/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Update',
  description:
    "Update a Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\nUpdating addresses in the `allow_list` overwrites any existing addresses.\n\n* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.\n\n* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.\n\n* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.\n\n* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.\n\nAll Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n",
  operationId: 'putDatabasesPostgreSQLInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated information for the Managed PostgreSQL Database.',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_list: z.lazy(() => DatabaseSchema).exactOptional(),
              label: z.lazy(() => DatabasePostgreSQLSchema).exactOptional(),
              updates: z.lazy(() => DatabaseSchema).exactOptional(),
            })
            .openapi({
              description: 'Updated information for the Managed PostgreSQL Database.',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Managed Database updated successfully.',
      content: { 'application/json': { schema: DatabasePostgreSQLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const deleteDatabasesPostgresqlInstancesInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/databases/postgresql/instances/{instanceId}',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Delete',
  description:
    "Remove a Managed PostgreSQL Database from your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active`, `failed`, or `degraded` status to perform this command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n",
  operationId: 'deleteDatabasesPostgreSQLInstance',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed PostgreSQL Database successfully deleted.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesPostgresqlInstancesInstanceIdBackupsRoute = createRoute({
  method: 'get',
  path: '/databases/postgresql/instances/{instanceId}/backups',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Backups List',
  description:
    'Display all backups for an accessible Managed PostgreSQL Database.\n\nThe Database must not be provisioning to perform this command.\n\nDatabase `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.\n\nDatabase `snapshot` type backups are created by accessing the **Managed PostgreSQL Database Backup Snapshot Create** ([POST /databases/postgresql/instances/{instanceId}/backups](/docs/api/databases/#managed-postgresql-database-backup-snapshot-create)) command.\n',
  operationId: 'getDatabasesPostgreSQLInstanceBackups',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of backups for the Managed PostgreSQL Database.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseBackupSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesPostgresqlInstancesInstanceIdBackupsRoute = createRoute({
  method: 'post',
  path: '/databases/postgresql/instances/{instanceId}/backups',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Backup Snapshot Create',
  description:
    'Creates a snapshot backup of a Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nUp to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.\n\nBackups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.\n\nThe Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.\n',
  operationId: 'postDatabasesPostgreSQLInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the snapshot backup to create.',
      content: { 'application/json': { schema: DatabaseBackupSnapshotSchema } },
    },
  },
  responses: {
    200: {
      description: 'Database snapshot backup request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/databases/postgresql/instances/{instanceId}/backups/{backupId}',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Backup View',
  description:
    'Display information for a single backup for an accessible Managed PostgreSQL Database.\n\nThe Database must not be provisioning to perform this command.\n',
  operationId: 'getDatabasesPostgreSQLInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single backup for the Managed PostgreSQL Database.',
      content: { 'application/json': { schema: DatabaseBackupSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute = createRoute({
  method: 'delete',
  path: '/databases/postgresql/instances/{instanceId}/backups/{backupId}',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Backup Delete',
  description:
    'Delete a single backup for an accessible Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nThe Database must not be provisioning to perform this command.\n',
  operationId: 'deleteDatabasePostgreSQLInstanceBackup',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request to delete Database backup successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRoute = createRoute({
  method: 'post',
  path: '/databases/postgresql/instances/{instanceId}/backups/{backupId}/restore',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Backup Restore',
  description:
    'Restore a backup to a Managed PostgreSQL Database on your Account.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.\n\n**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.\n',
  operationId: 'postDatabasesPostgreSQLInstanceBackupRestore',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database backup.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request to restore backup successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesPostgresqlInstancesInstanceIdCredentialsRoute = createRoute({
  method: 'get',
  path: '/databases/postgresql/instances/{instanceId}/credentials',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Credentials View',
  description:
    'Display the root username and password for an accessible Managed PostgreSQL Database.\n\nThe Database must have an `active` status to perform this command.\n',
  operationId: 'getDatabasesPostgreSQLInstanceCredentials',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database root username and password.',
      content: { 'application/json': { schema: DatabaseCredentialsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute = createRoute({
  method: 'post',
  path: '/databases/postgresql/instances/{instanceId}/credentials/reset',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Credentials Reset',
  description:
    "Reset the root password for a Managed PostgreSQL Database.\n\nRequires `read_write` access to the Database.\n\nA new root password is randomly generated and accessible with the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command.\n\nOnly unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.\n\n**Note**: Note that it may take several seconds for credentials to reset.\n",
  operationId: 'postDatabasesPostgreSQLInstanceCredentialsReset',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database instance credentials successfully reset.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const postDatabasesPostgresqlInstancesInstanceIdPatchRoute = createRoute({
  method: 'post',
  path: '/databases/postgresql/instances/{instanceId}/patch',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database Patch',
  description:
    'Apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.\n\nRequires `read_write` access to the Database.\n\nThe Database must have an `active` status to perform this command.\n\n**Note**\n\n* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.\n\n* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.\n',
  operationId: 'postDatabasesPostgreSQLInstancePatch',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Managed Database instance patch request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesPostgresqlInstancesInstanceIdSslRoute = createRoute({
  method: 'get',
  path: '/databases/postgresql/instances/{instanceId}/ssl',
  tags: ['Databases'],
  summary: 'Managed PostgreSQL Database SSL Certificate View',
  description:
    'Display the SSL CA certificate for an accessible Managed PostgreSQL Database.\n\nThe Database must have an `active` status to perform this command.\n',
  operationId: 'getDatabasesPostgreSQLInstanceSSL',
  request: {
    params: z.object({
      instanceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed PostgreSQL Database.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the SSL CA certificate of a single Managed PostgreSQL Database.',
      content: { 'application/json': { schema: DatabaseSSLSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['databases:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesTypesRoute = createRoute({
  method: 'get',
  path: '/databases/types',
  tags: ['Databases'],
  summary: 'Managed Database Types List',
  description:
    'Display all Managed Database node types. The type and number of nodes determine the resources and price of a Managed Database instance.\n\nEach Managed Database can have one node type. In the case of a high availabilty Database, all nodes are provisioned according to the chosen type.\n',
  operationId: 'getDatabasesTypes',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of all Managed Database types.',
      content: {
        'application/json': {
          schema: PaginationEnvelopeSchema.and(
            z
              .object({ data: z.array(DatabaseTypeSchema).exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDatabasesTypesTypeIdRoute = createRoute({
  method: 'get',
  path: '/databases/types/{typeId}',
  tags: ['Databases'],
  summary: 'Managed Database Type View',
  description:
    'Display the details of a single Managed Database type. The type and number of nodes determine the resources and price of a Managed Database instance.\n',
  operationId: 'getDatabasesType',
  request: {
    params: z.object({
      typeId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Managed Database type.',
            in: 'path',
            name: 'typeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a single Managed Database type.',
      content: { 'application/json': { schema: DatabaseTypeSchema } },
    },
    default: ErrorResponseResponse,
  },
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Domains List',
  description:
    "This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.\n",
  operationId: 'getDomains',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Domains you have registered.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DomainSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_only'] }],
})

export const postDomainsRoute = createRoute({
  method: 'post',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Domain Create',
  description:
    "Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.\n",
  operationId: 'createDomain',
  request: {
    body: {
      description: 'Information about the domain you are registering.',
      content: {
        'application/json': { schema: DomainSchema.openapi({ required: ['domain', 'type'] }) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Domain added successfully.\n',
      content: { 'application/json': { schema: DomainSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const postDomainsImportRoute = createRoute({
  method: 'post',
  path: '/domains/import',
  tags: ['Domains'],
  summary: 'Domain Import',
  description:
    'Imports a domain zone from a remote nameserver.\nYour nameserver must allow zone transfers (AXFR) from the following IPs:\n\n  - 96.126.114.97\n  - 96.126.114.98\n  - 2600:3c00::5e\n  - 2600:3c00::5f\n',
  operationId: 'importDomain',
  request: {
    body: {
      description: 'Information about the Domain to import.',
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .string()
                .openapi({ description: 'The domain to import.\n', example: 'example.com' }),
              remote_nameserver: z
                .string()
                .openapi({
                  description: 'The remote nameserver that allows zone transfers (AXFR).\n',
                  example: 'examplenameserver.com',
                }),
            })
            .openapi({ required: ['domain', 'remote_nameserver'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "A single Domain in Linode's DNS Manager.\n",
      content: { 'application/json': { schema: DomainSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const getDomainsDomainIdRoute = createRoute({
  method: 'get',
  path: '/domains/{domainId}',
  tags: ['Domains'],
  summary: 'Domain View',
  description:
    "This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.\n",
  operationId: 'getDomain',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain to access.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "A single Domain in Linode's DNS Manager.\n",
      content: { 'application/json': { schema: DomainSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_only'] }],
})

export const putDomainsDomainIdRoute = createRoute({
  method: 'put',
  path: '/domains/{domainId}',
  tags: ['Domains'],
  summary: 'Domain Update',
  description: "Update information about a Domain in Linode's DNS Manager.\n",
  operationId: 'updateDomain',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain to access.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Domain information to update.',
      content: { 'application/json': { schema: DomainSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Domain update successful.',
      content: { 'application/json': { schema: DomainSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const deleteDomainsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{domainId}',
  tags: ['Domains'],
  summary: 'Domain Delete',
  description:
    "Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.\n",
  operationId: 'deleteDomain',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain to access.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Domain deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const postDomainsDomainIdCloneRoute = createRoute({
  method: 'post',
  path: '/domains/{domainId}/clone',
  tags: ['Domains'],
  summary: 'Domain Clone',
  description:
    "Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.\n",
  operationId: 'cloneDomain',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Domain to clone.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information about the Domain to clone.',
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .string()
                .regex(
                  /\A(\*\.)?([a-zA-Z0-9-_]{1,63}\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\Z/,
                )
                .min(1)
                .max(253)
                .openapi({
                  description:
                    "The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
                  example: 'example.org',
                  'x-linode-filterable': true,
                }),
            })
            .openapi({ required: ['domain'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: "A new Domain in Linode's DNS Manager, based on a cloned Domain.\n",
      content: { 'application/json': { schema: DomainSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const getDomainsDomainIdRecordsRoute = createRoute({
  method: 'get',
  path: '/domains/{domainId}/records',
  tags: ['Domains'],
  summary: 'Domain Records List',
  description:
    "Returns a paginated list of Records configured on a Domain in Linode's\nDNS Manager.\n",
  operationId: 'getDomainRecords',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain we are accessing Records for.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of Domain Records.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DomainRecordSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_only'] }],
})

export const postDomainsDomainIdRecordsRoute = createRoute({
  method: 'post',
  path: '/domains/{domainId}/records',
  tags: ['Domains'],
  summary: 'Domain Record Create',
  description:
    'Adds a new Domain Record to the zonefile this Domain represents.\n\nEach domain can have up to 12,000 active records.\n',
  operationId: 'createDomainRecord',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain we are accessing Records for.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the new Record to add.\n',
      content: {
        'application/json': { schema: DomainRecordSchema.openapi({ required: ['type'] }) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Domain Record created successfully.',
      content: { 'application/json': { schema: DomainRecordSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const getDomainsDomainIdRecordsRecordIdRoute = createRoute({
  method: 'get',
  path: '/domains/{domainId}/records/{recordId}',
  tags: ['Domains'],
  summary: 'Domain Record View',
  description: 'View a single Record on this Domain.\n',
  operationId: 'getDomainRecord',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain whose Record you are accessing.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      recordId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Record you are accessing.',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A Domain Record object.',
      content: { 'application/json': { schema: DomainRecordSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_only'] }],
})

export const putDomainsDomainIdRecordsRecordIdRoute = createRoute({
  method: 'put',
  path: '/domains/{domainId}/records/{recordId}',
  tags: ['Domains'],
  summary: 'Domain Record Update',
  description: 'Updates a single Record on this Domain.\n',
  operationId: 'updateDomainRecord',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain whose Record you are accessing.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      recordId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Record you are accessing.',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The values to change.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.lazy(() => DomainRecordSchema).exactOptional(),
              port: z.lazy(() => DomainRecordSchema).exactOptional(),
              priority: z.lazy(() => DomainRecordSchema).exactOptional(),
              protocol: z.lazy(() => DomainRecordSchema).exactOptional(),
              service: z.lazy(() => DomainRecordSchema).exactOptional(),
              tag: z.lazy(() => DomainRecordSchema).exactOptional(),
              target: z.lazy(() => DomainRecordSchema).exactOptional(),
              ttl_sec: z.lazy(() => DomainRecordSchema).exactOptional(),
              weight: z.lazy(() => DomainRecordSchema).exactOptional(),
            })
            .openapi({ description: 'A Domain Record Update request object.', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Domain Record updated.',
      content: { 'application/json': { schema: DomainRecordSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const deleteDomainsDomainIdRecordsRecordIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{domainId}/records/{recordId}',
  tags: ['Domains'],
  summary: 'Domain Record Delete',
  description: 'Deletes a Record on this Domain.\n',
  operationId: 'deleteDomainRecord',
  request: {
    params: z.object({
      domainId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Domain whose Record you are accessing.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      recordId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Record you are accessing.',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Record deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_write'] }],
})

export const getDomainsDomainIdZoneFileRoute = createRoute({
  method: 'get',
  path: '/domains/{domainId}/zone-file',
  tags: ['Domains'],
  summary: 'Domain Zone File View',
  description: 'Returns the zone file for the last rendered zone for the specified domain.\n',
  operationId: 'getDomainZone',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Domain.',
            in: 'path',
            name: 'domainId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array containing the lines of the domain zone file.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              zone_file: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The lines of the zone file for the last rendered zone for this domain.\n',
                  example: [
                    '; example.com [123]',
                    '$TTL 864000',
                    '@  IN  SOA  ns1.linode.com. user.example.com. 2021000066 14400 14400 1209600 86400',
                    '@    NS  ns1.linode.com.',
                    '@    NS  ns2.linode.com.',
                    '@    NS  ns3.linode.com.',
                    '@    NS  ns4.linode.com.',
                    '@    NS  ns5.linode.com.',
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['domains:read_only'] }],
})

export const getImagesRoute = createRoute({
  method: 'get',
  path: '/images',
  tags: ['Images'],
  summary: 'Images List',
  description:
    'Returns a paginated list of Images.\n\n* **Public** Images have IDs that begin with "linode/". These distribution images are generally available to\nall users.\n\n* **Private** Images have IDs that begin with "private/". These Images are Account-specific and only\naccessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).\n\n* To view only public Images, call this endpoint with or without authentication. To view private Images as well, call this endpoint with authentication.\n',
  operationId: 'getImages',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Images.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ImageSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['images:read_only'] }],
})

export const postImagesRoute = createRoute({
  method: 'post',
  path: '/images',
  tags: ['Images'],
  summary: 'Image Create',
  description: 'Captures a private gold-master Image from a Linode Disk.\n',
  operationId: 'createImage',
  request: {
    body: {
      description: 'Information about the Image to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A detailed description of this Image.\n' }),
              disk_id: z
                .int()
                .openapi({
                  description: 'The ID of the Linode Disk that this Image will be created from.\n',
                  example: 42,
                }),
              label: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A short title of this Image. Defaults to the label of the Disk it is being created from if not provided.\n',
                }),
            })
            .openapi({ required: ['disk_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'New private Image created successfully.',
      content: { 'application/json': { schema: ImageSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['images:read_write', 'linodes:read_only'] }],
})

export const postImagesUploadRoute = createRoute({
  method: 'post',
  path: '/images/upload',
  tags: ['Images'],
  summary: 'Image Upload',
  description:
    'Initiates an Image upload.\n\nThis endpoint creates a new private Image object and returns it along\nwith the URL to which image data can be uploaded.\n\n- Image data must be uploaded within 24 hours of creation or the\nupload will be cancelled and the image deleted.\n\n- Image uploads should be made as an HTTP PUT request to the URL returned in the `upload_to`\nresponse parameter, with a `Content-type: application/octet-stream` header included in the\nrequest. For example:\n\n      curl -v \\\n        -H "Content-Type: application/octet-stream" \\\n        --upload-file example.img.gz \\\n        $UPLOAD_URL \\\n        --progress-bar \\\n        --output /dev/null\n\n- Uploaded image data should be compressed in gzip (`.gz`) format. The uncompressed disk should be in raw\ndisk image (`.img`) format. A maximum compressed file size of 5GB is supported for upload at this time.\n\n**Note:** To initiate and complete an Image upload in a single step, see our guide on how to [Upload an Image](/docs/products/tools/images/guides/upload-an-image/) using Cloud Manager or the Linode CLI `image-upload` plugin.\n',
  request: {
    body: {
      description: 'The uploaded Image details.',
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Description for the uploaded Image.',
                  example: 'This is an example image in the docs.',
                }),
              label: z
                .string()
                .openapi({
                  description: 'Label for the uploaded Image.',
                  example: 'my-image-label',
                }),
              region: z
                .string()
                .openapi({
                  description:
                    'The region to upload to. Once uploaded, the Image can be used in any region.\n',
                  example: 'eu-central',
                }),
            })
            .openapi({ required: ['label', 'region'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Image Upload object including the upload URL and Image object.',
      content: {
        'application/json': {
          schema: z
            .object({
              image: ImageSchema.exactOptional(),
              upload_to: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The URL to upload the Image to.',
                  'x-linode-cli-display': 1,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['images:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }, { url: 'https://api.linode.com/v4beta' }],
})

export const getImagesImageIdRoute = createRoute({
  method: 'get',
  path: '/images/{imageId}',
  tags: ['Images'],
  summary: 'Image View',
  description:
    'Get information about a single Image.\n\n* **Public** Images have IDs that begin with "linode/". These distribution images are generally available to\nall users.\n\n* **Private** Images have IDs that begin with "private/". These Images are Account-specific and only\naccessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).\n\n* To view a public Image, call this endpoint with or without authentication. To view a private Image, call this endpoint with authentication.\n',
  operationId: 'getImage',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Image to look up.',
            in: 'path',
            name: 'imageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single Image object.',
      content: { 'application/json': { schema: ImageSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['images:read_only'] }],
})

export const putImagesImageIdRoute = createRoute({
  method: 'put',
  path: '/images/{imageId}',
  tags: ['Images'],
  summary: 'Image Update',
  description: 'Updates a private Image that you have permission to `read_write`.\n',
  operationId: 'updateImage',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Image to look up.',
            in: 'path',
            name: 'imageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.\n',
      content: { 'application/json': { schema: ImageSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated image.',
      content: { 'application/json': { schema: ImageSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['images:read_write'] }],
})

export const deleteImagesImageIdRoute = createRoute({
  method: 'delete',
  path: '/images/{imageId}',
  tags: ['Images'],
  summary: 'Image Delete',
  description:
    'Deletes a private Image you have permission to `read_write`.\n\n\n**Deleting an Image is a destructive action and cannot be undone.**\n',
  operationId: 'deleteImage',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Image to look up.',
            in: 'path',
            name: 'imageId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['images:read_write'] }],
})

export const getLinodeInstancesRoute = createRoute({
  method: 'get',
  path: '/linode/instances',
  tags: ['Linode Instances'],
  summary: 'Linodes List',
  description: 'Returns a paginated list of Linodes you have permission to view.\n',
  operationId: 'getLinodeInstances',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns an array of all Linodes on your Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LinodeSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesRoute = createRoute({
  method: 'post',
  path: '/linode/instances',
  tags: ['Linode Instances'],
  summary: 'Linode Create',
  description:
    "Creates a Linode Instance on your Account. In order for this\nrequest to complete successfully, your User must have the `add_linodes` grant. Creating a\nnew Linode will incur a charge on your Account.\n\nLinodes can be created using one of the available Types. See\nTypes List ([GET /linode/types](/docs/api/linode-types/#types-list)) to get more\ninformation about each Type's specs and cost.\n\nLinodes can be created in any one of our available Regions, which are accessible from the\nRegions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint.\n\nIn an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587\non all Linodes for new accounts created after November 5th, 2019. For more information,\nsee [Sending Email on Linode](/docs/guides/running-a-mail-server/#sending-email-on-linode).\n\nLinodes can be created in a number of ways:\n\n* Using a Linode Public Image distribution or a Private Image you created based on another Linode.\n  * Access the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view\n    all available Images.\n  * The Linode will be `running` after it completes `provisioning`.\n  * A default config with two Disks, one being a 512 swap disk, is created.\n    * `swap_size` can be used to customize the swap disk size.\n  * Requires a `root_pass` be supplied to use for the root User's Account.\n  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.\n  * You may also supply a list of usernames via the `authorized_users` field.\n    * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.\n\n* Using a StackScript.\n  * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for\n    a list of available StackScripts.\n  * The Linode will be `running` after it completes `provisioning`.\n  * Requires a compatible Image to be supplied.\n    * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.\n  * Requires a `root_pass` be supplied to use for the root User's Account.\n  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.\n  * You may also supply a list of usernames via the `authorized_users` field.\n    * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.\n\n* Using one of your other Linode's backups.\n  * You must create a Linode large enough to accommodate the Backup's size.\n  * The Disks and Config will match that of the Linode that was backed up.\n  * The `root_pass` will match that of the Linode that was backed up.\n\n* Attached to a private VLAN.\n  * Review the `interfaces` property of the [Request Body Schema](/docs/api/linode-instances/#linode-create__request-body-schema) for details.\n  * For more information, see our guide on [Getting Started with VLANs](/docs/products/networking/vlans/get-started/).\n\n* Create an empty Linode.\n  * The Linode will remain `offline` and must be manually started.\n    * See Linode Boot ([POST /linode/instances/{linodeId}/boot](/docs/api/linode-instances/#linode-boot)).\n  * Disks and Configs must be created manually.\n  * This is only recommended for advanced use cases.\n\n**Important**: You must be an unrestricted User in order to add or modify\ntags on Linodes.\n",
  operationId: 'createLinodeInstance',
  request: {
    body: {
      description: 'The requested initial state of a new Linode.',
      content: {
        'application/json': {
          schema: LinodeRequestSchema.and(
            z
              .object({
                backup_id: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "A Backup ID from another Linode's available backups. Your User must have\n`read_write` access to that Linode, the Backup must have a `status` of\n`successful`, and the Linode must be deployed to the same `region` as the Backup.\nSee [GET /linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list)\nfor a Linode's available backups.\n\nThis field and the `image` field are mutually exclusive.\n",
                    example: 1234,
                  }),
                backups_enabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'If this field is set to `true`, the created Linode will automatically be\nenrolled in the Linode Backup service. This will incur an additional charge.\nThe cost for the Backup service is dependent on the Type of Linode deployed.\n\nThis option is always treated as `true` if the account-wide `backups_enabled`\nsetting is `true`.  See [account settings](/docs/api/account/#account-settings-view)\nfor more information.\n\nBackup pricing is included in the response from [/linodes/types](/docs/api/linode-types/#types-list)\n',
                  }),
                group: z.lazy(() => LinodeSchema).exactOptional(),
                interfaces: LinodeConfigInterfacesSchema.exactOptional(),
                label: z.lazy(() => LinodeSchema).exactOptional(),
                private_ip: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'If true, the created Linode will have private networking enabled and assigned a private IPv4 address.\n',
                    example: true,
                  }),
                region: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The [Region](/docs/api/regions/#regions-list) where the Linode will be located.\n',
                    example: 'us-east',
                  }),
                swap_size: z
                  .int()
                  .default(512)
                  .exactOptional()
                  .openapi({
                    description:
                      'When deploying from an Image, this field is optional, otherwise it is ignored. This is used to set the swap disk size for the newly-created Linode.\n',
                    example: 512,
                  }),
                tags: z.lazy(() => LinodeSchema).exactOptional(),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The [Linode Type](/docs/api/linode-types/#types-list) of the Linode you are creating.\n',
                    example: 'g6-standard-2',
                  }),
              })
              .openapi({ required: [] }),
          ).openapi({ required: ['type', 'region'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A new Linode is being created.\n',
      content: { 'application/json': { schema: LinodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}',
  tags: ['Linode Instances'],
  summary: 'Linode View',
  description: 'Get a specific Linode by ID.',
  operationId: 'getLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single Linode object.',
      content: { 'application/json': { schema: LinodeSchema } },
      links: {
        boot: BootLinodeLink,
        clone: CloneLinodeLink,
        delete: DeleteLinodeLink,
        mutate: MutateLinodeLink,
        reboot: RebootLinodeLink,
        rebuild: RebuildLinodeLink,
        rescue: RescueLinodeLink,
        resize: ResizeLinodeLink,
        shutdown: ShutdownLinodeLink,
        update: UpdateLinodeLink,
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const putLinodeInstancesLinodeIdRoute = createRoute({
  method: 'put',
  path: '/linode/instances/{linodeId}',
  tags: ['Linode Instances'],
  summary: 'Linode Update',
  description:
    'Updates a Linode that you have permission to `read_write`.\n\n**Important**: You must be an unrestricted User in order to add or modify tags on Linodes.\n',
  operationId: 'updateLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description:
        'Any field that is not marked as `readOnly` may be updated. Fields that are marked `readOnly` will be ignored. If any updated field fails to pass validation, the Linode will not be updated.\n',
      content: { 'application/json': { schema: LinodeSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated Linode.',
      content: { 'application/json': { schema: LinodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const deleteLinodeInstancesLinodeIdRoute = createRoute({
  method: 'delete',
  path: '/linode/instances/{linodeId}',
  tags: ['Linode Instances'],
  summary: 'Linode Delete',
  description:
    'Deletes a Linode you have permission to `read_write`.\n\n**Deleting a Linode is a destructive action and cannot be undone.**\n\nAdditionally, deleting a Linode:\n\n  * Gives up any IP addresses the Linode was assigned.\n  * Deletes all Disks, Backups, Configs, etc.\n  * Stops billing for the Linode and its associated services. You will be billed for time used\n    within the billing period the Linode was active.\n\nLinodes that are in the process of [cloning](/docs/api/linode-instances/#linode-clone) or [backup restoration](/docs/api/linode-instances/#backup-restore) cannot be deleted.\n',
  operationId: 'deleteLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdBackupsRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/backups',
  tags: ['Linode Instances'],
  summary: 'Backups List',
  description: "Returns information about this Linode's available backups.\n",
  operationId: 'getBackups',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode the backups belong to.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "A collection of the specified Linode's available backups.",
      content: {
        'application/json': {
          schema: z
            .object({
              automatic: z
                .array(
                  BackupSchema.and(
                    z
                      .object({
                        type: z.string().exactOptional().openapi({ example: 'automatic' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              snapshot: z
                .object({
                  current: BackupSchema.exactOptional(),
                  in_progress: BackupSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesLinodeIdBackupsRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/backups',
  tags: ['Linode Instances'],
  summary: 'Snapshot Create',
  description:
    'Creates a snapshot Backup of a Linode.\n\n**Important:** If you already have a snapshot of this Linode, this is a destructive\naction. The previous snapshot will be deleted.\n',
  operationId: 'createSnapshot',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode the backups belong to.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              label: z
                .string()
                .min(1)
                .max(255)
                .openapi({
                  description: 'The label for the new snapshot.',
                  example: 'SnapshotLabel',
                }),
            })
            .openapi({ required: ['label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Snapshot request successful.',
      content: { 'application/json': { schema: BackupSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdBackupsCancelRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/backups/cancel',
  tags: ['Linode Instances'],
  summary: 'Backups Cancel',
  description:
    "Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.\n",
  operationId: 'cancelBackups',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode to cancel backup service for.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Backup service was cancelled for the specified Linode.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdBackupsEnableRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/backups/enable',
  tags: ['Linode Instances'],
  summary: 'Backups Enable',
  description: 'Enables backups for the specified Linode.\n',
  operationId: 'enableBackups',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode to enable backup service for.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Backup service was enabled.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/backups/{backupId}',
  tags: ['Linode Instances'],
  summary: 'Backup View',
  description: 'Returns information about a Backup.\n',
  operationId: 'getBackup',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode the Backup belongs to.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Backup to look up.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single Backup.',
      content: { 'application/json': { schema: BackupSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/backups/{backupId}/restore',
  tags: ['Linode Instances'],
  summary: 'Backup Restore',
  description: "Restores a Linode's Backup to the specified Linode.\n",
  operationId: 'restoreBackup',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode that the Backup belongs to.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      backupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Backup to restore.',
            in: 'path',
            name: 'backupId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Parameters to provide when restoring the Backup.',
      content: {
        'application/json': {
          schema: z
            .object({
              linode_id: z
                .int()
                .openapi({
                  description: 'The ID of the Linode to restore a Backup to.\n',
                  example: 234,
                }),
              overwrite: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If True, deletes all Disks and Configs on the target Linode\nbefore restoring.\n\nIf False, and the Disk image size is larger than the available\nspace on the Linode, an error message indicating insufficient\nspace is returned.\n',
                  example: true,
                }),
            })
            .openapi({ required: ['linode_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Restore from Backup was initiated.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdBootRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/boot',
  tags: ['Linode Instances'],
  summary: 'Linode Boot',
  description:
    'Boots a Linode you have permission to modify. If no parameters are given, a Config profile\nwill be chosen for this boot based on the following criteria:\n\n* If there is only one Config profile for this Linode, it will be used.\n* If there is more than one Config profile, the last booted config will be used.\n* If there is more than one Config profile and none were the last to be booted (because the\n  Linode was never booted or the last booted config was deleted) an error will be returned.\n',
  operationId: 'bootLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode to boot.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Optional configuration to boot into (see above).',
      content: {
        'application/json': {
          schema: z
            .object({
              config_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'The Linode Config ID to boot into.\n', example: null }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Boot started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdCloneRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/clone',
  tags: ['Linode Instances'],
  summary: 'Linode Clone',
  description:
    "You can clone your Linode's existing Disks or Configuration profiles to\nanother Linode on your Account. In order for this request to complete\nsuccessfully, your User must have the `add_linodes` grant. Cloning to a\nnew Linode will incur a charge on your Account.\n\nIf cloning to an existing Linode, any actions currently running or\nqueued must be completed first before you can clone to it.\n\nUp to five clone operations from any given source Linode can be run concurrently.\nIf more concurrent clones are attempted, an HTTP 400 error will be\nreturned by this endpoint.\n\nAny [tags](/docs/api/tags/#tags-list) existing on the source Linode will be cloned to the target Linode.\n",
  operationId: 'cloneLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to clone.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The requested state your Linode will be cloned into.',
      content: {
        'application/json': {
          schema: z
            .object({
              backups_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If this field is set to `true`, the created Linode will\nautomatically be enrolled in the Linode Backup service. This\nwill incur an additional charge. Pricing is included in the\nresponse from\n[/linodes/types](/docs/api/linode-types/#types-list).\n\n* Can only be included when cloning to a new Linode.\n',
                  example: true,
                }),
              configs: z
                .array(z.int().openapi({ example: 23456 }))
                .exactOptional()
                .openapi({
                  description:
                    'An array of configuration profile IDs.\n* If the `configs` parameter **is not provided**, then **all configuration profiles and their associated disks will be cloned** from the source Linode. Any disks specified by the `disks` parameter will also be cloned.\n* **If an empty array is provided** for the `configs` parameter, then **no configuration profiles (nor their associated disks) will be cloned** from the source Linode. Any disks specified by the `disks` parameter will still be cloned.\n* **If a non-empty array is provided** for the `configs` parameter, then **the configuration profiles specified in the array (and their associated disks) will be cloned** from the source Linode. Any disks specified by the `disks` parameter will also be cloned.\n',
                }),
              disks: z
                .array(z.int().openapi({ example: 25674 }))
                .exactOptional()
                .openapi({
                  description:
                    'An array of disk IDs.\n* If the `disks` parameter **is not provided**, then **no extra disks will be cloned** from the source Linode. All disks associated with the configuration profiles specified by the `configs` parameter will still be cloned.\n* **If an empty array is provided** for the `disks` parameter, then **no extra disks will be cloned** from the source Linode. All disks associated with the configuration profiles specified by the `configs` parameter will still be cloned.\n* **If a non-empty array is provided** for the `disks` parameter, then **the disks specified in the array will be cloned** from the source Linode, in addition to any disks associated with the configuration profiles specified by the `configs` parameter.\n',
                }),
              group: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'A label used to group Linodes for display. Linodes are not required to have a group.\n',
                  example: 'Linode-Group',
                }),
              label: z
                .string()
                .min(3)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'The label to assign this Linode when cloning to a new Linode.\n* Can only be provided when cloning to a new Linode.\n* Defaults to "linode".\n',
                  example: 'cloned-linode',
                }),
              linode_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'If an existing Linode is the target for the clone, the ID of that Linode. The existing Linode must have enough resources to accept the clone.\n',
                  example: 124,
                }),
              private_ip: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, the created Linode will have private networking enabled and assigned a private IPv4 address.\n* Can only be provided when cloning to a new Linode.\n',
                  example: true,
                }),
              region: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is the Region where the Linode will be deployed.\nTo view all available Regions you can deploy to see [/regions](/docs/api/regions/#regions-list).\n* Region can only be provided and is required when cloning to a new Linode.\n',
                  example: 'us-east',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A Linode's Type determines what resources are available to\nit, including disk space, memory, and virtual cpus. The\namounts available to a specific Linode are returned as\n`specs` on the Linode object.\n\nTo view all available Linode Types you can deploy with\nsee [/linode/types](/docs/api/linode-types/#types-list).\n\n* Type can only be provided and is required when cloning to a new Linode.\n",
                  example: 'g6-standard-2',
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
      description: 'Clone started.',
      content: { 'application/json': { schema: LinodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdConfigsRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/configs',
  tags: ['Linode Instances'],
  summary: 'Configuration Profiles List',
  description: 'Lists Configuration profiles associated with a Linode.\n',
  operationId: 'getLinodeConfigs',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up Configuration profiles for.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns an array of Configuration profiles associated with this Linode.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LinodeConfigSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesLinodeIdConfigsRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/configs',
  tags: ['Linode Instances'],
  summary: 'Configuration Profile Create',
  description: 'Adds a new Configuration profile to a Linode.\n',
  operationId: 'addLinodeConfig',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up Configuration profiles for.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description:
        'The parameters to set when creating the Configuration profile.\nThis determines which kernel, devices, how much memory, etc. a Linode boots with.\n',
      content: {
        'application/json': {
          schema: LinodeConfigSchema.openapi({ required: ['label', 'devices'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A Configuration profile was created.\n',
      content: { 'application/json': { schema: LinodeConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdConfigsConfigIdRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/configs/{configId}',
  tags: ['Linode Instances'],
  summary: 'Configuration Profile View',
  description: 'Returns information about a specific Configuration profile.\n',
  operationId: 'getLinodeConfig',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode whose Configuration profile to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Configuration profile to look up.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A Configuration profile object.',
      content: { 'application/json': { schema: LinodeConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const putLinodeInstancesLinodeIdConfigsConfigIdRoute = createRoute({
  method: 'put',
  path: '/linode/instances/{linodeId}/configs/{configId}',
  tags: ['Linode Instances'],
  summary: 'Configuration Profile Update',
  description: 'Updates a Configuration profile.\n',
  operationId: 'updateLinodeConfig',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode whose Configuration profile to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Configuration profile to look up.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Configuration profile parameters to modify.',
      content: { 'application/json': { schema: LinodeConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Configuration profile successfully updated.',
      content: { 'application/json': { schema: LinodeConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const deleteLinodeInstancesLinodeIdConfigsConfigIdRoute = createRoute({
  method: 'delete',
  path: '/linode/instances/{linodeId}/configs/{configId}',
  tags: ['Linode Instances'],
  summary: 'Configuration Profile Delete',
  description: 'Deletes the specified Configuration profile from the specified Linode.\n',
  operationId: 'deleteLinodeConfig',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode whose Configuration profile to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Configuration profile to look up.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Configuration profile successfully deleted.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdDisksRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/disks',
  tags: ['Linode Instances'],
  summary: 'Disks List',
  description: 'View Disk information for Disks associated with this Linode.\n',
  operationId: 'getLinodeDisks',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of disks associated with this Linode.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DiskSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesLinodeIdDisksRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/disks',
  tags: ['Linode Instances'],
  summary: 'Disk Create',
  description:
    'Adds a new Disk to a Linode.\n\n* You can optionally create a Disk from an Image or an Empty Disk if no Image is provided with a request.\n\n* When creating an Empty Disk, providing a `label` is required.\n\n* If no `label` is provided, an `image` is required instead.\n\n* When creating a Disk from an Image, `root_pass` is required.\n\n* The default filesystem for new Disks is `ext4`. If creating a Disk from an Image, the filesystem\nof the Image is used unless otherwise specified.\n\n* When deploying a StackScript on a Disk:\n  * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for\n    a list of available StackScripts.\n  * Requires a compatible Image to be supplied.\n    * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.\n  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.\n  * You may also supply a list of usernames via the `authorized_users` field.\n    * These users must have an SSH Key associated with their Profiles first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.\n',
  operationId: 'addLinodeDisk',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The parameters to set when creating the Disk.\n',
      content: {
        'application/json': { schema: DiskRequestSchema.openapi({ required: ['size'] }) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Disk created.', content: { 'application/json': { schema: DiskSchema } } },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdDisksDiskIdRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/disks/{diskId}',
  tags: ['Linode Instances'],
  summary: 'Disk View',
  description: 'View Disk information for a Disk associated with this Linode.\n',
  operationId: 'getLinodeDisk',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      diskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Disk to look up.',
            in: 'path',
            name: 'diskId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single Disk object.',
      content: { 'application/json': { schema: DiskSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const putLinodeInstancesLinodeIdDisksDiskIdRoute = createRoute({
  method: 'put',
  path: '/linode/instances/{linodeId}/disks/{diskId}',
  tags: ['Linode Instances'],
  summary: 'Disk Update',
  description: 'Updates a Disk that you have permission to `read_write`.\n',
  operationId: 'updateDisk',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      diskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Disk to look up.',
            in: 'path',
            name: 'diskId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updates the parameters of a single Disk.\n',
      content: { 'application/json': { schema: DiskSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated Disk.',
      content: { 'application/json': { schema: DiskSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const deleteLinodeInstancesLinodeIdDisksDiskIdRoute = createRoute({
  method: 'delete',
  path: '/linode/instances/{linodeId}/disks/{diskId}',
  tags: ['Linode Instances'],
  summary: 'Disk Delete',
  description:
    'Deletes a Disk you have permission to `read_write`.\n\n**Deleting a Disk is a destructive action and cannot be undone.**\n',
  operationId: 'deleteDisk',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      diskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Disk to look up.',
            in: 'path',
            name: 'diskId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdDisksDiskIdCloneRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/disks/{diskId}/clone',
  tags: ['Linode Instances'],
  summary: 'Disk Clone',
  description:
    'Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.\n',
  operationId: 'cloneLinodeDisk',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      diskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Disk to clone.',
            in: 'path',
            name: 'diskId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Disk clone initiated.',
      content: { 'application/json': { schema: DiskSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdDisksDiskIdPasswordRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/disks/{diskId}/password',
  tags: ['Linode Instances'],
  summary: 'Disk Root Password Reset',
  description: 'Resets the password of a Disk you have permission to `read_write`.\n',
  operationId: 'resetDiskPassword',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      diskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Disk to look up.',
            in: 'path',
            name: 'diskId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The new password.',
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .openapi({
                  description:
                    'The new root password for the OS installed on this Disk.\nThe password must meet the complexity strength validation requirements for a strong password.\n',
                  example: 'another@complex^Password123',
                }),
            })
            .openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns a single Disk object.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdDisksDiskIdResizeRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/disks/{diskId}/resize',
  tags: ['Linode Instances'],
  summary: 'Disk Resize',
  description:
    "Resizes a Disk you have permission to `read_write`.\n\nThe Disk must not be in use. If the Disk is in use, the request will\nsucceed but the resize will ultimately fail. For a request to succeed,\nthe Linode must be shut down prior to resizing the Disk, or the Disk\nmust not be assigned to the Linode's active Configuration Profile.\n\nIf you are resizing the Disk to a smaller size, it cannot be made smaller\nthan what is required by the total size of the files current on the Disk.\n",
  operationId: 'resizeDisk',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      diskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Disk to look up.',
            in: 'path',
            name: 'diskId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The new size of the Disk.',
      content: {
        'application/json': {
          schema: z
            .object({
              size: z
                .int()
                .min(1)
                .openapi({ description: 'The desired size, in MB, of the disk.\n', example: 2048 }),
            })
            .openapi({ required: ['size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Resize started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdFirewallsRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/firewalls',
  tags: ['Linode Instances'],
  summary: 'Firewalls List',
  description: 'View Firewall information for Firewalls associated with this Linode.\n',
  operationId: 'getLinodeFirewalls',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of Firewalls associated with this Linode.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FirewallSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const getLinodeInstancesLinodeIdIpsRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/ips',
  tags: ['Linode Instances'],
  summary: 'Networking Information List',
  description: 'Returns networking information for a single Linode.\n',
  operationId: 'getLinodeIPs',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Requested Linode's networking configuration.",
      content: {
        'application/json': {
          schema: z
            .object({
              ipv4: z
                .object({
                  private: z
                    .array(IPAddressPrivateSchema)
                    .exactOptional()
                    .openapi({
                      description:
                        'A list of private IP Address objects belonging to this Linode.\n',
                      readOnly: true,
                    }),
                  public: z
                    .array(IPAddressSchema)
                    .exactOptional()
                    .openapi({
                      description:
                        'A list of public IP Address objects belonging to this Linode.\n',
                      readOnly: true,
                    }),
                  reserved: z
                    .array(IPAddressSchema)
                    .exactOptional()
                    .openapi({
                      description:
                        'A list of reserved IP Address objects belonging to this Linode.\n',
                      readOnly: true,
                    }),
                  shared: z
                    .array(IPAddressSchema)
                    .exactOptional()
                    .openapi({
                      description: 'A list of shared IP Address objects assigned to this Linode.\n',
                      readOnly: true,
                    }),
                })
                .exactOptional()
                .openapi({
                  description: "Information about this Linode's IPv4 addresses.\n",
                  readOnly: true,
                  required: [],
                }),
              ipv6: z
                .object({
                  global: IPv6PoolSchema.exactOptional(),
                  link_local: IPAddressV6LinkLocalSchema.exactOptional(),
                  slaac: IPAddressV6SlaacSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: "Information about this Linode's IPv6 addresses.\n",
                  readOnly: true,
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesLinodeIdIpsRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/ips',
  tags: ['Linode Instances'],
  summary: 'IPv4 Address Allocate',
  description:
    'Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](/docs/api/support/#support-ticket-open). You may not add more than one private IPv4 address to a single Linode.\n',
  operationId: 'addLinodeIP',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the address you are creating.',
      content: {
        'application/json': {
          schema: z
            .object({
              public: z
                .boolean()
                .openapi({
                  description: 'Whether to create a public or private IPv4 address.\n',
                  example: true,
                }),
              type: z
                .literal('ipv4')
                .openapi({
                  description:
                    'The type of address you are allocating. Only IPv4 addresses may be allocated through this endpoint.\n',
                  example: 'ipv4',
                }),
            })
            .openapi({ required: ['type', 'public'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'IP address was successfully allocated.',
      content: { 'application/json': { schema: IPAddressSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdIpsAddressRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/ips/{address}',
  tags: ['Linode Instances'],
  summary: 'IP Address View',
  description:
    'View information about the specified IP address associated with the specified Linode.\n',
  operationId: 'getLinodeIP',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      address: z
        .string()
        .openapi({
          param: {
            description: 'The IP address to look up.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { format: 'ip', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single IP address.',
      content: { 'application/json': { schema: IPAddressSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const putLinodeInstancesLinodeIdIpsAddressRoute = createRoute({
  method: 'put',
  path: '/linode/instances/{linodeId}/ips/{address}',
  tags: ['Linode Instances'],
  summary: 'IP Address Update',
  description:
    'Updates a the reverse DNS (RDNS) for a particular IP Address associated with this Linode.\n\nSetting the RDNS to `null` for a public IPv4 address, resets it to the default "ip.linodeusercontent.com" RDNS value.\n',
  operationId: 'updateLinodeIP',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      address: z
        .string()
        .openapi({
          param: {
            description: 'The IP address to look up.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { format: 'ip', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The information to update for the IP address.',
      content: {
        'application/json': {
          schema: z
            .object({
              rdns: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.\n',
                  example: 'test.example.org',
                }),
            })
            .openapi({ required: ['rdns'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated IP address record.',
      content: { 'application/json': { schema: IPAddressSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const deleteLinodeInstancesLinodeIdIpsAddressRoute = createRoute({
  method: 'delete',
  path: '/linode/instances/{linodeId}/ips/{address}',
  tags: ['Linode Instances'],
  summary: 'IPv4 Address Delete',
  description:
    "Deletes a public or private IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address.\n",
  operationId: 'removeLinodeIP',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      address: z
        .string()
        .openapi({
          param: {
            description: 'The IP address to look up.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { format: 'ip', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'IP address successfully removed.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdMigrateRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/migrate',
  tags: ['Linode Instances'],
  summary: 'DC Migration/Pending Host Migration Initiate',
  description:
    'Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [GET /account/notifications](/docs/api/account/#notifications-list). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.\n\nTo initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [GET /regions](/docs/api/regions/#regions-list). If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.\n\n**Note:** Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.\n',
  operationId: 'migrateLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to migrate.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              region: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The region to which the Linode will be migrated. Must be a valid region slug. A list of regions can be viewed by using the [GET /regions](/docs/api/regions/#regions-list) endpoint. A cross data center migration will cancel a pending migration that has not yet been initiated.\nA cross data center migration will initiate a `linode_migrate_datacenter_create` event.\n',
                  example: 'us-east',
                }),
              upgrade: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "When initiating a cross DC migration, setting this value to true will also ensure that the Linode is upgraded to the latest generation of hardware that corresponds to your Linode's Type, if any free upgrades are available for it.\nIf no free upgrades are available, and this value is set to true, then the endpoint will return a 400 error code and the migration will not be performed.\nIf the data center set in the `region` field does not allow upgrades, then the endpoint will return a 400 error code and the migration will not be performed.\n",
                  example: false,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Scheduled migration started',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdMutateRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/mutate',
  tags: ['Linode Instances'],
  summary: 'Linode Upgrade',
  description:
    'Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.\nIf any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.\n',
  operationId: 'mutateLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to mutate.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Whether to automatically resize disks or not.',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_auto_disk_resize: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    "Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.\n",
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Mutate started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdNodebalancersRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/nodebalancers',
  tags: ['Linode Instances'],
  summary: 'Linode NodeBalancers View',
  description:
    "Returns a list of NodeBalancers that are assigned to this Linode and readable by the requesting User.\n\nRead permission to a NodeBalancer can be given to a User by accessing the User's Grants Update\n([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint.\n",
  operationId: 'getLinodeNodeBalancers',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of NodeBalancers.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NodeBalancerSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const postLinodeInstancesLinodeIdPasswordRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/password',
  tags: ['Linode Instances'],
  summary: 'Linode Root Password Reset',
  description:
    "Resets the root password for this Linode.\n* Your Linode must be [shut down](/docs/api/linode-instances/#linode-shut-down) for a password reset to complete.\n* If your Linode has more than one disk (not counting its swap disk), use the [Reset Disk Root Password](/docs/api/linode-instances/#disk-root-password-reset) endpoint to update a specific disk's root password.\n* A `password_reset` event is generated when a root password reset is successful.\n",
  operationId: 'resetLinodePassword',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode for which to reset its root password.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: "This Linode's new root password.",
      content: {
        'application/json': {
          schema: z
            .object({
              root_pass: z
                .string()
                .openapi({
                  description:
                    "The root user's password on this Linode. Linode passwords must meet a password strength score requirement that is calculated internally by the API. If the strength requirement is not met, you will receive a Password does not meet strength requirement error.\n",
                  example: 'a$eCure4assw0rd!43v51',
                }),
            })
            .openapi({ required: ['root_pass'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Password Reset.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdRebootRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/reboot',
  tags: ['Linode Instances'],
  summary: 'Linode Reboot',
  description:
    'Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.\n',
  operationId: 'rebootLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the linode to reboot.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Optional reboot parameters.',
      content: {
        'application/json': {
          schema: z
            .object({
              config_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The Linode Config ID to reboot into.  If null or omitted, the last booted config will be used.  If there was no last booted config and this Linode only has one config, it will be used.  If a config cannot be determined, an error will be returned.\n',
                  example: null,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Reboot started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdRebuildRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/rebuild',
  tags: ['Linode Instances'],
  summary: 'Linode Rebuild',
  description:
    "Rebuilds a Linode you have the `read_write` permission to modify.\nA rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:\n\n  * Requires an `image` be supplied.\n  * Requires a `root_pass` be supplied to use for the root User's Account.\n  * It is recommended to supply SSH keys for the root User using the\n    `authorized_keys` field.\n",
  operationId: 'rebuildLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to rebuild.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The requested state your Linode will be rebuilt into.',
      content: {
        'application/json': {
          schema: LinodeRequestSchema.openapi({ required: ['image', 'root_pass'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Rebuild started.',
      content: { 'application/json': { schema: LinodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdRescueRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/rescue',
  tags: ['Linode Instances'],
  summary: 'Linode Boot into Rescue Mode',
  description:
    'Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.\n* Note that "sdh" is reserved and unavailable during rescue.\n',
  operationId: 'rescueLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to rescue.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Optional object of devices to be mounted.',
      content: {
        'application/json': {
          schema: z
            .object({ devices: RescueDevicesSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Rescue started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdResizeRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/resize',
  tags: ['Linode Instances'],
  summary: 'Linode Resize',
  description:
    'Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:\n\n  * The Linode must not have a pending migration.\n  * Your Account cannot have an outstanding balance.\n  * The Linode must not have more disk allocation than the new Type allows.\n    * In that situation, you must first delete or resize the disk to be smaller.\n',
  operationId: 'resizeLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to resize.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description:
        "The Type your current Linode will resize to, and whether to attempt to automatically resize the Linode's disks.\n",
      content: {
        'application/json': {
          schema: z
            .object({
              allow_auto_disk_resize: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    "Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.\n",
                  example: true,
                }),
              type: z
                .string()
                .openapi({
                  description: 'The ID representing the Linode Type.',
                  example: 'g6-standard-2',
                  'x-linode-cli-display': 1,
                }),
            })
            .openapi({ required: ['type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Resize started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const postLinodeInstancesLinodeIdShutdownRoute = createRoute({
  method: 'post',
  path: '/linode/instances/{linodeId}/shutdown',
  tags: ['Linode Instances'],
  summary: 'Linode Shut Down',
  description:
    'Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.\n',
  operationId: 'shutdownLinodeInstance',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to shutdown.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Shutdown started.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_write'] }],
})

export const getLinodeInstancesLinodeIdStatsRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/stats',
  tags: ['Linode Instances'],
  summary: 'Linode Statistics View',
  description:
    'Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.\n',
  operationId: 'getLinodeStats',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The Linode's stats for the past 24 hours.",
      content: { 'application/json': { schema: LinodeStatsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const getLinodeInstancesLinodeIdStatsYearMonthRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/stats/{year}/{month}',
  tags: ['Linode Instances'],
  summary: 'Statistics View (year/month)',
  description:
    'Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.\n',
  operationId: 'getLinodeStatsByYearMonth',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Numeric value representing the year to look up.',
            in: 'path',
            name: 'year',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            description: 'Numeric value representing the month to look up.',
            in: 'path',
            name: 'month',
            required: true,
            schema: { maximum: 12, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The Linode's statistics for the requested period.",
      content: { 'application/json': { schema: LinodeStatsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const getLinodeInstancesLinodeIdTransferRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/transfer',
  tags: ['Linode Instances'],
  summary: 'Network Transfer View',
  description: "Returns a Linode's network transfer pool statistics for the current month.\n",
  operationId: 'getLinodeTransfer',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "A collection of the specified Linode's network transfer statistics.",
      content: {
        'application/json': {
          schema: z
            .object({
              billable: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The amount of network transfer this Linode has used, in GB, past your monthly quota.\n',
                  example: 0,
                  readOnly: true,
                }),
              quota: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The amount of network transfer this Linode adds to your transfer pool, in GB, for the current month's billing cycle.\n",
                  example: 2000,
                  readOnly: true,
                }),
              used: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The amount of network transfer used by this Linode, in bytes, for the current month's billing cycle.\n",
                  example: 22956600198,
                  readOnly: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const getLinodeInstancesLinodeIdTransferYearMonthRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/transfer/{year}/{month}',
  tags: ['Linode Instances'],
  summary: 'Network Transfer View (year/month)',
  description:
    "Returns a Linode's network transfer statistics for a specific month. The year/month values must be either a date in the past, or the current month.\n",
  operationId: 'getLinodeTransferByYearMonth',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2037),
        )
        .openapi({
          param: {
            description: 'Numeric value representing the year to look up.',
            in: 'path',
            name: 'year',
            required: true,
            schema: { maximum: 2037, minimum: 2000, type: 'integer' },
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            description: 'Numeric value representing the month to look up.',
            in: 'path',
            name: 'month',
            required: true,
            schema: { maximum: 12, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "A collection of the specified Linode's network transfer statistics for the requested month.\n",
      content: {
        'application/json': {
          schema: z
            .object({
              bytes_in: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The amount of inbound public network traffic received by this Linode, in bytes, for a specific year/month.\n',
                  example: 30471077120,
                  readOnly: true,
                }),
              bytes_out: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The amount of outbound public network traffic sent by this Linode, in bytes, for a specific year/month.\n',
                  example: 22956600198,
                  readOnly: true,
                }),
              bytes_total: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The total amount of public network traffic sent and received by this Linode, in bytes, for a specific year/month.\n',
                  example: 53427677318,
                  readOnly: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const getLinodeInstancesLinodeIdVolumesRoute = createRoute({
  method: 'get',
  path: '/linode/instances/{linodeId}/volumes',
  tags: ['Linode Instances'],
  summary: "Linode's Volumes List",
  description: 'View Block Storage Volumes attached to this Linode.\n',
  operationId: 'getLinodeVolumes',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Linode to look up.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns an array of Block Storage Volumes attached to this Linode.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VolumeSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
})

export const getLinodeKernelsRoute = createRoute({
  method: 'get',
  path: '/linode/kernels',
  tags: ['Linode Instances'],
  summary: 'Kernels List',
  description: 'Lists available Kernels.\n',
  operationId: 'getKernels',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns an array of Kernels.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(KernelSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
})

export const getLinodeKernelsKernelIdRoute = createRoute({
  method: 'get',
  path: '/linode/kernels/{kernelId}',
  tags: ['Linode Instances'],
  summary: 'Kernel View',
  description: 'Returns information about a single Kernel.\n',
  operationId: 'getKernel',
  request: {
    params: z.object({
      kernelId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Kernel to look up.',
            in: 'path',
            name: 'kernelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single Kernel object.',
      content: { 'application/json': { schema: KernelSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const getLinodeStackscriptsRoute = createRoute({
  method: 'get',
  path: '/linode/stackscripts',
  tags: ['StackScripts'],
  summary: 'StackScripts List',
  description:
    'If the request is not authenticated, only public StackScripts are returned.\n\nFor more information on StackScripts, please read our [StackScripts documentation](/docs/products/tools/stackscripts/).\n',
  operationId: 'getStackScripts',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description:
        'A list of StackScripts available to the User, including private StackScripts owned by the User if the request is authenticated.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(StackScriptSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['stackscripts:read_only'] }],
})

export const postLinodeStackscriptsRoute = createRoute({
  method: 'post',
  path: '/linode/stackscripts',
  tags: ['StackScripts'],
  summary: 'StackScript Create',
  description: 'Creates a StackScript in your Account.\n',
  operationId: 'addStackScript',
  request: {
    body: {
      description: 'The properties to set for the new StackScript.',
      content: {
        'application/json': {
          schema: StackScriptSchema.openapi({ required: ['script', 'label', 'images'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'StackScript successfully created.',
      content: { 'application/json': { schema: StackScriptSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['stackscripts:read_write'] }],
})

export const getLinodeStackscriptsStackscriptIdRoute = createRoute({
  method: 'get',
  path: '/linode/stackscripts/{stackscriptId}',
  tags: ['StackScripts'],
  summary: 'StackScript View',
  description:
    'Returns all of the information about a specified StackScript, including the contents of the script.\n',
  operationId: 'getStackScript',
  request: {
    params: z.object({
      stackscriptId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the StackScript to look up.',
            in: 'path',
            name: 'stackscriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single StackScript.',
      content: { 'application/json': { schema: StackScriptSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['stackscripts:read_only'] }],
})

export const putLinodeStackscriptsStackscriptIdRoute = createRoute({
  method: 'put',
  path: '/linode/stackscripts/{stackscriptId}',
  tags: ['StackScripts'],
  summary: 'StackScript Update',
  description:
    'Updates a StackScript.\n\n**Once a StackScript is made public, it cannot be made private.**\n',
  operationId: 'updateStackScript',
  request: {
    params: z.object({
      stackscriptId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the StackScript to look up.',
            in: 'path',
            name: 'stackscriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: StackScriptSchema } },
    },
  },
  responses: {
    200: {
      description: 'StackScript was successfully modified.',
      content: { 'application/json': { schema: StackScriptSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['stackscripts:read_write'] }],
})

export const deleteLinodeStackscriptsStackscriptIdRoute = createRoute({
  method: 'delete',
  path: '/linode/stackscripts/{stackscriptId}',
  tags: ['StackScripts'],
  summary: 'StackScript Delete',
  description:
    'Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.\n',
  operationId: 'deleteStackScript',
  request: {
    params: z.object({
      stackscriptId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the StackScript to look up.',
            in: 'path',
            name: 'stackscriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'StackScript was deleted.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['stackscripts:read_write'] }],
})

export const getLinodeTypesRoute = createRoute({
  method: 'get',
  path: '/linode/types',
  tags: ['Linode Types'],
  summary: 'Types List',
  description:
    'Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.\n',
  operationId: 'getLinodeTypes',
  responses: {
    200: {
      description: 'A collection of Linode Types.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LinodeTypeSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
})

export const getLinodeTypesTypeIdRoute = createRoute({
  method: 'get',
  path: '/linode/types/{typeId}',
  tags: ['Linode Types'],
  summary: 'Type View',
  description:
    'Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.\n',
  operationId: 'getLinodeType',
  request: {
    params: z.object({
      typeId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Linode Type to look up.',
            in: 'path',
            name: 'typeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single Linode Type.',
      content: { 'application/json': { schema: LinodeTypeSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const getLkeClustersRoute = createRoute({
  method: 'get',
  path: '/lke/clusters',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Clusters List',
  description: 'Lists current Kubernetes clusters available on your account.\n',
  operationId: 'getLKEClusters',
  responses: {
    200: {
      description: 'Returns an array of all Kubernetes clusters on your Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LKEClusterSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const postLkeClustersRoute = createRoute({
  method: 'post',
  path: '/lke/clusters',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Cluster Create',
  description:
    'Creates a Kubernetes cluster. The Kubernetes cluster will be created\nasynchronously. You can use the events system to determine when the\nKubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the\n[Kubernetes API server endpoint](/docs/api/linode-kubernetes-engine-lke/#kubernetes-api-endpoints-list) and\nthe [Kubeconfig file](/docs/api/linode-kubernetes-engine-lke/#kubeconfig-view) for the new cluster\nare ready.\n',
  operationId: 'createLKECluster',
  request: {
    body: {
      description: 'Configuration for the Kubernetes cluster',
      content: {
        'application/json': {
          schema: z
            .object({
              control_plane: z
                .object({
                  high_availability: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.\n',
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components. Enabling High Availability for LKE is an **irreversible** change.\n',
                  required: [],
                }),
              k8s_version: z.lazy(() => LKEClusterSchema),
              label: z.lazy(() => LKEClusterSchema),
              node_pools: z
                .array(LKENodePoolRequestBodySchema)
                .openapi({ required: ['type', 'count'] }),
              region: z.lazy(() => LKEClusterSchema),
              tags: z.lazy(() => LKEClusterSchema).exactOptional(),
            })
            .openapi({ required: ['label', 'region', 'k8s_version', 'node_pools'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Kubernetes cluster creation has started.',
      content: { 'application/json': { schema: LKEClusterSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const getLkeClustersClusterIdRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Cluster View',
  description: 'Get a specific Cluster by ID.\n',
  operationId: 'getLKECluster',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single Kubernetes cluster.',
      content: { 'application/json': { schema: LKEClusterSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const putLkeClustersClusterIdRoute = createRoute({
  method: 'put',
  path: '/lke/clusters/{clusterId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Cluster Update',
  description: 'Updates a Kubernetes cluster.\n',
  operationId: 'putLKECluster',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update the Kubernetes cluster.',
      content: {
        'application/json': {
          schema: z
            .object({
              control_plane: z
                .object({
                  high_availability: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.\n',
                      example: true,
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components.\n\nEnabling High Availability for LKE is an **irreversible** change.\n\nWhen upgrading pre-existing LKE clusters to use the HA Control Plane, the following changes will additionally occur:\n\n- All nodes will be deleted and new nodes will be created to replace them.\n\n- Any local storage (such as `hostPath` volumes) will be erased.\n\n- The upgrade process may take several minutes to complete, as nodes will be replaced on a rolling basis.\n',
                  required: [],
                }),
              k8s_version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;. New and recycled Nodes in this cluster will be installed with the latest available patch for the Cluster's Kubernetes version.\n\nWhen upgrading the Kubernetes version, only the next latest minor version following the current version can be deployed. For example, a cluster with Kubernetes version 1.19 can be upgraded to version 1.20, but not directly to 1.21.\n\nThe Kubernetes version of a cluster can not be downgraded.\n",
                }),
              label: z.lazy(() => LKEClusterSchema).exactOptional(),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only. To delete a tag, exclude it from your `tags` array.\n',
                  example: ['prod', 'monitoring', 'ecomm', 'blog'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns a single Kubernetes cluster.',
      content: {
        'application/json': {
          schema: z
            .object({
              created: z.lazy(() => LKEClusterSchema).exactOptional(),
              k8s_version: z.lazy(() => LKEClusterSchema).exactOptional(),
              label: z.lazy(() => LKEClusterSchema).exactOptional(),
              region: z.lazy(() => LKEClusterSchema).exactOptional(),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only. To delete a tag, exclude it from your `tags` array.\n',
                  example: ['prod', 'monitoring', 'ecomm', 'blog'],
                }),
              updated: z.lazy(() => LKEClusterSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const deleteLkeClustersClusterIdRoute = createRoute({
  method: 'delete',
  path: '/lke/clusters/{clusterId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Cluster Delete',
  description:
    'Deletes a Cluster you have permission to `read_write`.\n\n**Deleting a Cluster is a destructive action and cannot be undone.**\n\nDeleting a Cluster:\n  - Deletes all Linodes in all pools within this Kubernetes cluster\n  - Deletes all supporting Kubernetes services for this Kubernetes\n    cluster (API server, etcd, etc)\n  - Deletes all NodeBalancers created by this Kubernetes cluster\n  - Does not delete any of the volumes created by this Kubernetes\n    cluster\n',
  operationId: 'deleteLKECluster',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const getLkeClustersClusterIdApiEndpointsRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}/api-endpoints',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes API Endpoints List',
  description:
    'List the Kubernetes API server endpoints for this cluster. Please note that it often takes 2-5 minutes before the endpoint is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).\n',
  operationId: 'getLKEClusterAPIEndpoints',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Kubernetes API server endpoints for this cluster.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      endpoint: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'A Kubernetes API server endpoint for this cluster.\n',
                          example: 'https://192.0.2.1:6443',
                          readOnly: true,
                        }),
                    })
                    .openapi({
                      description: 'The Kubernetes API server endpoints for this cluster.\n',
                      required: [],
                    }),
                )
                .exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const getLkeClustersClusterIdDashboardRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}/dashboard',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Cluster Dashboard URL View',
  description:
    'Get a [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) access URL for this Cluster, which enables performance of administrative tasks through a web interface.\n\nDashboards are installed for Clusters by default.\n\nTo access the Cluster Dashboard login prompt, enter the URL in a web browser. Select either **Token** or **Kubeconfig** authentication, then select **Sign in**.\n\nFor additional guidance on using the Cluster Dashboard, see the [Navigating the Cluster Dashboard](/docs/guides/using-the-kubernetes-dashboard-on-lke/#navigating-the-cluster-dashboard) section of our guide on [Using the Kubernetes Dashboard on LKE](/docs/guides/using-the-kubernetes-dashboard-on-lke/).\n',
  operationId: 'getLKEClusterDashboard',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a Kubernetes Cluster Dashboard URL.',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Cluster Dashboard access URL.',
                  example: 'https://example.dashboard.linodelke.net',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const getLkeClustersClusterIdKubeconfigRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}/kubeconfig',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubeconfig View',
  description:
    'Get the Kubeconfig file for a Cluster. Please note that it often takes 2-5 minutes before\nthe Kubeconfig file is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).\n',
  operationId: 'getLKEClusterKubeconfig',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Base64-encoded Kubeconfig file for this Kubernetes cluster.',
      content: {
        'application/json': {
          schema: z
            .object({
              kubeconfig: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Base64-encoded Kubeconfig file for this Cluster.\n',
                  readOnly: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const deleteLkeClustersClusterIdKubeconfigRoute = createRoute({
  method: 'delete',
  path: '/lke/clusters/{clusterId}/kubeconfig',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubeconfig Delete',
  description: 'Delete and regenerate the Kubeconfig file for a Cluster.\n',
  operationId: 'deleteLKEClusterKubeconfig',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Kubeconfig file deleted and regenerated successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const getLkeClustersClusterIdNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}/nodes/{nodeId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node View',
  description: 'Returns the values for a specified node object.\n',
  operationId: 'getLKEClusterNode',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster containing the Node.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      nodeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Node to look up.',
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the values of a node object in the form that it appears currently in the node pool array.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The Node's ID.\n",
                  example: '12345-6aa78910bc',
                  readOnly: true,
                }),
              instance_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The Linode's ID. If no Linode is currently provisioned for this Node, this is `null`.\n",
                  example: 123456,
                }),
              status: z
                .enum(['ready', 'not_ready'])
                .exactOptional()
                .openapi({
                  description:
                    "The creation status of this Node. This status is distinct from this Node's readiness as a Kubernetes Node Object as determined by the command `kubectl get nodes`.\n\n`not_ready` indicates that the Linode is still being created.\n\n`ready` indicates that the Linode has successfully been created and is running Kubernetes software.\n",
                  example: 'ready',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const deleteLkeClustersClusterIdNodesNodeIdRoute = createRoute({
  method: 'delete',
  path: '/lke/clusters/{clusterId}/nodes/{nodeId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Delete',
  description:
    'Deletes a specific Node from a Node Pool.\n\n**Deleting a Node is a destructive action and cannot be undone.**\n\nDeleting a Node will reduce the size of the Node Pool it belongs to.\n',
  operationId: 'deleteLKEClusterNode',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster containing the Node.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      nodeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Node to look up.',
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const postLkeClustersClusterIdNodesNodeIdRecycleRoute = createRoute({
  method: 'post',
  path: '/lke/clusters/{clusterId}/nodes/{nodeId}/recycle',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Recycle',
  description:
    'Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted\nand replaced with a new Linode, which may take a few minutes. Replacement Nodes are\ninstalled with the latest available patch for the Cluster\'s Kubernetes Version.\n\n**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**\n',
  operationId: 'postLKEClusterNodeRecycle',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster containing the Node.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      nodeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Node to be recycled.',
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recycle request succeeded and is in progress.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const getLkeClustersClusterIdPoolsRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}/pools',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Pools List',
  description: 'Returns all active Node Pools on a Kubernetes cluster.\n',
  operationId: 'getLKEClusterPools',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns an array of all Pools in this Kubernetes cluster.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LKENodePoolSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const postLkeClustersClusterIdPoolsRoute = createRoute({
  method: 'post',
  path: '/lke/clusters/{clusterId}/pools',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Pool Create',
  description: 'Creates a new Node Pool for the designated Kubernetes cluster.\n',
  operationId: 'postLKEClusterPools',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Configuration for the Node Pool',
      content: {
        'application/json': {
          schema: LKENodePoolRequestBodySchema.openapi({ required: ['type', 'count'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Node Pool has been created.',
      content: { 'application/json': { schema: LKENodePoolSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const getLkeClustersClusterIdPoolsPoolIdRoute = createRoute({
  method: 'get',
  path: '/lke/clusters/{clusterId}/pools/{poolId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Pool View',
  description: 'Get a specific Node Pool by ID.\n',
  operationId: 'getLKENodePool',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      poolId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Pool to look up',
            in: 'path',
            name: 'poolId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the requested Node Pool.',
      content: { 'application/json': { schema: LKENodePoolSchema } },
    },
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const putLkeClustersClusterIdPoolsPoolIdRoute = createRoute({
  method: 'put',
  path: '/lke/clusters/{clusterId}/pools/{poolId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Pool Update',
  description:
    'Updates a Node Pool\'s count and autoscaler configuration.\n\nLinodes will be created or deleted to match changes to the Node Pool\'s count.\n\n**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**\n',
  operationId: 'putLKENodePool',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      poolId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Pool to look up',
            in: 'path',
            name: 'poolId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update',
      content: {
        'application/json': {
          schema: z
            .object({
              autoscaler: z.lazy(() => LKENodePoolRequestBodySchema).exactOptional(),
              count: z.lazy(() => LKENodePoolSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Node Pool was successfully modified.',
      content: { 'application/json': { schema: LKENodePoolSchema } },
    },
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const deleteLkeClustersClusterIdPoolsPoolIdRoute = createRoute({
  method: 'delete',
  path: '/lke/clusters/{clusterId}/pools/{poolId}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Pool Delete',
  description:
    'Delete a specific Node Pool from a Kubernetes cluster.\n\n**Deleting a Node Pool is a destructive action and cannot be undone.**\n\nDeleting a Node Pool will delete all Linodes within that Pool.\n',
  operationId: 'deleteLKENodePool',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster to look up.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      poolId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Pool to look up',
            in: 'path',
            name: 'poolId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const postLkeClustersClusterIdPoolsPoolIdRecycleRoute = createRoute({
  method: 'post',
  path: '/lke/clusters/{clusterId}/pools/{poolId}/recycle',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Node Pool Recycle',
  description:
    'Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted\nand replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are\ninstalled with the latest available patch for the Cluster\'s Kubernetes Version.\n\n**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**\n',
  operationId: 'postLKEClusterPoolRecycle',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster this Node Pool is attached to.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      poolId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Node Pool to be recycled.',
            in: 'path',
            name: 'poolId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recycle request succeeded and is in progress.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const postLkeClustersClusterIdRecycleRoute = createRoute({
  method: 'post',
  path: '/lke/clusters/{clusterId}/recycle',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Cluster Nodes Recycle',
  description:
    'Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted\nand replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are\ninstalled with the latest available [patch version](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/release/versioning.md#kubernetes-release-versioning) for the Cluster\'s current Kubernetes minor release.\n\n**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**\n',
  operationId: 'postLKEClusterRecycle',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Kubernetes cluster which contains nodes to be recycled.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recycle request succeeded and is in progress.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const postLkeClustersClusterIdRegenerateRoute = createRoute({
  method: 'post',
  path: '/lke/clusters/{clusterId}/regenerate',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Cluster Regenerate',
  description:
    "Regenerate the Kubeconfig file and/or the service account token for a Cluster.\n\nThis is a helper command that allows performing both the [Kubeconfig Delete](#kubeconfig-delete) and the [Service Token Delete](#service-token-delete) actions with a single request.\n\nWhen using this command, at least one of `kubeconfig` or `servicetoken` is required.\n\n**Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.\n",
  operationId: 'postLKEClusterRegenerate',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the target Kubernetes cluster.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Kubernetes Cluster Regenerate request object.',
      content: {
        'application/json': {
          schema: z
            .object({
              kubeconfig: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to delete and regenerate the Kubeconfig file for this Cluster.\n',
                  example: true,
                }),
              servicetoken: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to delete and regenerate the service access token for this Cluster.\n',
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Regenerate request successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const deleteLkeClustersClusterIdServicetokenRoute = createRoute({
  method: 'delete',
  path: '/lke/clusters/{clusterId}/servicetoken',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Service Token Delete',
  description:
    "Delete and regenerate the service account token for a Cluster.\n\n**Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.\n",
  operationId: 'postLKECServiceTokenDelete',
  request: {
    params: z.object({
      clusterId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the target Kubernetes cluster.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service token deleted and regenerated successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_write'] }],
})

export const getLkeVersionsRoute = createRoute({
  method: 'get',
  path: '/lke/versions',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Versions List',
  description: 'List the Kubernetes versions available for deployment to a Kubernetes cluster.\n',
  operationId: 'getLKEVersions',
  responses: {
    200: {
      description:
        'Returns a list of Kubernetes versions available for deployment to a Kubernetes cluster.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LKEVersionSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const getLkeVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/lke/versions/{version}',
  tags: ['Linode Kubernetes Engine (LKE)'],
  summary: 'Kubernetes Version View',
  description: 'View a Kubernetes version available for deployment to a Kubernetes cluster.\n',
  operationId: 'getLKEVersion',
  request: {
    params: z.object({
      version: z
        .string()
        .openapi({
          param: {
            description: 'The LKE version to view.',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns a Kubernetes version object that is available for deployment to a Kubernetes cluster.\n',
      content: { 'application/json': { schema: LKEVersionSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['lke:read_only'] }],
})

export const getLongviewClientsRoute = createRoute({
  method: 'get',
  path: '/longview/clients',
  tags: ['Longview'],
  summary: 'Longview Clients List',
  description:
    'Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.\n',
  operationId: 'getLongviewClients',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Longview Clients.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LongviewClientSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_only'] }],
})

export const postLongviewClientsRoute = createRoute({
  method: 'post',
  path: '/longview/clients',
  tags: ['Longview'],
  summary: 'Longview Client Create',
  description:
    'Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.\n',
  operationId: 'createLongviewClient',
  request: {
    body: {
      description: 'Information about the LongviewClient to create.',
      content: { 'application/json': { schema: LongviewClientSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Longview Client created successfully.',
      content: { 'application/json': { schema: LongviewClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_write'] }],
})

export const getLongviewClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/longview/clients/{clientId}',
  tags: ['Longview'],
  summary: 'Longview Client View',
  description: 'Returns a single Longview Client you can access.\n',
  operationId: 'getLongviewClient',
  request: {
    params: z.object({
      clientId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Longview Client ID to access.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Longview Client.',
      content: { 'application/json': { schema: LongviewClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_only'] }],
})

export const putLongviewClientsClientIdRoute = createRoute({
  method: 'put',
  path: '/longview/clients/{clientId}',
  tags: ['Longview'],
  summary: 'Longview Client Update',
  description:
    'Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.\n',
  operationId: 'updateLongviewClient',
  request: {
    params: z.object({
      clientId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Longview Client ID to access.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: LongviewClientSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Longview Client updated successfully.',
      content: { 'application/json': { schema: LongviewClientSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_write'] }],
})

export const deleteLongviewClientsClientIdRoute = createRoute({
  method: 'delete',
  path: '/longview/clients/{clientId}',
  tags: ['Longview'],
  summary: 'Longview Client Delete',
  description:
    'Deletes a Longview Client from your Account.\n\n**All information stored for this client will be lost.**\n\nThis _does not_ uninstall the Longview Client application for your Linode - you must do that manually.\n',
  operationId: 'deleteLongviewClient',
  request: {
    params: z.object({
      clientId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Longview Client ID to access.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Longview Client deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_write'] }],
})

export const getLongviewPlanRoute = createRoute({
  method: 'get',
  path: '/longview/plan',
  tags: ['Longview'],
  summary: 'Longview Plan View',
  description:
    'Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `{}` if your current plan is Longview Free.\n\nYou must have at least one of the following `global` [User Grants](/docs/api/account/#users-grants-view) in order to access this endpoint:\n\n  - `"account_access": read_write`\n  - `"account_access": read_only`\n  - `"longview_subscription": true`\n  - `"add_longview": true`\n\n\nTo update your subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).\n',
  operationId: 'getLongviewPlan',
  responses: {
    200: {
      description: 'The Longview plan details for this account.',
      content: { 'application/json': { schema: LongviewSubscriptionSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_only'] }],
})

export const putLongviewPlanRoute = createRoute({
  method: 'put',
  path: '/longview/plan',
  tags: ['Longview'],
  summary: 'Longview Plan Update',
  description:
    'Update your Longview plan to that of the given subcription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `{}` if the updated plan is Longview Free.\n\nYou must have `"longview_subscription": true` configured as a `global` [User Grant](/docs/api/account/#users-grants-view) in order to access this endpoint.\n\nYou can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details, including `id`\'s, of each plan.\n',
  operationId: 'updateLongviewPlan',
  request: {
    body: {
      description: 'Update your Longview subscription plan.',
      content: { 'application/json': { schema: LongviewPlanSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated Longview plan details for this account.',
      content: { 'application/json': { schema: LongviewSubscriptionSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['longview:read_write'] }],
})

export const getLongviewSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/longview/subscriptions',
  tags: ['Longview'],
  summary: 'Longview Subscriptions List',
  description:
    'Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.\n',
  operationId: 'getLongviewSubscriptions',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Longview Subscriptions.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LongviewSubscriptionSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
})

export const getLongviewSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/longview/subscriptions/{subscriptionId}',
  tags: ['Longview'],
  summary: 'Longview Subscription View',
  description:
    'Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.\n',
  operationId: 'getLongviewSubscription',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'The Longview Subscription to look up.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Longview Subscription details.',
      content: { 'application/json': { schema: LongviewSubscriptionSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const getManagedContactsRoute = createRoute({
  method: 'get',
  path: '/managed/contacts',
  tags: ['Managed'],
  summary: 'Managed Contacts List',
  description:
    'Returns a paginated list of Managed Contacts on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedContacts',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of ManagedContacts',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ManagedContactSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postManagedContactsRoute = createRoute({
  method: 'post',
  path: '/managed/contacts',
  tags: ['Managed'],
  summary: 'Managed Contact Create',
  description:
    'Creates a Managed Contact.  A Managed Contact is someone Linode\nspecial forces can contact in the course of attempting to resolve an issue\nwith a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'createManagedContact',
  request: {
    body: {
      description: 'Information about the contact to create.',
      content: { 'application/json': { schema: ManagedContactSchema } },
    },
  },
  responses: {
    200: {
      description: 'Contact created.',
      content: { 'application/json': { schema: ManagedContactSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedContactsContactIdRoute = createRoute({
  method: 'get',
  path: '/managed/contacts/{contactId}',
  tags: ['Managed'],
  summary: 'Managed Contact View',
  description:
    'Returns a single Managed Contact.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedContact',
  request: {
    params: z.object({
      contactId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the contact to access.',
            in: 'path',
            name: 'contactId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Managed Contact.',
      content: { 'application/json': { schema: ManagedContactSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const putManagedContactsContactIdRoute = createRoute({
  method: 'put',
  path: '/managed/contacts/{contactId}',
  tags: ['Managed'],
  summary: 'Managed Contact Update',
  description:
    'Updates information about a Managed Contact.\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'updateManagedContact',
  request: {
    params: z.object({
      contactId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the contact to access.',
            in: 'path',
            name: 'contactId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: ManagedContactSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Contact updated successfully.',
      content: { 'application/json': { schema: ManagedContactSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteManagedContactsContactIdRoute = createRoute({
  method: 'delete',
  path: '/managed/contacts/{contactId}',
  tags: ['Managed'],
  summary: 'Managed Contact Delete',
  description:
    'Deletes a Managed Contact.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'deleteManagedContact',
  request: {
    params: z.object({
      contactId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the contact to access.',
            in: 'path',
            name: 'contactId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Contact deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedCredentialsRoute = createRoute({
  method: 'get',
  path: '/managed/credentials',
  tags: ['Managed'],
  summary: 'Managed Credentials List',
  description:
    'Returns a paginated list of Managed Credentials on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedCredentials',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of ManagedCredentials',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ManagedCredentialSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postManagedCredentialsRoute = createRoute({
  method: 'post',
  path: '/managed/credentials',
  tags: ['Managed'],
  summary: 'Managed Credential Create',
  description:
    'Creates a Managed Credential. A Managed Credential is stored securely\nto allow Linode special forces to access your Managed Services and resolve\nissues.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'createManagedCredential',
  request: {
    body: {
      description: 'Information about the Credential to create.',
      content: {
        'application/json': {
          schema: ManagedCredentialSchema.and(
            z
              .object({
                password: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The password to use when accessing the Managed Service.\n',
                    example: 's3cur3P@ssw0rd',
                  }),
                username: z
                  .string()
                  .min(0)
                  .max(5000)
                  .exactOptional()
                  .openapi({
                    description: 'The username to use when accessing the Managed Service.\n',
                    example: 'johndoe',
                  }),
              })
              .openapi({ required: [] }),
          ).openapi({ required: ['label', 'password'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Credential created.',
      content: { 'application/json': { schema: ManagedCredentialSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedCredentialsSshkeyRoute = createRoute({
  method: 'get',
  path: '/managed/credentials/sshkey',
  tags: ['Managed'],
  summary: 'Managed SSH Key View',
  description:
    "Returns the unique SSH public key assigned to your Linode account's\nManaged service. If you [add this public key](/docs/guides/linode-managed/#adding-the-public-key) to a Linode on your account,\nLinode special forces will be able to log in to the Linode with this key\nwhen attempting to resolve issues.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
  operationId: 'viewManagedSSHKey',
  responses: {
    200: {
      description: 'The requested Managed SSH public key.',
      content: {
        'application/json': {
          schema: z
            .object({
              ssh_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The unique SSH public key assigned to your Linode account's Managed service.\n",
                  example: 'ssh-rsa AAAAB...oD2ZQ== managedservices@linode',
                  readOnly: true,
                  'x-linode-cli-display': 1,
                }),
            })
            .openapi({
              description:
                "A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.\n",
              required: [],
            }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getManagedCredentialsCredentialIdRoute = createRoute({
  method: 'get',
  path: '/managed/credentials/{credentialId}',
  tags: ['Managed'],
  summary: 'Managed Credential View',
  description:
    'Returns a single Managed Credential.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedCredential',
  request: {
    params: z.object({
      credentialId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Credential to access.',
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Managed Credential.',
      content: { 'application/json': { schema: ManagedCredentialSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const putManagedCredentialsCredentialIdRoute = createRoute({
  method: 'put',
  path: '/managed/credentials/{credentialId}',
  tags: ['Managed'],
  summary: 'Managed Credential Update',
  description:
    'Updates the label of a Managed Credential. This endpoint does not update the username and password for a Managed Credential. To do this, use the Managed Credential Username and Password Update ([POST /managed/credentials/{credentialId}/update](/docs/api/managed/#managed-credential-username-and-password-update)) endpoint instead.\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'updateManagedCredential',
  request: {
    params: z.object({
      credentialId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Credential to access.',
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: ManagedCredentialSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Credential updated successfully.',
      content: { 'application/json': { schema: ManagedCredentialSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postManagedCredentialsCredentialIdRevokeRoute = createRoute({
  method: 'post',
  path: '/managed/credentials/{credentialId}/revoke',
  tags: ['Managed'],
  summary: 'Managed Credential Delete',
  description:
    'Deletes a Managed Credential.  Linode special forces will no longer\nhave access to this Credential when attempting to resolve issues.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'deleteManagedCredential',
  request: {
    params: z.object({
      credentialId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Credential to access.',
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Credential deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postManagedCredentialsCredentialIdUpdateRoute = createRoute({
  method: 'post',
  path: '/managed/credentials/{credentialId}/update',
  tags: ['Managed'],
  summary: 'Managed Credential Username and Password Update',
  description:
    'Updates the username and password for a Managed Credential.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'updateManagedCredentialUsernamePassword',
  request: {
    params: z.object({
      credentialId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Credential to update.',
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The new username and password to assign to the Managed Credential.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .openapi({
                  description: 'The password to use when accessing the Managed Service.\n',
                  example: 's3cur3P@ssw0rd',
                }),
              username: z
                .string()
                .min(0)
                .max(5000)
                .exactOptional()
                .openapi({
                  description: 'The username to use when accessing the Managed Service.\n',
                  example: 'johndoe',
                }),
            })
            .openapi({ required: ['password'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Credential username and password updated.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedIssuesRoute = createRoute({
  method: 'get',
  path: '/managed/issues',
  tags: ['Managed'],
  summary: 'Managed Issues List',
  description:
    'Returns a paginated list of recent and ongoing issues detected on your\nManaged Services.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedIssues',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of open or ongoing Managed Issues.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ManagedIssueSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getManagedIssuesIssueIdRoute = createRoute({
  method: 'get',
  path: '/managed/issues/{issueId}',
  tags: ['Managed'],
  summary: 'Managed Issue View',
  description:
    'Returns a single Issue that is impacting or did impact one of your\nManaged Services.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedIssue',
  request: {
    params: z.object({
      issueId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Issue to look up.',
            in: 'path',
            name: 'issueId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested issue.',
      content: { 'application/json': { schema: ManagedIssueSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getManagedLinodeSettingsRoute = createRoute({
  method: 'get',
  path: '/managed/linode-settings',
  tags: ['Managed'],
  summary: 'Managed Linode Settings List',
  description:
    'Returns a paginated list of Managed Settings for your Linodes. There will\nbe one entry per Linode on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedLinodeSettings',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Managed settings for your Linodes.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ManagedLinodeSettingsSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getManagedLinodeSettingsLinodeIdRoute = createRoute({
  method: 'get',
  path: '/managed/linode-settings/{linodeId}',
  tags: ['Managed'],
  summary: "Linode's Managed Settings View",
  description:
    "Returns a single Linode's Managed settings.\n\nThis command can only be accessed by the unrestricted users of an account.\n",
  operationId: 'getManagedLinodeSetting',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Linode ID whose settings we are accessing.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The requested Linode's Managed settings.",
      content: { 'application/json': { schema: ManagedLinodeSettingsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putManagedLinodeSettingsLinodeIdRoute = createRoute({
  method: 'put',
  path: '/managed/linode-settings/{linodeId}',
  tags: ['Managed'],
  summary: "Linode's Managed Settings Update",
  description:
    "Updates a single Linode's Managed settings.\nThis command can only be accessed by the unrestricted users of an account.\n",
  operationId: 'updateManagedLinodeSetting',
  request: {
    params: z.object({
      linodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Linode ID whose settings we are accessing.',
            in: 'path',
            name: 'linodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The settings to update.',
      content: { 'application/json': { schema: ManagedLinodeSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Settings updated successfully.',
      content: { 'application/json': { schema: ManagedLinodeSettingsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedServicesRoute = createRoute({
  method: 'get',
  path: '/managed/services',
  tags: ['Managed'],
  summary: 'Managed Services List',
  description:
    'Returns a paginated list of Managed Services on your Account. These\nare the services Linode Managed is monitoring and will report and attempt\nto resolve issues with.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedServices',
  responses: {
    200: {
      description: 'A paginated list of Managed Services',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ManagedServiceSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postManagedServicesRoute = createRoute({
  method: 'post',
  path: '/managed/services',
  tags: ['Managed'],
  summary: 'Managed Service Create',
  description:
    'Creates a Managed Service. Linode Managed will begin monitoring this\nservice and reporting and attempting to resolve any Issues.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'createManagedService',
  request: {
    body: {
      description: 'Information about the service to monitor.',
      content: {
        'application/json': {
          schema: ManagedServiceSchema.openapi({
            required: ['label', 'service_type', 'address', 'timeout'],
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Service created.',
      content: { 'application/json': { schema: ManagedServiceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/managed/services/{serviceId}',
  tags: ['Managed'],
  summary: 'Managed Service View',
  description:
    'Returns information about a single Managed Service on your Account.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedService',
  request: {
    params: z.object({
      serviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed Service to access.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Managed Service.',
      content: { 'application/json': { schema: ManagedServiceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putManagedServicesServiceIdRoute = createRoute({
  method: 'put',
  path: '/managed/services/{serviceId}',
  tags: ['Managed'],
  summary: 'Managed Service Update',
  description:
    'Updates information about a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'updateManagedService',
  request: {
    params: z.object({
      serviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed Service to access.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: ManagedServiceSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Service updated successfully.',
      content: { 'application/json': { schema: ManagedServiceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteManagedServicesServiceIdRoute = createRoute({
  method: 'delete',
  path: '/managed/services/{serviceId}',
  tags: ['Managed'],
  summary: 'Managed Service Delete',
  description:
    'Deletes a Managed Service.  This service will no longer be monitored by\nLinode Managed.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'deleteManagedService',
  request: {
    params: z.object({
      serviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed Service to access.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postManagedServicesServiceIdDisableRoute = createRoute({
  method: 'post',
  path: '/managed/services/{serviceId}/disable',
  tags: ['Managed'],
  summary: 'Managed Service Disable',
  description:
    'Temporarily disables monitoring of a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'disableManagedService',
  request: {
    params: z.object({
      serviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed Service to disable.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service disabled.',
      content: { 'application/json': { schema: ManagedServiceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postManagedServicesServiceIdEnableRoute = createRoute({
  method: 'post',
  path: '/managed/services/{serviceId}/enable',
  tags: ['Managed'],
  summary: 'Managed Service Enable',
  description:
    'Enables monitoring of a Managed Service.\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'enableManagedService',
  request: {
    params: z.object({
      serviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Managed Service to enable.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service enabled.',
      content: { 'application/json': { schema: ManagedServiceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getManagedStatsRoute = createRoute({
  method: 'get',
  path: '/managed/stats',
  tags: ['Managed'],
  summary: 'Managed Stats List',
  description:
    'Returns a list of Managed Stats on your Account in the form of x and y data points.\nYou can use these data points to plot your own graph visualizations. These stats\nreflect the last 24 hours of combined usage across all managed Linodes on your account\ngiving you a high-level snapshot of data for the following:\n\n\n* cpu\n* disk\n* swap\n* network in\n* network out\n\nThis command can only be accessed by the unrestricted users of an account.\n',
  operationId: 'getManagedStats',
  responses: {
    200: {
      description: 'A list of Managed Stats from the last 24 hours.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .xor([
                  StatsDataAvailableSchema.openapi({ 'x-linode-ref-name': 'Stats Available' }),
                  StatsDataUnavailableSchema.openapi({ 'x-linode-ref-name': 'Stats Unavailable' }),
                ])
                .exactOptional()
                .openapi({ discriminator: { propertyName: 'x-linode-ref-name' } }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getNetworkingFirewallsRoute = createRoute({
  method: 'get',
  path: '/networking/firewalls',
  tags: ['Networking'],
  summary: 'Firewalls List',
  description: 'Returns a paginated list of accessible Firewalls.\n',
  operationId: 'getFirewalls',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns an array of Firewalls.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FirewallSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postNetworkingFirewallsRoute = createRoute({
  method: 'post',
  path: '/networking/firewalls',
  tags: ['Networking'],
  summary: 'Firewall Create',
  description:
    "Creates a Firewall to filter network traffic.\n\n* Use the `rules` property to create inbound and outbound access rules.\n\n* Use the `devices` property to assign the Firewall to a service and apply its Rules to the device. Requires `read_write` [User's Grants](/docs/api/account/#users-grants-view) to the device.\nCurrently, Firewalls can only be assigned to Linode instances.\n\n* A Firewall can be assigned to multiple Linode instances at a time.\n\n* A Linode instance can have one active, assigned Firewall at a time.\nAdditional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.\n\n* A `firewall_create` Event is generated when this endpoint returns successfully.\n",
  operationId: 'createFirewalls',
  request: {
    body: {
      description:
        "Creates a Firewall object that can be applied to a Linode service to filter the service's network traffic.",
      content: {
        'application/json': {
          schema: FirewallSchema.and(
            z
              .object({
                devices: z
                  .object({
                    linodes: z
                      .array(z.int())
                      .exactOptional()
                      .openapi({
                        description:
                          'An array of Linode IDs. A Firewall Device is created for each ID.\n',
                        example: [123, 456],
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Devices to create for this Firewall.\nWhen a Device is created, the Firewall is assigned to its associated service.\nCurrently, Devices can only be created for Linode instances.\n',
                    required: [],
                  }),
                rules: z
                  .object({
                    inbound: z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                          if (!Object.hasOwn(val, 'action')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                          if (!Object.hasOwn(val, 'addresses')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                          if (!Object.hasOwn(val, 'protocol')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .exactOptional()
                      .openapi({ required: ['action', 'addresses', 'protocol'] }),
                    outbound: z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                          if (!Object.hasOwn(val, 'action')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                          if (!Object.hasOwn(val, 'addresses')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                          if (!Object.hasOwn(val, 'protocol')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .exactOptional()
                      .openapi({ required: ['action', 'addresses', 'protocol'] }),
                  })
                  .openapi({ required: ['inbound_policy', 'outbound_policy'] }),
              })
              .openapi({ required: ['label', 'rules'] }),
          ).openapi({ required: ['label', 'rules'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns information about the created Firewall.',
      content: { 'application/json': { schema: FirewallSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getNetworkingFirewallsFirewallIdRoute = createRoute({
  method: 'get',
  path: '/networking/firewalls/{firewallId}',
  tags: ['Networking'],
  summary: 'Firewall View',
  description:
    "Get a specific Firewall resource by its ID. The Firewall's Devices will not be\nreturned in the response. Instead, use the\n[List Firewall Devices](/docs/api/networking/#firewall-devices-list)\nendpoint to review them.\n",
  operationId: 'getFirewall',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns information about this Firewall.',
      content: { 'application/json': { schema: FirewallSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const putNetworkingFirewallsFirewallIdRoute = createRoute({
  method: 'put',
  path: '/networking/firewalls/{firewallId}',
  tags: ['Networking'],
  summary: 'Firewall Update',
  description:
    "Updates information for a Firewall. Some parts of a Firewall's configuration cannot\nbe manipulated by this endpoint:\n\n- A Firewall's Devices cannot be set with this endpoint. Instead, use the\n[Create Firewall Device](/docs/api/networking/#firewall-device-create)\nand [Delete Firewall Device](/docs/api/networking/#firewall-device-delete)\nendpoints to assign and remove this Firewall from Linode services.\n\n- A Firewall's Rules cannot be changed with this endpoint. Instead, use the\n[Update Firewall Rules](/docs/api/networking/#firewall-rules-update)\nendpoint to update your Rules.\n\n- A Firewall's status can be set to `enabled` or `disabled` by this endpoint, but it cannot be\nset to `deleted`. Instead, use the\n[Delete Firewall](/docs/api/networking/#firewall-delete)\nendpoint to delete a Firewall.\n\nIf a Firewall's status is changed with this endpoint, a corresponding `firewall_enable` or\n`firewall_disable` Event will be generated.\n",
  operationId: 'updateFirewall',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Firewall information to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              label: z.lazy(() => FirewallSchema).exactOptional(),
              status: z
                .enum(['enabled', 'disabled'])
                .exactOptional()
                .openapi({
                  description:
                    'The status to be applied to this Firewall.\n \n * When a Firewall is first created its status is `enabled`.\n * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.\n',
                  example: 'enabled',
                  'x-linode-cli-display': 3,
                }),
              tags: z.lazy(() => FirewallSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Firewall updated successfully.',
      content: { 'application/json': { schema: FirewallSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const deleteNetworkingFirewallsFirewallIdRoute = createRoute({
  method: 'delete',
  path: '/networking/firewalls/{firewallId}',
  tags: ['Networking'],
  summary: 'Firewall Delete',
  description:
    "Delete a Firewall resource by its ID. This will remove all of the Firewall's Rules\nfrom any Linode services that the Firewall was assigned to.\n\nA `firewall_delete` Event is generated when this endpoint returns successfully.\n",
  operationId: 'deleteFirewall',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete Successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getNetworkingFirewallsFirewallIdDevicesRoute = createRoute({
  method: 'get',
  path: '/networking/firewalls/{firewallId}/devices',
  tags: ['Networking'],
  summary: 'Firewall Devices List',
  description:
    "Returns a paginated list of a Firewall's Devices. A Firewall Device assigns a\nFirewall to a Linode service (referred to as the Device's `entity`). Currently,\nonly Devices with an entity of type `linode` are accepted.\n",
  operationId: 'getFirewallDevices',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A paginated list of Firewall Devices',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FirewallDevicesSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postNetworkingFirewallsFirewallIdDevicesRoute = createRoute({
  method: 'post',
  path: '/networking/firewalls/{firewallId}/devices',
  tags: ['Networking'],
  summary: 'Firewall Device Create',
  description:
    "Creates a Firewall Device, which assigns a Firewall to a service (referred to\nas the Device's `entity`) and applies the Firewall's Rules to the device.\n\n* Currently, only Devices with an entity of type `linode` are accepted.\n\n* A Firewall can be assigned to multiple Linode instances at a time.\n\n* A Linode instance can have one active, assigned Firewall at a time.\nAdditional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.\n\n* A `firewall_device_add` Event is generated when the Firewall Device is added successfully.\n",
  operationId: 'createFirewallDevice',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.lazy(() => FirewallDevicesSchema).openapi({ required: ['id', 'type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns information about the created Firewall Device.',
      content: { 'application/json': { schema: FirewallDevicesSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getNetworkingFirewallsFirewallIdDevicesDeviceIdRoute = createRoute({
  method: 'get',
  path: '/networking/firewalls/{firewallId}/devices/{deviceId}',
  tags: ['Networking'],
  summary: 'Firewall Device View',
  description:
    "Returns information for a Firewall Device, which assigns a Firewall\nto a Linode service (referred to as the Device's `entity`). Currently,\nonly Devices with an entity of type `linode` are accepted.\n",
  operationId: 'getFirewallDevice',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall Device to access.\n',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Firewall Device.',
      content: { 'application/json': { schema: FirewallDevicesSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/networking/firewalls/{firewallId}/devices/{deviceId}',
  tags: ['Networking'],
  summary: 'Firewall Device Delete',
  description:
    "Removes a Firewall Device, which removes a Firewall from the Linode service it was\nassigned to by the Device. This will remove all of the Firewall's Rules from the Linode\nservice. If any other Firewalls have been assigned to the Linode service, then those Rules\nwill remain in effect.\n\nA `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.\n",
  operationId: 'deleteFirewallDevice',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall Device to access.\n',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete Successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getNetworkingFirewallsFirewallIdRulesRoute = createRoute({
  method: 'get',
  path: '/networking/firewalls/{firewallId}/rules',
  tags: ['Networking'],
  summary: 'Firewall Rules List',
  description: 'Returns the inbound and outbound Rules for a Firewall.\n',
  operationId: 'getFirewallRules',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Firewall Rules.',
      content: { 'application/json': { schema: z.lazy(() => FirewallSchema) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const putNetworkingFirewallsFirewallIdRulesRoute = createRoute({
  method: 'put',
  path: '/networking/firewalls/{firewallId}/rules',
  tags: ['Networking'],
  summary: 'Firewall Rules Update',
  description:
    "Updates the inbound and outbound Rules for a Firewall.\n\n**Note:** This command replaces all of a Firewall's `inbound` and/or `outbound` rulesets with the values specified in your request.\n",
  operationId: 'updateFirewallRules',
  request: {
    params: z.object({
      firewallId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Firewall to access.\n',
            in: 'path',
            name: 'firewallId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The Firewall Rules information to update.',
      content: {
        'application/json': {
          schema: z
            .lazy(() => FirewallSchema)
            .and(
              z
                .object({
                  inbound: z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'action')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                        if (!Object.hasOwn(val, 'addresses')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                        if (!Object.hasOwn(val, 'protocol')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .exactOptional()
                    .openapi({ required: ['action', 'addresses', 'protocol'] }),
                  outbound: z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'action')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                        if (!Object.hasOwn(val, 'addresses')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                        if (!Object.hasOwn(val, 'protocol')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .exactOptional()
                    .openapi({ required: ['action', 'addresses', 'protocol'] }),
                })
                .openapi({ required: [] }),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Firewall Rules updated successfully.',
      content: { 'application/json': { schema: z.lazy(() => FirewallSchema) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['firewall:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getNetworkingIpsRoute = createRoute({
  method: 'get',
  path: '/networking/ips',
  tags: ['Networking'],
  summary: 'IP Addresses List',
  description:
    'Returns a paginated list of IP Addresses on your Account, excluding private addresses.\n',
  operationId: 'getIPs',
  responses: {
    200: {
      description: 'A paginated list of IP Addresses.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(IPAddressSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_only'] }],
})

export const postNetworkingIpsRoute = createRoute({
  method: 'post',
  path: '/networking/ips',
  tags: ['Networking'],
  summary: 'IP Address Allocate',
  description:
    'Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](/docs/api/support/#support-ticket-open) requesting additional addresses before attempting allocation.\n',
  operationId: 'allocateIP',
  request: {
    body: {
      description: 'Information about the address you are creating.',
      content: {
        'application/json': {
          schema: z
            .object({
              linode_id: z
                .int()
                .openapi({
                  description:
                    'The ID of a Linode you you have access to that this address will be allocated to.\n',
                  example: 123,
                }),
              public: z
                .boolean()
                .openapi({
                  description: 'Whether to create a public or private IPv4 address.\n',
                  example: true,
                }),
              type: z
                .literal('ipv4')
                .openapi({
                  description:
                    'The type of address you are requesting. Only IPv4 addresses may be allocated through this endpoint.\n',
                  example: 'ipv4',
                }),
            })
            .openapi({ required: ['type', 'public', 'linode_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'IP Address allocated successfully.',
      content: { 'application/json': { schema: IPAddressSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write', 'linodes:read_write'] }],
})

export const postNetworkingIpsAssignRoute = createRoute({
  method: 'post',
  path: '/networking/ips/assign',
  tags: ['Networking'],
  summary: 'IP Addresses Assign',
  description:
    "Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.\n\nThe following restrictions apply:\n* All Linodes involved must have at least one public IPv4 address after assignment.\n* Linodes may have no more than one assigned private IPv4 address.\n* Linodes may have no more than one assigned IPv6 range.\n\n[Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.\n\n**Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:\n* **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))\n* **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))\n",
  operationId: 'assignIPs',
  request: {
    body: {
      description:
        'Information about what IPv4 address or IPv6 range to assign, and to which Linode.\n',
      content: { 'application/json': { schema: IPAddressesAssignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'All assignments completed successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write', 'linodes:read_write'] }],
})

export const postNetworkingIpsShareRoute = createRoute({
  method: 'post',
  path: '/networking/ips/share',
  tags: ['Networking'],
  summary: 'IP Addresses Share',
  description:
    "Configure shared IPs.\n\nIP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.\n\nIP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.\n",
  operationId: 'shareIPs',
  request: {
    body: {
      description: 'Information about what IPs to share with which Linode.',
      content: { 'application/json': { schema: IPAddressesShareRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'IP Address sharing successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write', 'linodes:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4beta' }],
})

export const getNetworkingIpsAddressRoute = createRoute({
  method: 'get',
  path: '/networking/ips/{address}',
  tags: ['Networking'],
  summary: 'IP Address View',
  description: 'Returns information about a single IP Address on your Account.\n',
  operationId: 'getIP',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'The address to operate on.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { format: 'ip', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested IP Address.',
      content: { 'application/json': { schema: IPAddressSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_only'] }],
})

export const putNetworkingIpsAddressRoute = createRoute({
  method: 'put',
  path: '/networking/ips/{address}',
  tags: ['Networking'],
  summary: 'IP Address RDNS Update',
  description:
    'Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _ip.linodeusercontent.com_ RDNS value.\n',
  operationId: 'updateIP',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'The address to operate on.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { format: 'ip', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The information to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              rdns: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.\n',
                  example: 'test.example.org',
                  'x-linode-cli-display': 4,
                }),
            })
            .openapi({ required: ['rdns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'RDNS set successfully',
      content: { 'application/json': { schema: IPAddressSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write'] }],
})

export const postNetworkingIpv4AssignRoute = createRoute({
  method: 'post',
  path: '/networking/ipv4/assign',
  tags: ['Networking'],
  summary: 'Linodes Assign IPv4s',
  description:
    "This command is equivalent to **IP Addresses Assign** ([POST /networking/ips/assign](#ip-addresses-assign)).\n\nAssign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.\n\nThe following restrictions apply:\n* All Linodes involved must have at least one public IPv4 address after assignment.\n* Linodes may have no more than one assigned private IPv4 address.\n* Linodes may have no more than one assigned IPv6 range.\n\n[Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.\n\n**Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:\n* **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))\n* **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))\n",
  operationId: 'assignIPv4s',
  request: {
    body: {
      description: 'Information about what IPv4 address to assign, and to which Linode.\n',
      content: { 'application/json': { schema: IPAddressesAssignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'All assignments completed successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write', 'linodes:read_write'] }],
})

export const postNetworkingIpv4ShareRoute = createRoute({
  method: 'post',
  path: '/networking/ipv4/share',
  tags: ['Networking'],
  summary: 'IPv4 Sharing Configure',
  description:
    "This command is equivalent to **IP Addresses Share** ([POST /networking/ips/share](#ip-addresses-share)).\n\nConfigure shared IPs.\n\nIP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.\n\nIP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.\n",
  operationId: 'shareIPv4s',
  request: {
    body: {
      description: 'Information about what IPs to share with which Linode.',
      content: { 'application/json': { schema: IPAddressesShareRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Sharing configured successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write', 'linodes:read_write'] }],
})

export const getNetworkingIpv6PoolsRoute = createRoute({
  method: 'get',
  path: '/networking/ipv6/pools',
  tags: ['Networking'],
  summary: 'IPv6 Pools List',
  description:
    'Displays the IPv6 pools on your Account. A pool of IPv6 addresses are routed to all of your Linodes in a single [Region](/docs/api/regions/#regions-list). Any Linode on your Account may bring up any address in this pool at any time, with no external configuration required.\n',
  operationId: 'getIPv6Pools',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'The IPv6 pools on your Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(IPv6PoolSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_only'] }],
})

export const getNetworkingIpv6RangesRoute = createRoute({
  method: 'get',
  path: '/networking/ipv6/ranges',
  tags: ['Networking'],
  summary: 'IPv6 Ranges List',
  description:
    'Displays the IPv6 ranges on your Account.\n\n\n  * An IPv6 range is a `/64` or `/54` block of IPv6 addresses routed to a single Linode in a given [Region](/docs/api/regions/#regions-list).\n\n  * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.\n\n  * Access the IPv6 Range Create ([POST /networking/ipv6/ranges](/docs/api/networking/#ipv6-range-create)) endpoint to add a `/64` or `/56` block of IPv6 addresses to your account.\n',
  operationId: 'getIPv6Ranges',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'The IPv6 ranges on your Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(IPv6RangeSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_only'] }],
})

export const postNetworkingIpv6RangesRoute = createRoute({
  method: 'post',
  path: '/networking/ipv6/ranges',
  tags: ['Networking'],
  summary: 'IPv6 Range Create',
  description:
    "Creates an IPv6 Range and assigns it based on the provided Linode or route target IPv6 SLAAC address. See the `ipv6` property when accessing the Linode View ([GET /linode/instances/{linodeId}](/docs/api/linode-instances/#linode-view)) endpoint to view a Linode's IPv6 SLAAC address.\n  * Either `linode_id` or `route_target` is required in a request.\n  * `linode_id` and `route_target` are mutually exclusive. Submitting values for both properties in a request results in an error.\n  * Upon a successful request, an IPv6 range is created in the [Region](/docs/api/regions/#regions-list) that corresponds to the provided `linode_id` or `route_target`.\n  * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.\n  * Access the IP Addresses Assign ([POST /networking/ips/assign](/docs/api/networking/#ip-addresses-assign)) endpoint to re-assign IPv6 Ranges to your Linodes.\n\n**Note**: The following restrictions apply:\n  * A Linode can only have one IPv6 range targeting its SLAAC address.\n  * An account can only have one IPv6 range in each [Region](/docs/api/regions/#regions-list).\n  * [Open a Support Ticket](/docs/api/support/#support-ticket-open) to request expansion of these restrictions.\n",
  operationId: 'postIPv6Range',
  request: {
    body: {
      description: 'Information about the IPv6 range to create.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              linode_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The ID of the Linode to assign this range to. The SLAAC address for the provided Linode is used as the range's `route_target`.\n\n* **Required** if `route_target` is omitted from the request.\n\n* Mutually exclusive with `route_target`. Submitting values for both properties in a request results in an error.\n",
                  example: 123,
                }),
              prefix_length: z
                .union([z.literal(56), z.literal(64)])
                .openapi({ description: 'The prefix length of the IPv6 range.\n' }),
              route_target: z
                .ipv6()
                .exactOptional()
                .openapi({
                  description:
                    'The IPv6 SLAAC address to assign this range to.\n\n* **Required** if `linode_id` is omitted from the request.\n\n* Mutually exclusive with `linode_id`. Submitting values for both properties in a request results in an error.\n\n* **Note**: Omit the `/128` prefix length of the SLAAC address when using this property.\n',
                  example: '2001:0db8::1',
                }),
            })
            .openapi({ required: ['prefix_length'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'IPv6 range created successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              range: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The IPv6 network range, including subnet and prefix length.\n',
                  example: '2001:0db8::/64',
                }),
              route_target: z
                .ipv6()
                .exactOptional()
                .openapi({
                  description:
                    'The route target IPV6 SLAAC address for this range. Does not include the prefix length.\n',
                  example: '2001:0db8::1',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write', 'linodes:read_write'] }],
})

export const getNetworkingIpv6RangesRangeRoute = createRoute({
  method: 'get',
  path: '/networking/ipv6/ranges/{range}',
  tags: ['Networking'],
  summary: 'IPv6 Range View',
  description: 'View IPv6 range information.\n',
  operationId: 'getIPv6Range',
  request: {
    params: z.object({
      range: z
        .ipv6()
        .openapi({
          param: {
            description:
              'The IPv6 range to access. Corresponds to the `range` property of objects returned from the IPv6 Ranges List ([GET /networking/ipv6/ranges](/docs/api/networking/#ipv6-ranges-list)) command.\n\n**Note**: Omit the prefix length of the IPv6 range.\n',
            in: 'path',
            name: 'range',
            required: true,
            schema: { format: 'ipv6', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns IPv6 range information.',
      content: { 'application/json': { schema: IPv6RangeBGPSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read'] }],
})

export const deleteNetworkingIpv6RangesRangeRoute = createRoute({
  method: 'delete',
  path: '/networking/ipv6/ranges/{range}',
  tags: ['Networking'],
  summary: 'IPv6 Range Delete',
  description:
    'Removes this IPv6 range from your account and disconnects the range from any assigned Linodes.\n\n**Note:** Shared IPv6 ranges cannot be deleted at this time. Please contact Customer Support for assistance.\n',
  operationId: 'deleteIPv6Range',
  request: {
    params: z.object({
      range: z
        .ipv6()
        .openapi({
          param: {
            description:
              'The IPv6 range to access. Corresponds to the `range` property of objects returned from the IPv6 Ranges List ([GET /networking/ipv6/ranges](/docs/api/networking/#ipv6-ranges-list)) command.\n\n**Note**: Omit the prefix length of the IPv6 range.\n',
            in: 'path',
            name: 'range',
            required: true,
            schema: { format: 'ipv6', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'IPv6 Range deleted.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['ips:read_write'] }],
})

export const getNetworkingVlansRoute = createRoute({
  method: 'get',
  path: '/networking/vlans',
  tags: ['Networking'],
  summary: 'VLANs List',
  description:
    'Returns a list of all Virtual Local Area Networks (VLANs) on your Account. VLANs provide\na mechanism for secure communication between two or more Linodes that are assigned to the\nsame VLAN and are both within the same Layer 2 broadcast domain.\n\nVLANs are created and attached to Linodes by using the `interfaces` property for the following endpoints:\n\n- Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))\n- Configuration Profile Create ([POST /linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profile-create))\n- Configuration Profile Update ([PUT /linode/instances/{linodeId}/configs/{configId}](/docs/api/linode-instances/#configuration-profile-update))\n\nThere are several ways to detach a VLAN from a Linode:\n\n- [Update](/docs/api/linode-instances/#configuration-profile-update) the active Configuration Profile to remove the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode.\n- [Create](/docs/api/linode-instances/#configuration-profile-create) a new Configuration Profile without the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode into the new Configuration Profile.\n- [Delete](/docs/api/linode-instances/#linode-delete) the Linode.\n\n**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.\nIf a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,\nthe migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,\nyou will be prompted to select a different data center or contact support.\n\n**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) to view additional specifications and limitations.\n',
  operationId: 'getVLANs',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'The VLANs available on this Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VlansSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['linodes:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4beta' }],
})

export const getNodebalancersRoute = createRoute({
  method: 'get',
  path: '/nodebalancers',
  tags: ['NodeBalancers'],
  summary: 'NodeBalancers List',
  description: 'Returns a paginated list of NodeBalancers you have access to.\n',
  operationId: 'getNodeBalancers',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of NodeBalancers.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NodeBalancerSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_only'] }],
})

export const postNodebalancersRoute = createRoute({
  method: 'post',
  path: '/nodebalancers',
  tags: ['NodeBalancers'],
  summary: 'NodeBalancer Create',
  description:
    'Creates a NodeBalancer in the requested Region.\n\nNodeBalancers require a port Config with at least one backend Node to start serving requests.\n\nWhen using the Linode CLI to create a NodeBalancer, first create a NodeBalancer without any Configs. Then, create Configs and Nodes for that NodeBalancer with the respective [Config Create](/docs/api/nodebalancers/#config-create) and [Node Create](/docs/api/nodebalancers/#node-create) commands.\n',
  operationId: 'createNodeBalancer',
  request: {
    body: {
      description: 'Information about the NodeBalancer to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              client_conn_throttle: z.lazy(() => NodeBalancerSchema).exactOptional(),
              configs: z
                .array(
                  z
                    .object({
                      algorithm: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check_attempts: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check_body: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check_interval: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check_passive: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check_path: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      check_timeout: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      cipher_suite: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      nodes: z
                        .array(NodeBalancerNodeSchema)
                        .exactOptional()
                        .openapi({
                          description: 'The NodeBalancer Node(s) that serve this Config.\n',
                        }),
                      port: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      protocol: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      proxy_protocol: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      ssl_cert: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      ssl_key: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                      stickiness: z.lazy(() => NodeBalancerConfigSchema).exactOptional(),
                    })
                    .openapi({
                      description:
                        'A request object representing a NodeBalancer Config, including Nodes.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The port Config(s) to create for this NodeBalancer.\n\nEach Config must have a unique port and at least one Node.\n',
                  required: ['nodes'],
                }),
              label: z.lazy(() => NodeBalancerSchema).exactOptional(),
              region: z
                .string()
                .openapi({
                  description: 'The ID of the Region to create this NodeBalancer in.\n',
                  example: 'us-east',
                }),
            })
            .openapi({ required: ['region'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'NodeBalancer created successfully.',
      content: { 'application/json': { schema: NodeBalancerSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const getNodebalancersNodeBalancerIdRoute = createRoute({
  method: 'get',
  path: '/nodebalancers/{nodeBalancerId}',
  tags: ['NodeBalancers'],
  summary: 'NodeBalancer View',
  description: 'Returns a single NodeBalancer you can access.\n',
  operationId: 'getNodeBalancer',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested NodeBalancer object.',
      content: { 'application/json': { schema: NodeBalancerSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_only'] }],
})

export const putNodebalancersNodeBalancerIdRoute = createRoute({
  method: 'put',
  path: '/nodebalancers/{nodeBalancerId}',
  tags: ['NodeBalancers'],
  summary: 'NodeBalancer Update',
  description: 'Updates information about a NodeBalancer you can access.\n',
  operationId: 'updateNodeBalancer',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The information to update.',
      content: { 'application/json': { schema: NodeBalancerSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'NodeBalancer updated successfully.',
      content: { 'application/json': { schema: NodeBalancerSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const deleteNodebalancersNodeBalancerIdRoute = createRoute({
  method: 'delete',
  path: '/nodebalancers/{nodeBalancerId}',
  tags: ['NodeBalancers'],
  summary: 'NodeBalancer Delete',
  description:
    'Deletes a NodeBalancer.\n\n**This is a destructive action and cannot be undone.**\n\nDeleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.\n',
  operationId: 'deleteNodeBalancer',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'NodeBalancer deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const getNodebalancersNodeBalancerIdConfigsRoute = createRoute({
  method: 'get',
  path: '/nodebalancers/{nodeBalancerId}/configs',
  tags: ['NodeBalancers'],
  summary: 'Configs List',
  description:
    'Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.\n\nFor example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.\n',
  operationId: 'getNodeBalancerConfigs',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A paginted list of NodeBalancer Configs',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NodeBalancerConfigSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_only'] }],
})

export const postNodebalancersNodeBalancerIdConfigsRoute = createRoute({
  method: 'post',
  path: '/nodebalancers/{nodeBalancerId}/configs',
  tags: ['NodeBalancers'],
  summary: 'Config Create',
  description:
    'Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.\n',
  operationId: 'createNodeBalancerConfig',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the port to configure.',
      content: { 'application/json': { schema: NodeBalancerConfigSchema } },
    },
  },
  responses: {
    200: {
      description: 'Config created successfully.',
      content: { 'application/json': { schema: NodeBalancerConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const getNodebalancersNodeBalancerIdConfigsConfigIdRoute = createRoute({
  method: 'get',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}',
  tags: ['NodeBalancers'],
  summary: 'Config View',
  description: 'Returns configuration information for a single port of this NodeBalancer.\n',
  operationId: 'getNodeBalancerConfig',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the config to access.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested NodeBalancer config.',
      content: { 'application/json': { schema: NodeBalancerConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_only'] }],
})

export const putNodebalancersNodeBalancerIdConfigsConfigIdRoute = createRoute({
  method: 'put',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}',
  tags: ['NodeBalancers'],
  summary: 'Config Update',
  description: 'Updates the configuration for a single port on a NodeBalancer.\n',
  operationId: 'updateNodeBalancerConfig',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the config to access.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: NodeBalancerConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Config updated successfully.',
      content: { 'application/json': { schema: NodeBalancerConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const deleteNodebalancersNodeBalancerIdConfigsConfigIdRoute = createRoute({
  method: 'delete',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}',
  tags: ['NodeBalancers'],
  summary: 'Config Delete',
  description:
    'Deletes the Config for a port of this NodeBalancer.\n\n**This cannot be undone.**\n\nOnce completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.\n',
  operationId: 'deleteNodeBalancerConfig',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the config to access.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'NodeBalancer Config deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const getNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute = createRoute({
  method: 'get',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes',
  tags: ['NodeBalancers'],
  summary: 'Nodes List',
  description:
    'Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.\n',
  operationId: 'getNodeBalancerConfigNodes',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer config to access.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A paginated list of NodeBalancer nodes.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(NodeBalancerNodeSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_only'] }],
})

export const postNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute = createRoute({
  method: 'post',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes',
  tags: ['NodeBalancers'],
  summary: 'Node Create',
  description:
    'Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.\n',
  operationId: 'createNodeBalancerNode',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer config to access.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the Node to create.',
      content: {
        'application/json': {
          schema: NodeBalancerNodeSchema.openapi({ required: ['label', 'address'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Node created successfully.',
      content: { 'application/json': { schema: NodeBalancerNodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}',
  tags: ['NodeBalancers'],
  summary: 'Node View',
  description:
    "Returns information about a single Node, a backend for this NodeBalancer's configured port.\n",
  operationId: 'getNodeBalancerNode',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Config to access',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      nodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Node to access',
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of NodeBalancer nodes.',
      content: { 'application/json': { schema: NodeBalancerNodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute = createRoute({
  method: 'put',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}',
  tags: ['NodeBalancers'],
  summary: 'Node Update',
  description:
    "Updates information about a Node, a backend for this NodeBalancer's configured port.\n",
  operationId: 'updateNodeBalancerNode',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Config to access',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      nodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Node to access',
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: NodeBalancerNodeSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Node updated successfully.',
      content: { 'application/json': { schema: NodeBalancerNodeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute = createRoute({
  method: 'delete',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}',
  tags: ['NodeBalancers'],
  summary: 'Node Delete',
  description:
    'Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.\n\nThis does not change or remove the Linode whose address was used in the creation of this Node.\n',
  operationId: 'deleteNodeBalancerConfigNode',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Config to access',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      nodeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Node to access',
            in: 'path',
            name: 'nodeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Node deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute = createRoute({
  method: 'post',
  path: '/nodebalancers/{nodeBalancerId}/configs/{configId}/rebuild',
  tags: ['NodeBalancers'],
  summary: 'Config Rebuild',
  description:
    "Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.\n\nUse this command to update a NodeBalancer's Config and Nodes with a single request.\n",
  operationId: 'rebuildNodeBalancerConfig',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      configId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Config to access.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information about the NodeBalancer Config to rebuild.\n',
      content: {
        'application/json': {
          schema: NodeBalancerConfigSchema.and(
            z
              .object({
                nodes: z
                  .array(
                    z
                      .object({
                        address: z.lazy(() => NodeBalancerNodeSchema).exactOptional(),
                        id: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: 'The unique ID of the Node to update.',
                            example: 54321,
                          }),
                        label: z.lazy(() => NodeBalancerNodeSchema).exactOptional(),
                        mode: z.lazy(() => NodeBalancerNodeSchema).exactOptional(),
                        weight: z.lazy(() => NodeBalancerNodeSchema).exactOptional(),
                      })
                      .openapi({
                        description: 'NodeBalancer Node request object including ID.',
                        required: [],
                      }),
                  )
                  .openapi({
                    description:
                      'The NodeBalancer Node(s) that serve this Config.\n\nSome considerations for Nodes when rebuilding a config:\n  * Current Nodes excluded from the request body will be deleted from the Config.\n  * Current Nodes (identified by their Node ID) will be updated.\n  * New Nodes (included without a Node ID) will be created.\n',
                  }),
              })
              .openapi({ required: ['nodes'] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'NodeBalancer created successfully.',
      content: { 'application/json': { schema: NodeBalancerConfigSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_write'] }],
})

export const getNodebalancersNodeBalancerIdStatsRoute = createRoute({
  method: 'get',
  path: '/nodebalancers/{nodeBalancerId}/stats',
  tags: ['NodeBalancers'],
  summary: 'NodeBalancer Statistics View',
  description: 'Returns detailed statistics about the requested NodeBalancer.\n',
  request: {
    params: z.object({
      nodeBalancerId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the NodeBalancer to access.',
            in: 'path',
            name: 'nodeBalancerId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested stats.',
      content: { 'application/json': { schema: NodeBalancerStatsSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['nodebalancers:read_only'] }],
})

export const getObjectStorageBucketsRoute = createRoute({
  method: 'get',
  path: '/object-storage/buckets',
  tags: ['Object Storage'],
  summary: 'Object Storage Buckets List',
  description:
    'Returns a paginated list of all Object Storage Buckets that you own.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) directly.\n',
  operationId: 'getObjectStorageBuckets',
  responses: {
    200: {
      description: 'A paginated list of buckets you own.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ObjectStorageBucketSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postObjectStorageBucketsRoute = createRoute({
  method: 'post',
  path: '/object-storage/buckets',
  tags: ['Object Storage'],
  summary: 'Object Storage Bucket Create',
  description:
    'Creates an Object Storage Bucket in the specified cluster.\n\nAccounts with negative balances cannot access this command.\n\nIf the bucket already exists and is owned by you, this endpoint returns a `200` response with that bucket as if it had just been created.\n\nThis endpoint is available for convenience. It is recommended that instead you use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) directly.\n',
  operationId: 'createObjectStorageBucket',
  request: {
    body: {
      description: 'Information about the bucket you want to create.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              acl: z
                .enum(['private', 'public-read', 'authenticated-read', 'public-read-write'])
                .default('private')
                .exactOptional()
                .openapi({
                  description:
                    'The Access Control Level of the bucket using a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n',
                  example: 'private',
                }),
              cluster: z
                .string()
                .openapi({
                  description:
                    'The ID of the Object Storage Cluster where this bucket should be created.\n',
                  example: 'us-east-1',
                }),
              cors_enabled: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.\n',
                  example: true,
                }),
              label: z
                .string()
                .regex(/^[a-z0-09][a-z0-9-]*[a-z0-9]?$/)
                .openapi({
                  description:
                    "The name for this bucket. Must be unique in the cluster you are creating the bucket in, or an error will be returned. Labels will be reserved only for the cluster that active buckets are created and stored in. If you want to reserve this bucket's label in another cluster, you must create a new bucket with the same label in the new cluster.\n",
                  example: 'example-bucket',
                }),
            })
            .openapi({ required: ['label', 'cluster'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The bucket created successfully.',
      content: { 'application/json': { schema: ObjectStorageBucketSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageBucketsClusterIdRoute = createRoute({
  method: 'get',
  path: '/object-storage/buckets/{clusterId}',
  tags: ['Object Storage'],
  summary: 'Object Storage Buckets in Cluster List',
  description:
    'Returns a list of Buckets in this cluster belonging to this Account.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.\n',
  operationId: 'getObjectStorageBucketinCluster',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of buckets you own in this cluster.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ObjectStorageBucketSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageBucketsClusterIdBucketRoute = createRoute({
  method: 'get',
  path: '/object-storage/buckets/{clusterId}/{bucket}',
  tags: ['Object Storage'],
  summary: 'Object Storage Bucket View',
  description:
    'Returns a single Object Storage Bucket.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.\n',
  operationId: 'getObjectStorageBucket',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested bucket.',
      content: { 'application/json': { schema: ObjectStorageBucketSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const deleteObjectStorageBucketsClusterIdBucketRoute = createRoute({
  method: 'delete',
  path: '/object-storage/buckets/{clusterId}/{bucket}',
  tags: ['Object Storage'],
  summary: 'Object Storage Bucket Remove',
  description:
    'Removes a single bucket.\n\nBucket objects must be removed prior to removing the bucket. While buckets containing objects _may_ be\ndeleted using the [s3cmd command-line tool](/docs/products/storage/object-storage/guides/s3cmd/#delete-a-bucket), such operations\ncan fail if the bucket contains too many objects. The recommended\nway to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#) that\nremove all objects, then delete the bucket.\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) directly.\n',
  operationId: 'deleteObjectStorageBucket',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bucket deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const putObjectStorageBucketsClusterIdBucketAccessRoute = createRoute({
  method: 'put',
  path: '/object-storage/buckets/{clusterId}/{bucket}/access',
  tags: ['Object Storage'],
  summary: 'Object Storage Bucket Access Update',
  description:
    'Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.\nOnly allows enabling/disabling CORS for all origins, and/or setting canned ACLs.\n\n\nFor more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.\n',
  operationId: 'updateObjectStorageBucketAccess',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "The changes to make to the bucket's access controls.",
      content: {
        'application/json': {
          schema: z
            .object({
              acl: z
                .enum([
                  'private',
                  'public-read',
                  'authenticated-read',
                  'public-read-write',
                  'custom',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n',
                  example: 'private',
                }),
              cors_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.\n',
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Access controls updated.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postObjectStorageBucketsClusterIdBucketAccessRoute = createRoute({
  method: 'post',
  path: '/object-storage/buckets/{clusterId}/{bucket}/access',
  tags: ['Object Storage'],
  summary: 'Object Storage Bucket Access Modify',
  description:
    'Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.\nOnly allows enabling/disabling CORS for all origins, and/or setting canned ACLs.\n\n\nFor more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.\n',
  operationId: 'modifyObjectStorageBucketAccess',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "The changes to make to the bucket's access controls.",
      content: {
        'application/json': {
          schema: z
            .object({
              acl: z
                .enum([
                  'private',
                  'public-read',
                  'authenticated-read',
                  'public-read-write',
                  'custom',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n',
                  example: 'private',
                }),
              cors_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.\n',
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Access controls updated.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageBucketsClusterIdBucketObjectAclRoute = createRoute({
  method: 'get',
  path: '/object-storage/buckets/{clusterId}/{bucket}/object-acl',
  tags: ['Object Storage'],
  summary: 'Object Storage Object ACL Config View',
  description:
    "View an Object's configured Access Control List (ACL) in this Object Storage bucket.\nACLs define who can access your buckets and objects and specify the level of access\ngranted to those users.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) directly.\n",
  operationId: 'viewObjectStorageBucketACL',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The `name` of the object for which to retrieve its Access Control List (ACL). Use the [Object Storage Bucket Contents List](/docs/api/object-storage/#object-storage-bucket-contents-list) endpoint to access all object names in a bucket.\n',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The Object's canned ACL and policy.",
      content: {
        'application/json': {
          schema: z
            .object({
              acl: z
                .enum([
                  'private',
                  'public-read',
                  'authenticated-read',
                  'public-read-write',
                  'custom',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n',
                  example: 'public-read',
                }),
              acl_xml: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The full XML of the object's ACL policy.\n",
                  example: '<AccessControlPolicy>...</AccessControlPolicy>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const putObjectStorageBucketsClusterIdBucketObjectAclRoute = createRoute({
  method: 'put',
  path: '/object-storage/buckets/{clusterId}/{bucket}/object-acl',
  tags: ['Object Storage'],
  summary: 'Object Storage Object ACL Config Update',
  description:
    "Update an Object's configured Access Control List (ACL) in this Object Storage bucket.\nACLs define who can access your buckets and objects and specify the level of access\ngranted to those users.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) directly.\n",
  operationId: 'updateObjectStorageBucketACL',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "The changes to make to this Object's access controls.",
      content: {
        'application/json': {
          schema: z
            .object({
              acl: z
                .enum([
                  'private',
                  'public-read',
                  'authenticated-read',
                  'public-read-write',
                  'custom',
                ])
                .openapi({
                  description:
                    'The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n',
                  example: 'public-read',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The `name` of the object for which to update its Access Control List (ACL). Use the [Object Storage Bucket Contents List](/docs/api/object-storage/#object-storage-bucket-contents-list) endpoint to access all object names in a bucket.\n',
                }),
            })
            .openapi({ required: ['acl', 'name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "The Object's canned ACL and policy.",
      content: {
        'application/json': {
          schema: z
            .object({
              acl: z
                .enum([
                  'private',
                  'public-read',
                  'authenticated-read',
                  'public-read-write',
                  'custom',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.\n',
                  example: 'public-read',
                }),
              acl_xml: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The full XML of the object's ACL policy.\n",
                  example: '<AccessControlPolicy>...</AccessControlPolicy>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageBucketsClusterIdBucketObjectListRoute = createRoute({
  method: 'get',
  path: '/object-storage/buckets/{clusterId}/{bucket}/object-list',
  tags: ['Object Storage'],
  summary: 'Object Storage Bucket Contents List',
  description:
    'Returns the contents of a bucket. The contents are paginated using a `marker`,\nwhich is the name of the last object on the previous page.  Objects may\nbe filtered by `prefix` and `delimiter` as well; see Query Parameters for more\ninformation.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) directly.\n',
  operationId: 'getObjectStorageBucketContent',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The "marker" for this request, which can be used to paginate through large buckets. Its value should be the value of the `next_marker` property returned with the last page. Listing bucket contents *does not* support arbitrary page access. See the `next_marker` property in the responses section for more details.\n',
            in: 'query',
            name: 'marker',
            required: false,
            schema: { type: 'string' },
          },
        }),
      delimiter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the `/` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with `prefix` to see object names past the first occurrence of the delimiter.\n',
            in: 'query',
            name: 'delimiter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      prefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with `delimiter` to allow transversal of bucket contents in a manner similar to a filesystem.\n',
            in: 'query',
            name: 'prefix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page_size: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "One page of the requested bucket's contents.",
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(ObjectStorageObjectSchema)
                .exactOptional()
                .openapi({ description: 'This page of objects in the bucket.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postObjectStorageBucketsClusterIdBucketObjectUrlRoute = createRoute({
  method: 'post',
  path: '/object-storage/buckets/{clusterId}/{bucket}/object-url',
  tags: ['Object Storage'],
  summary: 'Object Storage Object URL Create',
  description:
    "Creates a pre-signed URL to access a single Object in a bucket. This\ncan be used to share objects, and also to create/delete objects by using\nthe appropriate HTTP method in your request body's `method` parameter.\n\n\nThis endpoint is available for convenience. It is recommended that instead you\nuse the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/)\ndirectly.\n",
  operationId: 'createObjectStorageObjectURL',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information about the request to sign.',
      content: {
        'application/json': {
          schema: z
            .object({
              content_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The expected `Content-type` header of the request this signed URL will be valid for.  If provided, the `Content-type` header _must_ be sent with the request when this URL is used, and _must_ be the same as it was when the signed URL was created. Required for all methods *except* "GET" or "DELETE".\n',
                  example: null,
                }),
              expires_in: z
                .int()
                .min(360)
                .max(86400)
                .default(3600)
                .exactOptional()
                .openapi({
                  description:
                    'How long this signed URL will be valid for, in seconds.  If omitted, the URL will be valid for 3600 seconds (1 hour).\n',
                  example: null,
                }),
              method: z
                .string()
                .default('GET')
                .openapi({
                  description: 'The HTTP method allowed to be used with the pre-signed URL.',
                  example: 'GET',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the object that will be accessed with the pre-signed URL. This object need not exist, and no error will be returned if it doesn\'t. This behavior is useful for generating pre-signed URLs to upload new objects to by setting the `method` to "PUT".\n',
                  example: 'example',
                }),
            })
            .openapi({ required: ['name', 'method'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The URL with which to access your object.',
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The signed URL to perform the request at.',
                  example:
                    'https://us-east-1.linodeobjects.com/example-bucket/example?Signature=qr98TEucCntPgEG%2BsZQGDsJg93c%3D&Expires=1567609905&AWSAccessKeyId=G4YAF81XWY61DQM94SE0',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageBucketsClusterIdBucketSslRoute = createRoute({
  method: 'get',
  path: '/object-storage/buckets/{clusterId}/{bucket}/ssl',
  tags: ['Object Storage'],
  summary: 'Object Storage TLS/SSL Cert View',
  description:
    'Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was\nuploaded by an Account user.\n',
  operationId: 'getObjectStorageSSL',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.\n',
      content: { 'application/json': { schema: ObjectStorageSSLResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postObjectStorageBucketsClusterIdBucketSslRoute = createRoute({
  method: 'post',
  path: '/object-storage/buckets/{clusterId}/{bucket}/ssl',
  tags: ['Object Storage'],
  summary: 'Object Storage TLS/SSL Cert Upload',
  description:
    'Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.\nYour TLS/SSL certificate and private key are stored encrypted at rest.\n\n\nTo replace an expired certificate, [delete your current certificate](/docs/api/object-storage/#object-storage-tlsssl-cert-delete)\nand upload a new one.\n',
  operationId: 'createObjectStorageSSL',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Upload this TLS/SSL certificate with its corresponding secret key.',
      content: { 'application/json': { schema: ObjectStorageSSLSchema } },
    },
  },
  responses: {
    200: {
      description:
        'Returns whether this bucket has a corresponding TLS/SSL certificate that was uploaded by a user.',
      content: { 'application/json': { schema: ObjectStorageSSLResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const deleteObjectStorageBucketsClusterIdBucketSslRoute = createRoute({
  method: 'delete',
  path: '/object-storage/buckets/{clusterId}/{bucket}/ssl',
  tags: ['Object Storage'],
  summary: 'Object Storage TLS/SSL Cert Delete',
  description:
    "Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.\n",
  operationId: 'deleteObjectStorageSSL',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the cluster this bucket exists in.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bucket: z
        .string()
        .openapi({
          param: {
            description: 'The bucket name.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.",
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postObjectStorageCancelRoute = createRoute({
  method: 'post',
  path: '/object-storage/cancel',
  tags: ['Object Storage'],
  summary: 'Object Storage Cancel',
  description:
    'Cancel Object Storage on an Account.\n\n**Warning**: Removes all buckets and their contents from your Account. This data is irretrievable once removed.\n',
  operationId: 'cancelObjectStorage',
  responses: {
    200: {
      description: 'Object Storage cancellation successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageClustersRoute = createRoute({
  method: 'get',
  path: '/object-storage/clusters',
  tags: ['Object Storage'],
  summary: 'Clusters List',
  description:
    'Returns a paginated list of Object Storage Clusters that are available for\nuse.  Users can connect to the clusters with third party clients to create buckets\nand upload objects.\n',
  operationId: 'getObjectStorageClusters',
  responses: {
    200: {
      description: 'A paginated list of available clusters.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ObjectStorageClusterSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageClustersClusterIdRoute = createRoute({
  method: 'get',
  path: '/object-storage/clusters/{clusterId}',
  tags: ['Object Storage'],
  summary: 'Cluster View',
  description: 'Returns a single Object Storage Cluster.\n',
  operationId: 'getObjectStorageCluster',
  request: {
    params: z.object({
      clusterId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cluster.',
            in: 'path',
            name: 'clusterId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Cluster',
      content: { 'application/json': { schema: ObjectStorageClusterSchema } },
    },
    default: ErrorResponseResponse,
  },
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageKeysRoute = createRoute({
  method: 'get',
  path: '/object-storage/keys',
  tags: ['Object Storage'],
  summary: 'Object Storage Keys List',
  description:
    'Returns a paginated list of Object Storage Keys for authenticating to\nthe Object Storage S3 API.\n',
  operationId: 'getObjectStorageKeys',
  responses: {
    200: {
      description: 'A paginated list of Object Storage Keys',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ObjectStorageKeySchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postObjectStorageKeysRoute = createRoute({
  method: 'post',
  path: '/object-storage/keys',
  tags: ['Object Storage'],
  summary: 'Object Storage Key Create',
  description:
    'Provisions a new Object Storage Key on your account.\n\nAccounts with negative balances cannot access this command.\n\n* To create a Limited Access Key with specific permissions, send a `bucket_access` array.\n\n* To create a Limited Access Key without access to any buckets, send an empty `bucket_access` array.\n\n* To create an Access Key with unlimited access to all clusters and all buckets, omit the `bucket_access` array.\n',
  operationId: 'createObjectStorageKeys',
  request: {
    body: {
      description: 'The label of the key to create. This is used to identify the created key.\n',
      content: { 'application/json': { schema: ObjectStorageKeySchema } },
    },
  },
  responses: {
    200: {
      description: 'The new keypair.  **This is the only time** the secret key is returned.',
      content: { 'application/json': { schema: ObjectStorageKeySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/object-storage/keys/{keyId}',
  tags: ['Object Storage'],
  summary: 'Object Storage Key View',
  description: 'Returns a single Object Storage Key provisioned for your account.\n',
  operationId: 'getObjectStorageKey',
  request: {
    params: z.object({
      keyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The key to look up.',
            in: 'path',
            name: 'keyId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The keypair',
      content: { 'application/json': { schema: ObjectStorageKeySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const putObjectStorageKeysKeyIdRoute = createRoute({
  method: 'put',
  path: '/object-storage/keys/{keyId}',
  tags: ['Object Storage'],
  summary: 'Object Storage Key Update',
  description: 'Updates an Object Storage Key on your account.\n',
  operationId: 'updateObjectStorageKey',
  request: {
    params: z.object({
      keyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The key to look up.',
            in: 'path',
            name: 'keyId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              label: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The label for this keypair, for display purposes only.',
                  example: 'my-key',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update Successful',
      content: { 'application/json': { schema: ObjectStorageKeySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const deleteObjectStorageKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/object-storage/keys/{keyId}',
  tags: ['Object Storage'],
  summary: 'Object Storage Key Revoke',
  description:
    'Revokes an Object Storage Key.  This keypair will no longer be usable by third-party clients.\n',
  operationId: 'deleteObjectStorageKey',
  request: {
    params: z.object({
      keyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The key to look up.',
            in: 'path',
            name: 'keyId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deletion successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_write'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getObjectStorageTransferRoute = createRoute({
  method: 'get',
  path: '/object-storage/transfer',
  tags: ['Object Storage'],
  summary: 'Object Storage Transfer View',
  description:
    "The amount of outbound data transfer used by your account's Object Storage buckets.\nObject Storage adds 1 terabyte of outbound data transfer to your data transfer pool.\nSee the [Object Storage Overview](/docs/products/storage/object-storage/#pricing)\nguide for details on Object Storage transfer quotas.\n",
  operationId: 'getObjectStorageTransfer',
  responses: {
    200: {
      description:
        "Returns the amount of outbound data transfer used by your account's Object Storage buckets.\n",
      content: {
        'application/json': {
          schema: z
            .object({
              used: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The amount of outbound data transfer used by your account's Object Storage buckets, in bytes, for the current month's billing cycle.\n",
                  example: 12956600198,
                  readOnly: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['object_storage:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const getProfileRoute = createRoute({
  method: 'get',
  path: '/profile',
  tags: ['Profile'],
  summary: 'Profile View',
  description:
    'Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.\n\nThis endpoint is always accessible, no matter what OAuth scopes the acting token has.\n',
  operationId: 'getProfile',
  responses: {
    200: {
      description: 'Profile response.',
      content: { 'application/json': { schema: ProfileSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: [] }],
})

export const putProfileRoute = createRoute({
  method: 'put',
  path: '/profile',
  tags: ['Profile'],
  summary: 'Profile Update',
  description:
    'Update information in your Profile.  This endpoint requires the "account:read_write" OAuth Scope.\n',
  operationId: 'updateProfile',
  request: {
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: ProfileSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Profile updated successfully.',
      content: { 'application/json': { schema: ProfileSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileAppsRoute = createRoute({
  method: 'get',
  path: '/profile/apps',
  tags: ['Profile'],
  summary: 'Authorized Apps List',
  description:
    "This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.\n",
  operationId: 'getProfileApps',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: "A paginated list of apps you've authorized.\n",
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(AuthorizedAppSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getProfileAppsAppIdRoute = createRoute({
  method: 'get',
  path: '/profile/apps/{appId}',
  tags: ['Profile'],
  summary: 'Authorized App View',
  description: "Returns information about a single app you've authorized to access your Account.\n",
  operationId: 'getProfileApp',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The authorized app ID to manage.',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The app requested.',
      content: { 'application/json': { schema: AuthorizedAppSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const deleteProfileAppsAppIdRoute = createRoute({
  method: 'delete',
  path: '/profile/apps/{appId}',
  tags: ['Profile'],
  summary: 'App Access Revoke',
  description: 'Expires this app token. This token may no longer be used to access your Account.\n',
  operationId: 'deleteProfileApp',
  request: {
    params: z.object({
      appId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The authorized app ID to manage.',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "App's authorization has been revoked.",
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileDevicesRoute = createRoute({
  method: 'get',
  path: '/profile/devices',
  tags: ['Profile'],
  summary: 'Trusted Devices List',
  description:
    'Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.\n',
  operationId: 'getDevices',
  responses: {
    200: {
      description: 'Returns a paginated list of TrustedDevice objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TrustedDeviceSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getProfileDevicesDeviceIdRoute = createRoute({
  method: 'get',
  path: '/profile/devices/{deviceId}',
  tags: ['Profile'],
  summary: 'Trusted Device View',
  description: 'Returns a single active TrustedDevice for your User.\n',
  operationId: 'getTrustedDevice',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the TrustedDevice',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested TrustedDevice object',
      content: { 'application/json': { schema: TrustedDeviceSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const deleteProfileDevicesDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/profile/devices/{deviceId}',
  tags: ['Profile'],
  summary: 'Trusted Device Revoke',
  description:
    'Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.\n',
  operationId: 'revokeTrustedDevice',
  request: {
    params: z.object({
      deviceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the TrustedDevice',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Session revoked successfully',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileGrantsRoute = createRoute({
  method: 'get',
  path: '/profile/grants',
  tags: ['Profile'],
  summary: 'Grants List',
  description:
    'This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.\n\nFor example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.\n\nAny client may access this endpoint; no OAuth scopes are required.\n',
  operationId: 'getProfileGrants',
  responses: {
    200: {
      description: 'GrantsResponse',
      content: { 'application/json': { schema: GrantsResponseSchema } },
    },
    204: {
      description:
        'This is an unrestricted User, who has no grants. This User can access everything on the Account.\n',
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: [] }],
})

export const getProfileLoginsRoute = createRoute({
  method: 'get',
  path: '/profile/logins',
  tags: ['Profile'],
  summary: 'Logins List',
  description:
    'Returns a collection of successful account logins from this user during the last 90 days.\n',
  operationId: 'getProfileLogins',
  responses: {
    200: {
      description:
        'An array of successful account logins from this user during the last 90 days.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LoginSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const getProfileLoginsLoginIdRoute = createRoute({
  method: 'get',
  path: '/profile/logins/{loginId}',
  tags: ['Profile'],
  summary: 'Login View',
  description:
    'Returns a login object displaying information about a successful account login from this user.\n',
  operationId: 'getProfileLogin',
  request: {
    params: z.object({
      loginId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the login object to access.',
            in: 'path',
            name: 'loginId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested login object.',
      content: { 'application/json': { schema: LoginSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postProfilePhoneNumberRoute = createRoute({
  method: 'post',
  path: '/profile/phone-number',
  tags: ['Profile'],
  summary: 'Phone Number Verification Code Send',
  description:
    'Send a one-time verification code via SMS message to the submitted phone number. Providing your phone number helps ensure you can securely access your Account in case other ways to connect are lost. Your phone number is only used to verify your identity by sending an SMS message. Standard carrier messaging fees may apply.\n\n* By accessing this command you are opting in to receive SMS messages. You can opt out of SMS messages by using the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command after your phone number is verified.\n\n* Verification codes are valid for 10 minutes after they are sent.\n\n* Subsequent requests made prior to code expiration result in sending the same code.\n\nOnce a verification code is received, verify your phone number with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.\n',
  operationId: 'postProfilePhoneNumber',
  request: {
    body: {
      description: 'Enter a phone number and country code for verification.',
      content: {
        'application/json': {
          schema: z
            .object({
              iso_code: z
                .string()
                .openapi({
                  description:
                    'The two-letter ISO 3166 country code associated with the phone number.',
                  example: 'US',
                }),
              phone_number: z
                .string()
                .openapi({ description: 'A valid phone number.', example: '555-555-5555' }),
            })
            .openapi({ required: ['iso_code', 'phone_number'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Phone number verification code request successful.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteProfilePhoneNumberRoute = createRoute({
  method: 'delete',
  path: '/profile/phone-number',
  tags: ['Profile'],
  summary: 'Phone Number Delete',
  description:
    'Delete the verified phone number for the User making this request.\n\nUse this command to opt out of SMS messages for the requesting User after a phone number has been verified with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.\n',
  operationId: 'deleteProfilePhoneNumber',
  responses: {
    200: {
      description: 'Phone number deletion request successful.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postProfilePhoneNumberVerifyRoute = createRoute({
  method: 'post',
  path: '/profile/phone-number/verify',
  tags: ['Profile'],
  summary: 'Phone Number Verify',
  description:
    'Verify a phone number by confirming the one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.\n\n* Verification codes are valid for 10 minutes after they are sent.\n\n* Only the same User that made the verification code request can use that code with this command.\n\nOnce completed, the verified phone number is assigned to the User making the request. To change the verified phone number for a User, first use the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command, then begin the verification process again with the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.\n',
  operationId: 'postProfilePhoneNumberVerify',
  request: {
    body: {
      description: 'Enter a phone verification code for confirmation.',
      content: {
        'application/json': {
          schema: z
            .object({
              otp_code: z
                .string()
                .openapi({
                  description:
                    'The one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.',
                  example: 'US',
                }),
            })
            .openapi({ required: ['otp_code'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Phone number verification successful.\n',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfilePreferencesRoute = createRoute({
  method: 'get',
  path: '/profile/preferences',
  tags: ['Profile'],
  summary: 'User Preferences View',
  description:
    "View a list of user preferences tied to the OAuth client that generated\nthe token making the request. The user preferences endpoints allow\nconsumers of the API to store arbitrary JSON data, such as a user's font\nsize preference or preferred display name. User preferences are available\nfor each OAuth client registered to your account, and as such an account can\nhave multiple user preferences.\n",
  operationId: 'getUserPreferences',
  responses: {
    200: {
      description: 'Returns an object of user preferences.',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              description: 'A dictionary of user preferences.',
              example: { key1: 'value1', key2: 'value2' },
            }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putProfilePreferencesRoute = createRoute({
  method: 'put',
  path: '/profile/preferences',
  tags: ['Profile'],
  summary: 'User Preferences Update',
  description:
    "Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store.\n",
  operationId: 'updateUserPreferences',
  request: {
    body: {
      description: 'The user preferences to update or store.\n',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              description:
                'Arbitrary JSON of your choosing. Overwrites any existing preferences for this user.\n\nTotal length cannot exceed 65,535 characters.\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns an object of user preferences.',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              description: 'An object of user preferences.',
              example: { key1: 'value1', key2: 'value2' },
            }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileSecurityQuestionsRoute = createRoute({
  method: 'get',
  path: '/profile/security-questions',
  tags: ['Profile'],
  summary: 'Security Questions List',
  description:
    'Returns a collection of security questions and their responses, if any, for your User Profile.\n',
  operationId: 'getSecurityQuestions',
  responses: {
    200: {
      description: 'Returns a list of security questions.',
      content: { 'application/json': { schema: SecurityQuestionsGetSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
  servers: [{ url: 'https://api.linode.com/v4' }],
})

export const postProfileSecurityQuestionsRoute = createRoute({
  method: 'post',
  path: '/profile/security-questions',
  tags: ['Profile'],
  summary: 'Security Questions Answer',
  description:
    'Adds security question responses for your User.\n\nRequires exactly three unique questions.\n\nPrevious responses are overwritten if answered or reset to `null` if unanswered.\n\n**Note**: Security questions must be answered for your User prior to accessing the **Two Factor Secret Create** ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) command.\n',
  operationId: 'postSecurityQuestions',
  request: {
    body: {
      description: 'Answer Security Questions',
      content: { 'application/json': { schema: SecurityQuestionsPostSchema } },
    },
  },
  responses: {
    200: {
      description: 'Security Questions answered successfully.',
      content: { 'application/json': { schema: SecurityQuestionsPostSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileSshkeysRoute = createRoute({
  method: 'get',
  path: '/profile/sshkeys',
  tags: ['Profile'],
  summary: 'SSH Keys List',
  description: "Returns a collection of SSH Keys you've added to your Profile.\n",
  operationId: 'getSSHKeys',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of SSH Key objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(SSHKeySchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postProfileSshkeysRoute = createRoute({
  method: 'post',
  path: '/profile/sshkeys',
  tags: ['Profile'],
  summary: 'SSH Key Add',
  description: 'Adds an SSH Key to your Account profile.\n',
  operationId: 'addSSHKey',
  request: {
    body: { description: 'Add SSH Key', content: { 'application/json': { schema: SSHKeySchema } } },
  },
  responses: {
    200: {
      description: 'SSH Key associated successfully.',
      content: { 'application/json': { schema: SSHKeySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileSshkeysSshKeyIdRoute = createRoute({
  method: 'get',
  path: '/profile/sshkeys/{sshKeyId}',
  tags: ['Profile'],
  summary: 'SSH Key View',
  description: 'Returns a single SSH Key object identified by `id` that you have access to view.\n',
  operationId: 'getSSHKey',
  request: {
    params: z.object({
      sshKeyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the SSHKey',
            in: 'path',
            name: 'sshKeyId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An SSH Key object',
      content: { 'application/json': { schema: SSHKeySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putProfileSshkeysSshKeyIdRoute = createRoute({
  method: 'put',
  path: '/profile/sshkeys/{sshKeyId}',
  tags: ['Profile'],
  summary: 'SSH Key Update',
  description:
    'Updates an SSH Key that you have permission to `read_write`.\n\nOnly SSH key labels can be updated.\n',
  operationId: 'updateSSHKey',
  request: {
    params: z.object({
      sshKeyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the SSHKey',
            in: 'path',
            name: 'sshKeyId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.\n',
      content: {
        'application/json': {
          schema: z
            .object({ label: z.lazy(() => SSHKeySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SSH Key updated successfully.',
      content: { 'application/json': { schema: SSHKeySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteProfileSshkeysSshKeyIdRoute = createRoute({
  method: 'delete',
  path: '/profile/sshkeys/{sshKeyId}',
  tags: ['Profile'],
  summary: 'SSH Key Delete',
  description:
    "Deletes an SSH Key you have access to.\n\n**Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.\n",
  operationId: 'deleteSSHKey',
  request: {
    params: z.object({
      sshKeyId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the SSHKey',
            in: 'path',
            name: 'sshKeyId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SSH Key deleted successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postProfileTfaDisableRoute = createRoute({
  method: 'post',
  path: '/profile/tfa-disable',
  tags: ['Profile'],
  summary: 'Two Factor Authentication Disable',
  description:
    'Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.\n',
  operationId: 'tfaDisable',
  responses: {
    200: {
      description: 'TFA disabled.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postProfileTfaEnableRoute = createRoute({
  method: 'post',
  path: '/profile/tfa-enable',
  tags: ['Profile'],
  summary: 'Two Factor Secret Create',
  description:
    'Generates a Two Factor secret for your User. To enable TFA for your User, enter the secret obtained from this command with the **Two Factor Authentication Confirm/Enable** ([POST /profile/tfa-enable-confirm](/docs/api/profile/#two-factor-authentication-confirmenable)) command.\nOnce enabled, logins from untrusted computers are required to provide\na TFA code before they are successful.\n\n**Note**: Before you can enable TFA, security questions must be answered for your User by accessing the **Security Questions Answer** ([POST /profile/security-questions](/docs/api/profile/#security-questions-answer)) command.\n',
  operationId: 'tfaEnable',
  responses: {
    200: {
      description: 'Two Factor secret generated',
      content: {
        'application/json': {
          schema: z
            .object({
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'When this Two Factor secret expires.\n',
                  example: '2018-03-01T00:01:01',
                }),
              secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your Two Factor secret. This is used to generate time-based two factor codes required for logging in. Doing this will be required to confirm TFA an actually enable it.\n',
                  example: '5FXX6KLACOC33GTC',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postProfileTfaEnableConfirmRoute = createRoute({
  method: 'post',
  path: '/profile/tfa-enable-confirm',
  tags: ['Profile'],
  summary: 'Two Factor Authentication Confirm/Enable',
  description:
    'Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.\n',
  operationId: 'tfaConfirm',
  request: {
    body: {
      description: 'The Two Factor code you generated with your Two Factor secret.',
      content: {
        'application/json': {
          schema: z
            .object({
              tfa_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Two Factor code you generated with your Two Factor secret. These codes are time-based, so be sure it is current.\n',
                  example: '213456',
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
      description: 'TFA enabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              scratch: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A one-use code that can be used in place of your Two Factor code, in case you are unable to generate one.  Keep this in a safe place to avoid being locked out of your Account.\n',
                  example: 'sample two factor scratch',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileTokensRoute = createRoute({
  method: 'get',
  path: '/profile/tokens',
  tags: ['Profile'],
  summary: 'Personal Access Tokens List',
  description:
    'Returns a paginated list of Personal Access Tokens currently active for your User.\n',
  operationId: 'getPersonalAccessTokens',
  responses: {
    200: {
      description: 'A paginated list of active tokens.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PersonalAccessTokenSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postProfileTokensRoute = createRoute({
  method: 'post',
  path: '/profile/tokens',
  tags: ['Profile'],
  summary: 'Personal Access Token Create',
  description:
    'Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.\n',
  operationId: 'createPersonalAccessToken',
  request: {
    body: {
      description: 'Information about the requested token.',
      content: {
        'application/json': {
          schema: z
            .object({
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'When this token should be valid until.  If omitted, the new token will be valid until it is manually revoked.\n',
                  example: null,
                }),
              label: z.lazy(() => PersonalAccessTokenSchema).exactOptional(),
              scopes: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The scopes to create the token with.  These cannot be changed after creation, and may not exceed the scopes of the acting token. If omitted, the new token will have the same scopes as the acting token.\n',
                  example: '*',
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
      description: 'Token created successfully.',
      content: { 'application/json': { schema: PersonalAccessTokenSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getProfileTokensTokenIdRoute = createRoute({
  method: 'get',
  path: '/profile/tokens/{tokenId}',
  tags: ['Profile'],
  summary: 'Personal Access Token View',
  description: 'Returns a single Personal Access Token.\n',
  operationId: 'getPersonalAccessToken',
  request: {
    params: z.object({
      tokenId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the token to access.',
            in: 'path',
            name: 'tokenId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested token.',
      content: { 'application/json': { schema: PersonalAccessTokenSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const putProfileTokensTokenIdRoute = createRoute({
  method: 'put',
  path: '/profile/tokens/{tokenId}',
  tags: ['Profile'],
  summary: 'Personal Access Token Update',
  description: 'Updates a Personal Access Token.\n',
  operationId: 'updatePersonalAccessToken',
  request: {
    params: z.object({
      tokenId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the token to access.',
            in: 'path',
            name: 'tokenId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The fields to update.',
      content: { 'application/json': { schema: PersonalAccessTokenSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Token updated successfully.',
      content: { 'application/json': { schema: PersonalAccessTokenSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const deleteProfileTokensTokenIdRoute = createRoute({
  method: 'delete',
  path: '/profile/tokens/{tokenId}',
  tags: ['Profile'],
  summary: 'Personal Access Token Revoke',
  description:
    'Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.\n',
  operationId: 'deletePersonalAccessToken',
  request: {
    params: z.object({
      tokenId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the token to access.',
            in: 'path',
            name: 'tokenId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Token revoked successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['Regions'],
  summary: 'Regions List',
  description:
    'Lists the Regions available for Linode services. Not all services are guaranteed to be\navailable in all Regions.\n',
  operationId: 'getRegions',
  responses: {
    200: {
      description: 'Returns an array of Regions.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RegionSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
})

export const getRegionsRegionIdRoute = createRoute({
  method: 'get',
  path: '/regions/{regionId}',
  tags: ['Regions'],
  summary: 'Region View',
  description: 'Returns a single Region.\n',
  operationId: 'getRegion',
  request: {
    params: z.object({
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Region to look up.',
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single Region object.',
      content: { 'application/json': { schema: RegionSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const getSupportTicketsRoute = createRoute({
  method: 'get',
  path: '/support/tickets',
  tags: ['Support'],
  summary: 'Support Tickets List',
  description:
    'Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.\nThis collection includes all Support Tickets generated on your Account, with open tickets returned first.\n',
  operationId: 'getTickets',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns a paginated list of SupportTicket objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(SupportTicketSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postSupportTicketsRoute = createRoute({
  method: 'post',
  path: '/support/tickets',
  tags: ['Support'],
  summary: 'Support Ticket Open',
  description:
    'Open a Support Ticket.\nOnly one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.\n',
  operationId: 'createTicket',
  request: {
    body: {
      description: 'Open a Support Ticket.',
      content: { 'application/json': { schema: SupportTicketRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Support Ticket opened.',
      content: { 'application/json': { schema: SupportTicketSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getSupportTicketsTicketIdRoute = createRoute({
  method: 'get',
  path: '/support/tickets/{ticketId}',
  tags: ['Support'],
  summary: 'Support Ticket View',
  description: 'Returns a Support Ticket under your Account.\n',
  operationId: 'getTicket',
  request: {
    params: z.object({
      ticketId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Support Ticket.',
            in: 'path',
            name: 'ticketId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single SupportTicket object.',
      content: { 'application/json': { schema: SupportTicketSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postSupportTicketsTicketIdAttachmentsRoute = createRoute({
  method: 'post',
  path: '/support/tickets/{ticketId}/attachments',
  tags: ['Support'],
  summary: 'Support Ticket Attachment Create',
  description:
    'Adds a file attachment to an existing Support\nTicket on your Account. File attachments are used to assist our\nSupport team in resolving your Ticket. Examples of attachments\nare screen shots and text files that provide additional information.\n\nThe file attachment is submitted in the request as multipart/form-data.\n\n**Note**: Accepted file extensions include: .gif, .jpg, .jpeg, .pjpg,\n.pjpeg, .tif, .tiff, .png, .pdf, or .txt.\n',
  operationId: 'createTicketAttachment',
  request: {
    params: z.object({
      ticketId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Support Ticket.',
            in: 'path',
            name: 'ticketId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Add an attachment.',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .string()
                .openapi({
                  description:
                    'The local, absolute path to the file you want to attach to your Support Ticket.\n',
                  example: '/Users/LinodeGuy/pictures/screen_shot.jpg',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Attachment created.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const postSupportTicketsTicketIdCloseRoute = createRoute({
  method: 'post',
  path: '/support/tickets/{ticketId}/close',
  tags: ['Support'],
  summary: 'Support Ticket Close',
  description: 'Closes a Support Ticket you have access to modify.\n',
  operationId: 'closeTicket',
  request: {
    params: z.object({
      ticketId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Support Ticket.',
            in: 'path',
            name: 'ticketId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Support Ticket closed successfully.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getSupportTicketsTicketIdRepliesRoute = createRoute({
  method: 'get',
  path: '/support/tickets/{ticketId}/replies',
  tags: ['Support'],
  summary: 'Replies List',
  description: 'Returns a collection of replies to a Support Ticket on your Account.\n',
  operationId: 'getTicketReplies',
  request: {
    params: z.object({
      ticketId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Support Ticket.',
            in: 'path',
            name: 'ticketId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a paginated list of SupportTicketReply objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(SupportTicketReplySchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postSupportTicketsTicketIdRepliesRoute = createRoute({
  method: 'post',
  path: '/support/tickets/{ticketId}/replies',
  tags: ['Support'],
  summary: 'Reply Create',
  description: 'Adds a reply to an existing Support Ticket.\n',
  operationId: 'createTicketReply',
  request: {
    params: z.object({
      ticketId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the Support Ticket.',
            in: 'path',
            name: 'ticketId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Add a reply.',
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .min(1)
                .max(65535)
                .openapi({
                  description: 'The content of your reply.\n',
                  example:
                    'Thank you for your help. I was able to figure out what the problem was and I successfully reset my password. You guys are the best!\n',
                }),
            })
            .openapi({ required: ['description'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reply created.',
      content: { 'application/json': { schema: SupportTicketReplySchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Tags List',
  description:
    'Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.\n\nThis endpoint returns a paginated list of Tags on your account.\n',
  operationId: 'getTags',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of Tags',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TagSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const postTagsRoute = createRoute({
  method: 'post',
  path: '/tags',
  tags: ['Tags'],
  summary: 'New Tag Create',
  description:
    'Creates a new Tag and optionally tags requested objects with it immediately.\n\n**Important**: You must be an unrestricted User in order to add or modify Tags.\n',
  operationId: 'createTag',
  request: {
    body: {
      description: 'The tag to create, and optionally the objects to tag.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              domains: z
                .array(z.int())
                .exactOptional()
                .openapi({
                  description:
                    'A list of Domain IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Domains, or the Tag will not be created and an error will be returned.\n',
                  example: [564, 565],
                }),
              label: z
                .string()
                .min(3)
                .max(50)
                .openapi({ description: 'The new Tag.\n', example: 'example tag' }),
              linodes: z
                .array(z.int())
                .exactOptional()
                .openapi({
                  description:
                    'A list of Linode IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Linodes, or the Tag will not be created and an error will be returned.\n',
                  example: [123, 456],
                }),
              nodebalancers: z
                .array(z.int())
                .exactOptional()
                .openapi({
                  description:
                    'A list of NodeBalancer IDs to apply the new Tag to. You must be allowed to `read_write` all of the requested NodeBalancers, or the Tag will not be created and an error will be returned.\n',
                  example: [10301, 10501],
                }),
              volumes: z
                .array(z.int())
                .exactOptional()
                .openapi({
                  description:
                    'A list of Volume IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Volumes, or the Tag will not be created and an error will be returned.\n',
                  example: [9082, 10003],
                }),
            })
            .openapi({ required: ['label'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'The new Tag.', content: { 'application/json': { schema: TagSchema } } },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getTagsLabelRoute = createRoute({
  method: 'get',
  path: '/tags/{label}',
  tags: ['Tags'],
  summary: 'Tagged Objects List',
  description:
    "Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.\n",
  operationId: 'getTaggedObjects',
  request: {
    params: z.object({
      label: z
        .string()
        .openapi({
          param: { in: 'path', name: 'label', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description:
        'A paginated list of objects, organized by type, that have been tagged with the requested Tag.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      data: z
                        .xor([
                          LinodeSchema.openapi({ 'x-linode-ref-name': 'linode' }),
                          DomainSchema.openapi({ 'x-linode-ref-name': 'domain' }),
                          VolumeSchema.openapi({ 'x-linode-ref-name': 'volume' }),
                          NodeBalancerSchema.openapi({ 'x-linode-ref-name': 'nodeBalancer' }),
                        ])
                        .exactOptional()
                        .openapi({ discriminator: { propertyName: 'type' } }),
                      type: z.string().exactOptional().openapi({ example: 'linode' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_only'] }],
})

export const deleteTagsLabelRoute = createRoute({
  method: 'delete',
  path: '/tags/{label}',
  tags: ['Tags'],
  summary: 'Tag Delete',
  description:
    'Remove a Tag from all objects and delete it.\n\n**Important**: You must be an unrestricted User in order to add or modify Tags.\n',
  operationId: 'deleteTag',
  request: {
    params: z.object({
      label: z
        .string()
        .openapi({
          param: { in: 'path', name: 'label', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Tag deleted.', content: { 'application/json': { schema: z.object({}) } } },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['account:read_write'] }],
})

export const getVolumesRoute = createRoute({
  method: 'get',
  path: '/volumes',
  tags: ['Volumes'],
  summary: 'Volumes List',
  description: 'Returns a paginated list of Volumes you have permission to view.\n',
  operationId: 'getVolumes',
  request: { query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }) },
  responses: {
    200: {
      description: 'Returns an array of all Volumes on your Account.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VolumeSchema).exactOptional(),
              page: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              pages: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
              results: z.lazy(() => PaginationEnvelopeSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_only'] }],
})

export const postVolumesRoute = createRoute({
  method: 'post',
  path: '/volumes',
  tags: ['Volumes'],
  summary: 'Volume Create',
  description:
    'Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.\n',
  operationId: 'createVolume',
  request: {
    body: {
      description: 'The requested initial state of a new Volume.',
      content: {
        'application/json': {
          schema: z
            .object({
              config_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "When creating a Volume attached to a Linode, the ID of the Linode Config to include the new Volume in. This Config must belong to the Linode referenced by `linode_id`. Must _not_ be provided if `linode_id` is not sent. If a `linode_id` is sent without a `config_id`, the volume will be attached:\n\n  * to the Linode's only config if it only has one config.\n  * to the Linode's last used config, if possible.\n\nIf no config can be selected for attachment, an error will be returned.\n",
                  example: 23456,
                }),
              label: z
                .string()
                .regex(/^[a-zA-Z]((?!--|__)[a-zA-Z0-9-_])+$/)
                .min(1)
                .max(32)
                .openapi({
                  description:
                    "The Volume's label, which is also used in the `filesystem_path` of the resulting volume.\n",
                  example: 'my-volume',
                }),
              linode_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The Linode this volume should be attached to upon creation. If not given, the volume will be created without an attachment.\n',
                  example: 123,
                }),
              region: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Region to deploy this Volume in. This is only required if a linode_id is not given.\n',
                  example: null,
                }),
              size: z
                .int()
                .default(20)
                .exactOptional()
                .openapi({
                  description:
                    'The initial size of this volume, in GB.  Be aware that volumes may only be resized up after creation.\n',
                  example: 20,
                }),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of Tags applied to this object.  Tags are for organizational purposes only.\n',
                  example: ['example tag', 'another example'],
                  'x-linode-filterable': true,
                }),
            })
            .openapi({ required: ['label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Creating Volume.\n',
      content: { 'application/json': { schema: VolumeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write'] }],
})

export const getVolumesVolumeIdRoute = createRoute({
  method: 'get',
  path: '/volumes/{volumeId}',
  tags: ['Volumes'],
  summary: 'Volume View',
  description: 'Get information about a single Volume.\n',
  operationId: 'getVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to look up.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({ page: PageOffsetParamsSchema, page_size: PageSizeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a single Volume object.',
      content: { 'application/json': { schema: VolumeSchema } },
      links: {
        attach: AttachVolumeLink,
        clone: CloneVolumeLink,
        detach: DetachVolumeLink,
        resize: ResizeVolumeLink,
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_only'] }],
})

export const putVolumesVolumeIdRoute = createRoute({
  method: 'put',
  path: '/volumes/{volumeId}',
  tags: ['Volumes'],
  summary: 'Volume Update',
  description: 'Updates a Volume that you have permission to `read_write`.\n',
  operationId: 'updateVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to look up.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description:
        'If any updated field fails to pass validation, the Volume will not be updated.\n',
      content: {
        'application/json': {
          schema: VolumeSchema.and(
            z
              .object({
                linode_id: z.any().exactOptional().openapi({ readOnly: true }),
                size: z.any().exactOptional().openapi({ readOnly: true }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated Volume.',
      content: { 'application/json': { schema: VolumeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write'] }],
})

export const deleteVolumesVolumeIdRoute = createRoute({
  method: 'delete',
  path: '/volumes/{volumeId}',
  tags: ['Volumes'],
  summary: 'Volume Delete',
  description:
    'Deletes a Volume you have permission to `read_write`.\n\n* **Deleting a Volume is a destructive action and cannot be undone.**\n\n* Deleting stops billing for the Volume. You will be billed for time used within\nthe billing period the Volume was active.\n\n* Volumes that are migrating cannot be deleted until the migration is finished.\n',
  operationId: 'deleteVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to look up.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Volume deletion successful.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write'] }],
})

export const postVolumesVolumeIdAttachRoute = createRoute({
  method: 'post',
  path: '/volumes/{volumeId}/attach',
  tags: ['Volumes'],
  summary: 'Volume Attach',
  description:
    'Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.\n',
  operationId: 'attachVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to attach.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Volume to attach to a Linode.',
      content: {
        'application/json': {
          schema: z
            .object({
              config_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the Linode Config to include this Volume in. Must belong to the Linode referenced by `linode_id`. If not given, the last booted Config will be chosen.\n',
                  example: 23456,
                }),
              linode_id: z
                .int()
                .openapi({ description: 'The ID of the Linode to attach the volume to.' }),
              persist_across_boots: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defaults to true, if false is provided, the Volume will not be attached to the Linode Config. In this case more than 8 Volumes may be attached to a Linode if a Linode has 16GB of RAM or more. The number of volumes that can be attached is equal to the number of GB of RAM that the Linode has, up to a maximum of 64. `config_id` should not be passed if this is set to false and linode_id must be passed. The Linode must be running.\n',
                }),
            })
            .openapi({ required: ['linode_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Volume was attached to a Linode.',
      content: { 'application/json': { schema: VolumeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write', 'linodes:read_write'] }],
})

export const postVolumesVolumeIdCloneRoute = createRoute({
  method: 'post',
  path: '/volumes/{volumeId}/clone',
  tags: ['Volumes'],
  summary: 'Volume Clone',
  description:
    'Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.\n* Only Volumes with a `status` of "active" can be cloned.\n',
  operationId: 'cloneVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to clone.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The requested state your Volume will be cloned into.',
      content: {
        'application/json': {
          schema: z.object({ label: z.lazy(() => VolumeSchema) }).openapi({ required: ['label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Clone started.',
      content: { 'application/json': { schema: VolumeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write'] }],
})

export const postVolumesVolumeIdDetachRoute = createRoute({
  method: 'post',
  path: '/volumes/{volumeId}/detach',
  tags: ['Volumes'],
  summary: 'Volume Detach',
  description:
    'Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.\n',
  operationId: 'detachVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to detach.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Volume was detached from a Linode.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write', 'linodes:read_write'] }],
})

export const postVolumesVolumeIdResizeRoute = createRoute({
  method: 'post',
  path: '/volumes/{volumeId}/resize',
  tags: ['Volumes'],
  summary: 'Volume Resize',
  description:
    'Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.\n* Volumes can only be resized up.\n* Only Volumes with a `status` of "active" can be resized.\n',
  operationId: 'resizeVolume',
  request: {
    params: z.object({
      volumeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the Volume to resize.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The requested size to increase your Volume to.',
      content: {
        'application/json': {
          schema: z.object({ size: z.lazy(() => VolumeSchema) }).openapi({ required: ['size'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Volume resize started.',
      content: { 'application/json': { schema: VolumeSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{ personalAccessToken: [] }, { oauth: ['volumes:read_write'] }],
})
