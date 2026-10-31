import { createRoute, z } from '@hono/zod-openapi'

const AccessModeSchema = z
  .object({
    delete: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether share allows visitors to delete contents' }),
    download: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether share allows visitors to download' }),
    modify: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether share allows visitors to rename or move contents.' }),
    upload: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether share allows visitors to upload' }),
  })
  .openapi({
    description: 'An object defining what a not-logged-in visitor can do with the share contents',
    title: 'AccessMode',
    required: [],
  })
  .openapi('AccessMode')

const BrandingSettingsSchema = z
  .object({
    companyName: z.string().exactOptional().openapi({ example: null }),
    customEmail: z.email().exactOptional().openapi({ example: 'custom@example.com' }),
    logo: z.string().exactOptional().openapi({ example: 'examplelogo.png' }),
    logoExt: z.string().exactOptional().openapi({ example: 'png' }),
    theme: z.string().exactOptional().openapi({ example: 'default' }),
    verifiedDomain: z.string().exactOptional(),
    verifiedDomainId: z.string().exactOptional(),
    verifiedDomainValid: z.boolean().exactOptional(),
  })
  .openapi({ title: 'BrandingSettings', required: [] })
  .openapi('BrandingSettings')

const PlanDetailsSchema = z
  .object({
    apiKeys: z.int().exactOptional(),
    apiTokens: z.int().exactOptional(),
    colorSchema: z.boolean().exactOptional(),
    customDomain: z.boolean().exactOptional(),
    customName: z.boolean().exactOptional(),
    directLinks: z.boolean().exactOptional(),
    ipWhitelist: z.boolean().exactOptional(),
    sharingOptions: z.array(z.string()).exactOptional(),
    sshKeys: z.int().exactOptional(),
    storageAddOn: z.int().exactOptional(),
    unlimitedUsers: z.boolean().exactOptional(),
    userExpiration: z.boolean().exactOptional(),
    userImport: z.boolean().exactOptional(),
    webhookOptions: z
      .object({
        amount: z.int().exactOptional(),
        includeTriggers: z.string().exactOptional(),
        restrictionTypes: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'PlanDetails', required: [] })
  .openapi('PlanDetails')

const QuotaSchema = z
  .object({
    bandwidthLimit: z
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
        description: 'Total number of bytes that can be transferred per month.',
      }),
    bandwidthUsed: z
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
        description: 'Number of bytes transferred this month.',
      }),
    diskLimit: z
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
          'Amount of disk space that the account has available to it. This may be increased by upgrading to a larger plan.',
        example: 375809638400,
      }),
    diskUsed: z
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
        description: 'Amount of disk space currently in use.',
        example: 1225352192,
      }),
    noticeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Should a quota warning be sent to the account owner when a threshold level of space utilization is reached?',
        example: true,
      }),
    noticeThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Treshold that triggers a quota notification. This represents the "percent full" your account must be before the quota notification is generated.',
        example: 80,
      }),
    transactionsLimit: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of transactions allowed in a 24-hour period.' }),
    transactionsNoticeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether an email should be sent to the account owner up to once per day if transaction usage exceeds `transactionsNoticeThreshold` value.',
      }),
    transactionsNoticeThreshold: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Percent of daily transactions limit that will trigger an email if activity exceeds it.',
      }),
  })
  .openapi({ title: 'Quota', required: [] })
  .openapi('Quota')

const AccountAttributesSchema = z
  .object({
    accountName: z.string().exactOptional().openapi({ description: 'Name of the account' }),
    accountOnboarding: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the web application onboarding help is enabled for new users in the account.',
        example: false,
      }),
    allowedIp: z
      .array(
        z
          .object({ ipEnd: z.string().exactOptional(), ipStart: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Range of IP addresses allowed to access this account.',
        example: [{ ipEnd: '192.30.24.5', ipStart: '192.30.23.2' }],
      }),
    branding: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description:
          'Branding flag. Set to `true` if the account has branding functionality enabled.',
        example: true,
      }),
    brandingSettings: BrandingSettingsSchema.exactOptional(),
    clientId: z
      .int32()
      .exactOptional()
      .openapi({
        description: '(ExaVault Use Only) Internal ID of the account in CMS.',
        example: 1,
      }),
    complexPasswords: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate whether the account requires complex passwords. Set to `true` to require complex passwords on all users and shares.',
        example: false,
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of account creation.', example: '2017-01-12T09:06:21Z' }),
    customDomain: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description:
          'Custom domain flag. Set to `true` if account type allows custom domain functionality.',
        example: true,
      }),
    customSignature: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom signature for all account emails users or recipients will receive.',
        example: null,
      }),
    externalDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Custom domain used to brand this account.', example: [] }),
    maxUsers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of users the account can have. This can be increased by contacting ExaVault Support.',
        example: 1000,
      }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of account modification.',
        example: '2017-06-03T20:42:05Z',
      }),
    planDetails: PlanDetailsSchema.exactOptional(),
    quota: QuotaSchema.exactOptional(),
    secureOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate whether the account disables connections via insecure protocols (e.g. FTP). Set to `true` to disable all traffic over port 21.',
        example: false,
      }),
    showReferralLinks: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate showing of referrals links in the account. Set to `true` to include marketing messages in share invitations.',
        example: true,
      }),
    status: z
      .union([z.literal(1), z.literal(0)])
      .exactOptional()
      .openapi({
        description:
          'Account status flag. A one (1) means the account is active; zero (0) means it is suspended.',
        example: 1,
      }),
    userCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Current number of users on the account.', example: 3 }),
    welcomeEmailContent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Content of welcome email each new user will receive.',
        example: 'Welcome to your new account!',
      }),
    welcomeEmailSubject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Subject of welcome email each new user will receive.',
        example: 'ExaVault File Sharing Account',
      }),
  })
  .openapi({ description: '', title: '', required: [] })
  .openapi('AccountAttributes')

const AccountSchema = z
  .object({
    attributes: AccountAttributesSchema.exactOptional(),
    id: z.int32().exactOptional().openapi({ description: 'Account ID', example: 13758 }),
    relationships: z
      .object({
        masterUser: z
          .object({
            data: z
              .object({
                id: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'ID of master user for account' }),
                type: z.literal('user').exactOptional().openapi({ example: 'user' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ title: 'MasterUser', required: [] }),
    type: z.literal('account').exactOptional().openapi({ description: 'Type of item. "account"' }),
  })
  .openapi({
    description: 'Object contains all account properties.',
    title: 'Account',
    required: [],
  })
  .openapi('Account')

const UserPermissionsSchema = z
  .object({
    changePassword: z.boolean().openapi({ description: 'Change (own) password permission flag' }),
    delete: z.boolean().openapi({ description: 'Delete permission flag' }),
    deleteFormData: z
      .boolean()
      .openapi({
        description:
          'Delete form data permission flag. If true, user can remove data that was submitted for a receive folder. This applies only to data submitted in the receive folder form, not the actual files uploaded.',
      }),
    download: z.boolean().openapi({ description: 'Download permission flag' }),
    list: z.boolean().openapi({ description: 'View folder contents permission flag' }),
    modify: z.boolean().openapi({ description: 'Modify permission flag' }),
    notification: z.boolean().openapi({ description: 'Notifications permission flag' }),
    share: z.boolean().openapi({ description: 'Sharing permission flag' }),
    upload: z.boolean().openapi({ description: 'Upload permission flag' }),
    viewFormData: z
      .boolean()
      .openapi({
        description:
          'Access Form Data permission flag. If true, user can view submissions that have been stored for a receive folder. This includes any data submitted in the receive folder form.',
      }),
  })
  .openapi({
    required: [
      'download',
      'upload',
      'modify',
      'delete',
      'list',
      'changePassword',
      'share',
      'notification',
      'viewFormData',
      'deleteFormData',
    ],
    title: 'UserPermissions',
  })
  .openapi('UserPermissions')

const UserAttributesSchema = z
  .object({
    accessTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of most recent successful user login.',
        example: '2011-03-21T00:18:56-07:00',
      }),
    accountName: z
      .string()
      .openapi({
        description: 'Name of the account this user belongs to.',
        example: 'exampleaccount',
      }),
    created: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp of user creation.',
        example: '2018-07-27T15:43:55-07:00',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the user.', example: 'example@exavault.mail' }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of user expiration.',
        example: '2020-06-30T13:33:30-07:00',
      }),
    firstLogin: z
      .boolean()
      .exactOptional()
      .openapi({ description: '`true` if the user has logged into the system.', example: false }),
    homePath: z
      .string()
      .exactOptional()
      .openapi({ description: "Path to the user's home folder.", example: '/' }),
    locked: z
      .boolean()
      .exactOptional()
      .openapi({ description: '`true` if the user is locked and cannot log in.', example: false }),
    modified: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp of user modification.',
        example: '2018-07-29T15:43:55-07:00',
      }),
    nickname: z.string().openapi({ description: 'Nickname of the user.', example: 'exampleuser' }),
    onboarding: z
      .boolean()
      .openapi({
        description:
          'Whether the onboarding help system is enabled for this user. `true` means that additional help popups are displayed in the web application for this user.',
        example: false,
      }),
    permissions: UserPermissionsSchema,
    role: z
      .enum(['user', 'admin', 'master'])
      .openapi({ description: "User's access level", example: 'user' }),
    status: z
      .union([z.literal(0), z.literal(1)])
      .openapi({
        description:
          'Indicates user activity status. `0` means the user is locked and cannot log in. `1` means the user is active and can log in.',
        example: 1,
      }),
    timeZone: z
      .string()
      .openapi({
        description:
          "User's timezone. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.",
        example: 'America/Chicago',
      }),
    username: z.string().openapi({ description: 'Username of the user.', example: 'exampleuser' }),
  })
  .openapi({
    description: 'Attributes of the user including expiration, home directory, and permissions. ',
    required: [
      'status',
      'created',
      'modified',
      'accountName',
      'username',
      'nickname',
      'homeResource',
      'permissions',
      'role',
      'timeZone',
      'onboarding',
    ],
    title: 'UserAttributes',
  })
  .openapi('UserAttributes')

const UserSchema = z
  .object({
    attributes: UserAttributesSchema.exactOptional(),
    id: z.int32().exactOptional().openapi({ description: 'ID of the user.', example: 655621 }),
    relationships: z
      .object({
        homeResource: z
          .object({
            data: z
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
                    description: 'ID of home directory resource.',
                  }),
                type: z
                  .literal('resource')
                  .exactOptional()
                  .openapi({ description: 'Type is resource.', example: 'resource' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        ownerAccount: z
          .object({
            data: z
              .object({
                id: z.int32().exactOptional().openapi({ description: 'ID of the account.' }),
                type: z
                  .literal('account')
                  .exactOptional()
                  .openapi({ description: 'Type is account.', example: 'account' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({
        description: 'Home resource and owner account relationship data for the user. ',
        required: ['ownerAccount'],
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of object being returned. Always "user"', example: 'user' }),
  })
  .openapi({ description: 'Object contains user properties.', title: 'User', required: [] })
  .openapi('User')

const AccountResponseSchema = z
  .object({
    data: AccountSchema.exactOptional(),
    included: z
      .array(UserSchema)
      .exactOptional()
      .openapi({
        description:
          'Array can contain objects specified in include param of the get call e.g User object',
      }),
    responseStatus: z.int().exactOptional().openapi({ example: 200 }),
  })
  .openapi({ title: 'AccountResponse', required: [] })
  .openapi('AccountResponse')

const EmailListAttributesSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Created datetime' }),
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Recipient emails in the email list' }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Modified datetime' }),
    name: z.string().exactOptional().openapi({ description: 'Short title for email list' }),
  })
  .openapi({
    description: 'Information for the email list, including its short title and recipient emails',
    title: 'EmailListAttributes',
    required: [],
  })
  .openapi('EmailListAttributes')

const RelationshipDataSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'ID number of related record' }),
    type: z.string().exactOptional().openapi({ description: 'Kind of record' }),
  })
  .openapi({
    description: 'Identifying info for related record',
    title: 'RelationshipData',
    required: [],
  })
  .openapi('RelationshipData')

const EmailListOwnerUserSchema = z
  .object({ data: RelationshipDataSchema.exactOptional() })
  .openapi({
    description: 'Information for user who owns the email list',
    title: 'EmailListOwnerUser',
    required: [],
  })
  .openapi('EmailListOwnerUser')

const EmailListRelationshipsSchema = z
  .object({ ownerUser: EmailListOwnerUserSchema.exactOptional() })
  .openapi({
    description: 'Related record summary info',
    title: 'EmailListRelationships',
    required: [],
  })
  .openapi('EmailListRelationships')

const EmailListSchema = z
  .object({
    attributes: EmailListAttributesSchema.exactOptional(),
    id: z.int().exactOptional().openapi({ description: 'ID of the email list' }),
    relationships: EmailListRelationshipsSchema.exactOptional(),
    type: z.string().exactOptional().openapi({ description: 'Type of record. "emailList"' }),
  })
  .openapi({ description: 'A single email group list', title: 'EmailList', required: [] })
  .openapi('EmailList')

const EmailListCollectionResponseSchema = z
  .object({
    data: z.array(EmailListSchema).exactOptional(),
    included: z.array(UserSchema).exactOptional(),
    responseStatus: z.int().exactOptional().openapi({ description: 'Http status of response' }),
    returnedResults: z.int().min(0).exactOptional(),
    totalResults: z.int().min(0).exactOptional(),
  })
  .openapi({
    description: 'Response object for list of email lists',
    title: 'EmailListCollectionResponse',
    required: [],
  })
  .openapi('EmailListCollectionResponse')

const EmailListResponseSchema = z
  .object({
    data: EmailListSchema.exactOptional(),
    included: z.array(UserSchema).exactOptional(),
    responseStatus: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Http Status code', example: 200 }),
  })
  .openapi({
    description: 'Response object for a single email list.',
    title: 'EmailListResponse',
    required: [],
  })
  .openapi('EmailListResponse')

const EmptyResponseSchema = z
  .object({
    data: z.array(z.string()).exactOptional().openapi({ example: [] }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
  })
  .openapi({ title: 'EmptyResponse', required: [] })
  .openapi('EmptyResponse')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specific internal error string.', example: '<_ERROR_CODE>' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'human-readable explanation specific to this occurrence of the problem.',
        example: '<_DETAIL>',
      }),
    meta: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Meta object containing non-standard meta-information about the error.',
        example: '<_META_OBJECT>',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable summary of the problem.', example: '<_TITLE>' }),
  })
  .openapi({ title: 'Error', required: [] })
  .openapi('Error')

const FormFieldSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'ID of the form field. ', example: 1185 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label of the field.', example: 'Your Name' }),
    order: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Order that field appears on the form, starting from 0',
        example: 0,
      }),
    settings: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Secondary description of field.', example: null }),
        isRequired: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether this field must be completed before form can be submitted',
            example: false,
          }),
        senderEmail: z.boolean().exactOptional(),
        useAsFolderName: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether to place submitted files into a subfolder named the contents of this field. Only takes effect when the `fileDropCreateFolders` parameter on the receive folder is `true`. `isRequired` must be set to `true` if this setting is `true`.',
            example: false,
          }),
        width: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'How much of the available width the field should occupy',
            example: 0.5,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Advanced field settings', required: [] }),
    type: z
      .enum(['email', 'textarea', 'name', 'text'])
      .exactOptional()
      .openapi({ description: 'Field type' }),
  })
  .openapi({ title: 'FormField', required: [] })
  .openapi('FormField')

const FormAttributesSchema = z
  .object({
    cssStyles: z
      .string()
      .exactOptional()
      .openapi({
        description: 'CSS Styles of the form.',
        example:
          '#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}',
      }),
    elements: z
      .array(FormFieldSchema)
      .exactOptional()
      .openapi({
        description: 'Array of form fields defined for the form',
        example: [
          {
            id: 234,
            name: 'Project ID',
            order: 0,
            settings: { description: null, isRequired: false, useAsFolderName: false, width: 1 },
            type: 'name',
          },
          {
            id: 235,
            name: 'Your Email',
            order: 1,
            setings: {
              description: 'Enter your email from the registration system',
              isRequired: true,
              senderEmail: true,
              useAsFolderName: true,
              width: 1,
            },
            type: 'email',
          },
          {
            id: 236,
            name: 'Upload Area',
            order: 2,
            settings: { fileTypes: null },
            type: 'upload_area',
          },
        ],
      }),
    formDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text that appears at the top of a receive form',
        example: 'Upload your photos to us',
      }),
    submitButtonText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text that appears on the submit button for the form',
        example: 'Send Files',
      }),
    successMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Message displayed to submitter after files are uploaded',
        example: 'Your files were uploaded',
      }),
  })
  .openapi({
    description: "Attributes of the form including it's included fields and css styles",
    title: 'FormAttributes',
    required: [],
  })
  .openapi('FormAttributes')

const FormSchema = z
  .object({
    attributes: FormAttributesSchema.exactOptional(),
    id: z.int32().exactOptional().openapi({ description: 'ID of the form.', example: 823752 }),
    relationships: z
      .object({
        share: z
          .object({
            data: z
              .object({
                id: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'ID of the share. ', example: 22 }),
                type: z
                  .literal('share')
                  .exactOptional()
                  .openapi({ description: 'Type is share. ', example: 'share' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Share relationship data of the form. ', required: [] }),
    type: z.string().exactOptional().openapi({ description: 'Type is "form".', example: 'form' }),
  })
  .openapi({ description: 'Regular form object.', title: 'Form', required: [] })
  .openapi('Form')

const FormEntryFieldSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field name', example: 'Email Adress' }),
    order: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Field order in the form', example: 1 }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field value', example: 'example@example.com' }),
  })
  .openapi({
    description: 'Attributes of the form including its included fields and css styles',
    title: 'FormEntryField',
    required: [],
  })
  .openapi('FormEntryField')

const FormEntrySchema = z
  .object({
    attributes: z
      .object({
        created: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'Timestamp of the submission', example: '2019-09-19T18:00:00Z' }),
        fields: z.array(FormEntryFieldSchema).exactOptional(),
        modified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Timestamp of the field modified date',
            example: '2019-09-20T18:00:00Z',
          }),
        paths: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'Full paths to files associated with the form submission',
            example: ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
          }),
        status: z
          .enum(['pending', 'completed'])
          .exactOptional()
          .openapi({ description: 'Form entry status', example: 'completed' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'Form entry id', example: 12345 }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of item. "formEntry"', example: 'formEntry' }),
  })
  .openapi({
    description: 'Contains the data submitted for a form.',
    title: 'FormEntry',
    required: [],
  })
  .openapi('FormEntry')

const FormEntryResponseSchema = z
  .object({
    data: z
      .array(FormEntrySchema)
      .exactOptional()
      .openapi({ description: 'Object submissions data for form.' }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of returned results. ', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found. ', example: 2 }),
  })
  .openapi({
    description: 'Response object of the form data.',
    example: {
      data: [
        {
          attributes: {
            created: '2020-09-15T05:36:41-07:00',
            fields: [{ name: 'Email Address', order: 1, value: 'test451@example.com' }],
            modified: '2020-09-16T05:36:44-07:00',
            paths: ['/example/test451@example.com/1.csv', '/example/test451@example.com/2.csv'],
            status: 'completed',
          },
          id: 320721,
          type: 'formEntry',
        },
        {
          attributes: {
            created: '2020-09-16T05:36:41-07:00',
            fields: [{ name: 'Email Address', order: 1, value: 'test455@example.com' }],
            modified: '2020-09-17T05:36:44-07:00',
            paths: ['/example/test455@example.com/1.csv', '/example/test455@example.com/2.csv'],
            status: 'completed',
          },
          id: 32021,
          type: 'formEntry',
        },
      ],
      responseStatus: 200,
      returnedResults: 2,
      totalResults: 2,
    },
    title: 'FormEntryResponse',
    required: [],
  })
  .openapi('FormEntryResponse')

const FormFieldUploadAreaSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'ID of the form field. ', example: 1103 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label of the field (not used).', example: 'Upload Area' }),
    order: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Order that field appears on the form, starting from 0',
        example: 0,
      }),
    settings: z
      .object({
        fileTypes: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'File types that can be uploaded. Comma-delimited string of MIME file types.',
            example: null,
          }),
      })
      .exactOptional()
      .openapi({ description: 'Advanced field settings', required: [] }),
    type: z.literal('upload_area').exactOptional().openapi({ description: 'Type is upload_area.' }),
  })
  .openapi({ title: 'FormFieldUploadArea', required: [] })
  .openapi('FormFieldUploadArea')

const ShareMessageSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Share invitation message text.',
        example: 'You have files available for download.',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of message creation.', example: '2017-01-26T18:10:47Z' }),
    id: z.int32().exactOptional().openapi({ description: 'Message id.', example: 397584 }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of message modification.',
        example: '2017-01-28T13:10:47Z',
      }),
    shareId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'ID of associated share', example: 3544253 }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Share invitation message subject.',
        example: 'Files available for download',
      }),
    userId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'User ID who generated share invite', example: 119394 }),
  })
  .openapi({ title: 'Message', required: [] })
  .openapi('ShareMessage')

const ShareRecipientSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of adding recipient to the share.',
        example: '2017-01-26T18:10:47Z',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Recipient email address.', example: 'recipient@example.com' }),
    hash: z.string().exactOptional().openapi({ description: 'Share hash.', example: 'fseowxan' }),
    id: z.int32().exactOptional().openapi({ description: 'ID of the recipient.', example: 2 }),
    received: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description:
          'Set to true if recipient has accessed the share. Note this is set to true when the recipient clicks the link to access the share; not when they download a file.',
        example: false,
      }),
    sent: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description: 'Set to true if invite email was sent; false otherwise.',
        example: true,
      }),
    shareId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the share that the recipoient belongs to.', example: 23 }),
    type: z
      .enum(['owner', 'direct'])
      .exactOptional()
      .openapi({ description: 'Type of the recipient.', example: 'owner' }),
  })
  .openapi({ title: 'ShareRecipient', required: [] })
  .openapi('ShareRecipient')

const ShareAttributesSchema = z
  .object({
    accessDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the share access rights.',
        example: 'Download only',
      }),
    accessMode: AccessModeSchema.exactOptional(),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of share creation.', example: '2017-01-28T13:10:47Z' }),
    embed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if share can be embedded.', example: false }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expiration date of the share.', example: null }),
    expired: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'True if the share has expired.', example: false }),
    fileDropCreateFolders: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description:
          'Flag to show if separate folders should be created for each file upload to receive folder.',
        example: false,
      }),
    formId: z.int().exactOptional().openapi({ description: 'ID of the form.' }),
    hasNotification: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'True if share has notification.', example: false }),
    hasPassword: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'True if the share has password.', example: false }),
    hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Share hash.', example: 'hd1e-3erufo72' }),
    inherited: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'True if share inherited from parent folder.', example: false }),
    messages: z
      .array(ShareMessageSchema)
      .exactOptional()
      .openapi({ description: 'Array of invitation messages.' }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Timestamp of share modification. Can be `null` if it wasn't modified.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Share name.', example: 'Example Folder' }),
    ownerHash: z
      .string()
      .exactOptional()
      .openapi({ description: "Share owner's hash.", example: 'hd1e-3erufo72-fsxak999' }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Path to the shared resource in your account.',
        example: ['/Example Folder'],
      }),
    public: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'True if the share has a public url.', example: true }),
    recipients: z
      .array(ShareRecipientSchema)
      .exactOptional()
      .openapi({
        description: 'Array of recipients.',
        example: [
          {
            created: '2017-04-21T10:53:47Z',
            email: 'recipient@example.com',
            hash: 'fseowxan',
            id: 2,
            received: false,
            sent: true,
            shareId: 23,
            type: 'direct',
          },
        ],
      }),
    requireEmail: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if share requires email to access.', example: true }),
    resent: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Invitations resent date. Can be `null` if resent never happened.',
        example: null,
      }),
    status: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description: 'Share activity status. Can be active (1) or deactivated (0).',
        example: 1,
      }),
    trackingStatus: z
      .enum(['complete', 'incomplete', 'pending'])
      .exactOptional()
      .openapi({
        description:
          "Checks recipient received status and returns whether it's been received (`complete`,) partial received (`incomplete`,) or not received yet (`pending`.)",
      }),
    type: z
      .enum(['shared_folder', 'send', 'receive'])
      .exactOptional()
      .openapi({ description: 'Type of share.', example: 'shared_folder' }),
  })
  .openapi({
    description: 'Attributes of the share including the name, path and share recipients. ',
    title: 'ShareAttributes',
    required: [],
  })
  .openapi('ShareAttributes')

const ShareSchema = z
  .object({
    attributes: ShareAttributesSchema.exactOptional(),
    id: z.int32().exactOptional().openapi({ description: 'ID of the share.', example: 655621 }),
    relationships: z
      .object({
        messages: z
          .array(
            z
              .object({
                data: z
                  .object({
                    id: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ID of the message.', example: 21 }),
                    type: z
                      .literal('message')
                      .exactOptional()
                      .openapi({ description: 'Type is message. ', example: 'message' }),
                  })
                  .exactOptional()
                  .openapi({ title: 'ShareMessageData', required: [] }),
              })
              .openapi({ title: 'ShareRelationshipsMessage', required: [] }),
          )
          .exactOptional(),
        notifications: z
          .array(
            z
              .object({
                data: z
                  .object({
                    id: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ID of the notification. ', example: 9 }),
                    type: z
                      .literal('notification')
                      .exactOptional()
                      .openapi({ description: 'Type is notification. ', example: 'notification' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ title: 'ShareRelationshipsNotification', required: [] }),
          )
          .exactOptional(),
        owner: z
          .object({
            data: z
              .object({
                id: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'ID of the owner.', example: 12345 }),
                type: z.string().exactOptional().openapi({ description: 'Type is user.' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ title: 'ShareRelationshipsOwner', required: [] }),
        resources: z
          .array(
            z
              .object({
                data: z
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
                        description: 'ID of the shared resource.',
                        example: 12345,
                      }),
                    type: z
                      .literal('resource')
                      .exactOptional()
                      .openapi({ description: 'Type is resource. ', example: 'resource' }),
                  })
                  .exactOptional()
                  .openapi({ title: 'ShareResourceData', required: [] }),
              })
              .openapi({ title: 'ShareRelationshipsResource', required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'Message, owner, resource, and notification relationships of the share. ',
        title: 'ShareRelationships',
        required: [],
      }),
    type: z
      .literal('share')
      .exactOptional()
      .openapi({ description: 'Type of the share. ', example: 'share' }),
  })
  .openapi({ description: 'Object contains share properties.', title: 'Share', required: [] })
  .openapi('Share')

const FormResponseSchema = z
  .object({
    data: FormSchema.exactOptional(),
    included: z.array(ShareSchema).exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
  })
  .openapi({
    description: 'Response object for forms.',
    title: 'Regular form response',
    required: [],
  })
  .openapi('FormResponse')

const NotificationRecipientSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of adding notification recipient.',
        example: '2011-03-21T00:18:56Z',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Recipient email.', example: 'exampleuser@example.com' }),
    id: z.int32().exactOptional().openapi({ description: 'ID of the recipient.', example: 2 }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of notification recipient modification.',
        example: '2011-03-21T00:18:56Z',
      }),
    notificationId: z
      .int()
      .exactOptional()
      .openapi({
        description: 'ID of the notification that the recipient belongs to.',
        example: 23,
      }),
  })
  .openapi({ title: 'NotificationRecipient', required: [] })
  .openapi('NotificationRecipient')

const NotificationAttributesSchema = z
  .object({
    action: z
      .enum(['upload', 'download', 'delete', 'all'])
      .exactOptional()
      .openapi({ description: 'Action that triggers notification.', example: 'all' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of notifiction creation.',
        example: '2011-03-21T00:18:56Z',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom message that will be sent to the notification recipients.',
        example: null,
      }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of notification modification.',
        example: '2011-03-21T00:18:56Z',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the item that the notification is set on.',
        example: 'examplefolder',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Path to the item that the notification is set on.',
        example: '/examplefolder',
      }),
    readableDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable description of the notification.',
        example: "anybody changes, downloads or deletes '/examplefile.jpg'",
      }),
    readableDescriptionWithoutPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable description of the notification without item path.',
        example: 'anybody changes or downloads this file',
      }),
    recipients: z
      .array(NotificationRecipientSchema)
      .exactOptional()
      .openapi({ description: 'Notification recipients.' }),
    sendEmail: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description: 'Whether or not an email will send when the notification is triggered.',
        example: true,
      }),
    shareId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the share that the notification belogns to.', example: null }),
    type: z
      .enum(['file', 'folder', 'shared_folder', 'send_receipt', 'share_receipt', 'file_drop'])
      .exactOptional()
      .openapi({
        description: 'Type of the resource the notification is attached to. ',
        example: 'folder',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the user that the notification belongs to.', example: 2 }),
    usernames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Detail on which users can trigger the notification.',
        example: ['notice_user_all'],
      }),
  })
  .openapi({
    description: 'Attributes for the notification including the path, recipients, and share data. ',
    title: 'NotificationAttributes',
    required: [],
  })
  .openapi('NotificationAttributes')

const NotificationSchema = z
  .object({
    attributes: NotificationAttributesSchema.exactOptional(),
    id: z.int32().exactOptional().openapi({ example: 1 }),
    relationships: z
      .object({
        ownerUser: z
          .object({
            data: z
              .object({
                id: z.int().exactOptional().openapi({ example: 12345 }),
                type: z.literal('user').exactOptional().openapi({ example: 'user' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        resource: z
          .object({
            data: z
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
                  .openapi({ type: 'integer', format: 'int64', example: 2345 }),
                type: z.string().exactOptional().openapi({ example: 'resource' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        share: z
          .object({
            data: z
              .object({
                id: z.int32().exactOptional().openapi({ example: 2 }),
                type: z.string().exactOptional().openapi({ example: 'share' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z.string().exactOptional().openapi({ example: 'notification' }),
  })
  .openapi({
    description: 'Object containing notification properties.',
    title: 'Notification',
    required: [],
  })
  .openapi('Notification')

const ResourceAttributesSchema = z
  .object({
    accessedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date-time of the time when resource was accessed.',
        example: '2011-03-21T00:18:56-07:00',
      }),
    accessedTime: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UNIX timestamp of last access' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date-time of resource creation.',
        example: '2011-03-21T00:18:56-07:00',
      }),
    createdBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the creator.', example: 'exampleuser' }),
    createdTime: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UNIX timestamp of resource creation' }),
    extension: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource extension. Property exists only if resource `type` is file.',
      }),
    fileCount: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of files within folder. null if resource type is a file.' }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique hash of the resource.',
        example: 'ec4aa9a91be282666a165899a14f29b1',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource name, e.g. the name of the file or folder.',
        example: 'examplefolder',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full path to the resource.', example: '/examplefolder' }),
    previewable: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description: 'Can resource be previewed. Property equals `null` if resource `type` is dir.',
        example: true,
      }),
    size: z
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
        description: 'Resource size in bytes',
        example: 0,
      }),
    type: z.enum(['file', 'dir']).exactOptional().openapi({ description: 'Type of the resource.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date-time of resource modification.',
        example: '2011-03-21T00:18:56-07:00',
      }),
    updatedTime: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UNIX timestamp of resource modification' }),
    uploadDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of resource upload.',
        example: '2011-03-21T00:18:56-07:00',
      }),
  })
  .openapi({ description: 'Attributes of resource', title: 'ResourceAttributes', required: [] })
  .openapi('ResourceAttributes')

const ResourceSchema = z
  .object({
    attributes: ResourceAttributesSchema.exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    relationships: z
      .object({
        directFile: z
          .object({
            data: z
              .object({
                id: z.int32().exactOptional().openapi({ example: 2 }),
                type: z.string().exactOptional().openapi({ example: 'directFile' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        notifications: z
          .array(
            z
              .object({
                data: z
                  .object({
                    id: z.int32().exactOptional().openapi({ example: 2 }),
                    type: z.string().exactOptional().openapi({ example: 'notification' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        parentResource: z
          .object({
            data: z
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
                  .openapi({ type: 'integer', format: 'int64', example: 2 }),
                type: z.string().exactOptional().openapi({ example: 'resource' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        share: z
          .object({
            data: z
              .object({
                id: z.int32().exactOptional().openapi({ example: 2345 }),
                type: z.string().exactOptional().openapi({ example: 'share' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .literal('resource')
      .exactOptional()
      .openapi({ description: 'Type of item. "resource"', example: 'resource' }),
  })
  .openapi({ description: 'All properties of the resource.', title: 'Resource', required: [] })
  .openapi('Resource')

const NotificationCollectionResponseSchema = z
  .object({
    data: z.array(NotificationSchema).exactOptional(),
    included: z
      .array(
        z
          .union([ShareSchema, UserSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of returned results.', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found. ', example: 2 }),
  })
  .openapi({
    description: 'Response object for notifications collection.',
    title: 'NotificationCollectionResponse',
    required: [],
  })
  .openapi('NotificationCollectionResponse')

const NotificationResponseSchema = z
  .object({
    data: NotificationSchema.exactOptional(),
    included: z
      .array(
        z
          .union([ShareSchema, UserSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
  })
  .openapi({
    description: 'Response object for notifications.',
    title: 'NotificationResponse',
    required: [],
  })
  .openapi('NotificationResponse')

const PreviewFileSchema = z
  .object({
    attributes: z
      .object({
        image: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Binary image content, base64 encoded.',
            example: 'iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAABGdBTUEAALGPC',
          }),
        imageHash: z
          .string()
          .exactOptional()
          .openapi({
            description: 'hash of the image.',
            example: '6afaa3ef4056dc602ccfc69ab52d6f40',
          }),
        pageCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Amount of pages available in the file. Used only for multipage documents.',
            example: 10,
          }),
        size: z
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
            description: 'Size of the image in bytes.',
            example: 2186,
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
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
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    type: z.string().exactOptional().openapi({ example: 'preview' }),
  })
  .openapi({
    description: 'Object with preview image properties.',
    title: 'PreviewFile',
    required: [],
  })
  .openapi('PreviewFile')

const PreviewFileResponseSchema = z
  .object({
    data: PreviewFileSchema.exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'HTTP Status Code', example: 200 }),
  })
  .openapi({
    description: 'Response object for preview file',
    title: 'PreivewFileResponse',
    required: [],
  })
  .openapi('PreviewFileResponse')

const ResourceCollectionResponseSchema = z
  .object({
    data: z.array(ResourceSchema).exactOptional(),
    included: z
      .array(
        z
          .union([UserSchema, AccountSchema, ResourceSchema, NotificationSchema, ShareSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Count of returned results.', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of results found.', example: 2 }),
  })
  .openapi({
    description: 'Response object for collection of resources.',
    title: 'ResourceCollectionResponse',
    required: [],
  })
  .openapi('ResourceCollectionResponse')

const ResourceCopyMoveSchema = z
  .object({
    data: ResourceSchema.exactOptional(),
    meta: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Meta object containing non-standard meta-information about the operation.',
        example: { id: 2321 },
      }),
  })
  .openapi({
    description: 'Resource which was successfully copied or moved.',
    title: 'ResourceCopyMove',
    required: [],
  })
  .openapi('ResourceCopyMove')

const ResourceDeleteSchema = z
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
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    meta: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Meta object containing non-standard meta-information about the delete operation.',
        example: { id: 2321 },
      }),
    type: z
      .literal('resource')
      .exactOptional()
      .openapi({ description: 'Type of item. "resource"', example: 'resource' }),
  })
  .openapi({
    description: 'All properties of the resource delete object',
    title: 'ResourceDelete',
    required: [],
  })
  .openapi('ResourceDelete')

const ResourceMultiResponseSchema = z
  .object({
    responses: z
      .array(
        z
          .union([ResourceDeleteSchema, ErrorSchema])
          .openapi({ discriminator: { propertyName: 'responseStatus' } }),
      )
      .exactOptional(),
  })
  .openapi({ title: 'ResourceDeleteMultiResponse', required: [] })
  .openapi('ResourceMultiResponse')

const ResourceResponseSchema = z
  .object({
    data: ResourceSchema.exactOptional(),
    included: z
      .array(
        z
          .union([UserSchema, AccountSchema, ResourceSchema, NotificationSchema, ShareSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
  })
  .openapi({
    description: 'Response object for resources.',
    title: 'ResourceResponse',
    required: [],
  })
  .openapi('ResourceResponse')

const SSHKeyAttributesSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date-time the SSH Key was created.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Key Fingerprint. The fingerprint can be used to identify and keep track of the key without exposing the actual credential. ',
      }),
    lastLogin: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date-time the SSH Key was last used to access ExaVault. ' }),
  })
  .openapi({ title: 'SSHKeysAttributes', required: [] })
  .openapi('SSHKeyAttributes')

const SSHKeySchema = z
  .object({
    attributes: SSHKeyAttributesSchema.exactOptional(),
    id: z.int32().exactOptional().openapi({ description: 'ID of the key.', example: 655621 }),
    relationships: z
      .object({
        ownerUser: z
          .object({
            data: z
              .object({ id: z.int().exactOptional(), type: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .literal('sshKey')
      .exactOptional()
      .openapi({ description: 'Type of the object. ', example: 'sshKey' }),
  })
  .openapi({
    description: 'Object representing an SSH Key associated with a user.',
    title: 'SSH Key',
    required: [],
  })
  .openapi('SSHKey')

const SSHKeyCollectionResponseSchema = z
  .object({
    data: z.array(SSHKeySchema).exactOptional(),
    included: z.array(UserSchema).exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of returned results.', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found. ', example: 2 }),
  })
  .openapi({ title: 'SSHKeyCollectionResponse', required: [] })
  .openapi('SSHKeyCollectionResponse')

const SSHKeyResponseSchema = z
  .object({
    data: SSHKeySchema.exactOptional(),
    included: z.array(UserSchema).exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.' }),
  })
  .openapi({ title: 'SSHKeyResponse', required: [] })
  .openapi('SSHKeyResponse')

const SessionActivityEntrySchema = z
  .object({
    attributes: z
      .object({
        bytesTransferred: z
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
          .openapi({ type: 'integer', format: 'int64', example: 10815676 }),
        created: z.string().exactOptional().openapi({ example: '2019-10-18T06:48:40Z' }),
        duration: z.int().exactOptional().openapi({ example: 5 }),
        fileName: z
          .string()
          .exactOptional()
          .openapi({ example: '/test2/Cassandra2020The20Definitive20Guide.2030947496.pdf' }),
        fileSource: z.string().exactOptional().openapi({ example: '' }),
        ipAddress: z.string().exactOptional().openapi({ example: '185.223.113.224' }),
        operation: z.string().exactOptional().openapi({ example: 'PASS' }),
        protocol: z.string().exactOptional().openapi({ example: 'web' }),
        sessionId: z
          .string()
          .exactOptional()
          .openapi({ example: '5da9b4a8bd961dfa0a56fa0dc15aaffe57069271b389e' }),
        status: z.string().exactOptional().openapi({ example: '-' }),
        username: z.string().exactOptional().openapi({ example: 'ykravchuk' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
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
      .openapi({ type: 'integer', format: 'int64', example: 12345 }),
    type: z.literal('sessionActivity').exactOptional().openapi({ example: 'sessionActivity' }),
  })
  .openapi({
    description: 'Single entry of session activity',
    title: 'SessionActivityEntry',
    required: [],
  })
  .openapi('SessionActivityEntry')

const SessionActivityResponseSchema = z
  .object({
    data: z.array(SessionActivityEntrySchema).exactOptional(),
    responseStatus: z.int().exactOptional().openapi({ example: 200 }),
    returnedResults: z.int().exactOptional().openapi({ example: 2 }),
    totalResults: z.int().exactOptional().openapi({ example: 2 }),
  })
  .openapi({
    description: 'Session activity list response',
    title: 'SessionActivityResponse',
    required: [],
  })
  .openapi('SessionActivityResponse')

const ShareCollectionResponseSchema = z
  .object({
    data: z.array(ShareSchema).exactOptional(),
    included: z
      .array(
        z
          .union([UserSchema, NotificationSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of returned results.', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found. ', example: 2 }),
  })
  .openapi({ title: 'ShareCollectionResponse', required: [] })
  .openapi('ShareCollectionResponse')

const ShareRecipientsResponseSchema = z
  .object({
    data: z
      .array(z.email())
      .exactOptional()
      .openapi({ example: ['test+3@example.com', 'test+4@example.com'] }),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
  })
  .openapi({ title: 'ShareRecipientsResponse', required: [] })
  .openapi('ShareRecipientsResponse')

const ShareResponseSchema = z
  .object({
    data: ShareSchema.exactOptional(),
    included: z
      .array(
        z
          .union([UserSchema, NotificationSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
  })
  .openapi({ description: 'Response object for shares.', title: 'ShareResponse', required: [] })
  .openapi('ShareResponse')

const UserCollectionResponseSchema = z
  .object({
    data: z.array(UserSchema).exactOptional(),
    included: z
      .array(
        z
          .union([AccountSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of results returned.', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found.', example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('UserCollectionResponse')

const UserResponseSchema = z
  .object({
    data: UserSchema.exactOptional(),
    included: z
      .array(
        z
          .union([AccountSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http code for the response.', example: 200 }),
  })
  .openapi({ description: 'Response object for users.', title: 'UserResponse', required: [] })
  .openapi('UserResponse')

const WebhookTriggersSchema = z
  .object({
    resources: z
      .object({
        compress: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Send webhook messages when resources are compressed into an archive.',
          }),
        copy: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when resources are copied.' }),
        createFolder: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when a new folder is created.' }),
        delete: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when resources are deleted' }),
        download: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when resources are downloaded.' }),
        extract: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Send webhook messages when resources are extracted from an archive.',
          }),
        move: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when resources are moved.' }),
        rename: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when resources are renamed.' }),
        upload: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Send webhook messages when resources are uploaded.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    shares: z
      .object({
        formSubmit: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Send webhook messages when a receive folder form is submitted.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ title: 'WebhookTriggers', required: [] })
  .openapi('WebhookTriggers')

const WebhookAttributesSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when webhook configuration was added to system.',
        example: '2021-03-04T22:22:00-08:00',
      }),
    endpointUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The endpoint is where the webhook request will be sent.',
        example: 'https://example.com/webhook',
      }),
    failed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether webhook has been disabled for too many consecutive failures',
      }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when webhook configuration was last modified',
        example: '2021-03-04T22:23:03-08:00',
      }),
    responseVersion: z
      .enum(['v1', 'v2'])
      .exactOptional()
      .openapi({
        description: 'The version of webhook request to send to the endpoint URL',
        example: 'v2',
      }),
    triggers: WebhookTriggersSchema.exactOptional(),
    verificationToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Token for verifying sender is ExaVault',
        example: '8df8200f7dee90ba4a41abe39c858c6c',
      }),
  })
  .openapi({ title: 'WebhookAttributes', 'x-examples': {}, required: [] })
  .openapi('WebhookAttributes')

const WebhookSchema = z
  .object({
    attributes: WebhookAttributesSchema.exactOptional(),
    id: z.int().exactOptional(),
    relationships: z
      .object({
        ownerAccount: z
          .object({
            data: z
              .object({
                id: z.int().exactOptional().openapi({ description: 'Account ID', example: 23422 }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Type of thing it is "account"', example: 'account' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        resource: z
          .object({
            data: z
              .object({
                id: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'ID of the resource associated with the webhook',
                    example: 134122,
                  }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Type of thing it is. "resource"', example: 'resource' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of thing it is. "webhook"', example: 'webhook' }),
  })
  .openapi({ title: 'Webhook', required: [] })
  .openapi('Webhook')

const WebhookActivityAttributesV1Schema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Unique ID of account' }),
    attemptId: z.string().exactOptional().openapi({ description: 'Event - retry identifier' }),
    created: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time of webhook message being generated by system' }),
    details: z
      .object({
        accountName: z.string().exactOptional().openapi({ description: 'Account master username' }),
        attempt: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of times the system has attempted to send' }),
        attemptId: z.string().exactOptional().openapi({ description: 'Entry - retry identifier' }),
        event: z.string().exactOptional().openapi({ description: 'Type of related activity' }),
        protocol: z
          .string()
          .exactOptional()
          .openapi({ description: 'Type of connection used for related activity' }),
        username: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Username logged for related activity. May refer to someone who is not a user of the account, such as a share recipient or "publ',
          }),
      })
      .exactOptional()
      .openapi({ title: 'WebhookV1Details', required: [] }),
    endpointUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL the message was sent to' }),
    event: z
      .enum([
        'resources.upload',
        'resources.download',
        'resources.delete',
        'resources.rename',
        'resources.copy',
        'resources.move',
        'resources.compress',
        'resources.extract',
        'resources.createFolder',
        'shares.formSubmit',
      ])
      .exactOptional()
      .openapi({ description: 'Event type' }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP Address of related activity' }),
    resend: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this attempt was a re-send of a previous attempt' }),
    resourcePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path of resource that matched webhook' }),
    response: z
      .string()
      .exactOptional()
      .openapi({ description: 'Body of web response returned by webhook listener' }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'HTTP Status Code returned by webhook listener' }),
    username: z.string().exactOptional().openapi({ description: 'Username of related activity' }),
    webhookFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'What version of webhook message is being sent `v1`' }),
    webhookId: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique ID of webhook configuration' }),
    webhookPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path that webhook is watching' }),
  })
  .openapi({ title: 'WebhookActivityAttributesV1', required: [] })
  .openapi('WebhookActivityAttributesV1')

const WebhookActivityAttributesV2Schema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Unique ID of account' }),
    attemptId: z.string().exactOptional().openapi({ description: 'Event - retry identifier' }),
    created: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time of webhook message being generated by system' }),
    details: z
      .object({
        accountName: z.string().exactOptional().openapi({ description: 'Account master username' }),
        attemptId: z.string().exactOptional().openapi({ description: 'Entry - retry identifier' }),
        event: z.string().exactOptional().openapi({ description: 'Type of related activity' }),
        eventData: z
          .object({
            formDetails: z.array(z.object({})).exactOptional(),
            resources: z
              .array(
                z
                  .object({
                    accessedAt: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({
                        description: 'Date and time resource was most recently downloaded',
                      }),
                    createdAt: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'Date and time of resource creation' }),
                    createdBy: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Username who originally created resource' }),
                    fileCount: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Number of resources contained in this folder. If this is a file, fileCount is null',
                      }),
                    hash: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Resource hash value' }),
                    id: z.int().exactOptional().openapi({ description: 'Resource ID' }),
                    name: z.string().exactOptional().openapi({ description: 'Resource name' }),
                    path: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Full path to resource' }),
                    previewable: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether the resource can be previewed' }),
                    size: z
                      .int32()
                      .exactOptional()
                      .openapi({ description: 'Size of resource in bytes' }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Type of resource `file` or `dir`' }),
                    updatedAt: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'Date and time resource was most recently changed' }),
                    uploadDate: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'Date resource was first uploaded' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            share: z
              .array(
                z
                  .object({
                    accessDescription: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Human readable description of what visitors are allowed to do with the receive folder',
                      }),
                    accessMode: AccessModeSchema.exactOptional(),
                    assets: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({ description: 'List of items included in the share' }),
                    created: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'Date and ti' }),
                    embed: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether the receive folder can be embedded within a web page',
                      }),
                    expiration: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Date and time when the receive folder will no longer be ',
                      }),
                    expired: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether access to the receive folder has expired' }),
                    fileDropCreateFolders: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether files should be automatically placed in subfolders of the receive folder',
                      }),
                    formId: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ID of the associated form' }),
                    hasNotification: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether delivery receipts are enabled for this share',
                      }),
                    hasPassword: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether the receive folder requires visitors to enter a password',
                      }),
                    hash: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Hash value of the receive' }),
                    id: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Unique ID of associated receive folder' }),
                    inherited: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether this share is inherited from a parent fol',
                      }),
                    isPublic: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether visitors can acccess the receive folder without an invitation link',
                      }),
                    messages: z
                      .array(ShareMessageSchema)
                      .exactOptional()
                      .openapi({ description: 'Invitation messages sent for receive folder' }),
                    modified: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({ description: 'Date and time when the share was last changed' }),
                    name: z.string().exactOptional().openapi({ description: 'Name of receiv' }),
                    ownerHash: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Hash value of the user who "owns" the receive fo' }),
                    paths: z.array(z.string()).exactOptional().openapi({ description: 'List' }),
                    recipients: z
                      .array(ShareRecipientSchema)
                      .exactOptional()
                      .openapi({
                        description: 'List of recipients invited  to the receive folder',
                      }),
                    requireEmail: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether visitors must enter their email addresses to access the receive folder',
                      }),
                    resent: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether invitations to the receive folder have been re-sent to recipients',
                      }),
                    status: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '1 if share is active. 0 if not.' }),
                    trackingStatus: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Status of invitations sent for this receive folder',
                      }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Type of share **"receive"**' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            transferStatus: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'For uploads, and downloads, whether the file transferred OK. `success` means the transfer did not have errors',
              }),
          })
          .exactOptional()
          .openapi({ title: 'WebhookV2EventData', required: [] }),
        eventTimestamp: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'Date and time event originally took place' }),
        ipAddress: z
          .string()
          .exactOptional()
          .openapi({ description: 'IP address of related activity' }),
        protocol: z
          .string()
          .exactOptional()
          .openapi({ description: 'Type of connection used for related activity' }),
        username: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Username logged for related activity. May refer to someone who is not a user of the account, such as a share recipient or "publ',
          }),
      })
      .exactOptional()
      .openapi({ title: 'WebhookV2Details', required: [] }),
    endpointUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL the message was sent to' }),
    event: z
      .enum([
        'resources.upload',
        'resources.download',
        'resources.delete',
        'resources.rename',
        'resources.copy',
        'resources.move',
        'resources.compress',
        'resources.extract',
        'resources.createFolder',
        'shares.formSubmit',
      ])
      .exactOptional()
      .openapi({ description: 'Event type' }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP Address of related activity' }),
    resend: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this attempt was a re-send of a previous attempt' }),
    resourcePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path of resource that matched webhook' }),
    response: z
      .string()
      .exactOptional()
      .openapi({ description: 'Body of web response returned by webhook listener' }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'HTTP Status Code returned by webhook listener' }),
    username: z.string().exactOptional().openapi({ description: 'Username of related activity' }),
    webhookFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'What version of webhook message is being sent `v2`' }),
    webhookId: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique ID of webhook configuration' }),
    webhookPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path that webhook is watching' }),
  })
  .openapi({ title: 'WebhookActivityAttributesV2', required: [] })
  .openapi('WebhookActivityAttributesV2')

const WebhookActivityEntrySchema = z
  .object({
    attributes: z
      .xor([WebhookActivityAttributesV2Schema, WebhookActivityAttributesV1Schema])
      .exactOptional()
      .openapi({ discriminator: { propertyName: 'webhookFormat' } }),
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
      .openapi({ type: 'integer', format: 'int64', example: 12345 }),
    type: z.literal('webhookActivity').exactOptional().openapi({ example: 'webhookActivity' }),
  })
  .openapi({ title: 'WebhookActivityEntry', required: [] })
  .openapi('WebhookActivityEntry')

const WebhookActivityResponseSchema = z
  .object({
    data: z.array(WebhookActivityEntrySchema).exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response.', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of results returned. ', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found.', example: 2 }),
  })
  .openapi({
    description: 'Session activity list response',
    title: 'WebhookActivityResponse',
    required: [],
  })
  .openapi('WebhookActivityResponse')

const WebhookCollectionResponseSchema = z
  .object({
    data: z.array(WebhookSchema).exactOptional(),
    included: z
      .array(
        z
          .union([AccountSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
    returnedResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of results returned.', example: 2 }),
    totalResults: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total results found.', example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('WebhookCollectionResponse')

const WebhookResponseSchema = z
  .object({
    data: z.array(WebhookSchema).exactOptional(),
    included: z
      .array(
        z
          .union([AccountSchema, ResourceSchema])
          .openapi({ discriminator: { propertyName: 'type' } }),
      )
      .exactOptional(),
    responseStatus: z
      .int()
      .exactOptional()
      .openapi({ description: 'Http status code of the response. ', example: 200 }),
  })
  .openapi({ required: [] })
  .openapi('WebhookResponse')

const AccessTokenParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Access token required to make the API call.',
      example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
      in: 'header',
      name: 'ev-access-token',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeyParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'API key required to make the API call.',
      in: 'header',
      name: 'ev-api-key',
      required: true,
      schema: { type: 'string' },
    },
  })

const EmailListsExampleExample = {
  summary: 'Regular email list response',
  value: {
    data: [
      {
        attributes: {
          created: '2019-10-10T06:58:07Z',
          emails: ['jdoe@example.com', 'yk@example.com'],
          modified: '2019-10-10T06:58:07Z',
          name: 'My friends',
        },
        id: 1,
        relationships: { owner: { data: { id: 4, type: 'user' } } },
        type: 'emailList',
      },
    ],
    responseStatus: 200,
  },
}

const EmailListsInludedExampleExample = {
  summary: 'Email list reponse with included',
  value: {
    data: [
      {
        attributes: {
          created: '2019-10-10T06:58:07Z',
          emails: ['jdoe@example.com', 'yk@example.com'],
          modified: '2019-10-10T06:58:07Z',
          name: 'My friends',
        },
        id: 1,
        relationships: { owner: { data: { id: 4, type: 'user' } } },
        type: 'emailList',
      },
    ],
    included: [
      {
        attributes: {
          accessTimestamp: '2019-10-10T06:58:07Z',
          accountId: 5,
          accountName: 'jdoe',
          created: '2019-10-10T06:58:07Z',
          email: 'jdoe@example.com',
          expiration: null,
          firstLogin: false,
          homeDir: '/',
          modified: '2019-10-10T06:58:07Z',
          nickname: 'jdoe',
          onboarding: false,
          permissions: {
            changePassword: true,
            delete: true,
            deleteFormData: true,
            download: true,
            list: true,
            modify: true,
            notification: true,
            share: true,
            upload: true,
            viewFormData: true,
          },
          role: 'admin',
          status: 1,
          timeZone: 'America/Chicago',
          username: 'john',
        },
        id: 4,
        type: 'user',
      },
    ],
    responseStatus: 200,
  },
}

const FormExtendedResponseExampleExample = {
  summary: 'Form response with relationships',
  value: {
    data: {
      attributes: {
        cssStyles:
          '#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n} #ev-widget-form label{\n  width: 100%;\n} #ev-widget-form input, #ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n#ev-widget-form input:focus, #ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}',
        elements: [
          {
            id: 123,
            name: 'You name',
            order: 1,
            settings: { isRequired: true, senderEmail: false, useAsFolderName: false, width: 1 },
            type: 'name',
          },
          {
            id: 124,
            name: 'Your Email',
            order: 1,
            settings: {
              description: 'Enter your email from the registration system',
              isRequired: true,
              senderEmail: true,
              useAsFolderName: true,
              width: 1,
            },
            type: 'email',
          },
        ],
        formDescription: 'Upload your photos to us',
        submitButtonText: 'Send Files',
        successMessage: 'Your files were uploaded',
      },
      id: 1,
      relationships: { share: { data: { id: 3322, type: 'share' } } },
      type: 'form',
    },
    included: [
      {
        attributes: {
          accessDescription: 'Upload only',
          accessMode: { delete: false, download: false, modify: false, upload: true },
          embed: false,
          expiration: null,
          expired: false,
          hasPassword: false,
          hash: 'hd1e-3erufo72',
          name: 'Shared folder',
          ownerHash: 'hd1e-3erufo72-fsxak999',
          public: true,
        },
        id: 3322,
        type: 'share',
      },
    ],
    responseStatus: 200,
  },
}

const FormResponseExampleExample = {
  summary: 'Regular form response',
  value: {
    data: {
      attributes: {
        cssStyles:
          '#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n} #ev-widget-form label{\n  width: 100%;\n} #ev-widget-form input, #ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n#ev-widget-form input:focus, #ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}',
        elements: [
          {
            id: 123,
            name: 'You name',
            order: 1,
            settings: { isRequired: true, senderEmail: false, useAsFolderName: false, width: 1 },
            type: 'name',
          },
          {
            id: 124,
            name: 'Your Email',
            order: 1,
            settings: {
              description: 'Enter your email from the registration system',
              isRequired: true,
              senderEmail: true,
              useAsFolderName: true,
              width: 1,
            },
            type: 'email',
          },
        ],
        formDescription: 'Upload your photos to us',
        submitButtonText: 'Send Files',
        successMessage: 'Your files were uploaded',
      },
      id: 1,
      relationships: { share: { data: { id: 3, type: 'share' } } },
      type: 'form',
    },
    responseStatus: 200,
  },
}

const ShareCollectionResponseExampleExample = {
  summary: 'Regular share collection response',
  value: {
    data: [
      {
        attributes: {
          accessDescription: 'Upload only',
          accessMode: { delete: false, download: false, modify: false, upload: true },
          created: '2017-04-21T10:53:47Z',
          embed: true,
          expiration: null,
          expired: false,
          fileDropCreateFolders: false,
          hasNotification: true,
          hasPassword: false,
          hash: 'sdg1-352',
          inherited: false,
          messages: [
            {
              body: 'You have files available for download.',
              created: '2017-04-21T10:53:47Z',
              id: 23,
              modified: '2017-04-21T10:53:47Z',
              subject: 'Message subject.',
            },
          ],
          modified: '2017-04-21T10:53:47Z',
          name: 'Example Share',
          ownerHash: 'hd1e-3erufo72-fsxak999',
          paths: ['/example share'],
          public: true,
          recipients: [
            {
              created: '2017-04-21T10:53:47Z',
              email: 'recipient@example.com',
              hash: 'fseowxan',
              id: 11,
              received: false,
              sent: true,
              type: 'direct',
            },
          ],
          requireEmail: false,
          resent: null,
          status: 1,
          type: 'shared_folder',
        },
        id: 10,
        relationships: {
          notifications: [
            { id: 14, type: 'notification' },
            { id: 15, type: 'notification' },
          ],
          owner: { id: 12, type: 'user' },
          resource: { id: 13, type: 'resource' },
        },
        type: 'share',
      },
    ],
    responseStatus: 200,
    returnedResults: 2,
    totalResults: 2,
  },
}

const ShareExtendedCollectionResponseExampleExample = {
  summary: 'Share collection response with relationships',
  value: {
    data: [
      {
        attributes: {
          accessDescription: 'Upload only',
          accessMode: { delete: false, download: false, modify: false, upload: true },
          created: '2017-04-21T10:53:47Z',
          embed: true,
          expiration: null,
          expired: false,
          fileDropCreateFolders: false,
          hasNotification: true,
          hasPassword: false,
          hash: 'sdg1-352',
          inherited: false,
          messages: [
            {
              body: 'You have files available for download.',
              created: '2017-04-21T10:53:47Z',
              id: 23,
              modified: '2017-04-21T10:53:47Z',
              subject: 'Message subject.',
            },
          ],
          modified: '2017-04-21T10:53:47Z',
          name: 'Example Share',
          ownerHash: 'hd1e-3erufo72-fsxak999',
          paths: ['/example share'],
          public: true,
          recipients: [
            {
              created: '2017-04-21T10:53:47Z',
              email: 'recipient@example.com',
              hash: 'fseowxan',
              id: 11,
              received: false,
              sent: true,
              type: 'direct',
            },
          ],
          requireEmail: false,
          resent: null,
          status: 1,
          type: 'shared_folder',
        },
        id: 10,
        relationships: {
          notifications: [
            { id: 14, type: 'notification' },
            { id: 15, type: 'notification' },
          ],
          owner: { id: 12, type: 'user' },
          resources: { id: 13, type: 'resource' },
        },
        type: 'share',
      },
    ],
    included: [
      {
        attributes: {
          accessTimestamp: '2019-09-06T11:40:29Z',
          created: '2019-05-29T20:48:57Z',
          email: 'user@example.com',
          expiration: '2020-04-21T10:53:47Z',
          firstLogin: false,
          homeDir: '/',
          modified: '2019-07-27T01:03:41Z',
          nickname: 'examplenickname',
          onboarding: true,
          permissions: {
            changePassword: true,
            delete: true,
            deleteFormData: true,
            download: true,
            list: true,
            modify: true,
            notification: true,
            share: true,
            upload: true,
            viewFormData: true,
          },
          role: 'master',
          status: 0,
          timeZone: 'UTC',
          username: 'exampleuser',
        },
        id: 12,
        type: 'user',
      },
      {
        attributes: {
          accessedAt: '2019-05-29T20:48:57Z',
          createdAt: '2019-05-29T20:48:57Z',
          extension: null,
          fileCount: 1,
          hash: 'ec4aa9a91be282666a165899a14f29b1',
          name: 'Shared Folder',
          path: '/Shared Folder',
          previewable: false,
          size: 987,
          type: 'folder',
          updatedAt: '2019-05-29T20:48:57Z',
          uploadDate: '2019-05-29T20:48:57Z',
        },
        id: 13,
        type: 'resource',
      },
      {
        attributes: {
          action: 'upload',
          created: '2019-05-29T20:48:57Z',
          message: null,
          name: 'Shared Folder',
          path: '/Shared Folder',
          readableDescription: null,
          readableDescriptionWithoutPath: null,
          recipientEmails: ['recipient@example.com'],
          recipients: [
            {
              created: '2019-05-29T20:48:57Z',
              email: 'recipient@example.com',
              id: 18,
              modified: '2019-05-29T20:48:57Z',
              notificationId: 14,
            },
          ],
          sendEmail: 1,
          type: 'shared_folder',
          updated: '2019-05-29T20:48:57Z',
          usernames: ['notice_user_all'],
        },
        id: 14,
        type: 'notification',
      },
      {
        attributes: {
          action: 'upload',
          created: '2019-05-29T20:48:57Z',
          message: null,
          name: 'Shared Folder2',
          path: '/Shared Folder2',
          readableDescription: null,
          readableDescriptionWithoutPath: null,
          recipientEmails: ['recipient@example.com'],
          recipients: [
            {
              created: '2019-05-29T20:48:57Z',
              email: 'recipient@example.com',
              id: 18,
              modified: '2019-05-29T20:48:57Z',
              notificationId: 14,
            },
          ],
          sendEmail: 1,
          type: 'shared_folder',
          updated: '2019-05-29T20:48:57Z',
          usernames: ['notice_user_all'],
        },
        id: 15,
        type: 'notification',
      },
    ],
    responseStatus: 200,
    returnedResults: 2,
    totalResults: 2,
  },
}

const ShareExtendedResponseExampleExample = {
  summary: 'Share response with relationships',
  value: {
    data: {
      attributes: {
        accessDescription: 'Upload only',
        accessMode: { delete: false, download: false, modify: false, upload: true },
        created: '2017-04-21T10:53:47Z',
        embed: true,
        expiration: null,
        expired: false,
        fileDropCreateFolders: false,
        hasNotification: true,
        hasPassword: false,
        hash: 'sdg1-352',
        inherited: false,
        messages: [
          {
            body: 'You have files available for download.',
            created: '2017-04-21T10:53:47Z',
            id: 23,
            modified: '2017-04-21T10:53:47Z',
            subject: 'Message subject.',
          },
        ],
        modified: '2017-04-21T10:53:47Z',
        name: 'Example Share',
        ownerHash: 'hd1e-3erufo72-fsxak999',
        paths: ['/example share'],
        public: true,
        recipients: [
          {
            created: '2017-04-21T10:53:47Z',
            email: 'recipient@example.com',
            hash: 'fseowxan',
            id: 11,
            received: false,
            sent: true,
            type: 'direct',
          },
        ],
        requireEmail: false,
        resent: null,
        status: 1,
        type: 'shared_folder',
      },
      id: 10,
      relationships: {
        notifications: [
          { id: 14, type: 'notification' },
          { id: 15, type: 'notification' },
        ],
        owner: { id: 12, type: 'user' },
        resources: { id: 13, type: 'resource' },
      },
      type: 'share',
    },
    included: [
      {
        attributes: {
          accessTimestamp: '2019-09-06T11:40:29Z',
          created: '2019-05-29T20:48:57Z',
          email: 'user@example.com',
          expiration: '2020-04-21T10:53:47Z',
          firstLogin: false,
          homeDir: '/',
          modified: '2019-07-27T01:03:41Z',
          nickname: 'examplenickname',
          onboarding: true,
          permissions: {
            changePassword: true,
            delete: true,
            deleteFormData: true,
            download: true,
            list: true,
            modify: true,
            notification: true,
            share: true,
            upload: true,
            viewFormData: true,
          },
          role: 'master',
          status: 0,
          timeZone: 'UTC',
          username: 'exampleuser',
        },
        id: 12,
        type: 'user',
      },
      {
        attributes: {
          accessedAt: '2019-05-29T20:48:57Z',
          createdAt: '2019-05-29T20:48:57Z',
          extension: null,
          fileCount: 1,
          hash: 'ec4aa9a91be282666a165899a14f29b1',
          name: 'Shared Folder',
          path: '/Shared Folder',
          previewable: false,
          size: 987,
          type: 'folder',
          updatedAt: '2019-05-29T20:48:57Z',
          uploadDate: '2019-05-29T20:48:57Z',
        },
        id: 13,
        type: 'resource',
      },
      {
        attributes: {
          action: 'upload',
          created: '2019-05-29T20:48:57Z',
          message: null,
          name: 'Shared Folder',
          path: '/Shared Folder',
          readableDescription: null,
          readableDescriptionWithoutPath: null,
          recipientEmails: ['recipient@example.com'],
          recipients: [
            {
              created: '2019-05-29T20:48:57Z',
              email: 'recipient@example.com',
              id: 18,
              modified: '2019-05-29T20:48:57Z',
              notificationId: 14,
            },
          ],
          sendEmail: 1,
          type: 'shared_folder',
          updated: '2019-05-29T20:48:57Z',
          usernames: ['notice_user_all'],
        },
        id: 14,
        type: 'notification',
      },
      {
        attributes: {
          action: 'upload',
          created: '2019-05-29T20:48:57Z',
          message: null,
          name: 'Shared Folder2',
          path: '/Shared Folder2',
          readableDescription: null,
          readableDescriptionWithoutPath: null,
          recipientEmails: ['recipient@example.com'],
          recipients: [
            {
              created: '2019-05-29T20:48:57Z',
              email: 'recipient@example.com',
              id: 18,
              modified: '2019-05-29T20:48:57Z',
              notificationId: 14,
            },
          ],
          sendEmail: 1,
          type: 'shared_folder',
          updated: '2019-05-29T20:48:57Z',
          usernames: ['notice_user_all'],
        },
        id: 15,
        type: 'notification',
      },
    ],
    responseStatus: 200,
  },
}

const ShareResponseExampleExample = {
  summary: 'Regular share response',
  value: {
    data: {
      attributes: {
        accessDescription: 'Upload only',
        accessMode: { delete: false, download: false, modify: false, upload: true },
        created: '2017-04-21T10:53:47Z',
        embed: true,
        expiration: null,
        expired: false,
        fileDropCreateFolders: false,
        hasNotification: true,
        hasPassword: false,
        hash: 'sdg1-352',
        inherited: false,
        messages: [
          {
            body: 'You have files available for download.',
            created: '2017-04-21T10:53:47Z',
            id: 23,
            modified: '2017-04-21T10:53:47Z',
            subject: 'Message subject.',
          },
        ],
        modified: '2017-04-21T10:53:47Z',
        name: 'Example Share',
        ownerHash: 'hd1e-3erufo72-fsxak999',
        paths: ['/example share'],
        public: true,
        recipients: [
          {
            created: '2017-04-21T10:53:47Z',
            email: 'recipient@example.com',
            hash: 'fseowxan',
            id: 11,
            received: false,
            sent: true,
            type: 'direct',
          },
        ],
        requireEmail: false,
        resent: null,
        status: 1,
        type: 'shared_folder',
      },
      id: 10,
      relationships: {
        notifications: [
          { id: 14, type: 'notification' },
          { id: 15, type: 'notification' },
        ],
        owner: { id: 12, type: 'user' },
        resource: { id: 13, type: 'resource' },
      },
      type: 'share',
    },
    responseStatus: 200,
  },
}

const AccountBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          accountOnboarding: z.boolean().exactOptional().openapi({ example: true }),
          allowedIpRanges: z
            .object({
              ipEnd: z.ipv4().exactOptional().openapi({ example: '255.255.255.255' }),
              ipStart: z.ipv4().exactOptional().openapi({ example: '127.0.0.1' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          brandingSettings: z
            .object({
              companyName: z.string().exactOptional().openapi({ example: null }),
              customEmail: z.email().exactOptional().openapi({ example: 'custom@example.com' }),
              logo: z.string().exactOptional().openapi({ example: 'examplelogo.png' }),
              logoExt: z.string().exactOptional().openapi({ example: 'png' }),
              theme: z.string().exactOptional().openapi({ example: 'default' }),
            })
            .exactOptional()
            .openapi({ title: 'BrandingSettings', required: [] }),
          complexPasswords: z.boolean().exactOptional().openapi({ example: false }),
          customSignature: z.string().exactOptional().openapi({ example: null }),
          emailContent: z
            .string()
            .exactOptional()
            .openapi({
              example:
                "Great news, your new account is ready! For your records, we've listed information you'll use to log in below: FTP Server: [[ftpserver]] Username (Web and FTP access): [[username]] [[setpassword]]",
            }),
          emailSubject: z
            .string()
            .exactOptional()
            .openapi({ example: 'ExaVault File Sharing Account' }),
          externalDomain: z.array(z.any()).exactOptional(),
          quotaNoticeThreshold: z.int().exactOptional().openapi({ example: 90 }),
          secureOnly: z.boolean().exactOptional().openapi({ example: false }),
          showReferralLinks: z.boolean().exactOptional().openapi({ example: false }),
        })
        .openapi({ required: [] }),
    },
  },
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Get account settings',
  description:
    'Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.',
  operationId: 'getAccount',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required for the request',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token for the request',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Related records to include in the response. Valid option is **masterUser**',
            in: 'query',
            name: 'include',
            schema: { example: 'masterUser', type: 'string' },
            required: false,
          },
          example: 'masterUser',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: AccountResponseSchema,
          example: {
            data: {
              attributes: {
                accountName: 'exampleaccount',
                accountOnboarding: true,
                allowedIp: null,
                branding: true,
                clientId: 1,
                complexPasswords: false,
                created: '2019-05-30T20:48:57Z',
                customDomain: false,
                customSignature: null,
                externalDomains: null,
                maxUsers: 5,
                modified: '2019-08-27T01:03:41Z',
                quota: {
                  bandwidthLimit: 9223372036854776000,
                  bandwidthUsed: 0,
                  diskLimit: 107374182400,
                  diskUsed: 4770252339,
                  noticeEnabled: false,
                  noticeThreshold: 90,
                  transactionsLimit: 120000,
                  transactionsNoticeEnabled: false,
                  transactionsNoticeThreshold: 90,
                },
                secureOnly: false,
                showReferralLinks: true,
                status: 1,
                userCount: 4,
                welcomeEmailContent:
                  '"Great news, your new account is ready!\\n\\nFor your records, we\'ve listed information you\'ll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]"\n',
                welcomeEmailSubject: 'ExaVault File Sharing Account',
              },
              id: 7,
              included: [
                {
                  attributes: {
                    accessTimestamp: '2019-09-06T11:40:29Z',
                    accountId: 2,
                    accountName: 'examplemasteraccount',
                    created: '2019-05-29T20:48:57Z',
                    email: 'user@example.com',
                    expiration: null,
                    firstLogin: false,
                    homeDir: '/',
                    modified: '2019-07-27T01:03:41Z',
                    nickname: 'examplenickname',
                    onboarding: true,
                    permissions: {
                      changePassword: true,
                      delete: true,
                      deleteFormData: true,
                      download: true,
                      list: true,
                      modify: true,
                      notification: true,
                      share: true,
                      upload: true,
                      viewFormData: true,
                    },
                    role: 'master',
                    status: 1,
                    timeZone: 'UTC',
                    username: 'examplemasteruser',
                  },
                  id: 1,
                  relationships: {
                    homeResource: { data: { id: 2554051, type: 'resource' } },
                    ownerAccount: { data: { id: 124437, type: 'account' } },
                  },
                  type: 'user',
                },
              ],
              relationships: { masterUser: { data: { id: 1, type: 'user' } } },
              type: 'account',
            },
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const patchAccountRoute = createRoute({
  method: 'patch',
  path: '/account',
  tags: ['Account'],
  summary: 'Update account settings',
  description:
    'Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.\n\n**Notes**\n\n- You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.',
  operationId: 'updateAccount',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Update Account Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              accountOnboarding: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether extra help popups can be enabled for users in the web file manager.',
                  example: true,
                }),
              allowedIpRanges: z
                .array(
                  z
                    .object({ ipEnd: z.ipv4().exactOptional(), ipStart: z.ipv4().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'IP Address Ranges for restricting account access' }),
              brandingSettings: z
                .object({
                  companyName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Custom company name to include in copyright and title bar.',
                    }),
                  customEmail: z
                    .email()
                    .exactOptional()
                    .openapi({
                      description:
                        'Address to use as sender of email messages generated by ExaVault',
                      example: 'custom@example.com',
                    }),
                  theme: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Color scheme for web file manager. Valid options are **default**, **light** and **dark**',
                      example: 'default',
                    }),
                })
                .exactOptional()
                .openapi({ title: 'BrandingSettingsValues', required: [] }),
              complexPasswords: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether to require complex passwords for all passwords.',
                  example: false,
                }),
              customSignature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Signature to be automatically added to the bottom of emails generated by the account.',
                }),
              emailContent: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Content of welcome email template.',
                  example:
                    "Great news, your new account is ready! For your records, we've listed information you'll use to log in below: FTP Server: [[ftpserver]] Username (Web and FTP access): [[username]] [[setpassword]]",
                }),
              emailSubject: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Subject line for welcome emails',
                  example: 'ExaVault File Sharing Account',
                }),
              externalDomain: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Custom address used for web file manager. Not available for all account types.',
                }),
              quota: z
                .object({
                  noticeEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the system should email the account owner if the account storage exceeds the noticeThreshold value. Storage notice emails are sent no mo once per day.',
                    }),
                  noticeThreshold: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Percent of account storage that would trigger a notice email. Must be a whole number between 70 and 100 (inclusive).',
                    }),
                  transactionsNoticeEnabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the system should email the account owner if the daily transaction usage exceeds the transactionsNoticeThreshold value. Transaction notice emails are sent no more than once per day.',
                    }),
                  transactionsNoticeThreshold: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'Percent of daily transaction usage that would trigger a notice email. Must be a whole number between 70 and 100 (inclusive).',
                    }),
                })
                .exactOptional()
                .openapi({ description: '', title: 'AccountQuotaValues', required: [] }),
              secureOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether unencrypted FTP connections should be denied for the account.',
                  example: false,
                }),
              showReferralLinks: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to display links for others to sign up on share views and invitation emails',
                  example: false,
                }),
            })
            .openapi({ title: 'UpdateAccountRequestBody', required: [] }),
          example: {
            accountOnboarding: true,
            allowedIpRanges: [{ ipEnd: '67.208.64.254', ipStart: '67.208.64.228' }],
            brandingSettings: { companyName: 'Example File Transfer', theme: 'light' },
            complexPasswords: true,
            customSignature: 'Please consider the planet before printing this email',
            emailContent:
              "Greetings, ExampleUser!  Your account is ready for you to start transferring files right now. Here's your link to set up your account [[setpassword]]  Henceforth, you shall be known as [[username]]",
            emailSubject: 'Welcome to the Example Account',
            externalDomain: 'https://example.com/files',
            quota: {
              noticeEnabled: true,
              noticeThreshold: 90,
              transactionsNoticeEnabled: true,
              transactionsNoticeThreshold: 80,
            },
            secureOnly: true,
            showReferralLinks: false,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: AccountResponseSchema,
          example: {
            data: {
              attributes: {
                accountName: 'exampleaccount',
                accountOnboarding: true,
                allowedIp: [],
                branding: true,
                brandingSettings: {
                  accountName: 'exampleaccount',
                  companyName: 'Example Company',
                  created: '2021-01-14T11:06:52-08:00',
                  customEmail: 'custom@example.com',
                  logo: 'examplelogo.png',
                  logoExt: 'png',
                  modified: '2021-02-08T10:35:15-08:00',
                  theme: 'default',
                  verifiedDomain: null,
                  verifiedDomainId: null,
                  verifiedDomainValid: false,
                },
                clientId: 1,
                complexPasswords: false,
                created: '2019-05-30T20:48:57Z',
                customDomain: false,
                customSignature: null,
                externalDomains: null,
                maxUsers: 5,
                modified: '2019-08-27T01:03:41Z',
                quota: {
                  bandwidthLimit: 9223372036854776000,
                  bandwidthUsed: 0,
                  diskLimit: 107374182400,
                  diskUsed: 4770252339,
                  noticeEnabled: true,
                  noticeThreshold: 90,
                  transactionsLimit: 120000,
                  transactionsNoticeEnabled: true,
                  transactionsNoticeThreshold: 80,
                },
                secureOnly: false,
                showReferralLinks: true,
                status: 1,
                userCount: 4,
                welcomeEmailContent:
                  '"Great news, your new account is ready!\\n\\nFor your records, we\'ve listed information you\'ll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]"\n',
                welcomeEmailSubject: 'ExaVault File Sharing Account',
              },
              id: 6,
              relationships: { masterUser: { data: { id: 1, type: 'user' } } },
              type: 'account',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const getActivitySessionRoute = createRoute({
  method: 'get',
  path: '/activity/session',
  tags: ['Activity'],
  summary: 'Get activity logs',
  description:
    "Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges. \n\n**NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible. \n  \n**Operation Types**\nSession activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:\n\n| File Manager Value | API Value | Notes |\n|-----|----|---|\n| Connect | PASS | |\n| Disconnect | EXIT | |\n| Upload | STOR | |\n| Download | RETR | |\n| Delete | DELE | |\n| Create Folder | MKD | |\n| Rename | RNTO | |\n| Move | MOVE | |\n| Copy | COPY | |\n| Compress | COMPR | |\n| Extract | EXTRACT | |\n| Shared Folders | SHARE | |\n| Send Files | SEND | |\n| Receive Files | RECV | |\n| _N/A_ | EDIT\\_SEND | Update send. Not shown in file manager |\n| Update Share | EDIT\\_SHARE| | \n| Update Receive | EDIT\\_RECV | |\n| Delete Send | DELE\\_SEND | |\n| Delete Receive | DELE\\_RECV | |\n| Delete Share | DELE\\_SHARE | |\n| Create Notification | NOTIFY | |\n| Update Notification | EDIT\\_NTFY| |\n| Delete Notification | DELE\\_NTFY | |\n| Create User | USER | |\n| Update User | EDIT\\_USER | |\n| Delete User | DELE\\_USER | |\n| _N/A_ | DFA | Create direct link. Not shown in file manager |\n| _N/A_ | EDIT\\_DFA | Update direct link options. Not shown in file manager |\n| _N/A_ | DELE\\_DFA | Deactivate direct link. Not shown in file manager|\n",
  operationId: 'getSessionLogs',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Start date of the filter data range',
            example: '2019-10-18T06:48:40Z',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'End date of the filter data range',
            example: '2019-10-18T06:48:40Z',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      ipAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to filter session logs by ip address.',
            example: '127.0.0.1',
            in: 'query',
            name: 'ipAddress',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Username used for filtering a list',
            example: 'jdoe',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Path used to filter records',
            example: '/folder*',
            in: 'query',
            name: 'path',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter session logs for operation type (see table above for acceptable values)',
            example: 'EDIT_SHARE',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
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
            description: 'Offset of the records list',
            example: 100,
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
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
            description: 'Limit of the records list',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list sort params',
            in: 'query',
            name: 'sort',
            schema: { example: '-date', type: 'string' },
            required: false,
          },
          example: '-date',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: SessionActivityResponseSchema,
          examples: {
            'example-1': {
              value: {
                data: [
                  {
                    attributes: {
                      bytesTransferred: 10815676,
                      created: '2019-10-18T06:48:40Z',
                      duration: 5,
                      fileName: '/test2/Cassandra2020The20Definitive20Guide.2030947496.pdf',
                      fileSource: '',
                      ipAddress: '185.223.113.224',
                      operation: 'PASS',
                      protocol: 'web',
                      sessionId: '5da9b4a8bd961dfa0a56fa0dc15aaffe57069271b389e',
                      status: '-',
                      username: 'exavault',
                    },
                    id: 12345,
                    type: 'sessionActivity',
                  },
                ],
                responseStatus: 200,
                returnedResults: 2,
                totalResults: 2,
              },
            },
          },
        },
      },
    },
  },
})

export const getActivityWebhooksRoute = createRoute({
  method: 'get',
  path: '/activity/webhooks',
  tags: ['Activity'],
  summary: 'Get webhook logs',
  description:
    "Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.\n\n**NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible. \n\n**Event Types**\n\nWebhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:\n\n- resources.upload\n- resources.download\n- resources.delete\n- resources.createFolder\n- resources.rename\n- resources.move\n- resources.copy\n- resources.compress\n- resources.extract\n- shares.formSubmit\n",
  operationId: 'getWebhookLogs',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Earliest date of entries to include in list',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Latest date of entries to include in list',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endpointUrl: z
        .url()
        .exactOptional()
        .openapi({
          param: {
            description: 'Webhook listener endpoint',
            in: 'query',
            name: 'endpointUrl',
            schema: { format: 'uri', type: 'string' },
            required: false,
          },
        }),
      event: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of activity that triggered the webhook attempt',
            in: 'query',
            name: 'event',
            schema: { example: 'resources.upload', type: 'string' },
            required: false,
          },
          example: 'resources.upload',
        }),
      statusCode: z
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
            description: 'Response code from the webhook endpoint',
            example: 200,
            in: 'query',
            name: 'statusCode',
            schema: { example: 200, type: 'integer' },
            required: false,
          },
          example: 200,
        }),
      resourcePath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Path of the resource that triggered the webhook attempt',
            example: '/folder*',
            in: 'query',
            name: 'resourcePath',
            schema: { example: '/Production', type: 'string' },
            required: false,
          },
          example: '/Production',
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by triggering username.',
            in: 'query',
            name: 'username',
            schema: { example: 'exampleuser', type: 'string' },
            required: false,
          },
          example: 'exampleuser',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Records to skip before returning results.',
            example: 100,
            in: 'query',
            name: 'offset',
            schema: { minimum: 0, type: 'integer' },
            required: false,
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
            description: 'Limit of the records list',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { example: 100, type: 'integer' },
            required: false,
          },
          example: 100,
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list sort params',
            example: '-date,event',
            in: 'query',
            name: 'sort',
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
          schema: WebhookActivityResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  attempt: 1,
                  created: '2020-07-30T03:40:35-07:00',
                  endpointUrl: 'https://example.com/api/webhook',
                  event: 'Upload',
                  response: '',
                  responseSize: 0,
                  status: 200,
                },
                id: 2602725,
                type: 'webhookActivity',
              },
            ],
            responseStatus: 200,
            returnedResults: 1,
            totalResults: 1469,
          },
        },
      },
    },
  },
})

export const getEmailListsRoute = createRoute({
  method: 'get',
  path: '/email-lists',
  tags: ['Email Lists'],
  summary: 'Get all email groups',
  description: 'List all email groups for authenticated user',
  operationId: 'getEmailLists',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Related record types to include in the response. Valid option is `ownerUser`',
            in: 'query',
            name: 'include',
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
          schema: EmailListCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  created: '2020-07-30T10:09:05-07:00',
                  emails: ['exavault@example.com', 'exavault+1@example.com'],
                  modified: '2020-07-30T10:09:05-07:00',
                  name: 'ExaVault Test',
                },
                id: 27,
                relationships: { ownerUser: { data: { id: 124437, type: 'user' } } },
                type: 'emailList',
              },
            ],
            included: [
              {
                attributes: {
                  accessTimestamp: '0000-00-00T00:00:00+00:00',
                  accountName: 'example-acct',
                  created: '2020-09-02T18:54:14-07:00',
                  email: 'example@exavault-example.com',
                  expiration: '2021-12-31 11:59:59',
                  firstLogin: null,
                  homeDir: '/',
                  modified: '2020-09-02T18:54:14-07:00',
                  nickname: 'example-user',
                  onboarding: false,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'admin',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'example-user',
                },
                id: 124437,
                type: 'user',
              },
            ],
            responseStatus: 200,
            returnedResults: 1,
            totalResults: 1,
          },
        },
      },
    },
  },
})

export const postEmailListsRoute = createRoute({
  method: 'post',
  path: '/email-lists',
  tags: ['Email Lists'],
  summary: 'Create new email list',
  description:
    'Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.',
  operationId: 'addEmailList',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              emails: z
                .array(z.string())
                .openapi({
                  description: 'Array of email addresses to include in the email list. ',
                  example: ['johns@example.com', 'jdoe@example.com'],
                }),
              name: z
                .string()
                .openapi({ description: 'Name of the email list. ', example: 'My friends list' }),
            })
            .openapi({ required: ['name', 'emails'], title: 'AddEmailListRequestBody' }),
          example: {
            value: {
              emails: ['exavault@example.com', 'exavault+1@example.com'],
              name: 'ExaVault Test',
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: EmailListResponseSchema,
          example: {
            data: {
              attributes: {
                created: '2020-07-30T10:09:05-07:00',
                emails: ['exavault@example.com', 'exavault+1@example.com'],
                modified: '2020-07-30T10:09:05-07:00',
                name: 'ExaVault Test',
              },
              id: 27,
              relationships: { ownerUser: { data: { id: 124437, type: 'user' } } },
              type: 'emailList',
            },
            included: [],
            responseStatus: 201,
          },
        },
      },
    },
  },
})

export const getEmailListsIdRoute = createRoute({
  method: 'get',
  path: '/email-lists/{id}',
  tags: ['Email Lists'],
  summary: 'Get individual email group',
  description:
    "Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.",
  operationId: 'getEmailListById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description: 'ID of the email list to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Related record types to include in the response. Valid option is `ownerUser`',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmailListResponseSchema,
          example: {
            data: {
              attributes: {
                created: '2019-09-02T18:58:07-07:00',
                emails: ['test1@example.com', 'test2@example.com'],
                name: 'My Test List',
              },
              id: 29,
              relationships: { ownerUser: { data: { id: 125391, type: 'user' } } },
              type: 'emailList',
            },
            included: [
              {
                attributes: {
                  accessTimestamp: '0000-00-00T00:00:00+00:00',
                  accountName: 'example-acct',
                  created: '2020-09-02T18:54:14-07:00',
                  email: 'admin@exavault-example.com',
                  expiration: null,
                  firstLogin: null,
                  homeDir: '/',
                  modified: '2020-09-02T18:54:14-07:00',
                  nickname: 'example-admin',
                  onboarding: false,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'admin',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'example-admin',
                },
                id: 125391,
                type: 'user',
              },
            ],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const deleteEmailListsIdRoute = createRoute({
  method: 'delete',
  path: '/email-lists/{id}',
  tags: ['Email Lists'],
  summary: 'Delete an email group with given id',
  description:
    'Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call. ',
  operationId: 'deleteEmailListById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description: 'ID of the email list to delete',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 200 },
        },
      },
    },
  },
})

export const patchEmailListsIdRoute = createRoute({
  method: 'patch',
  path: '/email-lists/{id}',
  tags: ['Email Lists'],
  summary: 'Update an email group',
  description:
    'Add or remove emails from an email list that can be used to send and share files with groups. \n\n**Notes**\n\n*This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  ',
  operationId: 'updateEmailListById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description: 'ID of the email list to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              emails: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Email addresses that replace existing list.',
                  example: ['yuk@example.com', 'jdoe@example.com'],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the email list.', example: 'My friends list' }),
            })
            .openapi({ title: 'UpdateEmailListRequestBody', required: [] }),
          example: {
            emails: ['test@example.com', 'test+1@example.com', 'newaddress@example.com'],
            name: 'Renamed Test Email List',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmailListResponseSchema,
          example: {
            data: {
              attributes: {
                created: '2020-09-03T11:10:55-07:00',
                emails: ['test@example.com', 'test+1@example.com', 'newaddress@example.com'],
                modified: '2020-09-03T11:36:05-07:00',
                name: 'Renamed Test Email List',
              },
              id: 33,
              relationships: { ownerUser: { data: { id: 125391, type: 'user' } } },
              type: 'emailList',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const postEmailReferralRoute = createRoute({
  method: 'post',
  path: '/email/referral',
  tags: ['Email'],
  summary: 'Send referral email to a given address',
  description:
    "Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral. ",
  operationId: 'sendReferralEmail',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              emails: z.array(z.email()),
              message: z
                .string()
                .openapi({
                  example:
                    'I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial.',
                }),
            })
            .openapi({ required: ['emails', 'message'], title: 'SendReferralEmailRequestBody' }),
          examples: {
            Example: {
              value: {
                emails: ['user@example.com'],
                message:
                  'I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial.',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 201 },
        },
      },
    },
  },
})

export const postEmailWelcomeUsernameRoute = createRoute({
  method: 'post',
  path: '/email/welcome/{username}',
  tags: ['Email'],
  summary: 'Resend welcome email to specific user',
  description:
    'Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).',
  operationId: 'sendWelcomeEmail',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'A username to send the welcome email to.',
            example: 'exampleuser',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 201 },
        },
      },
    },
  },
})

export const getFormsRoute = createRoute({
  method: 'get',
  path: '/forms',
  tags: ['Form'],
  summary: 'Get receive folder form settings',
  description:
    'Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.\n\nUse the `include` parameter (with the value **share**) to also get the details of the associated receive folder.\n\n**Note**\n\n- If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead. \n',
  operationId: 'getFormByShareHash',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token required to make the API call.',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      shareHash: z
        .string()
        .openapi({
          param: {
            description: 'Share hash to retrieve the form for.',
            in: 'query',
            name: 'shareHash',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include: z
        .literal('share')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Related record types to include in the response. Valid option is **share**',
            in: 'query',
            name: 'include',
            schema: { enum: ['share'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: FormResponseSchema,
          example: {
            data: {
              attributes: {
                cssStyles:
                  '#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}',
                elements: [
                  {
                    id: 2329,
                    name: 'Your Name',
                    order: 0,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'name',
                  },
                  {
                    id: 2331,
                    name: 'Email Address',
                    order: 1,
                    settings: {
                      description: null,
                      isRequired: true,
                      senderEmail: false,
                      useAsFolderName: true,
                      width: 1,
                    },
                    type: 'email',
                  },
                  {
                    id: 2333,
                    name: 'Subject',
                    order: 2,
                    settings: {
                      description: null,
                      isRequired: true,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'text',
                  },
                  {
                    id: 2335,
                    name: 'Message',
                    order: 3,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'textarea',
                  },
                  {
                    id: 2337,
                    name: 'Upload Area',
                    order: 4,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'upload_area',
                  },
                ],
                formDescription: null,
                submitButtonText: 'Send Files',
                successMessage: 'Your files were uploaded',
              },
              id: 459,
              relationships: { share: { data: { id: 1581, type: 'share' } } },
              type: 'form',
            },
            included: [
              {
                attributes: {
                  accessDescription: 'Receive folder',
                  accessMode: { delete: false, download: false, modify: false, upload: true },
                  assets: ['HomeTest'],
                  created: '2020-07-30T06:24:33-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: 459,
                  hasNotification: true,
                  hasPassword: false,
                  hash: '1a6-eel4wett',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-30T06:27:12-07:00',
                  name: 'HomeTest',
                  ownerHash: '1a6-eel4wegt-9t0xc3jb',
                  paths: ['/HomeTest'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'receive',
                },
                id: 1581,
                type: 'share',
              },
            ],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const getFormsEntriesIdRoute = createRoute({
  method: 'get',
  path: '/forms/entries/{id}',
  tags: ['Form'],
  summary: 'Get form data entries for a receive',
  description:
    'Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.\n',
  operationId: 'getFormEntries',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call. ',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description: 'ID of the form to retrieve entries for.',
            in: 'path',
            name: 'id',
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
            description: 'Limit of records to be returned (for pagination)',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
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
            description: 'Current offset of records (for pagination)',
            example: 100,
            in: 'query',
            name: 'offset',
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
          schema: FormEntryResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  created: '2020-09-15T05:36:41-07:00',
                  fields: [{ name: 'Email Address', order: 1, value: 'test451@example.com' }],
                  modified: '2020-09-16T05:36:44-07:00',
                  paths: [
                    '/example/test451@example.com/1.csv',
                    '/example/test451@example.com/2.csv',
                  ],
                  status: 'completed',
                },
                id: 320721,
                type: 'formEntry',
              },
              {
                attributes: {
                  created: '2020-09-16T05:36:41-07:00',
                  fields: [{ name: 'Email Address', order: 1, value: 'test455@example.com' }],
                  modified: '2020-09-17T05:36:44-07:00',
                  paths: [
                    '/example/test455@example.com/1.csv',
                    '/example/test455@example.com/2.csv',
                  ],
                  status: 'completed',
                },
                id: 32021,
                type: 'formEntry',
              },
            ],
            responseStatus: 200,
            returnedResults: 2,
            totalResults: 2,
          },
        },
      },
    },
  },
})

export const deleteFormsEntriesIdRoute = createRoute({
  method: 'delete',
  path: '/forms/entries/{id}',
  tags: ['Form'],
  summary: 'Delete a receive form submission',
  description:
    'Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this. \n\n**Notes**:\n\n- Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete\n- You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation\n- It is not possible to un-delete data that is removed in this way\n',
  operationId: 'deleteFormMessageById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call. ',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID of the entry to be deleted data for',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 200 },
        },
      },
    },
  },
})

export const getFormsIdRoute = createRoute({
  method: 'get',
  path: '/forms/{id}',
  tags: ['Form'],
  summary: 'Get receive folder form by Id',
  description:
    'Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings. \n\nUse the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder. \n\n**Note**\n\nIf you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead. \n',
  operationId: 'getFormById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Form unique ID number.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token required to make the API call.',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter "**share**" to get information about associated receive folder.',
            in: 'query',
            name: 'include',
            schema: { example: 'share', type: 'string' },
            required: false,
          },
          example: 'share',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: FormResponseSchema,
          example: {
            data: {
              attributes: {
                cssStyles:
                  '#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}',
                elements: [
                  {
                    id: 2329,
                    name: 'Your Name',
                    order: 0,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'name',
                  },
                  {
                    id: 2331,
                    name: 'Email Address',
                    order: 1,
                    settings: {
                      description: null,
                      isRequired: true,
                      senderEmail: false,
                      useAsFolderName: true,
                      width: 1,
                    },
                    type: 'email',
                  },
                  {
                    id: 2333,
                    name: 'Subject',
                    order: 2,
                    settings: {
                      description: null,
                      isRequired: true,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'text',
                  },
                  {
                    id: 2335,
                    name: 'Message',
                    order: 3,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'textarea',
                  },
                  {
                    id: 2337,
                    name: 'Upload Area',
                    order: 4,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'upload_area',
                  },
                ],
                formDescription: 'test test',
                submitButtonText: 'Send Files',
                successMessage: 'Your files were uploaded',
              },
              id: 459,
              relationships: { share: { data: { id: 1581, type: 'share' } } },
              type: 'form',
            },
            included: [
              {
                attributes: {
                  accessDescription: 'Receive folder',
                  accessMode: { delete: false, download: false, modify: false, upload: true },
                  assets: ['HomeTest'],
                  created: '2020-07-30T06:24:33-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: 459,
                  hasNotification: true,
                  hasPassword: false,
                  hash: '1a6-eel4nxrt',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-30T07:39:42-07:00',
                  name: 'HomeTest',
                  ownerHash: '1a6-eel4nxrt-9t0xc3jb',
                  paths: ['/HomeTest'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'receive',
                },
                id: 1581,
                type: 'share',
              },
            ],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const patchFormsIdRoute = createRoute({
  method: 'patch',
  path: '/forms/{id}',
  tags: ['Form'],
  summary: 'Updates a form with given parameters',
  description:
    "Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files. \n\n**Notes**\n\n*This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          ",
  operationId: 'updateFormById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Form unique ID number.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              cssStyles: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    '#ev-widget-form {\n  /*Change this to change the font. Remove to use your website font*/\n  font-family: Helvetica Neue, sans-serif;\n  /*Makes the form the same width as your website */\n  margin: 0 -2%;\n}\n#ev-widget-form label{\n  width: 100%;\n}\n#ev-widget-form input,\n#ev-widget-form textarea {\n  /*Changes color and thickness of borders on form elements */\n  border: 2px solid #ccc;\n  /*Changes spacing inside the form elements (top/bottom and left/right */\n  padding: 5px 5px;\n  /* Changes how far away the inputs are from their label */\n  margin-top: 2px;\n}\n\n#ev-widget-form input:focus,\n#ev-widget-form textarea:focus {\n  /*Changes the color of the form elements when they are clicked in to */\n  border: 2px solid #b2cf88;\n  /*Removes glow effect from form elements that are clicked in to */\n  outline: none;\n}\n\n#ev-widget-form label {\n  font-size: 14px;\n  font-weight: bold;\n  /*Changes color of labels */\n  color: #232323\n}\n\n#ev-widget-form .ev-form-element-description {\n  /*Changes size of descriptions */\n  font-size: 12px;\n  /*Changes color of descriptions */\n  color: #777;\n  /* Changes how far away the descriptions are from their input */\n  margin-top: 2px;\n}\n\n#ev-widget-form textarea {\n  /* Makes textareas (multiline inputs) a taller. */\n  min-height: 90px;\n}     ',
                }),
              elements: z
                .array(
                  z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            "ID of the form element. If you're adding a new element to the form, do not include this field.",
                          example: 123,
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Name of the form element.',
                          example: 'Your name',
                        }),
                      order: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'The order the fields will be displayed to the recipient. Starts at 0. ',
                          example: 0,
                        }),
                      settings: z
                        .object({
                          isRequired: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'True is the form element is required for submission. ',
                              example: true,
                            }),
                          senderEmail: z.boolean().exactOptional().openapi({ example: false }),
                          useAsFolderName: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'True if the submitted response should be used as the name for the new folder. ',
                              example: false,
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      type: z
                        .enum(['name', 'email', 'text', 'textarea', 'upload_area'])
                        .exactOptional()
                        .openapi({ description: 'Type of form field to use.', example: 'name' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              formDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Set a description for the form that will be visible to recipients. ',
                  example: 'Send your files',
                }),
              submitButtonText: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Text to be displayed on the submission button.',
                  example: 'Send Files',
                }),
              successMessage: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Text to be displayed when a recipient has submitted the form. ',
                  example: 'Your files were uploaded',
                }),
            })
            .openapi({
              description: 'CSS Styles of the form.',
              title: 'UpdateFormByIdRequestBody',
              required: [],
            }),
          example: {
            elements: [
              {
                name: 'Name',
                order: 0,
                settings: {
                  description: 'this is a description test',
                  isRequired: true,
                  senderEmail: false,
                  useAsFolderName: false,
                  width: 1,
                },
                type: 'name',
              },
              {
                id: 2331,
                name: 'Email Address',
                order: 1,
                settings: {
                  description: null,
                  isRequired: true,
                  senderEmail: false,
                  useAsFolderName: false,
                  width: 1,
                },
                type: 'email',
              },
              {
                id: 2333,
                name: 'Subject',
                order: 2,
                settings: {
                  description: null,
                  isRequired: true,
                  senderEmail: false,
                  useAsFolderName: false,
                  width: 1,
                },
                type: 'text',
              },
              {
                id: 2335,
                name: 'Message',
                order: 3,
                settings: {
                  description: null,
                  isRequired: false,
                  senderEmail: false,
                  useAsFolderName: false,
                  width: 1,
                },
                type: 'textarea',
              },
              {
                id: 2337,
                name: 'Upload Area',
                order: 4,
                settings: {
                  description: null,
                  isRequired: false,
                  senderEmail: false,
                  useAsFolderName: false,
                  width: 1,
                },
                type: 'upload_area',
              },
            ],
            formDescription: 'hello world',
            submitButtonText: 'goodbye world',
            successMessage: 'thank you',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: FormResponseSchema,
          example: {
            data: {
              attributes: {
                cssStyles: null,
                elements: [
                  {
                    id: 2351,
                    name: 'rename test',
                    order: 0,
                    settings: {
                      description: 'this is a description test',
                      isRequired: 'true',
                      senderEmail: false,
                      useAsFolderName: 'false',
                      width: '1',
                    },
                    type: 'name',
                  },
                  {
                    id: 2331,
                    name: 'Email Address',
                    order: 1,
                    settings: {
                      description: null,
                      isRequired: true,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'email',
                  },
                  {
                    id: 2333,
                    name: 'Subject',
                    order: 2,
                    settings: {
                      description: null,
                      isRequired: true,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'text',
                  },
                  {
                    id: 2335,
                    name: 'Message',
                    order: 3,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'textarea',
                  },
                  {
                    id: 2337,
                    name: 'Upload Area',
                    order: 4,
                    settings: {
                      description: null,
                      isRequired: false,
                      senderEmail: false,
                      useAsFolderName: false,
                      width: 1,
                    },
                    type: 'upload_area',
                  },
                ],
                formDescription: 'hello world',
                submitButtonText: 'goodbye world',
                successMessage: 'thank you',
              },
              id: 459,
              relationships: { share: { data: { id: 1581, type: 'share' } } },
              type: 'form',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const getNotificationsRoute = createRoute({
  method: 'get',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Get a list of notifications',
  description:
    'Get a list of all the [notifications](/docs/account/06-notifications) you have access to. You can use sorting and filtering to limit the returned list.\n\n**Notes:**\n  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)',
  operationId: 'listNotifications',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call. ',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['file', 'folder', 'shared_folder', 'send_receipt', 'share_receipt', 'file_drop'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Type of notification include in the list. Valid options are **file**, **folder**, **send_receipt**, **share_receipt**, **file_drop**\n\nIf this parameter is not used, only **file** and **folder** type notifications are included in the list.',
            example: 'file',
            in: 'query',
            name: 'type',
            schema: {
              enum: [
                'file',
                'folder',
                'shared_folder',
                'send_receipt',
                'share_receipt',
                'file_drop',
              ],
              type: 'string',
            },
            required: false,
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
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Starting notification record in the result set. Can be used for pagination.',
            example: 50,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'What order the list of matches should be in. Valid sort fields are **resourcename**, **date**, **action** and **type**. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.\n\nYou can chose multiple options for the sort by separating them with commmas, such as "type,-date" to sort by type, then most recent.',
            example: 'date',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of notification records to return. Can be used for pagination.',
            example: 100,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 25, format: 'int32', type: 'integer' },
          },
        }),
      include: z
        .enum(['resource', 'share', 'user'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Related records to include in the response. Valid options are **ownerUser**, **resource**, **share**',
            example: 'resource,share,user',
            in: 'query',
            name: 'include',
            schema: { enum: ['resource', 'share', 'user'], type: 'string' },
            required: false,
          },
        }),
      action: z
        .enum(['connect', 'download', 'upload', 'delete', 'all'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The kind of action which triggers the notification. Valid choices are **connect** (only for delivery receipts), **download**, **upload**, **delete**, or **all** \n\n**Note** The **all** action matches notifications set to "all", not all notifications. For example, notifications set to trigger only on delete are not included if you filter for action=all',
            in: 'query',
            name: 'action',
            schema: {
              enum: ['connect', 'download', 'upload', 'delete', 'all'],
              example: 'all',
              type: 'string',
            },
            required: false,
          },
          example: 'all',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: NotificationCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  action: 'all',
                  created: '2020-07-29T09:53:17-07:00',
                  message: null,
                  modified: '2020-07-29T09:53:17-07:00',
                  name: '/Test',
                  path: '/Test',
                  readableDescription: "anybody uploads to, downloads from or deletes from '/Test'",
                  readableDescriptionWithoutPath:
                    'anybody uploads to or downloads from this folder',
                  recipientEmails: ['exavault@example.com'],
                  recipients: [
                    {
                      created: '2020-07-29T19:51:21-07:00',
                      email: 'exavault@example.com',
                      id: null,
                      modified: '2020-07-29T19:51:21-07:00',
                      notificationId: null,
                    },
                  ],
                  sendEmail: true,
                  type: 'folder',
                  usernames: ['exavaultuser'],
                },
                id: 1117,
                relationships: {
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  resource: { data: { id: 2554051, type: 'resource' } },
                },
                type: 'notification',
              },
            ],
            included: [],
            responseStatus: 200,
            returnedResults: 1,
            totalResults: 1,
          },
        },
      },
    },
  },
})

export const postNotificationsRoute = createRoute({
  method: 'post',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Create a new notification',
  description:
    'Create a new notification for a [resource](#section/Identifying-Resources) in your account. Notifications can be sent via email or webhook;\n\n- To enable email, pass an array of email addresses to the `recipients` parameter of this call. \n- To enable webhooks, setup the webhook callback URL in your account settings via [PATCH /account](#operation/updateAccount). \n\n**Notes:**\n  - Authenticated user should have [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions)\n',
  operationId: 'addNotification',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make API call. ',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              action: z
                .enum(['upload', 'download', 'delete', 'all'])
                .openapi({
                  description:
                    'Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)',
                  example: 'upload',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Custom message to include in notification emails.' }),
              recipients: z
                .array(z.email())
                .exactOptional()
                .openapi({
                  description:
                    "Email addresses to send notification emails to. If not specified, sends to the current user's email address.",
                  example: ['myemail@example.com'],
                }),
              resource: z
                .string()
                .openapi({
                  description:
                    'Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above.',
                }),
              sendEmail: z
                .boolean()
                .openapi({
                  description:
                    'Set to true if the user should be notified by email when the notification is triggered.',
                  example: true,
                }),
              type: z
                .enum(['file', 'folder'])
                .openapi({
                  description:
                    "What kind of notification you're making. Valid choices are:\n\n- **file** to monitor activity for a file resource\n- **folder** to monitor activity for a folder resource",
                  example: 'file',
                }),
              usernames: z
                .array(z.string())
                .openapi({
                  description:
                    "Determines which users' actions should trigger the notification. \n\nRather than listing  individual users, you can also use 3 special options:\n\n- **notice\\_user\\_all** for activity by any user or share recipient\n- **notice\\_user\\_all\\_users** for activity only by user accounts\n- **notice\\_user\\_all\\_recipient** for activity only by share recipients",
                }),
            })
            .openapi({
              required: ['type', 'resource', 'action', 'usernames', 'sendEmail'],
              title: 'AddNotificationRequestBody',
            }),
          examples: {
            Example: {
              value: {
                action: 'upload',
                message: 'hello world',
                recipients: ['myemail@example.com'],
                resource: 'examplefile.txt',
                sendEmail: true,
                type: 'file',
                usernames: ['exavault', 'exavalut2'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: NotificationResponseSchema,
          example: {
            data: {
              attributes: {
                action: 'upload',
                created: '2020-07-29T20:15:09-07:00',
                message: null,
                modified: '2020-07-29T20:15:09-07:00',
                name: '/Test',
                path: '/Test',
                readableDescription: "anybody uploads to '/Test'",
                readableDescriptionWithoutPath: 'anybody uploads to this folder',
                recipients: [
                  {
                    created: '2020-07-29T20:15:09-07:00',
                    email: 'exavault@example.com',
                    id: 81,
                    modified: '2020-07-29T20:15:09-07:00',
                    notificationId: 1143,
                  },
                  {
                    created: '2020-07-29T20:15:09-07:00',
                    email: 'exavault@example.com',
                    id: 83,
                    modified: '2020-07-29T20:15:09-07:00',
                    notificationId: 1143,
                  },
                ],
                sendEmail: false,
                type: 'folder',
                usernames: ['exavaultuser'],
              },
              id: 1143,
              relationships: {
                ownerUser: { data: { id: 124437, type: 'user' } },
                resource: { data: { id: 2554051, type: 'resource' } },
              },
              type: 'notification',
            },
            responseStatus: 201,
          },
        },
      },
    },
  },
})

export const getNotificationsIdRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Get notification details',
  description:
    "Get the details for a notification with a specific ID number. You'll be able to review its path, triggers and who's getting the notification. \n\n**Notes**\n\n- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to view the detail for a notification.\n- You can only retrieve notifications owned by your user account.",
  operationId: 'getNotificationById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description:
              'ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.',
            example: 3,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Related record types to include in the response. You can include multiple types by separating them with commas. Valid options are **ownerUser**, **resource**, and **share**.',
            example: 'resource,share',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: NotificationResponseSchema,
          example: {
            data: {
              attributes: {
                action: 'upload',
                created: '2020-07-29T20:15:09-07:00',
                message: null,
                modified: '2020-07-29T20:15:09-07:00',
                name: '/Test',
                path: '/Test',
                readableDescription: "anybody uploads to '/Test'",
                readableDescriptionWithoutPath: 'anybody uploads to this folder',
                recipients: [
                  {
                    created: '2020-07-29T20:15:09-07:00',
                    email: 'exavault@example.com',
                    id: 81,
                    modified: '2020-07-29T20:15:09-07:00',
                    notificationId: 1143,
                  },
                  {
                    created: '2020-07-29T20:15:09-07:00',
                    email: 'exavault+1@example.com',
                    id: 83,
                    modified: '2020-07-29T20:15:09-07:00',
                    notificationId: 1143,
                  },
                ],
                sendEmail: false,
                type: 'folder',
                usernames: ['exavaultuser'],
              },
              id: 1143,
              relationships: {
                ownerUser: { data: { id: 124437, type: 'user' } },
                resource: { data: { id: 2554051, type: 'resource' } },
              },
              type: 'notification',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const deleteNotificationsIdRoute = createRoute({
  method: 'delete',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Delete a notification',
  description:
    'Deletes a notification. Note that deleting a notification _only_ deletes the notification &ndash; it does not delete any underlying files or folders.\n\n**Notes:**\n\n- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.\n- You can only delete notifications owned by your user account.',
  operationId: 'deleteNotificationById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.',
            example: 3,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: EmptyResponseSchema } },
    },
  },
})

export const patchNotificationsIdRoute = createRoute({
  method: 'patch',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Update a notification',
  description:
    'Update an existing notification. You can add additional emails or change the action or users that cause a notification to trigger. \n\nWhen updating recipient emails, make sure your `recipients` parameter contains the full list of people who should be included on the notification. If you resend the list without an existing recipient, they will be deleted from the notification emails. \n\n**Notes:**\n\n- You need to have the [notifications permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to update a notification.\n- You can only change notifications owned by your user account.',
  operationId: 'updateNotificationById',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description:
              'ID of the notification. Use [GET /notifications](#operation/listNotifications) if you need to lookup an ID.',
            example: 3,
            in: 'path',
            name: 'id',
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
              action: z
                .enum(['upload', 'download', 'delete', 'all'])
                .exactOptional()
                .openapi({
                  description:
                    'Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete)',
                  example: 'all',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Custom message to insert into the notification emails, along with the matching activity.',
                }),
              recipients: z
                .array(z.email())
                .exactOptional()
                .openapi({
                  description:
                    "Email addresses to send notification emails to. If empty, sends to the current user's email address.",
                  example: ['myemail@example.com'],
                }),
              sendEmail: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether an email should be sent to the recipients when matching activity happens.',
                  example: true,
                }),
              usernames: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "Determines which users' actions should trigger the notification. \n\nRather than listing  individual users, you can also use 3 special options:\n\n- **notice\\_user\\_all** for activity by any user or share recipient\n- **notice\\_user\\_all\\_users** for activity only by user accounts\n- **notice\\_user\\_all\\_recipients** for activity only by share recipients",
                  example: ['notice_user_all'],
                }),
            })
            .openapi({ title: 'UpdateNotificationByIdRequestBody', required: [] }),
          examples: {
            'Example Body': {
              value: {
                action: 'upload',
                emails: ['exavault@example.com', 'exavault+1@example.com'],
                sendEmail: 'true',
                usernames: ['notice_user_all_recipients'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: NotificationResponseSchema,
          example: {
            data: {
              attributes: {
                action: 'all',
                created: '2020-07-29T20:15:09-07:00',
                message: null,
                modified: '2020-07-29T20:15:09-07:00',
                name: '/Test',
                path: '/Test',
                readableDescription: "anybody uploads to, downloads from or deletes from '/Test'",
                readableDescriptionWithoutPath: 'anybody uploads to or downloads from this folder',
                recipients: [
                  {
                    created: '2020-07-30T06:01:09-07:00',
                    email: 'exavault@example.com',
                    id: 85,
                    modified: '2020-07-30T06:01:09-07:00',
                    notificationId: 1143,
                  },
                  {
                    created: '2020-07-30T06:01:09-07:00',
                    email: 'exavault+1@example.com',
                    id: 87,
                    modified: '2020-07-30T06:01:09-07:00',
                    notificationId: 1143,
                  },
                ],
                sendEmail: false,
                type: 'folder',
                usernames: ['exavalutuser'],
              },
              id: 1143,
              relationships: {
                ownerUser: { data: { id: 124437, type: 'user' } },
                resource: { data: { id: 2554051, type: 'resource' } },
              },
              type: 'notification',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const postRecipientsSharesInvitesShareIdRoute = createRoute({
  method: 'post',
  path: '/recipients/shares/invites/{shareId}',
  tags: ['Recipients'],
  summary: 'Resend invitations to share recipients',
  description:
    'Resend invitations to one or all recipients attached to specified share. The most recent message that was sent for the share will be re-used for this email.\n\nYou can use [GET /shares/{id}](#operation/getShareById) to view the recipient list and message history for a share. Use [PATCH /shares/{id}](#operation/updateShareById) to add or remove recipients.',
  operationId: 'resendInvitationsForShare',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      shareId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'ID of the share to resend invites for.',
            in: 'path',
            name: 'shareId',
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
              recipientId: z
                .int32()
                .exactOptional()
                .openapi({ description: 'ID number of recipient to send a new invitation to.' }),
            })
            .openapi({ title: 'ResendInvitationsRequestBody', required: [] }),
          examples: { 'example-1': { value: { recipientId: 0 } } },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: ShareRecipientsResponseSchema,
          example: {
            data: ['test+3@example.com', 'test+4@example.com', 'test+5@example.com'],
            responseStatus: 201,
          },
        },
      },
    },
  },
})

export const getResourcesRoute = createRoute({
  method: 'get',
  path: '/resources',
  tags: ['Resources'],
  summary: 'Get Resource Properties',
  description:
    'Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.\n\n**Notes:**\n- Authenticated user should have list permission.\n',
  operationId: 'getResourceInfo',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description: 'Resource identifier of the file or folder to get metadata for.',
            in: 'query',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          example: {
            data: {
              attributes: {
                accessedAt: '2020-07-29T09:53:36-07:00',
                createdAt: '2020-07-28T15:59:23-07:00',
                createdBy: 'exavaultuser',
                extension: '',
                fileCount: 2,
                hash: '7a2abd9f90ce196hf3f650c612372c0b',
                name: 'Test',
                path: '/Test',
                previewable: false,
                size: 33415,
                type: 'dir',
                updatedAt: '2020-07-29T09:52:47-07:00',
                uploadDate: '2020-07-28T15:59:23-07:00',
              },
              id: 2554051,
              relationships: {
                directFile: { data: { id: 101, type: 'directFile' } },
                notifications: [{ data: { id: 1117, type: 'notification' } }],
                ownerAccount: { data: { id: 7, type: 'account' } },
                ownerUser: { data: { id: 124437, type: 'user' } },
                parentResource: { data: { id: 103, type: 'resource' } },
                share: { data: { id: 1499, type: 'share' } },
              },
              type: 'resource',
            },
            included: [
              {
                attributes: {
                  accessDescription: 'Download only',
                  accessMode: { delete: false, download: true, modify: false, upload: false },
                  assets: ['Test'],
                  created: '2020-07-29T08:51:39-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: null,
                  hasNotification: false,
                  hasPassword: false,
                  hash: '17t-eojdhh1j',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-29T09:53:36-07:00',
                  name: 'Test',
                  ownerHash: '17t-eojowf1j-sfh242uj',
                  paths: ['/Test'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'shared_folder',
                },
                id: 1499,
                type: 'share',
              },
              {
                attributes: {
                  accountId: 7,
                  blockUntil: '-001-11-29T16:07:02-07:52',
                  created: '2020-07-29T09:53:12-07:00',
                  isEnabled: true,
                  isIndexEnabled: true,
                  modified: '2020-07-29T09:53:12-07:00',
                  path: '/Test',
                },
                id: 101,
                type: 'directFile',
              },
              {
                attributes: {
                  action: 'upload',
                  created: '2020-07-29T20:15:09-07:00',
                  message: null,
                  modified: '2020-07-29T20:15:09-07:00',
                  name: '/Test',
                  path: '/Test',
                  readableDescription: "anybody uploads to '/Test'",
                  readableDescriptionWithoutPath: 'anybody uploads to this folder',
                  recipientEmails: ['exavault@example.com', 'exavault+1@example.com'],
                  recipients: [
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault@example.com',
                      id: 81,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault+1@example.com',
                      id: 83,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                  ],
                  sendEmail: false,
                  type: 'folder',
                  usernames: ['exavaultuser'],
                },
                id: 1143,
                relationships: {
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  resource: { data: { id: 2554051, type: 'resource' } },
                },
                type: 'notification',
              },
              {
                attributes: {
                  accessTimestamp: '2020-07-27 19:32:45',
                  accountName: 'exavault',
                  created: '2020-07-24T07:51:12-07:00',
                  email: 'test@example.com',
                  expiration: null,
                  firstLogin: false,
                  homeDir: '/',
                  modified: '2020-07-24T07:51:13-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'master',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124419,
                relationships: {
                  homeResource: { data: { id: 2536831, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
              {
                attributes: {
                  accountName: 'exampleaccount',
                  accountOnboarding: true,
                  allowedIp: null,
                  branding: true,
                  clientId: 1,
                  complexPasswords: false,
                  created: '2019-05-30T20:48:57Z',
                  customDomain: false,
                  customSignature: null,
                  externalDomains: null,
                  maxUsers: 5,
                  modified: '2019-08-27T01:03:41Z',
                  quota: {
                    diskLimit: 37580963840,
                    diskUsed: 24938382543,
                    noticeEnabled: true,
                    noticeThreshold: 90,
                  },
                  secureOnly: false,
                  showReferralLinks: true,
                  status: 1,
                  userCount: 4,
                  welcomeEmailContent:
                    '"Great news, your new account is ready!\\n\\nFor your records, we\'ve listed information you\'ll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]"\n',
                  welcomeEmailSubject: 'ExaVault File Sharing Account',
                },
                id: 7,
                relationships: { masterUser: { data: { id: 1, type: 'user' } } },
                type: 'account',
              },
              {
                attributes: {
                  accessedAt: '2011-03-21T00:18:56-07:00',
                  createdAt: '2011-03-21T00:18:56-07:00',
                  createdBy: 'exampleuser',
                  extension: 'dir',
                  fileCount: 3,
                  hash: 'ec4aa9a91be282666a165899a14f29b1',
                  name: 'examplefolder',
                  path: '/examplefolder',
                  previewable: false,
                  size: 12321321,
                  updatedAt: '2011-03-21T00:18:56-07:00',
                  uploadDate: '2011-03-21T00:18:56-07:00',
                },
                id: 2,
                relationships: {
                  directFile: { data: { id: 101, type: 'directFile' } },
                  notifications: [{ data: { id: 1117, type: 'notification' } }],
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 103, type: 'resource' } },
                  share: { data: { id: 1499, type: 'share' } },
                },
                type: 'resource',
              },
            ],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const postResourcesRoute = createRoute({
  method: 'post',
  path: '/resources',
  tags: ['Resources'],
  summary: 'Create a folder',
  description:
    'Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.\n\n**Notes:**\n- Authenticated user should have modify permission.\n',
  operationId: 'addFolder',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Name of the folder to create. Required if **path** is not used',
                }),
              parentResource: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Resource identifier where to create a folder. Required if **path** is not used',
                }),
              path: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Fully-qualified path to the new folder including folder's name",
                }),
            })
            .openapi({ title: 'AddFolderRequestBody', required: [] }),
          examples: {
            'Example using path': { value: { path: '/exavault/exampleFile.txt' } },
            'Example without path': {
              value: { name: 'exampleFile.txt', parentResource: '/exavault' },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          example: {
            data: {
              attributes: {
                accessedAt: '2020-07-29T09:53:36-07:00',
                createdAt: '2020-07-28T15:59:23-07:00',
                createdBy: 'exavaultuser',
                extension: '',
                fileCount: 2,
                hash: '7a2hhf9f90ce196de3f650c612372c0b',
                name: 'Test Folder',
                path: '/Test Folder',
                previewable: false,
                size: 33415,
                type: 'dir',
                updatedAt: '2020-07-29T10:27:08-07:00',
                uploadDate: '2020-07-28T15:59:23-07:00',
              },
              id: 2554051,
              relationships: {
                directFile: { data: { id: 101, type: 'directFile' } },
                notifications: [{ data: { id: 1117, type: 'notification' } }],
                ownerAccount: { data: { id: 7, type: 'account' } },
                ownerUser: { data: { id: 124437, type: 'user' } },
                parentResource: { data: { id: 103, type: 'resource' } },
                share: { data: { id: 1499, type: 'share' } },
              },
              type: 'resource',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const deleteResourcesRoute = createRoute({
  method: 'delete',
  path: '/resources',
  tags: ['Resources'],
  summary: 'Delete Resources',
  description:
    'Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.\n\n**Notes:**\n- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- It is not possible to un-delete a deleted resource.\n',
  operationId: 'deleteResources',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resources: z
                .array(z.string())
                .openapi({ description: 'Resource identifiers of items to delete.' }),
            })
            .openapi({ required: ['resources'], title: 'DeleteResourcesRequestBody' }),
          examples: { Example: { value: { resources: ['exampleFile1.txt', 'exampleFile2.txt'] } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 200 },
        },
      },
    },
    207: {
      description: 'Multi Response',
      content: {
        'application/json': {
          schema: ResourceMultiResponseSchema,
          example: {
            responses: [
              {
                data: { id: 2, meta: { path: '/deletefolder' }, type: 'resource' },
                responseStatus: 200,
              },
              {
                errors: [
                  { code: null, detail: null, meta: { path: '/deletefolder2' }, title: null },
                ],
                responseStatus: 404,
              },
            ],
          },
        },
      },
    },
  },
})

export const postResourcesCompressRoute = createRoute({
  method: 'post',
  path: '/resources/compress',
  tags: ['Resources'],
  summary: 'Compress resources',
  description:
    'Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.\n\n**Notes:**\n- Authenticated user should have modify permission.\n',
  operationId: 'compressFiles',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              archiveName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the zip archive to create. If left blank, current date will be used.',
                }),
              parentResource: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Resource identifier of the folder where zip archive should be created.',
                }),
              resources: z
                .array(z.string())
                .openapi({
                  description:
                    'Resource identifiers for file(s)/folder(s) to include in new zip file',
                }),
            })
            .openapi({ required: ['resources'], title: 'CompressFilesRequestBody' }),
          examples: {
            Example: {
              value: {
                archiveName: 'exampleFiles.zip',
                parentResource: '/exavault',
                resources: ['exampleFile1.txt', 'exampleFile2.txt', 'id:234222'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          example: {
            data: {
              attributes: {
                accessedAt: '2020-07-29T19:04:09-07:00',
                createdAt: '2020-07-29T19:04:09-07:00',
                createdBy: 'exavault',
                extension: 'zip',
                fileCount: null,
                hash: 'b2d987d4ed9dhh28e3a18adafe59107c',
                name: 'Compress test.zip',
                path: '/Test/Compress test.zip',
                previewable: false,
                size: 33434,
                type: 'file',
                updatedAt: '2020-07-29T19:04:09-07:00',
                uploadDate: '2020-07-29T19:04:09-07:00',
              },
              id: 2566609,
              relationships: {
                ownerAccount: { data: { id: 7, type: 'account' } },
                ownerUser: { data: { id: 124437, type: 'user' } },
                parentResource: { data: { id: 2554051, type: 'resource' } },
              },
              type: 'resource',
            },
            responseStatus: 201,
          },
        },
      },
    },
  },
})

export const postResourcesCopyRoute = createRoute({
  method: 'post',
  path: '/resources/copy',
  tags: ['Resources'],
  summary: 'Copy resources',
  description:
    'Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.\nIn the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the \nroot of the `parentResource`.\n\n**Notes:**\n- Authenticated user should have modify permission.\n',
  operationId: 'copyResources',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              parentResource: z
                .string()
                .openapi({
                  description: 'Resource identifier for folder where items will be copied to.',
                }),
              resources: z
                .array(z.string())
                .openapi({
                  description: 'Resource identifier(s) of items to be copied to a new location',
                }),
            })
            .openapi({
              required: ['resources', 'parentResource'],
              title: 'CopyResourcesRequestBody',
            }),
          examples: {
            Example: {
              value: {
                parentResource: '/exavault/exampleFileFolder',
                resources: ['/exavault/exampleFile.txt', '/exavault/otherFile.txt', 'id:28282828'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceCopyMoveSchema,
          examples: {
            $: {},
            Example: {
              value: {
                data: {
                  attributes: {
                    accessedAt: '2011-03-21T00:18:56-07:00',
                    accessedTime: 0,
                    createdAt: '2011-03-21T00:18:56-07:00',
                    createdBy: 'exampleuser',
                    createdTime: 0,
                    extension: 'string',
                    fileCount: 0,
                    hash: 'ec4aa9a91be282666a165899a14f29b1',
                    name: 'examplefolder',
                    path: '/examplefolder',
                    previewable: true,
                    size: 0,
                    type: 'file',
                    updatedAt: '2011-03-21T00:18:56-07:00',
                    updatedTime: 0,
                    uploadDate: '2011-03-21T00:18:56-07:00',
                  },
                  id: 1,
                  relationships: {
                    directFile: { data: { id: 2, type: 'directFile' } },
                    notifications: [{ data: { id: 2, type: 'notification' } }],
                    parentResource: { data: { id: 2, type: 'resource' } },
                    share: { data: { id: 2345, type: 'share' } },
                  },
                  type: 'resource',
                },
                meta: { id: 2321 },
              },
            },
          },
        },
      },
    },
    207: {
      description: 'Multi Response',
      content: {
        'application/json': {
          schema: ResourceMultiResponseSchema,
          example: {
            responses: [
              {
                data: {
                  attributes: {
                    accessedAt: '2020-07-29T12:53:26-07:00',
                    createdAt: '2020-07-29T12:53:26-07:00',
                    createdBy: 'exavault',
                    extension: 'jpg',
                    fileCount: null,
                    hash: 'f573b417707095b017a26d4e5a2e6dd0',
                    name: 'test.jpg',
                    path: '/HomeTest/test.jpg',
                    previewable: false,
                    size: 33415,
                    type: 'file',
                    updatedAt: '2020-07-29T12:53:26-07:00',
                    uploadDate: '2020-07-29T12:53:26-07:00',
                  },
                  id: 2563533,
                  type: 'resource',
                },
                meta: { destinationPath: '/HomeTest', path: '/Test/test.jpg' },
                responseStatus: 200,
              },
              {
                errors: [
                  {
                    code: null,
                    detail: null,
                    meta: { destinationPath: '/HomeTest', path: '/Test/test2.jpg' },
                    title: null,
                  },
                ],
                responseStatus: 404,
              },
            ],
          },
        },
      },
    },
  },
})

export const getResourcesDownloadRoute = createRoute({
  method: 'get',
  path: '/resources/download',
  tags: ['Resources'],
  summary: 'Download a file',
  description:
    'Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.\n\n**NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.',
  operationId: 'download',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'resources[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Path of file or folder to be downloaded, starting from the root. Can also be an array of paths.',
            in: 'query',
            name: 'resources[]',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      downloadArchiveName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When downloading multiple files, this will be used as the name of the zip file that is created.',
            in: 'query',
            name: 'downloadArchiveName',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Content of the file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const postResourcesExtractRoute = createRoute({
  method: 'post',
  path: '/resources/extract',
  tags: ['Resources'],
  summary: 'Extract resources',
  description:
    'Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.\n\n**Notes:**\n- You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.\n',
  operationId: 'extractFiles',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              parentResource: z
                .string()
                .openapi({
                  description: 'Resource identifier for folder files should be extracted to.',
                }),
              resource: z
                .string()
                .openapi({ description: 'Resource identifier of zip archive to be extracted.' }),
            })
            .openapi({
              required: ['resource', 'parentResource'],
              title: 'ExtractFilesRequestBody',
            }),
          examples: {
            Example: {
              value: { parentResource: '/extractFolder', resource: '/exavault/exampleFiles.zip' },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  accessedAt: '2020-07-29T12:50:38-07:00',
                  accessedTime: 1596052238,
                  createdAt: '2020-07-29T09:52:47-07:00',
                  createdBy: 'exavaultuser',
                  createdTime: 1596041567,
                  extension: 'jpg',
                  fileCount: null,
                  hash: 'f836b417707583b017a26d4e5a2e6dd0',
                  name: 'test.jpg',
                  path: '/exavault/test.jpg',
                  previewable: false,
                  size: 33415,
                  type: 'file',
                  updatedAt: '2020-07-29T19:27:31-07:00',
                  updatedTime: 1596076051,
                  uploadDate: '2020-07-29T09:52:47-07:00',
                },
                id: 2559471,
                relationships: {
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 2554051, type: 'resource' } },
                },
                type: 'resource',
              },
            ],
            responseStatus: 201,
            returnedResults: 1,
            totalResults: 1,
          },
        },
      },
    },
  },
})

export const getResourcesListRoute = createRoute({
  method: 'get',
  path: '/resources/list',
  tags: ['Resources'],
  summary: 'Get a list of all resources',
  description:
    'Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /). \n\n**Searching for Files and Folders**\n\nUsing the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:\n\n- \\*Report\\* would find any files or folders with "Report" in the name.\n- Data\\_202?-09-30.xlsx would match items such as "Data\\_2020-09-30.xlsx", "DATA\\_2021-09-30.xlsx", "data\\_2022-09-30.xlsx" etc.\n- sales\\* would find any files or folders starting with the word "Sales"\n- \\*.csv would locate any files ending in ".csv"\n- \\* matches everything within the directory tree starting at your given `resource`\n\nThe search is not case-sensitive. Searching for Clients\\* or clients\\* or CLIENTS\\*, etc. will provide identical results\n\nIf you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.',
  operationId: 'listResources',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description: 'Resource identifier to get resources for. Can be path/id/name.',
            in: 'query',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.',
            in: 'query',
            name: 'sort',
            schema: { example: 'name', type: 'string' },
            required: false,
          },
          example: 'name',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list. e.g, setting `offset=200` would trigger the server to skip the first 200 matching entries when returning the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of files to limit the result. If you have more files in your directory than this limit, make multiple calls, incrementing the `offset` parameter, above.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit types of resources returned to "file" or "dir" only. This is ignored if you are using the `name` parameter to trigger a search.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Text to match resource names. This allows you to filter the results returned. For example, to locate only zip archive files, you can enter `*zip` and only resources ending in "zip" will be included in the list of results.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  accessedAt: '2011-03-21T00:18:56-07:00',
                  createdAt: '2011-03-21T00:18:56-07:00',
                  createdBy: 'exampleuser',
                  extension: 'dir',
                  fileCount: 3,
                  hash: 'ec4aa9a91be282666a165899a14f29b1',
                  name: 'examplefolder',
                  path: '/examplefolder',
                  previewable: false,
                  size: 12321321,
                  updatedAt: '2011-03-21T00:18:56-07:00',
                  uploadDate: '2011-03-21T00:18:56-07:00',
                },
                id: 2,
                relationships: {
                  directFile: { data: { id: 101, type: 'directFile' } },
                  notifications: [{ data: { id: 1117, type: 'notification' } }],
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 103, type: 'resource' } },
                  share: { data: { id: 1499, type: 'share' } },
                },
                type: 'resource',
              },
            ],
            included: [
              {
                attributes: {
                  accessDescription: 'Download only',
                  accessMode: { delete: false, download: true, modify: false, upload: false },
                  assets: ['Test'],
                  created: '2020-07-29T08:51:39-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: null,
                  hasNotification: false,
                  hasPassword: false,
                  hash: '17t-eojdhh1j',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-29T09:53:36-07:00',
                  name: 'Test',
                  ownerHash: '17t-eojowf1j-sfh242uj',
                  paths: ['/Test'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'shared_folder',
                },
                id: 1499,
                type: 'share',
              },
              {
                attributes: {
                  accountId: 7,
                  blockUntil: '-001-11-29T16:07:02-07:52',
                  created: '2020-07-29T09:53:12-07:00',
                  isEnabled: true,
                  isIndexEnabled: true,
                  modified: '2020-07-29T09:53:12-07:00',
                  path: '/Test',
                },
                id: 101,
                type: 'directFile',
              },
              {
                attributes: {
                  action: 'upload',
                  created: '2020-07-29T20:15:09-07:00',
                  message: null,
                  modified: '2020-07-29T20:15:09-07:00',
                  name: '/Test',
                  path: '/Test',
                  readableDescription: "anybody uploads to '/Test'",
                  readableDescriptionWithoutPath: 'anybody uploads to this folder',
                  recipientEmails: ['exavault@example.com', 'exavault+1@example.com'],
                  recipients: [
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault@example.com',
                      id: 81,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault+1@example.com',
                      id: 83,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                  ],
                  sendEmail: false,
                  type: 'folder',
                  usernames: ['exavaultuser'],
                },
                id: 1143,
                relationships: {
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  resource: { data: { id: 2554051, type: 'resource' } },
                },
                type: 'notification',
              },
              {
                attributes: {
                  accessTimestamp: '2020-07-27 19:32:45',
                  accountName: 'exavault',
                  created: '2020-07-24T07:51:12-07:00',
                  email: 'test@example.com',
                  expiration: null,
                  firstLogin: false,
                  homeDir: '/',
                  modified: '2020-07-24T07:51:13-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'master',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124419,
                relationships: {
                  homeResource: { data: { id: 2536831, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
              {
                attributes: {
                  accountName: 'exampleaccount',
                  accountOnboarding: true,
                  allowedIp: null,
                  branding: true,
                  clientId: 1,
                  complexPasswords: false,
                  created: '2019-05-30T20:48:57Z',
                  customDomain: false,
                  customSignature: null,
                  externalDomains: null,
                  maxUsers: 5,
                  modified: '2019-08-27T01:03:41Z',
                  quota: {
                    diskLimit: 37580963840,
                    diskUsed: 24938382543,
                    noticeEnabled: true,
                    noticeThreshold: 90,
                  },
                  secureOnly: false,
                  showReferralLinks: true,
                  status: 1,
                  userCount: 4,
                  welcomeEmailContent:
                    '"Great news, your new account is ready!\\n\\nFor your records, we\'ve listed information you\'ll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]"\n',
                  welcomeEmailSubject: 'ExaVault File Sharing Account',
                },
                id: 7,
                relationships: { masterUser: { data: { id: 1, type: 'user' } } },
                type: 'account',
              },
              {
                attributes: {
                  accessedAt: '2011-03-21T00:18:56-07:00',
                  createdAt: '2011-03-21T00:18:56-07:00',
                  createdBy: 'exampleuser',
                  extension: 'dir',
                  fileCount: 3,
                  hash: 'ec4aa9a91be282666a165899a14f29b1',
                  name: 'examplefolder',
                  path: '/examplefolder',
                  previewable: false,
                  size: 12321321,
                  updatedAt: '2011-03-21T00:18:56-07:00',
                  uploadDate: '2011-03-21T00:18:56-07:00',
                },
                id: 2,
                relationships: {
                  directFile: { data: { id: 101, type: 'directFile' } },
                  notifications: [{ data: { id: 1117, type: 'notification' } }],
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 103, type: 'resource' } },
                  share: { data: { id: 1499, type: 'share' } },
                },
                type: 'resource',
              },
            ],
            responseStatus: 200,
            returnedResults: 2,
            totalResults: 50,
          },
        },
      },
    },
  },
})

export const getResourcesListIdRoute = createRoute({
  method: 'get',
  path: '/resources/list/{id}',
  tags: ['Resources'],
  summary: 'List contents of folder',
  description:
    "Returns a list of files/folders for the parent resource ID. \n\nYou can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. **/myfiles/some_folder**).\n\n**Notes:**\n- Authenticated user should have list permission.\n",
  operationId: 'listResourceContents',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call. ',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID of the parent resource to get a list of resources for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Endpoint support multiple sort fields by allowing array of sort params. Sort fields should be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.',
            in: 'query',
            name: 'sort',
            schema: { example: 'name', type: 'string' },
            required: false,
          },
          example: 'name',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of files to limit the result. Cannot be set higher than 100. If you have more than one hundred files in your directory, make multiple calls, incrementing the `offset parameter, above.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit types of resources returned to "file" or "dir" only.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  accessedAt: '2011-03-21T00:18:56-07:00',
                  createdAt: '2011-03-21T00:18:56-07:00',
                  createdBy: 'exampleuser',
                  extension: 'dir',
                  fileCount: 3,
                  hash: 'ec4aa9a91be282666a165899a14f29b1',
                  name: 'examplefolder',
                  path: '/examplefolder',
                  previewable: false,
                  size: 12321321,
                  updatedAt: '2011-03-21T00:18:56-07:00',
                  uploadDate: '2011-03-21T00:18:56-07:00',
                },
                id: 2,
                relationships: {
                  directFile: { data: { id: 101, type: 'directFile' } },
                  notifications: [{ data: { id: 1117, type: 'notification' } }],
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 103, type: 'resource' } },
                  share: { data: { id: 1499, type: 'share' } },
                },
                type: 'resource',
              },
            ],
            included: [
              {
                attributes: {
                  accessDescription: 'Download only',
                  accessMode: { delete: false, download: true, modify: false, upload: false },
                  assets: ['Test'],
                  created: '2020-07-29T08:51:39-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: null,
                  hasNotification: false,
                  hasPassword: false,
                  hash: '17t-eojdhh1j',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-29T09:53:36-07:00',
                  name: 'Test',
                  ownerHash: '17t-eojowf1j-sfh242uj',
                  paths: ['/Test'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'shared_folder',
                },
                id: 1499,
                type: 'share',
              },
              {
                attributes: {
                  accountId: 7,
                  blockUntil: '-001-11-29T16:07:02-07:52',
                  created: '2020-07-29T09:53:12-07:00',
                  isEnabled: true,
                  isIndexEnabled: true,
                  modified: '2020-07-29T09:53:12-07:00',
                  path: '/Test',
                },
                id: 101,
                type: 'directFile',
              },
              {
                attributes: {
                  action: 'upload',
                  created: '2020-07-29T20:15:09-07:00',
                  message: null,
                  modified: '2020-07-29T20:15:09-07:00',
                  name: '/Test',
                  path: '/Test',
                  readableDescription: "anybody uploads to '/Test'",
                  readableDescriptionWithoutPath: 'anybody uploads to this folder',
                  recipientEmails: ['exavault@example.com', 'exavault+1@example.com'],
                  recipients: [
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault@example.com',
                      id: 81,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault+1@example.com',
                      id: 83,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                  ],
                  sendEmail: false,
                  type: 'folder',
                  usernames: ['exavaultuser'],
                },
                id: 1143,
                relationships: {
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  resource: { data: { id: 2554051, type: 'resource' } },
                },
                type: 'notification',
              },
              {
                attributes: {
                  accessTimestamp: '2020-07-27 19:32:45',
                  accountName: 'exavault',
                  created: '2020-07-24T07:51:12-07:00',
                  email: 'test@example.com',
                  expiration: null,
                  firstLogin: false,
                  homeDir: '/',
                  modified: '2020-07-24T07:51:13-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'master',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124419,
                relationships: {
                  homeResource: { data: { id: 2536831, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
              {
                attributes: {
                  accountName: 'exampleaccount',
                  accountOnboarding: true,
                  allowedIp: null,
                  branding: true,
                  clientId: 1,
                  complexPasswords: false,
                  created: '2019-05-30T20:48:57Z',
                  customDomain: false,
                  customSignature: null,
                  externalDomains: null,
                  maxUsers: 5,
                  modified: '2019-08-27T01:03:41Z',
                  quota: {
                    diskLimit: 37580963840,
                    diskUsed: 24938382543,
                    noticeEnabled: true,
                    noticeThreshold: 90,
                  },
                  secureOnly: false,
                  showReferralLinks: true,
                  status: 1,
                  userCount: 4,
                  welcomeEmailContent:
                    '"Great news, your new account is ready!\\n\\nFor your records, we\'ve listed information you\'ll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]"\n',
                  welcomeEmailSubject: 'ExaVault File Sharing Account',
                },
                id: 7,
                relationships: { masterUser: { data: { id: 1, type: 'user' } } },
                type: 'account',
              },
              {
                attributes: {
                  accessedAt: '2011-03-21T00:18:56-07:00',
                  createdAt: '2011-03-21T00:18:56-07:00',
                  createdBy: 'exampleuser',
                  extension: 'dir',
                  fileCount: 3,
                  hash: 'ec4aa9a91be282666a165899a14f29b1',
                  name: 'examplefolder',
                  path: '/examplefolder',
                  previewable: false,
                  size: 12321321,
                  updatedAt: '2011-03-21T00:18:56-07:00',
                  uploadDate: '2011-03-21T00:18:56-07:00',
                },
                id: 2,
                relationships: {
                  directFile: { data: { id: 101, type: 'directFile' } },
                  notifications: [{ data: { id: 1117, type: 'notification' } }],
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 103, type: 'resource' } },
                  share: { data: { id: 1499, type: 'share' } },
                },
                type: 'resource',
              },
            ],
            responseStatus: 200,
            returnedResults: 2,
            totalResults: 50,
          },
        },
      },
    },
  },
})

export const postResourcesMoveRoute = createRoute({
  method: 'post',
  path: '/resources/move',
  tags: ['Resources'],
  summary: 'Move resources',
  description:
    'Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.\nIn the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.\n\n**Notes:**\n- Authenticated user should have modify permission.\n',
  operationId: 'moveResources',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              parentResource: z
                .string()
                .openapi({
                  description: 'Resource identifier of folder to move files/folders to.',
                  example: '/copyhere',
                }),
              resources: z
                .array(z.string())
                .openapi({
                  description: 'Array containing file/folder paths to move.',
                  example: ['/testone.jpg', '/folder'],
                }),
            })
            .openapi({
              required: ['resources', 'parentResource'],
              title: 'MoveResourcesRequestBody',
            }),
          examples: {
            Example: {
              value: { parentResource: '/copyhere', resources: ['/testone.jpg', '/folder'] },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceCopyMoveSchema,
          examples: {
            $: {},
            Example: {
              value: {
                data: {
                  attributes: {
                    accessedAt: '2011-03-21T00:18:56-07:00',
                    accessedTime: 0,
                    createdAt: '2011-03-21T00:18:56-07:00',
                    createdBy: 'exampleuser',
                    createdTime: 0,
                    extension: 'string',
                    fileCount: 0,
                    hash: 'ec4aa9a91be282666a165899a14f29b1',
                    name: 'examplefolder',
                    path: '/examplefolder',
                    previewable: true,
                    size: 0,
                    type: 'file',
                    updatedAt: '2011-03-21T00:18:56-07:00',
                    updatedTime: 0,
                    uploadDate: '2011-03-21T00:18:56-07:00',
                  },
                  id: 1,
                  relationships: {
                    directFile: { data: { id: 2, type: 'directFile' } },
                    notifications: [{ data: { id: 2, type: 'notification' } }],
                    parentResource: { data: { id: 2, type: 'resource' } },
                    share: { data: { id: 2345, type: 'share' } },
                  },
                  type: 'resource',
                },
                meta: { id: 2321 },
              },
            },
          },
        },
      },
    },
    207: {
      description: 'Multi Response',
      content: {
        'application/json': {
          schema: ResourceMultiResponseSchema,
          example: {
            responses: [
              {
                data: {
                  attributes: {
                    accessedAt: '2020-07-29T12:53:26-07:00',
                    createdAt: '2020-07-29T12:53:26-07:00',
                    createdBy: 'exavault',
                    extension: 'jpg',
                    fileCount: null,
                    hash: 'f573b417707095b017a26d4e5a2e6dd0',
                    name: 'test.jpg',
                    path: '/HomeTest/test.jpg',
                    previewable: false,
                    size: 33415,
                    type: 'file',
                    updatedAt: '2020-07-29T12:53:26-07:00',
                    uploadDate: '2020-07-29T12:53:26-07:00',
                  },
                  id: 2563533,
                  type: 'resource',
                },
                meta: { destinationPath: '/HomeTest', path: '/Test/test.jpg' },
                responseStatus: 200,
              },
              {
                errors: [
                  {
                    code: null,
                    detail: null,
                    meta: { destinationPath: '/HomeTest', path: '/Test/test2.jpg' },
                    title: null,
                  },
                ],
                responseStatus: 404,
              },
            ],
          },
        },
      },
    },
  },
})

export const getResourcesPreviewRoute = createRoute({
  method: 'get',
  path: '/resources/preview',
  tags: ['Resources'],
  summary: 'Preview a file',
  description:
    "Returns a resized image of the specified document for supported file types.\n\nImage data returned is encoded in base64 format and can be viewed using the `<img>` element. \n\n```<img src='data:image/jpeg;base64' + meta.image/>```\n\n**Notes:**\n- Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`\n",
  operationId: 'getPreviewImage',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    query: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description: 'Resource identifier for the image file.',
            in: 'query',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .enum(['small', 'medium', 'large'])
        .openapi({
          param: {
            description: 'The size of the image.',
            in: 'query',
            name: 'size',
            required: true,
            schema: { enum: ['small', 'medium', 'large'], type: 'string' },
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Overrides sizes. Sets to a specific width.',
            in: 'query',
            name: 'width',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Overrides sizes. Sets to a specific height.',
            in: 'query',
            name: 'height',
            required: false,
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Page number to extract from a multi-page document (0 is the first page). Vaild for **.pdf** or **.doc** files.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: PreviewFileResponseSchema,
          example: {
            data: { id: 2554101, type: 'resource' },
            meta: {
              image: 'exampleimagebinary',
              imageHash: '007e01062d91f9787f87c0cf78472d61',
              size: 13941,
            },
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const postResourcesUploadRoute = createRoute({
  method: 'post',
  path: '/resources/upload',
  tags: ['Resources'],
  summary: 'Upload a file',
  description:
    'Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.\n',
  operationId: 'uploadFile',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      offsetBytes: z
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
            description: 'Allows a file upload to resume at a certain number of bytes.',
            example: 4852,
            in: 'header',
            name: 'offsetBytes',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .openapi({
          param: {
            description: 'Destination path for the file being uploaded, including the file name.',
            in: 'query',
            name: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'File size, in bits, of the file being uploaded.',
            example: 2935,
            in: 'query',
            name: 'fileSize',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      resume: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "True if upload resume is supported, false if it isn't.\n",
            example: true,
            in: 'query',
            name: 'resume',
            schema: { default: 'true', type: 'boolean' },
            required: false,
          },
        }),
      allowOverwrite: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated. ',
            example: true,
            in: 'query',
            name: 'allowOverwrite',
            schema: { default: 'false', type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          example: {
            data: {
              attributes: {
                accessedAt: '2020-07-29T12:50:38-07:00',
                accessedTime: 1596052238,
                createdAt: '2020-07-29T09:52:47-07:00',
                createdBy: 'exavaultuser',
                createdTime: 1596041567,
                extension: 'jpg',
                fileCount: null,
                hash: 'f836b417707583b017a26d4e5a2e6dd0',
                name: 'test.jpg',
                path: '/exavault/test.jpg',
                previewable: false,
                size: 33415,
                type: 'file',
                updatedAt: '2020-07-29T19:27:31-07:00',
                updatedTime: 1596076051,
                uploadDate: '2020-07-29T09:52:47-07:00',
              },
              id: 2559471,
              relationships: {
                ownerAccount: { data: { id: 7, type: 'account' } },
                ownerUser: { data: { id: 124437, type: 'user' } },
                parentResource: { data: { id: 2554051, type: 'resource' } },
              },
              type: 'resource',
            },
            included: [],
            responseStatus: 201,
          },
        },
      },
    },
  },
})

export const getResourcesIdRoute = createRoute({
  method: 'get',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Get resource metadata',
  description:
    'Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.\n\n**Notes:**\n- Authenticated user should have list permission.\n',
  operationId: 'getResourceInfoById',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID number of the resource',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          example: {
            data: {
              attributes: {
                accessedAt: '2020-07-29T09:53:36-07:00',
                createdAt: '2020-07-28T15:59:23-07:00',
                createdBy: 'exavaultuser',
                extension: '',
                fileCount: 2,
                hash: '7a2abd9f90ce196hf3f650c612372c0b',
                name: 'Test',
                path: '/Test',
                previewable: false,
                size: 33415,
                type: 'dir',
                updatedAt: '2020-07-29T09:52:47-07:00',
                uploadDate: '2020-07-28T15:59:23-07:00',
              },
              id: 2554051,
              relationships: {
                directFile: { data: { id: 101, type: 'directFile' } },
                notifications: [{ data: { id: 1117, type: 'notification' } }],
                ownerAccount: { data: { id: 7, type: 'account' } },
                ownerUser: { data: { id: 124437, type: 'user' } },
                parentResource: { data: { id: 103, type: 'resource' } },
                share: { data: { id: 1499, type: 'share' } },
              },
              type: 'resource',
            },
            included: [
              {
                attributes: {
                  accessDescription: 'Download only',
                  accessMode: { delete: false, download: true, modify: false, upload: false },
                  assets: ['Test'],
                  created: '2020-07-29T08:51:39-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: null,
                  hasNotification: false,
                  hasPassword: false,
                  hash: '17t-eojdhh1j',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-29T09:53:36-07:00',
                  name: 'Test',
                  ownerHash: '17t-eojowf1j-sfh242uj',
                  paths: ['/Test'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'shared_folder',
                },
                id: 1499,
                type: 'share',
              },
              {
                attributes: {
                  accountId: 7,
                  blockUntil: '-001-11-29T16:07:02-07:52',
                  created: '2020-07-29T09:53:12-07:00',
                  isEnabled: true,
                  isIndexEnabled: true,
                  modified: '2020-07-29T09:53:12-07:00',
                  path: '/Test',
                },
                id: 101,
                type: 'directFile',
              },
              {
                attributes: {
                  action: 'upload',
                  created: '2020-07-29T20:15:09-07:00',
                  message: null,
                  modified: '2020-07-29T20:15:09-07:00',
                  name: '/Test',
                  path: '/Test',
                  readableDescription: "anybody uploads to '/Test'",
                  readableDescriptionWithoutPath: 'anybody uploads to this folder',
                  recipientEmails: ['exavault@example.com', 'exavault+1@example.com'],
                  recipients: [
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault@example.com',
                      id: 81,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                    {
                      created: '2020-07-29T20:15:09-07:00',
                      email: 'exavault+1@example.com',
                      id: 83,
                      modified: '2020-07-29T20:15:09-07:00',
                      notificationId: 1143,
                    },
                  ],
                  sendEmail: false,
                  type: 'folder',
                  usernames: ['exavaultuser'],
                },
                id: 1143,
                relationships: {
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  resource: { data: { id: 2554051, type: 'resource' } },
                },
                type: 'notification',
              },
              {
                attributes: {
                  accessTimestamp: '2020-07-27 19:32:45',
                  accountName: 'exavault',
                  created: '2020-07-24T07:51:12-07:00',
                  email: 'test@example.com',
                  expiration: null,
                  firstLogin: false,
                  homeDir: '/',
                  modified: '2020-07-24T07:51:13-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'master',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124419,
                relationships: {
                  homeResource: { data: { id: 2536831, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
              {
                attributes: {
                  accountName: 'exampleaccount',
                  accountOnboarding: true,
                  allowedIp: null,
                  branding: true,
                  clientId: 1,
                  complexPasswords: false,
                  created: '2019-05-30T20:48:57Z',
                  customDomain: false,
                  customSignature: null,
                  externalDomains: null,
                  maxUsers: 5,
                  modified: '2019-08-27T01:03:41Z',
                  quota: {
                    diskLimit: 37580963840,
                    diskUsed: 24938382543,
                    noticeEnabled: true,
                    noticeThreshold: 90,
                  },
                  secureOnly: false,
                  showReferralLinks: true,
                  status: 1,
                  userCount: 4,
                  welcomeEmailContent:
                    '"Great news, your new account is ready!\\n\\nFor your records, we\'ve listed information you\'ll use to log in below:\\n\\nFTP Server: [[ftpserver]]\\n\\nUsername (Web and FTP access): [[username]]\\n\\n[[setpassword]]"\n',
                  welcomeEmailSubject: 'ExaVault File Sharing Account',
                },
                id: 7,
                relationships: { masterUser: { data: { id: 1, type: 'user' } } },
                type: 'account',
              },
              {
                attributes: {
                  accessedAt: '2011-03-21T00:18:56-07:00',
                  createdAt: '2011-03-21T00:18:56-07:00',
                  createdBy: 'exampleuser',
                  extension: 'dir',
                  fileCount: 3,
                  hash: 'ec4aa9a91be282666a165899a14f29b1',
                  name: 'examplefolder',
                  path: '/examplefolder',
                  previewable: false,
                  size: 12321321,
                  updatedAt: '2011-03-21T00:18:56-07:00',
                  uploadDate: '2011-03-21T00:18:56-07:00',
                },
                id: 2,
                relationships: {
                  directFile: { data: { id: 101, type: 'directFile' } },
                  notifications: [{ data: { id: 1117, type: 'notification' } }],
                  ownerAccount: { data: { id: 7, type: 'account' } },
                  ownerUser: { data: { id: 124437, type: 'user' } },
                  parentResource: { data: { id: 103, type: 'resource' } },
                  share: { data: { id: 1499, type: 'share' } },
                },
                type: 'resource',
              },
            ],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const deleteResourcesIdRoute = createRoute({
  method: 'delete',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Delete a Resource',
  description:
    'Delete a single file or folder resource. Deleting a folder will also delete all of the contents.\n\n**Notes:**\n- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- There is no way to un-delete a deleted resource.\n',
  operationId: 'deleteResourceById',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID number of the resource',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 200 },
        },
      },
    },
  },
})

export const patchResourcesIdRoute = createRoute({
  method: 'patch',
  path: '/resources/{id}',
  tags: ['Resources'],
  summary: 'Rename a resource.',
  description:
    'Update the specified file or folder resource record\'s "name" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.\n',
  operationId: 'updateResourceById',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID number of the resource',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
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
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new name for the resource (file or folder).',
                  example: 'my-renamed-file.txt',
                }),
            })
            .openapi({ title: 'UpdateResourceByIdRequestBody', required: [] }),
          examples: { 'example-1': { value: { name: 'my-renamed-file.txt' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: ResourceResponseSchema,
          example: {
            data: {
              attributes: {
                accessedAt: '2020-07-29T09:53:36-07:00',
                createdAt: '2020-07-28T15:59:23-07:00',
                createdBy: 'exavaultuser',
                extension: '',
                fileCount: 2,
                hash: '7a2hhf9f90ce196de3f650c612372c0b',
                name: 'Test Folder',
                path: '/Test Folder',
                previewable: false,
                size: 33415,
                type: 'dir',
                updatedAt: '2020-07-29T10:27:08-07:00',
                uploadDate: '2020-07-28T15:59:23-07:00',
              },
              id: 2554051,
              relationships: {
                directFile: { data: { id: 101, type: 'directFile' } },
                notifications: [{ data: { id: 1117, type: 'notification' } }],
                ownerAccount: { data: { id: 7, type: 'account' } },
                ownerUser: { data: { id: 124437, type: 'user' } },
                parentResource: { data: { id: 103, type: 'resource' } },
                share: { data: { id: 1499, type: 'share' } },
              },
              type: 'resource',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const getSharesRoute = createRoute({
  method: 'get',
  path: '/shares',
  tags: ['Shares'],
  summary: 'Get a list of shares',
  description:
    "Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.\n\n\n**Notes:**\n\n- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- To get share objects with type send, authenticated user's role must be admin or master.",
  operationId: 'listShares',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
            description: 'Current offset of records (for pagination)',
            example: 100,
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit of records to be returned (for pagination)',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      scope: z
        .enum(['all', 'active', 'currentUser'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set of shares to return. (**all**=all of them, **active**=shares that are currently active, **curentUser**=shares created by you)',
            example: 'active',
            in: 'query',
            name: 'scope',
            schema: { enum: ['all', 'active', 'currentUser'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['created', '-created'])
        .exactOptional()
        .openapi({
          param: {
            description: 'What order the list of matches should be in.',
            example: 'created',
            in: 'query',
            name: 'sort',
            schema: { enum: ['created', '-created'], type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['receive', 'shared_folder', 'send'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the list of matches to only certain types of shares.',
            example: 'receive',
            in: 'query',
            name: 'type',
            schema: { enum: ['receive', 'shared_folder', 'send'], type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.',
            example: 'owner,notifications',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, only shares whose names include this value will be in the list. Supports wildcards, such as **send\\*** to return everything starting with "send".\n\nUse this parameter if you are searching for shares or receives for a specific folder name. For example **/Clients/ACME/To Be Processed**.',
            in: 'query',
            name: 'name',
            schema: { example: 'Customer*', type: 'string' },
            required: false,
          },
          example: 'Customer*',
        }),
      recipient: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter the results to include only shares that invited a certain email address. Supports wildcard matching so that **\\*@example.com** will give back entries shared with addresses ending in "@example.com". ',
            in: 'query',
            name: 'recipient',
            schema: { example: 'test@example.com', type: 'string' },
            required: false,
          },
          example: 'test@example.com',
        }),
      message: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, only shares with a message that contains the text will be included in the list of matches. Both the subject and the body of all messages will be checked for matches. This will always be a wildcard match, so that searching for **taxes** will return any shares with a message that contains the word "taxes".',
            in: 'query',
            name: 'message',
            schema: { example: 'submitted', type: 'string' },
            required: false,
          },
          example: 'submitted',
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When provided, only shares created by the user with that `username` will be included in the list. Does not support wildcard searching.',
            in: 'query',
            name: 'username',
            schema: { example: 'example', type: 'string' },
            required: false,
          },
          example: 'example',
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Searches the share name, username, recipients, share messages fields for the provided value. Supports wildcard searches.',
            in: 'query',
            name: 'search',
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
          schema: ShareCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  accessDescription: 'Receive folder',
                  accessMode: { delete: false, download: false, modify: false, upload: true },
                  assets: ['Receive test'],
                  created: '2020-07-27T23:34:49-07:00',
                  embed: true,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: 413,
                  hasNotification: true,
                  hasPassword: false,
                  hash: '153-3n9ycimh',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-28T09:33:11-07:00',
                  name: 'Receive test',
                  ownerHash: '153-3n9ycimh-99dm0ome',
                  paths: ['/YK tests1/Receive test'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'receive',
                },
                id: 1403,
                relationships: {
                  activity: [{ data: { id: 1719, type: 'shareActivity' } }],
                  notifications: [{ data: { id: 1045, type: 'notification' } }],
                  owner: { data: { id: 7, type: 'user' } },
                  resources: [{ data: { id: 2497089, type: 'resource' } }],
                },
                type: 'share',
              },
              {
                attributes: {
                  accessDescription: 'Download only',
                  accessMode: { delete: false, download: true, modify: false, upload: false },
                  assets: ['Logos'],
                  created: '2020-07-27T20:57:33-07:00',
                  embed: false,
                  expiration: null,
                  expired: false,
                  fileDropCreateFolders: false,
                  formId: null,
                  hasNotification: null,
                  hasPassword: false,
                  hash: '14y-69359sgr',
                  inherited: null,
                  messages: [],
                  modified: '2020-07-28T09:33:11-07:00',
                  name: 'Logos',
                  ownerHash: '14y-69359sgr-7tsf6cxx',
                  paths: ['/STest071520/Logos'],
                  public: true,
                  recipients: [],
                  requireEmail: false,
                  resent: null,
                  status: 1,
                  trackingStatus: null,
                  type: 'shared_folder',
                },
                id: 1399,
                relationships: {
                  owner: { data: { id: 7, type: 'user' } },
                  resources: [{ data: { id: 2547033, type: null } }],
                },
                type: 'share',
              },
            ],
            included: [],
            responseStatus: 200,
            returnedResults: 27,
            totalResults: 98,
          },
        },
      },
    },
  },
})

export const postSharesRoute = createRoute({
  method: 'post',
  path: '/shares',
  tags: ['Shares'],
  summary: 'Creates a share',
  description:
    "Creates a new share object for the given path in your account. We support three types of shares:\n\n  - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are 'live'; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.\n  - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are 'point in time' -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.\n  - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.\n  \n**How to send files from your computer using the API**:\n\nIn order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:\n\n1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` parameter to **true**. The response that is returned will include a \"meta\" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.\n2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The \"/\" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**\n3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**\n\n**Setting the Share Permissions**\n\nOnly 5 different combinations of permissions are valid for the `accessMode` object:\n\n- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**\n- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**\n- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**\n- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**\n- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**\n\nAny other combination of permissions provided as the `accessMode` will be rejected as a bad request.\n\n**Notes:**\n\nAuthenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).",
  operationId: 'addShare',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              accessMode: AccessModeSchema.exactOptional(),
              embed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether this share can be embedded within a web page.',
                  example: false,
                }),
              expiration: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available.',
                  example: '2017-09-25T14:12:10Z',
                }),
              fileDropCreateFolders: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form. ',
                  example: false,
                }),
              hasNotification: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether delivery receipts should be sent.',
                  example: false,
                }),
              isPublic: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether someone can visit the share without following a personalized recipient link.',
                  example: true,
                }),
              messageBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The message to be included in email invitations for your recipients. Ignored if you have not also provided `recipients` and `messageSubject`',
                  example: null,
                }),
              messageSubject: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `messageBody`',
                  example: 'Invitation to a shared folder',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'A name for the share. This will be visible on the page that recipients visit. ',
                  example: 'Shared Folder',
                }),
              notificationEmails: z
                .array(z.email())
                .exactOptional()
                .openapi({
                  description:
                    'Emails that will receive delivery receipts for this share. `hasNotification` must be **true** for delivery receipts will be sent.',
                  example: ['notify@example.com', 'notify2@example.com'],
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Set a password for recipients to access the share. All recipients will use the same password.',
                  example: null,
                }),
              recipients: z
                .array(
                  z
                    .object({
                      email: z
                        .email()
                        .exactOptional()
                        .openapi({
                          description: 'Email address of person you are inviting to the share',
                        }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'What kind of email should be sent to this recipient. Valid choices are **direct** and **cc**',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'People you want to invite to the share. **Note**: unless you also set the `messageSubject` and `messageBody` for the new share, invitation emails will not be sent to these recipients.',
                }),
              requireEmail: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'True if recipients must provide their email to view the share.',
                  example: false,
                }),
              resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.\n\n**shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.\n\n**send** shares may have multiple `resource` parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation.\n',
                  example: ['/testfolder'],
                }),
              sendingLocalFiles: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded.',
                }),
              type: z
                .enum(['shared_folder', 'receive', 'send'])
                .openapi({
                  description: 'The type of share to create. See above for a description of each.',
                  example: 'shared_folder',
                }),
            })
            .openapi({ required: ['type', 'name'], title: 'AddShareRequestBody' }),
          examples: {
            'example-1': {
              value: {
                accessMode: { delete: true, download: true, modify: true, upload: true },
                embed: false,
                expiration: '2017-09-25T14:12:10Z',
                fileDropCreateFolders: false,
                hasNotification: false,
                isPublic: true,
                messageBody: null,
                messageSubject: 'Invitation to a shared folder',
                name: 'Shared Folder',
                notificationEmails: ['notify@example.com', 'notify2@example.com'],
                password: null,
                recipients: [{ email: 'user@example.com', type: 'string' }],
                requireEmail: false,
                resources: ['/testfolder'],
                sendingLocalFiles: true,
                type: 'shared_folder',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: ShareResponseSchema,
          example: {
            data: {
              attributes: {
                accessDescription: 'Upload only',
                accessMode: { delete: false, download: false, modify: false, upload: true },
                created: '2017-04-21T10:53:47Z',
                embed: true,
                expiration: null,
                expired: false,
                fileDropCreateFolders: false,
                hasNotification: true,
                hasPassword: false,
                hash: 'wgf1-352',
                inherited: false,
                messages: [
                  {
                    body: 'You have files available for download.',
                    created: '2017-04-21T10:53:47Z',
                    id: 23,
                    modified: '2017-04-21T10:53:47Z',
                    subject: 'Message subject.',
                  },
                ],
                modified: '2017-04-21T10:53:47Z',
                name: 'Example Share',
                ownerHash: 'hd1e-3erufo72-fwggk999',
                paths: ['/example share'],
                public: true,
                recipients: [
                  {
                    created: '2017-04-21T10:53:47Z',
                    email: 'recipient@example.com',
                    hash: 'fsesghan',
                    id: 11,
                    received: false,
                    sent: true,
                    type: 'direct',
                  },
                ],
                requireEmail: false,
                resent: null,
                status: 1,
                type: 'shared_folder',
              },
              id: 10,
              relationships: {
                notifications: [
                  { data: { id: 14, type: 'notification' } },
                  { data: { id: 15, type: 'notification' } },
                ],
                owner: { data: { id: 12, type: 'user' } },
                resource: [{ data: null, id: 13, type: 'resource' }],
              },
              type: 'share',
            },
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const postSharesCompleteSendIdRoute = createRoute({
  method: 'post',
  path: '/shares/complete-send/{id}',
  tags: ['Shares'],
  summary: 'Complete send files',
  description:
    'After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.\n  \n**How to send files from your computer using the API**:\n\nIn order to use the API to send files which are not already stored in your account, you\'ll need to follow a three-step process:\n\n1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` paramter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.\n2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you\'ve created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**\n3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**\n',
  operationId: 'completeDirectSend',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    params: z.object({
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
        .openapi({
          param: {
            description: 'ID of the share to trigger invitations for.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ShareResponseSchema } },
    },
  },
})

export const getSharesIdRoute = createRoute({
  method: 'get',
  path: '/shares/{id}',
  tags: ['Shares'],
  summary: 'Get a share',
  description:
    "Get the details for a specific share entry. You can use the `include` parameter to also get the details of related records, such as the owning user or the resources involved in the share.\n\n**Notes:**\n\n- Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).\n- To get share objects with type send, authenticated user's role must be admin or master.",
  operationId: 'getShareById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the share entry',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 23241, format: 'int32', type: 'integer' },
          },
          example: 23241,
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Possible values are **owner**, **resources**, **notifications**, **activity**.',
            example: 'owner,notifications',
            in: 'query',
            name: 'include',
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
          schema: ShareResponseSchema,
          example: {
            data: {
              attributes: {
                accessDescription: 'Upload only',
                accessMode: { delete: false, download: false, modify: false, upload: true },
                created: '2017-04-21T10:53:47Z',
                embed: true,
                expiration: null,
                expired: false,
                fileDropCreateFolders: false,
                hasNotification: true,
                hasPassword: false,
                hash: 'wef1-352',
                inherited: false,
                messages: [
                  {
                    body: 'You have files available for download.',
                    created: '2017-04-21T10:53:47Z',
                    id: 23,
                    modified: '2017-04-21T10:53:47Z',
                    subject: 'Message subject.',
                  },
                ],
                modified: '2017-04-21T10:53:47Z',
                name: 'Example Share',
                ownerHash: 'hd1e-3eerg72-fsxak999',
                paths: ['/example share'],
                public: true,
                recipients: [
                  {
                    created: '2017-04-21T10:53:47Z',
                    email: 'recipient@example.com',
                    hash: 'fethwxan',
                    id: 11,
                    received: false,
                    sent: true,
                    type: 'direct',
                  },
                ],
                requireEmail: false,
                resent: null,
                status: 1,
                type: 'shared_folder',
              },
              id: 10,
              relationships: {
                notifications: [
                  { data: { id: 14, type: 'notification' } },
                  { data: { id: 15, type: 'notification' } },
                ],
                owner: { data: { id: 12, type: 'user' } },
                resources: [{ data: { id: 13, type: 'resource' } }],
              },
              type: 'share',
            },
            included: [
              {
                attributes: {
                  accessTimestamp: '2019-09-06T11:40:29Z',
                  created: '2019-05-29T20:48:57Z',
                  email: 'user@example.com',
                  expiration: '2020-04-21T10:53:47Z',
                  firstLogin: false,
                  homeDir: '/',
                  modified: '2019-07-27T01:03:41Z',
                  nickname: 'examplenickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'master',
                  status: 0,
                  timeZone: 'UTC',
                  username: 'exampleuser',
                },
                id: 12,
                type: 'user',
              },
              {
                attributes: {
                  accessedAt: '2019-05-29T20:48:57Z',
                  createdAt: '2019-05-29T20:48:57Z',
                  extension: null,
                  fileCount: 1,
                  hash: 'ec4aa9a91er282666a165899a14f29b1',
                  name: 'Shared Folder',
                  path: '/Shared Folder',
                  previewable: false,
                  size: 987,
                  type: 'folder',
                  updatedAt: '2019-05-29T20:48:57Z',
                  uploadDate: '2019-05-29T20:48:57Z',
                },
                id: 13,
                type: 'resource',
              },
              {
                attributes: {
                  action: 'upload',
                  created: '2019-05-29T20:48:57Z',
                  message: null,
                  name: 'Shared Folder',
                  path: '/Shared Folder',
                  readableDescription: null,
                  readableDescriptionWithoutPath: null,
                  recipientEmails: ['recipient@example.com'],
                  recipients: [
                    {
                      created: '2019-05-29T20:48:57Z',
                      email: 'recipient@example.com',
                      id: 18,
                      modified: '2019-05-29T20:48:57Z',
                      notificationId: 14,
                    },
                  ],
                  sendEmail: 1,
                  type: 'shared_folder',
                  updated: '2019-05-29T20:48:57Z',
                  usernames: ['notice_user_all'],
                },
                id: 14,
                type: 'notification',
              },
              {
                attributes: {
                  action: 'upload',
                  created: '2019-05-29T20:48:57Z',
                  message: null,
                  name: 'Shared Folder2',
                  path: '/Shared Folder2',
                  readableDescription: null,
                  readableDescriptionWithoutPath: null,
                  recipientEmails: ['recipient@example.com'],
                  recipients: [
                    {
                      created: '2019-05-29T20:48:57Z',
                      email: 'recipient@example.com',
                      id: 18,
                      modified: '2019-05-29T20:48:57Z',
                      notificationId: 14,
                    },
                  ],
                  sendEmail: 1,
                  type: 'shared_folder',
                  updated: '2019-05-29T20:48:57Z',
                  usernames: ['notice_user_all'],
                },
                id: 15,
                type: 'notification',
              },
            ],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const deleteSharesIdRoute = createRoute({
  method: 'delete',
  path: '/shares/{id}',
  tags: ['Shares'],
  summary: 'Deactivate a share',
  description:
    "Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren't stored anywhere else in the account.\n\n**Notes:**\n\n- You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.\n- You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.",
  operationId: 'deleteShareById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the share entry',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 23241, format: 'int32', type: 'integer' },
          },
          example: 23241,
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: EmptyResponseSchema } },
    },
  },
})

export const patchSharesIdRoute = createRoute({
  method: 'patch',
  path: '/shares/{id}',
  tags: ['Shares'],
  summary: 'Update a share',
  description:
    'Change the settings on an active share. Any changes made will affect all users that have access to the share. \n\nWhen updating invitees, pass the `recipients` body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.\n\n**Setting the Share Permissions**\n\nOnly 5 different combinations of permissions are valid for the `accessMode` object:\n\n- **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**\n- **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**\n- **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**\n- **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**\n- **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**\n\nAny other combination of permissions provided as the `accessMode` will be rejected as a bad request.\n\n**Notes:**\n\n  - Authenticated user should be the owner of the specified share.',
  operationId: 'updateShareById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'ID of the share entry',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 23241, format: 'int32', type: 'integer' },
          },
          example: 23241,
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access Token',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              accessMode: AccessModeSchema.exactOptional(),
              embed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the share can be embedded in another web page.',
                  example: false,
                }),
              expiration: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'New expiration date and time for the share',
                  example: '2017-09-25T14:12:10Z',
                }),
              fileDropCreateFolders: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings)',
                  example: false,
                }),
              hasNotification: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether delivery receipts should be sent for this share.',
                  example: false,
                }),
              isPublic: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether people can visit the share without following a link from an invitation email',
                  example: true,
                }),
              messageBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Message content to use for emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `subject`',
                  example: null,
                }),
              messageSubject: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Subject to use on emails inviting recipients to the share. Ignored if you have not also provided `recipients` and a `message`',
                  example: 'Invitation to a shared folder',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of the share.', example: 'Shared Folder' }),
              notificationEmails: z
                .array(z.email())
                .exactOptional()
                .openapi({
                  description:
                    'List of email addresses to send delivery receipts to. Ignored if `hasNotification` is false. ',
                  example: ['notify@example.com', 'notify2@example.com'],
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'New password for the share. To leave the password unchanged, do not send this parameter.',
                  example: null,
                }),
              recipients: z
                .array(
                  z
                    .object({
                      email: z
                        .email()
                        .exactOptional()
                        .openapi({
                          description: 'Email address of person you are inviting to the share',
                        }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'What kind of email should be sent to this recipient. Valid choices are **direct** and **cc**',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'People you want to invite to the share. \n\n**Note**: unless you also set the `subject` and `message` for the new share, invitation emails will not be sent to these recipients.\n\n**Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share. ',
                }),
              requireEmail: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether visitors to the share will be required to enter their email in order to access the share.',
                  example: false,
                }),
              resources: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.\n\n**shared_folder** and **receive** shares must have only one `resource`, which is a directory that does not have a current share attached.\n\n**send** shares may have multiple `resource` parameters. \n\n**NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request.',
                  example: ['/testfolder'],
                }),
              status: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'New status for the share. You can set an active share to inactive by setting the status to **0**',
                }),
            })
            .openapi({ title: 'UpdateShareRequestBody', required: [] }),
          examples: {
            'example-1': {
              value: {
                accessMode: { delete: true, download: true, modify: true, upload: true },
                embed: false,
                expiration: '2017-09-25T14:12:10Z',
                fileDropCreateFolders: false,
                hasNotification: false,
                isPublic: true,
                messageBody: null,
                messageSubject: 'Invitation to a shared folder',
                name: 'Shared Folder',
                notificationEmails: ['notify@example.com', 'notify2@example.com'],
                password: null,
                recipients: [{ email: 'user@example.com', type: 'string' }],
                requireEmail: false,
                resources: ['/testfolder'],
                status: 0,
              },
            },
          },
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
          schema: ShareResponseSchema,
          example: {
            data: {
              attributes: {
                accessDescription: 'Upload only',
                accessMode: { delete: false, download: false, modify: false, upload: true },
                created: '2017-04-21T10:53:47Z',
                embed: true,
                expiration: null,
                expired: false,
                fileDropCreateFolders: false,
                hasNotification: true,
                hasPassword: false,
                hash: 'wgf1-352',
                inherited: false,
                messages: [
                  {
                    body: 'You have files available for download.',
                    created: '2017-04-21T10:53:47Z',
                    id: 23,
                    modified: '2017-04-21T10:53:47Z',
                    subject: 'Message subject.',
                  },
                ],
                modified: '2017-04-21T10:53:47Z',
                name: 'Example Share',
                ownerHash: 'hd1e-3erufo72-fwggk999',
                paths: ['/example share'],
                public: true,
                recipients: [
                  {
                    created: '2017-04-21T10:53:47Z',
                    email: 'recipient@example.com',
                    hash: 'fsesghan',
                    id: 11,
                    received: false,
                    sent: true,
                    type: 'direct',
                  },
                ],
                requireEmail: false,
                resent: null,
                status: 1,
                type: 'shared_folder',
              },
              id: 10,
              relationships: {
                notifications: [
                  { data: { id: 14, type: 'notification' } },
                  { data: { id: 15, type: 'notification' } },
                ],
                owner: { data: { id: 12, type: 'user' } },
                resources: [{ data: { id: 13, type: 'resource' } }],
              },
              type: 'share',
            },
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const getSshKeysRoute = createRoute({
  method: 'get',
  path: '/ssh-keys',
  tags: ['SSH Keys'],
  summary: 'Get metadata for a list of SSH Keys',
  description: 'Returns a list of SSH Keys within the account. Can be filtered for a single user.',
  operationId: 'getSSHKeysList',
  request: {
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              ' Only return results for the given user ID. This is not the username, but the numeric ID of the user.',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
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
            description: ' Limits the results by the given number. Cannot be set higher than 100.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
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
            description:
              ' Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: SSHKeyCollectionResponseSchema } },
    },
  },
})

export const postSshKeysRoute = createRoute({
  method: 'post',
  path: '/ssh-keys',
  tags: ['SSH Keys'],
  summary: 'Create a new SSH Key',
  description:
    "Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).\n\nIf you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page. ",
  operationId: 'addSSHKey',
  request: {
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              publicKey: z
                .string()
                .openapi({
                  description:
                    'Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format. ',
                }),
              userId: z.int().openapi({ description: 'ID of the user to assign the new key to. ' }),
            })
            .openapi({ required: ['userId', 'publicKey'], title: 'AddSSHKeyRequestBody' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: SSHKeyResponseSchema } },
    },
  },
})

export const getSshKeysIdRoute = createRoute({
  method: 'get',
  path: '/ssh-keys/{id}',
  tags: ['SSH Keys'],
  summary: 'Get metadata for an SSH Key',
  description: 'Return the information for a single SSH Key',
  operationId: 'getSSHKey',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: SSHKeyResponseSchema } },
    },
  },
})

export const deleteSshKeysIdRoute = createRoute({
  method: 'delete',
  path: '/ssh-keys/{id}',
  tags: ['SSH Keys'],
  summary: 'Delete an SSH Key',
  description:
    'Delete the specified SSH key. This will not delete or deactivate the user tied to the key.',
  operationId: 'deleteSSHKey',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
  },
  responses: { 200: { description: 'Successful Operation' } },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Get a list of users',
  description:
    'Get a list of the users in your account. There are three main types of searches you can do with this method:\n\n1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.\n1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the "admin" `role` AND `email` addresses ending in "*@acme.com". \n1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.\n\n**Notes:**\n\n- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.\n- The homeDir is the full path to the user\'s home directory, not a resource ID or hash.',
  operationId: 'listUsers',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The username of the user you are looking for. Only entries with the same username as this will be in the list of results. Does not support wildcard searches.',
            example: 'testuser',
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      homeResource: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Resource identifier for user's home directory. Does not support wildcard searches.",
            in: 'query',
            name: 'homeResource',
            schema: { type: 'string' },
            required: false,
          },
        }),
      nickname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Nickname to search for. Ignored if `username` is provided. Supports wildcard searches.',
            in: 'query',
            name: 'nickname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Email to search for. Ignored if `username` is provided. Supports wildcard searches',
            in: 'query',
            name: 'email',
            schema: { example: '*@example.co', type: 'string' },
            required: false,
          },
          example: '*@example.co',
        }),
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Types of users to include the list. Ignored if `username` is provided. Valid options are **admin**, **master** and **user**',
            in: 'query',
            name: 'role',
            schema: { example: 'use', type: 'string' },
            required: false,
          },
          example: 'use',
        }),
      status: z
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
              'Whether a user is locked. Ignored if `username` is provided. **0** means user is locked, **1** means user is not locked. ',
            in: 'query',
            name: 'status',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Searches the nickname, email, role and homeDir fields for the provided value. Ignored if `username` is provided. Supports wildcard searches.',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting user record in the result set. Can be used for pagination.',
            example: 50,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort order or matching users. You can sort by multiple columns by separating sort options with a comma; the sort will be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.\n\nValid sort fields are: **nickname**, **username**, **email**, **homeDir** and **modified**',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { example: 'homeDir,-modified', type: 'string' },
          },
          example: 'homeDir,-modified',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of users to return. Can be used for pagination.',
            example: 100,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma separated list of relationships to include in response. Valid options are **homeResource** and **ownerAccount**.',
            example: 'homeResource,ownerAccount',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: UserCollectionResponseSchema,
          example: {
            data: [
              {
                attributes: {
                  accessTimestamp: '2020-07-24 23:37:39',
                  accountName: 'exavault',
                  created: '2020-07-24T08:03:57-07:00',
                  email: 'test@example.com',
                  expiration: null,
                  firstLogin: false,
                  homeDir: '/',
                  modified: '2020-07-24T15:53:02-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'admin',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124421,
                relationships: {
                  homeResource: { data: { id: 2536831, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
              {
                attributes: {
                  accessTimestamp: '0000-00-00 00:00:00',
                  accountName: 'exavault',
                  created: '2020-07-24T08:08:51-07:00',
                  email: 'test@example.com',
                  expiration: null,
                  firstLogin: true,
                  homeDir: '/',
                  modified: '2020-07-24T08:08:51-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: true,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: true,
                    download: true,
                    list: true,
                    modify: true,
                    notification: true,
                    share: true,
                    upload: true,
                    viewFormData: true,
                  },
                  role: 'user',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124423,
                relationships: {
                  homeResource: { data: { id: 2536831, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
              {
                attributes: {
                  accessTimestamp: '0000-00-00 00:00:00',
                  accountName: 'exavault',
                  created: '2020-07-27T02:04:11-07:00',
                  email: 'test+4@example.com',
                  expiration: null,
                  firstLogin: false,
                  homeDir: '/Sample Files and Folders',
                  modified: '2020-07-27T02:04:11-07:00',
                  nickname: 'exavaultnickname',
                  onboarding: false,
                  permissions: {
                    changePassword: true,
                    delete: true,
                    deleteFormData: false,
                    download: true,
                    list: true,
                    modify: true,
                    notification: false,
                    share: true,
                    upload: true,
                    viewFormData: false,
                  },
                  role: 'user',
                  status: 1,
                  timeZone: 'America/Los_Angeles',
                  username: 'exavaultuser',
                },
                id: 124439,
                relationships: {
                  homeResource: { data: { id: 2536835, type: 'resource' } },
                  ownerAccount: { data: { id: 251, type: 'account' } },
                },
                type: 'user',
              },
            ],
            included: [],
            responseStatus: 200,
            returnedResults: 3,
            totalResults: 3,
          },
        },
      },
    },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create a user',
  description:
    'Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions). \n\n**Notes:**\n\n- You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.',
  operationId: 'addUser',
  request: {
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API key required to make the API call',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
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
              email: z
                .email()
                .openapi({
                  description: 'Email address for the user',
                  example: 'testuser@example.com',
                }),
              expiration: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional timestamp when the user should expire, formatted in date-time.',
                  example: '2011-03-21 00:18:56',
                }),
              homeResource: z
                .string()
                .openapi({
                  description:
                    "Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.\n\nThe user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user is created. \n\nUsers with the `role` **admin** should have their homeResource set to '/'",
                  example: '/',
                }),
              locked: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true, the user will not be able to log in',
                  example: true,
                }),
              nickname: z
                .string()
                .exactOptional()
                .openapi({
                  description: "An optional nickname (e.g. 'David from Sales').",
                  example: 'testnickname',
                }),
              onboarding: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set this to **true** to enable extra help popups in the web file manager for this user.',
                  example: true,
                }),
              password: z.string().openapi({ description: 'Password for the user' }),
              permissions: z
                .object({
                  changePassword: z.boolean().exactOptional().openapi({ example: true }),
                  delete: z.boolean().exactOptional().openapi({ example: true }),
                  deleteFormData: z.boolean().exactOptional().openapi({ example: true }),
                  download: z.boolean().exactOptional().openapi({ example: true }),
                  list: z.boolean().exactOptional().openapi({ example: true }),
                  modify: z.boolean().exactOptional().openapi({ example: true }),
                  notification: z.boolean().exactOptional().openapi({ example: true }),
                  share: z.boolean().exactOptional().openapi({ example: true }),
                  upload: z.boolean().exactOptional().openapi({ example: true }),
                  viewFormData: z.boolean().exactOptional().openapi({ example: true }),
                })
                .openapi({
                  description:
                    'An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.\nWhen creating a user with the `role` **admin**, you should set all of the permissions to `true`',
                  required: [],
                }),
              role: z
                .enum(['user', 'admin'])
                .openapi({
                  description: 'The type of user to create, either **user** or **admin**.',
                  example: 'user',
                }),
              timeZone: z
                .string()
                .openapi({
                  description:
                    "Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.\n",
                  example: 'America/Los_Angeles',
                }),
              username: z
                .string()
                .openapi({
                  description:
                    'Username of the user to create. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.\n\n**Note** Usernames must be unique across all ExaVault accounts.',
                  example: 'testuser',
                }),
              welcomeEmail: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If **true**, send this new user a welcome email upon creation. The content of the welcome email can be configured with the [PATCH /accounts](#operation/updateAccount) method.',
                  example: true,
                }),
            })
            .openapi({
              required: [
                'username',
                'homeResource',
                'email',
                'password',
                'role',
                'permissions',
                'timeZone',
              ],
              title: 'AddUserRequestBody',
            }),
          examples: {
            'example-1': {
              value: {
                email: 'testuser@example.com',
                expiration: '2011-03-21 00:18:56',
                homeResource: '/',
                locked: true,
                nickname: 'testnickname',
                onboarding: true,
                password: 'string',
                permissions: {
                  changePassword: true,
                  delete: true,
                  deleteFormData: true,
                  download: true,
                  list: true,
                  modify: true,
                  notification: true,
                  share: true,
                  upload: true,
                  viewFormData: true,
                },
                role: 'user',
                timeZone: 'America/Los_Angeles',
                username: 'testuser',
                welcomeEmail: true,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: UserResponseSchema,
          example: {
            data: {
              attributes: {
                accessTimestamp: null,
                accountName: 'exavault',
                created: '2020-07-27T14:58:01-07:00',
                email: 'test@example.com',
                expiration: '2020-07-31T17:00:00-07:00',
                firstLogin: false,
                homePath: '/',
                modified: '2020-07-27T14:58:01-07:00',
                nickname: 'exavaultnickname',
                onboarding: false,
                permissions: {
                  changePassword: false,
                  delete: false,
                  deleteFormData: false,
                  download: true,
                  list: false,
                  modify: false,
                  notification: false,
                  share: false,
                  upload: true,
                  viewFormData: false,
                },
                role: 'user',
                status: 1,
                timeZone: 'America/Los_Angeles',
                username: 'exavaultuser',
              },
              id: 124449,
              relationships: {
                homeResource: { data: { id: 2536831, type: 'resource' } },
                ownerAccount: { data: { id: 251, type: 'account' } },
              },
              type: 'user',
            },
            included: [],
            responseStatus: 201,
          },
        },
      },
    },
  },
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Get info for a user',
  description:
    'Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.\n\n**Notes:**\n\n- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.',
  operationId: 'getUserById',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              "The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 2224, format: 'int32', type: 'integer' },
          },
          example: 2224,
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-separated list of relationships to include in response. Possible values include **homeResource** and **ownerAccount**.',
            example: 'homeResource,owneraccount',
            in: 'query',
            name: 'include',
            schema: { example: 'homeResource,ownerAccount', type: 'string' },
            required: false,
          },
          example: 'homeResource,ownerAccount',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: UserResponseSchema,
          example: {
            data: {
              attributes: {
                accessTimestamp: '2020-07-27 19:32:45',
                accountName: 'exavault',
                created: '2020-07-24T07:51:12-07:00',
                email: 'test@example.com',
                expiration: null,
                firstLogin: false,
                homeDir: '/',
                modified: '2020-07-24T07:51:13-07:00',
                nickname: 'exavaultnickname',
                onboarding: true,
                permissions: {
                  changePassword: true,
                  delete: true,
                  deleteFormData: true,
                  download: true,
                  list: true,
                  modify: true,
                  notification: true,
                  share: true,
                  upload: true,
                  viewFormData: true,
                },
                role: 'master',
                status: 1,
                timeZone: 'America/Los_Angeles',
                username: 'exavaultuser',
              },
              id: 124419,
              relationships: {
                homeResource: { data: { id: 2536831, type: 'resource' } },
                ownerAccount: { data: { id: 251, type: 'account' } },
              },
              type: 'user',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const deleteUsersIdRoute = createRoute({
  method: 'delete',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Delete a user',
  description:
    "Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in. \n\nResources and shares owned by the deleted user will be owned by the master user after the deletion.\n\n**Notes:**\n \n- You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.\n- The primary owner of the account cannot be deleted.\n",
  operationId: 'deleteUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              "The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 2224, format: 'int32', type: 'integer' },
          },
          example: 2224,
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API Key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          example: { data: [], responseStatus: 200 },
        },
      },
    },
  },
})

export const patchUsersIdRoute = createRoute({
  method: 'patch',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Update a user',
  description:
    'Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.\n\nIn the request body, you should only send the parameters for values that you wish to change for the user.\n\n**Notes:**\n\n- You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.\n- You cannot edit a master user with this method.',
  operationId: 'updateUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              "The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.",
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 2224, format: 'int32', type: 'integer' },
          },
          example: 2224,
        }),
    }),
    headers: z.object({
      'ev-api-key': z
        .string()
        .openapi({
          param: {
            description: 'API key required to make the API call.',
            in: 'header',
            name: 'ev-api-key',
            required: true,
            schema: { example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s', type: 'string' },
          },
          example: 'exampleaccount-zwSuWUZ8S38h33qPS8v0s',
        }),
      'ev-access-token': z
        .string()
        .openapi({
          param: {
            description: 'Access token required to make the API call.',
            example: '5dc97cc607985eb8da033220e7447647e7915fbf73808',
            in: 'header',
            name: 'ev-access-token',
            required: true,
            schema: {
              example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
              type: 'string',
            },
          },
          example: '19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .email()
                .exactOptional()
                .openapi({
                  description: 'Email address for the user',
                  example: 'testuser@example.com',
                }),
              expiration: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional timestamp when the user should expire.',
                  example: '2011-03-21 00:18:56',
                }),
              homeResource: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Resource identifier for the user's home folder. See details on [how to specify resources](#section/Identifying-Resources) above.\n\nThe user will be locked to this directory and unable to move 'up' in the account. If the folder does not exist in the account, it will be created when the user logs in.\n\nThis setting is ignored for users with the `role` **admin**.",
                  example: '/',
                }),
              locked: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true, the user will be prevented from logging in',
                  example: true,
                }),
              nickname: z
                .string()
                .exactOptional()
                .openapi({
                  description: "An optional nickname (e.g. 'David from Sales').",
                  example: 'testnickname',
                }),
              onboarding: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set this to **true** to enable extra help popups in the web file manager for this user.',
                  example: true,
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'New password for the user' }),
              permissions: UserPermissionsSchema.exactOptional(),
              role: z
                .enum(['user', 'admin'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of user (**admin** or **user**). Note that admin users cannot have a `homeResource` other than \'/\', and will have full permissions, but you must provide at least "download,upload,list,delete" in the `permissions` parameter.',
                  example: 'user',
                }),
              timeZone: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Time zone, used for accurate time display within the application. See <a href='https://php.net/manual/en/timezones.php' target='blank'>this page</a> for allowed values.\n",
                  example: 'America/Los_Angeles',
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'New username for the user. This should follow standard username conventions - spaces are not allowed, etc. We do allow email addresses as usernames.\n\n**Note** Usernames must be unique across all ExaVault accounts.',
                  example: 'testuser',
                }),
            })
            .openapi({ title: 'UpdateUserRequestBody', required: [] }),
          examples: {
            'example-1': {
              value: {
                email: 'testuser@example.com',
                expiration: '2011-03-21 00:18:56',
                homeResource: '/',
                locked: true,
                nickname: 'testnickname',
                onboarding: true,
                password: 'string',
                permissions: {
                  changePassword: true,
                  delete: true,
                  deleteFormData: true,
                  download: true,
                  list: true,
                  modify: true,
                  notification: true,
                  share: true,
                  upload: true,
                  viewFormData: true,
                },
                role: 'user',
                timeZone: 'America/Los_Angeles',
                username: 'testuser',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: UserResponseSchema,
          example: {
            data: {
              attributes: {
                accessTimestamp: '0000-00-00 00:00:00',
                accountName: 'exavault',
                created: '2020-07-27T14:50:39-07:00',
                email: 'test@example.com',
                expiration: '2020-08-29T17:00:00-07:00',
                firstLogin: false,
                homeDir: '/',
                modified: '2020-07-27T14:50:39-07:00',
                nickname: 'exavaultnickname',
                onboarding: false,
                permissions: {
                  changePassword: false,
                  delete: false,
                  deleteFormData: false,
                  download: true,
                  list: false,
                  modify: false,
                  notification: false,
                  share: false,
                  upload: true,
                  viewFormData: false,
                },
                role: 'user',
                status: 1,
                timeZone: 'America/Los_Angeles',
                username: 'exavaultuser',
              },
              id: 124447,
              relationships: {
                homeResource: { data: { id: 2536831, type: 'resource' } },
                ownerAccount: { data: { id: 251, type: 'account' } },
              },
              type: 'user',
            },
            included: [],
            responseStatus: 200,
          },
        },
      },
    },
  },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Get Webhooks List',
  description:
    'Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account. ',
  operationId: 'getWehooksList',
  request: {
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of related record types to include. Valid options are `owningAccount` and `resource`',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Records to skip before returning results.',
            example: 100,
            in: 'query',
            name: 'offset',
            schema: { minimum: 0, type: 'integer' },
            required: false,
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
            description: 'Limit of the records list',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { example: 100, type: 'integer' },
            required: false,
          },
          example: 100,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: WebhookCollectionResponseSchema } },
    },
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Add A New Webhook',
  description:
    'Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use. ',
  operationId: 'addWebhook',
  request: {
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpointUrl: z
                .url()
                .openapi({
                  description: 'The endpoint is where the webhook request will be sent.',
                  example: 'https://example.com/webhook',
                }),
              resource: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Resource identifier for the top folder this webhook is associated with',
                  example: '/uploads-folder',
                }),
              responseVersion: z
                .enum(['v1', 'v2'])
                .exactOptional()
                .openapi({
                  description:
                    'What version of webhook request should be sent to the endpoint URL when messages are sent',
                  example: 'v2',
                }),
              triggers: WebhookTriggersSchema.exactOptional(),
            })
            .openapi({ required: ['endpointUrl'], title: 'AddWebhookRequestBody' }),
          examples: {},
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: WebhookResponseSchema,
          examples: {
            'New webhook': {
              value: {
                data: {
                  attributes: {
                    created: '2021-03-04T22:22:00-08:00',
                    endpointUrl: 'https://example.com/webhook',
                    failed: true,
                    modified: '2021-03-04T22:23:03-08:00',
                    responseVersion: 'v2',
                    triggers: {
                      resources: {
                        compress: true,
                        copy: true,
                        createFolder: true,
                        delete: true,
                        download: true,
                        extract: true,
                        move: true,
                        rename: true,
                        upload: true,
                      },
                      shares: { formSubmit: true },
                    },
                    verificationToken: '8df8200f7dee90ba4a41abe39c858c6c',
                  },
                  id: 0,
                  relationships: {
                    ownerAccount: { data: { id: 5, type: 'account' } },
                    resource: { data: { id: 234232, type: 'resource' } },
                  },
                  type: 'webhook',
                },
                included: [],
                responseStatus: 201,
              },
            },
          },
        },
      },
    },
  },
})

export const postWebhooksRegenerateTokenIdRoute = createRoute({
  method: 'post',
  path: '/webhooks/regenerate-token/{id}',
  tags: ['Webhooks'],
  summary: 'Regenerate security token',
  description:
    'This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way. ',
  operationId: 'regenerateWebhookToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Webhook ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: WebhookResponseSchema,
          examples: {
            Success: {
              value: {
                data: {
                  attributes: {
                    created: '2021-03-04T22:22:00-08:00',
                    endpointUrl: 'https://example.com/webhook',
                    failed: true,
                    modified: '2021-03-04T22:23:03-08:00',
                    responseVersion: 'v2',
                    triggers: {
                      resources: {
                        compress: true,
                        copy: true,
                        createFolder: true,
                        delete: true,
                        download: true,
                        extract: true,
                        move: true,
                        rename: true,
                        upload: true,
                      },
                      shares: { formSubmit: true },
                    },
                    verificationToken: '771820badeefa22a4a41abe39c858c6c',
                  },
                  id: 0,
                  relationships: {
                    ownerAccount: { data: { id: 23422, type: 'account' } },
                    resource: { data: { id: 134122, type: 'resource' } },
                  },
                  type: 'webhook',
                },
                included: [],
                responseStatus: 200,
              },
            },
          },
        },
      },
    },
  },
})

export const postWebhooksResendActivityIdRoute = createRoute({
  method: 'post',
  path: '/webhooks/resend/{activityId}',
  tags: ['Webhooks'],
  summary: 'Resend a webhook message',
  description:
    'This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks',
  operationId: 'resendWebhookActivityEntry',
  request: {
    params: z.object({
      activityId: z
        .string()
        .openapi({
          param: {
            description: 'Webhooks activity entry ID',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: EmptyResponseSchema } },
    },
  },
})

export const getWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Get info for a webhook',
  description:
    'Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks',
  operationId: 'getWebhookById',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            description: 'Webhook endpoint ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' Include metadata for related items; `ownerAccount` and/or `resource` ',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
  },
})

export const deleteWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  description:
    'Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to. ',
  operationId: 'deleteWebhook',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            description: 'Webhook endpoint ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Sucessful operation',
      content: {
        'application/json': {
          schema: EmptyResponseSchema,
          examples: { 'Delete operation OK': { value: { data: [], responseStatus: 200 } } },
        },
      },
    },
  },
})

export const patchWebhooksIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  description:
    'Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating. \n\nYou only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.',
  operationId: 'updateWebhook',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            description: 'Webhook endpoint ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'ev-api-key': ApiKeyParamParamsSchema,
      'ev-access-token': AccessTokenParamParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpointUrl: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'New endpoint URL to use for the webhook configuration',
                  example: 'https://example.com/new-endpoint',
                }),
              resource: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Resource identifier of the top folder watched by this webhook.',
                  example: '/newfolder',
                }),
              responseVersion: z
                .enum(['v2', 'v1'])
                .exactOptional()
                .openapi({
                  description: 'Version of the webhooks message to send to the endpoint',
                  example: 'v1',
                }),
              triggers: WebhookTriggersSchema.exactOptional(),
            })
            .openapi({ description: '', title: 'UpdateWebhookRequestBody', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: {
        'application/json': {
          schema: WebhookResponseSchema,
          examples: {
            'Updated webhook': {
              value: {
                data: {
                  attributes: {
                    created: '2021-03-04T22:22:00-08:00',
                    endpointUrl: 'https://example.com/new-endpoint',
                    failed: true,
                    modified: '2021-03-04T22:23:03-08:00',
                    responseVersion: 'v1',
                    triggers: {
                      resources: {
                        compress: true,
                        copy: true,
                        createFolder: true,
                        delete: true,
                        download: true,
                        extract: true,
                        move: true,
                        rename: true,
                        upload: true,
                      },
                      shares: { formSubmit: true },
                    },
                    verificationToken: '8df822322dee90ba4a41abe39c858c11',
                  },
                  id: 0,
                  relationships: {
                    ownerAccount: { data: { id: 23422, type: 'account' } },
                    resource: { data: { id: 433, type: 'resource' } },
                  },
                  type: 'webhook',
                },
                included: [],
                responseStatus: 200,
              },
            },
          },
        },
      },
    },
  },
})
