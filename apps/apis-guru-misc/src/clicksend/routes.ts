import { createRoute, z } from '@hono/zod-openapi'

const AcceptableImportFieldsSchema = z.any().openapi('AcceptableImportFields')

const AccountActivationSchema = z.any().openapi('AccountActivation')

const AccountCollectionSchema = z.any().openapi('AccountCollection')

const AllowedFromEmailAddressesSchema = z.any().openapi('AllowedFromEmailAddresses')

const BuyDedicatedNumberSchema = z.any().openapi('BuyDedicatedNumber')

const CSVImportFilePreviewSchema = z.any().openapi('CSVImportFilePreview')

const CalculatePriceSchema = z.any().openapi('CalculatePrice')

const CalculatePriceForSMSCampaignSchema = z.any().openapi('CalculatePriceForSMSCampaign')

const CalculatePricingSchema = z.any().openapi('CalculatePricing')

const CancelScheduledMessagesSchema = z.any().openapi('CancelScheduledMessages')

const CancelVoiceCallsSchema = z.any().openapi('CancelVoiceCalls')

const ContactSchema = z.any().openapi('Contact')

const ContactCollectionSchema = z.any().openapi('ContactCollection')

const ContactListSchema = z.any().openapi('ContactList')

const ContactListCollectionSchema = z.any().openapi('ContactListCollection')

const ContactSuggestionsSchema = z.any().openapi('ContactSuggestions')

const CountryCollectionSchema = z.any().openapi('CountryCollection')

const CreateSMSCampaignSchema = z.any().openapi('CreateSMSCampaign')

const CreditCardInfoSchema = z.any().openapi('CreditCardInfo')

const DeliveryIssuesSchema = z.any().openapi('DeliveryIssues')

const DeliveryReceiptsSchema = z.any().openapi('DeliveryReceipts')

const DetectAddressSchema = z.any().openapi('DetectAddress')

const DirectMailCampaignSchema = z.any().openapi('DirectMailCampaign')

const EmailToSMSAllowedAddressSchema = z.any().openapi('EmailToSMSAllowedAddress')

const EmailToSMSAllowedAddressObjectSchema = z.any().openapi('EmailToSMSAllowedAddressObject')

const EmailCampaignsSchema = z.any().openapi('EmailCampaigns')

const EmailDeliveryReceiptRulesSchema = z.any().openapi('EmailDeliveryReceiptRules')

const ExistingSMSCampaignsSchema = z.any().openapi('ExistingSMSCampaigns')

const ExportContactsSchema = z.any().openapi('ExportContacts')

const ExportPostLetterHistorySchema = z.any().openapi('ExportPostLetterHistory')

const ExportPostcardHistorySchema = z.any().openapi('ExportPostcardHistory')

const FaxDeliveryReceiptRulesSchema = z.any().openapi('FaxDeliveryReceiptRules')

const FaxHistorySchema = z.any().openapi('FaxHistory')

const ForgotPasswordSchema = z.any().openapi('ForgotPassword')

const ForgotUsernameSchema = z.any().openapi('ForgotUsername')

const GetCountryPricingSchema = z.any().openapi('GetCountryPricing')

const GetPostLetterHistorySchema = z.any().openapi('GetPostLetterHistory')

const GetPostcardHistorySchema = z.any().openapi('GetPostcardHistory')

const GetSMSStatisticsSchema = z.any().openapi('GetSMSStatistics')

const GetVoiceStatisticsSchema = z.any().openapi('GetVoiceStatistics')

const GetAllDedicatedNumbersSchema = z.any().openapi('GetAllDedicatedNumbers')

const ImportContactsSchema = z.any().openapi('ImportContacts')

const InboundFaxRulesSchema = z.any().openapi('InboundFaxRules')

const InboundMMSSchema = z.any().openapi('InboundMMS')

const InboundSMSSchema = z.any().openapi('InboundSMS')

const InboundSMSRulesSchema = z.any().openapi('InboundSMSRules')

const MMSHistorySchema = z.any().openapi('MMSHistory')

const MasterTemplateCategoriesSchema = z.any().openapi('MasterTemplateCategories')

const MasterTemplatesSchema = z.any().openapi('MasterTemplates')

const PostCodeSearchSchema = z.any().openapi('PostCodeSearch')

const PostReturnAddressSchema = z.any().openapi('PostReturnAddress')

const ReferralAccountsSchema = z.any().openapi('ReferralAccounts')

const RemoveDuplicateContactsSchema = z.any().openapi('RemoveDuplicateContacts')

const RemoveOptedOutContactsSchema = z.any().openapi('RemoveOptedOutContacts')

const ResellerSchema = z.any().openapi('Reseller')

const ResellerAccountSchema = z.any().openapi('ResellerAccount')

const ResellerAccountsSchema = z.any().openapi('ResellerAccounts')

const ResellerSubdomainSchema = z.any().openapi('ResellerSubdomain')

const SDKDownloadSchema = z.any().openapi('SDKDownload')

const SMSDeliveryReceiptRulesSchema = z.any().openapi('SMSDeliveryReceiptRules')

const SMSHistorySchema = z.any().openapi('SMSHistory')

const SearchContactsListsSchema = z.any().openapi('SearchContactsLists')

const SearchDedicatedNumbersByCountrySchema = z.any().openapi('SearchDedicatedNumbersByCountry')

const SendFaxSchema = z.any().openapi('SendFax')

const SendPostLetterSchema = z.any().openapi('SendPostLetter')

const SendPostcardSchema = z.any().openapi('SendPostcard')

const SendAVoiceCallTextToSpeechSchema = z.any().openapi('SendAVoiceCallTextToSpeech')

const SendAnMMSSchema = z.any().openapi('SendAnMMS')

const SendAnSMSSchema = z.any().openapi('SendAnSMS')

const StrippedStringsSchema = z.any().openapi('StrippedStrings')

const SubaccountSchema = z.any().openapi('Subaccount')

const SubaccountCollectionSchema = z.any().openapi('SubaccountCollection')

const TemplatesSchema = z.any().openapi('Templates')

const TimezonesSchema = z.any().openapi('Timezones')

const TransactionalEmailSchema = z.any().openapi('TransactionalEmail')

const TransferContactSchema = z.any().openapi('TransferContact')

const URLShorteningSchema = z.any().openapi('URLShortening')

const UploadImageSchema = z.any().openapi('UploadImage')

const UploadAFileSchema = z.any().openapi('UploadAFile')

const UserEmailTemplatesSchema = z.any().openapi('UserEmailTemplates')

const VerifyForgotPasswordSchema = z.any().openapi('VerifyForgotPassword')

const VoiceDeliveryReceiptRulesSchema = z.any().openapi('VoiceDeliveryReceiptRules')

const VoiceHistorySchema = z.any().openapi('VoiceHistory')

const VoiceLanguagesSchema = z.any().openapi('VoiceLanguages')

const AddATestDeliveryReceiptBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          url: z
            .string()
            .openapi({
              description: "Your URL if using the push option or 'poll' if using the pull option.",
            }),
        })
        .openapi({ example: { url: 'http://yourdomain.com' }, required: ['url'] }),
    },
  },
}

const CreateEmailCampaignBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          from_email_address_id: z
            .number()
            .openapi({ description: 'The allowed email address id.' }),
          from_name: z.string().openapi({ description: 'The name that will appear on the email.' }),
          list_id: z.number().openapi({ description: 'The list id you want to access.' }),
          name: z.string().openapi({ description: 'The name of the sender.' }),
          schedule: z
            .number()
            .exactOptional()
            .openapi({
              description:
                'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
            }),
          subject: z.string().openapi({ description: 'The subject of the email campaign.' }),
          template_id: z.number().openapi({ description: 'The template id you want to use.' }),
        })
        .openapi({
          example: {
            body: '<p>This is a test</p>',
            from_email_address_id: 2,
            from_name: 'From name',
            list_id: 456,
            name: 'John Doe',
            subject: 'Lorem Ipsum',
            template_id: 31,
          },
          required: [
            'name',
            'subject',
            'from_email_address_id',
            'from_name',
            'template_id',
            'list_id',
          ],
        }),
    },
  },
}

const CreateResellerAccountBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          account_name: z.string().openapi({ description: 'Your delivery to value.' }),
          country: z.string().openapi({ description: 'Client country.' }),
          password: z.string().openapi({ description: 'Your password.' }),
          user_email: z.string().openapi({ description: 'Your email.' }),
          user_first_name: z.string().openapi({ description: 'Your first name.' }),
          user_last_name: z.string().openapi({ description: 'Your last name.' }),
          user_phone: z.string().openapi({ description: 'Your phone number in E.164 format.' }),
          username: z.string().openapi({ description: 'Your username.' }),
        })
        .openapi({
          example: {
            account_name: 'The Awesome Company',
            country: 'US',
            password: 'pass',
            user_email: 'johndoe2@awesome.com',
            user_first_name: 'John',
            user_last_name: 'Doe',
            user_phone: '518-481-1002',
            username: 'johndoe2',
          },
          required: [
            'username',
            'password',
            'user_email',
            'user_phone',
            'user_first_name',
            'user_last_name',
            'account_name',
            'country',
          ],
        }),
    },
  },
}

const CreateAPostReturnAddressBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          address_city: z.string().openapi({ description: 'Your address city.' }),
          address_country: z
            .string()
            .openapi({ description: 'Two-letter country code defined in ISO 3166.' }),
          address_line_1: z.string().openapi({ description: 'Your address line 1.' }),
          address_line_2: z
            .string()
            .exactOptional()
            .openapi({ description: 'Your address line 2.' }),
          address_name: z.string().openapi({ description: 'Your address name.' }),
          address_postal_code: z.number().openapi({ description: 'Your address postal code.' }),
          address_state: z.string().openapi({ description: 'Your address state.' }),
        })
        .openapi({
          example: {
            address_city: 'Flynn',
            address_country: 'AU',
            address_line_1: 'Maritime Avenue',
            address_line_2: '',
            address_name: 'John Smith',
            address_postal_code: 6302,
            address_state: 'WA',
          },
          required: [
            'address_name',
            'address_line_1',
            'address_city',
            'address_state',
            'address_postal_code',
            'address_country',
          ],
        }),
    },
  },
}

const CreateANewRuleBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          action: z.string().openapi({ description: 'Action' }),
          action_address: z.string().openapi({ description: 'Action Address' }),
          dedicated_number: z.string().openapi({ description: 'Decicated Number' }),
          enabled: z.number().openapi({ description: 'Enable' }),
          rule_name: z.string().openapi({ description: 'Rule Name' }),
        })
        .openapi({
          example: {
            action: 'EMAIL_FIXED',
            action_address: 'email@domain.com',
            dedicated_number: '+61298441484',
            enabled: 1,
            rule_name: 'Rule Name',
          },
          required: ['dedicated_number', 'rule_name', 'action', 'action_address', 'enabled'],
        }),
    },
  },
}

const CreateANewRuleBody2RequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          action: z.string().openapi({ description: 'Action.' }),
          action_address: z.string().openapi({ description: 'Action Address.' }),
          enabled: z.number().openapi({ description: 'Enabled.' }),
          match_type: z
            .number()
            .openapi({
              description: 'Match Type. 0=All reports, 1=Only failed, 2=Only successful.',
            }),
          rule_name: z.string().openapi({ description: 'Rule Name.' }),
        })
        .openapi({
          example: {
            action: 'EMAIL_FIXED',
            action_address: 'john@doe.com',
            enabled: 1,
            match_type: 3,
            rule_name: 'My Rule',
          },
          required: ['rule_name', 'match_type', 'action', 'action_address', 'enabled'],
        }),
    },
  },
}

const SendFaxBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          country: z.string().exactOptional().openapi({ description: 'Recipient country.' }),
          custom_string: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Your reference. Will be passed back with all replies and delivery reports.',
            }),
          file_url: z.string().openapi({ description: 'Your URL to your PDF file.' }),
          from: z
            .string()
            .exactOptional()
            .openapi({ description: 'Your sender id. Must be a valid fax number.' }),
          from_email: z
            .string()
            .exactOptional()
            .openapi({ description: 'An email address where the reply should be emailed to.' }),
          list_id: z
            .number()
            .exactOptional()
            .openapi({
              description: "Your list ID if sending to a whole list. Can be used instead of 'to'.",
            }),
          messages: z.array(z.any()).openapi({ description: 'Your messages.' }),
          schedule: z
            .number()
            .exactOptional()
            .openapi({
              description:
                'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
            }),
          source: z
            .string()
            .exactOptional()
            .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
          to: z
            .string()
            .openapi({
              description:
                'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
            }),
        })
        .openapi({
          example: {
            file_url:
              'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf',
            messages: [
              {
                country: 'AF',
                custom_string: 'custom_string',
                from_email: 'will@smith.com',
                schedule: '1436874701',
                source: 'php',
                to: '+61261111111',
              },
              {
                country: 'AF',
                custom_string: 'custom_string',
                from_email: 'john@doe.com',
                schedule: '1436874701',
                source: 'php',
                to: '+61261111122',
              },
            ],
          },
          required: ['file_url', 'messages', 'to'],
        }),
    },
  },
}

const BasicSecurityScheme = { scheme: 'basic', type: 'http' }

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Get account',
  operationId: 'Get account',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAccountRoute = createRoute({
  method: 'put',
  path: '/account',
  tags: ['Account'],
  summary: 'Update Account',
  operationId: 'Update Account',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account_name: z.string().openapi({ description: 'Your delivery to value.' }),
              country: z.string().openapi({ description: 'Your country.' }),
              password: z.string().openapi({ description: 'Your password.' }),
              private_uploads: z
                .number()
                .exactOptional()
                .openapi({ description: 'Set the private uploads flag. 0 or 1 only.' }),
              setting_sms_hide_business_name: z
                .number()
                .exactOptional()
                .openapi({ description: 'Set the private uploads flag. 0 or 1 only.' }),
              setting_sms_hide_your_number: z
                .number()
                .exactOptional()
                .openapi({ description: 'Set the private uploads flag. 0 or 1 only.' }),
              timezone: z.string().openapi({ description: 'Timezone.' }),
              user_email: z.string().openapi({ description: 'Your email.' }),
              user_first_name: z.string().openapi({ description: 'Your first name.' }),
              user_last_name: z.string().openapi({ description: 'Your last name.' }),
              user_phone: z.string().openapi({ description: 'Your phone number in E.164 format.' }),
              username: z.string().openapi({ description: 'Your username.' }),
            })
            .openapi({
              example: {
                account_name: 'The Awesome Company',
                country: 'AU',
                password: 'pass',
                private_uploads: 1,
                setting_sms_hide_business_name: 1,
                setting_sms_hide_your_number: 0,
                timezone: 'Australia/Melbourne',
                user_email: 'johndoe@awesome.com',
                user_first_name: 'John',
                user_last_name: 'Doe',
                user_phone: '518-481-1002',
                username: 'johndoe',
              },
              required: [
                'username',
                'password',
                'user_email',
                'user_phone',
                'user_first_name',
                'user_last_name',
                'account_name',
                'country',
                'timezone',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAccountRoute = createRoute({
  method: 'post',
  path: '/account',
  tags: ['Account'],
  summary: 'Create a new account',
  description: "**Note:** *Authentication isn't required to create a new account.*",
  operationId: 'Create a new account',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account_name: z.string().openapi({ description: 'Your delivery to value.' }),
              country: z.string().openapi({ description: 'Your country.' }),
              password: z.string().openapi({ description: 'Your password.' }),
              user_email: z.string().openapi({ description: 'Your email.' }),
              user_first_name: z.string().openapi({ description: 'Your first name.' }),
              user_last_name: z.string().openapi({ description: 'Your last name.' }),
              user_phone: z.string().openapi({ description: 'Your phone number in E.164 format.' }),
              username: z.string().openapi({ description: 'Your username.' }),
            })
            .openapi({
              example: {
                account_name: 'The Awesome Company',
                country: 'US',
                password: 'pass',
                user_email: 'johndoe1@awesome.com',
                user_first_name: 'John',
                user_last_name: 'Doe',
                user_phone: '518-481-1001',
                username: 'johndoe1',
              },
              required: [
                'username',
                'password',
                'user_email',
                'user_phone',
                'user_first_name',
                'user_last_name',
                'account_name',
                'country',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAccountVerifySendRoute = createRoute({
  method: 'put',
  path: '/account-verify/send',
  tags: ['Account'],
  summary: 'Send account activation token',
  operationId: 'Send account activation token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              country: z.string().exactOptional(),
              type: z.string().exactOptional(),
              user_phone: z.string().exactOptional(),
            })
            .openapi({
              example: { country: 'US', type: 'sms', user_phone: '352-394-4199' },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const putAccountVerifyVerifyActivationTokenRoute = createRoute({
  method: 'put',
  path: '/account-verify/verify/{activation_token}',
  tags: ['Account'],
  summary: 'Verify new account',
  operationId: 'Verify new account',
  request: {
    params: z.object({
      activation_token: z
        .string()
        .openapi({
          param: {
            description: 'The ActivationToken to be used to verify an account.',
            example: '1827364',
            in: 'path',
            name: 'activation_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAccountUsageYearMonthTypeRoute = createRoute({
  method: 'get',
  path: '/account/usage/{year}/{month}/{type}',
  tags: ['Account'],
  summary: 'Account Usage',
  operationId: 'Account Usage',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your account usage year.',
            example: '2016',
            in: 'path',
            name: 'year',
            required: true,
            schema: { type: 'number' },
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
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your account usage month.',
            example: '4',
            in: 'path',
            name: 'month',
            required: true,
            schema: { type: 'number' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'The account type. Value can only be either email or subaccount.',
            example: 'subaccount',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsEmailReceiptRoute = createRoute({
  method: 'get',
  path: '/automations/email/receipt',
  tags: ['Automation Rules'],
  summary: 'List Rules',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAutomationsEmailReceiptRoute = createRoute({
  method: 'post',
  path: '/automations/email/receipt',
  tags: ['Automation Rules'],
  summary: 'Create a New Rule',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.string().openapi({ description: 'Action.' }),
              action_address: z.string().openapi({ description: 'Action Address.' }),
              enabled: z.number().openapi({ description: 'Enabled.' }),
              match_type: z.number().openapi({ description: 'Match Type. 0=All reports.' }),
              rule_name: z.string().openapi({ description: 'Rule Name.' }),
            })
            .openapi({
              example: {
                action: 'URL',
                action_address: 'http://yourdomain.com',
                enabled: 1,
                match_type: 0,
                rule_name: 'My Rule',
              },
              required: ['rule_name', 'match_type', 'action', 'action_address', 'enabled'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsEmailReceiptRuleIdRoute = createRoute({
  method: 'get',
  path: '/automations/email/receipt/{rule_id}',
  tags: ['Automation Rules'],
  summary: 'Get a Specific Rule',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The rule id you want to access.',
            example: '5',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAutomationsEmailReceiptRuleIdRoute = createRoute({
  method: 'put',
  path: '/automations/email/receipt/{rule_id}',
  tags: ['Automation Rules'],
  summary: 'Update a Rule',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email receipt rule id you want to access.',
            example: '8',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.string().exactOptional().openapi({ description: 'Action.' }),
              action_address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Action Address.' }),
              enabled: z.number().exactOptional().openapi({ description: 'Enabled.' }),
              match_type: z
                .number()
                .exactOptional()
                .openapi({ description: 'Match Type. 0=All reports.' }),
              rule_name: z.string().exactOptional().openapi({ description: 'Rule Name.' }),
            })
            .openapi({
              example: {
                action: 'URL',
                action_address: 'http://yourdomain.com',
                enabled: 1,
                match_type: 0,
                rule_name: 'My Rule',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteAutomationsEmailReceiptRuleIdRoute = createRoute({
  method: 'delete',
  path: '/automations/email/receipt/{rule_id}',
  tags: ['Automation Rules'],
  summary: 'Delete a Rule',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email receipt rule id you want to delete.',
            example: '8',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsFaxInboundRoute = createRoute({
  method: 'get',
  path: '/automations/fax/inbound',
  tags: ['Automation Rules'],
  summary: 'List rules',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAutomationsFaxInboundRoute = createRoute({
  method: 'post',
  path: '/automations/fax/inbound',
  tags: ['Automation Rules'],
  summary: 'Create a new rule',
  request: { body: CreateANewRuleBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsFaxInboundInboundRuleIdRoute = createRoute({
  method: 'get',
  path: '/automations/fax/inbound/{inbound_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Get a specific rule',
  request: {
    params: z.object({
      inbound_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Fax inbound rule id',
            example: '14',
            in: 'path',
            name: 'inbound_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAutomationsFaxInboundInboundRuleIdRoute = createRoute({
  method: 'put',
  path: '/automations/fax/inbound/{inbound_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Update a rule',
  request: {
    params: z.object({
      inbound_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Fax inbound rule id',
            example: '14',
            in: 'path',
            name: 'inbound_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: CreateANewRuleBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteAutomationsFaxInboundInboundRuleIdRoute = createRoute({
  method: 'delete',
  path: '/automations/fax/inbound/{inbound_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Delete a rule',
  request: {
    params: z.object({
      inbound_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Fax inbound rule id',
            example: '14',
            in: 'path',
            name: 'inbound_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsFaxReceiptsRoute = createRoute({
  method: 'get',
  path: '/automations/fax/receipts',
  tags: ['Automation Rules'],
  summary: 'List Rules',
  operationId: 'List Rules',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAutomationsFaxReceiptsRoute = createRoute({
  method: 'post',
  path: '/automations/fax/receipts',
  tags: ['Automation Rules'],
  summary: 'Create a New Rule',
  operationId: 'Create a New Rule',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.string().openapi({ description: 'Action.' }),
              action_address: z.string().openapi({ description: 'Action Address.' }),
              enabled: z.number().openapi({ description: 'Enabled.' }),
              match_type: z.number().openapi({ description: 'Match Type. 0=All reports.' }),
              rule_name: z.string().openapi({ description: 'Rule Name.' }),
            })
            .openapi({
              example: {
                action: 'EMAIL_FIXED',
                action_address: 'john@doe.com',
                enabled: 1,
                match_type: 2,
                rule_name: 'My Rule',
              },
              required: ['rule_name', 'match_type', 'action', 'action_address', 'enabled'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsFaxReceiptsRuleIdRoute = createRoute({
  method: 'get',
  path: '/automations/fax/receipts/{rule_id}',
  tags: ['Automation Rules'],
  summary: 'Get a Specific Rule',
  operationId: 'Get a Specific Rule',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The rule id you want to access.',
            example: '4',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAutomationsFaxReceiptsRuleIdRoute = createRoute({
  method: 'put',
  path: '/automations/fax/receipts/{rule_id}',
  tags: ['Automation Rules'],
  summary: 'Update a Rule',
  operationId: 'Update a Rule',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email receipt rule id you want to access.',
            example: '4',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.string().exactOptional().openapi({ description: 'Action.' }),
              action_address: z
                .string()
                .exactOptional()
                .openapi({ description: 'Action Address.' }),
              enabled: z.number().exactOptional().openapi({ description: 'Enabled.' }),
              match_type: z
                .number()
                .exactOptional()
                .openapi({ description: 'Match Type. 0=All reports.' }),
              rule_name: z.string().exactOptional().openapi({ description: 'Rule Name.' }),
            })
            .openapi({
              example: {
                action: 'EMAIL_FIXED',
                action_address: 'john@doe.com',
                enabled: 1,
                match_type: 1,
                rule_name: 'My Rule',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteAutomationsFaxReceiptsRuleIdRoute = createRoute({
  method: 'delete',
  path: '/automations/fax/receipts/{rule_id}',
  tags: ['Automation Rules'],
  summary: 'Delete a Rule',
  operationId: 'Delete a Rule',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email receipt rule id you want to delete.',
            example: '4',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsSmsInboundRoute = createRoute({
  method: 'get',
  path: '/automations/sms/inbound',
  tags: ['Automation Rules'],
  summary: 'List rules',
  operationId: 'List rules',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAutomationsSmsInboundIndexRoute = createRoute({
  method: 'post',
  path: '/automations/sms/inbound/',
  tags: ['Automation Rules'],
  summary: 'Create a new rule',
  operationId: 'Create a new rule',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.string().openapi({ description: 'Action.' }),
              action_address: z.string().openapi({ description: 'Action Address.' }),
              dedicated_number: z.number().openapi({ description: 'Dedicated Number.' }),
              enabled: z.number().openapi({ description: 'Enabled.' }),
              message_search_term: z.string().openapi({ description: 'Message Search Term.' }),
              message_search_type: z
                .number()
                .openapi({
                  description:
                    'Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.',
                }),
              rule_name: z.string().openapi({ description: 'Rule Name.' }),
            })
            .openapi({
              example: {
                action: 'EMAIL_FIXED',
                action_address: 'john@doe.com',
                dedicated_number: '+61298441484',
                enabled: 1,
                message_search_term: 'My Search Term',
                message_search_type: 3,
                rule_name: 'My Rule',
              },
              required: [
                'dedicated_number',
                'rule_name',
                'message_search_type',
                'message_search_term',
                'action',
                'action_address',
                'enabled',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsSmsInboundInboundRuleIdRoute = createRoute({
  method: 'get',
  path: '/automations/sms/inbound/{inbound_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Get a specific rule',
  operationId: 'Get a specific rule',
  request: {
    params: z.object({
      inbound_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Inbound Rule ID.',
            example: '1',
            in: 'path',
            name: 'inbound_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAutomationsSmsInboundInboundRuleIdRoute = createRoute({
  method: 'put',
  path: '/automations/sms/inbound/{inbound_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Update a rule',
  operationId: 'Update a rule',
  request: {
    params: z.object({
      inbound_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Inbound Rule ID.',
            example: '1',
            in: 'path',
            name: 'inbound_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.string().openapi({ description: 'Action.' }),
              action_address: z.string().openapi({ description: 'Action Address.' }),
              dedicated_number: z.string().openapi({ description: 'Dedicated Number' }),
              enabled: z.number().openapi({ description: 'Enabled.' }),
              message_search_term: z.string().openapi({ description: 'Message Search Term.' }),
              message_search_type: z
                .number()
                .openapi({
                  description:
                    'Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.',
                }),
            })
            .openapi({
              example: {
                action: 'EMAIL_FIXED',
                action_address: 'john@doe.com',
                dedicated_number: '+61298441484',
                enabled: 1,
                message_search_term: 'My Search Term',
                message_search_type: 3,
                rule_name: 'My Rule',
              },
              required: [
                'dedicated_number',
                'message_search_type',
                'message_search_term',
                'action',
                'action_address',
                'enabled',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteAutomationsSmsInboundInboundRuleIdRoute = createRoute({
  method: 'delete',
  path: '/automations/sms/inbound/{inbound_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Delete a rule',
  operationId: 'Delete a rule',
  request: {
    params: z.object({
      inbound_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Inbound Rule ID.',
            example: '1',
            in: 'path',
            name: 'inbound_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsSmsReceiptsRoute = createRoute({
  method: 'get',
  path: '/automations/sms/receipts',
  tags: ['Automation Rules'],
  summary: 'List rules',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAutomationsSmsReceiptsRoute = createRoute({
  method: 'post',
  path: '/automations/sms/receipts',
  tags: ['Automation Rules'],
  summary: 'Create a new rule',
  request: { body: CreateANewRuleBody2RequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsSmsReceiptsReceiptRuleIdRoute = createRoute({
  method: 'get',
  path: '/automations/sms/receipts/{receipt_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Get a specific rule',
  request: {
    params: z.object({
      receipt_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Receipt Rule ID.',
            example: '2',
            in: 'path',
            name: 'receipt_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAutomationsSmsReceiptsReceiptRuleIdRoute = createRoute({
  method: 'put',
  path: '/automations/sms/receipts/{receipt_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Update a rule',
  request: {
    params: z.object({
      receipt_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Receipt Rule ID.',
            example: '7',
            in: 'path',
            name: 'receipt_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: CreateANewRuleBody2RequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteAutomationsSmsReceiptsReceiptRuleIdRoute = createRoute({
  method: 'delete',
  path: '/automations/sms/receipts/{receipt_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Delete a rule',
  request: {
    params: z.object({
      receipt_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Receipt Rule ID.',
            example: '7',
            in: 'path',
            name: 'receipt_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsVoiceReceiptsRoute = createRoute({
  method: 'get',
  path: '/automations/voice/receipts',
  tags: ['Automation Rules'],
  summary: 'List rules',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postAutomationsVoiceReceiptsRoute = createRoute({
  method: 'post',
  path: '/automations/voice/receipts',
  tags: ['Automation Rules'],
  summary: 'Create a new rule',
  request: { body: CreateANewRuleBody2RequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getAutomationsVoiceReceiptsReceiptRuleIdRoute = createRoute({
  method: 'get',
  path: '/automations/voice/receipts/{receipt_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Get a specific rule',
  request: {
    params: z.object({
      receipt_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Receipt Rule ID.',
            example: '2',
            in: 'path',
            name: 'receipt_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putAutomationsVoiceReceiptsReceiptRuleIdRoute = createRoute({
  method: 'put',
  path: '/automations/voice/receipts/{receipt_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Update a rule',
  request: {
    params: z.object({
      receipt_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Receipt Rule ID.',
            example: '2',
            in: 'path',
            name: 'receipt_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: CreateANewRuleBody2RequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteAutomationsVoiceReceiptsReceiptRuleIdRoute = createRoute({
  method: 'delete',
  path: '/automations/voice/receipts/{receipt_rule_id}',
  tags: ['Automation Rules'],
  summary: 'Delete a rule',
  request: {
    params: z.object({
      receipt_rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Receipt Rule ID.',
            example: '2',
            in: 'path',
            name: 'receipt_rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getContactSuggestionsRoute = createRoute({
  method: 'get',
  path: '/contact-suggestions',
  tags: ['Contact Suggestions'],
  summary: 'List Contact Suggestions',
  operationId: 'List Contact Suggestions',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getCountriesRoute = createRoute({
  method: 'get',
  path: '/countries',
  tags: ['Countries'],
  summary: 'Get all Countries',
  operationId: 'Get all Countries',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getDeliveryIssuesRoute = createRoute({
  method: 'get',
  path: '/delivery-issues',
  tags: ['Delivery Issues'],
  summary: 'Get Delivery Issues',
  operationId: 'Get Delivery Issues',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postDeliveryIssuesRoute = createRoute({
  method: 'post',
  path: '/delivery-issues',
  tags: ['Delivery Issues'],
  summary: 'Create Delivery Issue',
  operationId: 'Create Delivery Issue',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_comments: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's comments." }),
              description: z.string().openapi({ description: 'The description of the message.' }),
              email_address: z.string().openapi({ description: "The user's email address." }),
              message_id: z.string().openapi({ description: 'The message id of the message.' }),
              type: z
                .string()
                .openapi({
                  description:
                    'The type of message, must be one of the following values: `SMS`, `MMS`, `VOICE`, `EMAIL_MARKETING`, `EMAIL_TRANSACTIONAL`, `FAX`, `POST`.',
                }),
            })
            .openapi({
              example: {
                client_comments: 'test',
                description: 'This is a test',
                email_address: 'john_doe@user.com',
                message_id: 'B388828B-AD46-4366-8AD3-0305FF5E3FE5',
                type: 'SMS',
              },
              required: ['message_id', 'type', 'description', 'email_address'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailCampaignsRoute = createRoute({
  method: 'get',
  path: '/email-campaigns',
  tags: ['Email Marketing'],
  summary: 'Get All Email Campaigns',
  operationId: 'Get All Email Campaigns',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailCampaignsPriceRoute = createRoute({
  method: 'post',
  path: '/email-campaigns/price',
  tags: ['Email Marketing'],
  summary: 'Calculate Price',
  operationId: 'Calculate Price',
  request: { body: CreateEmailCampaignBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailCampaignsSendRoute = createRoute({
  method: 'post',
  path: '/email-campaigns/send',
  tags: ['Email Marketing'],
  summary: 'Create Email Campaign',
  operationId: 'Create Email Campaign',
  request: { body: CreateEmailCampaignBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailCampaignsCampaignIdHistoryRoute = createRoute({
  method: 'get',
  path: '/email-campaigns/{campaign_id}/history',
  tags: ['Email Marketing'],
  summary: 'Get Specific Email Campaign History',
  operationId: 'Get Specific Email Campaign History',
  request: {
    params: z.object({
      campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email campaign id you want to access.',
            example: '77',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailCampaignsEmailCampaignIdRoute = createRoute({
  method: 'get',
  path: '/email-campaigns/{email_campaign_id}',
  tags: ['Email Marketing'],
  summary: 'Get Specific Email Campaign',
  operationId: 'Get Specific Email Campaign',
  request: {
    params: z.object({
      email_campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email campaign id you want to access.',
            example: '1',
            in: 'path',
            name: 'email_campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putEmailCampaignsEmailCampaignIdRoute = createRoute({
  method: 'put',
  path: '/email-campaigns/{email_campaign_id}',
  tags: ['Email Marketing'],
  summary: 'Update Email Campaign',
  operationId: 'Update Email Campaign',
  request: {
    params: z.object({
      email_campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email campaign id you want to access.',
            example: '1',
            in: 'path',
            name: 'email_campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              from_email_address_id: z
                .number()
                .exactOptional()
                .openapi({ description: 'The allowed email address id.' }),
              from_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name that will appear on the email.' }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({ description: 'The list id you want to access.' }),
              name: z.string().exactOptional().openapi({ description: 'The name of the sender.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              subject: z
                .string()
                .exactOptional()
                .openapi({ description: 'The subject of the email campaign.' }),
              template_id: z
                .number()
                .exactOptional()
                .openapi({ description: 'The template id you want to use.' }),
            })
            .openapi({
              example: {
                body: '<p>This is a test</p>',
                from_email_address_id: 2,
                from_name: 'From name',
                list_id: 456,
                name: 'John Doe',
                subject: 'Lorem Ipsum',
                template_id: 31,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putEmailCampaignsEmailCampaignIdCancelRoute = createRoute({
  method: 'put',
  path: '/email-campaigns/{email_campaign_id}/cancel',
  tags: ['Email Marketing'],
  summary: 'Cancel Email Campaign',
  operationId: 'Cancel Email Campaign',
  request: {
    params: z.object({
      email_campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email campaign id you want to cancel.',
            example: '1',
            in: 'path',
            name: 'email_campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putEmailAddressVerifyEmailAddressIdSendRoute = createRoute({
  method: 'put',
  path: '/email/address-verify/{email_address_id}/send',
  tags: ['Email Marketing'],
  summary: 'Send Verification Token',
  operationId: 'Send Verification Token',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email addess id you want to access.',
            example: '1',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute = createRoute({
  method: 'put',
  path: '/email/address-verify/{email_address_id}/verify/{activation_token}',
  tags: ['Email Marketing'],
  summary: 'Verify Allowed Email Address',
  operationId: 'Verify Allowed Email Address',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email address id you want to access.',
            example: '5',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      activation_token: z
        .string()
        .openapi({
          param: {
            description: '6E8B-4FDB-99A7-7ED08DF97BCC (required, string) - Your activation token.',
            example: '3BD73304',
            in: 'path',
            name: 'activation_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailAddressesRoute = createRoute({
  method: 'get',
  path: '/email/addresses',
  tags: ['Email Marketing'],
  summary: 'Get All Allowed Email Addresses',
  operationId: 'Get All Allowed Email Addresses',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailAddressesRoute = createRoute({
  method: 'post',
  path: '/email/addresses',
  tags: ['Email Marketing'],
  summary: 'Create Allowed Email Address',
  operationId: 'Create Allowed Email Address',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Body: z
                .string()
                .exactOptional()
                .openapi({ description: '{\n    "email_address" : "test222@user.com"\n}' }),
              email_address: z.string().openapi({ description: 'Your email.' }),
            })
            .openapi({
              example: { Body: '', email_address: 'johndoe1@user.com' },
              required: ['email_address'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailAddressesEmailAddressIdRoute = createRoute({
  method: 'get',
  path: '/email/addresses/{email_address_id}',
  tags: ['Email Marketing'],
  summary: 'Get Specific Allowed Email Address',
  operationId: 'Get Specific Allowed Email Address',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email address you want to access.',
            example: '4',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteEmailAddressesEmailAddressIdRoute = createRoute({
  method: 'delete',
  path: '/email/addresses/{email_address_id}',
  tags: ['Email Marketing'],
  summary: 'Delete Allowed Email Address',
  operationId: 'Delete Allowed Email Address',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email address you want to access.',
            example: '5',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailHistoryRoute = createRoute({
  method: 'get',
  path: '/email/history',
  tags: ['Transactional Email'],
  summary: 'Email History',
  operationId: 'Email History',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailHistoryExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/email/history/export?filename={filename}',
  tags: ['Transactional Email'],
  summary: 'Export History',
  operationId: 'Export History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailMasterTemplatesRoute = createRoute({
  method: 'get',
  path: '/email/master-templates',
  tags: ['Email Marketing'],
  summary: 'Get All Master Email Templates',
  operationId: 'Get All Master Email Templates',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailMasterTemplatesCategoriesRoute = createRoute({
  method: 'get',
  path: '/email/master-templates-categories',
  tags: ['Email Marketing'],
  summary: 'Get All Master Template Categories',
  operationId: 'Get All Master Template Categories',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailMasterTemplatesCategoriesCategoryIdRoute = createRoute({
  method: 'get',
  path: '/email/master-templates-categories/{category_id}',
  tags: ['Email Marketing'],
  summary: 'Get Specific Email Template Category',
  operationId: 'Get Specific Email Template Category',
  request: {
    params: z.object({
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'Your category id.',
            example: '25',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute = createRoute({
  method: 'get',
  path: '/email/master-templates-categories/{category_id}/master-templates',
  tags: ['Email Marketing'],
  summary: 'Get All Templates For Category',
  operationId: 'Get All Templates For Category',
  request: {
    params: z.object({
      category_id: z
        .string()
        .openapi({
          param: {
            description: 'Your category id.',
            example: '1',
            in: 'path',
            name: 'category_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailMasterTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/email/master-templates/{template_id}',
  tags: ['Email Marketing'],
  summary: 'Get Specific Master Template',
  operationId: 'Get Specific Master Template',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            description: 'Your template id.',
            example: '25',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailPriceRoute = createRoute({
  method: 'post',
  path: '/email/price',
  tags: ['Transactional Email'],
  summary: 'Email Price',
  operationId: 'Email Price',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attachments: z
                .array(z.any())
                .openapi({
                  description: 'The attachments of the email. See sample request for more details.',
                }),
              bcc: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'The bcc of the email. See sample request for more details.',
                }),
              body: z.string().openapi({ description: 'The content of the email.' }),
              cc: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'The cc of the email. See sample request for more details.',
                }),
              'from.email_address_id': z
                .number()
                .openapi({ description: "The sender's email address id." }),
              'from.name': z
                .string()
                .exactOptional()
                .openapi({ description: "The sender's name." }),
              subject: z.string().openapi({ description: 'The subject of the email.' }),
              to: z
                .array(z.any())
                .openapi({
                  description: 'The recipients of the email. See sample request for more details.',
                }),
            })
            .openapi({
              example: {
                attachments: [
                  {
                    content: '<string>',
                    content_id: '<string>',
                    disposition: '<string>',
                    filename: '<string>',
                    type: '<string>',
                  },
                ],
                bcc: [{ email: '<string>', name: '<string>' }],
                body: '<string>|required',
                cc: [{ email: '<string>', name: '<string>' }],
                from: { email_address_id: '<integer>|required', name: '<string>' },
                schedule: '<integer>',
                subject: '<string>|required',
                to: [{ email: '<string>|required', name: '<string>' }],
              },
              required: ['to', 'subject', 'from.email_address_id', 'body', 'attachments'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailReceiptsRoute = createRoute({
  method: 'post',
  path: '/email/receipts',
  tags: ['Transactional Email'],
  summary: 'Add a Test Delivery Receipt',
  request: { body: AddATestDeliveryReceiptBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailSendRoute = createRoute({
  method: 'post',
  path: '/email/send',
  tags: ['Transactional Email'],
  summary: 'Email Send',
  operationId: 'Email Send',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attachments: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The attachments of the email.' }),
              bcc: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'The bcc of the email. Follows the same structure as `to`.',
                }),
              body: z.string().openapi({ description: 'The content of the email.' }),
              cc: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'The cc of the email. Follows the same structure as `to`.',
                }),
              'from.email_address_id': z
                .number()
                .openapi({ description: "The sender's email address ID." }),
              'from.name': z
                .string()
                .exactOptional()
                .openapi({ description: "The sender's name." }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              to: z.array(z.any()).openapi({ description: 'The recipients of the email.' }),
            })
            .openapi({
              example: {
                attachments: [
                  {
                    content: 'ZmlsZSBjb250ZW50cw==',
                    content_id: 'text',
                    disposition: 'attachment',
                    filename: 'text.txt',
                    type: 'text/plain',
                  },
                ],
                bcc: [{ email: 'test3@clicksend.com', name: 'Joseph Doe' }],
                body: 'Lorem ipsum',
                cc: [{ email: 'test2@clicksend.com', name: 'Jane Doe' }],
                from: { email_address_id: 1, name: 'Joanne Doe' },
                subject: 'Test subject',
                to: [{ email: 'test@clicksend.com', name: 'John Doe' }],
              },
              required: ['to', 'from.email_address_id', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailTemplatesRoute = createRoute({
  method: 'get',
  path: '/email/templates',
  tags: ['Email Marketing'],
  summary: 'Get All Email Templates',
  operationId: 'Get All Email Templates',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailTemplatesRoute = createRoute({
  method: 'post',
  path: '/email/templates',
  tags: ['Email Marketing'],
  summary: 'Create New Email Template from Master Template',
  operationId: 'Create New Email Template from Master Template',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              template_id_master: z
                .number()
                .openapi({ description: 'The ID of the master template you want to base on.' }),
              template_name: z
                .string()
                .openapi({ description: 'The intended name for the new template.' }),
            })
            .openapi({
              example: { template_id_master: 57, template_name: 'Minions' },
              required: ['template_name', 'template_id_master'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postEmailTemplatesImagesTemplateIdRoute = createRoute({
  method: 'post',
  path: '/email/templates-images/{template_id}',
  tags: ['Email Marketing'],
  summary: 'Upload Image to Specific Template',
  operationId: 'Upload Image to Specific Template',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            description: 'Your template id.',
            example: '1',
            in: 'path',
            name: 'template_id',
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
              image: z
                .string()
                .exactOptional()
                .openapi({ description: 'Uploads your selected image file.' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ description: 'Uploads the image from the supplied URL.' }),
            })
            .openapi({
              example: { image: 'image.png', url: 'http://yourdomain.com/image.png' },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getEmailTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/email/templates/{template_id}',
  tags: ['Email Marketing'],
  summary: 'Get Specific Email Template',
  operationId: 'Get Specific Email Template',
  request: {
    params: z.object({
      template_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The email template id.',
            example: '291',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putEmailTemplatesTemplateIdRoute = createRoute({
  method: 'put',
  path: '/email/templates/{template_id}',
  tags: ['Email Marketing'],
  summary: 'Update an Email Template',
  operationId: 'Update an Email Template',
  request: {
    params: z.object({
      template_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the template to be updated.',
            example: '291',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your template body.' }),
              template_name: z
                .string()
                .openapi({ description: 'The intended name for the new template.' }),
            })
            .openapi({ required: ['template_name', 'body'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const deleteEmailTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/email/templates/{template_id}',
  tags: ['Email Marketing'],
  summary: 'Delete Email Template',
  operationId: 'Delete Email Template',
  request: {
    params: z.object({
      template_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your template id.',
            example: '25',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getFaxHistoryExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/fax/history/export?filename={filename}',
  tags: ['Fax'],
  summary: 'Export Fax History',
  operationId: 'Export Fax History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRoute = createRoute({
  method: 'get',
  path: '/fax/history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}',
  tags: ['Fax'],
  summary: 'Get Fax History',
  description: 'Get a list of Fax History.',
  operationId: 'Get Fax History',
  request: {
    params: z.object({
      date_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Customize result by setting from date (timestsamp)',
            example: '1457572619',
            in: 'path',
            name: 'date_from',
            required: true,
            schema: { type: 'number' },
          },
        }),
      date_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Customize result by setting to date (timestamp)',
            example: '1457573000',
            in: 'path',
            name: 'date_to',
            required: true,
            schema: { type: 'number' },
          },
        }),
      q: z
        .string()
        .openapi({
          param: {
            description: 'Custom query',
            example: 'status:Sent,status_code:201',
            in: 'path',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .openapi({
          param: {
            description: 'Order result by',
            example: 'subject:desc',
            in: 'path',
            name: 'order_by',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postFaxPriceRoute = createRoute({
  method: 'post',
  path: '/fax/price',
  tags: ['Fax'],
  summary: 'Calculate Price',
  request: { body: SendFaxBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getFaxReceiptsRoute = createRoute({
  method: 'get',
  path: '/fax/receipts',
  tags: ['Fax'],
  summary: 'List of Fax Delivery Receipts',
  operationId: 'List of Fax Delivery Receipts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postFaxReceiptsRoute = createRoute({
  method: 'post',
  path: '/fax/receipts',
  tags: ['Fax'],
  summary: 'Add a Test Delivery Receipt',
  operationId: 'Add a Test Delivery Receipt',
  request: { body: AddATestDeliveryReceiptBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putFaxReceiptsReadRoute = createRoute({
  method: 'put',
  path: '/fax/receipts-read',
  tags: ['Fax'],
  summary: 'Mark Fax Delivery Receipts as read',
  operationId: 'Mark Fax Delivery Receipts as read',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              date_before: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read.',
                }),
            })
            .openapi({ example: { date_before: 1441958441 }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getFaxReceiptsMessageIdRoute = createRoute({
  method: 'get',
  path: '/fax/receipts/{message_id}',
  tags: ['Fax'],
  summary: 'Get a Specific Fax Delivery Receipt',
  operationId: 'Get a Specific Fax Delivery Receipt',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'D2AF-479B-8955-6395D561DEF4" (required, number) - Message ID.',
            example: '"3FAC74F1',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postFaxSendRoute = createRoute({
  method: 'post',
  path: '/fax/send',
  tags: ['Fax'],
  summary: 'Send Fax',
  description:
    '**Letter File Options**\n\n**Use existing URL**\n\nWith this option, you can use an existing URL to a PDF document. For example, you might generate the pdf on your server.\n\n**Upload File to Our Server**\n\nWith this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/fax/send` endpoint.',
  operationId: 'Send Fax',
  request: { body: SendFaxBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putForgotPasswordRoute = createRoute({
  method: 'put',
  path: '/forgot-password',
  tags: ['Forgot Account'],
  summary: 'Forgot Password',
  operationId: 'Forgot Password',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().openapi({ description: 'Your username.' }) })
            .openapi({ example: { username: '0F6pKiiuca' }, required: ['username'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putForgotPasswordVerifyRoute = createRoute({
  method: 'put',
  path: '/forgot-password/verify',
  tags: ['Forgot Account'],
  summary: 'Verify Forgot Password',
  operationId: 'Verify Forgot Password',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              activation_token: z.string().openapi({ description: 'Your email activation token.' }),
              password: z.string().openapi({ description: 'Your new password.' }),
              subaccount_id: z.number().openapi({ description: 'Your subaccount id.' }),
            })
            .openapi({
              example: {
                activation_token: '9C648BAD-EB7F-4E7E-96BC-B433140C4F1F',
                password: '0F6pKiiuca',
                subaccount_id: 54,
              },
              required: ['subaccount_id', 'activation_token', 'password'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putForgotUsernameRoute = createRoute({
  method: 'put',
  path: '/forgot-username',
  tags: ['Forgot Account'],
  summary: 'Forgot Username',
  operationId: 'Forgot Username',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              country: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your country. Used to format phone number. This is required if phone_number is not in international-format.',
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Your email. This is required if phone_number is not present.',
                }),
              phone_number: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Your phone number. This is required if email is not present.',
                }),
            })
            .openapi({ example: { country: 'US', phone_number: '3108147982' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getListsRoute = createRoute({
  method: 'get',
  path: '/lists',
  tags: ['Contact Lists'],
  summary: 'Get all Contact Lists',
  operationId: 'Get all Contact Lists',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postListsRoute = createRoute({
  method: 'post',
  path: '/lists',
  tags: ['Contact Lists'],
  summary: 'Create a new contact list',
  operationId: 'Create a new contact list',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ list_name: z.string().openapi({ description: 'Your contact list name.' }) })
            .openapi({ example: { list_name: 'ListCT3QrVL4od' }, required: ['list_name'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const putListsFromListIdContactsContactIdToListIdRoute = createRoute({
  method: 'put',
  path: '/lists/{from_list_id}/contacts/{contact_id}/{to_list_id}',
  tags: ['Contacts'],
  summary: 'Transfer a Contact',
  description: 'Transfers a specific contact to another list.',
  operationId: 'Transfer a Contact',
  request: {
    params: z.object({
      from_list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'From list id.',
            example: '428',
            in: 'path',
            name: 'from_list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      contact_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Contact ID.',
            example: '1',
            in: 'path',
            name: 'contact_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      to_list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'To list id.',
            example: '429',
            in: 'path',
            name: 'to_list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getListsListIdRoute = createRoute({
  method: 'get',
  path: '/lists/{list_id}',
  tags: ['Contact Lists'],
  summary: 'Get a specific contact list',
  operationId: 'Get a specific contact list',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id you want to access.',
            example: '437',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putListsListIdRoute = createRoute({
  method: 'put',
  path: '/lists/{list_id}',
  tags: ['Contact Lists'],
  summary: 'Update a specific contact list',
  operationId: 'Update a specific contact list',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id you want to access.',
            example: '439',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              list_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Your new contact list name.' }),
            })
            .openapi({ example: { list_name: 'ListlPJf33ksjP' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const deleteListsListIdRoute = createRoute({
  method: 'delete',
  path: '/lists/{list_id}',
  tags: ['Contact Lists'],
  summary: 'Delete a specific contact list',
  operationId: 'Delete a specific contact list',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id you want to access.',
            example: '442',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getListsListIdContactsRoute = createRoute({
  method: 'get',
  path: '/lists/{list_id}/contacts',
  tags: ['Contacts'],
  summary: 'Get all Contacts in a List',
  operationId: 'Get all Contacts in a List',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id where your contacts belong.',
            example: '428',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postListsListIdContactsRoute = createRoute({
  method: 'post',
  path: '/lists/{list_id}/contacts',
  tags: ['Contacts'],
  summary: 'Create a new contact',
  description:
    'Note that the fields `phone_number`, `fax_number` and email` are all optional; however at least one of them must be specified, otherwise the API call will fail.',
  operationId: 'Create a new contact',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id where your contact be associated.',
            example: '428',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              address_city: z.string().exactOptional().openapi({ description: 'Contact city.' }),
              address_country: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact two-letter country code defined in ISO 3166.' }),
              address_line_1: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact address line 1.' }),
              address_line_2: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact address line 2.' }),
              address_postal_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact postal code.' }),
              address_state: z.string().exactOptional().openapi({ description: 'Contact state.' }),
              custom_1: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 1 text.' }),
              custom_2: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 2 text.' }),
              custom_3: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 3 text.' }),
              custom_4: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 4 text.' }),
              email: z.string().exactOptional().openapi({ description: 'Contact email.' }),
              fax_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact fax number.' }),
              first_name: z.string().exactOptional().openapi({ description: 'Contact firstname.' }),
              last_name: z.string().exactOptional().openapi({ description: 'Contact lastname.' }),
              organization_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Your organization name.' }),
              phone_number: z
                .string()
                .openapi({ description: 'Contact phone number in E.164 format.' }),
            })
            .openapi({
              example: {
                address_city: 'Nevada',
                address_country: 'US',
                address_line_1: 'Block 2',
                address_line_2: 'Cool Bldg.',
                address_postal_code: '36063',
                address_state: 'Las Vegas',
                custom_1: 'Custom 1',
                custom_2: 'Custom 2',
                custom_3: 'Custom 3',
                custom_4: 'Custom 4',
                email: 'ellen@diaz.com',
                fax_number: '+16783270696',
                first_name: 'Ellen',
                last_name: 'Diaz',
                organization_name: 'Awesome Organization',
                phone_number: '+16783270696',
              },
              required: ['phone_number'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getListsListIdContactsContactIdRoute = createRoute({
  method: 'get',
  path: '/lists/{list_id}/contacts/{contact_id}',
  tags: ['Contacts'],
  summary: 'Get a specific contact',
  operationId: 'Get a specific contact',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id you want to access.',
            example: '428',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      contact_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact id you want to access.',
            example: '552802',
            in: 'path',
            name: 'contact_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putListsListIdContactsContactIdRoute = createRoute({
  method: 'put',
  path: '/lists/{list_id}/contacts/{contact_id}',
  tags: ['Contacts'],
  summary: 'Update a specific contact',
  operationId: 'Update a specific contact',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Contact list id you want to access.',
            example: '428',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      contact_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Contact id you want to access.',
            example: '552802',
            in: 'path',
            name: 'contact_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              address_city: z.string().exactOptional().openapi({ description: 'Contact city.' }),
              address_country: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact two-letter country code defined in ISO 3166.' }),
              address_line_1: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact address line 1.' }),
              address_line_2: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact address line 2.' }),
              address_postal_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact postal code.' }),
              address_state: z.string().exactOptional().openapi({ description: 'Contact state.' }),
              custom_1: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 1 text.' }),
              custom_2: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 2 text.' }),
              custom_3: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 3 text.' }),
              custom_4: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact custom 4 text.' }),
              email: z.string().exactOptional().openapi({ description: 'Contact email.' }),
              fax_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact fax number.' }),
              first_name: z.string().exactOptional().openapi({ description: 'Contact firstname.' }),
              last_name: z.string().exactOptional().openapi({ description: 'Contact lastname.' }),
              organization_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact organization name.' }),
              phone_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Contact phone number in E.164 format.' }),
            })
            .openapi({
              example: {
                address_city: 'Nevada',
                address_country: 'US',
                address_line_1: 'Block 6',
                address_line_2: 'Cool Bldg.',
                address_postal_code: '36063',
                address_state: 'Las Vegas',
                custom_1: 'Custom S72oJ9Teba',
                custom_2: 'Custom NvrRJrKWeq',
                custom_3: 'Custom 2ws94p1Dop',
                custom_4: 'Custom Ku0AaIS5xb',
                email: 'ellen@diaz.com',
                fax_number: '+16783276356',
                first_name: 'Ellen',
                last_name: 'Diaz',
                organization_name: 'Awesome Organization',
                phone_number: '+16783275492',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const deleteListsListIdContactsContactIdRoute = createRoute({
  method: 'delete',
  path: '/lists/{list_id}/contacts/{contact_id}',
  tags: ['Contacts'],
  summary: 'Delete a specific contact',
  operationId: 'Delete a specific contact',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id you want to access.',
            example: '428',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      contact_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact id you want to access.',
            example: '552807',
            in: 'path',
            name: 'contact_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getListsListIdExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/lists/{list_id}/export?filename={filename}',
  tags: ['Contact Lists'],
  summary: 'Export Contacts List',
  operationId: 'Export Contacts List',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postListsListIdImportRoute = createRoute({
  method: 'post',
  path: '/lists/{list_id}/import',
  tags: ['Contact Lists'],
  summary: 'Import Contacts to List',
  operationId: 'Import Contacts to List',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id you want to access.',
            example: '437',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              field_order: z
                .array(z.any())
                .openapi({ description: 'Your field order for your contact import file.' }),
              file_url: z.string().openapi({ description: 'Path to your CSV import file.' }),
            })
            .openapi({
              example: {
                field_order: [
                  'phone',
                  'first_name',
                  'last_name',
                  'custom1',
                  'custom2',
                  'custom3',
                  'custom4',
                  'fax_number',
                  'organization_name',
                  'email',
                  'address_line_1',
                  'address_line_2',
                  'address_city',
                  'address_state',
                  'address_postal_code',
                  'address_country',
                ],
                file_url: 'http://yourdomain.com/import.csv',
              },
              required: ['file_url', 'field_order'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postListsListIdImportCsvPreviewRoute = createRoute({
  method: 'post',
  path: '/lists/{list_id}/import-csv-preview',
  tags: ['Contact Lists'],
  summary: 'Show CSV Import File Preview',
  description: 'Show first row of the csv import file.',
  operationId: 'Show CSV Import File Preview',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id.',
            example: '439',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              file_url: z.string().openapi({ description: 'Path to your CSV import file.' }),
            })
            .openapi({
              example: { file_url: 'http://yourdomain.com/5485EA6144/79E8/import.csv' },
              required: ['file_url'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getListsListIdImportFieldsRoute = createRoute({
  method: 'get',
  path: '/lists/{list_id}/import-fields',
  tags: ['Contact Lists'],
  summary: 'Get List of Acceptable Import Fields',
  operationId: 'Get List of Acceptable Import Fields',
  request: {
    params: z.object({
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putListsListIdRemoveDuplicatesRoute = createRoute({
  method: 'put',
  path: '/lists/{list_id}/remove-duplicates',
  tags: ['Contact Lists'],
  summary: 'Remove Duplicate Contacts',
  operationId: 'Remove Duplicate Contacts',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id.',
            example: '439',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z
                .array(z.any())
                .openapi({ description: "List of Contact's fields to be used for checking." }),
            })
            .openapi({
              example: {
                fields: [
                  'phone_number',
                  'first_name',
                  'last_name',
                  'fax_number',
                  'address_country',
                ],
              },
              required: ['fields'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putListsListIdRemoveOptedOutContactsOptOutListIdRoute = createRoute({
  method: 'put',
  path: '/lists/{list_id}/remove-opted-out-contacts/{opt_out_list_id}',
  tags: ['Contacts'],
  summary: 'Remove Opted Out Contacts',
  operationId: 'Remove Opted Out Contacts',
  request: {
    params: z.object({
      list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your contact list id.',
            example: '439',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      opt_out_list_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your opt out list id.',
            example: '512',
            in: 'path',
            name: 'opt_out_list_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putMmsCancelAllRoute = createRoute({
  method: 'put',
  path: '/mms/cancel-all',
  tags: ['MMS'],
  summary: 'Cancel All MMS',
  operationId: 'Cancel All MMS',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMmsHistoryExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/mms/history/export?filename={filename}',
  tags: ['MMS'],
  summary: 'Export MMS History',
  operationId: 'Export MMS History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRoute = createRoute({
  method: 'get',
  path: '/mms/history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}',
  tags: ['MMS'],
  summary: 'Get MMS History',
  operationId: 'Get MMS History',
  request: {
    params: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'A custom query.',
            example: 'list_id:429,direction:out',
            in: 'path',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .string()
        .openapi({
          param: {
            description: 'Sort records by.',
            example: 'subject:desc',
            in: 'path',
            name: 'order_by',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_from: z
        .string()
        .openapi({
          param: {
            description:
              '[Unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) (from) used to show records by date.',
            example: '1443501617',
            in: 'path',
            name: 'date_from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_to: z
        .string()
        .openapi({
          param: {
            description:
              '[Unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) (to) used to show records by date.',
            example: '1443501727',
            in: 'path',
            name: 'date_to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postMmsPriceRoute = createRoute({
  method: 'post',
  path: '/mms/price',
  tags: ['MMS'],
  summary: 'Get Price',
  operationId: 'Get Price',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your message.' }),
              country: z.string().exactOptional().openapi({ description: 'Recipient country.' }),
              custom_string: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your reference. Will be passed back with all replies and delivery reports.',
                }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
              from_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS.',
                }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "Your list ID if sending to a whole list. Can be used instead of 'to'.",
                }),
              media_file: z.string().openapi({ description: 'Media file you want to send.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
              subject: z.string().openapi({ description: 'Subject line. Maximum 20 characters.' }),
              to: z
                .string()
                .openapi({
                  description:
                    'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
                }),
            })
            .openapi({
              example: {
                media_file: 'http://yourdomain.com/tpLaX6A.gif',
                messages: [
                  {
                    body: 'This is a test body with special character: 英',
                    country: 'AU',
                    from: 'test',
                    source: 'php',
                    subject: 'This is a subject',
                    to: '+61437111222',
                  },
                ],
              },
              required: ['media_file', 'to', 'subject', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getMmsReceiptsRoute = createRoute({
  method: 'get',
  path: '/mms/receipts',
  tags: ['MMS'],
  summary: 'Get all Delivery Receipts',
  operationId: 'Get all Delivery Receipts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putMmsReceiptsReadRoute = createRoute({
  method: 'put',
  path: '/mms/receipts-read',
  tags: ['MMS'],
  summary: 'Mark Receipts As Read',
  operationId: 'Mark Receipts As Read',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMmsReceiptsMessageIdRoute = createRoute({
  method: 'get',
  path: '/mms/receipts/{message_id}',
  tags: ['MMS'],
  summary: 'Get Delivery Receipt',
  operationId: 'Get Delivery Receipt',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'Message ID.',
            example: '3E0DC217-7D0F-4C20-A3F2-E3362B938CAF',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postMmsSendRoute = createRoute({
  method: 'post',
  path: '/mms/send',
  tags: ['MMS'],
  summary: 'Send MMS',
  operationId: 'Send MMS',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your message.' }),
              country: z.string().exactOptional().openapi({ description: 'Recipient country.' }),
              custom_string: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your reference. Will be passed back with all replies and delivery reports.',
                }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The number to send from. Either leave blank or use a ClickSend number only.',
                }),
              from_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS.',
                }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "Your list ID if sending to a whole list. Can be used instead of 'to'.",
                }),
              media_file: z.string().openapi({ description: 'Media file you want to send.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
              subject: z.string().openapi({ description: 'Subject line. Maximum 20 characters.' }),
              to: z
                .string()
                .openapi({
                  description:
                    'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
                }),
            })
            .openapi({
              example: {
                media_file: 'http://yourdomain.com/tpLaX6A.gif',
                messages: [
                  {
                    body: 'This is a test body with special character: 英',
                    country: 'AU',
                    from: 'test',
                    source: 'php',
                    subject: 'This is a subject',
                    to: '+61437111222',
                  },
                ],
              },
              required: ['media_file', 'to', 'subject', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const putMmsMessageIdCancelRoute = createRoute({
  method: 'put',
  path: '/mms/{message_id}/cancel',
  tags: ['MMS'],
  summary: 'Cancel MMS',
  operationId: 'Cancel MMS',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'Message ID.',
            example: '52E3C025-FD9D-4C9F-B374-C7DF5337F6AF',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getNumbersRoute = createRoute({
  method: 'get',
  path: '/numbers',
  tags: ['Numbers'],
  summary: 'Get all Dedicated Numbers',
  operationId: 'Get all Dedicated Numbers',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postNumbersBuyDedicatedNumberRoute = createRoute({
  method: 'post',
  path: '/numbers/buy/{dedicated_number}',
  tags: ['Numbers'],
  summary: 'Buy dedicated number',
  operationId: 'Buy dedicated number',
  request: {
    params: z.object({
      dedicated_number: z
        .string()
        .openapi({
          param: {
            description: 'Your phone number in E.164 format.',
            example: '+12282060576',
            in: 'path',
            name: 'dedicated_number',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getNumbersSearchCountrySearch1SearchType2Route = createRoute({
  method: 'get',
  path: '/numbers/search/{country}?{search}=1&{search_type}=2',
  tags: ['Numbers'],
  summary: 'Search Dedicated Numbers by Country',
  operationId: 'Search Dedicated Numbers by Country',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Your preferred country.',
            example: 'US',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      search: z
        .string()
        .openapi({
          param: {
            description: 'Your search pattern or query.',
            example: '88',
            in: 'path',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      search_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'Your strategy for searching, 0 = starts with, 1 = anywhere, 2 = ends with.',
            example: '1',
            in: 'path',
            name: 'search_type',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostDirectMailCampaignsRoute = createRoute({
  method: 'get',
  path: '/post/direct-mail/campaigns',
  tags: ['Post Direct Mail'],
  summary: 'List Direct Mail Campaigns',
  description: 'Get list of direct mail campaigns.',
  operationId: 'List Direct Mail Campaigns',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostDirectMailCampaignsPriceRoute = createRoute({
  method: 'post',
  path: '/post/direct-mail/campaigns/price',
  tags: ['Post Direct Mail'],
  summary: 'Calculate Direct Mail Campaign Price',
  description: 'Calculate direct mail campaign price.',
  operationId: 'Calculate Direct Mail Campaign Price',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              areas: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'List of location where you want to send your campaign, and the quantity per location.',
                }),
              file_urls: z
                .array(z.any())
                .openapi({ description: 'Campaign file urls. You can submit max 2 file urls.' }),
              name: z.string().openapi({ description: 'Campaign name.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              size: z.string().openapi({ description: 'Campaign file size. It can be A5 or DL.' }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
            })
            .openapi({
              example: {
                areas: [
                  { location_id: 22, quantity: 12 },
                  { location_id: 21, quantity: 10 },
                  { location_id: 21, quantity: 10 },
                ],
                custom_string: 'Custom String',
                file_urls: [
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf',
                  'https://rest.clicksend.com/files/F3CA1167-381B-47FE-A146-3DF87BE7EEC2.pdf',
                ],
                name: 'My Campaign',
                schedule: 1477384503,
                size: 'A5',
                source: 'My Source',
              },
              required: ['name', 'size', 'file_urls'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostDirectMailCampaignsSendRoute = createRoute({
  method: 'post',
  path: '/post/direct-mail/campaigns/send',
  tags: ['Post Direct Mail'],
  summary: 'Create New Campaign',
  description: 'Create new direct mail campaign.',
  operationId: 'Create New Campaign',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              areas: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'List of location where you want to send your campaign, and the quantity per location.',
                }),
              file_urls: z
                .array(z.any())
                .openapi({ description: 'Campaign file urls. You can submit max 2 file urls.' }),
              name: z.string().openapi({ description: 'Campaign name.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              size: z.string().openapi({ description: 'Campaign file size. It can be A5 or DL.' }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
            })
            .openapi({
              example: {
                areas: [
                  { location_id: 1, quantity: 100 },
                  { location_id: 2, quantity: 100 },
                  { location_id: 3, quantity: 50 },
                ],
                file_urls: [
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf',
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf',
                ],
                name: 'My Campaign',
                schedule: 1477032023,
                size: 'A5',
                source: 'wordpress',
              },
              required: ['name', 'size', 'file_urls'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostDirectMailLocationsSearchCountryQQueryRoute = createRoute({
  method: 'get',
  path: '/post/direct-mail/locations/search/{country}/?q={query}',
  tags: ['Post Direct Mail'],
  summary: 'Search Locations',
  operationId: 'Search Locations',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country code.',
            example: 'AD',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      query: z
        .string()
        .openapi({
          param: {
            description: 'A postal code or place name.',
            example: 'AD100',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostLettersDetectAddressRoute = createRoute({
  method: 'post',
  path: '/post/letters/detect-address',
  tags: ['Post Address Detection'],
  summary: 'Detect Address',
  description:
    "The `detect-address` endpoint accepts either a letter in PDF format or an address string and attempts to convert it to a standard address format. Note that the PDF should be in standard address format, having the recipient's name and address listed at the top.\n\nThe endpoint accepts two types of data:\n1. A PDF file in `base64` encoding. In this case, submit the `base64`-encoded PDF file contents in the `content` field of the request body.\n2. An address string. In this case, submit the address in a string using the `address` field of the request body.",
  operationId: 'Detect Address',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                content: z
                  .string()
                  .openapi({ description: 'Your file contents encoded in `base64`.' }),
              })
              .openapi({ example: { content: 'Q29udGVudHMgb2YgZmlsZQ==' }, required: ['content'] }),
            z
              .object({
                address: z
                  .string()
                  .openapi({ description: 'Your file contents encoded in `base64`.' }),
              })
              .openapi({
                example: { address: 'John Doe, 123 Main Street, Perth WA 6000' },
                required: ['address'],
              }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostLettersHistoryRoute = createRoute({
  method: 'get',
  path: '/post/letters/history',
  tags: ['Post Letter'],
  summary: 'Get Post Letter History',
  operationId: 'Get Post Letter History',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostLettersHistoryExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/post/letters/history/export?filename={filename}',
  tags: ['Post Letter'],
  summary: 'Export Post Letter History',
  operationId: 'Export Post Letter History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostLettersPriceRoute = createRoute({
  method: 'post',
  path: '/post/letters/price',
  tags: ['Post Letter'],
  summary: 'Calculate Price',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              colour: z.number().exactOptional().openapi({ description: 'Is it in colored?' }),
              duplex: z.number().exactOptional().openapi({ description: 'Is it in duplex?' }),
              file_url: z.string().openapi({ description: 'Your URL to your PDF file.' }),
              priority_post: z
                .number()
                .exactOptional()
                .openapi({ description: 'Is it priority? 0 = Not Priority, 1 = Priority.' }),
              recipients: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Your recipients.' }),
              template_used: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)).',
                }),
            })
            .openapi({
              example: {
                colour: 1,
                duplex: 0,
                file_url: 'http://yourdomain.com/file.pdf',
                priority_post: 0,
                recipients: [
                  {
                    address_city: 'CITY',
                    address_country: 'AU',
                    address_line_1: 'Address 1',
                    address_line_2: 'Address 2',
                    address_name: 'My Home Address',
                    address_postal_code: 123456,
                    address_state: 'State',
                    custom_string: 'Custom kn0ChLhwn6',
                    return_address_id: 1,
                    schedule: 1449573604,
                  },
                ],
                template_used: 1,
              },
              required: ['file_url'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostLettersSendRoute = createRoute({
  method: 'post',
  path: '/post/letters/send',
  tags: ['Post Letter'],
  summary: 'Send Post Letter',
  description:
    "**Supported File Types**\nWe support `pdf`, `docx` and `doc` files. Contact us to add support for any other file type. If you're using `docx` or `doc` files, you'll need to convert the file first using our uploads endpoint with the querystring parameter `convert=post` e.g. `POST /uploads?convert=post`. This will return a URL to the converted pdf file that can be used in the `/post/letters/send` endpoint.\n\n**Letter File Options**\n\n**Use existing URL**\n\nWith this option, you can use an existing URL to a `pdf` document. For example, you might generate the `pdf` on your server.\n\n**Upload File to Our Server**\n\nWith this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/post/letters/send` endpoint.",
  operationId: 'Send Post Letter',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              colour: z
                .number()
                .exactOptional()
                .openapi({ description: 'Is it in colour? 0 = Black and White, 1 = Colour.' }),
              duplex: z
                .number()
                .exactOptional()
                .openapi({ description: 'Is it in duplex? 0 = Simplex, 1 = Duplex.' }),
              file_url: z.string().openapi({ description: 'Your URL to your PDF file.' }),
              priority_post: z
                .number()
                .exactOptional()
                .openapi({ description: 'Is it priority? 0 = Not Priority, 1 = Priority.' }),
              recipients: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Your recipients.' }),
              template_used: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)).',
                }),
            })
            .openapi({
              example: {
                colour: 1,
                duplex: 0,
                file_url: 'http://yourdomain.com/file.pdf',
                priority_post: 0,
                recipients: [
                  {
                    address_city: 'CITY',
                    address_country: 'AU',
                    address_line_1: 'Address 1',
                    address_line_2: 'Address 2',
                    address_name: 'My Home Address',
                    address_postal_code: 123456,
                    address_state: 'State',
                    custom_string: 'Custom kn0ChLhwn6',
                    return_address_id: 1,
                    schedule: 1449573604,
                  },
                ],
                template_used: 1,
              },
              required: ['file_url'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostPostcardsExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/post/postcards/export?filename={filename}',
  tags: ['Postcards'],
  summary: 'Export Postcard History',
  operationId: 'Export Postcard History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Filename for the export file.',
            example: 'myexport.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostPostcardsHistoryRoute = createRoute({
  method: 'get',
  path: '/post/postcards/history',
  tags: ['Postcards'],
  summary: 'Get Postcard History',
  operationId: 'Get Postcard History',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostPostcardsPriceRoute = createRoute({
  method: 'post',
  path: '/post/postcards/price',
  tags: ['Postcards'],
  summary: 'Calculate Pricing',
  description:
    'For `file_urls` field. You can attach at least 1 and max of 2 PDF file urls.\n\n- Supply a single pdf with 2 pages (front and back)\n\n- Supply 2 urls to seperate PDFs',
  operationId: 'Calculate Pricing',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              file_urls: z
                .array(z.any())
                .openapi({ description: 'Postcard file urls. You can submit max 2 file urls.' }),
              recipients: z.array(z.any()).openapi({ description: 'Your recipients.' }),
            })
            .openapi({
              example: {
                file_urls: [
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf',
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf',
                ],
                recipients: [
                  {
                    address_city: 'City',
                    address_country: 'AU',
                    address_line_1: 'Address 1',
                    address_line_2: '',
                    address_name: 'John Smith',
                    address_postal_code: '123456',
                    address_state: 'State',
                    custom_string: 'Custom abc123',
                    return_address_id: 1,
                  },
                ],
              },
              required: ['file_urls', 'recipients'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostPostcardsSendRoute = createRoute({
  method: 'post',
  path: '/post/postcards/send',
  tags: ['Postcards'],
  summary: 'Send Postcard',
  description:
    "**Supported File Types**\nWe support PDF, docx and doc. Contact us to add support for any other file type. If you're using docx or doc files, you'll need to convert the file first using our uploads endpoint with the querystring parameter ?convert=post. e.g. POST /uploads?convert=post. This will return a URL to the converted pdf file that can be used in the /post/postcards/send endpoint.\n\n**Postcard File Options**\n\n**Use existing URL**\n\nWith this option, you can use an existing URL to a PDF document. For example, you might generate the pdf on your server.\n\nFor `file_urls` field. You can attach at least 1 and max of 2 PDF file urls.\n\n- Supply a single pdf with 2 pages (front and back)\n\n- Supply 2 urls to seperate PDFs\n\n**Upload File to Our Server**\n\nWith this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/post/postcards/send` endpoint.",
  operationId: 'Send Postcard',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              file_urls: z
                .array(z.any())
                .openapi({ description: 'Postcard file urls. You can submit max 2 file urls.' }),
              recipients: z.array(z.any()).openapi({ description: 'Your recipients.' }),
            })
            .openapi({
              example: {
                file_urls: [
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf',
                  'https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf',
                ],
                recipients: [
                  {
                    address_city: 'City',
                    address_country: 'AU',
                    address_line_1: 'Address 1',
                    address_line_2: '',
                    address_name: 'John Smith',
                    address_postal_code: '123456',
                    address_state: 'State',
                    custom_string: 'Custom abc123',
                    return_address_id: 1,
                  },
                ],
              },
              required: ['file_urls', 'recipients'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostReturnAddressesRoute = createRoute({
  method: 'get',
  path: '/post/return-addresses',
  tags: ['Post Letter'],
  summary: 'Get List of Post Return Addresses',
  operationId: 'Get List of Post Return Addresses',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postPostReturnAddressesRoute = createRoute({
  method: 'post',
  path: '/post/return-addresses',
  tags: ['Post Letter'],
  summary: 'Create a Post Return Address',
  operationId: 'Create a Post Return Address',
  request: { body: CreateAPostReturnAddressBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPostReturnAddressesReturnAddressIdRoute = createRoute({
  method: 'get',
  path: '/post/return-addresses/{return_address_id}',
  tags: ['Post Letter'],
  summary: 'Get Post Return Address',
  operationId: 'Get Post Return Address',
  request: {
    params: z.object({
      return_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your return address id.',
            example: '14',
            in: 'path',
            name: 'return_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putPostReturnAddressesReturnAddressIdRoute = createRoute({
  method: 'put',
  path: '/post/return-addresses/{return_address_id}',
  tags: ['Post Letter'],
  summary: 'Update Post Return Address',
  operationId: 'Update Post Return Address',
  request: {
    params: z.object({
      return_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your return address id.',
            example: '14',
            in: 'path',
            name: 'return_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: CreateAPostReturnAddressBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deletePostReturnAddressesReturnAddressIdRoute = createRoute({
  method: 'delete',
  path: '/post/return-addresses/{return_address_id}',
  tags: ['Post Letter'],
  summary: 'Delete Post Return Address',
  operationId: 'Delete Post Return Address',
  request: {
    params: z.object({
      return_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your return address id.',
            example: '12',
            in: 'path',
            name: 'return_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPricingCountryCurrencyCurrencyRoute = createRoute({
  method: 'get',
  path: '/pricing/{country}?currency={currency}',
  tags: ['Pricing'],
  summary: 'Get Country Pricing',
  operationId: 'Get Country Pricing',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Two-letter representation of the country.',
            example: 'AU',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      currency: z
        .string()
        .openapi({
          param: {
            description: 'Three-letter representation of the currency.',
            example: 'AUD',
            in: 'path',
            name: 'currency',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRechargeCreditCardRoute = createRoute({
  method: 'get',
  path: '/recharge/credit-card',
  tags: ['Account Recharge'],
  summary: 'Get Credit Card info',
  operationId: 'Get Credit Card info',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putRechargeCreditCardRoute = createRoute({
  method: 'put',
  path: '/recharge/credit-card',
  tags: ['Account Recharge'],
  summary: 'Update Credit Card info',
  operationId: 'Update Credit Card info',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bank_name: z
                .string()
                .openapi({ description: "Your bank's name that issued the credit card." }),
              cvc: z.number().openapi({ description: 'Your CVC digits.' }),
              expiry_month: z.number().openapi({ description: 'Your credit card expiry month.' }),
              expiry_year: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your credit card expiry year.' }),
              name: z.string().openapi({ description: 'Your name.' }),
              number: z.number().exactOptional().openapi({ description: 'Your credit card no.' }),
            })
            .openapi({
              example: {
                bank_name: 'Robotic Banking',
                cvc: '123',
                expiry_month: '05',
                expiry_year: '2016',
                name: 'Roland Robot',
                number: '5520000000000000',
              },
              required: ['expiry_month', 'cvc', 'name', 'bank_name'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRechargePackagesCountryCountryRoute = createRoute({
  method: 'get',
  path: '/recharge/packages?country={country}',
  tags: ['Account Recharge'],
  summary: 'List of Packages',
  operationId: 'List of Packages',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Your country.',
            example: '"AU"',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putRechargePurchasePackageIdRoute = createRoute({
  method: 'put',
  path: '/recharge/purchase/{package_id}',
  tags: ['Account Recharge'],
  summary: 'Purchase a Package',
  operationId: 'Purchase a Package',
  request: {
    params: z.object({
      package_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your package id.',
            example: '1',
            in: 'path',
            name: 'package_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRechargeTransactionsRoute = createRoute({
  method: 'get',
  path: '/recharge/transactions',
  tags: ['Account Recharge'],
  summary: 'Get Transactions',
  operationId: 'Get Transactions',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRechargeTransactionsTransactionIdRoute = createRoute({
  method: 'get',
  path: '/recharge/transactions/{transaction_id}',
  tags: ['Account Recharge'],
  summary: 'Get a specific transaction',
  operationId: 'Get a specific transaction',
  request: {
    params: z.object({
      transaction_id: z
        .string()
        .openapi({
          param: {
            description: '1c65-47fa-aea2-3ded9ed57557 (number, required) - Your transction id.',
            example: 'cb726c65',
            in: 'path',
            name: 'transaction_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getReferralAccountsRoute = createRoute({
  method: 'get',
  path: '/referral/accounts',
  tags: ['Referral Accounts'],
  summary: 'Get List of Referral Accounts',
  operationId: 'Get List of Referral Accounts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getResellerRoute = createRoute({
  method: 'get',
  path: '/reseller',
  tags: ['Reseller'],
  summary: 'Get Reseller Setting',
  description: 'Get reseller setting.',
  operationId: 'Get Reseller Setting',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putResellerRoute = createRoute({
  method: 'put',
  path: '/reseller',
  tags: ['Reseller'],
  summary: 'Update Reseller Setting',
  description: 'Update a specific reseller setting.',
  operationId: 'Update Reseller Setting',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              allow_public_signups: z.number().openapi({ description: 'Allow public signups.' }),
              colour_navigation: z.string().openapi({ description: 'Colour navigation.' }),
              company_name: z.string().openapi({ description: 'Company name.' }),
              default_margin: z.number().openapi({ description: 'Default margin.' }),
              default_margin_numbers: z
                .number()
                .openapi({ description: 'Default margin numbers.' }),
              logo_url_dark: z.string().openapi({ description: 'Logo URL (dark)' }),
              logo_url_light: z.string().openapi({ description: 'Logo URL (light)' }),
              subdomain: z.string().openapi({ description: 'Subdomain.' }),
              trial_balance: z.number().openapi({ description: 'Trial balance.' }),
            })
            .openapi({
              example: {
                allow_public_signups: 1,
                colour_navigation: '#9999FF',
                company_name: 'MyCompany',
                default_margin: 100,
                default_margin_numbers: 150,
                logo_url_dark: 'http://yourdomain.com/dark',
                logo_url_light: 'http://yourdomain.com/light',
                subdomain: 'subdomain',
                trial_balance: 50,
              },
              required: [
                'allow_public_signups',
                'default_margin',
                'default_margin_numbers',
                'trial_balance',
                'subdomain',
                'colour_navigation',
                'logo_url_light',
                'logo_url_dark',
                'company_name',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getResellerAccountsRoute = createRoute({
  method: 'get',
  path: '/reseller/accounts',
  tags: ['Reseller Accounts'],
  summary: 'List of Reseller Accounts',
  description: 'Get list of Reseller Accounts',
  operationId: 'List of Reseller Accounts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postResellerAccountsRoute = createRoute({
  method: 'post',
  path: '/reseller/accounts',
  tags: ['Reseller Accounts'],
  summary: 'Create Reseller Account',
  operationId: 'Create Reseller Account',
  request: { body: CreateResellerAccountBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postResellerAccountsPublicRoute = createRoute({
  method: 'post',
  path: '/reseller/accounts-public',
  tags: ['Reseller Accounts'],
  summary: 'Create Reseller Account - Public',
  operationId: 'Create Reseller Account - Public',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account_name: z.string().openapi({ description: 'Your delivery to value.' }),
              country: z.string().openapi({ description: 'Client country.' }),
              password: z.string().openapi({ description: 'Your password.' }),
              reseller_user_id: z.number().openapi({ description: 'Reseller User ID.' }),
              user_email: z.string().openapi({ description: 'Your email.' }),
              user_first_name: z.string().openapi({ description: 'Your first name.' }),
              user_last_name: z.string().openapi({ description: 'Your last name.' }),
              user_phone: z.string().openapi({ description: 'Your phone number in E.164 format.' }),
              username: z.string().openapi({ description: 'Your username.' }),
            })
            .openapi({
              example: {
                account_name: 'The Awesome Company',
                country: 'AU',
                password: 'pass',
                reseller_user_id: 1,
                user_email: 'johnis@awesome.com',
                user_first_name: 'John',
                user_last_name: 'Awesome',
                user_phone: '+61261063270',
                username: 'john_awesome',
              },
              required: [
                'reseller_user_id',
                'username',
                'password',
                'user_email',
                'user_phone',
                'user_first_name',
                'user_last_name',
                'account_name',
                'country',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getResellerAccountsClientUserIdRoute = createRoute({
  method: 'get',
  path: '/reseller/accounts/{client_user_id}',
  tags: ['Reseller Accounts'],
  summary: 'Get Reseller Account',
  description: 'Get a specific reseller account.',
  operationId: 'Get Reseller Account',
  request: {
    params: z.object({
      client_user_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The client user id.',
            example: '24',
            in: 'path',
            name: 'client_user_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putResellerAccountsClientUserIdRoute = createRoute({
  method: 'put',
  path: '/reseller/accounts/{client_user_id}',
  tags: ['Reseller Accounts'],
  summary: 'Update Reseller Account',
  operationId: 'Update Reseller Account',
  request: {
    params: z.object({
      client_user_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your client user id.',
            example: '24',
            in: 'path',
            name: 'client_user_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: CreateResellerAccountBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putResellerTransferCreditRoute = createRoute({
  method: 'put',
  path: '/reseller/transfer-credit',
  tags: ['Reseller Accounts'],
  summary: 'Transfer Credit',
  operationId: 'Transfer Credit',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              balance: z.number().openapi({ description: 'Your amount.' }),
              client_user_id: z.string().openapi({ description: 'Your client user id.' }),
              currency: z.string().openapi({ description: 'Your currency.' }),
            })
            .openapi({
              example: { balance: 12, client_user_id: 60, currency: 'USD' },
              required: ['client_user_id', 'balance', 'currency'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getResellerSubdomainRoute = createRoute({
  method: 'get',
  path: '/reseller/{subdomain}',
  tags: ['Reseller'],
  summary: 'Reseller By Subdomain',
  description: 'Get reseller setting by subdomin.',
  operationId: 'Reseller By Subdomain',
  request: {
    params: z.object({
      subdomain: z
        .string()
        .openapi({
          param: {
            description: 'Subdomain',
            example: 'mysubdomain',
            in: 'path',
            name: 'subdomain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSdkDownloadTypeRoute = createRoute({
  method: 'get',
  path: '/sdk-download/{type}',
  tags: ['SDK'],
  summary: 'SDK Download',
  operationId: 'SDK Download',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'Supported types.',
            example: 'cs, java, android, objectivec, angular, ruby, python, php, nodejs, go',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSearchContactsListsQQRoute = createRoute({
  method: 'get',
  path: '/search/contacts-lists?q={q}',
  tags: ['Search'],
  summary: 'Search Contacts-Lists',
  operationId: 'Search Contacts-Lists',
  request: {
    params: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'Your keyword or query.',
            example: 'Gorne',
            in: 'path',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsCampaignsRoute = createRoute({
  method: 'get',
  path: '/sms-campaigns',
  tags: ['SMS Campaigns'],
  summary: 'Get list of SMS Campaigns',
  operationId: 'Get list of SMS Campaigns',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsCampaignsPriceRoute = createRoute({
  method: 'post',
  path: '/sms-campaigns/price',
  tags: ['SMS Campaigns'],
  summary: 'Calculate Price for SMS Campaign',
  operationId: 'Calculate Price for SMS Campaign',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your campaign message.' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
              list_id: z.number().openapi({ description: 'Your list id.' }),
              name: z.string().openapi({ description: 'Your campaign name.' }),
            })
            .openapi({
              example: {
                body: '(First Name), this is your new campaign message.',
                from: '+61353787448',
                list_id: 428,
                name: 'My Campaign 1',
              },
              required: ['list_id', 'name', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsCampaignsSendRoute = createRoute({
  method: 'post',
  path: '/sms-campaigns/send',
  tags: ['SMS Campaigns'],
  summary: 'Use Short URL',
  description:
    'This is functionally identical to the **POST /sms-campaigns/send** endpoint, other than adding the `smsg.us/xxxxx` string to the message body additional `url_to_shorten` parameter.',
  operationId: 'Use Short URL',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your campaign message.' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
              list_id: z.number().openapi({ description: 'Your list id.' }),
              name: z.string().openapi({ description: 'Your campaign name.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              url_to_shorten: z
                .string()
                .openapi({
                  description:
                    'The URL you want to shorten (only required when using this feature). This must be only `http` or `https`.',
                }),
            })
            .openapi({
              example: {
                body: 'This is my new campaign message. Visit this url: smsg.us/xxxxx',
                from: '+61353787448',
                list_id: 428,
                name: 'My Campaign 1',
                schedule: 1444821615,
                url_to_shorten: 'http://yourdomain.com/',
              },
              required: ['list_id', 'name', 'body', 'url_to_shorten'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsCampaignsCampaignIdLinkExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/sms-campaigns/{campaign_id}/link-export?filename={filename}',
  tags: ['SMS Campaigns'],
  summary: 'Link Tracking Export',
  description: 'Compile all link tracking for the specified campaign into a CSV for download.',
  operationId: 'Link Tracking Export',
  request: {
    params: z.object({
      campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your campaign id.',
            example: '1',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsCampaignsCampaignIdLinkStatisticsRoute = createRoute({
  method: 'get',
  path: '/sms-campaigns/{campaign_id}/link-statistics',
  tags: ['SMS Campaigns'],
  summary: 'Link Statistics',
  description:
    "Get the breakdown of statistics for your campaign. Note that the returned values vary depending on your specific customers' interaction, so it's not safe to assume a value will always be specified.",
  operationId: 'Link Statistics',
  request: {
    params: z.object({
      campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your campaign id.',
            example: '1',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsCampaignsCampaignIdLinkTrackingRoute = createRoute({
  method: 'get',
  path: '/sms-campaigns/{campaign_id}/link-tracking',
  tags: ['SMS Campaigns'],
  summary: 'Link Tracking',
  description:
    "This endpoint gives you a paginated overview of all the links in a particular campaign, and who has and hasn't visited them.",
  operationId: 'Link Tracking',
  request: {
    params: z.object({
      campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your campaign id.',
            example: '1',
            in: 'path',
            name: 'campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsCampaignsSmsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/sms-campaigns/{sms_campaign_id}',
  tags: ['SMS Campaigns'],
  summary: 'Get SMS Campaign',
  operationId: 'Get SMS Campaign',
  request: {
    params: z.object({
      sms_campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your SMS campaign id.',
            example: '1',
            in: 'path',
            name: 'sms_campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsCampaignsSmsCampaignIdRoute = createRoute({
  method: 'put',
  path: '/sms-campaigns/{sms_campaign_id}',
  tags: ['SMS Campaigns'],
  summary: 'Update an SMS Campaign',
  operationId: 'Update an SMS Campaign',
  request: {
    params: z.object({
      sms_campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your SMS Campaign id.',
            example: '1',
            in: 'path',
            name: 'sms_campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your campaign message.' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
              list_id: z.number().openapi({ description: 'Your list id.' }),
              name: z.string().openapi({ description: 'Your campaign name.' }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
            })
            .openapi({
              example: {
                body: 'his is an awesome message.',
                from: '+61353787447',
                list_id: 428,
                name: 'Awesome campaign.',
                schedule: 1444821615,
              },
              required: ['list_id', 'name', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsCampaignsSmsCampaignIdCancelRoute = createRoute({
  method: 'put',
  path: '/sms-campaigns/{sms_campaign_id}/cancel',
  tags: ['SMS Campaigns'],
  summary: 'Cancel an SMS Campaign',
  operationId: 'Cancel an SMS Campaign',
  request: {
    params: z.object({
      sms_campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your SMS Campaign id.',
            example: '1',
            in: 'path',
            name: 'sms_campaign_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsCancelAllRoute = createRoute({
  method: 'put',
  path: '/sms/cancel-all',
  tags: ['SMS'],
  summary: 'Cancel all Scheduled Messages',
  operationId: 'Cancel all Scheduled Messages',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsEmailSmsRoute = createRoute({
  method: 'get',
  path: '/sms/email-sms',
  tags: ['Email-to-SMS Allowed Address'],
  summary: 'List of Email-to-SMS Allowed Address',
  description: 'Get list of allowed email addresses.',
  operationId: 'List of Email-to-SMS Allowed Address',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsEmailSmsRoute = createRoute({
  method: 'post',
  path: '/sms/email-sms',
  tags: ['Email-to-SMS Allowed Address'],
  summary: 'Create Email to SMS Allowed Address',
  description: 'Create an allowed email address.',
  operationId: 'Create Email to SMS Allowed Address',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email_address: z.string().openapi({ description: 'Your email address.' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
            })
            .openapi({
              example: { email_address: 'Cv3p0@gmail.com', from: '+17128845887' },
              required: ['email_address'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getSmsEmailSmsStrippedStringsRoute = createRoute({
  method: 'get',
  path: '/sms/email-sms-stripped-strings',
  tags: ['Email-to-SMS Stripped Strings'],
  summary: 'List Stripped Strings',
  operationId: 'List Stripped Strings',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsEmailSmsStrippedStringsRoute = createRoute({
  method: 'post',
  path: '/sms/email-sms-stripped-strings',
  tags: ['Email-to-SMS Stripped Strings'],
  summary: 'Create Stripped String',
  operationId: 'Create Stripped String',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              strip_string: z
                .string()
                .openapi({
                  description: 'The string that you want to strip from the body of email.',
                }),
            })
            .openapi({ example: { strip_string: '~~~test~~~' }, required: ['strip_string'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsEmailSmsStrippedStringsRuleIdRoute = createRoute({
  method: 'get',
  path: '/sms/email-sms-stripped-strings/{rule_id}',
  tags: ['Email-to-SMS Stripped Strings'],
  summary: 'Find Specific Stripped String',
  operationId: 'Find Specific Stripped String',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The rule id you want to access.',
            example: '18',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsEmailSmsStrippedStringsRuleIdRoute = createRoute({
  method: 'put',
  path: '/sms/email-sms-stripped-strings/{rule_id}',
  tags: ['Email-to-SMS Stripped Strings'],
  summary: 'Update Stripped String',
  operationId: 'Update Stripped String',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The rule id you want to access.',
            example: '20',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              strip_string: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The string that you want to strip from the body of email.',
                }),
            })
            .openapi({ example: { strip_string: '~~~test1~~~' }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const deleteSmsEmailSmsStrippedStringsRuleIdRoute = createRoute({
  method: 'delete',
  path: '/sms/email-sms-stripped-strings/{rule_id}',
  tags: ['Email-to-SMS Stripped Strings'],
  summary: 'Delete Stripped String',
  operationId: 'Delete Stripped String',
  request: {
    params: z.object({
      rule_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The rule id you want to access.',
            example: '20',
            in: 'path',
            name: 'rule_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsEmailSmsEmailAddressIdRoute = createRoute({
  method: 'get',
  path: '/sms/email-sms/{email_address_id}',
  tags: ['Email-to-SMS Allowed Address'],
  summary: 'Get specific Email-to-SMS Allowed Address',
  description: 'Get a specific allowed email address.',
  operationId: 'Get specific Email-to-SMS Allowed Address',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your email address id.',
            example: '113',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsEmailSmsEmailAddressIdRoute = createRoute({
  method: 'put',
  path: '/sms/email-sms/{email_address_id}',
  tags: ['Email-to-SMS Allowed Address'],
  summary: 'Update Email-to-SMS Allowed Address',
  description: 'Update a specific allowed email address.',
  operationId: 'Update Email-to-SMS Allowed Address',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your email address id.',
            example: '107',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email_address: z.string().openapi({ description: 'Your email address.' }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
            })
            .openapi({
              example: { email_address: 'pfvRZ@gmail.com', from: '+17128842283' },
              required: ['email_address'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const deleteSmsEmailSmsEmailAddressIdRoute = createRoute({
  method: 'delete',
  path: '/sms/email-sms/{email_address_id}',
  tags: ['Email-to-SMS Allowed Address'],
  summary: 'Delete Email-to-SMS Allowed Address',
  description: 'Delete a specific allowed email address.',
  operationId: 'Delete Email-to-SMS Allowed Address',
  request: {
    params: z.object({
      email_address_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Your email address id.',
            example: '107',
            in: 'path',
            name: 'email_address_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsHistoryExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/sms/history/export?filename={filename}',
  tags: ['SMS'],
  summary: 'Export SMS History',
  operationId: 'Export SMS History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsHistoryDateFromDateFromDateToDateToRoute = createRoute({
  method: 'get',
  path: '/sms/history?date_from={date_from}&date_to={date_to}',
  tags: ['SMS'],
  summary: 'Get all History',
  description:
    "**SMS Delivery Status**\n\n**Status (status field)**\n\n| Status | Description |\n|---|---|---|\n| `Completed` | Added to delivery queue. Waiting to be sent to the network.|\n| `Sent` | Message sent to the network.|\n| `Cancelled` | Message cancelled.|\n| `Scheduled` | Message scheduled.|\n| `WaitApproval` | Waiting approval by our team. This is temporary and will change to 'Sent' once approved. This only happens for a few messages that are flagged for approval by our automated spam-detection system.|\n\n**Status Codes (status_code field)**\n\n| Code | Text | Description |\n|---|---|---|\n| `200` | Sent by network| Temporary success|\n| `201` | Received on handset| Permanent success|\n| `300` | Delivery failure| Permanent failure|\n| `301` | Delivery failure| Permanent failure|\n| `302` | Delivery failure| Temporary failure - supplier routing issue|",
  operationId: 'Get all History',
  request: {
    params: z.object({
      date_from: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp (from) used to show records by date.',
            example: '1449459940',
            in: 'path',
            name: 'date_from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_to: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp (to) used to show recrods by date.',
            example: '1449659940',
            in: 'path',
            name: 'date_to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsInboundRoute = createRoute({
  method: 'get',
  path: '/sms/inbound',
  tags: ['SMS'],
  summary: 'Get all Inbound SMS - Pull',
  operationId: 'Get all Inbound SMS - Pull',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsInboundRoute = createRoute({
  method: 'post',
  path: '/sms/inbound',
  tags: ['SMS'],
  summary: 'Add a Test Inbound SMS',
  operationId: 'Add a Test Inbound SMS',
  request: { body: AddATestDeliveryReceiptBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsInboundReadRoute = createRoute({
  method: 'put',
  path: '/sms/inbound-read',
  tags: ['SMS'],
  summary: 'Mark all Inbound SMS as read',
  operationId: 'Mark all Inbound SMS as read',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              date_before: z
                .number()
                .openapi({
                  description:
                    'An optional timestamp - mark all as read before this timestamp. If not given, all messages will be marked as read.',
                }),
            })
            .openapi({ example: { date_before: 1442398100 }, required: ['date_before'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsInboundReadMessageIdRoute = createRoute({
  method: 'put',
  path: '/sms/inbound-read/{message_id}',
  tags: ['SMS'],
  summary: 'Mark a specific Inbound SMS as read',
  operationId: 'Mark a specific Inbound SMS as read',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'Message ID. Must be a valid GUID.',
            example: 'C557B56E-83C0-4070-A74C-9BF05474B418',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsInboundOutboundMessageIdRoute = createRoute({
  method: 'get',
  path: '/sms/inbound/{outbound_message_id}',
  tags: ['SMS'],
  summary: 'Get Specific Inbound - Pull',
  operationId: 'Get Specific Inbound - Pull',
  request: {
    params: z.object({
      outbound_message_id: z
        .string()
        .openapi({
          param: {
            description:
              'Message ID of the original outbound message, to which the inbound message is a reply. Must be a valid GUID.',
            example: 'C557B56E-83C0-4070-A74C-9BF05474B418',
            in: 'path',
            name: 'outbound_message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsPriceRoute = createRoute({
  method: 'post',
  path: '/sms/price',
  tags: ['SMS'],
  summary: 'Calculate Price',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your message.' }),
              country: z.string().exactOptional().openapi({ description: 'Recipient country.' }),
              custom_string: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your reference. Will be passed back with all replies and delivery reports.',
                }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "Your list ID if sending to a whole list. Can be used instead of 'to'.",
                }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
              to: z
                .string()
                .openapi({
                  description:
                    'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
                }),
            })
            .openapi({
              example: {
                messages: [
                  {
                    body: 'Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.',
                    custom_string: 'this is a test',
                    from: 'sendmobile',
                    schedule: 1436874701,
                    source: 'php',
                    to: '+61411111111',
                  },
                  {
                    body: 'Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.',
                    custom_string: 'this is a test',
                    from: 'sendlist',
                    list_id: 428,
                    schedule: 1436876011,
                    source: 'php',
                  },
                ],
              },
              required: ['to', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getSmsReceiptsRoute = createRoute({
  method: 'get',
  path: '/sms/receipts',
  tags: ['SMS'],
  summary: 'Get all Delivery Receipts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsReceiptsRoute = createRoute({
  method: 'post',
  path: '/sms/receipts',
  tags: ['SMS'],
  summary: 'Add a Test Delivery Receipt',
  request: { body: AddATestDeliveryReceiptBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsReceiptsReadRoute = createRoute({
  method: 'put',
  path: '/sms/receipts-read',
  tags: ['SMS'],
  summary: 'Mark Delivery Receipts as read',
  operationId: 'Mark Delivery Receipts as read',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              date_before: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'An optional timestamp - mark all as read before this timestamp. If not given, all receipts will be marked as read.',
                }),
            })
            .openapi({ example: { date_before: 1441958441 }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSmsReceiptsMessageIdRoute = createRoute({
  method: 'get',
  path: '/sms/receipts/{message_id}',
  tags: ['SMS'],
  summary: 'Get a Specific Delivery Receipt',
  operationId: 'Get a Specific Delivery Receipt',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'Your message id.',
            example: '88AB118E EB1B 478C 98CE 6C73ABA23F67',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsSendRoute = createRoute({
  method: 'post',
  path: '/sms/send',
  tags: ['SMS'],
  summary: 'Send an SMS',
  description: 'You can post **up to 1000 messages** with each API call.',
  operationId: 'Send an SMS',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your message.' }),
              country: z.string().exactOptional().openapi({ description: 'Recipient country.' }),
              custom_string: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your reference. Will be passed back with all replies and delivery reports.',
                }),
              from: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).',
                }),
              from_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS.',
                }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "Your list ID if sending to a whole list. Can be used instead of 'to'.",
                }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
              to: z
                .string()
                .openapi({
                  description:
                    'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
                }),
            })
            .openapi({
              example: {
                messages: [
                  {
                    body: 'Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.',
                    custom_string: 'this is a test',
                    from: 'sendmobile',
                    schedule: 1436874701,
                    source: 'php',
                    to: '+61411111111',
                  },
                  {
                    body: 'Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.',
                    custom_string: 'this is a test',
                    from: 'sendlist',
                    list_id: 428,
                    schedule: 1436876011,
                    source: 'php',
                  },
                ],
              },
              required: ['to', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getSmsTemplatesRoute = createRoute({
  method: 'get',
  path: '/sms/templates',
  tags: ['SMS Templates'],
  summary: 'List of Templates',
  description: 'Get list of templates.',
  operationId: 'List of Templates',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSmsTemplatesRoute = createRoute({
  method: 'post',
  path: '/sms/templates',
  tags: ['SMS Templates'],
  summary: 'Create a Template',
  description: 'Create new template.',
  operationId: 'Create a Template',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your template body.' }),
              template_name: z.string().openapi({ description: 'Your template name.' }),
            })
            .openapi({
              example: {
                body: 'This is a sample content: H7YI68B3yk for this template.',
                template_name: 'Template 501916',
              },
              required: ['template_name', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const putSmsTemplatesTemplateIdRoute = createRoute({
  method: 'put',
  path: '/sms/templates/{template_id}',
  tags: ['SMS Templates'],
  summary: 'Update a Template',
  operationId: 'Update a Template',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            description: 'Your template id.',
            example: '25',
            in: 'path',
            name: 'template_id',
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
              body: z.string().openapi({ description: 'Your template body.' }),
              template_name: z.string().openapi({ description: 'Your template name.' }),
            })
            .openapi({
              example: {
                body: 'This is a sample content: Sc0KNWgSMG for this template.',
                template_name: 'I am updated',
              },
              required: ['template_name', 'body'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const deleteSmsTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/sms/templates/{template_id}',
  tags: ['SMS Templates'],
  summary: 'Delete a Template',
  operationId: 'Delete a Template',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            description: 'Your template id.',
            example: '25',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSmsMessageIdCancelRoute = createRoute({
  method: 'put',
  path: '/sms/{message_id}/cancel',
  tags: ['SMS'],
  summary: 'Cancel a Scheduled Message',
  operationId: 'Cancel a Scheduled Message',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description:
              'B7CE432193CD-0753597B7293 (string, required) - The message ID you want to cancel.',
            example: '307EF035',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getStatisticsSmsRoute = createRoute({
  method: 'get',
  path: '/statistics/sms',
  tags: ['Statistics'],
  summary: 'Get SMS Statistics',
  operationId: 'Get SMS Statistics',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getStatisticsVoiceRoute = createRoute({
  method: 'get',
  path: '/statistics/voice',
  tags: ['Statistics'],
  summary: 'Get Voice Statistics',
  operationId: 'Get Voice Statistics',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getSubaccountsRoute = createRoute({
  method: 'get',
  path: '/subaccounts',
  tags: ['Subaccounts'],
  summary: 'Get all Subaccounts',
  operationId: 'Get all Subaccounts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSubaccountsRoute = createRoute({
  method: 'post',
  path: '/subaccounts',
  tags: ['Subaccounts'],
  summary: 'Create a new subaccount',
  operationId: 'Create a new subaccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              access_billing: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access billing flag value, must be 1 or 0.' }),
              access_contacts: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access contacts flag value, must be 1 or 0.' }),
              access_reporting: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access reporting flag value, must be 1 or 0.' }),
              access_settings: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access settings flag value, must be 1 or 0.' }),
              access_users: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access users flag value, must be 1 or 0.' }),
              api_username: z.string().openapi({ description: 'Your new api username.' }),
              email: z.string().openapi({ description: 'Your new email.' }),
              first_name: z.string().openapi({ description: 'Your firstname.' }),
              last_name: z.string().openapi({ description: 'Your lastname.' }),
              password: z.string().openapi({ description: 'Your new password.' }),
              phone_number: z
                .string()
                .openapi({ description: 'Your phone number in E.164 format.' }),
              share_campaigns: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your share campaigns flag value, must be 1 or 0.' }),
            })
            .openapi({
              example: {
                api_username: 'nameP99',
                email: 'testvrq@gmail.com',
                first_name: 'FirstnameeGPqV',
                last_name: 'LastnamePvjJp',
                password: 'pass',
                phone_number: '941-751-3278',
              },
              required: [
                'api_username',
                'password',
                'email',
                'phone_number',
                'first_name',
                'last_name',
              ],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getSubaccountsSubaccountIdRoute = createRoute({
  method: 'get',
  path: '/subaccounts/{subaccount_id}',
  tags: ['Subaccounts'],
  summary: 'Get a specific subaccount',
  operationId: 'Get a specific subaccount',
  request: {
    params: z.object({
      subaccount_id: z
        .string()
        .openapi({
          param: {
            description: 'The subaccount ID you want to access.',
            example: '59',
            in: 'path',
            name: 'subaccount_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSubaccountsSubaccountIdRoute = createRoute({
  method: 'put',
  path: '/subaccounts/{subaccount_id}',
  tags: ['Subaccounts'],
  summary: 'Update a specific subaccount',
  operationId: 'Update a specific subaccount',
  request: {
    params: z.object({
      subaccount_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The subaccount ID you want to access.',
            example: '59',
            in: 'path',
            name: 'subaccount_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              access_billing: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access billing flag value, must be 1 or 0.' }),
              access_contacts: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access contacts flag value, must be 1 or 0.' }),
              access_reporting: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access reporting flag value, must be 1 or 0.' }),
              access_settings: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access settings flag value, must be 1 or 0.' }),
              access_users: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your access users flag value, must be 1 or 0.' }),
              email: z.string().exactOptional().openapi({ description: 'Your new email.' }),
              first_name: z.string().exactOptional().openapi({ description: 'Your firstname.' }),
              last_name: z.string().exactOptional().openapi({ description: 'Your lastname.' }),
              password: z.string().exactOptional().openapi({ description: 'Your new password.' }),
              phone_number: z
                .string()
                .exactOptional()
                .openapi({ description: 'Your phone number in E.164 format.' }),
              share_campaigns: z
                .number()
                .exactOptional()
                .openapi({ description: 'Your share campaigns flag value, must be 1 or 0.' }),
            })
            .openapi({
              example: {
                access_billing: 1,
                access_contacts: 1,
                access_email: 1,
                access_fax: 1,
                access_mms: 1,
                access_post: 1,
                access_reporting: 1,
                access_reseller: 1,
                access_settings: 1,
                access_sms: 1,
                access_users: 1,
                access_voice: 1,
                email: 'testfP0.updated@gmail.com',
                first_name: 'FirstnameKvdRZUpdated',
                last_name: 'LastnameHUPYGUpdated',
                notes: null,
                password: 'pass',
                phone_number: '+19417519130',
                share_campaigns: 0,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const deleteSubaccountsSubaccountIdRoute = createRoute({
  method: 'delete',
  path: '/subaccounts/{subaccount_id}',
  tags: ['Subaccounts'],
  summary: 'Delete a specific subaccount',
  operationId: 'Delete a specific subaccount',
  request: {
    params: z.object({
      subaccount_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The subaccount ID you want to access.',
            example: '59',
            in: 'path',
            name: 'subaccount_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putSubaccountsSubaccountIdRegenApiKeyRoute = createRoute({
  method: 'put',
  path: '/subaccounts/{subaccount_id}/regen-api-key',
  tags: ['Subaccounts'],
  summary: 'Regenerate API Key',
  operationId: 'Regenerate API Key',
  request: {
    params: z.object({
      subaccount_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The ID of the subaccount to be accessed.',
            example: '2837',
            in: 'path',
            name: 'subaccount_id',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getTimezonesRoute = createRoute({
  method: 'get',
  path: '/timezones',
  tags: ['Timezones'],
  summary: 'Get Timezones',
  description: 'Get supported list of timezones.',
  operationId: 'Get Timezones',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postUploadsConvertConvertRoute = createRoute({
  method: 'post',
  path: '/uploads?convert={convert}',
  tags: ['Uploads'],
  summary: 'Upload a file',
  operationId: 'Upload a file',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                content: z
                  .string()
                  .openapi({ description: 'Your file contents encoded in `base64`.' }),
                convert: z
                  .string()
                  .openapi({ description: 'Conversion type: `fax`, `mms`, `csv` or `post`' }),
              })
              .openapi({
                example: {
                  content:
                    'PGh0bWw+PGhlYWQ+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5ib2R5IHsgZm9udC1mYW1pbHk6J0FyaWFsJzsgfTwvc3R5bGU+PHRpdGxlPkhpPC90aXRsZT48L2hlYWQ+PGJvZHk+PGgxPkhlbGxvIHRoZXJlPC9oMT48aDI+SG93IGFyZSB5b3UgdG9kYXk/PC9oMj48L2JvZHk+PC9odG1sPg==',
                },
                required: ['content', 'convert'],
              }),
            z
              .object({
                convert: z
                  .string()
                  .openapi({ description: 'Conversion type: `fax`, `mms`, `csv` or `post`' }),
                file: z.string().openapi({ description: 'Your file.' }),
              })
              .openapi({ required: ['file', 'convert'] }),
          ]),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putVoiceCancelAllRoute = createRoute({
  method: 'put',
  path: '/voice/cancel-all',
  tags: ['Voice'],
  summary: 'Cancel all Voice Calls',
  operationId: 'Cancel all Voice Calls',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getVoiceHistoryExportFilenameFilenameRoute = createRoute({
  method: 'get',
  path: '/voice/history/export?filename={filename}',
  tags: ['Voice'],
  summary: 'Export Voice History',
  operationId: 'Export Voice History',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Your export filename.',
            example: 'export.csv',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getVoiceHistoryDateFromDateFromDateToDateToRoute = createRoute({
  method: 'get',
  path: '/voice/history?date_from={date_from}&date_to={date_to}',
  tags: ['Voice'],
  summary: 'Get Voice History',
  operationId: 'Get Voice History',
  request: {
    params: z.object({
      date_from: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp (from) used to show records by date.',
            example: '1443501617',
            in: 'path',
            name: 'date_from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_to: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp (to) used to show recrods by date.',
            example: '1443501727',
            in: 'path',
            name: 'date_to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getVoiceLangRoute = createRoute({
  method: 'get',
  path: '/voice/lang',
  tags: ['Voice'],
  summary: 'Voice Languages',
  operationId: 'Voice Languages',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postVoicePriceRoute = createRoute({
  method: 'post',
  path: '/voice/price',
  tags: ['Voice'],
  summary: 'Calculate Price',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your message.' }),
              country: z
                .string()
                .exactOptional()
                .openapi({ description: 'The country of the recipient.' }),
              custom_string: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your reference. Will be passed back with all replies and delivery reports.',
                }),
              lang: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'au (string, required) - See section on available languages.',
                }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "Your list ID if sending to a whole list. Can be used instead of 'to'.",
                }),
              require_input: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off)',
                }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
              to: z
                .string()
                .openapi({
                  description:
                    'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
                }),
              voice: z.string().openapi({ description: "Either 'female' or 'male'." }),
            })
            .openapi({
              example: {
                messages: [
                  {
                    body: 'Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.',
                    custom_string: 'this is a test',
                    lang: 'en-au',
                    schedule: 1436874701,
                    source: 'php',
                    to: '+61411111111',
                    voice: 'female',
                  },
                  {
                    body: 'Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.',
                    custom_string: 'this is a test',
                    lang: 'en-au',
                    list_id: 428,
                    require_input: 1,
                    schedule: 1436876011,
                    source: 'php',
                    voice: 'female',
                  },
                ],
              },
              required: ['to', 'body', 'voice'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const getVoiceReceiptsRoute = createRoute({
  method: 'get',
  path: '/voice/receipts',
  tags: ['Voice'],
  summary: 'Get Voice receipts',
  operationId: 'Get Voice receipts',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postVoiceReceiptsRoute = createRoute({
  method: 'post',
  path: '/voice/receipts',
  tags: ['Voice'],
  summary: 'Add a Test Delivery Receipt',
  request: { body: AddATestDeliveryReceiptBodyRequestBody },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const putVoiceReceiptsReadDateBeforeDateBeforeRoute = createRoute({
  method: 'put',
  path: '/voice/receipts-read?date_before={date_before}',
  tags: ['Voice'],
  summary: 'Marked Voice Receipts as Read',
  operationId: 'Marked Voice Receipts as Read',
  request: {
    params: z.object({
      date_before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read.',
            example: '1461897483',
            in: 'path',
            name: 'date_before',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getVoiceReceiptsMessageIdRoute = createRoute({
  method: 'get',
  path: '/voice/receipts/{message_id}',
  tags: ['Voice'],
  summary: 'Get Specific Voice Receipt',
  operationId: 'Get Specific Voice Receipt',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description:
              '3055-45F1-9B79-F2C43509FD16 (string, required) - The voice receipt message id.',
            example: '28DD2718',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postVoiceSendRoute = createRoute({
  method: 'post',
  path: '/voice/send',
  tags: ['Voice'],
  summary: 'Send a Voice Call',
  description:
    'You can post **up to 1000 messages** with each API call.\n\nWe support some SSML tags allowing custom breaks or pauses to be entered, and the readout rate to be altered. [More info](https://help.clicksend.com/voice/how-to-adjust-tts-voice-calls).',
  operationId: 'Send a Voice Call',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'Your message.' }),
              country: z
                .string()
                .exactOptional()
                .openapi({ description: 'The country of the recipient.' }),
              custom_string: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Your reference. Will be passed back with all replies and delivery reports.',
                }),
              lang: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'au (string, required) - See section on available languages.',
                }),
              list_id: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "Your list ID if sending to a whole list. Can be used instead of 'to'. Will override 'to' if both are used.",
                }),
              machine_detection: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Whether to attempt to detect an answering machine or voicemail service and leave a message (1 for on, 0 [default] for off)',
                }),
              require_input: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off)',
                }),
              schedule: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).',
                }),
              source: z
                .string()
                .exactOptional()
                .openapi({ description: "Your method of sending e.g. 'wordpress', 'php', 'c#'." }),
              to: z
                .string()
                .openapi({
                  description:
                    'Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).',
                }),
              voice: z.string().openapi({ description: "Either 'female' or 'male'." }),
            })
            .openapi({
              example: {
                messages: [
                  {
                    body: 'Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.',
                    custom_string: 'this is a test',
                    lang: 'en-au',
                    machine_detection: 1,
                    require_input: 1,
                    schedule: 1436874701,
                    source: 'php',
                    to: '+61411111111',
                    voice: 'female',
                  },
                  {
                    body: 'Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.',
                    custom_string: 'this is a test',
                    lang: 'en-au',
                    list_id: 428,
                    schedule: 1436876011,
                    source: 'php',
                    voice: 'female',
                  },
                ],
              },
              required: ['to', 'body', 'voice'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ basic: [] }],
})

export const putVoiceMessageIdCancelRoute = createRoute({
  method: 'put',
  path: '/voice/{message_id}/cancel',
  tags: ['Voice'],
  summary: 'Cancel a Specific Voice Call',
  operationId: 'Cancel a Specific Voice Call',
  request: {
    params: z.object({
      message_id: z
        .string()
        .openapi({
          param: {
            description: 'Your voice message id.',
            example: '7B5BFC19 06B7 49C1 8DCDFB011600E12B',
            in: 'path',
            name: 'message_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})
