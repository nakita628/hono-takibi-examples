import { createRoute, z } from '@hono/zod-openapi'

const AccountSuspensionDetailsSchema = z
  .object({
    abuseReason: z
      .enum([
        'ACCOUNT_SUSPENSION_ABUSE_REASON_UNSPECIFIED',
        'TOS_VIOLATION',
        'SPAM',
        'PHISHING',
        'TRAFFIC_PUMPING',
        'FRAUD',
        'NUMBER_HARVESTING',
        'PAYMENTS_FRAUD',
        'UNWANTED_CONTENT',
      ])
      .exactOptional()
      .openapi({
        description: 'The reason why this account is receiving an account suspension warning.',
      }),
    productName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other"',
      }),
  })
  .openapi({
    description: 'Details about why an account is receiving an account suspension warning.',
    required: [],
  })
  .openapi('AccountSuspensionDetails')

const AccountSuspensionWarningSchema = z
  .object({
    appealWindow: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state.',
      }),
    state: z
      .enum([
        'ACCOUNT_SUSPENSION_WARNING_STATE_UNSPECIFIED',
        'WARNING',
        'SUSPENDED',
        'APPEAL_APPROVED',
        'APPEAL_SUBMITTED',
      ])
      .exactOptional()
      .openapi({ description: 'Account suspension warning state.' }),
    suspensionDetails: z
      .array(AccountSuspensionDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Details about why an account is being suspended.' }),
  })
  .openapi({
    description: "LINT.IfChange A warning that the customer's account is about to be suspended.",
    required: [],
  })
  .openapi('AccountSuspensionWarning')

const LoginDetailsSchema = z
  .object({
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event.',
      }),
    loginTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts.",
      }),
  })
  .openapi({ description: 'The details of the login action.', required: [] })
  .openapi('LoginDetails')

const AccountWarningSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The email of the user that this event belongs to.' }),
    loginDetails: LoginDetailsSchema.exactOptional().openapi({
      description:
        'Optional. Details of the login action associated with the warning event. This is only available for: * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity)',
    }),
  })
  .openapi({ description: 'Alerts for user account warning events.', required: [] })
  .openapi('AccountWarning')

const ActionInfoSchema = z
  .object({})
  .openapi({ description: 'Metadata related to the action.' })
  .openapi('ActionInfo')

const ActivityRuleSchema = z
  .object({
    actionNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of action names associated with the rule threshold.' }),
    createTime: z.string().exactOptional().openapi({ description: 'Rule create timestamp.' }),
    description: z.string().exactOptional().openapi({ description: 'Description of the rule.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Alert display name.' }),
    name: z.string().exactOptional().openapi({ description: 'Rule name.' }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'Query that is used to get the data from the associated source.' }),
    supersededAlerts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.',
      }),
    supersedingAlert: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.',
      }),
    threshold: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alert threshold is for example “COUNT > 5”.' }),
    triggerSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the last update to the rule.' }),
    windowSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rule window size. Possible values are 1 hour or 24 hours.' }),
  })
  .openapi({
    description:
      'Alerts from Google Workspace Security Center rules service configured by an admin.',
    required: [],
  })
  .openapi('ActivityRule')

const AlertMetadataSchema = z
  .object({
    alertId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The alert identifier.' }),
    assignee: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the user assigned to the alert.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique identifier of the Google Workspace account of the customer.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.',
      }),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW",
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this metadata was last updated.' }),
  })
  .openapi({ description: 'An alert metadata.', required: [] })
  .openapi('AlertMetadata')

const AlertSchema = z
  .object({
    alertId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique identifier for the alert.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this alert was created.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique identifier of the Google Workspace account of the customer.',
      }),
    data: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised.',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. `True` if this alert is marked for deletion.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.',
      }),
    metadata: AlertMetadataSchema.exactOptional().openapi({
      description: 'Output only. The metadata associated with this alert.',
    }),
    securityInvestigationToolLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The time the event that caused this alert was started or detected.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/admin-sdk/alertcenter/reference/alert-types).',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this alert was last updated.' }),
  })
  .openapi({ description: 'An alert affecting a customer.', required: [] })
  .openapi('Alert')

const AlertFeedbackSchema = z
  .object({
    alertId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The alert identifier.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this feedback was created.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique identifier of the Google Workspace account of the customer.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The email of the user that provided the feedback.' }),
    feedbackId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique identifier for the feedback.' }),
    type: z
      .enum(['ALERT_FEEDBACK_TYPE_UNSPECIFIED', 'NOT_USEFUL', 'SOMEWHAT_USEFUL', 'VERY_USEFUL'])
      .exactOptional()
      .openapi({ description: 'Required. The type of the feedback.' }),
  })
  .openapi({ description: 'A customer feedback about an alert.', required: [] })
  .openapi('AlertFeedback')

const ApnsCertificateExpirationInfoSchema = z
  .object({
    appleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Apple ID used to create the certificate. It may be blank if admins didn't enter it.",
      }),
    expirationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiration date of the APNS certificate.' }),
    uid: z.string().exactOptional().openapi({ description: 'The UID of the certificate.' }),
  })
  .openapi({
    description:
      'The explanation message associated with "APNS certificate is expiring soon" and "APNS certificate has expired" alerts.',
    required: [],
  })
  .openapi('ApnsCertificateExpirationInfo')

const RequestInfoSchema = z
  .object({
    appDeveloperEmail: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of app developers who triggered notifications for above application.',
      }),
    appKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The application that requires the SQL setup.' }),
    numberOfRequests: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Number of requests sent for this application to set up default SQL instance.',
      }),
  })
  .openapi({
    description: 'Requests for one application that needs default SQL setup.',
    required: [],
  })
  .openapi('RequestInfo')

const AppMakerSqlSetupNotificationSchema = z
  .object({
    requestInfo: z
      .array(RequestInfoSchema)
      .exactOptional()
      .openapi({ description: 'List of applications with requests for default SQL set up.' }),
  })
  .openapi({
    description: 'Alerts from App Maker to notify admins to set up default SQL instance.',
    required: [],
  })
  .openapi('AppMakerSqlSetupNotification')

const AppSettingsChangedSchema = z
  .object({
    alertDetails: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Any other associated alert details, for example, AlertConfiguration.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Rule name' }),
  })
  .openapi({
    description:
      'Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the below rules. Calendar settings changed Drive settings changed Email settings changed Mobile settings changed',
    required: [],
  })
  .openapi('AppSettingsChanged')

const MergeInfoSchema = z
  .object({
    newAlertId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state.',
      }),
    newIncidentTrackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new tracking ID from the parent incident.' }),
  })
  .openapi({ description: 'New alert tracking numbers.', required: [] })
  .openapi('MergeInfo')

const AppsOutageSchema = z
  .object({
    dashboardUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the outage event in Google Workspace Status Dashboard' }),
    incidentTrackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Incident tracking ID.' }),
    mergeInfo: MergeInfoSchema.exactOptional().openapi({
      description:
        'Indicates new alert details under which the outage is communicated. Only populated when Status is MERGED.',
    }),
    nextUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp by which the next update is expected to arrive.' }),
    products: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of products impacted by the outage.' }),
    resolutionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known.',
      }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'NEW',
        'ONGOING',
        'RESOLVED',
        'FALSE_POSITIVE',
        'PARTIALLY_RESOLVED',
        'MERGED',
        'DOWNGRADED',
      ])
      .exactOptional()
      .openapi({ description: 'Current outage status.' }),
  })
  .openapi({
    description: 'An outage incident reported for a Google Workspace service.',
    required: [],
  })
  .openapi('AppsOutage')

const CsvRowSchema = z
  .object({
    entries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The data entries in a CSV file row, as a string array rather than a single comma-separated string.',
      }),
  })
  .openapi({ description: 'A representation of a single data row in a CSV file.', required: [] })
  .openapi('CsvRow')

const CsvSchema = z
  .object({
    dataRows: z
      .array(CsvRowSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.',
      }),
    headers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of headers for data columns in a CSV file.' }),
  })
  .openapi({
    description:
      'A representation of a CSV file attachment, as a list of column headers and a list of data rows.',
    required: [],
  })
  .openapi('Csv')

const AttachmentSchema = z
  .object({ csv: CsvSchema.exactOptional().openapi({ description: 'A CSV file attachment.' }) })
  .openapi({
    description: 'Attachment with application-specific information about an alert.',
    required: [],
  })
  .openapi('Attachment')

const DomainIdSchema = z
  .object({
    customerPrimaryDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary domain for the customer.' }),
  })
  .openapi({ description: 'Domain ID of Gmail phishing alerts.', required: [] })
  .openapi('DomainId')

const UserSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Display name of the user.' }),
    emailAddress: z.string().exactOptional().openapi({ description: 'Email address of the user.' }),
  })
  .openapi({ description: 'A user.', required: [] })
  .openapi('User')

const MaliciousEntitySchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header from display name.' }),
    entity: UserSchema.exactOptional().openapi({
      description: 'The actor who triggered a gmail phishing alert.',
    }),
    fromHeader: z.string().exactOptional().openapi({ description: 'The sender email address.' }),
  })
  .openapi({ description: 'Entity whose actions triggered a Gmail phishing alert.', required: [] })
  .openapi('MaliciousEntity')

const GmailMessageInfoSchema = z
  .object({
    attachmentsSha256Hash: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "The `SHA256` hash of email's attachment and all MIME parts." }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the event related to this email.' }),
    md5HashMessageBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hash of the message body text.' }),
    md5HashSubject: z
      .string()
      .exactOptional()
      .openapi({
        description: "The MD5 Hash of email's subject (only available for reported emails).",
      }),
    messageBodySnippet: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The snippet of the message body text (only available for reported emails).',
      }),
    messageId: z.string().exactOptional().openapi({ description: 'The message ID.' }),
    recipient: z.string().exactOptional().openapi({ description: 'The recipient of this email.' }),
    sentTime: z.string().exactOptional().openapi({ description: 'The sent time of the email.' }),
    subjectText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email subject text (only available for reported emails).' }),
  })
  .openapi({ description: 'Details of a message in phishing spike alert.', required: [] })
  .openapi('GmailMessageInfo')

const BadWhitelistSchema = z
  .object({
    domainId: DomainIdSchema.exactOptional().openapi({ description: 'The domain ID.' }),
    maliciousEntity: MaliciousEntitySchema.exactOptional().openapi({
      description: 'The entity whose actions triggered a Gmail phishing alert.',
    }),
    messages: z
      .array(GmailMessageInfoSchema)
      .exactOptional()
      .openapi({ description: 'The list of messages contained by this alert.' }),
    sourceIp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source IP address of the malicious email, for example, `127.0.0.1`.',
      }),
  })
  .openapi({
    description:
      'Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.',
    required: [],
  })
  .openapi('BadWhitelist')

const BatchDeleteAlertsRequestSchema = z
  .object({
    alertId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. The list of alert IDs to delete.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
      }),
  })
  .openapi({ description: 'A request to perform batch delete on alerts.', required: [] })
  .openapi('BatchDeleteAlertsRequest')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const BatchDeleteAlertsResponseSchema = z
  .object({
    failedAlertStatus: z
      .record(z.string(), StatusSchema)
      .exactOptional()
      .openapi({ description: 'The status details for each failed `alert_id`.' }),
    successAlertIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The successful list of alert IDs.' }),
  })
  .openapi({ description: 'Response to batch delete operation on alerts.', required: [] })
  .openapi('BatchDeleteAlertsResponse')

const BatchUndeleteAlertsRequestSchema = z
  .object({
    alertId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. The list of alert IDs to undelete.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
      }),
  })
  .openapi({ description: 'A request to perform batch undelete on alerts.', required: [] })
  .openapi('BatchUndeleteAlertsRequest')

const BatchUndeleteAlertsResponseSchema = z
  .object({
    failedAlertStatus: z
      .record(z.string(), StatusSchema)
      .exactOptional()
      .openapi({ description: 'The status details for each failed `alert_id`.' }),
    successAlertIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The successful list of alert IDs.' }),
  })
  .openapi({ description: 'Response to batch undelete operation on alerts.', required: [] })
  .openapi('BatchUndeleteAlertsResponse')

const CloudPubsubTopicSchema = z
  .object({
    payloadFormat: z
      .enum(['PAYLOAD_FORMAT_UNSPECIFIED', 'JSON'])
      .exactOptional()
      .openapi({
        description:
          'Optional. The format of the payload that would be sent. If not specified the format will be JSON.',
      }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).',
      }),
  })
  .openapi({
    description:
      'A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.',
    required: [],
  })
  .openapi('CloudPubsubTopic')

const DeviceCompromisedSecurityDetailSchema = z
  .object({
    deviceCompromisedState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`".',
      }),
    deviceId: z.string().exactOptional().openapi({ description: 'Required. The device ID.' }),
    deviceModel: z.string().exactOptional().openapi({ description: 'The model of the device.' }),
    deviceType: z.string().exactOptional().openapi({ description: 'The type of the device.' }),
    iosVendorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for iOS, empty for others.' }),
    resourceId: z.string().exactOptional().openapi({ description: 'The device resource ID.' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The serial number of the device.' }),
  })
  .openapi({
    description: 'Detailed information of a single MDM device compromised event.',
    required: [],
  })
  .openapi('DeviceCompromisedSecurityDetail')

const DeviceCompromisedSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the user this alert was created for.' }),
    events: z
      .array(DeviceCompromisedSecurityDetailSchema)
      .exactOptional()
      .openapi({ description: 'Required. The list of security events.' }),
  })
  .openapi({
    description: 'A mobile device compromised alert. Derived from audit logs.',
    required: [],
  })
  .openapi('DeviceCompromised')

const PredefinedDetectorInfoSchema = z
  .object({
    detectorName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name that uniquely identifies the detector.' }),
  })
  .openapi({ description: 'Detector provided by Google.', required: [] })
  .openapi('PredefinedDetectorInfo')

const UserDefinedDetectorInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the detector.' }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name that uniquely identifies the detector.' }),
  })
  .openapi({ description: 'Detector defined by administrators.', required: [] })
  .openapi('UserDefinedDetectorInfo')

const MatchInfoSchema = z
  .object({
    predefinedDetector: PredefinedDetectorInfoSchema.exactOptional().openapi({
      description: 'For matched detector predefined by Google.',
    }),
    userDefinedDetector: UserDefinedDetectorInfoSchema.exactOptional().openapi({
      description: 'For matched detector defined by administrators.',
    }),
  })
  .openapi({
    description: 'Proto that contains match information from the condition part of the rule.',
    required: [],
  })
  .openapi('MatchInfo')

const ResourceInfoSchema = z
  .object({
    documentId: z.string().exactOptional().openapi({ description: 'Drive file ID.' }),
    resourceTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Title of the resource, for example email subject, or document title.',
      }),
  })
  .openapi({ description: 'Proto that contains resource information.', required: [] })
  .openapi('ResourceInfo')

const RuleInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User provided name of the rule.' }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name that uniquely identifies the rule.' }),
  })
  .openapi({ description: 'Proto that contains rule information.', required: [] })
  .openapi('RuleInfo')

const RuleViolationInfoSchema = z
  .object({
    dataSource: z
      .enum(['DATA_SOURCE_UNSPECIFIED', 'DRIVE'])
      .exactOptional()
      .openapi({ description: 'Source of the data.' }),
    matchInfo: z
      .array(MatchInfoSchema)
      .exactOptional()
      .openapi({ description: 'List of matches that were found in the resource content.' }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to.",
      }),
    resourceInfo: ResourceInfoSchema.exactOptional().openapi({
      description: 'Details of the resource which violated the rule.',
    }),
    ruleInfo: RuleInfoSchema.exactOptional().openapi({
      description: 'Details of the violated rule.',
    }),
    suppressedActionTypes: z
      .array(
        z.enum([
          'ACTION_TYPE_UNSPECIFIED',
          'DRIVE_BLOCK_EXTERNAL_SHARING',
          'DRIVE_WARN_ON_EXTERNAL_SHARING',
          'DELETE_WEBPROTECT_EVIDENCE',
          'ALERT',
          'RULE_ACTIVATE',
          'RULE_DEACTIVATE',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Actions suppressed due to other actions with higher priority.' }),
    trigger: z
      .enum(['TRIGGER_UNSPECIFIED', 'DRIVE_SHARE'])
      .exactOptional()
      .openapi({ description: 'Trigger of the rule.' }),
    triggeredActionInfo: z
      .array(ActionInfoSchema)
      .exactOptional()
      .openapi({ description: 'Metadata related to the triggered actions.' }),
    triggeredActionTypes: z
      .array(
        z.enum([
          'ACTION_TYPE_UNSPECIFIED',
          'DRIVE_BLOCK_EXTERNAL_SHARING',
          'DRIVE_WARN_ON_EXTERNAL_SHARING',
          'DELETE_WEBPROTECT_EVIDENCE',
          'ALERT',
          'RULE_ACTIVATE',
          'RULE_DEACTIVATE',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Actions applied as a consequence of the rule being triggered.' }),
    triggeringUserEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan.',
      }),
  })
  .openapi({
    description:
      'Common alert information about violated rules that are configured by Google Workspace administrators.',
    required: [],
  })
  .openapi('RuleViolationInfo')

const DlpRuleViolationSchema = z
  .object({
    ruleViolationInfo: RuleViolationInfoSchema.exactOptional().openapi({
      description:
        'Details about the violated DLP rule. Admins can use the predefined detectors provided by Google Cloud DLP https://cloud.google.com/dlp/ when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector.',
    }),
  })
  .openapi({
    description: 'Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.',
    required: [],
  })
  .openapi('DlpRuleViolation')

const DomainWideTakeoutInitiatedSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the admin who initiated the takeout.' }),
    takeoutRequestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The takeout request ID.' }),
  })
  .openapi({
    description:
      'A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.',
    required: [],
  })
  .openapi('DomainWideTakeoutInitiated')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GoogleOperationsSchema = z
  .object({
    affectedUserEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of emails which correspond to the users directly affected by the incident.',
      }),
    attachmentData: AttachmentSchema.exactOptional().openapi({
      description:
        'Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed, freeform incident description.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer domain for email template personalization.' }),
    header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations.',
      }),
    title: z.string().exactOptional().openapi({ description: 'A one-line incident description.' }),
  })
  .openapi({
    description: 'An incident reported by Google Operations for a Google Workspace application.',
    required: [],
  })
  .openapi('GoogleOperations')

const ListAlertFeedbackResponseSchema = z
  .object({
    feedback: z
      .array(AlertFeedbackSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.',
      }),
  })
  .openapi({ description: 'Response message for an alert feedback listing request.', required: [] })
  .openapi('ListAlertFeedbackResponse')

const ListAlertsResponseSchema = z
  .object({
    alerts: z.array(AlertSchema).exactOptional().openapi({ description: 'The list of alerts.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.',
      }),
  })
  .openapi({ description: 'Response message for an alert listing request.', required: [] })
  .openapi('ListAlertsResponse')

const MailPhishingSchema = z
  .object({
    domainId: DomainIdSchema.exactOptional().openapi({ description: 'The domain ID.' }),
    isInternal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, the email originated from within the organization.' }),
    maliciousEntity: MaliciousEntitySchema.exactOptional().openapi({
      description: 'The entity whose actions triggered a Gmail phishing alert.',
    }),
    messages: z
      .array(GmailMessageInfoSchema)
      .exactOptional()
      .openapi({ description: 'The list of messages contained by this alert.' }),
    systemActionType: z
      .enum(['SYSTEM_ACTION_TYPE_UNSPECIFIED', 'NO_OPERATION', 'REMOVED_FROM_INBOX'])
      .exactOptional()
      .openapi({ description: 'System actions on the messages.' }),
  })
  .openapi({
    description:
      'Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing',
    required: [],
  })
  .openapi('MailPhishing')

const MandatoryServiceAnnouncementSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed, freeform text describing the announcement' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'One line summary of the announcement' }),
  })
  .openapi({
    description:
      'Alert Created by the MSA team for communications necessary for continued use of Google Workspace Products.',
    required: [],
  })
  .openapi('MandatoryServiceAnnouncement')

const NotificationSchema = z
  .object({
    cloudPubsubTopic: CloudPubsubTopicSchema.exactOptional().openapi({
      description: 'A Google Cloud Pub/sub topic destination.',
    }),
  })
  .openapi({
    description:
      'Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).',
    required: [],
  })
  .openapi('Notification')

const PhishingSpikeSchema = z
  .object({
    domainId: DomainIdSchema.exactOptional().openapi({ description: 'The domain ID.' }),
    isInternal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If `true`, the email originated from within the organization.' }),
    maliciousEntity: MaliciousEntitySchema.exactOptional().openapi({
      description: 'The entity whose actions triggered a Gmail phishing alert.',
    }),
    messages: z
      .array(GmailMessageInfoSchema)
      .exactOptional()
      .openapi({ description: 'The list of messages contained by this alert.' }),
  })
  .openapi({
    description:
      'Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead.',
    required: [],
  })
  .openapi('PhishingSpike')

const PrimaryAdminChangedEventSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'domain in which actioned occurred' }),
    previousAdminEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of person who was the primary admin before the action' }),
    updatedAdminEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of person who is the primary admin after the action' }),
  })
  .openapi({
    description:
      "Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder",
    required: [],
  })
  .openapi('PrimaryAdminChangedEvent')

const ReportingRuleSchema = z
  .object({
    alertDetails: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Any other associated alert details, for example, AlertConfiguration.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Rule name' }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN } } conjunction_operator: OR }',
      }),
  })
  .openapi({ description: 'Alerts from Reporting Rules configured by Admin.', required: [] })
  .openapi('ReportingRule')

const SSOProfileCreatedEventSchema = z
  .object({
    inboundSsoProfileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'sso profile name which got created' }),
  })
  .openapi({
    description:
      "Event occurred when SSO Profile created in customer's account. The event are being received from insight forwarder",
    required: [],
  })
  .openapi('SSOProfileCreatedEvent')

const SSOProfileDeletedEventSchema = z
  .object({
    inboundSsoProfileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'sso profile name which got deleted' }),
  })
  .openapi({
    description:
      "Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder",
    required: [],
  })
  .openapi('SSOProfileDeletedEvent')

const SSOProfileUpdatedEventSchema = z
  .object({
    inboundSsoProfileChanges: z
      .string()
      .exactOptional()
      .openapi({ description: 'changes made to sso profile' }),
    inboundSsoProfileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'sso profile name which got updated' }),
  })
  .openapi({
    description:
      "Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder",
    required: [],
  })
  .openapi('SSOProfileUpdatedEvent')

const SuperAdminPasswordResetEventSchema = z
  .object({
    userEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'email of person whose password was reset' }),
  })
  .openapi({
    description:
      "Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder",
    required: [],
  })
  .openapi('SuperAdminPasswordResetEvent')

const SensitiveAdminActionSchema = z
  .object({
    actorEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of person who performed the action' }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which event occurred' }),
    primaryAdminChangedEvent: PrimaryAdminChangedEventSchema.exactOptional().openapi({
      description: "Event occurred when primary admin changed in customer's account",
    }),
    ssoProfileCreatedEvent: SSOProfileCreatedEventSchema.exactOptional().openapi({
      description: "Event occurred when SSO Profile created in customer's account",
    }),
    ssoProfileDeletedEvent: SSOProfileDeletedEventSchema.exactOptional().openapi({
      description: "Event occurred when SSO Profile deleted in customer's account",
    }),
    ssoProfileUpdatedEvent: SSOProfileUpdatedEventSchema.exactOptional().openapi({
      description: "Event occurred when SSO Profile updated in customer's account",
    }),
    superAdminPasswordResetEvent: SuperAdminPasswordResetEventSchema.exactOptional().openapi({
      description: "Event occurred when password was reset for super admin in customer's account",
    }),
  })
  .openapi({
    description: 'Alert that is triggered when Sensitive Admin Action occur in customer account.',
    required: [],
  })
  .openapi('SensitiveAdminAction')

const SettingsSchema = z
  .object({
    notifications: z
      .array(NotificationSchema)
      .exactOptional()
      .openapi({ description: 'The list of notifications.' }),
  })
  .openapi({ description: 'Customer-level settings.', required: [] })
  .openapi('Settings')

const StateSponsoredAttackSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the user this incident was created for.' }),
  })
  .openapi({
    description: 'A state-sponsored attack alert. Derived from audit logs.',
    required: [],
  })
  .openapi('StateSponsoredAttack')

const SuspiciousActivitySecurityDetailSchema = z
  .object({
    deviceId: z.string().exactOptional().openapi({ description: 'Required. The device ID.' }),
    deviceModel: z.string().exactOptional().openapi({ description: 'The model of the device.' }),
    deviceProperty: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device property which was changed.' }),
    deviceType: z.string().exactOptional().openapi({ description: 'The type of the device.' }),
    iosVendorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for iOS, empty for others.' }),
    newValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new value of the device property after the change.' }),
    oldValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The old value of the device property before the change.' }),
    resourceId: z.string().exactOptional().openapi({ description: 'The device resource ID.' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The serial number of the device.' }),
  })
  .openapi({
    description: 'Detailed information of a single MDM suspicious activity event.',
    required: [],
  })
  .openapi('SuspiciousActivitySecurityDetail')

const SuspiciousActivitySchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the user this alert was created for.' }),
    events: z
      .array(SuspiciousActivitySecurityDetailSchema)
      .exactOptional()
      .openapi({ description: 'Required. The list of security events.' }),
  })
  .openapi({
    description: 'A mobile suspicious activity alert. Derived from audit logs.',
    required: [],
  })
  .openapi('SuspiciousActivity')

const TransferErrorSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: "User's email address. This may be unavailable if the entity was deleted.",
      }),
    entityType: z
      .enum([
        'TRANSFER_ENTITY_TYPE_UNSPECIFIED',
        'TRANSFER_AUTO_ATTENDANT',
        'TRANSFER_RING_GROUP',
        'TRANSFER_USER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of entity being transferred to. For ring group members, this should always be USER.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ring group or auto attendant ID. Not set for users.' }),
    invalidReason: z
      .enum([
        'TRANSFER_INVALID_REASON_UNSPECIFIED',
        'TRANSFER_TARGET_DELETED',
        'UNLICENSED',
        'SUSPENDED',
        'NO_PHONE_NUMBER',
      ])
      .exactOptional()
      .openapi({ description: 'Reason for the error.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted.",
      }),
  })
  .openapi({ description: 'Details for an invalid transfer or forward.', required: [] })
  .openapi('TransferError')

const TransferMisconfigurationSchema = z
  .object({
    errors: z
      .array(TransferErrorSchema)
      .exactOptional()
      .openapi({ description: 'Details for each invalid transfer or forward.' }),
  })
  .openapi({
    description: 'Error related to transferring or forwarding a phone call.',
    required: [],
  })
  .openapi('TransferMisconfiguration')

const UndeleteAlertRequestSchema = z
  .object({
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
      }),
  })
  .openapi({
    description: 'A request to undelete a specific alert that was marked for deletion.',
    required: [],
  })
  .openapi('UndeleteAlertRequest')

const UserChangesSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'Rule name' }) })
  .openapi({
    description:
      'Alerts from UserChanges bucket Rules for predefined rules which contain the below rules. Suspended user made active New user Added User suspended (by admin) User granted admin privileges User admin privileges revoked User deleted Users password changed',
    required: [],
  })
  .openapi('UserChanges')

const VoicemailRecipientErrorSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the invalid recipient. This may be unavailable if the recipient was deleted.',
      }),
    invalidReason: z
      .enum(['EMAIL_INVALID_REASON_UNSPECIFIED', 'OUT_OF_QUOTA', 'RECIPIENT_DELETED'])
      .exactOptional()
      .openapi({ description: 'Reason for the error.' }),
  })
  .openapi({ description: 'Issue(s) with a voicemail recipient.', required: [] })
  .openapi('VoicemailRecipientError')

const VoicemailMisconfigurationSchema = z
  .object({
    errors: z
      .array(VoicemailRecipientErrorSchema)
      .exactOptional()
      .openapi({ description: 'Issue(s) with voicemail recipients.' }),
  })
  .openapi({ description: 'Issue(s) with sending to voicemail.', required: [] })
  .openapi('VoicemailMisconfiguration')

const VoiceMisconfigurationSchema = z
  .object({
    entityName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity whose configuration is now invalid.' }),
    entityType: z
      .enum(['ENTITY_TYPE_UNSPECIFIED', 'AUTO_ATTENDANT', 'RING_GROUP'])
      .exactOptional()
      .openapi({ description: 'Type of the entity whose configuration is now invalid.' }),
    fixUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link that the admin can follow to fix the issue.' }),
    membersMisconfiguration: TransferMisconfigurationSchema.exactOptional().openapi({
      description: 'Issue(s) with members of a ring group.',
    }),
    transferMisconfiguration: TransferMisconfigurationSchema.exactOptional().openapi({
      description: 'Issue(s) with transferring or forwarding to an external entity.',
    }),
    voicemailMisconfiguration: VoicemailMisconfigurationSchema.exactOptional().openapi({
      description: 'Issue(s) with sending to voicemail.',
    }),
  })
  .openapi({
    description:
      'An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted.',
    required: [],
  })
  .openapi('VoiceMisconfiguration')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/apps.alerts':
          "See and delete your domain's G Suite alerts, and send alert feedback",
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/apps.alerts':
          "See and delete your domain's G Suite alerts, and send alert feedback",
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1AlertsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/alerts',
  tags: ['alerts'],
  description: 'Lists the alerts.',
  operationId: 'alertcenter.alerts.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/admin-sdk/alertcenter/reference/filter-fields#alerts.list).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
              'Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAlertsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const getV1beta1AlertsAlertIdRoute = createRoute({
  method: 'get',
  path: '/v1beta1/alerts/{alertId}',
  tags: ['alerts'],
  description:
    'Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.',
  operationId: 'alertcenter.alerts.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The identifier of the alert to retrieve.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AlertSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const deleteV1beta1AlertsAlertIdRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/alerts/{alertId}',
  tags: ['alerts'],
  description:
    'Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.',
  operationId: 'alertcenter.alerts.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The identifier of the alert to delete.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const getV1beta1AlertsAlertIdFeedbackRoute = createRoute({
  method: 'get',
  path: '/v1beta1/alerts/{alertId}/feedback',
  tags: ['alerts'],
  description:
    'Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.',
  operationId: 'alertcenter.alerts.feedback.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The alert identifier. The "-" wildcard could be used to represent all alerts.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAlertFeedbackResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const postV1beta1AlertsAlertIdFeedbackRoute = createRoute({
  method: 'post',
  path: '/v1beta1/alerts/{alertId}/feedback',
  tags: ['alerts'],
  description:
    "Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.",
  operationId: 'alertcenter.alerts.feedback.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The identifier of the alert this feedback belongs to.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AlertFeedbackSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AlertFeedbackSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const getV1beta1AlertsAlertIdMetadataRoute = createRoute({
  method: 'get',
  path: '/v1beta1/alerts/{alertId}/metadata',
  tags: ['alerts'],
  description:
    'Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.',
  operationId: 'alertcenter.alerts.getMetadata',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The identifier of the alert this metadata belongs to.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AlertMetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const postV1beta1AlertsAlertIdUndeleteRoute = createRoute({
  method: 'post',
  path: '/v1beta1/alerts/{alertId}:undelete',
  tags: ['alerts'],
  description:
    'Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.',
  operationId: 'alertcenter.alerts.undelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The identifier of the alert to undelete.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UndeleteAlertRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AlertSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const postV1beta1AlertsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1beta1/alerts:batchDelete',
  tags: ['alerts'],
  description: 'Performs batch delete operation on alerts.',
  operationId: 'alertcenter.alerts.batchDelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BatchDeleteAlertsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchDeleteAlertsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const postV1beta1AlertsBatchUndeleteRoute = createRoute({
  method: 'post',
  path: '/v1beta1/alerts:batchUndelete',
  tags: ['alerts'],
  description: 'Performs batch undelete operation on alerts.',
  operationId: 'alertcenter.alerts.batchUndelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BatchUndeleteAlertsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUndeleteAlertsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const getV1beta1SettingsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/settings',
  tags: ['v1beta1'],
  description: 'Returns customer-level settings.',
  operationId: 'alertcenter.getSettings',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})

export const patchV1beta1SettingsRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/settings',
  tags: ['v1beta1'],
  description: 'Updates the customer-level settings.',
  operationId: 'alertcenter.updateSettings',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).',
            in: 'query',
            name: 'customerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.alerts'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.alerts'],
    },
  ],
})
