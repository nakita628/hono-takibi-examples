import { createRoute, z } from '@hono/zod-openapi'

const AccessSchema = z
  .object({
    email: z.string().exactOptional(),
    id: z.int(),
    id_profile: z.int(),
    id_role: z.int().exactOptional(),
    id_user: z.int().exactOptional(),
  })
  .openapi({
    example: { email: '', id: 0, id_profile: 0, id_role: 0, id_user: 0 },
    required: ['id', 'id_profile'],
  })
  .openapi('Access')

const AccountSchema = z
  .object({
    balance: z.float32().openapi({ description: 'Balance of the account' }),
    bookmarked: z
      .int()
      .openapi({ description: 'This account has been bookmarked by user', default: false }),
    coming: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Amount of coming operations not yet debited' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the company holding the employee savings of the account' }),
    currency: z.object({}).exactOptional().openapi({ description: 'Account currency' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This account is not found on the website anymore' }),
    disabled: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'This account has been deleted by user and will not be synchronized anymore',
      }),
    display: z
      .boolean()
      .default(true)
      .openapi({ description: 'Display this account in accounts list' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the last update has failed, the error code' }),
    iban: z.string().exactOptional().openapi({ description: 'Account IBAN' }),
    id: z.int().openapi({ description: 'ID of the account' }),
    id_connection: z.int().exactOptional().openapi({ description: 'ID of the related connection' }),
    id_parent: z.int().exactOptional().openapi({ description: 'Id of the parent account' }),
    id_source: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related connection source' }),
    id_type: z.int().exactOptional().openapi({ description: 'ID of the account type' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the related user' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last successful update of the account' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the account' }),
    number: z.string().exactOptional().openapi({ description: 'Account number' }),
    opening_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Opening date of the account' }),
    original_name: z.string().openapi({ description: 'Original name of the account on the bank' }),
    ownership: z
      .string()
      .exactOptional()
      .openapi({ description: 'Relationship between the credentials owner and the account' }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Account usage (if not set by the user, displays the value of original_usage)',
      }),
    webid: z.string().exactOptional().openapi({ description: 'Account webid' }),
  })
  .openapi({
    example: {
      balance: 0,
      bookmarked: false,
      coming: 0,
      company_name: '',
      currency: '',
      deleted: '2021-08-23 10:35:44.408402',
      disabled: '2021-08-23 10:35:44.408472',
      display: true,
      error: '',
      iban: '',
      id: 0,
      id_connection: 0,
      id_parent: 0,
      id_source: 0,
      id_type: 0,
      id_user: 0,
      last_update: '2021-08-23 10:35:44.408324',
      name: '',
      number: '',
      opening_date: '2021-08-23',
      original_name: '',
      ownership: '',
      usage: '',
      webid: '',
    },
    required: ['id', 'original_name', 'balance', 'display', 'bookmarked'],
  })
  .openapi('Account')

const AccountLogSchema = z
  .object({
    balance: z.float32().openapi({ description: 'Balanced recorded' }),
    coming: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Coming debit recorded' }),
    error: z.string().exactOptional().openapi({ description: 'If fail, contains the error code' }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'If fail, error message received from bank or provider' }),
    id: z.int().openapi({ description: 'ID of the log' }),
    id_account: z.int().openapi({ description: 'ID of the related account' }),
    id_connection_log: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related connection log' }),
    id_connector: z.int().exactOptional().openapi({ description: 'provider id' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740ee1950>')
      .openapi({ description: 'Timestamp of log' }),
  })
  .openapi({
    example: {
      balance: 0,
      coming: 0,
      error: '',
      error_message: '',
      id: 0,
      id_account: 0,
      id_connection_log: 0,
      id_connector: 0,
      timestamp: '<function datetime.now at 0x7f5740ee1950>',
    },
    required: ['id', 'id_account', 'balance', 'timestamp'],
  })
  .openapi('AccountLog')

const AccountTypeSchema = z
  .object({
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Color of the account type (hexdecimal)' }),
    display_name: z.string().openapi({ description: 'Name to display in singular' }),
    display_name_p: z.string().openapi({ description: 'Name to display in plurial' }),
    id: z.int().openapi({ description: 'ID of the account type' }),
    id_parent: z.int().exactOptional().openapi({ description: 'Id of the parent type' }),
    is_invest: z.boolean().default(false).openapi({ description: 'Is it an investment account' }),
    name: z.string().openapi({ description: 'Name of the account type' }),
    product: z
      .string()
      .exactOptional()
      .openapi({ description: 'Product associated with the account' }),
    weboob_type_id: z.int().openapi({ description: 'Map to the weboob_type_id' }),
  })
  .openapi({
    example: {
      color: '',
      display_name: '',
      display_name_p: '',
      id: 0,
      id_parent: 0,
      is_invest: false,
      name: '',
      product: '',
      weboob_type_id: 0,
    },
    required: ['id', 'name', 'is_invest', 'weboob_type_id', 'display_name_p', 'display_name'],
  })
  .openapi('AccountType')

const AlertSchema = z
  .object({
    id: z.int(),
    id_account: z.int().exactOptional().openapi({ description: 'ID of the related account' }),
    id_investment: z.int().exactOptional().openapi({ description: 'ID of the related investment' }),
    id_transaction: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related transaction' }),
    id_user: z.int().openapi({ description: 'ID of the related user' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740d7b510>')
      .openapi({ description: 'Date of the alerts emission' }),
    type: z.string().openapi({ description: 'Type of the alert' }),
    value: z.float32().openapi({ description: 'Amount related to the alert' }),
  })
  .openapi({
    example: {
      id: 0,
      id_account: 0,
      id_investment: 0,
      id_transaction: 0,
      id_user: 0,
      timestamp: '<function datetime.now at 0x7f5740d7b510>',
      type: '',
      value: 0,
    },
    required: ['id', 'id_user', 'timestamp', 'type', 'value'],
  })
  .openapi('Alert')

const AuthProviderSchema = z
  .object({
    id: z.int(),
    name: z.string().openapi({ description: 'Name to differentiate the authentication type' }),
    type: z
      .string()
      .openapi({ description: 'Authentication type to use when pushing the webhook' }),
  })
  .openapi({ example: { id: 0, name: '', type: '' }, required: ['id', 'name', 'type'] })
  .openapi('AuthProvider')

const CategorySchema = z
  .object({
    color: z.string().openapi({ description: 'Color of the category' }),
    id: z.int().openapi({ description: 'ID of the category' }),
    id_logo: z.int().exactOptional().openapi({ description: 'ID of the logo' }),
    id_parent_category: z
      .int()
      .openapi({
        description:
          'ID of the parent category. If this is a parent category, it will be equal to its own ID',
      }),
    id_parent_category_in_menu: z
      .int()
      .openapi({ description: 'ID of the parent category to be displayed' }),
    id_user: z
      .int()
      .exactOptional()
      .openapi({ description: 'If not null, this category is specific to a user' }),
    income: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Is an income category. If null, this is both an income and an expense category',
      }),
    name: z.string().openapi({ description: 'Name of the category' }),
    name_displayed: z
      .string()
      .exactOptional()
      .openapi({ description: 'Displayed name, with HTML tags' }),
    refundable: z
      .boolean()
      .openapi({ description: 'This category accepts opposite sign of transactions' }),
  })
  .openapi({
    example: {
      color: '',
      id: 0,
      id_logo: 0,
      id_parent_category: 0,
      id_parent_category_in_menu: 0,
      id_user: 0,
      income: false,
      name: '',
      name_displayed: '',
      refundable: false,
    },
    required: [
      'id',
      'id_parent_category',
      'name',
      'color',
      'id_parent_category_in_menu',
      'refundable',
    ],
  })
  .openapi('Category')

const CertificateSchema = z
  .object({
    created: z.iso.datetime({ offset: true }),
    id: z.int(),
    id_private_key_file: z.int(),
    id_public_key_file: z.int(),
    type: z.string(),
  })
  .openapi({
    example: {
      created: '2021-08-23 10:35:44.254863',
      id: 0,
      id_private_key_file: 0,
      id_public_key_file: 0,
      type: '',
    },
    required: ['id', 'id_public_key_file', 'id_private_key_file', 'type', 'created'],
  })
  .openapi('Certificate')

const ClientSchema = z
  .object({
    config: z.string().exactOptional().openapi({ description: 'customizable config' }),
    id: z.int(),
    id_logo: z.int().exactOptional(),
    name: z.string().default(''),
    private_key: z.string().exactOptional(),
    pro: z
      .boolean()
      .default(false)
      .openapi({ description: 'Should the client display the company manager page.' }),
    public_key: z.string().exactOptional(),
    redirect_uris: z.string().default(''),
    secret: z.string(),
  })
  .openapi({
    example: {
      id: 0,
      id_logo: 0,
      name: '',
      private_key: '',
      pro: false,
      public_key: '',
      redirect_uris: '',
      secret: '',
    },
    required: ['id', 'name', 'secret', 'redirect_uris', 'pro'],
  })
  .openapi('Client')

const ConfigLogSchema = z
  .object({
    id: z.int(),
    key: z.string(),
    new_value: z.string().exactOptional(),
    origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The entity who made the config key modification' }),
    previous_value: z.string().exactOptional(),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740c0d9d8>')
      .openapi({ description: 'Timestamp of when the configuration key was changed' }),
    type: z.string().openapi({ description: 'Action done on the config: add, update or delete' }),
  })
  .openapi({
    example: {
      id: 0,
      new_value: '',
      origin: '',
      previous_value: '',
      timestamp: '<function datetime.now at 0x7f5740c0d9d8>',
      type: '',
    },
    required: ['id', 'key', 'type', 'timestamp'],
  })
  .openapi('ConfigLog')

const ConnectionSchema = z
  .object({
    active: z
      .boolean()
      .default(true)
      .openapi({ description: 'This connection is active and will be automatically synced' }),
    created: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740f1ad90>')
      .exactOptional()
      .openapi({ description: 'Creation date' }),
    id: z.int().openapi({ description: 'ID of connection' }),
    id_connector: z.int().openapi({ description: 'ID of the related connector' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the related user' }),
    last_push: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last successful push' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last successful update' }),
    next_try: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of next synchronization' }),
  })
  .openapi({
    example: {
      active: true,
      created: '<function datetime.now at 0x7f5740f1ad90>',
      id: 0,
      id_connector: 0,
      id_user: 0,
      last_push: '2021-08-23 10:35:44.203796',
      last_update: '2021-08-23 10:35:44.203510',
      next_try: '2021-08-23 10:35:44.203907',
    },
    required: ['id', 'id_connector', 'active'],
  })
  .openapi('Connection')

const ConnectionLogSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'If fail, contains the error code' }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'If fail, error message received from connector' }),
    error_uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'MD5 hash of the exception backtrace' }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fields for connection in additionalInformationNeeded state with background option',
      }),
    id: z.int().openapi({ description: 'ID of the log' }),
    id_connection: z.int().openapi({ description: 'ID of the connection' }),
    id_connector: z.int().exactOptional().openapi({ description: 'ID of the connector' }),
    id_source: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related connection source' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the user' }),
    login: z.string().exactOptional().openapi({ description: 'bcrypt hash of the login' }),
    nb_accounts: z
      .int()
      .exactOptional()
      .openapi({ description: 'In case of bank connection, number of accounts' }),
    next_try: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'If fail, the date represents the next try to connect' }),
    session_folder_id: z.string().exactOptional().openapi({ description: 'Session folder uid' }),
    start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the synchronization has started' }),
    statut: z.int().exactOptional().openapi({ description: 'Status of user (1 = charged user)' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740f766a8>')
      .openapi({ description: 'Timestamp of log, when the synchronization has finished' }),
    worker: z
      .string()
      .exactOptional()
      .openapi({ description: 'Worker used to do synchronization' }),
  })
  .openapi({
    example: {
      error: '',
      error_message: '',
      error_uid: '',
      id: 0,
      id_connection: 0,
      id_connector: 0,
      id_source: 0,
      id_user: 0,
      login: '',
      nb_accounts: 0,
      next_try: '2021-08-23 10:35:44.219976',
      session_folder_id: '',
      start: '2021-08-23 10:35:44.221393',
      statut: 0,
      timestamp: '<function datetime.now at 0x7f5740f766a8>',
      worker: '',
    },
    required: ['id', 'id_connection', 'timestamp'],
  })
  .openapi('ConnectionLog')

const ConnectionSourceSchema = z
  .object({
    access_expire: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiration date of the access' }),
    created: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740f46510>')
      .openapi({ description: 'Creation date of the connection source' }),
    disabled: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This source is not used to synchronize the connection' }),
    expire: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Expiration of the connection source. Used to purge the connection in case completion was not finished',
      }),
    id: z.int().openapi({ description: 'ID of connection' }),
    id_connection: z.int().openapi({ description: 'ID of the related connection' }),
    id_connector_source: z.int().openapi({ description: 'ID of the related connector source' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last successful update' }),
    name: z.string().openapi({ description: 'Name of the connection source' }),
    next_try: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of next synchronization' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the last update has failed, the state code' }),
  })
  .openapi({
    example: {
      access_expire: '2021-08-23 10:35:44.235793',
      created: '<function datetime.now at 0x7f5740f46510>',
      disabled: '2021-08-23 10:35:44.235550',
      expire: '2021-08-23 10:35:44.235883',
      id: 0,
      id_connection: 0,
      id_connector_source: 0,
      last_update: '2021-08-23 10:35:44.235451',
      name: '',
      next_try: '2021-08-23 10:35:44.236093',
      state: '',
    },
    required: ['id', 'id_connection', 'id_connector_source', 'name', 'created'],
  })
  .openapi('ConnectionSource')

const ConnectorSchema = z
  .object({
    auth_mechanism: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authentication mechanism to use' }),
    beta: z
      .boolean()
      .default(false)
      .openapi({ description: 'If true, this connector is perhaps unstable :)' }),
    charged: z
      .boolean()
      .default(true)
      .openapi({ description: 'Usage of this connector is charged' }),
    code: z.string().exactOptional().openapi({ description: 'Bank code' }),
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Main color of the bank or provider' }),
    hidden: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'This connector is hidden from your users' }),
    id: z.int().openapi({ description: 'ID of the connector' }),
    months_to_fetch: z
      .int()
      .exactOptional()
      .openapi({ description: 'How many months of history to fetch' }),
    name: z.string().openapi({ description: 'Name of the bank or provider' }),
    restricted: z
      .boolean()
      .default(false)
      .openapi({ description: 'If true, new connections cannot be added with this connector' }),
    siret: z.string().exactOptional().openapi({ description: 'SIRET code for Bill modules' }),
    slug: z.string().exactOptional(),
    sync_frequency: z
      .float32()
      .exactOptional()
      .openapi({ description: 'How many days to wait between syncs' }),
    uuid: z.string().openapi({ description: 'Unique connector identifier' }),
  })
  .openapi({
    example: {
      auth_mechanism: '',
      beta: false,
      charged: true,
      code: '',
      color: '',
      hidden: false,
      id: 0,
      months_to_fetch: 0,
      name: '',
      restricted: false,
      siret: '',
      slug: '',
      sync_frequency: 0,
      uuid: '',
    },
    required: ['id', 'name', 'charged', 'beta', 'uuid', 'restricted'],
  })
  .openapi('Connector')

const ConnectorCategorySchema = z
  .object({
    id: z.int().openapi({ description: 'ID of the bank category' }),
    name: z.string().default('false').openapi({ description: 'Name of the category' }),
  })
  .openapi({ example: { id: 0, name: false }, required: ['id', 'name'] })
  .openapi('ConnectorCategory')

const ConnectorLogoSchema = z
  .object({
    id: z.int(),
    id_connector: z.int().openapi({ description: 'ID of the connector' }),
    id_file: z.int().openapi({ description: 'Id of the Bank/Provider Logo' }),
    type: z.string().exactOptional().openapi({ description: "Logo's type" }),
  })
  .openapi({
    example: { id: 0, id_connector: 0, id_file: 0, type: '' },
    required: ['id', 'id_connector', 'id_file'],
  })
  .openapi('ConnectorLogo')

const ConnectorSourceSchema = z
  .object({
    auth_mechanism: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authentication mechanism to use' }),
    disabled: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This source is not used to synchronize the connection' }),
    disabled_capabilities: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma separated list of capabilities disabled on this connector source',
      }),
    fallback: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the source this fallback is for' }),
    id: z.int().openapi({ description: 'ID of the connector source' }),
    id_connector: z.int().openapi({ description: 'ID of the connector' }),
    id_weboob: z.string(),
    name: z.string().openapi({ description: 'Name of the source' }),
    priority: z
      .int()
      .exactOptional()
      .openapi({ description: 'The source priority order for the synchronization' }),
    stability: z.string().exactOptional().openapi({ description: 'last known stability' }),
  })
  .openapi({
    example: {
      auth_mechanism: '',
      disabled: '2021-08-23 10:35:44.205371',
      disabled_capabilities: '',
      fallback: '',
      id: 0,
      id_connector: 0,
      id_weboob: '',
      name: '',
      priority: 0,
    },
    required: ['id', 'id_connector', 'name', 'id_weboob'],
  })
  .openapi('ConnectorSource')

const ConnectorSourceFieldSchema = z
  .object({
    id_connector_source: z.int().openapi({ description: 'ID of the related connector source' }),
    label: z.string().openapi({ description: 'Label to display to user' }),
    name: z.string().openapi({ description: 'Name of the config' }),
    regex: z
      .string()
      .exactOptional()
      .openapi({ description: 'If set, the value must match this regexp' }),
    required: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If true, config has to be set to use this source' }),
    secret: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If true, value must be hidden on fronts' }),
    type: z.string().default('text').exactOptional().openapi({ description: 'Type of config' }),
  })
  .openapi({
    example: {
      id_connector_source: 0,
      label: '',
      name: '',
      regex: '',
      required: true,
      secret: true,
      type: 'text',
    },
    required: ['id_connector_source', 'name', 'label'],
  })
  .openapi('ConnectorSourceField')

const CurrencySchema = z
  .object({
    crypto: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'It is a crypto currency or not' }),
    datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time and date of Market Cap (for cryptos)' }),
    id: z.string().openapi({ description: 'ISO 4217 code used as ID' }),
    marketcap: z.float32().exactOptional().openapi({ description: 'Market Capitalization in EUR' }),
    precision: z
      .int()
      .default(2)
      .exactOptional()
      .openapi({ description: 'Numbers of significant digits' }),
    prefix: z
      .boolean()
      .default(false)
      .openapi({ description: 'Amount is prefixed or not by the currency' }),
    symbol: z.string().openapi({ description: 'Symbol representing the currency' }),
  })
  .openapi({
    example: {
      crypto: false,
      datetime: '2021-08-23 10:35:44.274832',
      id: '',
      marketcap: 0,
      precision: 2,
      prefix: false,
      symbol: '',
    },
    required: ['id', 'symbol', 'prefix'],
  })
  .openapi('Currency')

const DeviceSchema = z
  .object({
    debug: z.boolean().default(false),
    id: z.int(),
    id_token: z.int(),
    last_update: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740d2bd90>'),
    notification_token: z.string(),
    type: z.string(),
    version: z.string(),
  })
  .openapi({
    example: {
      debug: false,
      id: 0,
      id_token: 0,
      last_update: '<function datetime.now at 0x7f5740d2bd90>',
      notification_token: '',
      type: '',
      version: '',
    },
    required: ['id', 'id_token', 'type', 'notification_token', 'last_update', 'version', 'debug'],
  })
  .openapi('Device')

const DocumentSchema = z
  .object({
    currency: z.object({}).exactOptional().openapi({ description: 'Document currency' }),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    duedate: z.iso.date().exactOptional(),
    has_file_on_website: z
      .boolean()
      .default(true)
      .openapi({ description: 'Boolean to set if file is available on website' }),
    id: z.int(),
    id_category: z.int().exactOptional(),
    id_file: z.int().exactOptional(),
    id_subscription: z.int().exactOptional(),
    id_thumbnail: z.int().exactOptional(),
    id_type: z.int().exactOptional(),
    id_user: z.int(),
    income: z.boolean().default(true).exactOptional(),
    issuer: z.string().exactOptional(),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last successful update of the document' }),
    name: z.string().exactOptional(),
    number: z.string().exactOptional(),
    readonly: z.boolean().default(true),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740bab6a8>'),
    total_amount: z.float32().exactOptional(),
    untaxed_amount: z.float32().exactOptional(),
    vat: z.float32().exactOptional(),
    webid: z.string().exactOptional(),
  })
  .openapi({
    example: {
      currency: '',
      date: '2021-08-23 10:35:44.287914',
      duedate: '2021-08-23',
      has_file_on_website: true,
      id: 0,
      id_category: 0,
      id_file: 0,
      id_subscription: 0,
      id_thumbnail: 0,
      id_type: 0,
      id_user: 0,
      income: true,
      issuer: '',
      last_update: '2021-08-23 10:35:44.289188',
      name: '',
      number: '',
      readonly: true,
      timestamp: '<function datetime.now at 0x7f5740bab6a8>',
      total_amount: 0,
      untaxed_amount: 0,
      vat: 0,
      webid: '',
    },
    required: ['id', 'id_user', 'timestamp', 'readonly', 'has_file_on_website'],
  })
  .openapi('Document')

const DocumentTypeSchema = z
  .object({ attacheable: z.boolean().default(true), id: z.int(), name: z.string() })
  .openapi({
    example: { attacheable: true, id: 0, name: '' },
    required: ['id', 'name', 'attacheable'],
  })
  .openapi('DocumentType')

const FieldSchema = z
  .object({
    auth_mechanisms: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authentication mechanisms this field is used for' }),
    connector_sources: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sources this field is used for' }),
    ephemeral: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'This field will not be saved in database' }),
    id: z.int().openapi({ description: 'ID of the field' }),
    id_connector: z.int().openapi({ description: 'ID of the related connector' }),
    label: z.string().openapi({ description: 'Label to display to user' }),
    name: z.string().openapi({ description: 'Name of the field' }),
    regex: z
      .string()
      .exactOptional()
      .openapi({ description: 'If set, the value must match this regexp' }),
    required: z
      .boolean()
      .default(true)
      .openapi({ description: 'If true, field has to be set to synchronize the connection' }),
    type: z
      .string()
      .default('text')
      .exactOptional()
      .openapi({ description: 'Type of field (text, password, list, hidden)' }),
    value: z.string().exactOptional().openapi({ description: 'Default value of the field' }),
  })
  .openapi({
    example: {
      auth_mechanisms: '',
      connector_sources: '',
      ephemeral: false,
      id: 0,
      id_connector: 0,
      label: '',
      name: '',
      regex: '',
      required: true,
      type: 'text',
      value: '',
    },
    required: ['id_connector', 'id', 'name', 'label', 'required'],
  })
  .openapi('Field')

const FileSchema = z
  .object({ content_type: z.string(), file_size: z.int(), filename: z.string(), id: z.int() })
  .openapi({
    example: { content_type: '', file_size: 0, filename: '', id: 0 },
    required: ['id', 'content_type', 'filename', 'file_size'],
  })
  .openapi('File')

const GroupSchema = z
  .object({
    color: z.string().exactOptional(),
    conf: z.string().exactOptional(),
    email: z.string().exactOptional(),
    id: z.int(),
    id_logo: z.int().exactOptional(),
    id_parent_group: z.int().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({
    example: {
      color: '',
      conf: '',
      email: '',
      id: 0,
      id_logo: 0,
      id_parent_group: 0,
      name: '',
      url: '',
    },
    required: ['id'],
  })
  .openapi('Group')

const HashTableSchema = z
  .object({
    display: z.boolean().default(true),
    income: z.boolean(),
    nature: z.string(),
    wording: z.string(),
  })
  .openapi({
    example: { display: true, income: false, nature: '', wording: '' },
    required: ['wording', 'income', 'display', 'nature'],
  })
  .openapi('HashTable')

const IdentityInfoSchema = z
  .object({
    external_ref: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label associated with the beneficiary account' }),
    id: z.int(),
    id_user: z.int().exactOptional().openapi({ description: 'ID of a related user' }),
    identification: z.string().exactOptional().openapi({ description: 'Identification number' }),
    issuer: z.string().exactOptional().openapi({ description: 'issuer of the identification' }),
    kind: z.string().exactOptional().openapi({ description: 'Kind of the entity' }),
    scheme_name: z.string().exactOptional().openapi({ description: 'Identification number type' }),
  })
  .openapi({
    example: {
      external_ref: '',
      id: 0,
      id_user: 0,
      identification: '',
      issuer: '',
      kind: '',
      scheme_name: '',
    },
    required: ['id'],
  })
  .openapi('IdentityInfo')

const InvestmentSchema = z
  .object({
    code: z.string().openapi({ description: 'Investment code' }),
    code_type: z.string().exactOptional().openapi({ description: 'Code type (ISIN of AMF)' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'If set, this investment has been removed from the website' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the investment' }),
    diff: z.float32().default(0).exactOptional().openapi({ description: 'Capital gain' }),
    diff_percent: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Capital gain in percent (between 0 and 1)' }),
    id: z.int().openapi({ description: 'ID of the investment' }),
    id_account: z.int().openapi({ description: 'ID of the related account' }),
    id_security: z.int().exactOptional().openapi({ description: 'ID of the related security' }),
    label: z.string().openapi({ description: 'Label of the investment' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last update of the investment' }),
    original_currency: z.object({}).exactOptional().openapi({ description: 'Original currency' }),
    original_diff: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Capital gain in the original currency' }),
    original_unitprice: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Current unit value in the original currency' }),
    original_unitvalue: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Average buy price in the original currency' }),
    original_valuation: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Valuation in original currency' }),
    portfolio_share: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Percent of the portfolio' }),
    prev_diff: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Capital gain from previous value' }),
    prev_vdate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Value date of the previous value (prev_diff)' }),
    quantity: z.float32().default(0).exactOptional().openapi({ description: 'Quantity' }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source of the ISIN code (website, notFound)' }),
    unitprice: z.float32().default(0).exactOptional().openapi({ description: 'Average buy price' }),
    unitvalue: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Current unit value' }),
    valuation: z.float32().default(0).exactOptional().openapi({ description: 'Current valuation' }),
    vdate: z.iso.date().exactOptional().openapi({ description: 'Value date' }),
  })
  .openapi({
    example: {
      code: '',
      code_type: '',
      deleted: '2021-08-23 10:35:44.377160',
      description: '',
      diff: 0,
      diff_percent: 0,
      id: 0,
      id_account: 0,
      id_security: 0,
      label: '',
      last_update: '2021-08-23 10:35:44.377092',
      original_currency: '',
      original_diff: 0,
      original_unitprice: 0,
      original_unitvalue: 0,
      original_valuation: 0,
      portfolio_share: 0,
      prev_diff: 0,
      prev_vdate: '2021-08-23',
      quantity: 0,
      source: '',
      unitprice: 0,
      unitvalue: 0,
      valuation: 0,
      vdate: '2021-08-23',
    },
    required: ['id', 'id_account', 'label', 'code'],
  })
  .openapi('Investment')

const InvestmentValueSchema = z
  .object({
    id: z.int().openapi({ description: 'ID of the value' }),
    id_investment: z.int().openapi({ description: 'ID of the related investment' }),
    original_currency: z.object({}).exactOptional().openapi({ description: 'Original currency' }),
    original_unitvalue: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Value on this date, in the original currency' }),
    unitvalue: z.float32().openapi({ description: 'Value on this date' }),
    vdate: z.iso.date().openapi({ description: 'Date of this value' }),
  })
  .openapi({
    example: {
      id: 0,
      id_investment: 0,
      original_currency: '',
      original_unitvalue: 0,
      unitvalue: 0,
      vdate: '2021-08-23',
    },
    required: ['id', 'id_investment', 'vdate', 'unitvalue'],
  })
  .openapi('InvestmentValue')

const KeywordSchema = z
  .object({
    id: z.int(),
    id_category: z.int(),
    income: z.boolean(),
    keyword: z.string(),
    priority: z.int(),
  })
  .openapi({
    example: { id: 0, id_category: 0, income: false, keyword: '', priority: 0 },
    required: ['id', 'keyword', 'id_category', 'priority', 'income'],
  })
  .openapi('Keyword')

const LockedUserSchema = z
  .object({
    id_user: z.int(),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740d00c80>'),
    worker: z.string().exactOptional(),
  })
  .openapi({
    example: { id_user: 0, timestamp: '<function datetime.now at 0x7f5740d00c80>', worker: '' },
    required: ['id_user', 'timestamp'],
  })
  .openapi('LockedUser')

const MarketOrderSchema = z
  .object({
    amount: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Total amount of the market order' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISIN code of the investment associated with the market order' }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Insertion date of the market order in bi_market_order' }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Creation date of the market order' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'If set, this market order has been removed from the website' }),
    execution_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Execution date of the market order' }),
    id: z.int().openapi({ description: 'ID of the market order' }),
    id_account: z.int().openapi({ description: 'ID of the related account' }),
    label: z
      .string()
      .openapi({ description: 'Label of the investment associated with the market order' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last update of the market order' }),
    ordervalue: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Limit value or trigger value, only relevant if the order type is LIMIT or TRIGGER',
      }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({
        description: "Payment method for the market order (usually 'SRD' or 'Comptant')",
      }),
    quantity: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Quantity of stock shares in the market order' }),
    state: z.string().exactOptional().openapi({ description: 'Current state of the market order' }),
    stock_market: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock market on which the order was executed' }),
    unitprice: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Value of the stock at the moment of the market order' }),
    unitvalue: z
      .float32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Current value of the stock associated with the market order' }),
    validity_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Validity date of the market order' }),
    webid: z.string().exactOptional().openapi({ description: 'Weboob ID of the market order' }),
  })
  .openapi({
    example: {
      amount: 0,
      code: '',
      created: '2021-08-23 10:35:44.372113',
      date: '2021-08-23',
      deleted: '2021-08-23 10:35:44.372183',
      execution_date: '2021-08-23',
      id: 0,
      id_account: 0,
      label: '',
      last_update: '2021-08-23 10:35:44.372022',
      ordervalue: 0,
      payment_method: '',
      quantity: 0,
      state: '',
      stock_market: '',
      unitprice: 0,
      unitvalue: 0,
      validity_date: '2021-08-23',
      webid: '',
    },
    required: ['id', 'id_account', 'label', 'created'],
  })
  .openapi('MarketOrder')

const OidcWhitelistSchema = z
  .object({
    id: z.int(),
    redirect_uri: z.string().openapi({ description: 'authorized redirect uri' }),
  })
  .openapi({ example: { id: 0, redirect_uri: '' }, required: ['id', 'redirect_uri'] })
  .openapi('OidcWhitelist')

const PaymentSchema = z
  .object({
    client_redirect_uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to redirecting to client' }),
    error_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'In case of error, the error code' }),
    error_description: z.string().exactOptional().openapi({ description: 'Error message' }),
    id: z.int(),
    register_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of payment registration' }),
    state: z.string().exactOptional().openapi({ description: 'State of the payment' }),
    validate_uri: z.string().exactOptional().openapi({ description: 'URL to validate payment' }),
  })
  .openapi({
    example: {
      client_redirect_uri: '',
      error_code: '',
      error_description: '',
      id: 0,
      register_date: '2021-08-23 10:35:44.188272',
      state: '',
      validate_uri: '',
    },
    required: ['id'],
  })
  .openapi('Payment')

const PaymentAccountSchema = z
  .object({
    disabled_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date at which the entry was disabled' }),
    id: z.int(),
    id_account: z.int().exactOptional().openapi({ description: 'ID of a related account' }),
    identification: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account identification number' }),
    issuer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Issuer or bic associated with the account' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label associated with the beneficiary account' }),
    scheme_name: z.string().exactOptional().openapi({ description: 'Account number type' }),
  })
  .openapi({
    example: {
      disabled_date: '2021-08-23 10:35:44.173688',
      id: 0,
      id_account: 0,
      identification: '',
      issuer: '',
      label: '',
      scheme_name: '',
    },
    required: ['id'],
  })
  .openapi('PaymentAccount')

const PaymentLogSchema = z
  .object({
    error_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'In case of error, the error code' }),
    error_description: z.string().exactOptional().openapi({ description: 'Error message' }),
    id: z.int(),
    id_file: z.int().exactOptional().openapi({ description: 'ID of the related payment file' }),
    id_payment: z.int().exactOptional().openapi({ description: 'ID of the related payment' }),
    state: z.string().exactOptional().openapi({ description: 'State of the payment' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740047f28>')
      .openapi({ description: 'Timestamp of the log' }),
  })
  .openapi({
    example: {
      error_code: '',
      error_description: '',
      id: 0,
      id_file: 0,
      id_payment: 0,
      state: '',
      timestamp: '<function datetime.now at 0x7f5740047f28>',
    },
    required: ['id', 'timestamp'],
  })
  .openapi('PaymentLog')

const PocketSchema = z
  .object({
    availability_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Availability date of the pocket' }),
    condition: z
      .string()
      .default('inconnu')
      .openapi({ description: 'Withdrawal condition of the pocket' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'If set, this pocket has been removed from the website' }),
    id: z.int().openapi({ description: 'ID of the pocket' }),
    id_account: z.int().openapi({ description: 'ID of the related account' }),
    id_investment: z.int().openapi({ description: 'ID of the related investment' }),
    label: z.string().exactOptional().openapi({ description: 'Label of the pocket' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last update of the pocket' }),
    quantity: z.float32().default(0).exactOptional().openapi({ description: 'Quantity of stocks' }),
    value: z.float32().openapi({ description: 'Value of the pocket' }),
  })
  .openapi({
    example: {
      availability_date: '2021-08-23',
      condition: 'inconnu',
      deleted: '2021-08-23 10:35:44.318086',
      id: 0,
      id_account: 0,
      id_investment: 0,
      label: '',
      last_update: '2021-08-23 10:35:44.318015',
      quantity: 0,
      value: 0,
    },
    required: ['id', 'id_account', 'id_investment', 'value', 'condition'],
  })
  .openapi('Pocket')

const ProfileSchema = z
  .object({
    admin: z.boolean().default(false),
    conf: z.string().exactOptional(),
    email: z.string(),
    id: z.int(),
    id_user: z.int(),
    lang: z.string().exactOptional(),
    role: z.enum(['admin', 'ser']).default('admin'),
    statut: z.int().default(0),
  })
  .openapi({
    example: { admin: false, conf: '', id: 0, id_user: 0, lang: '', role: 'admin', statut: 0 },
    required: ['id', 'id_user', 'role', 'email', 'statut', 'admin'],
  })
  .openapi('Profile')

const Psd2RegistrationSchema = z
  .object({
    id: z.int(),
    id_connector_source: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the connector source' }),
    status: z.string().openapi({ description: 'Current status: created/updated/error' }),
  })
  .openapi({ example: { id: 0, id_connector_source: 0, status: '' }, required: ['id', 'status'] })
  .openapi('Psd2Registration')

const Psd2RegistrationLogSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When this row was created' }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'If fail, error message received from connector' }),
    id: z.int(),
    id_psd2registration: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the psd2 registration' }),
    type: z.string().openapi({ description: 'Action done: create, update, delete' }),
  })
  .openapi({
    description:
      'Keep traces of PSD2 registration calls.\n    The table is used by the plugin `psd2registration` to know:\n     - whether it must call `update` or `create` routes on the PSD2 APIs when the config is updated\n     - the list of PSD2 API to create (needed when a new connector is added)\n     - the list of broken connectors',
    example: {
      created_at: '2021-08-23 10:35:44.620718',
      error_message: '',
      id: 0,
      id_psd2registration: 0,
      type: '',
    },
    required: ['id', 'created_at', 'type'],
  })
  .openapi('Psd2RegistrationLog')

const RecipientSchema = z
  .object({
    add_verified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Was the recipient adding authorized' }),
    bank_name: z.string().exactOptional().openapi({ description: 'Bank of the recipient' }),
    category: z.string().openapi({ description: 'Category in which the recipient is' }),
    currency: z.object({}).exactOptional().openapi({ description: 'Currency of the object' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "The recipient isn't found anymore on the bank" }),
    enabled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'It will be possible to do transfers to this recipient at this date',
      }),
    error: z.string().exactOptional().openapi({ description: 'Error message' }),
    expire: z.iso.datetime({ offset: true }).exactOptional(),
    fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fields for recipient with additionalInformationNeeded state' }),
    iban: z.string().exactOptional().openapi({ description: 'IBAN of the recipient' }),
    id: z.int().openapi({ description: 'ID of the recipient' }),
    id_account: z.int().openapi({ description: 'ID of the related account' }),
    id_target_account: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the target account, in case of internal recipient' }),
    label: z.string().openapi({ description: 'Label of the recipient' }),
    last_update: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Last time we have fetched this recipient' }),
    state: z.string().exactOptional().openapi({ description: 'State of recipient' }),
    time_scraped: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "First time we've seen this recipient" }),
    webid: z.string().exactOptional().openapi({ description: 'Webid of the recipient' }),
  })
  .openapi({
    example: {
      add_verified: false,
      bank_name: '',
      category: '',
      currency: '',
      deleted: '2021-08-23 10:35:44.378670',
      enabled_at: '2021-08-23 10:35:44.378801',
      error: '',
      expire: '2021-08-23 10:35:44.378737',
      iban: '',
      id: 0,
      id_account: 0,
      id_target_account: 0,
      label: '',
      last_update: '2021-08-23 10:35:44.378535',
      state: '',
      time_scraped: '2021-08-23 10:35:44.378602',
      webid: '',
    },
    required: ['id', 'id_account', 'label', 'category', 'last_update'],
  })
  .openapi('Recipient')

const RecipientLogSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message during recipient addition, if any' }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fields for recipient in additionalInformationNeeded state with background option',
      }),
    id: z.int().openapi({ description: 'ID of the transfer log entry' }),
    id_file: z.int().exactOptional().openapi({ description: 'ID of the related file' }),
    id_recipient: z.int().exactOptional().openapi({ description: 'ID of the related recipient' }),
    request_data: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Data stored related to user who has requested the recipient addition',
      }),
    step: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Step of recipient addition, (add_recipient, asking_field, recipient addition validated, creation, storing_files)',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740ef61e0>')
      .openapi({ description: 'Timestamp of the log' }),
  })
  .openapi({
    example: {
      error: '',
      id: 0,
      id_file: 0,
      id_recipient: 0,
      request_data: '',
      step: '',
      timestamp: '<function datetime.now at 0x7f5740ef61e0>',
    },
    required: ['id', 'timestamp'],
  })
  .openapi('RecipientLog')

const SecuritySchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'ISIN code of the security' }),
    id: z.int().openapi({ description: 'ID of the security' }),
    id_type: z.int().exactOptional().openapi({ description: 'ID of the security type' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last update of the security' }),
    name: z.string().openapi({ description: 'Name of the security' }),
  })
  .openapi({
    example: { code: '', id: 0, id_type: 0, last_update: '2021-08-23 10:35:44.162155', name: '' },
    required: ['id', 'name'],
  })
  .openapi('Security')

const SubscriptionSchema = z
  .object({
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This subscription is not found on the website anymore' }),
    disabled: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'This subscription has been deleted by user and will not be synchronized anymore',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the last update has failed, the error code' }),
    id: z.int().openapi({ description: 'ID of subscription' }),
    id_connection: z.int().exactOptional().openapi({ description: 'ID of related connection' }),
    id_source: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related connection source' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of related user' }),
    label: z.string().openapi({ description: 'Label of the subscription' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last successful update of the subscription' }),
    number: z.string().openapi({ description: "Subscription's number" }),
    renewdate: z.iso.date().exactOptional().openapi({ description: 'Next renew date, if any' }),
    subscriber: z.string().exactOptional().openapi({ description: 'Name of the subscriber' }),
    validity: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The subscription is valid until this date, if any' }),
  })
  .openapi({
    example: {
      deleted: '2021-08-23 10:35:44.400732',
      disabled: '2021-08-23 10:35:44.400809',
      error: '',
      id: 0,
      id_connection: 0,
      id_source: 0,
      id_user: 0,
      label: '',
      last_update: '2021-08-23 10:35:44.400663',
      number: '',
      renewdate: '2021-08-23',
      subscriber: '',
      validity: '2021-08-23',
    },
    required: ['id', 'number', 'label'],
  })
  .openapi('Subscription')

const SubscriptionLogSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'If fail, contains the error code' }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'If fail, error message received from provider' }),
    id: z.int().openapi({ description: 'ID of the log' }),
    id_connection_log: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related connection log' }),
    id_source: z
      .int()
      .exactOptional()
      .openapi({ description: 'ID of the related connection source' }),
    id_subscription: z.int().openapi({ description: 'ID of the related subscription' }),
    nb_docs: z.int().exactOptional().openapi({ description: 'Number of docs on the subscription' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740bab400>')
      .openapi({ description: 'Timestamp of log' }),
  })
  .openapi({
    example: {
      error: '',
      error_message: '',
      id: 0,
      id_connection_log: 0,
      id_source: 0,
      id_subscription: 0,
      nb_docs: 0,
      timestamp: '<function datetime.now at 0x7f5740bab400>',
    },
    required: ['id', 'id_subscription', 'timestamp'],
  })
  .openapi('SubscriptionLog')

const TermsOfServiceSchema = z
  .object({
    created: z.iso.datetime({ offset: true }),
    deleted: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.int(),
    version: z.string(),
  })
  .openapi({
    example: {
      created: '2021-08-23 10:35:44.452486',
      deleted: '2021-08-23 10:35:44.452561',
      id: 0,
      version: '',
    },
    required: ['id', 'version', 'created'],
  })
  .openapi('TermsOfService')

const TransactionSchema = z
  .object({
    active: z
      .boolean()
      .default(true)
      .openapi({ description: 'If false, PFM services will ignore this transaction' }),
    application_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Date considered by PFM services. It is used to change the month of a transaction, for example.',
      }),
    bdate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date used by the bank for the transaction' }),
    bdatetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Datetime used by the bank' }),
    card: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card number associated to the transaction' }),
    coming: z
      .boolean()
      .openapi({ description: "If true, this transaction hasn't been yet debited" }),
    comment: z.string().exactOptional().openapi({ description: 'User comment' }),
    commission: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Commission taken on the transaction' }),
    commission_currency: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Commission currency' }),
    counterparty: z.string().exactOptional().openapi({ description: 'Counterparty' }),
    country: z.string().exactOptional().openapi({ description: 'Original country' }),
    date: z.iso.date().openapi({ description: 'Debit date' }),
    date_scraped: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date when the transaction has been seen' }),
    datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Datetime of the debit of the transaction' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'If set, this transaction has been removed from the bank' }),
    gross_value: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gross value of the transaction' }),
    id: z.int().openapi({ description: 'ID of the transaction' }),
    id_account: z.int().openapi({ description: 'ID of the related account' }),
    id_category: z.int().exactOptional().openapi({ description: 'ID of the related category' }),
    id_cluster: z
      .int()
      .exactOptional()
      .openapi({ description: 'If the transaction is part of a cluster' }),
    last_update: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last update of the transaction' }),
    nature: z.string().default('inconnu').openapi({ description: 'Type of transaction' }),
    original_currency: z.object({}).exactOptional().openapi({ description: 'Original currency' }),
    original_gross_value: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gross value in the original currency' }),
    original_value: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Value in the original currency' }),
    original_wording: z.string().openapi({ description: 'Full label of the transaction' }),
    rdate: z.iso.date().openapi({ description: 'Realization of the transaction' }),
    rdatetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Datetime of the realization of the transaction' }),
    simplified_wording: z.string().openapi({ description: 'Simplified label of the transaction' }),
    state: z.string().default('new').openapi({ description: 'Internal state of the transaction' }),
    stemmed_wording: z.string().openapi({ description: 'Do not use it' }),
    value: z.float32().exactOptional().openapi({ description: 'Value of the transaction' }),
    vdate: z.iso.date().exactOptional().openapi({ description: 'Value date of the transaction' }),
    vdatetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Datetime of the Value of the transaction' }),
    webid: z.string().exactOptional().openapi({ description: 'Webid of the transaction' }),
    wording: z.string().exactOptional().openapi({ description: 'Label set by the user' }),
  })
  .openapi({
    example: {
      active: true,
      application_date: '2021-08-23',
      bdate: '2021-08-23',
      bdatetime: '2021-08-23 10:35:44.313780',
      card: '',
      coming: false,
      comment: '',
      commission: 0,
      commission_currency: '',
      counterparty: '',
      country: '',
      date: '2021-08-23',
      date_scraped: '2021-08-23 10:35:44.312472',
      datetime: '2021-08-23 10:35:44.311470',
      deleted: '2021-08-23 10:35:44.314252',
      gross_value: 0,
      id: 0,
      id_account: 0,
      id_category: 0,
      id_cluster: 0,
      last_update: '2021-08-23 10:35:44.314171',
      nature: 'inconnu',
      original_currency: '',
      original_gross_value: 0,
      original_value: 0,
      rdate: '2021-08-23',
      rdatetime: '2021-08-23 10:35:44.312932',
      state: 'new',
      value: 0,
      vdate: '2021-08-23',
      vdatetime: '2021-08-23 10:35:44.313366',
      webid: '',
      wording: '',
    },
    required: [
      'id',
      'id_account',
      'date',
      'nature',
      'original_wording',
      'simplified_wording',
      'stemmed_wording',
      'state',
      'date_scraped',
      'rdate',
      'coming',
      'active',
    ],
  })
  .openapi('Transaction')

const TransactionInformationSchema = z
  .object({
    id: z.int().openapi({ description: 'ID of this transaction information' }),
    id_transaction: z.int().openapi({ description: 'ID of the related transaction' }),
    key: z.string().openapi({ description: 'Key of the transaction information' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of the transaction information' }),
  })
  .openapi({
    example: { id: 0, id_transaction: 0, key: '', value: '' },
    required: ['id', 'id_transaction', 'key'],
  })
  .openapi('TransactionInformation')

const TransactionsClusterSchema = z
  .object({
    created_by: z.string().exactOptional(),
    enabled: z.boolean().default(true),
    id: z.int(),
    id_account: z.int(),
    id_category: z.int().exactOptional(),
    mean_amount: z.float32(),
    median_increment: z.int().exactOptional(),
    next_date: z.iso.date().exactOptional(),
    wording: z.string(),
  })
  .openapi({
    example: {
      created_by: '',
      enabled: true,
      id: 0,
      id_account: 0,
      id_category: 0,
      mean_amount: 0,
      median_increment: 0,
      next_date: '2021-08-23',
      wording: '',
    },
    required: ['id', 'id_account', 'mean_amount', 'enabled', 'wording'],
  })
  .openapi('TransactionsCluster')

const TransferSchema = z
  .object({
    account_balance: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Balance of the account just before the transfer' }),
    account_iban: z
      .string()
      .exactOptional()
      .openapi({ description: 'IBAN of the debited account' }),
    amount: z.float32().openapi({ description: 'Amount of the transfer' }),
    beneficiary_label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Label of the beneficiary (needed for transfer to other beneficiary type than 'recipient')",
      }),
    beneficiary_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Beneficiary bank identifier value like recipient webid, iban: EX6713281847025300290000062 or phone_number: 06XXXXXX',
      }),
    beneficiary_type: z
      .string()
      .default('recipient')
      .openapi({
        description:
          "Type of beneficiary number, for example: 'recipient' (in bank recipient list), 'iban' or 'phone_number'",
      }),
    currency: z.object({}).exactOptional().openapi({ description: 'Currency of the object' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message during transfer, if any' }),
    exec_date: z.iso
      .date()
      .openapi({ description: 'Date when the transfer will be operated by the bank' }),
    fees: z.float32().exactOptional().openapi({ description: 'Fees taken by the bank' }),
    id: z.int().openapi({ description: 'ID of transfer' }),
    id_account: z.int().exactOptional().openapi({ description: 'ID of the debited account' }),
    id_recipient: z.int().exactOptional().openapi({ description: 'ID of the recipient' }),
    id_transaction: z
      .int()
      .exactOptional()
      .openapi({ description: 'If found, ID of the related transaction' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the related user' }),
    label: z.string().exactOptional().openapi({ description: 'Label of the transfer' }),
    recipient_iban: z
      .string()
      .exactOptional()
      .openapi({ description: 'IBAN of the recipient in bank recipient list' }),
    register_date: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date when the transfer has been registered' }),
    state: z
      .string()
      .openapi({
        description:
          'State of the transfer (created, scheduled, validating, pending, coming, done, canceled, transactionNotFound, deleted, error, bug)',
      }),
    validate_mechanism: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Authentication method used to validate transfer (credentials or webauth)',
      }),
    webid: z.string().exactOptional().openapi({ description: 'WebID of the transfer' }),
  })
  .openapi({
    description: 'This is a representation of a transfer.',
    example: {
      account_balance: 0,
      account_iban: '',
      amount: 0,
      beneficiary_label: '',
      beneficiary_number: '',
      beneficiary_type: 'recipient',
      currency: '',
      error: '',
      exec_date: '2021-08-23',
      fees: 0,
      id: 0,
      id_account: 0,
      id_recipient: 0,
      id_transaction: 0,
      id_user: 0,
      label: '',
      recipient_iban: '',
      register_date: '2021-08-23 10:35:44.320560',
      state: '',
      validate_mechanism: '',
      webid: '',
    },
    required: ['id', 'exec_date', 'register_date', 'amount', 'state', 'beneficiary_type'],
  })
  .openapi('Transfer')

const TransferLogSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message during transfer, if any' }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fields for transfer in additionalInformationNeeded state with background option',
      }),
    id: z.int().openapi({ description: 'ID of the transfer log entry' }),
    id_file: z.int().exactOptional().openapi({ description: 'ID of the related file' }),
    id_transfer: z.int().exactOptional().openapi({ description: 'ID of the related transfer' }),
    request_data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Data stored related to user who has requested the transfer' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'State of the transfer (created, scheduled, validating, pending, done, canceled, error, bug)',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .default('<function datetime.now at 0x7f5740ef6510>')
      .openapi({ description: 'Timestamp of the log' }),
  })
  .openapi({
    example: {
      error: '',
      id: 0,
      id_file: 0,
      id_transfer: 0,
      request_data: '',
      state: '',
      timestamp: '<function datetime.now at 0x7f5740ef6510>',
    },
    required: ['id', 'timestamp'],
  })
  .openapi('TransferLog')

const UserSchema = z
  .object({
    id: z.int(),
    platform: z.enum([
      'web',
      'iPad',
      'iPhone',
      'Android',
      'CAstore',
      'requestAccess',
      'sharedAccess',
      'singleAccess',
      'transfer',
      'refresh_token',
    ]),
    signin: z.iso.datetime({ offset: true }).default('<function datetime.now at 0x7f5740c71620>'),
  })
  .openapi({
    example: { id: 0, platform: '', signin: '<function datetime.now at 0x7f5740c71620>' },
    required: ['id', 'signin', 'platform'],
  })
  .openapi('User')

const UserAlertSchema = z
  .object({
    apply: z.string().exactOptional(),
    balance_max: z.float32().default(10000).exactOptional(),
    balance_min1: z.float32().default(500).exactOptional(),
    balance_min2: z.float32().default(0).exactOptional(),
    date_range: z.int().exactOptional(),
    enabled: z.boolean().default(true).exactOptional(),
    expense_max: z.float32().default(500).exactOptional(),
    id: z.int(),
    income_max: z.float32().default(500).exactOptional(),
    resume_enabled: z.boolean().default(true).exactOptional(),
    resume_frequency: z.int().default(7),
    transaction_types: z.string().exactOptional(),
    type: z.string().default('transactions'),
    value_type: z.string().default('flat'),
  })
  .openapi({
    description:
      '/!\\ Careful we use default value from database if present\n\n    For more information see AlertsPlugin.init',
    example: {
      apply: '',
      balance_max: 10000,
      balance_min1: 500,
      balance_min2: 0,
      date_range: 0,
      enabled: true,
      expense_max: 500,
      id: 0,
      income_max: 500,
      resume_enabled: true,
      resume_frequency: 7,
      transaction_types: '',
      type: 'transactions',
      value_type: 'flat',
    },
    required: ['id', 'value_type', 'type', 'resume_frequency'],
  })
  .openapi('UserAlert')

const WebhookSchema = z
  .object({
    add_to_data: z
      .string()
      .exactOptional()
      .openapi({ description: 'json value to describe data to add' }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date of the webhook creation' }),
    deleted: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date of the webhook deletion' }),
    flush_fail: z
      .string()
      .exactOptional()
      .openapi({ description: 'json value to store last related webhook data flushing fail' }),
    id: z.int().openapi({ description: 'ID of the webhook' }),
    id_auth: z.int().exactOptional().openapi({ description: 'ID of the authentication process' }),
    id_event: z.int().exactOptional().openapi({ description: 'ID of the webhook event' }),
    id_service: z.int().exactOptional().openapi({ description: 'ID of the service' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the emitter user' }),
    updated: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date of the webhook last update' }),
    url: z.string().exactOptional().openapi({ description: 'URL of the webhook' }),
  })
  .openapi({
    example: {
      created: '2021-08-23 10:35:44.609103',
      deleted: '2021-08-23 10:35:44.609425',
      id: 0,
      id_auth: 0,
      id_event: 0,
      id_service: 0,
      id_user: 0,
      updated: '2021-08-23 10:35:44.609274',
      url: '',
    },
    required: ['id', 'created', 'updated'],
  })
  .openapi('Webhook')

const WebhookDataSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the hook data was generated' }),
    data: z.string().exactOptional().openapi({ description: 'Data emitted' }),
    id: z.int().openapi({ description: 'ID of the webhook data' }),
    id_resource: z
      .int()
      .exactOptional()
      .openapi({
        description: 'a changing ID used to filter webhookdata depending on the event triggered',
      }),
    id_service: z.int().exactOptional().openapi({ description: 'ID of the recipient service' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the emitter user' }),
    id_webhook: z.int().exactOptional().openapi({ description: 'ID of the webhook' }),
    mimetype: z.string().exactOptional().openapi({ description: 'Mimetype of the data' }),
    success: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the hook has been successfully called' }),
  })
  .openapi({
    example: {
      created: '2021-08-23 10:35:44.613621',
      id: 0,
      id_resource: 0,
      id_service: 0,
      id_user: 0,
      id_webhook: 0,
      mimetype: '',
      success: '2021-08-23 10:35:44.613701',
    },
    required: ['id', 'created'],
  })
  .openapi('WebhookData')

const WebhookLogSchema = z
  .object({
    id: z.int().openapi({ description: 'ID of the log' }),
    id_service: z.int().exactOptional().openapi({ description: 'ID of the service' }),
    id_user: z.int().exactOptional().openapi({ description: 'ID of the user' }),
    id_webhook_data: z.int().exactOptional().openapi({ description: 'ID of the webhook data' }),
    next_try: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'If the log is an error, do not retry to push before this timestamp',
      }),
    response_code: z
      .int()
      .exactOptional()
      .openapi({ description: 'Return code of the reply to the hook' }),
    response_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of the reply to the hook' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the hook was sent' }),
  })
  .openapi({
    example: {
      id: 0,
      id_service: 0,
      id_user: 0,
      id_webhook_data: 0,
      next_try: '2021-08-23 10:35:44.614914',
      response_code: 0,
      response_date: '2021-08-23 10:35:44.614448',
      timestamp: '2021-08-23 10:35:44.614374',
    },
    required: ['id', 'timestamp'],
  })
  .openapi('WebhookLog')

const PostConnectionsIdConnectionSourcesIdSourceRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          disabled: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({ description: 'to enable or disable connector source' }),
          synchronize: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({
              description: "whether to force a synchronization on the source if it's not disabled",
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PostWebhooksIdWebhookRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          deleted: z
            .string()
            .exactOptional()
            .openapi({ description: "a date to delete the webhook or 'null' to enable it" }),
          event: z.string().exactOptional().openapi({ description: 'The webhook event' }),
          id_auth: z
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
            .openapi({ description: 'The webhook authentication process to use' }),
          id_service: z
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
            .openapi({ description: 'The service ID to associate with the webhook' }),
          id_user: z
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
            .openapi({ description: 'The user ID to associate with the webhook' }),
          url: z.string().exactOptional().openapi({ description: 'The webhook callback url' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const PutConnectionsIdConnectionSourcesIdSourceRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          disabled: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({ description: 'to enable or disable connector source' }),
          force: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({
              description: "whether to force the synchronization on the source if it's in error",
            }),
          synchronize: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional()
            .openapi({
              description: "whether to force a synchronization on the source if it's not disabled",
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

export const getAccountTypesRoute = createRoute({
  method: 'get',
  path: '/account_types',
  tags: ['Banks'],
  summary: 'Get account types',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'accounttypes',
      content: {
        'application/json': {
          schema: z
            .object({
              accounttypes: z.array(AccountTypeSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['accounttypes'] }),
        },
      },
    },
  },
})

export const getAccountTypesIdAccountTypeRoute = createRoute({
  method: 'get',
  path: '/account_types/{id_account_type}',
  tags: ['Banks'],
  summary: 'Get an account type',
  request: {
    params: z.object({
      id_account_type: z
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
            description: '',
            in: 'path',
            name: 'id_account_type',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on AccountType resource',
      content: { 'application/json': { schema: AccountTypeSchema } },
    },
  },
})

export const postAdminJwtRoute = createRoute({
  method: 'post',
  path: '/admin/jwt',
  tags: ['Authentication'],
  summary: 'Generate a jwt manage token',
  description:
    'This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              duration: z
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
                  description:
                    "number of minute before the token expiration (0 for token that won't expire unless the client application is deleted) (default: 1)",
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({ description: 'scope requested for the token (default: config)' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ required: ['jwt_token', 'payload'] }),
        },
      },
    },
  },
})

export const postAuthInitRoute = createRoute({
  method: 'post',
  path: '/auth/init',
  tags: ['Authentication'],
  summary: 'Create a new anonymous user',
  description:
    'This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              client_id: z.string().exactOptional().openapi({ description: 'ID of the client' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'secret of the client' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              auth_token: z
                .string()
                .openapi({ description: 'new token created for the new anonymous user' }),
              expires_in: z
                .int()
                .exactOptional()
                .openapi({ description: 'duration in seconds of the token validity' }),
              type: z.string().openapi({ description: 'type of the token' }),
            })
            .openapi({ required: ['auth_token', 'type'] }),
        },
      },
    },
  },
})

export const postAuthJwtRoute = createRoute({
  method: 'post',
  path: '/auth/jwt',
  tags: ['Authentication'],
  summary: 'Generate a user jwt token',
  description:
    'This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              client_id: z.string().exactOptional().openapi({ description: 'id of the client' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'secret for the client' }),
              expire: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'if set to True, the token will expire n minutes after its creation, n being the value of configuration key auth.default_token_expire (default: True)',
                }),
              id_user: z
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
                  description:
                    'user for whom the token has to be generated. If not supplied, a user will be created',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({ description: 'scope requested for the token' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              jwt_token: z.string().openapi({ description: 'the jwt token' }),
              payload: z
                .object({})
                .openapi({ description: 'the payload contained in the jwt token' }),
            })
            .openapi({ required: ['jwt_token', 'payload'] }),
        },
      },
    },
  },
})

export const postAuthRenewRoute = createRoute({
  method: 'post',
  path: '/auth/renew',
  tags: ['Authentication'],
  summary: 'Get a new access token given an user id and client credentials',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              client_id: z.string().openapi({ description: 'ID of the client' }),
              client_secret: z.string().openapi({ description: 'secret of the client' }),
              grant_type: z
                .string()
                .exactOptional()
                .openapi({ description: 'default is "client_credentials"' }),
              id_user: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'id of the user to generate a token for' }),
              revoke_previous: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'if true, all other permanent tokens for the user will be deleted',
                }),
            })
            .openapi({ required: ['client_id', 'client_secret', 'id_user'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .openapi({ description: 'the access token transformed from the temporary one' }),
              token_type: z.string().openapi({ description: 'the access token type' }),
            })
            .openapi({ required: ['access_token', 'token_type'] }),
        },
      },
    },
  },
})

export const postAuthTokenRoute = createRoute({
  method: 'post',
  path: '/auth/token',
  tags: ['PFM'],
  summary: 'Login to API with credentials',
  description:
    'Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              application: z.string().openapi({ description: 'application name' }),
              grant_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'password when requesting a user token and client_credentials for a payment manage token (default: password)',
                }),
              password: z.string().openapi({ description: 'password' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({ description: 'scope requested for the token' }),
              username: z.string().openapi({ description: 'username' }),
            })
            .openapi({ required: ['username', 'password', 'application'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              expires_in: z
                .int()
                .exactOptional()
                .openapi({ description: 'duration in seconds of the token validity' }),
              scope: z.string().openapi({ description: 'the token scope' }),
              token: z.string().openapi({ description: 'the requested token' }),
            })
            .openapi({ required: ['token', 'scope'] }),
        },
      },
    },
  },
})

export const deleteAuthTokenRoute = createRoute({
  method: 'delete',
  path: '/auth/token',
  tags: ['Authentication', 'PFM'],
  summary: 'Remove user access',
  description: 'This endpoint removes the token in use.<br><br>',
  responses: { 200: { description: 'standard HTTP response' } },
})

export const postAuthTokenAccessRoute = createRoute({
  method: 'post',
  path: '/auth/token/access',
  tags: ['Authentication'],
  summary: 'Transform a temporary code to a access_token',
  description:
    'In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              client_id: z.string().openapi({ description: 'ID of the client' }),
              client_secret: z.string().openapi({ description: 'secret of the client' }),
              code: z.string().openapi({ description: "user's temporary code" }),
              grant_type: z
                .string()
                .exactOptional()
                .openapi({ description: 'default is "authorization_code"' }),
              redirect_uri: z
                .string()
                .exactOptional()
                .openapi({ description: 'redirect uri used by user' }),
            })
            .openapi({ required: ['client_id', 'client_secret', 'code'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .openapi({ description: 'the access token transformed from the temporary one' }),
              token_type: z.string().openapi({ description: 'the access token type' }),
            })
            .openapi({ required: ['access_token', 'token_type'] }),
        },
      },
    },
  },
})

export const getAuthTokenCodeRoute = createRoute({
  method: 'get',
  path: '/auth/token/code',
  tags: ['Authentication'],
  summary: 'Generate a user temporary token',
  description:
    "This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>",
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              access: z
                .string()
                .openapi({ description: 'the reusability of a token (standard or single use)' }),
              code: z.string().openapi({ description: 'the temporary token' }),
              expires_in: z
                .int()
                .openapi({ description: 'duration in seconds of the token validity' }),
              type: z.object({}).openapi({ description: 'the token type' }),
            })
            .openapi({ required: ['code', 'type', 'access', 'expires_in'] }),
        },
      },
    },
  },
})

export const getBanksRoute = createRoute({
  method: 'get',
  path: '/banks',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get list of connectors',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'banks',
      content: {
        'application/json': {
          schema: z
            .object({
              banks: z.array(ConnectorSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['banks'] }),
        },
      },
    },
  },
})

export const postBanksCategoriesRoute = createRoute({
  method: 'post',
  path: '/banks/categories',
  tags: ['Banks'],
  summary: 'Create bank categories',
  description: 'It requires the name of the category to be created<br><br>',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'name of the category to be created' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful POST on ConnectorCategory resource',
      content: { 'application/json': { schema: ConnectorCategorySchema } },
    },
  },
})

export const postBanksCategoriesIdCategoryRoute = createRoute({
  method: 'post',
  path: '/banks/categories/{id_category}',
  tags: ['Banks'],
  summary: 'Edit a bank categories',
  description: 'Edit the name for the supplied category.<br><br>',
  request: {
    params: z.object({
      id_category: z
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
            description: '',
            in: 'path',
            name: 'id_category',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'new name for the supplied category' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful POST on ConnectorCategory resource',
      content: { 'application/json': { schema: ConnectorCategorySchema } },
    },
  },
})

export const deleteBanksCategoriesIdCategoryRoute = createRoute({
  method: 'delete',
  path: '/banks/categories/{id_category}',
  tags: ['Banks'],
  summary: 'Delete the supplied category',
  request: {
    params: z.object({
      id_category: z
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
            description: '',
            in: 'path',
            name: 'id_category',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on ConnectorCategory resource',
      content: { 'application/json': { schema: ConnectorCategorySchema } },
    },
  },
})

export const getBanksIdBankRoute = createRoute({
  method: 'get',
  path: '/banks/{id_bank}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get a connector',
  request: {
    params: z.object({
      id_bank: z
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
            description: '',
            in: 'path',
            name: 'id_bank',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Connector resource',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
  },
})

export const getBanksIdConnectorConnectionsRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/connections',
  tags: ['Banks', 'Connections'],
  summary:
    'Get a subset of id_connection for a given bank. Different selection methode are possible',
  description: "By default, it selects a set of 3 connections with the 'diversity' method<br><br>",
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "methode of selection use between 'diversity' (default), 'cover' and 'type_select'",
            in: 'query',
            name: 'method',
            required: false,
            schema: { type: 'string' },
          },
        }),
      n: z
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
            description: 'the number of requested connections, if applicable by the method',
            in: 'query',
            name: 'n',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      type: z
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
              "for 'type_select' method. Specific account type id (weboob_type_id) to select",
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      occurences: z
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
            description: "for 'type_select' method. Each connection requires at least N",
            in: 'query',
            name: 'occurences',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'specify a source name that should have a null state',
            in: 'query',
            name: 'source',
            required: false,
            schema: { type: 'string' },
          },
        }),
      minutes_without_sync: z
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
            description: 'Ensure the connection will not have a sync happening for at',
            in: 'query',
            name: 'minutes_without_sync',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(ConnectionSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
  },
})

export const getBanksIdConnectorLogosRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/logos',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getBanksIdConnectorLogosMainRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/logos/main',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getBanksIdConnectorLogosThumbnailRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/logos/thumbnail',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getBanksIdConnectorSourcesRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/sources',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get list of connector sources',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sources',
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z.array(ConnectorSourceSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
    },
  },
})

export const getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/sources/{id_connector_source}/fields',
  tags: ['Connections', 'Banks'],
  summary: 'Get fields specific to a domain and a source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_connector_source: z
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
            description: '',
            in: 'path',
            name: 'id_connector_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'source_fields',
      content: {
        'application/json': {
          schema: z
            .object({
              source_fields: z.array(ConnectorSourceFieldSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['source_fields'] }),
        },
      },
    },
  },
})

export const getBanksIdConnectorSourcesIdSourceRoute = createRoute({
  method: 'get',
  path: '/banks/{id_connector}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get the connector source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on ConnectorSource resource',
      content: { 'application/json': { schema: ConnectorSourceSchema } },
    },
  },
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['Banks'],
  summary: 'Get all categories',
  description: 'Ressource to get all existing categories<br><br>',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'categories',
      content: {
        'application/json': {
          schema: z
            .object({
              categories: z.array(CategorySchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['categories'] }),
        },
      },
    },
  },
})

export const postCategoriesKeywordsRoute = createRoute({
  method: 'post',
  path: '/categories/keywords',
  tags: ['Banks'],
  summary: 'Add a new keyword associated with a category in the database.',
  description:
    'If the keyword already exists the keyword is not added. Used for the categorization of transactions.<br><br>Form params: - id_category (integer): a reference towards the category associated with the keyword - keyword (string): the searched keyword - income (bool): 1 if the associated category represents an income else 0 - priority (integer): sets the priority for the keyword, used when categorizing<br><br>',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on Keyword resource',
      content: { 'application/json': { schema: KeywordSchema } },
    },
  },
})

export const deleteCategoriesKeywordsIdKeywordRoute = createRoute({
  method: 'delete',
  path: '/categories/keywords/{id_keyword}',
  tags: ['Banks'],
  summary: 'Delete a particular key-value pair on a transaction.',
  request: {
    params: z.object({
      id_keyword: z
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
            description: '',
            in: 'path',
            name: 'id_keyword',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Keyword resource',
      content: { 'application/json': { schema: KeywordSchema } },
    },
  },
})

export const postCategorizeRoute = createRoute({
  method: 'post',
  path: '/categorize',
  tags: ['Banks'],
  summary: 'categorize transactions without storing them',
  description:
    'It requires an array of transaction dictionaries. Any fields of transactions that are not required will be kept in the response. The response contains the list of transactions with two more fields: id_category and state (it indicates how the transaction has been categorized)<br><br>',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              type: z
                .string()
                .openapi({ description: 'type of the transaction (default: unknown)' }),
              value: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'value of the transaction' }),
              wording: z.string().openapi({ description: 'label of the transaction' }),
            })
            .openapi({ required: ['wording', 'value', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ required: ['failed', 'total', 'transactions'] }),
        },
      },
    },
  },
})

export const getCertificateTypeRoute = createRoute({
  method: 'get',
  path: '/certificate/{type}',
  tags: ['Authentication'],
  summary: 'Get the latest certificate of a type',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Certificate resource',
      content: { 'application/json': { schema: CertificateSchema } },
    },
  },
})

export const getClientsRoute = createRoute({
  method: 'get',
  path: '/clients',
  tags: ['Administration'],
  summary: 'List clients',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'clients',
      content: {
        'application/json': {
          schema: z
            .object({
              clients: z.array(ClientSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['clients'] }),
        },
      },
    },
  },
})

export const postClientsRoute = createRoute({
  method: 'post',
  path: '/clients',
  tags: ['Administration'],
  summary: 'Create a client',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              config: z
                .string()
                .exactOptional()
                .openapi({ description: 'custom config about the client' }),
              generate_keys: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'if True, generate a rsa pair of keys so the client can be used to generate jwt user tokens (default: False)',
                }),
              name: z.string().exactOptional().openapi({ description: 'name of client' }),
              redirect_uris: z
                .string()
                .exactOptional()
                .openapi({ description: 'list of allowed redirect uris' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Client resource',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
})

export const getClientsIdClientRoute = createRoute({
  method: 'get',
  path: '/clients/{id_client}',
  tags: ['Administration'],
  summary: 'Get information about a client',
  description:
    'If you use the manage_token or a configuration token, you will get also the client secret.<br><br>',
  request: {
    params: z.object({
      id_client: z
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
            description: '',
            in: 'path',
            name: 'id_client',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Client resource',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
})

export const putClientsIdClientRoute = createRoute({
  method: 'put',
  path: '/clients/{id_client}',
  tags: ['Administration'],
  summary: 'Update a client',
  request: {
    params: z.object({
      id_client: z
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
            description: '',
            in: 'path',
            name: 'id_client',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              config: z
                .string()
                .exactOptional()
                .openapi({ description: 'custom config about the client' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'text to display as a default description' }),
              description_banks: z
                .string()
                .exactOptional()
                .openapi({ description: 'text to display as a description for banks' }),
              description_providers: z
                .string()
                .exactOptional()
                .openapi({ description: 'text to display as a description for providers' }),
              generate_keys: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'set a rsa key pair for the client, which make it possible to generate a jwt user token using this client. No effect if the client already has a set of keys(default: False)',
                }),
              name: z.string().exactOptional().openapi({ description: 'name of client' }),
              primary_color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'hexadecimal code of the client primary color (e.g F45B9A)',
                }),
              pro: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Wether the client should display the company manager page',
                }),
              redirect_uris: z
                .string()
                .exactOptional()
                .openapi({ description: 'list of allowed redirect uris' }),
              secondary_color: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'hexadecimal code of the client secondary color (e.g F45B9A)',
                }),
              secret: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'reset the secret' }),
              update_config: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'update the custom information about the client instead of replacing the existing one (default: True)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on Client resource',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
})

export const deleteClientsIdClientRoute = createRoute({
  method: 'delete',
  path: '/clients/{id_client}',
  tags: ['Administration'],
  summary: 'Delete a client',
  request: {
    params: z.object({
      id_client: z
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
            description: '',
            in: 'path',
            name: 'id_client',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Client resource',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
})

export const postClientsIdClientLogoRoute = createRoute({
  method: 'post',
  path: '/clients/{id_client}/logo',
  tags: ['Administration'],
  summary: 'Update the client logo',
  request: {
    params: z.object({
      id_client: z
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
            description: '',
            in: 'path',
            name: 'id_client',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on File resource',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
})

export const deleteClientsIdClientLogoRoute = createRoute({
  method: 'delete',
  path: '/clients/{id_client}/logo',
  tags: ['Administration'],
  summary: 'Delete the client logo',
  request: {
    params: z.object({
      id_client: z
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
            description: '',
            in: 'path',
            name: 'id_client',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on File resource',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Administration'],
  summary: 'Get configuration of the API.',
  description: '<br><br>',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit the results to keys matching the given value',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const postConfigRoute = createRoute({
  method: 'post',
  path: '/config',
  tags: ['Administration'],
  summary: 'Insert/update configuration key(s)/value(s) on the API.',
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getConfigLogsRoute = createRoute({
  method: 'get',
  path: '/config/logs',
  tags: ['Administration'],
  summary: 'Get configuration change history of the API.',
  description: '<br><br>',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit the results to keys matching the given value',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'type of change done on the configuration',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date of the change',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date of the change',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'configlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              configlogs: z.array(ConfigLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['configlogs'] }),
        },
      },
    },
  },
})

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/connections',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connections without a user',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(ConnectionSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
  },
})

export const getConnectionsIdConnectionLogsRoute = createRoute({
  method: 'get',
  path: '/connections/{id_connection}/logs',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection logs',
  description: 'Get logs about connections.<br><br>',
  request: {
    params: z.object({
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'period to group logs',
            in: 'query',
            name: 'period',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_user: z
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
            description: 'ID of a user',
            in: 'query',
            name: 'id_user',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connection: z
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
            description: 'ID of a connection',
            in: 'query',
            name: 'id_connection',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connector: z
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
            description: 'ID of a connector',
            in: 'query',
            name: 'id_connector',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      connector_uuid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'UUID of a connector',
            in: 'query',
            name: 'connector_uuid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'connections log error filter',
            in: 'query',
            name: 'error',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_source: z
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
            description: 'ID of a source',
            in: 'query',
            name: 'id_source',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_max: z
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
            description: 'filter "id" of logs, maximum id to return',
            in: 'query',
            name: 'id_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectionlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              connectionlogs: z.array(ConnectionLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectionlogs'] }),
        },
      },
    },
  },
})

export const getConnectionsIdConnectionSourcesRoute = createRoute({
  method: 'get',
  path: '/connections/{id_connection}/sources',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection sources',
  request: {
    params: z.object({
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sources',
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z.array(ConnectionSourceSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
    },
  },
})

export const putConnectionsIdConnectionSourcesIdSourceRoute = createRoute({
  method: 'put',
  path: '/connections/{id_connection}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Update connection source',
  description: 'This endpoint is used to enable a source or force a synchronization on it.<br><br>',
  request: {
    params: z.object({
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'do the synchronization in background (to use with the synchronize parameter)',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: PutConnectionsIdConnectionSourcesIdSourceRequestBody,
  },
  responses: {
    200: {
      description: 'Successful PUT on ConnectionSource resource',
      content: { 'application/json': { schema: ConnectionSourceSchema } },
    },
  },
})

export const postConnectionsIdConnectionSourcesIdSourceRoute = createRoute({
  method: 'post',
  path: '/connections/{id_connection}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: '"',
  description: 'This endpoint is used to enable a source or force a synchronization on it.<br><br>',
  request: {
    params: z.object({
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'do the synchronization in background (to use with the sysynchronizenc parameter)',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: PostConnectionsIdConnectionSourcesIdSourceRequestBody,
  },
  responses: {
    200: {
      description: 'Successful POST on ConnectionSource resource',
      content: { 'application/json': { schema: ConnectionSourceSchema } },
    },
  },
})

export const deleteConnectionsIdConnectionSourcesIdSourceRoute = createRoute({
  method: 'delete',
  path: '/connections/{id_connection}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Disable a connection source',
  description:
    'This will make it so the specified source will not be synchronized anymore.<br><br>',
  request: {
    params: z.object({
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on ConnectionSource resource',
      content: { 'application/json': { schema: ConnectionSourceSchema } },
    },
  },
})

export const getConnectorsRoute = createRoute({
  method: 'get',
  path: '/connectors',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get list of connectors',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectors',
      content: {
        'application/json': {
          schema: z
            .object({
              connectors: z.array(ConnectorSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectors'] }),
        },
      },
    },
  },
})

export const putConnectorsRoute = createRoute({
  method: 'put',
  path: '/connectors',
  tags: ['Banks'],
  summary: 'Enable/disable several connectors',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              hidden: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'to enable  or disable connector (bank or provider)' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on Connector resource',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
  },
})

export const postConnectorsRoute = createRoute({
  method: 'post',
  path: '/connectors',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Request a new connector',
  description: 'Send a request to add a new connector<br><br>',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              comment: z.string().exactOptional().openapi({ description: 'Optionnal comment' }),
              email: z.string().exactOptional().openapi({ description: 'Email of the user' }),
              login: z.string().openapi({ description: 'Users login' }),
              name: z.string().openapi({ description: 'Name of the bank or provider' }),
              password: z.string().openapi({ description: 'Users password' }),
              sendmail: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'if set, send an email to user' }),
              types: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of connector, eg. banks or providers' }),
              url: z.string().exactOptional().openapi({ description: 'Url of the bank' }),
            })
            .openapi({ required: ['name', 'login', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Connector resource',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
  },
})

export const getConnectorsIdConnectorRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get a connector',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Connector resource',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
  },
})

export const putConnectorsIdConnectorRoute = createRoute({
  method: 'put',
  path: '/connectors/{id_connector}',
  tags: ['Banks'],
  summary: 'Edit the provided connector',
  description: '<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              auth_mechanism: z
                .string()
                .exactOptional()
                .openapi({ description: 'the authentication mechanism to use for this connector' }),
              hidden: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'to enable  or disable connector (bank or provider)' }),
              id_categories: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'one or several comma separated categories to map to the given connector (or null to map no category)',
                }),
              sync_frequency: z
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
                .openapi({ description: 'Allows you to overload global sync_frequency param' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on Connector resource',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
  },
})

export const getConnectorsIdConnectorLogosRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}/logos',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const putConnectorsIdConnectorLogosRoute = createRoute({
  method: 'put',
  path: '/connectors/{id_connector}/logos',
  tags: ['Banks', 'Providers'],
  summary: 'Create or Update a connector Logo',
  description:
    'This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful PUT on ConnectorLogo resource',
      content: { 'application/json': { schema: ConnectorLogoSchema } },
    },
  },
})

export const postConnectorsIdConnectorLogosRoute = createRoute({
  method: 'post',
  path: '/connectors/{id_connector}/logos',
  tags: ['Banks', 'Providers'],
  summary: 'Create a connector Logo',
  description:
    'This endpoint creates a connector logo. You can either pass a file to as a parameter to insert and link it with the connector or pass an id_file to link a connector with an existing file. Will fail if the file is already linked with that connector.<br><br>Form params: - id_file (integer): The id of the file to link with that connector. - img (string): Path to the image to link with that connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on ConnectorLogo resource',
      content: { 'application/json': { schema: ConnectorLogoSchema } },
    },
  },
})

export const getConnectorsIdConnectorLogosMainRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}/logos/main',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getConnectorsIdConnectorLogosThumbnailRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}/logos/thumbnail',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const putConnectorsIdConnectorLogosIdLogoRoute = createRoute({
  method: 'put',
  path: '/connectors/{id_connector}/logos/{id_logo}',
  tags: ['Banks', 'Providers'],
  summary: 'Create or Update a connector Logo.',
  description:
    'This endpoint creates or update a connector logo. This logo is a mapping between a file (/file route) and a connector (/connectors route) or a provider (/providers route).<br><br>Form params: - id_file (integer): The id of the file to link with that connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_logo: z
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
            description: '',
            in: 'path',
            name: 'id_logo',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful PUT on ConnectorLogo resource',
      content: { 'application/json': { schema: ConnectorLogoSchema } },
    },
  },
})

export const deleteConnectorsIdConnectorLogosIdLogoRoute = createRoute({
  method: 'delete',
  path: '/connectors/{id_connector}/logos/{id_logo}',
  tags: ['Banks', 'Providers'],
  summary: 'Delete a single Logo object.',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_logo: z
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
            description: '',
            in: 'path',
            name: 'id_logo',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on ConnectorLogo resource',
      content: { 'application/json': { schema: ConnectorLogoSchema } },
    },
  },
})

export const getConnectorsIdConnectorSourcesRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}/sources',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get list of connector sources',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sources',
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z.array(ConnectorSourceSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
    },
  },
})

export const putConnectorsIdConnectorSourcesRoute = createRoute({
  method: 'put',
  path: '/connectors/{id_connector}/sources',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Edit several connector sources',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              disabled_capabilities: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'list (json format) of capabilities the sources will be disabled for',
                }),
              unavailable_capabilities: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'list (json format) of capabilities the sources will be unavailable for',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on ConnectorSource resource',
      content: { 'application/json': { schema: ConnectorSourceSchema } },
    },
  },
})

export const getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}/sources/{id_connector_source}/fields',
  tags: ['Connections', 'Banks'],
  summary: 'Get fields specific to a domain and a source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_connector_source: z
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
            description: '',
            in: 'path',
            name: 'id_connector_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'source_fields',
      content: {
        'application/json': {
          schema: z
            .object({
              source_fields: z.array(ConnectorSourceFieldSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['source_fields'] }),
        },
      },
    },
  },
})

export const getConnectorsIdConnectorSourcesIdSourceRoute = createRoute({
  method: 'get',
  path: '/connectors/{id_connector}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get the connector source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on ConnectorSource resource',
      content: { 'application/json': { schema: ConnectorSourceSchema } },
    },
  },
})

export const putConnectorsIdConnectorSourcesIdSourceRoute = createRoute({
  method: 'put',
  path: '/connectors/{id_connector}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Edit the provided connector source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              auth_mechanism: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the authentication mechanism to use for this connector source',
                }),
              disabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'to enable or disable connector source' }),
              disabled_capabilities: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'list (json format) of capabilities this source will be disabled for',
                }),
              unavailable: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'to enable or disable the source (can only be edited by BI employees)',
                }),
              unavailable_capabilities: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'list (json format) of capabilities this source will be unavailable for',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on ConnectorSource resource',
      content: { 'application/json': { schema: ConnectorSourceSchema } },
    },
  },
})

export const getIncidentsRoute = createRoute({
  method: 'get',
  path: '/incidents',
  tags: ['Timeline'],
  summary: 'Get incidents logs.',
  description:
    'By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>',
  request: {
    query: z.object({
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list, filter incidents in the given states.',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
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
            description: 'give only the current state of the particular incidents.',
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      weboob_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma_separated list, filter the incidents of the given weboob_id',
            in: 'query',
            name: 'weboob_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter last_update date >= start_date. YYYY-MM-DD format.',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter last_update date <= start_date. YYYY-MM-DD format.',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
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
            description: 'pagination option. Default to 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      size: z
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
            description: 'pagination option. Default to 30.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getInvoicingRoute = createRoute({
  method: 'get',
  path: '/invoicing',
  tags: ['Banks'],
  summary: 'Get invoicing data for a given period (default is the current month).',
  description:
    'You can get all the invoicing data or just specific ones by using the available parameters.<br><br>If no parameters are specified, no invoicing data is returned.<br><br>',
  request: {
    query: z.object({
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      users_synced: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of user synchronized during the period',
            in: 'query',
            name: 'users_synced',
            required: false,
            schema: { type: 'string' },
          },
        }),
      users_bank: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of user of the Bank API synchronized during the period',
            in: 'query',
            name: 'users_bank',
            required: false,
            schema: { type: 'string' },
          },
        }),
      users_bill: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' the number of user of the Bill API synchronized during the period',
            in: 'query',
            name: 'users_bill',
            required: false,
            schema: { type: 'string' },
          },
        }),
      accounts_synced: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of accounts synchronized during the period',
            in: 'query',
            name: 'accounts_synced',
            required: false,
            schema: { type: 'string' },
          },
        }),
      subscriptions_synced: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of subscriptions synchronized during the period',
            in: 'query',
            name: 'subscriptions_synced',
            required: false,
            schema: { type: 'string' },
          },
        }),
      connections_synced: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of connections synchronized during the period',
            in: 'query',
            name: 'connections_synced',
            required: false,
            schema: { type: 'string' },
          },
        }),
      connections_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of Bank API connections synchronized during the period',
            in: 'query',
            name: 'connections_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transfers_synced: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of transfers done during the period',
            in: 'query',
            name: 'transfers_synced',
            required: false,
            schema: { type: 'string' },
          },
        }),
      payments_synced: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of payments done during the period',
            in: 'query',
            name: 'payments_synced',
            required: false,
            schema: { type: 'string' },
          },
        }),
      all: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'get all the invoicing data at once',
            in: 'query',
            name: 'all',
            required: false,
            schema: { type: 'string' },
          },
        }),
      detail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'get full ids list instead of numbers',
            in: 'query',
            name: 'detail',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getLogsRoute = createRoute({
  method: 'get',
  path: '/logs',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection logs',
  description: 'Get logs about connections.<br><br>',
  request: {
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'period to group logs',
            in: 'query',
            name: 'period',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_user: z
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
            description: 'ID of a user',
            in: 'query',
            name: 'id_user',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connection: z
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
            description: 'ID of a connection',
            in: 'query',
            name: 'id_connection',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connector: z
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
            description: 'ID of a connector',
            in: 'query',
            name: 'id_connector',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      connector_uuid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'UUID of a connector',
            in: 'query',
            name: 'connector_uuid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'connections log error filter',
            in: 'query',
            name: 'error',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_source: z
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
            description: 'ID of a source',
            in: 'query',
            name: 'id_source',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_max: z
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
            description: 'filter "id" of logs, maximum id to return',
            in: 'query',
            name: 'id_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectionlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              connectionlogs: z.array(ConnectionLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectionlogs'] }),
        },
      },
    },
  },
})

export const getMonitoringRoute = createRoute({
  method: 'get',
  path: '/monitoring',
  tags: ['Administration'],
  summary: 'get performances stats on this instance',
  request: {
    query: z.object({
      period: z
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
              'number on days on which stats on synchronization have to be done per worker (Default: 1)',
            in: 'query',
            name: 'period',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getProvidersRoute = createRoute({
  method: 'get',
  path: '/providers',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get list of connectors',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'providers',
      content: {
        'application/json': {
          schema: z
            .object({
              providers: z.array(ConnectorSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['providers'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorConnectionsRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/connections',
  tags: ['Banks', 'Connections'],
  summary: "Get a random subset of provider's id_connection",
  description: 'By default, it selects a set of 3 connections.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      range: z
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
            description: 'the length of the connection subset',
            in: 'query',
            name: 'range',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(ConnectionSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorLogosRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/logos',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorLogosMainRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/logos/main',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorLogosThumbnailRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/logos/thumbnail',
  tags: ['Banks', 'Providers'],
  summary: 'Get all links to the files associated with this connector.',
  description: 'This endpoint returns all links to files associated with this connector.<br><br>',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectorlogos',
      content: {
        'application/json': {
          schema: z
            .object({
              connectorlogos: z.array(ConnectorLogoSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectorlogos'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorSourcesRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/sources',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get list of connector sources',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sources',
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z.array(ConnectorSourceSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/sources/{id_connector_source}/fields',
  tags: ['Connections', 'Banks'],
  summary: 'Get fields specific to a domain and a source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_connector_source: z
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
            description: '',
            in: 'path',
            name: 'id_connector_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'source_fields',
      content: {
        'application/json': {
          schema: z
            .object({
              source_fields: z.array(ConnectorSourceFieldSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['source_fields'] }),
        },
      },
    },
  },
})

export const getProvidersIdConnectorSourcesIdSourceRoute = createRoute({
  method: 'get',
  path: '/providers/{id_connector}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get the connector source',
  request: {
    params: z.object({
      id_connector: z
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
            description: '',
            in: 'path',
            name: 'id_connector',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on ConnectorSource resource',
      content: { 'application/json': { schema: ConnectorSourceSchema } },
    },
  },
})

export const getProvidersIdProviderRoute = createRoute({
  method: 'get',
  path: '/providers/{id_provider}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get a connector',
  request: {
    params: z.object({
      id_provider: z
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
            description: '',
            in: 'path',
            name: 'id_provider',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Connector resource',
      content: { 'application/json': { schema: ConnectorSchema } },
    },
  },
})

export const getPsd2RegistrationsRoute = createRoute({
  method: 'get',
  path: '/psd2-registrations',
  tags: ['Banks'],
  summary: 'Get details on all psd2 registrations',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'psd2registrations',
      content: {
        'application/json': {
          schema: z
            .object({
              psd2registrations: z.array(Psd2RegistrationSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['psd2registrations'] }),
        },
      },
    },
  },
})

export const getPsd2RegistrationsIdPsd2RegistrationRoute = createRoute({
  method: 'get',
  path: '/psd2-registrations/{id_psd2-registration}',
  tags: ['Banks'],
  summary: 'Get details for a given psd2 registration',
  request: {
    params: z.object({
      'id_psd2-registration': z
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
            description: '',
            in: 'path',
            name: 'id_psd2-registration',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Psd2Registration resource',
      content: { 'application/json': { schema: Psd2RegistrationSchema } },
    },
  },
})

export const getPsd2RegistrationsIdPsd2registrationLogsRoute = createRoute({
  method: 'get',
  path: '/psd2-registrations/{id_psd2registration}/logs',
  tags: ['Banks'],
  summary: 'Get psd2 registration logs.',
  description:
    'Get logs of psd2 registration. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>',
  request: {
    params: z.object({
      id_psd2registration: z
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
            description: '',
            in: 'path',
            name: 'id_psd2registration',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal (inclusive) date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum (inclusive) date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'psd2registrationlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              psd2registrationlogs: z.array(Psd2RegistrationLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['psd2registrationlogs'] }),
        },
      },
    },
  },
})

export const getPublickeyRoute = createRoute({
  method: 'get',
  path: '/publickey',
  tags: ['Administration'],
  summary: 'Get public encryption key of the API.',
  responses: { 200: { description: 'standard HTTP response' } },
})

export const postTestSyncRoute = createRoute({
  method: 'post',
  path: '/test/sync',
  tags: ['Administration'],
  summary: 'Test synchronization on a random connection.',
  description: 'It can be used to test receiving data on your webhooks.<br><br>',
  responses: { 200: { description: 'standard HTTP response' } },
})

export const postTestWebhooksRoute = createRoute({
  method: 'post',
  path: '/test/webhooks',
  tags: ['Administration'],
  summary: 'Test synchronization on a random connection.',
  description: 'It can be used to test receiving data on your webhooks.<br><br>',
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users management'],
  summary: 'Get users',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "searches a user by mail (if it contains no '@', '@biapi.pro' will be added at the end)",
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'users',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              users: z.array(UserSchema),
            })
            .openapi({ required: ['users'] }),
        },
      },
    },
  },
})

export const getUsersIdUserRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}',
  tags: ['Users management', 'PFM', 'Authentication'],
  summary: 'Get a user',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on User resource',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const deleteUsersIdUserRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}',
  tags: ['Authentication', 'Users management'],
  summary: 'Delete the user',
  description: 'This endpoint deletes the user.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on User resource',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const getUsersIdUserAccountTypesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/account_types',
  tags: ['Banks'],
  summary: 'Get account types',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'accounttypes',
      content: {
        'application/json': {
          schema: z
            .object({
              accounttypes: z.array(AccountTypeSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['accounttypes'] }),
        },
      },
    },
  },
})

export const getUsersIdUserAccountTypesIdAccountTypeRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/account_types/{id_account_type}',
  tags: ['Banks'],
  summary: 'Get an account type',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_account_type: z
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
            description: '',
            in: 'path',
            name: 'id_account_type',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on AccountType resource',
      content: { 'application/json': { schema: AccountTypeSchema } },
    },
  },
})

export const getUsersIdUserAccountsIdAccountCategoriesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/accounts/{id_account}/categories',
  tags: ['Banks'],
  summary: 'Get the category',
  description: "Ressource to get categories for the user's transactions<br><br>",
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersIdUserAccountsIdAccountTransactionsclustersRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/accounts/{id_account}/transactionsclusters',
  tags: ['Banks'],
  summary: 'Get clustered transactions',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transactionsclusters',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              transactionsclusters: z.array(TransactionsClusterSchema),
            })
            .openapi({ required: ['transactionsclusters'] }),
        },
      },
    },
  },
})

export const postUsersIdUserAccountsIdAccountTransactionsclustersRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/accounts/{id_account}/transactionsclusters',
  tags: ['Banks'],
  summary: 'Create clustered transaction',
  description:
    'Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on TransactionsCluster resource',
      content: { 'application/json': { schema: TransactionsClusterSchema } },
    },
  },
})

export const putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute =
  createRoute({
    method: 'put',
    path: '/users/{id_user}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}',
    tags: ['Banks'],
    summary: 'Edit a clustered transaction',
    description:
      'Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transactionscluster: z
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
              description: '',
              in: 'path',
              name: 'id_transactionscluster',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful PUT on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute =
  createRoute({
    method: 'delete',
    path: '/users/{id_user}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}',
    tags: ['Banks'],
    summary: 'Delete a clustered transaction',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transactionscluster: z
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
              description: '',
              in: 'path',
              name: 'id_transactionscluster',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful DELETE on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const getUsersIdUserAlertsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/alerts',
  tags: ['Banks'],
  summary: 'Get alerts',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'alerts',
      content: {
        'application/json': {
          schema: z
            .object({
              alerts: z.array(AlertSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['alerts'] }),
        },
      },
    },
  },
})

export const getUsersIdUserCategoriesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/categories',
  tags: ['Banks'],
  summary: 'Get the category',
  description: "Ressource to get categories for the user's transactions<br><br>",
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersIdUserCategoriesFullRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/categories/full',
  tags: ['Banks'],
  summary: 'Get the category',
  description: 'Ressource to get categories<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'categorys',
      content: {
        'application/json': {
          schema: z
            .object({
              categorys: z.array(CategorySchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['categorys'] }),
        },
      },
    },
  },
})

export const postUsersIdUserCategoriesFullRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/categories/full',
  tags: ['Banks'],
  summary: 'Create a new transaction category',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              accountant_account: z
                .string()
                .exactOptional()
                .openapi({ description: 'Accountant account number.' }),
              color: z.string().exactOptional().openapi({ description: 'Color of the category.' }),
              id_parent_category: z
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
                .openapi({ description: 'ID of the parent category.' }),
              id_parent_category_in_menu: z
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
                .openapi({ description: 'ID of the parent category to be displayed.' }),
              income: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Is an income category. If null, this is both an income and an expense category.',
                }),
              name: z.string().exactOptional().openapi({ description: 'Name of the category.' }),
              refundable: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'This category accepts opposite sign of transactions.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Category resource',
      content: { 'application/json': { schema: CategorySchema } },
    },
  },
})

export const putUsersIdUserCategoriesFullIdFullRoute = createRoute({
  method: 'put',
  path: '/users/{id_user}/categories/full/{id_full}',
  tags: ['Banks'],
  summary: 'Modify a user-created category',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_full: z
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
            description: '',
            in: 'path',
            name: 'id_full',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              accountant_account: z
                .string()
                .exactOptional()
                .openapi({ description: 'Accountant account number.' }),
              hide: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Hide (but not delete) a category. Must be 0, 1 or toggle.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on Category resource',
      content: { 'application/json': { schema: CategorySchema } },
    },
  },
})

export const deleteUsersIdUserCategoriesFullIdFullRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/categories/full/{id_full}',
  tags: ['Banks'],
  summary: 'Delete a user-created transaction category',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_full: z
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
            description: '',
            in: 'path',
            name: 'id_full',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Category resource',
      content: { 'application/json': { schema: CategorySchema } },
    },
  },
})

export const getUsersIdUserConfigRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/config',
  tags: ['Users management'],
  summary: 'Get configuration of a user.',
  description: '<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.object({}).openapi({ required: ['biapi.last_push'] }) },
      },
    },
  },
})

export const postUsersIdUserConfigRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/config',
  tags: ['Users management'],
  summary:
    "Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored",
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const deleteUsersIdUserConfigRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/config',
  tags: ['Users management'],
  summary:
    "Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored",
  description: '- keys (string): list of coma separated keys to be deleted.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersIdUserConnectionsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connections',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(ConnectionSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
  },
})

export const postUsersIdUserConnectionsRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/connections',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Add a new connection.',
  description:
    'Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'optional comma-separated list of sources to use for the connection synchronization',
            in: 'query',
            name: 'source',
            required: false,
            schema: { type: 'string' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              connector_uuid: z
                .string()
                .exactOptional()
                .openapi({ description: 'optional uuid of the connector (replaces id_connector)' }),
              id_connector: z
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
                .openapi({ description: 'ID of the connector' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Connection resource',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
  },
})

export const deleteUsersIdUserConnectionsRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/connections',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Delete all connections',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Connection resource',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
  },
})

export const putUsersIdUserConnectionsIdConnectionRoute = createRoute({
  method: 'put',
  path: '/users/{id_user}/connections/{id_connection}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Force synchronisation of a connection.',
  description:
    'We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      last_update: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'if supplied, get transactions inserted since this date',
            in: 'query',
            name: 'last_update',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'do the connection synchronization in background',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      psu_requested: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the connection synchronization is asked by the PSU or not (default is true)',
            in: 'query',
            name: 'psu_requested',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful PUT on Connection resource',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
  },
})

export const postUsersIdUserConnectionsIdConnectionRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/connections/{id_connection}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Update a connection.',
  description:
    'Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like \'active\' or \'expire\'.<br><br>It\'s possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Do the connection update/synchronization in background',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      psu_requested: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the connection synchronization is asked by the PSU or not (default is true)',
            in: 'query',
            name: 'psu_requested',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      refresh_psd2_auth: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: "Refresh the PSU's SCA for openapi source",
            in: 'query',
            name: 'refresh_psd2_auth',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              active: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Set if the connection synchronization is active' }),
              decoupled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Try to update a connection with the decoupled error' }),
              expire: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Set expiration of the connection to this date' }),
              login: z
                .string()
                .exactOptional()
                .openapi({ description: 'Set login to this new login' }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Set password to this new password' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Connection resource',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
  },
})

export const deleteUsersIdUserConnectionsIdConnectionRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/connections/{id_connection}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Delete a connection.',
  description:
    'This endpoint deletes a connection and all related accounts and transactions.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Connection resource',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionAccountsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/accounts',
  tags: ['Banks'],
  summary: 'Get accounts list.',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'accounts',
      content: {
        'application/json': {
          schema: z
            .object({
              accounts: z.array(AccountSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['accounts'] }),
        },
      },
    },
  },
})

export const putUsersIdUserConnectionsIdConnectionAccountsRoute = createRoute({
  method: 'put',
  path: '/users/{id_user}/connections/{id_connection}/accounts',
  tags: ['Banks'],
  summary: 'Update many accounts at once',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful PUT on Account resource',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const postUsersIdUserConnectionsIdConnectionAccountsRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/connections/{id_connection}/accounts',
  tags: ['Banks'],
  summary: 'Create an account',
  description: 'This endpoint creates an account related to a connection or not.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              balance: z
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
                .openapi({ description: 'balance of account' }),
              iban: z.string().exactOptional().openapi({ description: 'IBAN of account' }),
              id_connection: z
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
                .openapi({ description: 'the connection to attach to the account' }),
              id_currency: z
                .string()
                .exactOptional()
                .openapi({ description: "the currency of the account (default: 'EUR')" }),
              name: z.string().openapi({ description: 'name of account' }),
              number: z.string().exactOptional().openapi({ description: 'number of account' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Account resource',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const deleteUsersIdUserConnectionsIdConnectionAccountsRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/connections/{id_connection}/accounts',
  tags: ['Banks'],
  summary: 'Delete all accounts',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Account resource',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const putUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute = createRoute({
  method: 'put',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}',
  tags: ['Banks'],
  summary: 'Update an account',
  description: 'It updates a specific account<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              balance: z
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
                .openapi({ description: 'Balance of the account' }),
              bookmarked: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'If the account is bookmarked' }),
              disabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'If the account is disabled (not synchronized)' }),
              display: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'If the account is displayed' }),
              iban: z.string().exactOptional().openapi({ description: 'IBAN of the account' }),
              name: z.string().exactOptional().openapi({ description: 'Label of the account' }),
              usage: z
                .string()
                .exactOptional()
                .openapi({ description: 'Usage of the account : PRIV, ORGA or ASSO' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on Account resource',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}',
  tags: ['Banks'],
  summary: 'Delete an account.',
  description: 'It deletes a specific account.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Account resource',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/categories',
  tags: ['Banks'],
  summary: 'Get the category',
  description: "Ressource to get categories for the user's transactions<br><br>",
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/delta',
  tags: ['Banks'],
  summary: 'Get deltas of accounts',
  description:
    'Get account delta between sums of transactions and difference of account balance for the given period.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'period to group logs',
            in: 'query',
            name: 'period',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/logs',
  tags: ['Banks'],
  summary: 'Get accounts logs.',
  description:
    'Get logs of account. By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal (inclusive) date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum (inclusive) date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'accountlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              accountlogs: z.array(AccountLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['accountlogs'] }),
        },
      },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/sources',
  tags: ['Banks'],
  summary: 'Get account sources',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sources',
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z.array(ConnectionSourceSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions',
  tags: ['Banks'],
  summary: 'Get transactions',
  description:
    'Get list of transactions.<br><br>By default, it selects transactions for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_account: z
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
            description: '',
            in: 'path',
            name: 'id_account',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal (inclusive) date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum (inclusive) date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      income: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter on income or expenditures',
            in: 'query',
            name: 'income',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'display only deleted transactions',
            in: 'query',
            name: 'deleted',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'display all transactions, including deleted ones',
            in: 'query',
            name: 'all',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      last_update: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'get only transactions updated after the specified datetime',
            in: 'query',
            name: 'last_update',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      wording: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter transactions containing the given string',
            in: 'query',
            name: 'wording',
            required: false,
            schema: { type: 'string' },
          },
        }),
      min_value: z
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
            description: 'minimal (inclusive) value',
            in: 'query',
            name: 'min_value',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      max_value: z
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
            description: 'maximum (inclusive) value',
            in: 'query',
            name: 'max_value',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'search in labels, dates, values and categories',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '"XX|-XX" or "±XX"',
            in: 'query',
            name: 'value',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_category: z
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
            description: 'filter on given category id(s) (comma separated) or "null"',
            in: 'query',
            name: 'id_category',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transactions',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              transactions: z.array(TransactionSchema),
            })
            .openapi({ required: ['transactions'] }),
        },
      },
    },
  },
})

export const postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute = createRoute(
  {
    method: 'post',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions',
    tags: ['Banks'],
    summary: 'Create transactions',
    description:
      'Create transactions for the supplied account or the account whose id is given with form parameters. It requires an array of transaction dictionaries.<br><br><br><br>',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'multipart/form-data': {
            schema: z
              .object({
                active: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    z.boolean(),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      '1 if the transaction should be taken into account by pfm services (default: 1)',
                  }),
                coming: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    z.boolean(),
                  )
                  .exactOptional()
                  .openapi({
                    description: '1 if the transaction has already been debited (default: 0)',
                  }),
                date: z.iso.date().openapi({ description: 'date of the transaction' }),
                date_scraped: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'date on which the transaction has been found for the first time. YYYY-MM-DD HH:MM:SS(default: now)',
                  }),
                id_account: z
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
                    description:
                      'account of the transaction. If not supplied, it has to be given in the route',
                  }),
                original_wording: z.string().openapi({ description: 'label of the transaction' }),
                rdate: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description: 'realisation date of the transaction (default: value of date)',
                  }),
                state: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'nature of the transaction (default: new)' }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'type of the transaction (default: unknown)' }),
                value: z
                  .preprocess(
                    (val) =>
                      typeof val === 'string' &&
                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                        ? Number(val)
                        : val,
                    z.int(),
                  )
                  .openapi({ description: 'vallue of the transaction' }),
              })
              .openapi({ required: ['original_wording', 'value', 'date'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Successful POST on Transaction resource',
        content: { 'application/json': { schema: TransactionSchema } },
      },
    },
  },
)

export const deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute =
  createRoute({
    method: 'delete',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions',
    tags: ['Banks'],
    summary: 'Delete transactions',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful DELETE on Transaction resource',
        content: { 'application/json': { schema: TransactionSchema } },
      },
    },
  })

export const putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRoute =
  createRoute({
    method: 'put',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}',
    tags: ['Banks'],
    summary: 'Edit a transaction meta-data',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transaction: z
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
              description: '',
              in: 'path',
              name: 'id_transaction',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
      body: {
        content: {
          'multipart/form-data': {
            schema: z
              .object({
                active: z
                  .preprocess(
                    ((read) => (val: unknown) => {
                      const result = read.safeParse(val)
                      return result.success ? result.data : val
                    })(z.stringbool()),
                    z.boolean(),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      "if false, transaction isn't considered in analyzisis endpoints (like /balances)",
                  }),
                application_date: z.iso
                  .date()
                  .exactOptional()
                  .openapi({ description: 'change application date of the transaction' }),
                comment: z.string().exactOptional().openapi({ description: 'change comment' }),
                id_category: z
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
                  .openapi({ description: 'ID of the associated category' }),
                wording: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'user rewording of the transaction' }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful PUT on Transaction resource',
        content: { 'application/json': { schema: TransactionSchema } },
      },
    },
  })

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute =
  createRoute({
    method: 'get',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations',
    tags: ['Banks'],
    summary: 'List all arbitrary key-value pairs on a transaction',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transaction: z
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
              description: '',
              in: 'path',
              name: 'id_transaction',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'transactioninformations',
        content: {
          'application/json': {
            schema: z
              .object({
                total: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'total number of results' }),
                transactioninformations: z.array(TransactionInformationSchema),
              })
              .openapi({ required: ['transactioninformations'] }),
          },
        },
      },
    },
  })

export const putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute =
  createRoute({
    method: 'put',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations',
    tags: ['Banks'],
    summary: 'Add or edit transaction arbitrary key-value pairs',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transaction: z
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
              description: '',
              in: 'path',
              name: 'id_transaction',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful PUT on TransactionInformation resource',
        content: { 'application/json': { schema: TransactionInformationSchema } },
      },
    },
  })

export const deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute =
  createRoute({
    method: 'delete',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations',
    tags: ['Banks'],
    summary: 'Delete all arbitrary key-value pairs of a transaction',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transaction: z
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
              description: '',
              in: 'path',
              name: 'id_transaction',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful DELETE on TransactionInformation resource',
        content: { 'application/json': { schema: TransactionInformationSchema } },
      },
    },
  })

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute =
  createRoute({
    method: 'get',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations/{id_information}',
    tags: ['Banks'],
    summary: 'Get a particular arbitrary key-value pair on a transaction',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transaction: z
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
              description: '',
              in: 'path',
              name: 'id_transaction',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_information: z
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
              description: '',
              in: 'path',
              name: 'id_information',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful GET on TransactionInformation resource',
        content: { 'application/json': { schema: TransactionInformationSchema } },
      },
    },
  })

export const deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute =
  createRoute({
    method: 'delete',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactions/{id_transaction}/informations/{id_information}',
    tags: ['Banks'],
    summary: 'Delete a particular key-value pair on a transaction.',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transaction: z
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
              description: '',
              in: 'path',
              name: 'id_transaction',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_information: z
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
              description: '',
              in: 'path',
              name: 'id_information',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful DELETE on TransactionInformation resource',
        content: { 'application/json': { schema: TransactionInformationSchema } },
      },
    },
  })

export const getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute =
  createRoute({
    method: 'get',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters',
    tags: ['Banks'],
    summary: 'Get clustered transactions',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'transactionsclusters',
        content: {
          'application/json': {
            schema: z
              .object({
                total: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'total number of results' }),
                transactionsclusters: z.array(TransactionsClusterSchema),
              })
              .openapi({ required: ['transactionsclusters'] }),
          },
        },
      },
    },
  })

export const postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute =
  createRoute({
    method: 'post',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters',
    tags: ['Banks'],
    summary: 'Create clustered transaction',
    description:
      'Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful POST on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute =
  createRoute({
    method: 'put',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}',
    tags: ['Banks'],
    summary: 'Edit a clustered transaction',
    description:
      'Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transactionscluster: z
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
              description: '',
              in: 'path',
              name: 'id_transactionscluster',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful PUT on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute =
  createRoute({
    method: 'delete',
    path: '/users/{id_user}/connections/{id_connection}/accounts/{id_account}/transactionsclusters/{id_transactionscluster}',
    tags: ['Banks'],
    summary: 'Delete a clustered transaction',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_account: z
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
              description: '',
              in: 'path',
              name: 'id_account',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transactionscluster: z
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
              description: '',
              in: 'path',
              name: 'id_transactionscluster',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful DELETE on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const getUsersIdUserConnectionsIdConnectionInformationsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/informations',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection additionnal informations',
  description: '<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connections',
      content: {
        'application/json': {
          schema: z
            .object({
              connections: z.array(ConnectionSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connections'] }),
        },
      },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionLogsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/logs',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection logs',
  description: 'Get logs about connections.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'period to group logs',
            in: 'query',
            name: 'period',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_user: z
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
            description: 'ID of a user',
            in: 'query',
            name: 'id_user',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connection: z
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
            description: 'ID of a connection',
            in: 'query',
            name: 'id_connection',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connector: z
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
            description: 'ID of a connector',
            in: 'query',
            name: 'id_connector',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      connector_uuid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'UUID of a connector',
            in: 'query',
            name: 'connector_uuid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'connections log error filter',
            in: 'query',
            name: 'error',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_source: z
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
            description: 'ID of a source',
            in: 'query',
            name: 'id_source',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_max: z
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
            description: 'filter "id" of logs, maximum id to return',
            in: 'query',
            name: 'id_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectionlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              connectionlogs: z.array(ConnectionLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectionlogs'] }),
        },
      },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionSourcesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/sources',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection sources',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sources',
      content: {
        'application/json': {
          schema: z
            .object({
              sources: z.array(ConnectionSourceSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['sources'] }),
        },
      },
    },
  },
})

export const putUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute = createRoute({
  method: 'put',
  path: '/users/{id_user}/connections/{id_connection}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Update connection source',
  description: 'This endpoint is used to enable a source or force a synchronization on it.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'do the synchronization in background (to use with the synchronize parameter)',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: PutConnectionsIdConnectionSourcesIdSourceRequestBody,
  },
  responses: {
    200: {
      description: 'Successful PUT on ConnectionSource resource',
      content: { 'application/json': { schema: ConnectionSourceSchema } },
    },
  },
})

export const postUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/connections/{id_connection}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: '"',
  description: 'This endpoint is used to enable a source or force a synchronization on it.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      background: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'do the synchronization in background (to use with the sysynchronizenc parameter)',
            in: 'query',
            name: 'background',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: PostConnectionsIdConnectionSourcesIdSourceRequestBody,
  },
  responses: {
    200: {
      description: 'Successful POST on ConnectionSource resource',
      content: { 'application/json': { schema: ConnectionSourceSchema } },
    },
  },
})

export const deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/connections/{id_connection}/sources/{id_source}',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Disable a connection source',
  description:
    'This will make it so the specified source will not be synchronized anymore.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      id_source: z
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
            description: '',
            in: 'path',
            name: 'id_source',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on ConnectionSource resource',
      content: { 'application/json': { schema: ConnectionSourceSchema } },
    },
  },
})

export const getUsersIdUserConnectionsIdConnectionTransactionsclustersRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/connections/{id_connection}/transactionsclusters',
  tags: ['Banks'],
  summary: 'Get clustered transactions',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transactionsclusters',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              transactionsclusters: z.array(TransactionsClusterSchema),
            })
            .openapi({ required: ['transactionsclusters'] }),
        },
      },
    },
  },
})

export const postUsersIdUserConnectionsIdConnectionTransactionsclustersRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/connections/{id_connection}/transactionsclusters',
  tags: ['Banks'],
  summary: 'Create clustered transaction',
  description:
    'Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_connection: z
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
            description: '',
            in: 'path',
            name: 'id_connection',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on TransactionsCluster resource',
      content: { 'application/json': { schema: TransactionsClusterSchema } },
    },
  },
})

export const putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute =
  createRoute({
    method: 'put',
    path: '/users/{id_user}/connections/{id_connection}/transactionsclusters/{id_transactionscluster}',
    tags: ['Banks'],
    summary: 'Edit a clustered transaction',
    description:
      'Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transactionscluster: z
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
              description: '',
              in: 'path',
              name: 'id_transactionscluster',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful PUT on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute =
  createRoute({
    method: 'delete',
    path: '/users/{id_user}/connections/{id_connection}/transactionsclusters/{id_transactionscluster}',
    tags: ['Banks'],
    summary: 'Delete a clustered transaction',
    request: {
      params: z.object({
        id_user: z
          .string()
          .openapi({
            param: {
              description: "Hint: you can use 'me' or 'all'",
              in: 'path',
              name: 'id_user',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id_connection: z
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
              description: '',
              in: 'path',
              name: 'id_connection',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        id_transactionscluster: z
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
              description: '',
              in: 'path',
              name: 'id_transactionscluster',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful DELETE on TransactionsCluster resource',
        content: { 'application/json': { schema: TransactionsClusterSchema } },
      },
    },
  })

export const getUsersIdUserForecastRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/forecast',
  tags: ['Banks', 'PFM'],
  summary: 'Get forecast',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getUsersIdUserLogsRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/logs',
  tags: ['Connections', 'Banks', 'Providers'],
  summary: 'Get connection logs',
  description: 'Get logs about connections.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'period to group logs',
            in: 'query',
            name: 'period',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_user: z
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
            description: 'ID of a user',
            in: 'query',
            name: 'id_user',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connection: z
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
            description: 'ID of a connection',
            in: 'query',
            name: 'id_connection',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_connector: z
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
            description: 'ID of a connector',
            in: 'query',
            name: 'id_connector',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      connector_uuid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'UUID of a connector',
            in: 'query',
            name: 'connector_uuid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      error: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'connections log error filter',
            in: 'query',
            name: 'error',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id_source: z
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
            description: 'ID of a source',
            in: 'query',
            name: 'id_source',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      id_max: z
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
            description: 'filter "id" of logs, maximum id to return',
            in: 'query',
            name: 'id_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'connectionlogs',
      content: {
        'application/json': {
          schema: z
            .object({
              connectionlogs: z.array(ConnectionLogSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['connectionlogs'] }),
        },
      },
    },
  },
})

export const getUsersIdUserProfilesRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/profiles',
  tags: ['Users management', 'PFM'],
  summary: 'Get profiles',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'profiles',
      content: {
        'application/json': {
          schema: z
            .object({
              profiles: z.array(ProfileSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['profiles'] }),
        },
      },
    },
  },
})

export const getUsersIdUserProfilesMainRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/profiles/main',
  tags: ['Users management', 'PFM'],
  summary: 'Get the main profile',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Profile resource',
      content: { 'application/json': { schema: ProfileSchema } },
    },
  },
})

export const getUsersIdUserProfilesIdProfileRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/profiles/{id_profile}',
  tags: ['Users management', 'PFM'],
  summary: 'Get a profile',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_profile: z
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
            description: '',
            in: 'path',
            name: 'id_profile',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Profile resource',
      content: { 'application/json': { schema: ProfileSchema } },
    },
  },
})

export const postUsersIdUserTokenRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/token',
  tags: ['Users management', 'Authentication'],
  summary: 'Create a token',
  description: 'Create an access_token for this user and get it.<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ application: z.string().openapi({ description: 'application name' }) })
            .openapi({ required: ['application'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.object({}).openapi({ required: ['token'] }) } },
    },
  },
})

export const getUsersIdUserTransactionsclustersRoute = createRoute({
  method: 'get',
  path: '/users/{id_user}/transactionsclusters',
  tags: ['Banks'],
  summary: 'Get clustered transactions',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transactionsclusters',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              transactionsclusters: z.array(TransactionsClusterSchema),
            })
            .openapi({ required: ['transactionsclusters'] }),
        },
      },
    },
  },
})

export const postUsersIdUserTransactionsclustersRoute = createRoute({
  method: 'post',
  path: '/users/{id_user}/transactionsclusters',
  tags: ['Banks'],
  summary: 'Create clustered transaction',
  description:
    'Form params : - next_date (date) required: Date of transaction - mean_amount (decimal) required: Mean Amount - wording (string) required: name of transaction - id_account (id) required: related account<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on TransactionsCluster resource',
      content: { 'application/json': { schema: TransactionsClusterSchema } },
    },
  },
})

export const putUsersIdUserTransactionsclustersIdTransactionsclusterRoute = createRoute({
  method: 'put',
  path: '/users/{id_user}/transactionsclusters/{id_transactionscluster}',
  tags: ['Banks'],
  summary: 'Edit a clustered transaction',
  description:
    'Form params : - next_date (date): Date of transaction - mean_amount (decimal): Mean Amount - wording (string): name of transaction - id_account (id): related account - id_category (id): related category - enabled (bool): is enabled<br><br>',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_transactionscluster: z
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
            description: '',
            in: 'path',
            name: 'id_transactionscluster',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful PUT on TransactionsCluster resource',
      content: { 'application/json': { schema: TransactionsClusterSchema } },
    },
  },
})

export const deleteUsersIdUserTransactionsclustersIdTransactionsclusterRoute = createRoute({
  method: 'delete',
  path: '/users/{id_user}/transactionsclusters/{id_transactionscluster}',
  tags: ['Banks'],
  summary: 'Delete a clustered transaction',
  request: {
    params: z.object({
      id_user: z
        .string()
        .openapi({
          param: {
            description: "Hint: you can use 'me' or 'all'",
            in: 'path',
            name: 'id_user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id_transactionscluster: z
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
            description: '',
            in: 'path',
            name: 'id_transactionscluster',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on TransactionsCluster resource',
      content: { 'application/json': { schema: TransactionsClusterSchema } },
    },
  },
})

export const getWebauthRoute = createRoute({
  method: 'get',
  path: '/webauth',
  tags: ['Authentication', 'Transfer'],
  summary: 'First step to establish an oAuth2 connection.',
  description:
    'The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              client_id: z
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
                .openapi({ description: 'Client Application ID' }),
              id_transfer: z
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
                .openapi({ description: 'ID of the transfer' }),
              redirect_uri: z.string().exactOptional().openapi({ description: 'Redirect URI' }),
              state: z.string().exactOptional().openapi({ description: 'Optional state' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'standard HTTP response' } },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Administration'],
  summary: 'Get webhooks',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'webhooks',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              webhooks: z.array(WebhookSchema),
            })
            .openapi({ required: ['webhooks'] }),
        },
      },
    },
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Administration'],
  summary: 'Adds a new webhook',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              event: z.string().exactOptional().openapi({ description: 'The webhook event' }),
              id_auth: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The webhook authentication process to use (its ID or its name)',
                }),
              id_service: z
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
                .openapi({ description: 'The service ID to associate with the webhook' }),
              id_user: z
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
                .openapi({ description: 'The user ID to associate with the webhook' }),
              params: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The webhook parameters as an object with three keys: type, key and value',
                }),
              url: z.string().exactOptional().openapi({ description: 'The webhook callback url' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful POST on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const deleteWebhooksRoute = createRoute({
  method: 'delete',
  path: '/webhooks',
  tags: ['Administration'],
  summary: 'Deletes all webhooks',
  description: 'Updates the deleted field with the date of the deletion<br><br>',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const getWebhooksAuthRoute = createRoute({
  method: 'get',
  path: '/webhooks/auth',
  tags: ['Administration'],
  summary: 'Get webhooks authentication types',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'authproviders',
      content: {
        'application/json': {
          schema: z
            .object({
              authproviders: z.array(AuthProviderSchema),
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
            })
            .openapi({ required: ['authproviders'] }),
        },
      },
    },
  },
})

export const postWebhooksAuthRoute = createRoute({
  method: 'post',
  path: '/webhooks/auth',
  tags: ['Administration'],
  summary: 'Adds a new webhook authentication type',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              config: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The authentication process configuration. A dict contains either the certificate',
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the authentication process to differentiate',
                }),
              type: z
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
                  description:
                    'The type of the authentication process (oauth, certificate, token, etc...)',
                }),
            })
            .openapi({ required: ['type', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful POST on AuthProvider resource',
      content: { 'application/json': { schema: AuthProviderSchema } },
    },
  },
})

export const deleteWebhooksAuthRoute = createRoute({
  method: 'delete',
  path: '/webhooks/auth',
  tags: ['Administration'],
  summary: 'Deletes all webhook authentication types',
  request: {
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on AuthProvider resource',
      content: { 'application/json': { schema: AuthProviderSchema } },
    },
  },
})

export const putWebhooksAuthIdAuthRoute = createRoute({
  method: 'put',
  path: '/webhooks/auth/{id_auth}',
  tags: ['Administration'],
  summary: 'Updates the webhook authentication type',
  request: {
    params: z.object({
      id_auth: z
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
            description: '',
            in: 'path',
            name: 'id_auth',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              config: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The authentication process configuration. A dict containt either the certificate',
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the authentication process to differentiate',
                }),
              type: z
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
                  description:
                    'The type of the authentication process (oauth, certificate, token, etc...)',
                }),
            })
            .openapi({ required: ['type', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful PUT on AuthProvider resource',
      content: { 'application/json': { schema: AuthProviderSchema } },
    },
  },
})

export const postWebhooksAuthIdAuthRoute = createRoute({
  method: 'post',
  path: '/webhooks/auth/{id_auth}',
  tags: ['Administration'],
  summary: 'Updates the webhook authentication type',
  request: {
    params: z.object({
      id_auth: z
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
            description: '',
            in: 'path',
            name: 'id_auth',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              config: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The authentication process configuration. A dict containing either the certificate',
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the authentication process to differentiate',
                }),
              type: z
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
                  description:
                    'The type of the authentication process (oauth, certificate, token, etc...)',
                }),
            })
            .openapi({ required: ['type', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful POST on AuthProvider resource',
      content: { 'application/json': { schema: AuthProviderSchema } },
    },
  },
})

export const deleteWebhooksAuthIdAuthRoute = createRoute({
  method: 'delete',
  path: '/webhooks/auth/{id_auth}',
  tags: ['Administration'],
  summary: 'Deletes the webhook authentication type',
  description: 'Updates the deleted field with the date of the deletion<br><br>',
  request: {
    params: z.object({
      id_auth: z
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
            description: '',
            in: 'path',
            name: 'id_auth',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on AuthProvider resource',
      content: { 'application/json': { schema: AuthProviderSchema } },
    },
  },
})

export const putWebhooksIdWebhookRoute = createRoute({
  method: 'put',
  path: '/webhooks/{id_webhook}',
  tags: ['Administration'],
  summary: 'Updates a webhook',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: PostWebhooksIdWebhookRequestBody,
  },
  responses: {
    200: {
      description: 'Successful PUT on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const postWebhooksIdWebhookRoute = createRoute({
  method: 'post',
  path: '/webhooks/{id_webhook}',
  tags: ['Administration'],
  summary: 'Updates a webhook',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
    body: PostWebhooksIdWebhookRequestBody,
  },
  responses: {
    200: {
      description: 'Successful POST on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const deleteWebhooksIdWebhookRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id_webhook}',
  tags: ['Administration'],
  summary: 'Deletes a webhook',
  description: 'Updates the deleted field with the date of the deletion<br><br>',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const getWebhooksIdWebhookAddToDataRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id_webhook}/add_to_data',
  tags: ['Administration'],
  summary: 'retrieve the list of the value to add in webhooks when sending the requested webhook',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'webhooks',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              webhooks: z.array(WebhookSchema),
            })
            .openapi({ required: ['webhooks'] }),
        },
      },
    },
  },
})

export const postWebhooksIdWebhookAddToDataRoute = createRoute({
  method: 'post',
  path: '/webhooks/{id_webhook}/add_to_data',
  tags: ['Administration'],
  summary: 'Setup a field to store in user config when calling the endpoint',
  description:
    'For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const deleteWebhooksIdWebhookAddToDataRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id_webhook}/add_to_data',
  tags: ['Administration'],
  summary: 'delete all entries',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const getWebhooksIdWebhookAddToDataKeyRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id_webhook}/add_to_data/{key}',
  tags: ['Administration'],
  summary: 'retrieve the value to add in the requested webhook for the requested name',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful GET on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const postWebhooksIdWebhookAddToDataKeyRoute = createRoute({
  method: 'post',
  path: '/webhooks/{id_webhook}/add_to_data/{key}',
  tags: ['Administration'],
  summary: 'upate the requested field to store in user config when calling the endpoint',
  description:
    'For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful POST on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const deleteWebhooksIdWebhookAddToDataKeyRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id_webhook}/add_to_data/{key}',
  tags: ['Administration'],
  summary: 'delete the requested entry',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful DELETE on Webhook resource',
      content: { 'application/json': { schema: WebhookSchema } },
    },
  },
})

export const getWebhooksIdWebhookLogsRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id_webhook}/logs',
  tags: ['Administration'],
  summary: 'Get webhooks logs.',
  description:
    'Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>',
  request: {
    params: z.object({
      id_webhook: z
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
            description: '',
            in: 'path',
            name: 'id_webhook',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      id_user: z
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
            description: 'limit number of results to this user',
            in: 'query',
            name: 'id_user',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      limit: z
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
            description: 'limit number of results',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      offset: z
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
            description: 'offset of first result',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      min_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimal (inclusive) date',
            in: 'query',
            name: 'min_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      max_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum (inclusive) date',
            in: 'query',
            name: 'max_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      expand: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'expand', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'webhooklogs',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.number().exactOptional().openapi({ description: 'total number of results' }),
              webhooklogs: z.array(WebhookLogSchema),
            })
            .openapi({ required: ['webhooklogs'] }),
        },
      },
    },
  },
})
