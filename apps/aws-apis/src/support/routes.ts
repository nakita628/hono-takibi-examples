import { createRoute, z } from '@hono/zod-openapi'

const AttachmentSetIdSchema = z.string().openapi('AttachmentSetId')

const ExpiryTimeSchema = z.string().openapi('ExpiryTime')

const AddAttachmentsToSetResponseSchema = z
  .object({
    attachmentSetId: AttachmentSetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the attachment set. If an <code>attachmentSetId</code> was not specified, a new attachment set is created, and the ID of the set is returned in the response. If an <code>attachmentSetId</code> was specified, the attachments are added to the specified set, if it exists.',
        }),
    ).exactOptional(),
    expiryTime: ExpiryTimeSchema.and(
      z.any().openapi({ description: 'The time and date when the attachment set expires.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.',
    required: [],
  })
  .openapi('AddAttachmentsToSetResponse')

const FileNameSchema = z.string().openapi('FileName')

const DataSchema = z.string().openapi('Data')

const AttachmentSchema = z
  .object({
    fileName: FileNameSchema.and(
      z.any().openapi({ description: 'The name of the attachment file.' }),
    ).exactOptional(),
    data: DataSchema.and(
      z.any().openapi({ description: 'The content of the attachment file.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An attachment to a case communication. The attachment consists of the file name and the content of the file.',
    required: [],
  })
  .openapi('Attachment')

const AttachmentsSchema = z.array(AttachmentSchema).openapi('Attachments')

const AddAttachmentsToSetRequestSchema = z
  .object({
    attachmentSetId: AttachmentSetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the attachment set. If an <code>attachmentSetId</code> is not specified, a new attachment set is created, and the ID of the set is returned in the response. If an <code>attachmentSetId</code> is specified, the attachments are added to the specified set, if it exists.',
        }),
    ).exactOptional(),
    attachments: AttachmentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more attachments to add to the set. You can add up to three attachments per set. The size limit is 5 MB per attachment.</p> <p>In the <code>Attachment</code> object, use the <code>data</code> parameter to specify the contents of the attachment file. In the previous request syntax, the value for <code>data</code> appear as <code>blob</code>, which is represented as a base64-encoded string. The value for <code>fileName</code> is the name of the attachment, such as <code>troubleshoot-screenshot.png</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['attachments'], title: 'AddAttachmentsToSetRequest' })
  .openapi('AddAttachmentsToSetRequest')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const AttachmentSetIdNotFoundSchema = z.any().openapi('AttachmentSetIdNotFound')

const AttachmentSetExpiredSchema = z.any().openapi('AttachmentSetExpired')

const AttachmentSetSizeLimitExceededSchema = z.any().openapi('AttachmentSetSizeLimitExceeded')

const AttachmentLimitExceededSchema = z.any().openapi('AttachmentLimitExceeded')

const ResultSchema = z.boolean().openapi('Result')

const AddCommunicationToCaseResponseSchema = z
  .object({
    result: ResultSchema.and(
      z
        .any()
        .openapi({
          description:
            'True if <a>AddCommunicationToCase</a> succeeds. Otherwise, returns an error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The result of the <a>AddCommunicationToCase</a> operation.',
    required: [],
  })
  .openapi('AddCommunicationToCaseResponse')

const CaseIdSchema = z.string().openapi('CaseId')

const CommunicationBodySchema = z.string().min(1).max(8000).openapi('CommunicationBody')

const CcEmailAddressSchema = z.string().openapi('CcEmailAddress')

const CcEmailAddressListSchema = z
  .array(CcEmailAddressSchema)
  .min(0)
  .max(10)
  .openapi('CcEmailAddressList')

const AddCommunicationToCaseRequestSchema = z
  .object({
    caseId: CaseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> ',
        }),
    ).exactOptional(),
    communicationBody: CommunicationBodySchema.and(
      z
        .any()
        .openapi({ description: 'The body of an email communication to add to the support case.' }),
    ),
    ccEmailAddresses: CcEmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email addresses in the CC line of an email to be added to the support case.',
        }),
    ).exactOptional(),
    attachmentSetId: AttachmentSetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of a set of one or more attachments for the communication to add to the case. Create the set by calling <a>AddAttachmentsToSet</a> ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['communicationBody'], title: 'AddCommunicationToCaseRequest' })
  .openapi('AddCommunicationToCaseRequest')

const CaseIdNotFoundSchema = z.any().openapi('CaseIdNotFound')

const CreateCaseResponseSchema = z
  .object({
    caseId: CaseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support case ID requested or returned in the call. The case ID is an alphanumeric string in the following format: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The support case ID returned by a successful completion of the <a>CreateCase</a> operation.',
    required: [],
  })
  .openapi('CreateCaseResponse')

const SubjectSchema = z.string().openapi('Subject')

const ServiceCodeSchema = z.string().openapi('ServiceCode')

const SeverityCodeSchema = z.string().openapi('SeverityCode')

const CategoryCodeSchema = z.string().openapi('CategoryCode')

const LanguageSchema = z.string().openapi('Language')

const IssueTypeSchema = z.string().openapi('IssueType')

const CreateCaseRequestSchema = z
  .object({
    subject: SubjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'The title of the support case. The title appears in the <b>Subject</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.',
        }),
    ),
    serviceCode: ServiceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the Amazon Web Services service. You can use the <a>DescribeServices</a> operation to get the possible <code>serviceCode</code> values.',
        }),
    ).exactOptional(),
    severityCode: SeverityCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that indicates the urgency of the case. This value determines the response time according to your service level agreement with Amazon Web Services Support. You can use the <a>DescribeSeverityLevels</a> operation to get the possible values for <code>severityCode</code>. </p> <p>For more information, see <a>SeverityLevel</a> and <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a Severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p> <note> <p>The availability of severity levels depends on the support plan for the Amazon Web Services account.</p> </note>',
        }),
    ).exactOptional(),
    categoryCode: CategoryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of problem for the support case. You also use the <a>DescribeServices</a> operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.',
        }),
    ).exactOptional(),
    communicationBody: CommunicationBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'The communication body text that describes the issue. This text appears in the <b>Description</b> field on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.',
        }),
    ),
    ccEmailAddresses: CcEmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support identifies the account that creates the case when you specify your Amazon Web Services credentials in an HTTP POST method or use the <a href="http://aws.amazon.com/tools/">Amazon Web Services SDKs</a>. ',
        }),
    ).exactOptional(),
    language: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.',
        }),
    ).exactOptional(),
    issueType: IssueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The type of issue for the case. You can specify <code>customer-service</code> or <code>technical</code>. If you don't specify a value, the default is <code>technical</code>.",
        }),
    ).exactOptional(),
    attachmentSetId: AttachmentSetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of a set of one or more attachments for the case. Create the set by using the <a>AddAttachmentsToSet</a> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['subject', 'communicationBody'], title: 'CreateCaseRequest' })
  .openapi('CreateCaseRequest')

const CaseCreationLimitExceededSchema = z.any().openapi('CaseCreationLimitExceeded')

const DescribeAttachmentResponseSchema = z
  .object({
    attachment: AttachmentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This object includes the attachment content and file name.</p> <p>In the previous response syntax, the value for the <code>data</code> parameter appears as <code>blob</code>, which is represented as a base64-encoded string. The value for <code>fileName</code> is the name of the attachment, such as <code>troubleshoot-screenshot.png</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.',
    required: [],
  })
  .openapi('DescribeAttachmentResponse')

const AttachmentIdSchema = z.string().openapi('AttachmentId')

const DescribeAttachmentRequestSchema = z
  .object({
    attachmentId: AttachmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the attachment to return. Attachment IDs are returned by the <a>DescribeCommunications</a> operation.',
        }),
    ),
  })
  .openapi({ required: ['attachmentId'], title: 'DescribeAttachmentRequest' })
  .openapi('DescribeAttachmentRequest')

const DescribeAttachmentLimitExceededSchema = z.any().openapi('DescribeAttachmentLimitExceeded')

const AttachmentIdNotFoundSchema = z.any().openapi('AttachmentIdNotFound')

const DisplayIdSchema = z.string().openapi('DisplayId')

const StatusSchema = z.string().openapi('Status')

const SubmittedBySchema = z.string().openapi('SubmittedBy')

const TimeCreatedSchema = z.string().openapi('TimeCreated')

const AttachmentDetailsSchema = z
  .object({
    attachmentId: AttachmentIdSchema.and(
      z.any().openapi({ description: 'The ID of the attachment.' }),
    ).exactOptional(),
    fileName: FileNameSchema.and(
      z.any().openapi({ description: 'The file name of the attachment.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.',
    required: [],
  })
  .openapi('AttachmentDetails')

const AttachmentSetSchema = z.array(AttachmentDetailsSchema).openapi('AttachmentSet')

const CommunicationSchema = z
  .object({
    caseId: CaseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> ',
        }),
    ).exactOptional(),
    body: CommunicationBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the communication between the customer and Amazon Web Services Support.',
        }),
    ).exactOptional(),
    submittedBy: SubmittedBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity of the account that submitted, or responded to, the support case. Customer entries include the role or IAM user as well as the email address. For example, "AdminRole (Role) &lt;janedoe@example.com&gt;. Entries from the Amazon Web Services Support team display "Amazon Web Services," and don\'t show an email address. ',
        }),
    ).exactOptional(),
    timeCreated: TimeCreatedSchema.and(
      z.any().openapi({ description: 'The time the communication was created.' }),
    ).exactOptional(),
    attachmentSet: AttachmentSetSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the attachments to the case communication.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.',
    required: [],
  })
  .openapi('Communication')

const CommunicationListSchema = z.array(CommunicationSchema).openapi('CommunicationList')

const NextTokenSchema = z.string().openapi('NextToken')

const RecentCaseCommunicationsSchema = z
  .object({
    communications: CommunicationListSchema.and(
      z
        .any()
        .openapi({ description: 'The five most recent communications associated with the case.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A resumption point for pagination.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The five most recent communications associated with the case.',
    required: [],
  })
  .openapi('RecentCaseCommunications')

const CaseDetailsSchema = z
  .object({
    caseId: CaseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> ',
        }),
    ).exactOptional(),
    displayId: DisplayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID displayed for the case in the Amazon Web Services Support Center. This is a numeric string.',
        }),
    ).exactOptional(),
    subject: SubjectSchema.and(
      z
        .any()
        .openapi({
          description: 'The subject line for the case in the Amazon Web Services Support Center.',
        }),
    ).exactOptional(),
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the case.</p> <p>Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    serviceCode: ServiceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the Amazon Web Services service. You can get a list of codes and the corresponding service names by calling <a>DescribeServices</a>.',
        }),
    ).exactOptional(),
    categoryCode: CategoryCodeSchema.and(
      z.any().openapi({ description: 'The category of problem for the support case.' }),
    ).exactOptional(),
    severityCode: SeverityCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.',
        }),
    ).exactOptional(),
    submittedBy: SubmittedBySchema.and(
      z.any().openapi({ description: 'The email address of the account that submitted the case.' }),
    ).exactOptional(),
    timeCreated: TimeCreatedSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that the case was created in the Amazon Web Services Support Center.',
        }),
    ).exactOptional(),
    recentCommunications: RecentCaseCommunicationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The five most recent communications between you and Amazon Web Services Support Center, including the IDs of any attachments to the communications. Also includes a <code>nextToken</code> that you can use to retrieve earlier communications.',
        }),
    ).exactOptional(),
    ccEmailAddresses: CcEmailAddressListSchema.and(
      z
        .any()
        .openapi({
          description: 'The email addresses that receive copies of communication about the case.',
        }),
    ).exactOptional(),
    language: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the Amazon Web Services Support Center.</p> </li> <li> <p> <b>language</b> - The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the Amazon Web Services service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the Amazon Web Services Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul>',
    required: [],
  })
  .openapi('CaseDetails')

const CaseListSchema = z.array(CaseDetailsSchema).openapi('CaseList')

const DescribeCasesResponseSchema = z
  .object({
    cases: CaseListSchema.and(
      z.any().openapi({ description: 'The details for the cases that match the request.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A resumption point for pagination.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.',
    required: [],
  })
  .openapi('DescribeCasesResponse')

const CaseIdListSchema = z.array(CaseIdSchema).min(0).max(100).openapi('CaseIdList')

const AfterTimeSchema = z.string().openapi('AfterTime')

const BeforeTimeSchema = z.string().openapi('BeforeTime')

const IncludeResolvedCasesSchema = z.boolean().openapi('IncludeResolvedCases')

const MaxResultsSchema = z.int().min(10).max(100).openapi('MaxResults')

const IncludeCommunicationsSchema = z.boolean().openapi('IncludeCommunications')

const DescribeCasesRequestSchema = z
  .object({
    caseIdList: CaseIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of ID numbers of the support cases you want returned. The maximum number of cases is 100.',
        }),
    ).exactOptional(),
    displayId: DisplayIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID displayed for a case in the Amazon Web Services Support Center user interface.',
        }),
    ).exactOptional(),
    afterTime: AfterTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.',
        }),
    ).exactOptional(),
    beforeTime: BeforeTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.',
        }),
    ).exactOptional(),
    includeResolvedCases: IncludeResolvedCasesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to include resolved support cases in the <code>DescribeCases</code> response. By default, resolved cases aren't included.",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A resumption point for pagination.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to return before paginating.' }),
    ).exactOptional(),
    language: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.',
        }),
    ).exactOptional(),
    includeCommunications: IncludeCommunicationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to include communications in the <code>DescribeCases</code> response. By default, communications are included.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeCasesRequest', required: [] })
  .openapi('DescribeCasesRequest')

const DescribeCommunicationsResponseSchema = z
  .object({
    communications: CommunicationListSchema.and(
      z.any().openapi({ description: 'The communications for the case.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A resumption point for pagination.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The communications returned by the <a>DescribeCommunications</a> operation.',
    required: [],
  })
  .openapi('DescribeCommunicationsResponse')

const DescribeCommunicationsRequestSchema = z
  .object({
    caseId: CaseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> ',
        }),
    ),
    beforeTime: BeforeTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.',
        }),
    ).exactOptional(),
    afterTime: AfterTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'A resumption point for pagination.' }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of results to return before paginating.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['caseId'], title: 'DescribeCommunicationsRequest' })
  .openapi('DescribeCommunicationsRequest')

const ServiceNameSchema = z.string().openapi('ServiceName')

const CategoryNameSchema = z.string().openapi('CategoryName')

const CategorySchema = z
  .object({
    code: CategoryCodeSchema.and(
      z.any().openapi({ description: 'The category code for the support case.' }),
    ).exactOptional(),
    name: CategoryNameSchema.and(
      z.any().openapi({ description: 'The category name for the support case.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each Amazon Web Services service.',
    required: [],
  })
  .openapi('Category')

const CategoryListSchema = z.array(CategorySchema).openapi('CategoryList')

const ServiceSchema = z
  .object({
    code: ServiceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code for an Amazon Web Services service returned by the <a>DescribeServices</a> response. The <code>name</code> element contains the corresponding friendly name.',
        }),
    ).exactOptional(),
    name: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The friendly name for an Amazon Web Services service. The <code>code</code> element contains the corresponding code.',
        }),
    ).exactOptional(),
    categories: CategoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to Amazon Web Services Support when you call <a>CreateCase</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about an Amazon Web Services service returned by the <a>DescribeServices</a> operation.',
    required: [],
  })
  .openapi('Service')

const ServiceListSchema = z.array(ServiceSchema).openapi('ServiceList')

const DescribeServicesResponseSchema = z
  .object({
    services: ServiceListSchema.and(
      z.any().openapi({ description: 'A JSON-formatted list of Amazon Web Services services.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of Amazon Web Services services returned by the <a>DescribeServices</a> operation.',
    required: [],
  })
  .openapi('DescribeServicesResponse')

const ServiceCodeListSchema = z.array(ServiceCodeSchema).min(0).max(100).openapi('ServiceCodeList')

const DescribeServicesRequestSchema = z
  .object({
    serviceCodeList: ServiceCodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A JSON-formatted list of service codes available for Amazon Web Services services.',
        }),
    ).exactOptional(),
    language: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeServicesRequest', required: [] })
  .openapi('DescribeServicesRequest')

const SeverityLevelCodeSchema = z.string().openapi('SeverityLevelCode')

const SeverityLevelNameSchema = z.string().openapi('SeverityLevelName')

const SeverityLevelSchema = z
  .object({
    code: SeverityLevelCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The code for case severity level.</p> <p>Valid values: <code>low</code> | <code>normal</code> | <code>high</code> | <code>urgent</code> | <code>critical</code> </p>',
        }),
    ).exactOptional(),
    name: SeverityLevelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the severity level that corresponds to the severity level code.</p> <note> <p>The values returned by the API are different from the values that appear in the Amazon Web Services Support Center. For example, the API uses the code <code>low</code>, but the name appears as General guidance in Support Center. </p> <p>The following are the API code names and how they appear in the console:</p> <ul> <li> <p> <code>low</code> - General guidance</p> </li> <li> <p> <code>normal</code> - System impaired</p> </li> <li> <p> <code>high</code> - Production system impaired</p> </li> <li> <p> <code>urgent</code> - Production system down</p> </li> <li> <p> <code>critical</code> - Business-critical system down</p> </li> </ul> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>Amazon Web Services Support User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>Amazon Web Services Support User Guide</i>.',
    required: [],
  })
  .openapi('SeverityLevel')

const SeverityLevelsListSchema = z.array(SeverityLevelSchema).openapi('SeverityLevelsList')

const DescribeSeverityLevelsResponseSchema = z
  .object({
    severityLevels: SeverityLevelsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The available severity levels for the support case. Available severity levels are defined by your service level agreement with Amazon Web Services.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.',
    required: [],
  })
  .openapi('DescribeSeverityLevelsResponse')

const DescribeSeverityLevelsRequestSchema = z
  .object({
    language: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSeverityLevelsRequest', required: [] })
  .openapi('DescribeSeverityLevelsRequest')

const StringSchema = z.string().openapi('String')

const LongSchema = z.int().openapi('Long')

const TrustedAdvisorCheckRefreshStatusSchema = z
  .object({
    checkId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Trusted Advisor check.' }),
    ),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the Trusted Advisor check for which a refresh has been requested: </p> <ul> <li> <p> <code>none</code> - The check is not refreshed or the non-success status exceeds the timeout</p> </li> <li> <p> <code>enqueued</code> - The check refresh requests has entered the refresh queue</p> </li> <li> <p> <code>processing</code> - The check refresh request is picked up by the rule processing engine</p> </li> <li> <p> <code>success</code> - The check is successfully refreshed</p> </li> <li> <p> <code>abandoned</code> - The check refresh has failed</p> </li> </ul>',
        }),
    ),
    millisUntilNextRefreshable: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in milliseconds, until the Trusted Advisor check is eligible for refresh.',
        }),
    ),
  })
  .openapi({
    required: ['checkId', 'status', 'millisUntilNextRefreshable'],
    description: 'The refresh status of a Trusted Advisor check.',
  })
  .openapi('TrustedAdvisorCheckRefreshStatus')

const TrustedAdvisorCheckRefreshStatusListSchema = z
  .array(TrustedAdvisorCheckRefreshStatusSchema)
  .openapi('TrustedAdvisorCheckRefreshStatusList')

const DescribeTrustedAdvisorCheckRefreshStatusesResponseSchema = z
  .object({
    statuses: TrustedAdvisorCheckRefreshStatusListSchema.and(
      z
        .any()
        .openapi({ description: 'The refresh status of the specified Trusted Advisor checks.' }),
    ),
  })
  .openapi({
    required: ['statuses'],
    description:
      'The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.',
  })
  .openapi('DescribeTrustedAdvisorCheckRefreshStatusesResponse')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const DescribeTrustedAdvisorCheckRefreshStatusesRequestSchema = z
  .object({
    checkIds: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IDs of the Trusted Advisor checks to get the status.</p> <note> <p>If you specify the check ID of a check that is automatically refreshed, you might see an <code>InvalidParameterValue</code> error.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['checkIds'], title: 'DescribeTrustedAdvisorCheckRefreshStatusesRequest' })
  .openapi('DescribeTrustedAdvisorCheckRefreshStatusesRequest')

const TrustedAdvisorResourcesSummarySchema = z
  .object({
    resourcesProcessed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources that were analyzed by the Trusted Advisor check.',
        }),
    ),
    resourcesFlagged: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources that were flagged (listed) by the Trusted Advisor check.',
        }),
    ),
    resourcesIgnored: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources ignored by Trusted Advisor because information was unavailable.',
        }),
    ),
    resourcesSuppressed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources ignored by Trusted Advisor because they were marked as suppressed by the user.',
        }),
    ),
  })
  .openapi({
    required: ['resourcesProcessed', 'resourcesFlagged', 'resourcesIgnored', 'resourcesSuppressed'],
    description:
      'Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.',
  })
  .openapi('TrustedAdvisorResourcesSummary')

const DoubleSchema = z.float64().openapi('Double')

const TrustedAdvisorCostOptimizingSummarySchema = z
  .object({
    estimatedMonthlySavings: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated monthly savings that might be realized if the recommended operations are taken.',
        }),
    ),
    estimatedPercentMonthlySavings: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated percentage of savings that might be realized if the recommended operations are taken.',
        }),
    ),
  })
  .openapi({
    required: ['estimatedMonthlySavings', 'estimatedPercentMonthlySavings'],
    description:
      'The estimated cost savings that might be realized if the recommended operations are taken.',
  })
  .openapi('TrustedAdvisorCostOptimizingSummary')

const TrustedAdvisorCategorySpecificSummarySchema = z
  .object({
    costOptimizing: TrustedAdvisorCostOptimizingSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The container for summary information that relates to the category of the Trusted Advisor check.',
    required: [],
  })
  .openapi('TrustedAdvisorCategorySpecificSummary')

const BooleanSchema = z.boolean().openapi('Boolean')

const TrustedAdvisorResourceDetailSchema = z
  .object({
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The status code for the resource identified in the Trusted Advisor check.',
        }),
    ),
    region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services Region in which the identified resource is located.',
        }),
    ).exactOptional(),
    resourceId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the identified resource.' }),
    ),
    isSuppressed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the Amazon Web Services resource was ignored by Trusted Advisor because it was marked as suppressed by the user.',
        }),
    ).exactOptional(),
    metadata: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information about the identified resource. The exact metadata and its order can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a> object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data.',
        }),
    ),
  })
  .openapi({
    required: ['status', 'resourceId', 'metadata'],
    description: 'Contains information about a resource identified by a Trusted Advisor check.',
  })
  .openapi('TrustedAdvisorResourceDetail')

const TrustedAdvisorResourceDetailListSchema = z
  .array(TrustedAdvisorResourceDetailSchema)
  .openapi('TrustedAdvisorResourceDetailList')

const TrustedAdvisorCheckResultSchema = z
  .object({
    checkId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Trusted Advisor check.' }),
    ),
    timestamp: StringSchema.and(
      z.any().openapi({ description: 'The time of the last refresh of the check.' }),
    ),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".',
        }),
    ),
    resourcesSummary: TrustedAdvisorResourcesSummarySchema,
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.',
        }),
    ),
    flaggedResources: TrustedAdvisorResourceDetailListSchema.and(
      z
        .any()
        .openapi({ description: 'The details about each resource listed in the check result.' }),
    ),
  })
  .openapi({
    required: [
      'checkId',
      'timestamp',
      'status',
      'resourcesSummary',
      'categorySpecificSummary',
      'flaggedResources',
    ],
    description:
      'The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.',
  })
  .openapi('TrustedAdvisorCheckResult')

const DescribeTrustedAdvisorCheckResultResponseSchema = z
  .object({
    result: TrustedAdvisorCheckResultSchema.and(
      z.any().openapi({ description: 'The detailed results of the Trusted Advisor check.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.',
    required: [],
  })
  .openapi('DescribeTrustedAdvisorCheckResultResponse')

const DescribeTrustedAdvisorCheckResultRequestSchema = z
  .object({
    checkId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Trusted Advisor check.' }),
    ),
    language: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ISO 639-1 code for the language that you want your check results to appear in.</p> <p>The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:</p> <ul> <li> <p>Chinese, Simplified - <code>zh</code> </p> </li> <li> <p>Chinese, Traditional - <code>zh_TW</code> </p> </li> <li> <p>English - <code>en</code> </p> </li> <li> <p>French - <code>fr</code> </p> </li> <li> <p>German - <code>de</code> </p> </li> <li> <p>Indonesian - <code>id</code> </p> </li> <li> <p>Italian - <code>it</code> </p> </li> <li> <p>Japanese - <code>ja</code> </p> </li> <li> <p>Korean - <code>ko</code> </p> </li> <li> <p>Portuguese, Brazilian - <code>pt_BR</code> </p> </li> <li> <p>Spanish - <code>es</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['checkId'],
    title: 'DescribeTrustedAdvisorCheckResultRequest',
    description: '<p/>',
  })
  .openapi('DescribeTrustedAdvisorCheckResultRequest')

const TrustedAdvisorCheckSummarySchema = z
  .object({
    checkId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Trusted Advisor check.' }),
    ),
    timestamp: StringSchema.and(
      z.any().openapi({ description: 'The time of the last refresh of the check.' }),
    ),
    status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".',
        }),
    ),
    hasFlaggedResources: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the Trusted Advisor check has flagged resources.',
        }),
    ).exactOptional(),
    resourcesSummary: TrustedAdvisorResourcesSummarySchema,
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.',
        }),
    ),
  })
  .openapi({
    required: ['checkId', 'timestamp', 'status', 'resourcesSummary', 'categorySpecificSummary'],
    description:
      'A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.',
  })
  .openapi('TrustedAdvisorCheckSummary')

const TrustedAdvisorCheckSummaryListSchema = z
  .array(TrustedAdvisorCheckSummarySchema)
  .openapi('TrustedAdvisorCheckSummaryList')

const DescribeTrustedAdvisorCheckSummariesResponseSchema = z
  .object({
    summaries: TrustedAdvisorCheckSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'The summary information for the requested Trusted Advisor checks.',
        }),
    ),
  })
  .openapi({
    required: ['summaries'],
    description:
      'The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.',
  })
  .openapi('DescribeTrustedAdvisorCheckSummariesResponse')

const DescribeTrustedAdvisorCheckSummariesRequestSchema = z
  .object({
    checkIds: StringListSchema.and(
      z.any().openapi({ description: 'The IDs of the Trusted Advisor checks.' }),
    ),
  })
  .openapi({ required: ['checkIds'], title: 'DescribeTrustedAdvisorCheckSummariesRequest' })
  .openapi('DescribeTrustedAdvisorCheckSummariesRequest')

const TrustedAdvisorCheckDescriptionSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Trusted Advisor check.' }),
    ),
    name: StringSchema.and(
      z.any().openapi({ description: 'The display name for the Trusted Advisor check.' }),
    ),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the Trusted Advisor check, which includes the alert criteria and recommended operations (contains HTML markup).',
        }),
    ),
    category: StringSchema.and(
      z.any().openapi({ description: 'The category of the Trusted Advisor check.' }),
    ),
    metadata: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a> for the check. <b>Metadata</b> contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. ',
        }),
    ),
  })
  .openapi({
    required: ['id', 'name', 'description', 'category', 'metadata'],
    description: 'The description and metadata for a Trusted Advisor check.',
  })
  .openapi('TrustedAdvisorCheckDescription')

const TrustedAdvisorCheckListSchema = z
  .array(TrustedAdvisorCheckDescriptionSchema)
  .openapi('TrustedAdvisorCheckList')

const DescribeTrustedAdvisorChecksResponseSchema = z
  .object({
    checks: TrustedAdvisorCheckListSchema.and(
      z.any().openapi({ description: 'Information about all available Trusted Advisor checks.' }),
    ),
  })
  .openapi({
    required: ['checks'],
    description:
      'Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.',
  })
  .openapi('DescribeTrustedAdvisorChecksResponse')

const DescribeTrustedAdvisorChecksRequestSchema = z
  .object({
    language: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ISO 639-1 code for the language that you want your checks to appear in.</p> <p>The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:</p> <ul> <li> <p>Chinese, Simplified - <code>zh</code> </p> </li> <li> <p>Chinese, Traditional - <code>zh_TW</code> </p> </li> <li> <p>English - <code>en</code> </p> </li> <li> <p>French - <code>fr</code> </p> </li> <li> <p>German - <code>de</code> </p> </li> <li> <p>Indonesian - <code>id</code> </p> </li> <li> <p>Italian - <code>it</code> </p> </li> <li> <p>Japanese - <code>ja</code> </p> </li> <li> <p>Korean - <code>ko</code> </p> </li> <li> <p>Portuguese, Brazilian - <code>pt_BR</code> </p> </li> <li> <p>Spanish - <code>es</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['language'], title: 'DescribeTrustedAdvisorChecksRequest' })
  .openapi('DescribeTrustedAdvisorChecksRequest')

const RefreshTrustedAdvisorCheckResponseSchema = z
  .object({
    status: TrustedAdvisorCheckRefreshStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current refresh status for a check, including the amount of time until the check is eligible for refresh.',
        }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'The current refresh status of a Trusted Advisor check.',
  })
  .openapi('RefreshTrustedAdvisorCheckResponse')

const RefreshTrustedAdvisorCheckRequestSchema = z
  .object({
    checkId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the Trusted Advisor check to refresh.</p> <note> <p>Specifying the check ID of a check that is automatically refreshed causes an <code>InvalidParameterValue</code> error.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['checkId'],
    title: 'RefreshTrustedAdvisorCheckRequest',
    description: '<p/>',
  })
  .openapi('RefreshTrustedAdvisorCheckRequest')

const CaseStatusSchema = z.string().openapi('CaseStatus')

const ResolveCaseResponseSchema = z
  .object({
    initialCaseStatus: CaseStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the case when the <a>ResolveCase</a> request was sent.',
        }),
    ).exactOptional(),
    finalCaseStatus: CaseStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the case after the <a>ResolveCase</a> request was processed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The status of the case returned by the <a>ResolveCase</a> operation.',
    required: [],
  })
  .openapi('ResolveCaseResponse')

const ResolveCaseRequestSchema = z
  .object({
    caseId: CaseIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ResolveCaseRequest', required: [] })
  .openapi('ResolveCaseRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetAWSSupport20130415AddAttachmentsToSetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet',
  description:
    '<p>Adds one or more attachments to an attachment set. </p> <p>An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it\'s created. The <code>expiryTime</code> returned in the response is when the set expires. </p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'AddAttachmentsToSet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.AddAttachmentsToSet')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.AddAttachmentsToSet'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddAttachmentsToSetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddAttachmentsToSetResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'AttachmentSetIdNotFound',
      content: { 'application/json': { schema: AttachmentSetIdNotFoundSchema } },
    },
    482: {
      description: 'AttachmentSetExpired',
      content: { 'application/json': { schema: AttachmentSetExpiredSchema } },
    },
    483: {
      description: 'AttachmentSetSizeLimitExceeded',
      content: { 'application/json': { schema: AttachmentSetSizeLimitExceededSchema } },
    },
    484: {
      description: 'AttachmentLimitExceeded',
      content: { 'application/json': { schema: AttachmentLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415AddCommunicationToCaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase',
  description:
    '<p>Adds additional customer communication to an Amazon Web Services Support case. Use the <code>caseId</code> parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the <code>ccEmailAddresses</code> parameter. The <code>communicationBody</code> value contains the text of the communication.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'AddCommunicationToCase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.AddCommunicationToCase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.AddCommunicationToCase'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddCommunicationToCaseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddCommunicationToCaseResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'CaseIdNotFound',
      content: { 'application/json': { schema: CaseIdNotFoundSchema } },
    },
    482: {
      description: 'AttachmentSetIdNotFound',
      content: { 'application/json': { schema: AttachmentSetIdNotFoundSchema } },
    },
    483: {
      description: 'AttachmentSetExpired',
      content: { 'application/json': { schema: AttachmentSetExpiredSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415CreateCaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.CreateCase',
  description:
    '<p>Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> <p>The Amazon Web Services Support API doesn\'t support requesting service limit increases. You can submit a service limit increase in the following ways: </p> <ul> <li> <p>Submit a request from the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p> </li> </ul> <p>A successful <code>CreateCase</code> request returns an Amazon Web Services Support case number. You can use the <a>DescribeCases</a> operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or attachments to an existing case.</p> <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in the <a href="https://console.aws.amazon.com/support">Amazon Web Services Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'CreateCase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.CreateCase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.CreateCase'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateCaseRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCaseResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'CaseCreationLimitExceeded',
      content: { 'application/json': { schema: CaseCreationLimitExceededSchema } },
    },
    482: {
      description: 'AttachmentSetIdNotFound',
      content: { 'application/json': { schema: AttachmentSetIdNotFoundSchema } },
    },
    483: {
      description: 'AttachmentSetExpired',
      content: { 'application/json': { schema: AttachmentSetExpiredSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeAttachmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeAttachment',
  description:
    '<p>Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'DescribeAttachment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeAttachment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.DescribeAttachment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAttachmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAttachmentResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'DescribeAttachmentLimitExceeded',
      content: { 'application/json': { schema: DescribeAttachmentLimitExceededSchema } },
    },
    482: {
      description: 'AttachmentIdNotFound',
      content: { 'application/json': { schema: AttachmentIdNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeCasesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeCases',
  description:
    '<p>Returns a list of cases that you specify by passing one or more case IDs. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by date. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> parameters to specify how much information to return.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'DescribeCases',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeCases')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.DescribeCases'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCasesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCasesResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'CaseIdNotFound',
      content: { 'application/json': { schema: CaseIdNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeCommunicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeCommunications',
  description:
    '<p>Returns communications and attachments for one or more support cases. Use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a specific case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the results. Set <code>maxResults</code> to the number of cases that you want to display on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'DescribeCommunications',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeCommunications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.DescribeCommunications'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCommunicationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCommunicationsResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'CaseIdNotFound',
      content: { 'application/json': { schema: CaseIdNotFoundSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeServices',
  description:
    '<p>Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your <a>CreateCase</a> requests. Each Amazon Web Services service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that appear in the <b>Service</b> and <b>Category</b> lists on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields don\'t necessarily match the service codes and categories returned by the <code>DescribeServices</code> operation. Always use the service codes and categories that the <code>DescribeServices</code> operation returns, so that you have the most recent set of service and category codes.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'DescribeServices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.DescribeServices'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeServicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServicesResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels',
  description:
    '<p>Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type that you include for a <a>CreateCase</a> request.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'DescribeSeverityLevels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeSeverityLevels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.DescribeSeverityLevels'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSeverityLevelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSeverityLevelsResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckRefreshStatusesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses',
    description:
      '<p>Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically, and you can\'t return their refresh statuses by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you call this operation for these checks, you might see an <code>InvalidParameterValue</code> error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don\'t support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>',
    operationId: 'DescribeTrustedAdvisorCheckRefreshStatuses',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeTrustedAdvisorCheckRefreshStatusesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeTrustedAdvisorCheckRefreshStatusesResponseSchema },
        },
      },
      480: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckResultRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult',
  description:
    '<p>Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status</b> - The alert status of the check can be <code>ok</code> (green), <code>warning</code> (yellow), <code>error</code> (red), or <code>not_available</code>.</p> </li> <li> <p> <b>timestamp</b> - The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId</b> - The unique identifier for the check.</p> </li> </ul> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don\'t support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>',
  operationId: 'DescribeTrustedAdvisorCheckResult',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeTrustedAdvisorCheckResult')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSSupport_20130415.DescribeTrustedAdvisorCheckResult'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTrustedAdvisorCheckResultRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTrustedAdvisorCheckResultResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorCheckSummariesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries',
    description:
      '<p>Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don\'t support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>',
    operationId: 'DescribeTrustedAdvisorCheckSummaries',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeTrustedAdvisorCheckSummariesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeTrustedAdvisorCheckSummariesResponseSchema },
        },
      },
      480: {
        description: 'InternalServerError',
        content: { 'application/json': { schema: InternalServerErrorSchema } },
      },
    },
  })

export const postXAmzTargetAWSSupport20130415DescribeTrustedAdvisorChecksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks',
  description:
    '<p>Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code.</p> <p>The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the Amazon Web Services Region to us-east-1.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> <li> <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don\'t support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>',
  operationId: 'DescribeTrustedAdvisorChecks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.DescribeTrustedAdvisorChecks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.DescribeTrustedAdvisorChecks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeTrustedAdvisorChecksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTrustedAdvisorChecksResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415RefreshTrustedAdvisorCheckRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck',
  description:
    '<p>Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically. If you call the <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see the <code>InvalidParameterValue</code> error.</p> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don\'t support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>',
  operationId: 'RefreshTrustedAdvisorCheck',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.RefreshTrustedAdvisorCheck')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.RefreshTrustedAdvisorCheck'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RefreshTrustedAdvisorCheckRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RefreshTrustedAdvisorCheckResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetAWSSupport20130415ResolveCaseRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSSupport_20130415.ResolveCase',
  description:
    '<p>Resolves a support case. This operation takes a <code>caseId</code> and returns the initial and final state of the case.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn\'t have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>',
  operationId: 'ResolveCase',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSSupport_20130415.ResolveCase')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSSupport_20130415.ResolveCase'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResolveCaseRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResolveCaseResponseSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    481: {
      description: 'CaseIdNotFound',
      content: { 'application/json': { schema: CaseIdNotFoundSchema } },
    },
  },
})
