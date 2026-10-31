import { createRoute, z } from '@hono/zod-openapi'

const ScanProfileSchema = z
  .enum(['safe', 'normal', 'full', 'lightning'])
  .default('normal')
  .openapi({
    description:
      "* lightning - fast simple scan\n* normal - default profile\n* full - does everything the default profile does and adds boolean based\nSQL injection tests\n* safe - doesn't use any content changing methods (no POST, DELETE, etc)\nand tries fewer payloads for SQL injection tests\n",
    example: 'normal',
  })
  .openapi('ScanProfile')

const ChangedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Date time of the last change',
    example: '2018-01-31T16:32:17.238553Z',
    readOnly: true,
  })
  .openapi('Changed')

const UserEmailSchema = z
  .string()
  .openapi({
    description:
      "User's email (changing this resets the user's password and revokes existing tokens)",
    example: 'example@probely.com',
  })
  .openapi('UserEmail')

const UserIdSchema = z
  .string()
  .openapi({ description: "User's id", example: 'jMXUw-BE_2vd' })
  .openapi('UserId')

const UserNameSchema = z
  .string()
  .openapi({ description: "User's name", example: 'Henrique Cimento' })
  .openapi('UserName')

const ChangedBySchema = z
  .object({
    email: UserEmailSchema.exactOptional(),
    id: UserIdSchema.exactOptional(),
    name: UserNameSchema.exactOptional(),
  })
  .openapi({ description: 'User that last modified the object', readOnly: true, required: [] })
  .openapi('ChangedBy')

const CookiesSchema = z
  .array(
    z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Cookie name.', example: 'cookie_1' }),
        value: z
          .string()
          .exactOptional()
          .openapi({ description: 'Cookie value.', example: 'cookie_value' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Custom cookies name/value pairs' })
  .openapi('Cookies')

const DescSchema = z
  .string()
  .default('')
  .openapi({ description: 'Custom description for the resource', example: 'Object description' })
  .openapi('Desc')

const HeadersSchema = z
  .array(
    z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Header name.', example: 'X-Custom-Header' }),
        value: z
          .string()
          .exactOptional()
          .openapi({ description: 'Header value.', example: 'XXXXX' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Custom headers name value pairs' })
  .openapi('Headers')

const HostSchema = z.string().openapi({ description: 'Fully qualified hostname' }).openapi('Host')

const IdSchema = z
  .string()
  .openapi({ description: 'Object id.', example: 'jMXUw-BE_2vd', readOnly: true })
  .openapi('Id')

const IncludeSchema = z
  .boolean()
  .openapi({ description: 'Use this asset in scans.' })
  .openapi('Include')

const NameSchema = z
  .string()
  .default('')
  .openapi({ description: 'Custom name for the resource', example: 'Object name' })
  .openapi('Name')

const FrameworkNamesSchema = z
  .string()
  .openapi({ description: 'Framework/Software name.', example: 'nginx' })
  .openapi('FrameworkNames')

const StackSchema = z
  .array(FrameworkNamesSchema)
  .openapi({ description: 'List of frameworks detected on this resource', readOnly: true })
  .openapi('Stack')

const VerificationDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Verification date time',
    example: '2018-01-31T16:32:52.226652Z',
    readOnly: true,
  })
  .openapi('VerificationDate')

const VerificationLastErrorSchema = z
  .string()
  .openapi({ description: 'Reason for last verification failure.', readOnly: true })
  .openapi('VerificationLastError')

const VerificationMethodSchema = z
  .enum(['dns', 'file'])
  .openapi({
    description:
      'Type of verification:\n* dns - we look or a TXT record on the host you registered containing\n`Probely=<verification_token>`\n* file - on the root of the path you registered we look for a file\nnamed `<verification token>` containing `Probely`.\n',
    readOnly: true,
  })
  .openapi('VerificationMethod')

const VerificationTokenSchema = z
  .string()
  .openapi({
    description: 'Token used to verify',
    example: 'a38351cb-ede8-4dc8-9366-80d3a7042d9a',
    readOnly: true,
  })
  .openapi('VerificationToken')

const VerifiedSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Has resource ownership been verified', readOnly: true })
  .openapi('Verified')

const AssetSchema = z
  .object({
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    cookies: CookiesSchema.exactOptional(),
    desc: DescSchema.exactOptional(),
    headers: HeadersSchema.exactOptional(),
    host: HostSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    include: IncludeSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    stack: StackSchema.exactOptional(),
    verification_date: VerificationDateSchema.exactOptional(),
    verification_last_error: VerificationLastErrorSchema.exactOptional(),
    verification_method: VerificationMethodSchema.exactOptional(),
    verification_token: VerificationTokenSchema.exactOptional(),
    verified: VerifiedSchema.exactOptional(),
  })
  .openapi({ description: 'Secondary domain of a target', required: [] })
  .openapi('Asset')

const ConnectedTargetSchema = z
  .string()
  .openapi({ description: 'Id of the connected target in a multi-environment targets.\n' })
  .openapi('ConnectedTarget')

const EnabledSchema = z
  .boolean()
  .openapi({
    description:
      "Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.\n",
    readOnly: true,
  })
  .openapi('Enabled')

const EnvironmentSchema = z
  .enum(['testing', 'production'])
  .default('testing')
  .openapi({
    description: 'Multi-environment targets can identify environments using this property.\n',
  })
  .openapi('Environment')

const ReportTypeSchema = z
  .enum(['default', 'owasp', 'pci'])
  .openapi({
    description:
      '* default - default report, no extra information added\n* owasp - adds table on OWASP Top 10 most critical web application risks\n* pci - adds table on PCI requirements\n',
  })
  .openapi('ReportType')

const PasswordSchema = z.string().openapi({ example: 'dolphins' }).openapi('Password')

const BasicAuthUsernameSchema = z
  .string()
  .openapi({ description: 'Username', example: 'probely' })
  .openapi('BasicAuthUsername')

const BasicAuthSchema = z
  .object({
    password: PasswordSchema.exactOptional(),
    username: BasicAuthUsernameSchema.exactOptional(),
  })
  .openapi({ description: 'Basic authentication credentials', required: [] })
  .openapi('BasicAuth')

const FormLoginSchema = z
  .array(
    z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Field name/id', example: 'username' }),
        value: z
          .string()
          .exactOptional()
          .openapi({ description: 'Field input', example: 'probely' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Form login field name, field input pairs' })
  .openapi('FormLogin')

const FormLoginCheckPatternSchema = z
  .string()
  .default('')
  .openapi({ description: 'Pattern to check successful authentication (not used)' })
  .openapi('FormLoginCheckPattern')

const FormLoginUrlSchema = z
  .string()
  .default('')
  .openapi({ description: 'URL for the form login', example: 'https://app.probely.com/' })
  .openapi('FormLoginUrl')

const HasBasicAuthSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Use basic authentication in scan', example: true })
  .openapi('HasBasicAuth')

const HasFormLoginSchema = z
  .boolean()
  .default(false)
  .openapi({ description: 'Does the resource use form login', example: true })
  .openapi('HasFormLogin')

const SiteHostSchema = z
  .string()
  .default('')
  .openapi({ description: 'Site host', example: 'app.probely.com', readOnly: true })
  .openapi('SiteHost')

const SiteUrlSchema = z
  .string()
  .default('')
  .openapi({
    description:
      'Site URL, it should include the path if the site is not located at the root. This URL can only be set once.\n',
    example: 'https://app.probely.com',
  })
  .openapi('SiteUrl')

const WhitelistSchema = z
  .array(
    z
      .string()
      .openapi({
        description: 'Paths that the spider should visit that are not directly accessible\n',
        example: '/private/path/',
      }),
  )
  .openapi('Whitelist')

const SiteSchema = z
  .object({
    basic_auth: BasicAuthSchema.exactOptional(),
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    cookies: CookiesSchema.exactOptional(),
    desc: DescSchema.exactOptional(),
    form_login: FormLoginSchema.exactOptional(),
    form_login_check_pattern: FormLoginCheckPatternSchema.exactOptional(),
    form_login_url: FormLoginUrlSchema.exactOptional(),
    has_basic_auth: HasBasicAuthSchema.exactOptional(),
    has_form_login: HasFormLoginSchema.exactOptional(),
    headers: HeadersSchema.exactOptional(),
    host: SiteHostSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    stack: StackSchema.exactOptional(),
    url: SiteUrlSchema.exactOptional(),
    verification_date: VerificationDateSchema.exactOptional(),
    verification_last_error: VerificationLastErrorSchema.exactOptional(),
    verification_method: VerificationMethodSchema.exactOptional(),
    verification_token: VerificationTokenSchema.exactOptional(),
    verified: VerifiedSchema.exactOptional(),
    whitelist: WhitelistSchema.exactOptional(),
  })
  .openapi({ description: 'Main resource associated with a target', required: [] })
  .openapi('Site')

const TargetTypeSchema = z
  .enum(['free', 'single', 'multi'])
  .default('single')
  .openapi({
    description:
      'The type of a target determines what the limitations imposed on a\ntarget.\n* free - Every account is allowed to have 5 free targets, these targets\ndo not need to be verified but can only perform lightning\nscans.\n* single - Single environment targets need to be verified but are\nallowed to run any type of scan allowed by the plan.\n* multi - Multi environment targets are used when you want\nto scan the same application in different environments.\n',
  })
  .openapi('TargetType')

type TargetType = {
  allowed_scan_profiles?: { id?: z.infer<typeof ScanProfileSchema>; name?: string }[]
  assets?: z.infer<typeof AssetSchema>[]
  changed?: z.infer<typeof ChangedSchema>
  changed_by?: z.infer<typeof ChangedBySchema>
  connected_target?: z.infer<typeof ConnectedTargetSchema>
  enabled?: z.infer<typeof EnabledSchema>
  environment?: z.infer<typeof EnvironmentSchema>
  id?: z.infer<typeof IdSchema>
  labels?: string[]
  name?: z.infer<typeof NameSchema>
  report_type?: z.infer<typeof ReportTypeSchema>
  scan_profile?: z.infer<typeof ScanProfileSchema>
  site?: z.infer<typeof SiteSchema>
  type?: z.infer<typeof TargetTypeSchema>
}

const TokenSchema = z
  .string()
  .openapi({
    description: 'Authentication token',
    example:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk',
    readOnly: true,
  })
  .openapi('Token')

const APIKeySchema = z
  .object({
    id: IdSchema.exactOptional(),
    key: TokenSchema.exactOptional(),
    name: NameSchema.exactOptional(),
  })
  .openapi({ description: 'API Key object', required: [] })
  .openapi('APIKey')

const AccountAutoCollectionSchema = z
  .enum(['on', 'off'])
  .openapi({
    description: 'Collection for the next billing period is autommatic/manual',
    example: 'on',
    readOnly: true,
  })
  .openapi('AccountAutoCollection')

const AccountBalanceSchema = z
  .int()
  .openapi({ description: 'Account balance in cents', example: 0 })
  .openapi('AccountBalance')

const CurrencyCodeSchema = z
  .string()
  .openapi({ description: '3 letter currency code', example: 'EUR' })
  .openapi('CurrencyCode')

const FreeTargetQuantitySchema = z
  .int()
  .openapi({ description: 'Number of free targets', example: 3 })
  .openapi('FreeTargetQuantity')

const HasUsedTrialSchema = z
  .boolean()
  .openapi({ description: "Has account used up it's trial", example: true })
  .openapi('HasUsedTrial')

const AccountNextBillingAtSchema = z.iso
  .date()
  .openapi({
    description: 'Date of next billing',
    example: '2018-01-31T16:32:17.238553Z',
    readOnly: true,
  })
  .openapi('AccountNextBillingAt')

const PlanAllowedScanProfilesSchema = z
  .array(z.string().openapi({ example: 'normal' }))
  .openapi({ description: 'List of scan profiles allowed by the plan' })
  .openapi('PlanAllowedScanProfiles')

const PlanChargeModelSchema = z
  .enum(['per_unit', 'flat_fee'])
  .openapi({
    description:
      '* per_unit - each target is paid independently\n* flat_fee - targets are paid as a pool\n',
    example: 'per_unit',
    readOnly: true,
  })
  .openapi('PlanChargeModel')

const PlanIsTrialSchema = z
  .boolean()
  .openapi({ description: 'Is this a trial plan', example: false })
  .openapi('PlanIsTrial')

const BillingPeriodSchema = z
  .string()
  .openapi({ description: 'Number of of period unit between charges', example: 1 })
  .openapi('BillingPeriod')

const BillingPeriodUnitSchema = z
  .enum(['month', 'year'])
  .openapi({ description: 'Unit of billing period' })
  .openapi('BillingPeriodUnit')

const PriceSchema = z
  .int()
  .openapi({ description: 'Price in cents', example: 5000 })
  .openapi('Price')

const PlanSchema = z
  .object({
    allowed_scan_profiles: PlanAllowedScanProfilesSchema.exactOptional(),
    charge_model: PlanChargeModelSchema.exactOptional(),
    currency_code: CurrencyCodeSchema.exactOptional(),
    description: DescSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    is_trial: PlanIsTrialSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    period: BillingPeriodSchema.exactOptional(),
    period_unit: BillingPeriodUnitSchema.exactOptional(),
    price: PriceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Plan')

const PlanTargetQuantitySchema = z
  .int()
  .openapi({ description: 'Number of subscribed targets', example: 3 })
  .openapi('PlanTargetQuantity')

const PoolSizeSchema = z
  .int()
  .openapi({ description: 'Maximum number of subscribed target for pool plans', example: 5 })
  .openapi('PoolSize')

const AccountStatusSchema = z
  .enum(['active', 'trial_ended', 'canceled'])
  .openapi({
    description:
      '* active - active subscription, either trial or paying\n* trial_ended - trial ended and subscription was discontinued\n* canceled - subscription canceled\n',
    example: 'active',
    readOnly: true,
  })
  .openapi('AccountStatus')

const TrialEndSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Trial termination date', example: '2018-01-31T16:32:52.226652Z' })
  .openapi('TrialEnd')

const AccountSchema = z
  .object({
    auto_collection: AccountAutoCollectionSchema.exactOptional(),
    balance: AccountBalanceSchema.exactOptional(),
    balance_currency_code: CurrencyCodeSchema.exactOptional(),
    free_target_quantity: FreeTargetQuantitySchema.exactOptional(),
    has_used_trial: HasUsedTrialSchema.exactOptional(),
    heroku: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Heroku accounts (for future use)' }),
    next_billing_at: AccountNextBillingAtSchema.exactOptional(),
    plan: PlanSchema.exactOptional(),
    plan_target_quantity: PlanTargetQuantitySchema.exactOptional(),
    pool_size: PoolSizeSchema.exactOptional(),
    status: AccountStatusSchema.exactOptional(),
    trialEnd: TrialEndSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Account')

const ActionSchema = z
  .object({
    action: z
      .union([z.literal(null), z.literal('trial'), z.literal('plan'), z.literal('subscribe')])
      .exactOptional()
      .openapi({
        description:
          'Action to enable targets:\n* null - no action required\n* trial - start a trial\n* plan - select a plan to subscribe\n* subscribe - add target to subscribed plan\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('Action')

const ActionsSchema = z
  .array(
    z
      .object({
        action: z
          .enum([
            'edit',
            'delete',
            'trial',
            'plan',
            'subscribe',
            'unsubscribe',
            'archive',
            'activate',
          ])
          .exactOptional()
          .openapi({
            description:
              'Actions are:\n* edit - edit target\n* delete - delete target\n* trial - start a trial with this target\n* plan - select a subscipition plan with this target\n* subscribe - add target to subscribed plan\n* unsubscribe - remove target from subscription\n* archive - archive target\n* activate - unarchive target\n',
          }),
        label: z.string().exactOptional().openapi({ description: 'Label or the action' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Actions')

const ActivitySchema = z
  .object({
    change: z
      .union([z.literal('created'), z.literal('comment'), z.literal('found'), z.literal('changed')])
      .exactOptional()
      .openapi({
        description:
          'Type of change:\n  * created - First time the issue is found\n  * comment - User left a comment in the timeline\n  * found - Found again in a later scan\n  * changed - One of the parameters of the finding was changed\n   (e.g. severity)\n',
      }),
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    field: z.string().exactOptional().openapi({ description: 'Field that was changed' }),
    old_value: z.string().exactOptional().openapi({ description: 'Previous value' }),
    value: z.string().exactOptional().openapi({ description: 'New value' }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const AssigneeSchema = z
  .object({
    email: UserEmailSchema.exactOptional(),
    id: UserIdSchema.exactOptional(),
    name: UserNameSchema.exactOptional(),
  })
  .openapi({ description: 'Assigned user', required: [] })
  .openapi('Assignee')

const AddressSchema = z.string().openapi({ description: 'Address' }).openapi('Address')

const CitySchema = z.string().openapi({ description: 'City', example: 'Munich' }).openapi('City')

const CountrySchema = z
  .string()
  .openapi({ description: 'ISO 3166 alpha-2 country code', example: 'DE' })
  .openapi('Country')

const EmailSchema = z.string().openapi({ description: 'Contact email' }).openapi('Email')

const FirstNameSchema = z.string().openapi({ description: 'First name' }).openapi('FirstName')

const LastNameSchema = z.string().openapi({ description: 'Last name' }).openapi('LastName')

const RegistrationNumberSchema = z
  .string()
  .openapi({ description: 'Company registration number' })
  .openapi('RegistrationNumber')

const VatSchema = z
  .string()
  .openapi({ description: 'Company VAT registration number' })
  .openapi('Vat')

const ZipCodeSchema = z.string().openapi({ description: 'Address ZIP code' }).openapi('ZipCode')

const BillingSchema = z
  .object({
    address: AddressSchema,
    city: CitySchema,
    country: CountrySchema,
    email: EmailSchema,
    first_name: FirstNameSchema,
    last_name: LastNameSchema,
    other: z.string().exactOptional().openapi({ description: 'Extra data' }),
    reg_number: RegistrationNumberSchema.exactOptional(),
    vat_number: VatSchema,
    zip: ZipCodeSchema,
  })
  .openapi({
    required: [
      'country',
      'vat_number',
      'first_name',
      'last_name',
      'city',
      'address',
      'zip',
      'email',
    ],
  })
  .openapi('Billing')

const CreatedBySchema = z
  .object({
    email: UserEmailSchema.exactOptional(),
    id: UserIdSchema.exactOptional(),
    name: UserNameSchema.exactOptional(),
  })
  .openapi({ description: 'User that created the object', readOnly: true, required: [] })
  .openapi('CreatedBy')

const DefinitionSchema = z
  .object({
    desc: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vulnerability definition description.' }),
    id: z.string().exactOptional().openapi({ description: 'Vulnerability definition id.' }),
    name: z.string().exactOptional().openapi({ description: 'Vulnerability definition name.' }),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('Definition')

const UserIsActiveSchema = z
  .boolean()
  .openapi({ description: 'Deleted users are marked as not active' })
  .openapi('UserIsActive')

const UserIsAdminSchema = z
  .boolean()
  .openapi({ description: 'Account admin', readOnly: true })
  .openapi('UserIsAdmin')

const UserIsBillingAdminSchema = z
  .boolean()
  .openapi({ description: 'Billing contact for the account' })
  .openapi('UserIsBillingAdmin')

const UserTitleSchema = z
  .enum(['ceo', 'cto', 'cso', 'seceng', 'dev', 'devop', 'manager', 'other'])
  .openapi('UserTitle')

const UserSchema = z
  .object({
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    email: UserEmailSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    is_active: UserIsActiveSchema.exactOptional(),
    is_admin: UserIsAdminSchema.exactOptional(),
    is_billing_admin: UserIsBillingAdminSchema.exactOptional(),
    name: UserNameSchema.exactOptional(),
    title: UserTitleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const TargetSchema: z.ZodType<TargetType> = z
  .lazy(() =>
    z
      .object({
        allowed_scan_profiles: z
          .array(
            z
              .object({
                id: ScanProfileSchema.exactOptional(),
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Name of the scan profile.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Valid scan profiles for the target.', readOnly: true }),
        assets: z
          .array(AssetSchema)
          .exactOptional()
          .openapi({ description: 'Secondary domains that should be scanned', readOnly: true }),
        changed: ChangedSchema.exactOptional(),
        changed_by: ChangedBySchema.exactOptional(),
        connected_target: ConnectedTargetSchema.exactOptional(),
        enabled: EnabledSchema.exactOptional(),
        environment: EnvironmentSchema.exactOptional(),
        id: IdSchema.exactOptional(),
        labels: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'User labels for the scope. (This feature is currently only available for certain accounts,\nplease contact our support if you are interested in using it)\n',
          }),
        name: NameSchema.exactOptional(),
        report_type: ReportTypeSchema.exactOptional(),
        scan_profile: ScanProfileSchema.exactOptional(),
        site: SiteSchema.exactOptional(),
        type: TargetTypeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Target')

const ScanCompletedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Date time of scan completion',
    example: '2018-01-31T16:32:17.238553Z',
    readOnly: true,
  })
  .openapi('ScanCompleted')

const CreatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Date time of creation',
    example: '2018-01-31T16:32:17.238553Z',
    readOnly: true,
  })
  .openapi('Created')

const ScanStartedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Date time of scan start',
    example: '2018-01-31T16:32:17.238553Z',
    readOnly: true,
  })
  .openapi('ScanStarted')

const ScanStatusSchema = z
  .enum([
    'queued',
    'started',
    'under_review',
    'completed',
    'completed_with_errors',
    'failed',
    'canceled',
    'canceling',
  ])
  .openapi({
    description:
      'Current scan status:\n  * queued - Scan queued to start\n  * started - Scan currently running\n  * under_review - Scan is complete but we need to verify some findings\n  * completed - Scan complete\n  * completed_with_errors - Scan complete with error(s) in non essential modules\n  * failed - Something went seriously wrong during the scan\n  * canceled - Scan was canceled\n  * canceling - Stopping scan\n',
  })
  .openapi('ScanStatus')

const TargetSimpleSchema = z
  .object({
    desc: DescSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    stack: StackSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ description: "Target's site URL" }),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('TargetSimple')

const ScanSchema = z
  .object({
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    completed: ScanCompletedSchema.exactOptional(),
    crawler: z
      .object({
        error: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of possible errors from the crawler' }),
        state: z
          .enum(['started', 'ended'])
          .exactOptional()
          .openapi({ description: 'The current state of the crawler' }),
        status: z
          .object({
            '0': z.int().exactOptional().openapi({ description: 'Number of crawled URLs' }),
            '1': z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of URLs in the queue' }),
          })
          .exactOptional()
          .openapi({
            description: 'The number of crawled URLs and total number of URLs in the queue',
            required: [],
          }),
        warning: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of possible warnings from the crawler' }),
      })
      .exactOptional()
      .openapi({
        description: 'Information on the status of the crawling step of the scanning process',
        required: [],
      }),
    created: CreatedSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    fingerprinter: z
      .object({
        count: z
          .int()
          .exactOptional()
          .openapi({ description: 'The number of detected frameworks/software on the target' }),
        error: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of possible errors from the fingerprinter' }),
        state: z
          .enum(['started', 'ended'])
          .exactOptional()
          .openapi({ description: 'The current state of the fingerprinter' }),
        warning: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of possible warnings from the fingerprinter' }),
      })
      .exactOptional()
      .openapi({
        description: 'Information on the status of the crawling step of the scanning process',
        required: [],
      }),
    highs: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of high severity findings in this scan' }),
    id: IdSchema.exactOptional(),
    lows: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of low severity findings in this scan' }),
    mediums: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of medium severity findings in this scan' }),
    scan_profile: ScanProfileSchema.exactOptional(),
    scanner: z
      .object({
        error: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of possible errors from the scanner' }),
        state: z
          .enum(['started', 'ended'])
          .exactOptional()
          .openapi({ description: 'The current state of the scanner' }),
        status: z
          .object({
            '0': z.int().exactOptional().openapi({ description: 'Number of completed tasks' }),
            '1': z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of tasks in the queue' }),
          })
          .exactOptional()
          .openapi({
            description:
              'The number of scanner tasks completed and total number of tasks in the queue',
            required: [],
          }),
        warning: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of possible warnings from the scanner' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information on the status of the search for vulnerabilities of the scanning process',
        required: [],
      }),
    started: ScanStartedSchema.exactOptional(),
    status: ScanStatusSchema.exactOptional(),
    target: TargetSimpleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Scan')

const FindingCVSSScoreSchema = z
  .float32()
  .openapi({ description: 'CVSS score', example: 6.5, readOnly: true })
  .openapi('FindingCVSSScore')

const FindingCVSSVectorSchema = z
  .string()
  .openapi({
    description: 'CVSS vector',
    example: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N',
    readOnly: true,
  })
  .openapi('FindingCVSSVector')

const FindingInsertionPointSchema = z
  .enum(['cookie', 'header', 'parameter', 'arbitrary_url_param_name', 'url_path_folder', ''])
  .openapi({
    description:
      'An insertion point is the place in the HTTP request where the\nmalicious payload is injected to exploit the vulnerability.\n  * cookie - Payload injected into the value of an HTTP cookie\n  * header - Payload injected into the header of an HTTP request\n  * parameter - Payload injected into the value of a query string\n  parameter\n  * arbitrary_url_param - Payload injected into the value of an\n  arbitrarily added query string parameter\n  * url_filename - Payload injected into the URL filename part\n  * url_folder - Payload injected into the URL folder part\n  * multipart_parameter - Payload is inserted into the value of a\n  parameter attribute within a multi-part message body (such as\n  the name of an uploaded file).\n  * <empty> - No payload to inject.\n',
    readOnly: true,
  })
  .openapi('FindingInsertionPoint')

const MethodSchema = z
  .enum(['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'])
  .openapi({ description: 'HTTP method', readOnly: true })
  .openapi('Method')

const ReporterSchema = z
  .object({
    email: UserEmailSchema.exactOptional(),
    id: UserIdSchema.exactOptional(),
    name: UserNameSchema.exactOptional(),
  })
  .openapi({ description: 'Reporting user', readOnly: true, required: [] })
  .openapi('Reporter')

const RequestsSchema = z
  .array(
    z
      .object({ request: z.string().exactOptional(), response: z.string().exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Request response pairs that produced the finding', readOnly: true })
  .openapi('Requests')

const FindingSeveritySchema = z
  .union([z.literal(10), z.literal(20), z.literal(30)])
  .openapi({
    description:
      'Severity, how serious the issue is considered:\n  * 10 - low\n  * 20 - medium\n  * 30 - high\n',
  })
  .openapi('FindingSeverity')

const FindingStateSchema = z
  .enum(['notfixed', 'invalid', 'accepted', 'fixed'])
  .openapi({
    description:
      'Finding state:\n  * notfixed - Issue can still be exploited\n  * invalid - Issue determined to be a false positive\n  * accepted - Issue will not be solved and the risk was accepted\n  * fixed - No problem here anymore\n',
  })
  .openapi('FindingState')

const FindingSchema = z
  .object({
    assignee: AssigneeSchema.exactOptional(),
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User comment left on the finding.' }),
    cvss_score: FindingCVSSScoreSchema.exactOptional(),
    cvss_vector: FindingCVSSVectorSchema.exactOptional(),
    definition: DefinitionSchema.exactOptional(),
    evidence: z
      .string()
      .exactOptional()
      .openapi({ description: 'Evidence for the finding.', readOnly: true }),
    extra: z
      .string()
      .exactOptional()
      .openapi({ description: 'Extra data for the finding.', readOnly: true }),
    fix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Fix sugestion for the vulnerability and framework',
        readOnly: true,
      }),
    id: IdSchema.exactOptional(),
    insertion_point: FindingInsertionPointSchema.exactOptional(),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'User labels for the finding.' }),
    last_found: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date time of the last time the vulnerability was found.',
        example: '2018-02-19T18:58:50.906015Z',
        readOnly: true,
      }),
    method: MethodSchema.exactOptional(),
    parameter: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vulnerable paramenter.', readOnly: true }),
    params: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request parameters', readOnly: true }),
    path: z.string().exactOptional().openapi({ description: 'Finding path.', readOnly: true }),
    reporter: ReporterSchema.exactOptional(),
    requests: RequestsSchema.exactOptional(),
    scans: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Scan ids where this finding was present.', readOnly: true }),
    severity: FindingSeveritySchema.exactOptional(),
    state: FindingStateSchema.exactOptional(),
    target: TargetSimpleSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'Full finding URL', readOnly: true }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value for parameter.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Finding')

const EventContentSchema = z
  .xor([UserSchema, TargetSchema, ScanSchema, FindingSchema])
  .openapi({ description: 'Event object.', readOnly: true })
  .openapi('EventContent')

const EventTypeSchema = z
  .enum([
    'user_created',
    'user_deleted',
    'target_created',
    'target_deleted',
    'target_verified',
    'target_verification_failed',
    'scan_started',
    'scan_canceled',
    'scan_completed',
    'scan_failed',
    'finding_detected',
    'finding_fixed',
  ])
  .openapi({
    description:
      'Event type:\n- `user_created` new user added to account\n- `user_deleted` user deleted from account\n- `target_created` new target added to account\n- `target_deleted` target deleted from account\n- `target_verified` target ownership verified\n- `target_verification_failed` target ownership verification failed\n- `scan_started` scan started on target\n- `scan_canceled` scan on target canceled\n- `scan_completed` scan finished with successfuly\n- `scan_failed` scan finished unsuccessfuly\n- `finding_detected` new finding detected (not found before)\n- `finding_fixed` finding was fixed\n',
    example: 'scan_started',
    readOnly: true,
  })
  .openapi('EventType')

const EventObjectTypeSchema = z
  .enum(['user', 'target', 'scan', 'finding'])
  .openapi({ description: 'Type of object in the event content.\n', readOnly: true })
  .openapi('EventObjectType')

const EventOccurredAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Date time of when the event occurred',
    example: '2018-01-31T16:32:17.238553Z',
    readOnly: true,
  })
  .openapi('EventOccurredAt')

const WebhookApiVersionSchema = z
  .literal('v1')
  .openapi({ description: 'API version for the webhook' })
  .openapi('WebhookApiVersion')

const WebhookCheckCertSchema = z
  .boolean()
  .openapi({ description: 'Verify webhook URL HTTPS certificate' })
  .openapi('WebhookCheckCert')

const WebhookURLSchema = z
  .string()
  .openapi({ description: 'URL to post events to (must be https)' })
  .openapi('WebhookURL')

const WebhookSchema = z
  .object({
    api_version: WebhookApiVersionSchema.exactOptional(),
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    check_cert: WebhookCheckCertSchema.exactOptional(),
    created: ChangedSchema.exactOptional(),
    created_by: ChangedBySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    url: WebhookURLSchema,
  })
  .openapi({ required: ['url'] })
  .openapi('Webhook')

const WebhookListSchema = z.array(WebhookSchema).openapi('WebhookList')

const EventSchema = z
  .object({
    content: EventContentSchema.exactOptional(),
    event_type: EventTypeSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    object_type: EventObjectTypeSchema.exactOptional(),
    ocurred_at: EventOccurredAtSchema.exactOptional(),
    webhooks: WebhookListSchema.exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('Event')

const FindingBulkIdsSchema = z
  .object({ ids: z.array(z.string()).openapi({ description: 'Array of finding ids' }) })
  .openapi({ required: ['ids'] })
  .openapi('FindingBulkIds')

const FindingBulkRetestSchema = FindingBulkIdsSchema.and(
  z.object({ scan_profile: ScanProfileSchema.exactOptional() }).openapi({ required: [] }),
).openapi('FindingBulkRetest')

const FindingUpdateSchema = z
  .object({
    assignee: AssigneeSchema.exactOptional(),
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'User comment left on the finding.' }),
    cvss_score: FindingCVSSScoreSchema.exactOptional(),
    cvss_vector: FindingCVSSVectorSchema.exactOptional(),
    definition: DefinitionSchema.exactOptional(),
    evidence: z
      .string()
      .exactOptional()
      .openapi({ description: 'Evidence for the finding.', readOnly: true }),
    extra: z
      .string()
      .exactOptional()
      .openapi({ description: 'Extra data for the finding.', readOnly: true }),
    fix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Fix sugestion for the vulnerability and framework',
        readOnly: true,
      }),
    id: IdSchema.exactOptional(),
    insertion_point: FindingInsertionPointSchema.exactOptional(),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'User labels for the finding.' }),
    last_found: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date time of the last time the vulnerability was found.',
        example: '2018-02-19T18:58:50.906015Z',
        readOnly: true,
      }),
    method: MethodSchema.exactOptional(),
    parameter: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vulnerable paramenter.', readOnly: true }),
    params: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request parameters', readOnly: true }),
    path: z.string().exactOptional().openapi({ description: 'Finding path.', readOnly: true }),
    reporter: ReporterSchema.exactOptional(),
    requests: RequestsSchema.exactOptional(),
    scans: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Scan ids where this finding was present.', readOnly: true }),
    severity: FindingSeveritySchema.exactOptional(),
    state: FindingStateSchema.exactOptional(),
    target: TargetSimpleSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'Full finding URL', readOnly: true }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value for parameter.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('FindingUpdate')

const FindingBulkUpdateSchema =
  FindingBulkIdsSchema.and(FindingUpdateSchema).openapi('FindingBulkUpdate')

const FrameworkSchema = z
  .object({
    desc: z.string().exactOptional().openapi({ description: 'Framework description' }),
    id: IdSchema.exactOptional(),
    name: IdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Framework')

const IntegrationFieldsSchema = z
  .object({
    heroku: z.boolean().exactOptional(),
    jira_cloud: z.boolean().exactOptional(),
    jira_server: z.boolean().exactOptional(),
    slack: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntegrationFields')

const IntegrationsSchema = z
  .object({
    available: IntegrationFieldsSchema.exactOptional(),
    installed: IntegrationFieldsSchema.exactOptional(),
  })
  .openapi({ description: 'Available and installed integrations', required: [] })
  .openapi('Integrations')

const AccountPlanIdSchema = z
  .string()
  .openapi({ description: 'Current plan id', example: 'jMXUw-BE_2vd', readOnly: true })
  .openapi('AccountPlanId')

const InvoiceSchema = z
  .object({
    amount_due: z
      .int()
      .exactOptional()
      .openapi({ description: 'Amount remaining to pay in cents' }),
    amount_paid: z.int().exactOptional().openapi({ description: 'Amount already paid in cents' }),
    currency_code: CurrencyCodeSchema.exactOptional(),
    discounts: z
      .array(
        z
          .object({
            amount: z.int().exactOptional().openapi({ description: 'Discounted amount in cents' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'Discount description' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    line_items: z
      .array(
        z
          .object({
            amount: z.int().exactOptional().openapi({ description: 'Total amount in cents' }),
            description: z.string().exactOptional().openapi({ description: 'Charge description' }),
            discount_amount: z
              .int()
              .exactOptional()
              .openapi({ description: 'Discount amount in cents' }),
            quantity: z.int().exactOptional().openapi({ description: 'Units charged' }),
            tax_amount: z.int().exactOptional().openapi({ description: 'Tax amount in cents' }),
            unit_amount: z
              .int()
              .exactOptional()
              .openapi({ description: 'Price per unit in cents' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    plan: z.string().exactOptional().openapi({ description: 'Plan name' }),
    plan_id: AccountPlanIdSchema.exactOptional(),
    sub_total: z.int().exactOptional().openapi({ description: 'Price before taxes in cents' }),
    taxes: z
      .array(
        z
          .object({
            tax_amount: z.int().exactOptional().openapi({ description: 'Amount of tax in cents' }),
            tax_name: z.string().exactOptional().openapi({ description: 'Name of applied tax' }),
            tax_rate: z.float32().exactOptional().openapi({ description: 'Tax rate' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    total: z.int().exactOptional().openapi({ description: 'Price after taxes in cents' }),
  })
  .openapi({ required: [] })
  .openapi('Invoice')

const JiraIssueIdSchema = z
  .string()
  .openapi({ description: 'Jira issue id connected to this finding' })
  .openapi('JiraIssueId')

const JiraSelectiveSyncSchema = z
  .boolean()
  .openapi({ description: 'Selective sync active for this finding.' })
  .openapi('JiraSelectiveSync')

const JiraFindingSchema = z
  .object({
    issue_id: JiraIssueIdSchema.exactOptional(),
    selective_sync: JiraSelectiveSyncSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JiraFinding')

const JiraIssuePrioritySchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Jira issue priority id', example: '3' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira issue priority name', example: 'Medium' }),
  })
  .openapi({ description: 'Jira issue priority.', required: [] })
  .openapi('JiraIssuePriority')

const JiraIssueStatusSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira issue status id', example: '10003' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira issue status name', example: 'Backlog' }),
  })
  .openapi({ description: 'Jira issue status.', required: [] })
  .openapi('JiraIssueStatus')

const JiraIssueTypeSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Jira issue type id', example: '10003' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira issue type name', example: 'Story' }),
  })
  .openapi({ description: 'Jira issue type.', required: [] })
  .openapi('JiraIssueType')

const JiraProjectSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Jira project id', example: '10001' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira project name', example: 'Project' }),
  })
  .openapi({ description: 'Jira project.', required: [] })
  .openapi('JiraProject')

const JiraAllowJiraSchema = z
  .boolean()
  .openapi({ description: 'Is this target allowed Jira integration.' })
  .openapi('JiraAllowJira')

const JiraAutoSyncSchema = z
  .boolean()
  .openapi({ description: 'Automatically synchronise all findings to Jira issues.' })
  .openapi('JiraAutoSync')

const JiraIssueTypeIdSchema = z
  .string()
  .openapi({ description: 'Id of the issue type to be created in Jira.' })
  .openapi('JiraIssueTypeId')

const JiraPriorityMappingSchema = z
  .object({
    '10': z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the Jira priority that low severity findings should be mapped to.',
      }),
    '20': z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the Jira priority that medium severity findings should be mapped to.',
      }),
    '30': z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the Jira status that high severity findings should be mapped to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('JiraPriorityMapping')

const JiraProjectIdSchema = z
  .string()
  .openapi({ description: 'Id of the Jira project where issues for this target will be created.' })
  .openapi('JiraProjectId')

const JiraStatusMappingSchema = z
  .object({
    accepted: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the Jira status that `accepted` findings should be mapped to.',
      }),
    fixed: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the Jira status that `fixed` findings should be mapped to.' }),
    invalid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the Jira status that `invalid` findings should be mapped to.',
      }),
    notfixed: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the Jira status that `notfixed` findings should be mapped to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('JiraStatusMapping')

const JiraScopeSchema = z
  .object({
    allow_jira: JiraAllowJiraSchema.exactOptional(),
    auto_sync: JiraAutoSyncSchema.exactOptional(),
    issue_type_id: JiraIssueTypeIdSchema.exactOptional(),
    priority_mapping: JiraPriorityMappingSchema.exactOptional(),
    project_id: JiraProjectIdSchema.exactOptional(),
    status_mapping: JiraStatusMappingSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JiraScope')

const KeySchema = z
  .object({
    id: IdSchema.exactOptional(),
    key: TokenSchema.exactOptional(),
    name: IdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Key')

const LabelSchema = z
  .object({ id: IdSchema.exactOptional(), name: NameSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Label')

const UsernameSchema = z.string().openapi({ example: 'example@probely.com' }).openapi('Username')

const LoginSchema = z
  .object({ password: PasswordSchema, username: UsernameSchema })
  .openapi({ required: ['username', 'password'] })
  .openapi('Login')

const ScanDateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Date time of next scan' })
  .openapi('ScanDateTime')

const RecurrenceSchema = z
  .enum(['d', 'w', 'm', 'q', ''])
  .openapi({
    description:
      "Scan recurrence:\n  * d - daily\n  * w - weekly\n  * m - monthly\n  * q - quarterly\n  * '' - no recurrence\n",
  })
  .openapi('Recurrence')

const ScheduledSchema = z
  .object({
    changed: ChangedSchema.exactOptional(),
    changed_by: ChangedBySchema.exactOptional(),
    date_time: ScanDateTimeSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Scheduled object id', example: 'QJxMvgPebu0e' }),
    recurrence: RecurrenceSchema.exactOptional(),
    target: TargetSimpleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Scheduled')

const SlackSchema = z
  .object({
    notify_finding_fixed: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify of fixed findings.' }),
    notify_high_findings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify of new high severity findings.' }),
    notify_low_findings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify of new low severity findings.' }),
    notify_medium_findings: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify of new medium severity findings.' }),
    notify_scan_completed: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify of completed scans.' }),
    notify_scan_started: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Notify of started scans.' }),
    webhook_url: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Slack notification webhook url.' }),
  })
  .openapi({ description: 'Options for slack notifications', required: [] })
  .openapi('Slack')

const CouponsSchema = z
  .array(z.string())
  .openapi({ description: 'Coupon ids', writeOnly: true })
  .openapi('Coupons')

const TargetIdsSchema = z.array(IdSchema).openapi('TargetIds')

const SubscriptionSchema = z
  .object({
    coupon_ids: CouponsSchema.exactOptional(),
    plan_id: AccountPlanIdSchema.exactOptional(),
    target_ids: TargetIdsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Subscription')

const VulnerabilityDefinitionSchema = z
  .object({
    changed: ChangedSchema.exactOptional(),
    desc: DescSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    name: NameSchema.exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('VulnerabilityDefinition')

const EmailTokenSchema = z
  .string()
  .openapi({
    description: 'Reset token received in the user email',
    example: 'KJUUCY2VIVEHO5KJGVHQ====-PJZXGNKSGNQVSODFPJGQ====-GYZDKOI=-8065bfbf8a0192774f3f/',
  })
  .openapi('EmailToken')

const PaginationCountSchema = z
  .int()
  .openapi({ description: 'Number of objects in the response.', example: 6 })
  .openapi('PaginationCount')

const PaginationLengthSchema = z
  .int()
  .default(10)
  .openapi({ description: 'Number of objects per page.', example: 10 })
  .openapi('PaginationLength')

const PaginationPageSchema = z
  .int()
  .default(1)
  .openapi({ description: 'Current page.', example: 1 })
  .openapi('PaginationPage')

const PaginationPageTotalSchema = z
  .int()
  .openapi({ description: 'Number of pages.', example: 1 })
  .openapi('PaginationPageTotal')

const TokenBodySchema = z
  .string()
  .openapi({
    description: 'Authentication token',
    example:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJKR3ZRSTkzSTJhc0oiLCJ0ZW5hbnQiOiJwcm9iZWx5IiwidXNlcm5hbWUiOiJxd2VAZGVmbnVsbC5ldSJ9.7KtUn-Oy8aevOCv2lAnDroAJojLXmm7m2A4CX5cjwAk',
  })
  .openapi('TokenBody')

const TtlSchema = z
  .int()
  .openapi({ description: 'Token time to live in seconds', example: 31536000 })
  .openapi('Ttl')

const VerificationTypeSchema = z
  .enum(['dns', 'file'])
  .openapi({
    description:
      'Type of verification:\n* dns - we look or a TXT record on the host you registered containing\n`Probely=<verification_token>`\n* file - on the root of the path you registered we look for a file\nnamed `<verification token>` containing `Probely`.\n',
  })
  .openapi('VerificationType')

const APIKeyResponse = {
  description: 'API Key object',
  content: { 'application/json': { schema: APIKeySchema } },
}

const APIKeyListResponse = {
  description: 'API Key list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z.array(KeySchema).exactOptional().openapi({ description: 'API key objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AccountResponse = {
  description: 'Account data',
  content: { 'application/json': { schema: AccountSchema } },
}

const ActionResponse = {
  description: 'Required action to enable targets',
  content: { 'application/json': { schema: ActionSchema } },
}

const ActionsResponse = {
  description: 'Available actions for targets',
  content: { 'application/json': { schema: ActionsSchema } },
}

const ActivityResponse = {
  description: 'Finding activity log',
  content: { 'application/json': { schema: z.array(ActivitySchema) } },
}

const AssetResponse = {
  description: 'Asset object',
  content: { 'application/json': { schema: AssetSchema } },
}

const AssetListResponse = {
  description: 'Asset list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z.array(AssetSchema).exactOptional().openapi({ description: 'Asset objects.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AverageFixTimeResponse = {
  description: 'Average fix time plot data',
  content: {
    'application/json': {
      schema: z
        .object({
          results: z
            .object({
              high: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Average fix time in seconds for high severity findings',
                  example: 2,
                }),
              low: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Average fix time in seconds for low severity findings',
                  example: 3,
                }),
              medium: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Average fix time in seconds for medium severity findings',
                  example: 5,
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const BadRequestErrorResponse = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: z
        .object({
          '<field name>': z
            .array(z.string().openapi({ description: 'Error message' }))
            .exactOptional(),
          non_field_errors: z
            .array(z.string().openapi({ description: 'Error message' }))
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const BadRequestErrorMessageResponse = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().exactOptional().openapi({ description: 'Error message' }) })
        .openapi({ required: [] }),
    },
  },
}

const BillingResponse = {
  description: 'Billing information',
  content: { 'application/json': { schema: BillingSchema } },
}

const DatePageResponse = {
  description: 'Page number for supplied date',
  content: {
    'application/json': {
      schema: z
        .object({ page: z.int().exactOptional().openapi({ description: 'Page number' }) })
        .openapi({ required: [] }),
    },
  },
}

const EndpointCSVResponse = {
  description: 'Endpoint list CSV file',
  content: {
    'application/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
  },
}

const EventResponse = {
  description: 'A Probely event',
  content: { 'application/json': { schema: EventSchema } },
}

const EventListResponse = {
  description: 'Event list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z.array(EventSchema).exactOptional().openapi({ description: 'Event objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const FindingResponse = {
  description: 'Finding object',
  content: { 'application/json': { schema: FindingSchema } },
}

const FindingListResponse = {
  description: 'Finding list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z
            .array(FindingSchema)
            .exactOptional()
            .openapi({ description: 'Finding objects.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ForbiddenErrorResponse = {
  description: 'Not allowed to perform operation',
  content: {
    'application/json': {
      schema: z
        .object({ detail: z.string().exactOptional().openapi({ description: 'Error message.' }) })
        .openapi({ required: [] }),
    },
  },
}

const FrameworkResponse = {
  description: 'Framework object',
  content: { 'application/json': { schema: FrameworkSchema } },
}

const FrameworkListResponse = {
  description: 'Framework list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z
            .array(FrameworkSchema)
            .exactOptional()
            .openapi({ description: 'Framework objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const IntegrationsAccountResponse = {
  description: 'Available and installed integrations in the account',
  content: { 'application/json': { schema: IntegrationsSchema } },
}

const IntegrationsTargetResponse = {
  description: 'Available and installed integrations for the target',
  content: { 'application/json': { schema: IntegrationsSchema } },
}

const InternalServerErrorResponse = {
  description: 'Internal server error',
  content: {
    'application/json': {
      schema: z
        .object({ detail: z.string().exactOptional() })
        .openapi({ example: { detail: 'Internal server error.' }, required: [] }),
    },
  },
}

const InvoiceResponse = {
  description: 'Charges',
  content: { 'application/json': { schema: InvoiceSchema } },
}

const JiraCloudFindingResponse = {
  description: 'Jira Cloud Finding configuration',
  content: { 'application/json': { schema: JiraFindingSchema } },
}

const JiraCloudScopeResponse = {
  description: 'Jira Cloud Target configuration',
  content: { 'application/json': { schema: JiraScopeSchema } },
}

const JiraIssuePriorityListResponse = {
  description: 'Jira issue priorities',
  content: { 'application/json': { schema: z.array(JiraIssuePrioritySchema) } },
}

const JiraIssueStatusListResponse = {
  description: 'Jira issue statuses',
  content: { 'application/json': { schema: z.array(JiraIssueStatusSchema) } },
}

const JiraIssueTypeListResponse = {
  description: 'Jira issue types available in project',
  content: { 'application/json': { schema: z.array(JiraIssueTypeSchema) } },
}

const JiraProjectListResponse = {
  description: 'Jira projects',
  content: { 'application/json': { schema: z.array(JiraProjectSchema) } },
}

const JiraServerFindingResponse = {
  description: 'Jira Server finding configuration',
  content: { 'application/json': { schema: JiraFindingSchema } },
}

const JiraServerScopeResponse = {
  description: 'Jira Server target configuration',
  content: { 'application/json': { schema: JiraScopeSchema } },
}

const LabelResponse = {
  description: 'Label object',
  content: { 'application/json': { schema: LabelSchema } },
}

const LabelListResponse = {
  description: 'Label list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z.array(LabelSchema).exactOptional().openapi({ description: 'label objects.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const NeedsAttentionPieResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z
        .object({
          '0': z
            .object({
              '0': z
                .string()
                .default('needing attention')
                .exactOptional()
                .openapi({ description: 'needing attention' }),
              '1': z.int().exactOptional().openapi({ description: 'Number of targets' }),
              '2': z
                .string()
                .default('needs_atention')
                .exactOptional()
                .openapi({ description: 'needs_atention' }),
            })
            .exactOptional()
            .openapi({
              description:
                'These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.\n',
              required: [],
            }),
          '1': z
            .object({
              '0': z
                .string()
                .default('no issues found')
                .exactOptional()
                .openapi({ description: 'no issues found' }),
              '1': z.int().exactOptional().openapi({ description: 'Number of targets' }),
              '2': z
                .string()
                .default('no_issues_found')
                .exactOptional()
                .openapi({ description: 'no_issues_found' }),
            })
            .exactOptional()
            .openapi({
              description:
                'These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.\n',
              required: [],
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const NeedsAttentionTopResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            highs: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of high severity findings', example: 3 }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Target id', example: 'QJxMvgPebu0e' }),
            lows: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of low severity findings', example: 4 }),
            mediums: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of medium severity findings', example: 8 }),
            name: z.string().exactOptional().openapi({ description: 'Name', example: 'Probely' }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: "Target's site URL", example: 'https://probely.com' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const NoContentResponse = { description: 'Success' }

const NotFoundErrorResponse = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: z
        .object({ detail: z.string().exactOptional().openapi({ description: 'Not found.' }) })
        .openapi({ required: [] }),
    },
  },
}

const PlanListResponse = {
  description: 'Plan list',
  content: { 'application/json': { schema: z.array(PlanSchema) } },
}

const ReportResponse = {
  description: 'Scan report PDF',
  content: {
    'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
  },
}

const RiskTrendResponse = {
  description: 'Risk trend plot data',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            '0': z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'Date time' }),
            '1': z.int().exactOptional().openapi({ description: 'Risk score' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const ScanResponse = {
  description: 'Scan object',
  content: { 'application/json': { schema: ScanSchema } },
}

const ScanDatesResponse = {
  description: 'Dates for which there are scans',
  content: {
    'application/json': {
      schema: z
        .array(z.iso.date())
        .openapi({
          description: 'Dates for which there are scans',
          example: ['2017-06-12', '2017-06-22'],
        }),
    },
  },
}

const ScanListResponse = {
  description: 'Scan list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z.array(ScanSchema).exactOptional().openapi({ description: 'Scan objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ScheduledResponse = {
  description: 'Scheduled scan object',
  content: { 'application/json': { schema: ScheduledSchema } },
}

const ScheduledArrayResponse = {
  description: 'Next scheduled scans',
  content: {
    'application/json': {
      schema: z
        .object({
          results: z
            .array(ScheduledSchema)
            .exactOptional()
            .openapi({ description: 'Scheduled scan objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ScheduledListResponse = {
  description: 'Scheduled scan list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z
            .array(ScheduledSchema)
            .exactOptional()
            .openapi({ description: 'Scheduled scan objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SeverityTrendResponse = {
  description: 'Severity trend plot data',
  content: {
    'application/json': {
      schema: z
        .object({
          results: z
            .object({
              high: z
                .array(
                  z
                    .object({
                      '0': z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'Date time' }),
                      '1': z.int().exactOptional().openapi({ description: 'Risk score' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              low: z
                .array(
                  z
                    .object({
                      '0': z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'Date time' }),
                      '1': z.int().exactOptional().openapi({ description: 'Risk score' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              medium: z
                .array(
                  z
                    .object({
                      '0': z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'Date time' }),
                      '1': z.int().exactOptional().openapi({ description: 'Risk score' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          step: z.float32().exactOptional().openapi({ description: '', example: 86400 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const SiteResponse = {
  description: 'Site object',
  content: { 'application/json': { schema: SiteSchema } },
}

const SlackResponse = {
  description: 'Slack integration',
  content: { 'application/json': { schema: SlackSchema } },
}

const SuccessResponse = { description: 'Success' }

const SuccessMessageResponse = {
  description: 'Success',
  content: {
    'application/json': {
      schema: z
        .object({ message: z.string().exactOptional().openapi({ description: 'Message' }) })
        .openapi({ required: [] }),
    },
  },
}

const TargetResponse = {
  description: 'Target object',
  content: { 'application/json': { schema: TargetSchema } },
}

const TargetIdsResponse = {
  description: 'Target id list',
  content: { 'application/json': { schema: TargetIdsSchema } },
}

const TargetListResponse = {
  description: 'List of targets',
  content: {
    'application/json': {
      schema: z
        .object({
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          pagination_count: PaginationCountSchema.exactOptional(),
          results: z.array(TargetSchema).exactOptional().openapi({ description: 'Target objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const TokenResponse = {
  description: 'Token and respective time to live',
  content: {
    'application/json': {
      schema: z
        .object({ token: TokenSchema.exactOptional(), ttl: TtlSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const TopVulnsResponse = {
  description: 'Top vulnerabilities plot data',
  content: {
    'application/json': {
      schema: z.array(
        z
          .object({
            '0': z.string().exactOptional().openapi({ description: 'Vulnerability name' }),
            '1': z.string().exactOptional().openapi({ description: 'Vulnerability count' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const UnauthorizedErrorResponse = {
  description: 'Access token is missing or invalid',
  content: {
    'application/json': {
      schema: z
        .object({ detail: z.string().exactOptional() })
        .openapi({
          example: { detail: 'Authentication credentials were not provided.' },
          required: [],
        }),
    },
  },
}

const UserResponse = {
  description: 'User object',
  content: { 'application/json': { schema: UserSchema } },
}

const UserListResponse = {
  description: 'User list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z.array(UserSchema).exactOptional().openapi({ description: 'User objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const VulnerabilityDefinitionResponse = {
  description: 'Vulnerability definition object',
  content: { 'application/json': { schema: VulnerabilityDefinitionSchema } },
}

const VulnerabilityDefinitionListResponse = {
  description: 'Vulnerability defitions list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z
            .array(VulnerabilityDefinitionSchema)
            .exactOptional()
            .openapi({ description: 'Vulnerability definition objects.' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const WebhookResponse = {
  description: 'Webhooks',
  content: { 'application/json': { schema: WebhookSchema } },
}

const WebhookListResponse = {
  description: 'Webhook list',
  content: {
    'application/json': {
      schema: z
        .object({
          count: PaginationCountSchema.exactOptional(),
          length: PaginationLengthSchema.exactOptional(),
          page: PaginationPageSchema.exactOptional(),
          page_total: PaginationPageTotalSchema.exactOptional(),
          results: z
            .array(WebhookSchema)
            .exactOptional()
            .openapi({ description: 'Webhook objects' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const AssigneeParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by assignee ids',
      in: 'query',
      name: 'assignee',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
    },
  })

const FindingBulkReportParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Token received from the finding report endpoint.',
      in: 'query',
      name: 'token',
      required: true,
      schema: { type: 'string' },
    },
  })

const FindingSeverityParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    FindingSeveritySchema.openapi({
      param: {
        description: 'Filter by finding severity',
        in: 'query',
        name: 'severity',
        required: false,
        schema: { $ref: '#/components/schemas/findingSeverity' },
      },
    }),
  )
  .exactOptional()

const FindingStateParamsSchema = FindingStateSchema.openapi({
  param: {
    description: 'Filter by finding states',
    in: 'query',
    name: 'state',
    required: false,
    schema: { $ref: '#/components/schemas/findingState' },
  },
}).exactOptional()

const IdParamsSchema = IdSchema.openapi({
  param: {
    description: 'Object Id',
    in: 'path',
    name: 'id',
    required: true,
    schema: { $ref: '#/components/schemas/id' },
  },
})

const JiraIssueTypeIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Jira issue type id',
      in: 'path',
      name: 'issue_type_id',
      required: true,
      schema: { example: '10003', readOnly: true, type: 'string' },
    },
    example: '10003',
    readOnly: true,
  })

const JiraProjectIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Jira Project Id',
      in: 'path',
      name: 'project_id',
      required: true,
      schema: { example: '10001', readOnly: true, type: 'string' },
    },
    example: '10001',
    readOnly: true,
  })

const LabelParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by finding labels',
      in: 'query',
      name: 'label',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
    },
  })

const OrderingParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Which field to use when ordering the results, prefix with `-` to invert ordering.\n',
      in: 'query',
      name: 'ordering',
      required: false,
      schema: { example: '-changed', type: 'string' },
    },
    example: '-changed',
  })

const PageParamsSchema = z
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
      description: 'Page number within the paginated result set',
      in: 'query',
      name: 'page',
      required: false,
      schema: { example: 1, type: 'integer' },
    },
    example: 1,
  })

const PageLengthParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return per page',
      in: 'query',
      name: 'length',
      required: false,
      schema: { default: 10, type: 'integer' },
    },
  })

const ScanDateParamsSchema = z.iso
  .date()
  .openapi({
    param: {
      description: 'Date',
      in: 'query',
      name: 'date',
      required: true,
      schema: { format: 'date', type: 'string' },
    },
  })

const ScanIdParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by scan ids',
      in: 'query',
      name: 'scan',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
    },
  })

const ScanStartedParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.iso.date()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter by scan start dates',
      in: 'query',
      name: 'started',
      required: false,
      schema: { items: { format: 'date', type: 'string' }, type: 'array' },
    },
  })

const ScanStatusParamsSchema = ScanStatusSchema.openapi({
  param: {
    description: 'Filter by scan statuses',
    in: 'query',
    name: 'status',
    required: false,
    schema: { $ref: '#/components/schemas/scanStatus' },
  },
}).exactOptional()

const SearchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Search term',
      in: 'query',
      name: 'search',
      required: false,
      schema: { type: 'string' },
    },
  })

const TargetIdParamsSchema = IdSchema.openapi({
  param: {
    description: 'Target id',
    in: 'path',
    name: 'target_id',
    required: true,
    schema: { $ref: '#/components/schemas/id' },
  },
})

const APIKeyRequestBody = {
  content: { 'application/json': { schema: APIKeySchema } },
  required: true,
}

const AssetRequestBody = {
  content: { 'application/json': { schema: AssetSchema } },
  required: true,
}

const BillingRequestBody = {
  content: { 'application/json': { schema: BillingSchema } },
  required: true,
}

const EmailRequestBody = {
  content: {
    'application/json': {
      schema: z.object({ email: UsernameSchema }).openapi({ required: ['email'] }),
    },
  },
  required: true,
}

const EmailTokenRequestBody = {
  content: {
    'application/json': {
      schema: z.object({ token: EmailTokenSchema }).openapi({ required: ['token'] }),
    },
  },
  required: true,
}

const FindingRequestBody = {
  content: { 'application/json': { schema: FindingUpdateSchema } },
  required: true,
}

const FindingBulkIdsRequestBody = {
  content: { 'application/json': { schema: FindingBulkIdsSchema } },
  required: true,
}

const FindingBulkRetestRequestBody = {
  content: { 'application/json': { schema: FindingBulkRetestSchema } },
  required: true,
}

const FindingBulkUpdateRequestBody = {
  content: { 'application/json': { schema: FindingBulkUpdateSchema } },
  required: true,
}

const JiraCloudFindingRequestBody = {
  content: { 'application/json': { schema: JiraFindingSchema } },
  required: true,
}

const JiraCloudScopeRequestBody = {
  content: { 'application/json': { schema: JiraScopeSchema } },
  required: true,
}

const JiraServerFindingRequestBody = {
  content: { 'application/json': { schema: JiraFindingSchema } },
  required: true,
}

const JiraServerScopeRequestBody = {
  content: { 'application/json': { schema: JiraScopeSchema } },
  required: true,
}

const LabelRequestBody = {
  content: { 'application/json': { schema: LabelSchema } },
  required: true,
}

const LoginRequestBody = {
  content: { 'application/json': { schema: LoginSchema } },
  required: true,
}

const PasswordChangeRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          confpassword: z
            .any()
            .openapi({ description: 'New user password (confirmation)' })
            .and(PasswordSchema),
          current_password: z
            .any()
            .openapi({ description: 'Current user password' })
            .and(PasswordSchema),
          password: z.any().openapi({ description: 'New user password' }).and(PasswordSchema),
        })
        .openapi({ required: ['current_password', 'password', 'confpassword'] }),
    },
  },
  required: true,
}

const PasswordSetRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          confpassword: z
            .any()
            .openapi({ description: 'New user password (confirmation)' })
            .and(PasswordSchema),
          password: z.any().openapi({ description: 'New user password' }).and(PasswordSchema),
          token: EmailTokenSchema,
        })
        .openapi({ required: ['token', 'password', 'confpassword'] }),
    },
  },
  required: true,
}

const ScanOptionsRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          scan_profile: z
            .enum(['safe', 'normal', 'full', 'lightning'])
            .exactOptional()
            .openapi({ description: "Override the target's `scan_profile`.\n" }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ScheduledRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({ date_time: ScanDateTimeSchema, recurrence: RecurrenceSchema.exactOptional() })
        .openapi({ required: ['date_time'] }),
    },
  },
  required: true,
}

const SiteRequestBody = { content: { 'application/json': { schema: SiteSchema } }, required: true }

const SiteVerifyRequestBody = {
  content: {
    'application/json': {
      schema: z.object({ type: VerificationTypeSchema }).openapi({ required: ['type'] }),
    },
  },
  required: true,
}

const SlackRequestBody = {
  content: { 'application/json': { schema: SlackSchema } },
  required: true,
}

const SubscriptionRequestBody = {
  content: { 'application/json': { schema: SubscriptionSchema } },
  required: true,
}

const TargetRequestBody = { content: { 'application/json': { schema: TargetSchema } } }

const TargetIdsRequestBody = {
  content: { 'application/json': { schema: TargetIdsSchema } },
  required: true,
}

const TokenRequestBody = {
  content: {
    'application/json': {
      schema: z.object({ token: TokenBodySchema.exactOptional() }).openapi({ required: [] }),
    },
  },
  required: true,
}

const UserRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          email: UserEmailSchema,
          is_admin: UserIsAdminSchema.exactOptional(),
          name: UserNameSchema,
          title: UserTitleSchema.exactOptional(),
        })
        .openapi({ required: ['name', 'email'] }),
    },
  },
  required: true,
}

const WebhookRequestBody = {
  content: { 'application/json': { schema: WebhookSchema } },
  required: true,
}

const JwtAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getAccountIndexRoute = createRoute({
  method: 'get',
  path: '/account/',
  tags: ['Account'],
  summary: 'Retrieve account information',
  responses: { 200: AccountResponse, 401: UnauthorizedErrorResponse },
})

export const postAuthObtainIndexRoute = createRoute({
  method: 'post',
  path: '/auth/obtain/',
  tags: ['Login'],
  summary: 'Authenticate user',
  description:
    'The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.\n',
  request: { body: LoginRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const postAuthRefreshIndexRoute = createRoute({
  method: 'post',
  path: '/auth/refresh/',
  tags: ['Login'],
  summary: 'Replace token with a new one',
  request: { body: TokenRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const postAuthRevokeIndexRoute = createRoute({
  method: 'post',
  path: '/auth/revoke/',
  tags: ['Login'],
  summary: 'Revoke a token',
  request: { body: TokenRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const postAuthVerifyIndexRoute = createRoute({
  method: 'post',
  path: '/auth/verify/',
  tags: ['Login'],
  summary: 'Verify a token',
  description: 'Check for the validity of a user token.\n',
  request: { body: TokenRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const getBillingIndexRoute = createRoute({
  method: 'get',
  path: '/billing/',
  tags: ['Account'],
  summary: 'Retrieve billing information',
  responses: { 200: BillingResponse },
})

export const putBillingIndexRoute = createRoute({
  method: 'put',
  path: '/billing/',
  tags: ['Account'],
  summary: 'Update billing information',
  request: { body: BillingRequestBody },
  responses: { 200: BillingResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const patchBillingIndexRoute = createRoute({
  method: 'patch',
  path: '/billing/',
  tags: ['Account'],
  summary: 'Partial update billing information',
  request: { body: BillingRequestBody },
  responses: { 200: BillingResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const postBillingActionsIndexRoute = createRoute({
  method: 'post',
  path: '/billing/actions/',
  tags: ['Account'],
  summary: 'Action that should be taken to enable the selected targets',
  request: { body: TargetIdsRequestBody },
  responses: { 200: ActionResponse },
})

export const postBillingEstimateIndexRoute = createRoute({
  method: 'post',
  path: '/billing/estimate/',
  tags: ['Account'],
  summary: 'Estimate costs of updating a subscription',
  request: { body: SubscriptionRequestBody },
  responses: {
    200: InvoiceResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postBillingSubscribeIndexRoute = createRoute({
  method: 'post',
  path: '/billing/subscribe/',
  tags: ['Account'],
  summary: 'Update a subscription',
  request: { body: SubscriptionRequestBody },
  responses: {
    200: InvoiceResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postCheckIndexRoute = createRoute({
  method: 'post',
  path: '/check/',
  tags: ['Password Reset'],
  summary: 'Check validity of password reset token',
  request: { body: EmailTokenRequestBody },
  responses: { 200: SuccessMessageResponse, 400: BadRequestErrorMessageResponse },
  security: [],
})

export const postEnterpriseAuthObtainIndexRoute = createRoute({
  method: 'post',
  path: '/enterprise/auth/obtain/',
  tags: ['Login'],
  summary: 'Enterprise user authentication',
  description:
    'The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.\n',
  request: { body: LoginRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const postEnterpriseAuthRefreshIndexRoute = createRoute({
  method: 'post',
  path: '/enterprise/auth/refresh/',
  tags: ['Login'],
  summary: 'Enterprise token refresh',
  request: { body: TokenRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const postEnterpriseAuthRevokeIndexRoute = createRoute({
  method: 'post',
  path: '/enterprise/auth/revoke/',
  tags: ['Login'],
  summary: 'Enterprise token revokation',
  request: { body: TokenRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const postEnterpriseAuthVerifyIndexRoute = createRoute({
  method: 'post',
  path: '/enterprise/auth/verify/',
  tags: ['Login'],
  summary: 'Enterprise token verification',
  description: 'Check for the validity of a user token.\n',
  request: { body: TokenRequestBody },
  responses: { 200: TokenResponse, 400: BadRequestErrorResponse, 500: InternalServerErrorResponse },
  security: [],
})

export const getEventsIndexRoute = createRoute({
  method: 'get',
  path: '/events/',
  tags: ['Events'],
  summary: 'List account events',
  responses: {
    200: EventListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getEventsIdIndexRoute = createRoute({
  method: 'get',
  path: '/events/{id}/',
  tags: ['Events'],
  summary: 'Retrieve account event',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: EventResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getFrameworksIndexRoute = createRoute({
  method: 'get',
  path: '/frameworks/',
  tags: ['Frameworks'],
  summary: 'List frameworks',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: { 200: FrameworkListResponse, 401: UnauthorizedErrorResponse },
})

export const getFrameworksIdIndexRoute = createRoute({
  method: 'get',
  path: '/frameworks/{id}/',
  tags: ['Frameworks'],
  summary: 'Retrieve framework',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: FrameworkResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getIntegrationsIndexRoute = createRoute({
  method: 'get',
  path: '/integrations/',
  tags: ['Integrations'],
  summary: 'Integrations available and installed in the account',
  responses: {
    200: IntegrationsAccountResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getIntegrationsJiraCloudProjectsIndexRoute = createRoute({
  method: 'get',
  path: '/integrations/jira-cloud/projects/',
  tags: ['Jira Cloud Integration'],
  summary: 'List Jira Projects',
  responses: {
    200: JiraProjectListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getIntegrationsJiraCloudProjectsProjectIdIssueTypesIndexRoute = createRoute({
  method: 'get',
  path: '/integrations/jira-cloud/projects/{project_id}/issue_types/',
  tags: ['Jira Cloud Integration'],
  summary: 'Retrieve project issue types',
  request: { params: z.object({ project_id: JiraProjectIdParamsSchema }) },
  responses: {
    200: JiraIssueTypeListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute =
  createRoute({
    method: 'get',
    path: '/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/priorities/',
    tags: ['Jira Cloud Integration'],
    summary: 'Retrieve issue priorities',
    request: {
      params: z.object({
        project_id: JiraProjectIdParamsSchema,
        issue_type_id: JiraIssueTypeIdParamsSchema,
      }),
    },
    responses: {
      200: JiraIssuePriorityListResponse,
      401: UnauthorizedErrorResponse,
      403: ForbiddenErrorResponse,
    },
  })

export const getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute =
  createRoute({
    method: 'get',
    path: '/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/status/',
    tags: ['Jira Cloud Integration'],
    summary: 'Retrieve issue statuses',
    request: {
      params: z.object({
        project_id: JiraProjectIdParamsSchema,
        issue_type_id: JiraIssueTypeIdParamsSchema,
      }),
    },
    responses: {
      200: JiraIssueStatusListResponse,
      401: UnauthorizedErrorResponse,
      403: ForbiddenErrorResponse,
      404: NotFoundErrorResponse,
    },
  })

export const getIntegrationsJiraServerProjectsIndexRoute = createRoute({
  method: 'get',
  path: '/integrations/jira-server/projects/',
  tags: ['Jira Server Integration'],
  summary: 'List Jira Projects',
  responses: {
    200: JiraProjectListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getIntegrationsJiraServerProjectsProjectIdIssueTypesIndexRoute = createRoute({
  method: 'get',
  path: '/integrations/jira-server/projects/{project_id}/issue_types/',
  tags: ['Jira Server Integration'],
  summary: 'Retrieve project issue types',
  request: { params: z.object({ project_id: JiraProjectIdParamsSchema }) },
  responses: {
    200: JiraIssueTypeListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPrioritiesIndexRoute =
  createRoute({
    method: 'get',
    path: '/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/',
    tags: ['Jira Server Integration'],
    summary: 'Retrieve issue priorities',
    request: {
      params: z.object({
        project_id: JiraProjectIdParamsSchema,
        issue_type_id: JiraIssueTypeIdParamsSchema,
      }),
    },
    responses: {
      200: JiraIssuePriorityListResponse,
      401: UnauthorizedErrorResponse,
      403: ForbiddenErrorResponse,
    },
  })

export const getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusIndexRoute =
  createRoute({
    method: 'get',
    path: '/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/',
    tags: ['Jira Server Integration'],
    summary: 'Retrieve issue statuses',
    request: {
      params: z.object({
        project_id: JiraProjectIdParamsSchema,
        issue_type_id: JiraIssueTypeIdParamsSchema,
      }),
    },
    responses: {
      200: JiraIssueStatusListResponse,
      401: UnauthorizedErrorResponse,
      403: ForbiddenErrorResponse,
      404: NotFoundErrorResponse,
    },
  })

export const getKeysIndexRoute = createRoute({
  method: 'get',
  path: '/keys/',
  tags: ['API Keys'],
  summary: 'List API keys allowed to operate on account',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: APIKeyListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postKeysIndexRoute = createRoute({
  method: 'post',
  path: '/keys/',
  tags: ['API Keys'],
  summary: 'Create account API key',
  request: { body: APIKeyRequestBody },
  responses: { 201: APIKeyResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const getKeysIdIndexRoute = createRoute({
  method: 'get',
  path: '/keys/{id}/',
  tags: ['API Keys'],
  summary: 'Retrieve account API key',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: APIKeyResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const deleteKeysIdIndexRoute = createRoute({
  method: 'delete',
  path: '/keys/{id}/',
  tags: ['API Keys'],
  summary: 'Delete account API key',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getLabelsIndexRoute = createRoute({
  method: 'get',
  path: '/labels/',
  tags: ['Labels'],
  summary: 'List labels',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: { 200: LabelListResponse, 401: UnauthorizedErrorResponse },
})

export const postLabelsIndexRoute = createRoute({
  method: 'post',
  path: '/labels/',
  tags: ['Labels'],
  summary: 'Create label',
  request: { body: LabelRequestBody },
  responses: { 201: LabelResponse, 400: BadRequestErrorResponse, 401: UnauthorizedErrorResponse },
})

export const getLabelsIdIndexRoute = createRoute({
  method: 'get',
  path: '/labels/{id}/',
  tags: ['Labels'],
  summary: 'Retrieve framework',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: LabelResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const putLabelsIdIndexRoute = createRoute({
  method: 'put',
  path: '/labels/{id}/',
  tags: ['Labels'],
  summary: 'Update label',
  request: { params: z.object({ id: IdParamsSchema }), body: LabelRequestBody },
  responses: {
    200: LabelResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteLabelsIdIndexRoute = createRoute({
  method: 'delete',
  path: '/labels/{id}/',
  tags: ['Labels'],
  summary: 'Delete label',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 204: NoContentResponse, 401: UnauthorizedErrorResponse },
})

export const patchLabelsIdIndexRoute = createRoute({
  method: 'patch',
  path: '/labels/{id}/',
  tags: ['Labels'],
  summary: 'Partial update',
  request: { params: z.object({ id: IdParamsSchema }), body: LabelRequestBody },
  responses: { 200: LabelResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getPlansIndexRoute = createRoute({
  method: 'get',
  path: '/plans/',
  tags: ['Plan'],
  summary: 'Subscription plans',
  responses: { 200: PlanListResponse },
  security: [],
})

export const getProfileIndexRoute = createRoute({
  method: 'get',
  path: '/profile/',
  tags: ['Users'],
  summary: 'User data',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: { 200: UserResponse },
})

export const postProfileChangePasswordIndexRoute = createRoute({
  method: 'post',
  path: '/profile/change_password/',
  tags: ['Users'],
  summary: 'Change user password',
  description:
    'Our password policy requires a minimum password length of 10 chars with\nat least one symbol or number.\n',
  request: { body: PasswordChangeRequestBody },
  responses: {
    200: SuccessMessageResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
  },
})

export const postResetIndexRoute = createRoute({
  method: 'post',
  path: '/reset/',
  tags: ['Password Reset'],
  summary: 'Send reset password email',
  request: { body: EmailRequestBody },
  responses: { 200: SuccessMessageResponse, 400: BadRequestErrorMessageResponse },
  security: [],
})

export const postSetpasswordIndexRoute = createRoute({
  method: 'post',
  path: '/setpassword/',
  tags: ['Password Reset'],
  summary: 'Reset password after asking for a reset (with the token sent by email).\n',
  request: { body: PasswordSetRequestBody },
  responses: { 200: SuccessMessageResponse, 400: BadRequestErrorMessageResponse },
  security: [],
})

export const postTargetActionsIndexRoute = createRoute({
  method: 'post',
  path: '/target-actions/',
  tags: ['Account'],
  summary: 'Available actions for the selected targets',
  request: { body: TargetIdsRequestBody },
  responses: { 200: ActionsResponse },
})

export const getTargetsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/',
  tags: ['Targets'],
  summary: 'List targets',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: TargetListResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTargetsIndexRoute = createRoute({
  method: 'post',
  path: '/targets/',
  tags: ['Targets'],
  summary: 'Create target',
  request: { body: TargetRequestBody },
  responses: {
    201: TargetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const postTargetsActivateIndexRoute = createRoute({
  method: 'post',
  path: '/targets/activate/',
  tags: ['Archive'],
  summary: 'Activate targets',
  request: { body: TargetIdsRequestBody },
  responses: {
    200: TargetIdsResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getTargetsAllAverageFixTimeIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/average_fix_time/',
  tags: ['Statistics'],
  summary: 'Average fix time graph data (all targets)',
  responses: { 200: AverageFixTimeResponse },
})

export const getTargetsAllNeedsAttentionPieIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/needs_attention_pie/',
  tags: ['Statistics'],
  summary: 'Targets with open vulnerabilities pie chart data',
  responses: { 200: NeedsAttentionPieResponse },
})

export const getTargetsAllNeedsAttentionTopIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/needs_attention_top/',
  tags: ['Statistics'],
  summary: 'Targets with open vulnerabilities',
  responses: { 200: NeedsAttentionTopResponse },
})

export const getTargetsAllRiskTrendIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/risk_trend/',
  tags: ['Statistics'],
  summary: 'Risk trend graph data (all targets)',
  responses: { 200: RiskTrendResponse },
})

export const getTargetsAllScansIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/scans/',
  tags: ['Scans'],
  summary: 'List scans for all targets',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
      started: ScanStartedParamsSchema,
      status: ScanStatusParamsSchema,
    }),
  },
  responses: { 200: ScanListResponse, 401: UnauthorizedErrorResponse },
})

export const getTargetsAllScheduledscansExpandedIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/scheduledscans/expanded/',
  tags: ['Scheduled'],
  summary: 'List scheduled scans for all targets expanding recurrence',
  request: { query: z.object({ length: PageLengthParamsSchema }) },
  responses: { 200: ScheduledArrayResponse, 404: NotFoundErrorResponse },
})

export const getTargetsAllSeverityTrendIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/severity_trend/',
  tags: ['Statistics'],
  summary: 'Severity trend graph data (all targets)',
  responses: { 200: SeverityTrendResponse },
})

export const getTargetsAllTopVulnsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/all/top_vulns/',
  tags: ['Statistics'],
  summary: 'Top 5 vulnerabilities (all targets).',
  responses: { 200: TopVulnsResponse },
})

export const postTargetsArchiveIndexRoute = createRoute({
  method: 'post',
  path: '/targets/archive/',
  tags: ['Archive'],
  summary: 'Archive targets',
  request: { body: TargetIdsRequestBody },
  responses: {
    200: TargetIdsResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postTargetsArchivedIndexRoute = createRoute({
  method: 'post',
  path: '/targets/archived/',
  tags: ['Archive'],
  summary: 'List archived targets',
  request: { body: TargetIdsRequestBody },
  responses: {
    200: TargetListResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getTargetsIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{id}/',
  tags: ['Targets'],
  summary: 'Retrieve target',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: TargetResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
    500: InternalServerErrorResponse,
  },
})

export const putTargetsIdIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{id}/',
  tags: ['Targets'],
  summary: 'Update target',
  request: { params: z.object({ id: IdParamsSchema }), body: TargetRequestBody },
  responses: {
    200: TargetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteTargetsIdIndexRoute = createRoute({
  method: 'delete',
  path: '/targets/{id}/',
  tags: ['Targets'],
  summary: 'Delete target',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsIdIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{id}/',
  tags: ['Targets'],
  summary: 'Partial update target',
  request: { params: z.object({ id: IdParamsSchema }), body: TargetRequestBody },
  responses: {
    200: TargetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdAssetsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/assets/',
  tags: ['Assets'],
  summary: "List target's assets",
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: { 200: AssetListResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const postTargetsTargetIdAssetsIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/assets/',
  tags: ['Assets'],
  summary: 'Create new asset',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: AssetRequestBody },
  responses: {
    201: AssetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdAssetsIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/assets/{id}/',
  tags: ['Assets'],
  summary: 'Retrieve asset',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    200: AssetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const putTargetsTargetIdAssetsIdIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/assets/{id}/',
  tags: ['Assets'],
  summary: 'Update asset',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: AssetRequestBody,
  },
  responses: {
    200: AssetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteTargetsTargetIdAssetsIdIndexRoute = createRoute({
  method: 'delete',
  path: '/targets/{target_id}/assets/{id}/',
  tags: ['Assets'],
  summary: 'Delete asset',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdAssetsIdIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/assets/{id}/',
  tags: ['Assets'],
  summary: 'Partial update assets',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: AssetRequestBody,
  },
  responses: {
    200: AssetResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postTargetsTargetIdAssetsIdVerifyIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/assets/{id}/verify/',
  tags: ['Assets'],
  summary: 'Verify asset ownership',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: SiteVerifyRequestBody,
  },
  responses: {
    200: SuccessMessageResponse,
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdAverageFixTimeIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/average_fix_time/',
  tags: ['Statistics'],
  summary: 'Average vulnerability trend graph data',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: AverageFixTimeResponse },
})

export const getTargetsTargetIdEventsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/events/',
  tags: ['Events'],
  summary: 'List target events',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: {
    200: EventListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdEventsIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/events/{id}/',
  tags: ['Events'],
  summary: 'Retrieve target event',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    200: EventResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdFindingsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/findings/',
  tags: ['Findings'],
  summary: 'List target findings',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({
      scan: ScanIdParamsSchema,
      severity: FindingSeverityParamsSchema,
      state: FindingStateParamsSchema,
      assignee: AssigneeParamsSchema,
      label: LabelParamsSchema,
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: FindingListResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postTargetsTargetIdFindingsBulkReportIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/findings/bulk/report/',
  tags: ['Findings'],
  summary: 'Finding report',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: FindingBulkIdsRequestBody,
  },
  responses: {
    200: { description: 'Token to retrieve report.\n' },
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postTargetsTargetIdFindingsBulkRetestIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/findings/bulk/retest/',
  tags: ['Findings'],
  summary: 'Bulk retest findings',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: FindingBulkRetestRequestBody,
  },
  responses: {
    200: { description: 'List of assessment IDs.\n' },
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdFindingsBulkUpdateIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/findings/bulk/update/',
  tags: ['Findings'],
  summary: 'Bulk update findings',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: FindingBulkUpdateRequestBody,
  },
  responses: {
    200: SuccessResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdFindingsReportIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/findings/report/',
  tags: ['Findings'],
  summary: 'Retrieve finding report PDF format',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({ token: FindingBulkReportParamsSchema }),
  },
  responses: {
    200: ReportResponse,
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdFindingsIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/findings/{id}/',
  tags: ['Findings'],
  summary: 'Retrieve finding',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: FindingResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const putTargetsTargetIdFindingsIdIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/findings/{id}/',
  tags: ['Findings'],
  summary: 'Update finding',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: FindingRequestBody,
  },
  responses: {
    200: FindingResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdFindingsIdIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/findings/{id}/',
  tags: ['Findings'],
  summary: 'Partial update finding',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: FindingRequestBody,
  },
  responses: {
    200: FindingResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/findings/{id}/integrations/jira-cloud/',
  tags: ['Jira Cloud Integration'],
  summary: 'Retrieve Jira Cloud finding configuration',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    200: JiraCloudFindingResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const putTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/findings/{id}/integrations/jira-cloud/',
  tags: ['Jira Cloud Integration'],
  summary: 'Update Jira Cloud finding configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: JiraCloudFindingRequestBody,
  },
  responses: {
    200: JiraCloudFindingResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdFindingsIdIntegrationsJiraCloudIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/findings/{id}/integrations/jira-cloud/',
  tags: ['Jira Cloud Integration'],
  summary: 'Update Jira Cloud finding configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: JiraCloudFindingRequestBody,
  },
  responses: {
    200: JiraCloudFindingResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/findings/{id}/integrations/jira-server/',
  tags: ['Jira Server Integration'],
  summary: 'Retrieve Jira Server finding configuration',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    200: JiraServerFindingResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const putTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/findings/{id}/integrations/jira-server/',
  tags: ['Jira Server Integration'],
  summary: 'Update Jira Server finding configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: JiraServerFindingRequestBody,
  },
  responses: {
    200: JiraServerFindingResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdFindingsIdIntegrationsJiraServerIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/findings/{id}/integrations/jira-server/',
  tags: ['Jira Server Integration'],
  summary: 'Update Jira Server finding configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: JiraServerFindingRequestBody,
  },
  responses: {
    200: JiraServerFindingResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdFindingsIdLogIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/findings/{id}/log/',
  tags: ['Findings'],
  summary: 'Finding activity log.',
  description: 'Finding activity log.',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ActivityResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const postTargetsTargetIdFindingsIdRetestIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/findings/{id}/retest/',
  tags: ['Findings'],
  summary: 'Retest finding',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    201: ScanResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdIntegrationsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/integrations/',
  tags: ['Integrations'],
  summary: 'Integrations available and installed for the target',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: {
    200: IntegrationsTargetResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const getTargetsTargetIdIntegrationsJiraCloudIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/integrations/jira-cloud/',
  tags: ['Jira Cloud Integration'],
  summary: 'Retrieve Jira Cloud Target configuration',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: {
    200: JiraCloudScopeResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const putTargetsTargetIdIntegrationsJiraCloudIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/integrations/jira-cloud/',
  tags: ['Jira Cloud Integration'],
  summary: 'Update Jira Cloud target configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: JiraCloudScopeRequestBody,
  },
  responses: {
    200: JiraCloudScopeResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdIntegrationsJiraCloudIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/integrations/jira-cloud/',
  tags: ['Jira Cloud Integration'],
  summary: 'Update Jira Cloud target configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: JiraCloudScopeRequestBody,
  },
  responses: {
    200: JiraCloudScopeResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdIntegrationsJiraServerIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/integrations/jira-server/',
  tags: ['Jira Server Integration'],
  summary: 'Retrieve Jira Server Target configuration',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: {
    200: JiraServerScopeResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const putTargetsTargetIdIntegrationsJiraServerIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/integrations/jira-server/',
  tags: ['Jira Server Integration'],
  summary: 'Update Jira Server target configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: JiraServerScopeRequestBody,
  },
  responses: {
    200: JiraServerScopeResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdIntegrationsJiraServerIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/integrations/jira-server/',
  tags: ['Jira Server Integration'],
  summary: 'Update Jira Server target configuration',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    body: JiraServerScopeRequestBody,
  },
  responses: {
    200: JiraServerScopeResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdIntegrationsSlackIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/integrations/slack/',
  tags: ['Slack Integration'],
  summary: 'Retrieve slack integration data',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: SlackResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const putTargetsTargetIdIntegrationsSlackIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/integrations/slack/',
  tags: ['Slack Integration'],
  summary: 'Update slack integration data',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: SlackRequestBody },
  responses: {
    200: SlackResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdIntegrationsSlackIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/integrations/slack/',
  tags: ['Slack Integration'],
  summary: 'Update slack integration data',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: SlackRequestBody },
  responses: {
    200: SlackResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdKeysIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/keys/',
  tags: ['API Keys'],
  summary: 'List target specific API keys',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: APIKeyListResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postTargetsTargetIdKeysIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/keys/',
  tags: ['API Keys'],
  summary: 'Create target API key',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: APIKeyRequestBody },
  responses: {
    201: APIKeyResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdKeysIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/keys/{id}/',
  tags: ['API Keys'],
  summary: 'Retrieve target API key',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: APIKeyResponse, 403: ForbiddenErrorResponse, 404: NotFoundErrorResponse },
})

export const deleteTargetsTargetIdKeysIdIndexRoute = createRoute({
  method: 'delete',
  path: '/targets/{target_id}/keys/{id}/',
  tags: ['API Keys'],
  summary: 'Delete target API key',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 204: NoContentResponse, 403: ForbiddenErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdRiskTrendIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/risk_trend/',
  tags: ['Statistics'],
  summary: 'Risk trend graph data',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: RiskTrendResponse },
})

export const postTargetsTargetIdScanNowIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/scan_now/',
  tags: ['Scans'],
  summary: 'Start a scan on the target',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: ScanOptionsRequestBody },
  responses: {
    200: ScanResponse,
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdScansIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/',
  tags: ['Scans'],
  summary: 'List scans',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
      started: ScanStartedParamsSchema,
      status: ScanStatusParamsSchema,
    }),
  },
  responses: { 200: ScanListResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScansDatesIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/dates/',
  tags: ['Scans'],
  summary: 'Dates where scans have ocurred',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: ScanDatesResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScansRetrievePageIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/retrieve_page/',
  tags: ['Scans'],
  summary: 'Scan page',
  description: 'Given a date return the page number',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({ length: PageLengthParamsSchema, date: ScanDateParamsSchema }),
  },
  responses: {
    200: DatePageResponse,
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdScansIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/{id}/',
  tags: ['Scans'],
  summary: 'Retrieve scan',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ScanResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const postTargetsTargetIdScansIdCancelIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/scans/{id}/cancel/',
  tags: ['Scans'],
  summary: 'Cancel running scan',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    200: ScanResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdScansIdEndpointsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/{id}/endpoints/',
  tags: ['Scans'],
  summary: 'Scan endpoints file',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    200: EndpointCSVResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdScansIdReportIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/{id}/report/',
  tags: ['Scans'],
  summary: 'Scan report PDF, using the report type specified for the target',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ReportResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScansIdReportDefaultIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/{id}/report/default/',
  tags: ['Scans'],
  summary: 'Scan report PDF, using the default report type',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ReportResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScansIdReportOwaspIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/{id}/report/owasp/',
  tags: ['Scans'],
  summary: 'Scan report PDF, using the OWASP report type',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ReportResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScansIdReportPciIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scans/{id}/report/pci/',
  tags: ['Scans'],
  summary: 'Scan report PDF, using the PCI report type',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ReportResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScheduledscansIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scheduledscans/',
  tags: ['Scheduled'],
  summary: 'List scheduled scans',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: ScheduledListResponse,
    401: UnauthorizedErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const postTargetsTargetIdScheduledscansIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/scheduledscans/',
  tags: ['Scheduled'],
  summary: 'Create new scheduled scan',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: ScheduledRequestBody },
  responses: {
    201: ScheduledResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdScheduledscansExpandedIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scheduledscans/expanded/',
  tags: ['Scheduled'],
  summary: 'List scheduled scans expanding recurrence',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema }),
    query: z.object({ length: PageLengthParamsSchema }),
  },
  responses: { 200: ScheduledArrayResponse, 404: NotFoundErrorResponse },
})

export const getTargetsTargetIdScheduledscansIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/scheduledscans/{id}/',
  tags: ['Scheduled'],
  summary: 'Retrieve a scheduled scan',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: ScheduledResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const putTargetsTargetIdScheduledscansIdIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/scheduledscans/{id}/',
  tags: ['Scheduled'],
  summary: 'Update a scheduled scan',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: ScheduledRequestBody,
  },
  responses: {
    200: ScheduledResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteTargetsTargetIdScheduledscansIdIndexRoute = createRoute({
  method: 'delete',
  path: '/targets/{target_id}/scheduledscans/{id}/',
  tags: ['Scheduled'],
  summary: 'Delete',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const patchTargetsTargetIdScheduledscansIdIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/scheduledscans/{id}/',
  tags: ['Scheduled'],
  summary: 'Partial update',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: ScheduledRequestBody,
  },
  responses: {
    200: ScheduledResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdSeverityTrendIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/severity_trend/',
  tags: ['Statistics'],
  summary: 'Severity trend graph data.',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: SeverityTrendResponse },
})

export const getTargetsTargetIdSiteIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/site/',
  tags: ['Site'],
  summary: "Retrieve target's site",
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: SiteResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
  deprecated: true,
})

export const putTargetsTargetIdSiteIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/site/',
  tags: ['Site'],
  summary: "Update target's site",
  description: 'Note that the URL can only be set once.',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: SiteRequestBody },
  responses: {
    200: SiteResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
  deprecated: true,
})

export const patchTargetsTargetIdSiteIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/site/',
  tags: ['Site'],
  summary: "Partial update target's site",
  description: 'Note that the URL can only be set once.',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: SiteRequestBody },
  responses: {
    200: SiteResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
  deprecated: true,
})

export const postTargetsTargetIdSiteVerifyIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/site/verify/',
  tags: ['Site'],
  summary: 'Verify site ownership',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: SiteVerifyRequestBody },
  responses: {
    200: SuccessMessageResponse,
    400: BadRequestErrorMessageResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
  deprecated: true,
})

export const getTargetsTargetIdTopVulnsIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/top_vulns/',
  tags: ['Statistics'],
  summary: 'Top 5 vulnerabilities',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: { 200: TopVulnsResponse },
})

export const getTargetsTargetIdWebhooksIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/webhooks/',
  tags: ['Events'],
  summary: 'List target webhooks',
  request: { params: z.object({ target_id: TargetIdParamsSchema }) },
  responses: {
    200: WebhookListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postTargetsTargetIdWebhooksIndexRoute = createRoute({
  method: 'post',
  path: '/targets/{target_id}/webhooks/',
  tags: ['Events'],
  summary: 'Create new target webhook',
  request: { params: z.object({ target_id: TargetIdParamsSchema }), body: WebhookRequestBody },
  responses: {
    201: WebhookResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getTargetsTargetIdWebhooksIdIndexRoute = createRoute({
  method: 'get',
  path: '/targets/{target_id}/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Retrieve target webhook',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: { 200: WebhookResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const putTargetsTargetIdWebhooksIdIndexRoute = createRoute({
  method: 'put',
  path: '/targets/{target_id}/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Update target webhook',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: WebhookRequestBody,
  },
  responses: {
    200: WebhookResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteTargetsTargetIdWebhooksIdIndexRoute = createRoute({
  method: 'delete',
  path: '/targets/{target_id}/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Delete target webhook',
  request: { params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchTargetsTargetIdWebhooksIdIndexRoute = createRoute({
  method: 'patch',
  path: '/targets/{target_id}/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Partial update target webhook',
  request: {
    params: z.object({ target_id: TargetIdParamsSchema, id: IdParamsSchema }),
    body: WebhookRequestBody,
  },
  responses: {
    200: WebhookResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getUsersIndexRoute = createRoute({
  method: 'get',
  path: '/users/',
  tags: ['Users'],
  summary: 'List users',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: { 200: UserListResponse, 401: UnauthorizedErrorResponse },
})

export const postUsersIndexRoute = createRoute({
  method: 'post',
  path: '/users/',
  tags: ['Users'],
  summary: 'Create/Reactivate a user.',
  request: { body: UserRequestBody },
  responses: { 201: UserResponse },
})

export const getUsersIdIndexRoute = createRoute({
  method: 'get',
  path: '/users/{id}/',
  tags: ['Users'],
  summary: 'Retrieve user',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: UserResponse, 401: UnauthorizedErrorResponse, 404: NotFoundErrorResponse },
})

export const putUsersIdIndexRoute = createRoute({
  method: 'put',
  path: '/users/{id}/',
  tags: ['Users'],
  summary: 'Update user',
  request: { params: z.object({ id: IdParamsSchema }), body: UserRequestBody },
  responses: {
    200: UserResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteUsersIdIndexRoute = createRoute({
  method: 'delete',
  path: '/users/{id}/',
  tags: ['Users'],
  summary: 'Deactivate a user',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchUsersIdIndexRoute = createRoute({
  method: 'patch',
  path: '/users/{id}/',
  tags: ['Users'],
  summary: 'Partial update user',
  request: { params: z.object({ id: IdParamsSchema }), body: UserRequestBody },
  responses: {
    200: UserResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getVulnerabilityDefinitionsIndexRoute = createRoute({
  method: 'get',
  path: '/vulnerability_definitions/',
  tags: ['Vulnerabilities'],
  summary: 'List vulnerability definitions',
  request: {
    query: z.object({
      page: PageParamsSchema,
      length: PageLengthParamsSchema,
      ordering: OrderingParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: { 200: VulnerabilityDefinitionListResponse, 401: UnauthorizedErrorResponse },
})

export const getVulnerabilityDefinitionsIdIndexRoute = createRoute({
  method: 'get',
  path: '/vulnerability_definitions/{id}/',
  tags: ['Vulnerabilities'],
  summary: 'Retrieve vulnerability definition',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: VulnerabilityDefinitionResponse, 401: UnauthorizedErrorResponse },
})

export const getWebhooksIndexRoute = createRoute({
  method: 'get',
  path: '/webhooks/',
  tags: ['Events'],
  summary: 'List account webhooks',
  responses: {
    200: WebhookListResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
  },
})

export const postWebhooksIndexRoute = createRoute({
  method: 'post',
  path: '/webhooks/',
  tags: ['Events'],
  summary: 'Create new account webhook',
  request: { body: WebhookRequestBody },
  responses: {
    201: WebhookResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const getWebhooksIdIndexRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Retrieve account webhook',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 200: WebhookResponse, 401: UnauthorizedErrorResponse, 403: ForbiddenErrorResponse },
})

export const putWebhooksIdIndexRoute = createRoute({
  method: 'put',
  path: '/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Update account webhook',
  request: { params: z.object({ id: IdParamsSchema }), body: WebhookRequestBody },
  responses: {
    200: WebhookResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const deleteWebhooksIdIndexRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Delete account webhook',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: NoContentResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})

export const patchWebhooksIdIndexRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{id}/',
  tags: ['Events'],
  summary: 'Partial update account webhook',
  request: { params: z.object({ id: IdParamsSchema }), body: WebhookRequestBody },
  responses: {
    200: WebhookResponse,
    400: BadRequestErrorResponse,
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: NotFoundErrorResponse,
  },
})
